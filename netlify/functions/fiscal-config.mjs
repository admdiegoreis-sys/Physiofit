import { getSql, json } from "./_db.mjs";
import { ensureFiscalTables } from "./_fiscal.mjs";
import { requireAdmin, verifyToken } from "./_auth.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensureFiscalTables(sql);

    if (event.httpMethod === "GET") {
      const token = event.headers.authorization?.replace(/^Bearer\s+/i, "");
      const masterKey = process.env.PHYSIOFIT_MASTER_KEY;
      if (!(masterKey && token === `master:${masterKey}`) && !verifyToken(token)) {
        return json(401, { error: "Sessão expirada. Faça login novamente." });
      }
      const rows = await sql`select * from public.fiscal_config where id = 'default' limit 1`;
      const certRows = await sql`select valido_ate from public.fiscal_certificates where ativo = true order by created_at desc limit 1`;
      return json(200, { ...rows[0], certificateReady: certRows.length > 0, certificateExpiresAt: certRows[0]?.valido_ate || null });
    }

    if (event.httpMethod === "PATCH") {
      await requireAdmin(event);
      const body = parseBody(event);
      const rows = await sql`
        update public.fiscal_config
        set
          municipio = coalesce(${body.municipio ?? null}, municipio),
          cnpj = coalesce(${body.cnpj ?? null}, cnpj),
          inscricao_municipal = coalesce(${body.inscricaoMunicipal ?? null}, inscricao_municipal),
          razao_social = coalesce(${body.razaoSocial ?? null}, razao_social),
          regime_tributario = coalesce(${body.regimeTributario ?? null}, regime_tributario),
          cnae = coalesce(${body.cnae ?? null}, cnae),
          item_lc116 = coalesce(${body.itemLc116 ?? null}, item_lc116),
          aliquota_iss = coalesce(${body.aliquotaIss ?? null}, aliquota_iss),
          serie_rps = coalesce(${body.serieRps ?? null}, serie_rps),
          proximo_rps = coalesce(${body.proximoRps != null ? Number(body.proximoRps) : null}, proximo_rps),
          ambiente = coalesce(${body.ambiente ?? null}, ambiente),
          updated_at = now()
        where id = 'default'
        returning *
      `;
      return json(200, rows[0]);
    }

    return json(405, { error: "Método não permitido." });
  } catch (error) {
    console.error("fiscal-config error:", error.message);
    return json(error.statusCode || 500, { error: error.message });
  }
}
