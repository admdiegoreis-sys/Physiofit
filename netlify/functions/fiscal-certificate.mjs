import crypto from "node:crypto";
import { getSql, json } from "./_db.mjs";
import { ensureFiscalTables, encryptBuffer, encryptText } from "./_fiscal.mjs";
import { requireAdmin } from "./_auth.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensureFiscalTables(sql);
    await requireAdmin(event);

    if (event.httpMethod === "GET") {
      const rows = await sql`
        select id, nome_arquivo, valido_ate, ativo, created_at
        from public.fiscal_certificates
        where ativo = true
        order by created_at desc
        limit 1
      `;
      return json(200, rows[0] || null);
    }

    if (event.httpMethod === "POST") {
      const body = parseBody(event);
      if (!body.pfxBase64 || !body.senha) {
        return json(400, { error: "Certificado (.pfx) e senha são obrigatórios." });
      }

      const pfxBuffer = Buffer.from(body.pfxBase64, "base64");
      const { encrypted, iv, authTag } = encryptBuffer(pfxBuffer);
      const senha = encryptText(body.senha);

      await sql`update public.fiscal_certificates set ativo = false where ativo = true`;

      const id = crypto.randomUUID();
      await sql`
        insert into public.fiscal_certificates (id, nome_arquivo, pfx_encrypted, iv, auth_tag, senha_encrypted, senha_iv, senha_auth_tag, valido_ate, ativo)
        values (${id}, ${body.fileName || "certificado.pfx"}, ${encrypted}, ${iv}, ${authTag}, ${senha.encrypted}, ${senha.iv}, ${senha.authTag}, ${body.validoAte || null}, true)
      `;

      return json(201, { id, fileName: body.fileName || "certificado.pfx" });
    }

    if (event.httpMethod === "DELETE") {
      await sql`update public.fiscal_certificates set ativo = false where ativo = true`;
      return json(200, { ok: true });
    }

    return json(405, { error: "Método não permitido." });
  } catch (error) {
    console.error("fiscal-certificate error:", error.message);
    return json(error.statusCode || 500, { error: error.message });
  }
}
