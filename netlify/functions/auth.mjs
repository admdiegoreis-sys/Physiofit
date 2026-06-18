import { createToken, getAuthSql, verifyPassword, hashPassword } from "./_auth.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  try {
    const { username, password } = parseBody(event);
    if (!username || !password) return json(400, { error: "Usuario e senha sao obrigatorios." });

    const sql = await getAuthSql();
    const rows = await sql`
      select id, professional_id, name, username, email, role, status, password_hash, must_change_password
      from public.auth_users
      where lower(username) = lower(${username}) or lower(coalesce(email, '')) = lower(${username})
      limit 1
    `;
    const user = rows[0];

    // Emergency recovery: ADMIN_RECOVERY_PASSWORD env var bypasses hash check for admin
    const recoveryPw = process.env.ADMIN_RECOVERY_PASSWORD;
    const isRecovery = user?.id === "admin" && recoveryPw && password === recoveryPw;

    if (!user || user.status !== "Ativo" || (!isRecovery && !verifyPassword(password, user.password_hash))) {
      return json(401, { error: "Usuario ou senha invalidos." });
    }

    // Persist the recovery password as the real hash so next login is normal
    if (isRecovery) {
      const newHash = hashPassword(recoveryPw);
      await sql`update public.auth_users set password_hash = ${newHash}, must_change_password = false, updated_at = now() where id = 'admin'`;
    }

    return json(200, {
      token: createToken(user),
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        professionalId: user.professional_id,
        mustChangePassword: user.must_change_password,
      },
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
