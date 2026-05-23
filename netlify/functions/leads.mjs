import { ensureLeadTables, normalizeLeadPayload } from "./_leads.mjs";
import { getSql, json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensureLeadTables(sql);
    const id = event.queryStringParameters?.id;

    if (event.httpMethod === "GET") {
      const rows = id
        ? await sql`select * from public.leads where id = ${id} limit 1`
        : await sql`select * from public.leads order by data_entrada desc, created_at desc limit 500`;
      return json(200, id ? rows[0] || null : rows);
    }

    if (event.httpMethod === "POST") {
      const lead = normalizeLeadPayload(parseBody(event));
      if (!lead.nome) return json(400, { error: "Nome do lead e obrigatorio." });

      const rows = await sql`
        insert into public.leads (nome, telefone, email, instagram, origem_lead, canal_entrada, mensagem_inicial, interesse, status, data_entrada, data_visita, responsavel, observacoes, historico)
        values (${lead.nome}, ${lead.telefone}, ${lead.email}, ${lead.instagram}, ${lead.origem_lead}, ${lead.canal_entrada}, ${lead.mensagem_inicial}, ${lead.interesse}, ${lead.status}, ${lead.data_entrada}, ${lead.data_visita}, ${lead.responsavel}, ${lead.observacoes}, ${JSON.stringify([{ at: new Date().toISOString(), event: "Lead criado" }])}::jsonb)
        returning *
      `;
      return json(201, rows[0]);
    }

    if (event.httpMethod === "PUT" || event.httpMethod === "PATCH") {
      if (!id) return json(400, { error: "ID do lead e obrigatorio." });
      const lead = normalizeLeadPayload(parseBody(event));

      const rows = await sql`
        update public.leads
        set
          nome = ${lead.nome},
          telefone = ${lead.telefone},
          email = ${lead.email},
          instagram = ${lead.instagram},
          origem_lead = ${lead.origem_lead},
          canal_entrada = ${lead.canal_entrada},
          mensagem_inicial = ${lead.mensagem_inicial},
          interesse = ${lead.interesse},
          status = ${lead.status},
          data_entrada = ${lead.data_entrada},
          data_visita = ${lead.data_visita},
          responsavel = ${lead.responsavel},
          observacoes = ${lead.observacoes},
          historico = coalesce(historico, '[]'::jsonb) || ${JSON.stringify([{ at: new Date().toISOString(), event: "Lead atualizado", status: lead.status }])}::jsonb,
          updated_at = now()
        where id = ${id}
        returning *
      `;
      return json(200, rows[0] || null);
    }

    if (event.httpMethod === "DELETE") {
      if (!id) return json(400, { error: "ID do lead e obrigatorio." });
      await sql`update public.lead_inbox set lead_id = null, status = 'Recebido' where lead_id = ${id}`;
      const rows = await sql`delete from public.leads where id = ${id} returning id`;
      return json(200, { ok: true, deleted: rows[0]?.id || null });
    }

    return json(405, { error: "Metodo nao permitido." });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
