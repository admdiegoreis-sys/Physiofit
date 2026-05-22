import { getAuthSql, hashPassword, requireAdmin } from "./_auth.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    await requireAdmin(event);
    const sql = await getAuthSql();

    if (event.httpMethod === "GET") {
      const users = await sql`
        select id, professional_id, name, username, email, role, status, password_hash is not null as has_password, must_change_password, updated_at
        from public.auth_users
        order by case when role = 'Administrador' then 0 else 1 end, name
      `;
      return json(200, users);
    }

    if (event.httpMethod === "PATCH") {
      const body = parseBody(event);
      if (!body.userId) return json(400, { error: "Usuario obrigatorio." });

      const passwordHash = body.password ? hashPassword(body.password) : null;
      const status = body.status || null;

      const rows = await sql`
        update public.auth_users
        set
          password_hash = coalesce(${passwordHash}, password_hash),
          status = coalesce(${status}, status),
          must_change_password = false,
          updated_at = now()
        where id = ${body.userId}
        returning id, name, username, email, role, status, password_hash is not null as has_password
      `;

      return json(200, rows[0]);
    }

    return json(405, { error: "Metodo nao permitido." });
  } catch (error) {
    return json(error.message.includes("restrito") ? 403 : 500, { error: error.message });
  }
}
