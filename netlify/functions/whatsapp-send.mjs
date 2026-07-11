import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function normalizePhone(value = "") {
  const digits = String(value).replace(/\D/g, "");
  if (!digits) return "";
  // Garante código do país: se começar com 0, remove; se não tiver 55, adiciona
  if (digits.startsWith("0")) return "55" + digits.slice(1);
  if (!digits.startsWith("55") && digits.length <= 11) return "55" + digits;
  return digits;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  const instanceId = process.env.ZAPI_INSTANCE_ID;
  const token = process.env.ZAPI_TOKEN;
  const clientToken = process.env.ZAPI_CLIENT_TOKEN || "";

  if (!instanceId || !token) {
    return json(501, { error: "ZAPI_INSTANCE_ID ou ZAPI_TOKEN nao configurados no Netlify." });
  }

  try {
    const body = parseBody(event);
    const phone = normalizePhone(body.phone || body.telefone || body.chatId || "");
    const message = body.message || body.mensagem || body.text || "";

    if (!phone) return json(400, { error: "Telefone e obrigatorio." });
    if (!message) return json(400, { error: "Mensagem e obrigatoria." });

    const zapiUrl = `https://api.z-api.io/instances/${instanceId}/token/${token}/send-text`;

    const response = await fetch(zapiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(clientToken ? { "Client-Token": clientToken } : {}),
      },
      body: JSON.stringify({ phone, message }),
    });

    const responseText = await response.text();
    let payload;
    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = responseText;
    }

    return json(response.ok ? 200 : response.status, {
      ok: response.ok,
      status: response.status,
      phone,
      response: payload,
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
