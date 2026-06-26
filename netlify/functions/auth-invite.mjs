import crypto from "node:crypto";
import { getAuthSql, requireAdmin } from "./_auth.mjs";
import { sendEmail } from "./_email.mjs";
import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function inviteEmailHtml({ name, inviteUrl }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 20px">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.08);overflow:hidden;max-width:100%">
        <tr><td style="background:#3d7d8f;padding:28px 32px;text-align:center">
          <span style="font-size:22px;font-weight:700;color:#fff;letter-spacing:.5px">PHYSIOFIT <span style="color:#b5e0ea">Studio</span></span>
        </td></tr>
        <tr><td style="padding:36px 32px">
          <p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#1a2332">Bem-vinda ao Physiofit Studio!</p>
          <p style="margin:0 0 24px;color:#4b5563;line-height:1.6">Olá, <strong>${name}</strong>! Você foi convidada a acessar o sistema de gestão do Physiofit Studio.</p>
          <p style="margin:0 0 24px;color:#4b5563;line-height:1.6">Clique no botão abaixo para criar sua senha e ativar seu acesso. O link é válido por <strong>24 horas</strong>.</p>
          <div style="text-align:center;margin:28px 0">
            <a href="${inviteUrl}" style="display:inline-block;background:#3d7d8f;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700">Criar minha senha</a>
          </div>
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px">Se o botão não funcionar, copie e cole este link no seu navegador:</p>
          <p style="margin:0;word-break:break-all;color:#3d7d8f;font-size:12px">${inviteUrl}</p>
          <hr style="margin:28px 0;border:none;border-top:1px solid #e5e7eb">
          <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.5">Se você não esperava este convite, pode ignorar este e-mail com segurança.</p>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:16px 32px;text-align:center">
          <p style="margin:0;color:#9ca3af;font-size:11px">© ${new Date().getFullYear()} Physiofit Studio · Goiânia, GO</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  try {
    await requireAdmin(event);

    const { userId } = parseBody(event);
    if (!userId) return json(400, { error: "userId obrigatorio." });

    const sql = await getAuthSql();

    const rows = await sql`
      select id, name, email, status from public.auth_users
      where id = ${userId} limit 1
    `;
    const user = rows[0];
    if (!user) return json(404, { error: "Usuário não encontrado." });
    if (user.status === "Inativo") return json(400, { error: "Usuário inativo." });

    // Invalidate existing unused tokens
    await sql`
      update public.password_reset_tokens set used = true
      where user_id = ${user.id} and used = false
    `;

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h for invite

    await sql`
      insert into public.password_reset_tokens (token, user_id, expires_at)
      values (${token}, ${user.id}, ${expiresAt.toISOString()})
    `;

    const appUrl = process.env.APP_URL || "https://physiofitstudio.netlify.app";
    const inviteUrl = `${appUrl}/?action=reset&token=${token}`;

    let sentByEmail = false;
    if (user.email) {
      try {
        await sendEmail({
          to: user.email,
          subject: "Seu acesso ao Physiofit Studio",
          html: inviteEmailHtml({ name: user.name, inviteUrl }),
        });
        sentByEmail = true;
      } catch {
        // email failed — still return link for manual sharing
      }
    }

    return json(200, { link: inviteUrl, sentByEmail, userName: user.name, email: user.email || null });
  } catch (error) {
    console.error("auth-invite error:", error.message);
    return json(error.message.includes("restrito") ? 403 : 500, { error: error.message });
  }
}
