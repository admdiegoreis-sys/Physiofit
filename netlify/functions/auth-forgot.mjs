import crypto from "node:crypto";
import { getAuthSql } from "./_auth.mjs";
import { sendEmail, resetEmailHtml } from "./_email.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  try {
    const { email } = parseBody(event);
    if (!email) return json(400, { error: "E-mail obrigatorio." });

    const sql = await getAuthSql();

    // Always return 200 — never reveal if email exists (prevents enumeration)
    const rows = await sql`
      select id, name, email, status
      from public.auth_users
      where lower(coalesce(email, '')) = lower(${email.trim()}) and status = 'Ativo'
      limit 1
    `;

    if (rows[0]) {
      const user = rows[0];

      // Invalidate any existing unused tokens for this user
      await sql`
        update public.password_reset_tokens
        set used = true
        where user_id = ${user.id} and used = false
      `;

      const token = crypto.randomBytes(32).toString("hex");
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      await sql`
        insert into public.password_reset_tokens (token, user_id, expires_at)
        values (${token}, ${user.id}, ${expiresAt.toISOString()})
      `;

      const appUrl = process.env.APP_URL || "https://physiofitstudio.netlify.app";
      const resetUrl = `${appUrl}/?action=reset&token=${token}`;

      await sendEmail({
        to: user.email,
        subject: "Redefinição de senha — Physiofit Studio",
        html: resetEmailHtml({ name: user.name, resetUrl, expiresMinutes: 60 }),
      });
    }

    return json(200, { ok: true, message: "Se este e-mail estiver cadastrado, voce receberá as instruções em breve." });
  } catch (error) {
    console.error("auth-forgot error:", error.message);
    return json(500, { error: "Nao foi possivel processar a solicitacao. Tente novamente." });
  }
}
