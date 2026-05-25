import { ensureLeadTables, normalizeLeadPayload, phoneDigits } from "./_leads.mjs";
import { getSql, json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

async function findStudentByPhone(sql, phone) {
  const digits = phoneDigits(phone);
  if (!digits) return null;
  const rows = await sql`
    select id, name, phone
    from public.students
    where regexp_replace(coalesce(phone, ''), '\\D', '', 'g') = ${digits}
       or regexp_replace(coalesce(phone, ''), '\\D', '', 'g') = ${digits.replace(/^55/, "")}
    order by updated_at desc nulls last, created_at desc
    limit 1
  `;
  return rows[0] || null;
}

async function findLeadByPhone(sql, phone) {
  const digits = phoneDigits(phone);
  if (!digits) return null;
  const rows = await sql`
    select id, nome, telefone, status, historico
    from public.leads
    where regexp_replace(coalesce(telefone, ''), '\\D', '', 'g') = ${digits}
       or regexp_replace(coalesce(telefone, ''), '\\D', '', 'g') = ${digits.replace(/^55/, "")}
    order by updated_at desc nulls last, created_at desc
    limit 1
  `;
  return rows[0] || null;
}

async function saveWhatsappInteraction(sql, { source, lead, payload, classification, studentId = null, leadId = null }) {
  const rows = await sql`
    insert into public.whatsapp_interactions (source, phone, contact_name, message, classification, student_id, lead_id, payload)
    values (${source}, ${lead.telefone || ""}, ${lead.nome || ""}, ${lead.mensagem_inicial || ""}, ${classification}, ${studentId}, ${leadId}, ${JSON.stringify(payload)}::jsonb)
    returning *
  `;
  return rows[0];
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
    const inboxStatus = lead.skip ? "Ignorado" : "Recebido";

    const inboxRows = await sql`
      insert into public.lead_inbox (source, payload, status)
      values (${source}, ${JSON.stringify(payload)}::jsonb, ${inboxStatus})
      returning *
    `;

    let createdLead = null;
    let existingLead = null;
    let existingStudent = null;
    let interaction = null;
    let classification = lead.skip ? "Ignorado" : "Mensagem sem contato";

    if (!lead.skip && (lead.telefone || lead.email || lead.instagram || lead.nome)) {
      existingStudent = await findStudentByPhone(sql, lead.telefone);
      if (existingStudent) {
        classification = "Aluno existente";
        interaction = await saveWhatsappInteraction(sql, {
          source,
          lead,
          payload,
          classification,
          studentId: existingStudent.id,
        });
        await sql`update public.lead_inbox set status = 'Aluno existente' where id = ${inboxRows[0].id}`;
      } else {
        existingLead = await findLeadByPhone(sql, lead.telefone);
      }
    }

    if (!lead.skip && !existingStudent && existingLead) {
      classification = "Lead existente";
      const historyItem = {
        at: new Date().toISOString(),
        event: `Mensagem recebida via ${source}`,
        message: lead.mensagem_inicial || "",
      };
      const leadRows = await sql`
        update public.leads
        set
          historico = coalesce(historico, '[]'::jsonb) || ${JSON.stringify([historyItem])}::jsonb,
          observacoes = trim(coalesce(observacoes, '') || E'\n' || ${lead.mensagem_inicial || ""}),
          updated_at = now()
        where id = ${existingLead.id}
        returning *
      `;
      existingLead = leadRows[0] || existingLead;
      interaction = await saveWhatsappInteraction(sql, {
        source,
        lead,
        payload,
        classification,
        leadId: existingLead.id,
      });
      await sql`update public.lead_inbox set lead_id = ${existingLead.id}, status = 'Lead existente' where id = ${inboxRows[0].id}`;
    }

    if (!lead.skip && !existingStudent && !existingLead && (lead.nome || lead.telefone || lead.email || lead.instagram)) {
      classification = "Novo lead";
      const leadRows = await sql`
        insert into public.leads (nome, telefone, email, instagram, origem_lead, canal_entrada, mensagem_inicial, interesse, status, data_entrada, data_visita, responsavel, observacoes, historico)
        values (${lead.nome || "Lead sem nome"}, ${lead.telefone}, ${lead.email}, ${lead.instagram}, ${lead.origem_lead}, ${lead.canal_entrada}, ${lead.mensagem_inicial}, ${lead.interesse}, ${lead.status}, ${lead.data_entrada}, ${lead.data_visita}, ${lead.responsavel}, ${lead.observacoes}, ${JSON.stringify([{ at: new Date().toISOString(), event: `Recebido via webhook ${source}` }])}::jsonb)
        returning *
      `;
      createdLead = leadRows[0];
      interaction = await saveWhatsappInteraction(sql, {
        source,
        lead,
        payload,
        classification,
        leadId: createdLead.id,
      });
      await sql`update public.lead_inbox set lead_id = ${createdLead.id}, status = 'Convertido', converted_at = now() where id = ${inboxRows[0].id}`;
    }

    return json(202, {
      ok: true,
      source,
      skipped: Boolean(lead.skip),
      skipReason: lead.skipReason || "",
      classification,
      inbox: inboxRows[0],
      interaction,
      student: existingStudent,
      lead: createdLead || existingLead,
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}

export async function handler(event) {
  return processLeadWebhook(event);
}
