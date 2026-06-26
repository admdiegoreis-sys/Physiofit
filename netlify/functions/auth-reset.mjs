import { getAuthSql, hashPassword } from "./_auth.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  try {
    const { token, password } = parseBody(event);
    if (!token || !password) return json(400, { error: "Token e nova senha sao obrigatorios." });
    if (password.length < 6) return json(400, { error: "A senha deve ter pelo menos 6 caracteres." });

    const sql = await getAuthSql();

    const rows = await sql`
      select t.token, t.user_id, t.expires_at, t.used
      from public.password_reset_tokens t
      where t.token = ${token}
      limit 1
    `;

    const record = rows[0];

    if (!record) return json(400, { error: "Link invalido ou expirado. Solicite um novo." });
    if (record.used) return json(400, { error: "Este link ja foi utilizado. Solicite um novo." });
    if (new Date(record.expires_at) < new Date()) return json(400, { error: "Link expirado. Solicite um novo." });

    const newHash = hashPassword(password);

    const updated = await sql`
      update public.auth_users
      set password_hash = ${newHash}, must_change_password = false, updated_at = now()
      where id = ${record.user_id}
      returning username, name
    `;

    await sql`
      update public.password_reset_tokens
      set used = true
      where token = ${token}
    `;

    const username = updated[0]?.username || null;
    return json(200, { ok: true, username, message: `Senha criada com sucesso! Seu usuário de acesso é: ${username}` });
  } catch (error) {
    console.error("auth-reset error:", error.message);
    return json(500, { error: "Nao foi possivel redefinir a senha. Tente novamente." });
  }
}
