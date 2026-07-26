import { getSql, json } from "./_db.mjs";
import { ensurePrecadastroTable } from "./_precadastro.mjs";
import { phoneMatchVariants } from "./_leads.mjs";

async function findStudentByPhone(sql, phone) {
  const variants = phoneMatchVariants(phone);
  if (!variants.length) return null;
  const rows = await sql`
    select id, name, phone
    from public.students
    where regexp_replace(coalesce(phone, ''), '\\D', '', 'g') = ANY(${variants})
    order by updated_at desc nulls last, created_at desc
    limit 1
  `;
  return rows[0] || null;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensurePrecadastroTable(sql);
    const token = event.queryStringParameters?.token || "";

    // Operador autenticado gera um novo link a partir do CRM/cadastro de cliente.
    if (event.httpMethod === "POST" && !token) {
      const body = JSON.parse(event.body || "{}");
      const rows = await sql`
        insert into public.precadastro_links (lead_id, name, phone)
        values (${body.leadId || null}, ${body.name || ""}, ${body.phone || ""})
        returning token
      `;
      return json(200, { token: rows[0].token });
    }

    // App autenticado lista submissoes preenchidas ainda nao aplicadas ao cadastro local.
    if (event.httpMethod === "GET" && !token) {
      const status = event.queryStringParameters?.status || "Preenchido";
      const rows = await sql`select * from public.precadastro_links where status = ${status} order by submitted_at asc`;
      return json(200, rows);
    }

    if (!token) return json(400, { error: "Token obrigatorio." });

    // Pagina publica consulta os dados do link + verifica duplicidade de telefone.
    if (event.httpMethod === "GET") {
      const rows = await sql`select * from public.precadastro_links where token = ${token} limit 1`;
      const link = rows[0];
      if (!link) return json(404, { error: "Link invalido ou expirado." });
      const duplicate = link.phone ? await findStudentByPhone(sql, link.phone) : null;
      return json(200, {
        name: link.name,
        phone: link.phone,
        status: link.status,
        duplicateStudent: duplicate ? { name: duplicate.name } : null,
      });
    }

    // Cliente preenche e envia o formulario publico.
    if (event.httpMethod === "POST" && token) {
      const rows = await sql`select token from public.precadastro_links where token = ${token} limit 1`;
      if (!rows[0]) return json(404, { error: "Link invalido ou expirado." });
      const payload = JSON.parse(event.body || "{}");
      await sql`
        update public.precadastro_links
        set payload = ${JSON.stringify(payload)}::jsonb, status = 'Preenchido', submitted_at = now()
        where token = ${token}
      `;
      return json(200, { ok: true });
    }

    // App autenticado marca o registro como ja aplicado ao cadastro local.
    if (event.httpMethod === "PATCH" && token) {
      await sql`update public.precadastro_links set status = 'Aplicado', applied_at = now() where token = ${token}`;
      return json(200, { ok: true });
    }

    return json(405, { error: "Metodo nao permitido." });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
