import { json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function normalizeChatId(value = "") {
  const text = String(value).trim();
  if (!text) return "";
  if (text.includes("@")) return text;
  const digits = text.replace(/\D/g, "");
  return digits ? `${digits}@c.us` : "";
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Metodo nao permitido." });

  const baseUrl = process.env.WAHA_BASE_URL;
  const session = process.env.WAHA_SESSION || "default";
  const apiKey = process.env.WAHA_API_KEY || "";

  if (!baseUrl) return json(501, { error: "WAHA_BASE_URL nao configurada no Netlify." });

  try {
    const body = parseBody(event);
    const chatId = normalizeChatId(body.chatId || body.telefone || body.phone);
    const text = body.text || body.mensagem || body.message || "";

    if (!chatId) return json(400, { error: "Telefone ou chatId e obrigatorio." });
    if (!text) return json(400, { error: "Mensagem e obrigatoria." });

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/sendText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { "X-Api-Key": apiKey } : {}),
      },
      body: JSON.stringify({ session, chatId, text }),
    });

    const responseText = await response.text();
    let payload = responseText;
    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = responseText;
    }

    return json(response.ok ? 200 : response.status, {
      ok: response.ok,
      status: response.status,
      response: payload,
    });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
