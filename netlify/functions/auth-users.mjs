import { getAuthSql, hashPassword, requireAdmin, verifyToken } from "./_auth.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function getCallerUser(event) {
  const token = event.headers.authorization?.replace(/^Bearer\s+/i, "");
  return verifyToken(token);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = await getAuthSql();

    if (event.httpMethod === "GET") {
      await requireAdmin(event);
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

      const caller = getCallerUser(event);
      if (!caller) return json(401, { error: "Não autenticado." });

      const isAdmin = caller.role === "Administrador";
      const isSelf = caller.id === body.userId;

      // Non-admin can only change their own password (no status changes)
      if (!isAdmin && !isSelf) return json(403, { error: "Acesso restrito ao administrador." });
      if (!isAdmin && body.status) return json(403, { error: "Acesso restrito ao administrador." });

      const passwordHash = body.password ? hashPassword(body.password) : null;
      const status = isAdmin ? (body.status || null) : null;

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
