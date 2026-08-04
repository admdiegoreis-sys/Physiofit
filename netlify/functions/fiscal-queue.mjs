import crypto from "node:crypto";
import { getSql, json } from "./_db.mjs";
import { ensureFiscalTables, logFiscalEvent } from "./_fiscal.mjs";
import { verifyToken } from "./_auth.mjs";
import { emitirNfse, cancelarNfse } from "./_fiscal-provider.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function requireUser(event) {
  const token = event.headers.authorization?.replace(/^Bearer\s+/i, "");
  const masterKey = process.env.PHYSIOFIT_MASTER_KEY;
  if (masterKey && token === `master:${masterKey}`) {
    return { id: "admin", name: "Administrador", role: "Administrador" };
  }
  const user = verifyToken(token);
  if (!user) {
    const err = new Error("Sessão expirada. Faça login novamente.");
    err.statusCode = 401;
    throw err;
  }
  return user;
}

async function loadFiscalConfig(sql) {
  const rows = await sql`select * from public.fiscal_config where id = 'default' limit 1`;
  const config = rows[0] || {};
  const certRows = await sql`select id, valido_ate from public.fiscal_certificates where ativo = true order by created_at desc limit 1`;
  return { ...config, certificateReady: certRows.length > 0, certificateExpiresAt: certRows[0]?.valido_ate || null };
}

async function nextRps(sql) {
  const rows = await sql`
    update public.fiscal_config
    set proximo_rps = proximo_rps + 1, updated_at = now()
    where id = 'default'
    returning proximo_rps - 1 as rps, serie_rps
  `;
  return { numero: rows[0]?.rps ?? 1, serie: rows[0]?.serie_rps || "A" };
}

