import { ensureLeadTables, normalizeLeadPayload } from "./_leads.mjs";
import { getSql, json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function processLeadWebhook(event, sourceOverride = "") {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  try {
    const sql = getSql();
    await ensureLeadTables(sql);

    const source = sourceOverride || event.queryStringParameters?.source || "generico";
    const payload = parseBody(event);
    const lead = normalizeLeadPayload({ ...payload, canal_entrada: payload.canal_entrada || source });

    const inboxRows = await sql`
      insert into public.lead_inbox (source, payload, status)
      values (${source}, ${JSON.stringify(payload)}::jsonb, 'Recebido')
      returning *
    `;

    let createdLead = null;
    if (lead.nome || lead.telefone || lead.email || lead.instagram) {
      const leadRows = await sql`
        insert into public.leads (nome, telefone, email, instagram, origem_lead, canal_entrada, mensagem_inicial, interesse, status, data_entrada, data_visita, responsavel, observacoes, historico)
        values (${lead.nome || "Lead sem nome"}, ${lead.telefone}, ${lead.email}, ${lead.instagram}, ${lead.origem_lead}, ${lead.canal_entrada}, ${lead.mensagem_inicial}, ${lead.interesse}, ${lead.status}, ${lead.data_entrada}, ${lead.data_visita}, ${lead.responsavel}, ${lead.observacoes}, ${JSON.stringify([{ at: new Date().toISOString(), event: `Recebido via webhook ${source}` }])}::jsonb)
        returning *
      `;
      createdLead = leadRows[0];
      await sql`update public.lead_inbox set lead_id = ${createdLead.id}, status = 'Convertido', converted_at = now() where id = ${inboxRows[0].id}`;
    }

    return json(202, {
      ok: true,
      source,
      inbox: inboxRows[0],
      lead: createdLead,
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}

export async function handler(event) {
  return processLeadWebhook(event);
}
