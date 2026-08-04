import https from "node:https";
import { getSql, json } from "./_db.mjs";
import { ensureFiscalTables, decryptBuffer, decryptText } from "./_fiscal.mjs";
import { requireAdmin } from "./_auth.mjs";

// Endpoints publicos do Ambiente de Dados Nacional (ADN) que exigem mTLS para responder —
// usados so para validar que o certificado autentica com o governo, sem emitir nada.
const AMBIENTE_URLS = {
  homologacao: "https://adn.producaorestrita.nfse.gov.br/contribuintes/swagger/v1/swagger.json",
  producao: "https://adn.nfse.gov.br/contribuintes/swagger/v1/swagger.json",
};

function testMtlsConnection(pfxBuffer, passphrase, url) {
  return new Promise((resolve) => {
    const target = new URL(url);
    const req = https.request(
      {
        hostname: target.hostname,
        port: target.port || 443,
        path: target.pathname + target.search,
        method: "GET",
        pfx: pfxBuffer,
        passphrase,
        rejectUnauthorized: true,
        timeout: 15000,
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          if (data.length < 2000) data += chunk;
        });
        res.on("end", () => resolve({ ok: true, statusCode: res.statusCode, bodyPreview: data.slice(0, 500) }));
      }
    );
    req.on("error", (error) => resolve({ ok: false, error: error.message, code: error.code }));
    req.on("timeout", () => {
      req.destroy();
      resolve({ ok: false, error: "Tempo esgotado ao conectar com o governo." });
    });
    req.end();
  });
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Método não permitido." });

  try {
    const sql = getSql();
    await ensureFiscalTables(sql);
    await requireAdmin(event);

    const certRows = await sql`select * from public.fiscal_certificates where ativo = true order by created_at desc limit 1`;
    const cert = certRows[0];
    if (!cert) return json(400, { ok: false, motivo: "Nenhum certificado digital A1 configurado." });

    const configRows = await sql`select ambiente from public.fiscal_config where id = 'default' limit 1`;
    const ambiente = configRows[0]?.ambiente === "producao" ? "producao" : "homologacao";
    const url = AMBIENTE_URLS[ambiente];

    let pfxBuffer;
    let senha;
    try {
      pfxBuffer = decryptBuffer(cert.pfx_encrypted, cert.iv, cert.auth_tag);
      senha = decryptText(cert.senha_encrypted, cert.senha_iv, cert.senha_auth_tag);
    } catch (error) {
      return json(500, { ok: false, motivo: "Não foi possível descriptografar o certificado armazenado." });
    }

    const result = await testMtlsConnection(pfxBuffer, senha, url);
    pfxBuffer.fill(0);

    if (!result.ok) {
      return json(200, { ok: false, ambiente, url, motivo: `Falha na conexão mTLS: ${result.error}` });
    }

    // Handshake mTLS bem-sucedido = o certificado foi aceito pelo governo. Um status HTTP
    // qualquer (mesmo 401/403 da rota em si) ja confirma isso; so uma falha de TLS/handshake
    // (capturada acima) significa que o certificado nao autenticou.
    return json(200, {
      ok: true,
      ambiente,
      url,
      statusCode: result.statusCode,
      motivo: `Conexão mTLS estabelecida com sucesso (HTTP ${result.statusCode} do governo). O certificado foi aceito.`,
    });
  } catch (error) {
    console.error("fiscal-certificate-test error:", error.message);
    return json(error.statusCode || 500, { error: error.message });
  }
}