async function processQueueItem(sql, queueItem) {
  const config = await loadFiscalConfig(sql);
  const { numero: rpsNumero, serie } = await nextRps(sql);
  const rps = `${serie}-${String(rpsNumero).padStart(6, "0")}`;

  await sql`update public.fiscal_queue set status = 'Em Processamento', updated_at = now() where id = ${queueItem.id}`;
  await logFiscalEvent(sql, { queueId: queueItem.id, evento: "Processamento iniciado", detalhe: `RPS ${rps}` });

  const result = await emitirNfse(config, { ...queueItem.payload, rps });

  if (result.ok) {
    const historyId = crypto.randomUUID();
    await sql`
      insert into public.fiscal_invoices_history (id, queue_id, monthly_id, student_id, rps, numero, status, valor, competencia, protocolo, codigo_verificacao, xml_enviado, xml_retorno, pdf_url)
      values (${historyId}, ${queueItem.id}, ${queueItem.monthly_id}, ${queueItem.student_id}, ${rps}, ${result.numero || null}, 'Emitida', ${queueItem.payload.amount || null}, ${queueItem.payload.competenceDate || null}, ${result.protocolo || null}, ${result.codigoVerificacao || null}, ${result.xmlEnviado || null}, ${result.xmlRetorno || null}, ${result.pdfUrl || null})
    `;
    await sql`update public.fiscal_queue set status = 'Emitida', invoice_id = ${historyId}, protocolo = ${result.protocolo || null}, updated_at = now() where id = ${queueItem.id}`;
    await logFiscalEvent(sql, { queueId: queueItem.id, evento: "NFS-e emitida", detalhe: result.numero || "" });
  } else {
    await sql`
      update public.fiscal_queue
      set status = 'Erro', erro_mensagem = ${result.motivo || "Falha ao emitir NFS-e."}, tentativas = tentativas + 1, updated_at = now()
      where id = ${queueItem.id}
    `;
    await logFiscalEvent(sql, { queueId: queueItem.id, evento: "Erro na emissão", detalhe: result.motivo || "" });
  }

  const rows = await sql`select * from public.fiscal_queue where id = ${queueItem.id} limit 1`;
  return rows[0];
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensureFiscalTables(sql);

    if (event.httpMethod === "GET") {
      requireUser(event);
      const q = event.queryStringParameters || {};
      const rows = await sql`
        select q.*, h.rps as invoice_rps, h.numero as invoice_numero, h.codigo_verificacao, h.xml_enviado, h.xml_retorno, h.pdf_url, h.motivo_cancelamento
        from public.fiscal_queue q
        left join public.fiscal_invoices_history h on h.id = q.invoice_id
        order by q.created_at desc
        limit 500
      `;
      const filtered = rows.filter((r) => {
        if (q.status && q.status !== "all" && r.status !== q.status) return false;
        if (q.studentId && r.student_id !== q.studentId) return false;
        if (q.term) {
          const term = q.term.toLowerCase();
          const haystack = `${r.payload?.patient || ""} ${r.payload?.cpf || ""} ${r.invoice_numero || ""} ${r.status}`.toLowerCase();
          if (!haystack.includes(term)) return false;
        }
        return true;
      });
      return json(200, filtered);
    }

    if (event.httpMethod === "POST") {
      const body = parseBody(event);
      const action = body.action;

      if (action === "enqueue") {
        const existing = await sql`select id from public.fiscal_queue where monthly_id = ${body.monthlyId} and status not in ('Cancelada', 'Erro') limit 1`;
        if (existing.length) return json(200, existing[0]);
        const id = crypto.randomUUID();
        await sql`
          insert into public.fiscal_queue (id, monthly_id, student_id, status, payload)
          values (${id}, ${body.monthlyId}, ${body.studentId || null}, 'Pendente', ${JSON.stringify(body.payload || {})}::jsonb)
        `;
        await logFiscalEvent(sql, { queueId: id, evento: "Entrada na fila", detalhe: "Pagamento confirmado" });
        const rows = await sql`select * from public.fiscal_queue where id = ${id} limit 1`;
        return json(201, rows[0]);
      }

      requireUser(event);

      if (action === "emit" || action === "emit-batch") {
        const ids = action === "emit" ? [body.queueId] : body.queueIds || [];
        const results = [];
        for (const id of ids) {
          const rows = await sql`select * from public.fiscal_queue where id = ${id} limit 1`;
          if (!rows[0]) continue;
          results.push(await processQueueItem(sql, rows[0]));
        }
        return json(200, results);
      }

      if (action === "resend") {
        await sql`update public.fiscal_queue set status = 'Pendente', erro_mensagem = null, updated_at = now() where id = ${body.queueId}`;
        const rows = await sql`select * from public.fiscal_queue where id = ${body.queueId} limit 1`;
        const result = await processQueueItem(sql, rows[0]);
        return json(200, result);
      }

      if (action === "consult") {
        return json(200, { ok: false, motivo: "Consulta ao webservice nacional ainda não configurada." });
      }

      if (action === "cancel") {
        const rows = await sql`select * from public.fiscal_queue where id = ${body.queueId} limit 1`;
        const queueItem = rows[0];
        if (!queueItem) return json(404, { error: "Item não encontrado." });
        const config = await loadFiscalConfig(sql);
        const result = await cancelarNfse(config, queueItem.protocolo, body.motivo || "Cancelamento solicitado pelo usuário.");
        if (result.ok) {
          await sql`update public.fiscal_queue set status = 'Cancelada', updated_at = now() where id = ${body.queueId}`;
          if (queueItem.invoice_id) {
            await sql`update public.fiscal_invoices_history set status = 'Cancelada', motivo_cancelamento = ${body.motivo || ""} where id = ${queueItem.invoice_id}`;
          }
          await logFiscalEvent(sql, { queueId: body.queueId, evento: "NFS-e cancelada", detalhe: body.motivo || "" });
        } else {
          await logFiscalEvent(sql, { queueId: body.queueId, evento: "Falha ao cancelar", detalhe: result.motivo || "" });
        }
        return json(result.ok ? 200 : 422, result);
      }

      return json(400, { error: "Ação inválida." });
    }

    return json(405, { error: "Método não permitido." });
  } catch (error) {
    console.error("fiscal-queue error:", error.message);
    return json(error.statusCode || 500, { error: error.message });
  }
}
