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

    // Master bypass: works even if DB is unavailable — set PHYSIOFIT_MASTER_KEY in Netlify env vars
    const masterKey = process.env.PHYSIOFIT_MASTER_KEY;
    if (masterKey && password === masterKey && (username === "admin" || username === "master")) {
      // Use the master key itself as a recognizable token (not a JWT) so all endpoints can verify it
      return json(200, {
        token: `master:${masterKey}`,
        user: { id: "admin", name: "Administrador", username: "admin", email: "", role: "Administrador", professionalId: "", mustChangePassword: false },
      });
    }

    let sql;
    try {
      sql = await getAuthSql();
    } catch (dbError) {
      console.error("DB connection failed:", dbError.message);
      return json(503, { error: "Banco de dados indisponivel. Tente novamente em instantes." });
    }

    const rows = await sql`
      select id, professional_id, name, username, email, role, status, password_hash, must_change_password
      from public.auth_users
      where lower(username) = lower(${username}) or lower(coalesce(email, '')) = lower(${username})
      limit 1
    `;
    const user = rows[0];

    // Emergency recovery: ADMIN_RECOVERY_PASSWORD bypasses hash check for admin user
    const recoveryPw = process.env.ADMIN_RECOVERY_PASSWORD;
    const isRecovery = user?.id === "admin" && recoveryPw && password === recoveryPw;

    if (!user || user.status !== "Ativo" || (!isRecovery && !verifyPassword(password, user.password_hash))) {
      return json(401, { error: "Usuario ou senha invalidos." });
    }

    // Persist recovery password as the real hash so next login is normal
    if (isRecovery) {
      try {
        const newHash = hashPassword(recoveryPw);
        await sql`update public.auth_users set password_hash = ${newHash}, must_change_password = false, updated_at = now() where id = 'admin'`;
      } catch (e) {
        console.error("Failed to persist recovery hash:", e.message);
      }
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
    console.error("auth handler error:", error.message);
    return json(500, { error: error.message });
  }
}
