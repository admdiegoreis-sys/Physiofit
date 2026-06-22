const RESEND_API = "https://api.resend.com/emails";

export async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY nao configurada no Netlify.");

  const from = process.env.EMAIL_FROM || "Physiofit Studio <noreply@physiofitstudio.com.br>";

  const response = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || "Erro ao enviar e-mail.");
  return payload;
}

export function resetEmailHtml({ name, resetUrl, expiresMinutes = 60 }) {
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
          <p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#1a2332">Redefinição de senha</p>
          <p style="margin:0 0 24px;color:#4b5563;line-height:1.6">Olá, <strong>${name}</strong>. Recebemos uma solicitação para redefinir a senha da sua conta no Physiofit Studio.</p>
          <p style="margin:0 0 24px;color:#4b5563;line-height:1.6">Clique no botão abaixo para criar uma nova senha. O link é válido por <strong>${expiresMinutes} minutos</strong>.</p>
          <div style="text-align:center;margin:28px 0">
            <a href="${resetUrl}" style="display:inline-block;background:#3d7d8f;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700">Redefinir minha senha</a>
          </div>
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px">Se o botão não funcionar, copie e cole este link no seu navegador:</p>
          <p style="margin:0;word-break:break-all;color:#3d7d8f;font-size:12px">${resetUrl}</p>
          <hr style="margin:28px 0;border:none;border-top:1px solid #e5e7eb">
          <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.5">Se você não solicitou esta redefinição, ignore este e-mail. Sua senha permanecerá a mesma.<br>Este link expirará em ${expiresMinutes} minutos por segurança.</p>
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
