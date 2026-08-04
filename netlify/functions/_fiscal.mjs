import crypto from "node:crypto";

export async function ensureFiscalTables(sql) {
  await sql`
    create table if not exists public.fiscal_config (
      id text primary key default 'default',
      municipio text not null default 'Goiania-GO',
      cnpj text,
      inscricao_municipal text,
      razao_social text,
      regime_tributario text,
      cnae text,
      item_lc116 text,
      aliquota_iss numeric(6,4),
      serie_rps text not null default 'A',
      proximo_rps integer not null default 1,
      ambiente text not null default 'homologacao',
      updated_at timestamptz not null default now()
    )
  `;

  await sql`
    create table if not exists public.fiscal_certificates (
      id text primary key,
      nome_arquivo text,
      pfx_encrypted bytea not null,
      iv text not null,
      auth_tag text not null,
      senha_encrypted text not null,
      senha_iv text not null,
      senha_auth_tag text not null,
      valido_ate date,
      ativo boolean not null default true,
      created_at timestamptz not null default now()
    )
  `;

  await sql`
    create table if not exists public.fiscal_queue (
      id text primary key,
      monthly_id text,
      student_id text,
      status text not null default 'Pendente',
      payload jsonb not null default '{}'::jsonb,
      tentativas integer not null default 0,
      erro_mensagem text,
      protocolo text,
      invoice_id text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `;

  await sql`
    create table if not exists public.fiscal_invoices_history (
      id text primary key,
      queue_id text references public.fiscal_queue(id) on delete set null,
      monthly_id text,
      student_id text,
      rps text,
      numero text,
      status text not null,
      valor numeric(12,2),
      competencia date,
      protocolo text,
      codigo_verificacao text,
      xml_enviado text,
      xml_retorno text,
      pdf_url text,
      motivo_erro text,
      motivo_cancelamento text,
      created_at timestamptz not null default now()
    )
  `;

  await sql`
    create table if not exists public.fiscal_logs (
      id bigserial primary key,
      queue_id text,
      evento text not null,
      detalhe text,
      created_at timestamptz not null default now()
    )
  `;

  await sql`
    insert into public.fiscal_config (id, municipio, serie_rps, proximo_rps, ambiente)
    values ('default', 'Goiania-GO', 'A', 1, 'homologacao')
    on conflict (id) do nothing
  `;
}

export async function logFiscalEvent(sql, { queueId = null, evento, detalhe = "" }) {
  await sql`
    insert into public.fiscal_logs (queue_id, evento, detalhe)
    values (${queueId}, ${evento}, ${detalhe})
  `;
}

const certSecret = process.env.FISCAL_CERT_KEY || process.env.APP_SECRET || process.env.DATABASE_URL || "physiofit-fiscal-local-secret";

function encryptionKey() {
  return crypto.createHash("sha256").update(certSecret).digest();
}

export function encryptBuffer(buffer) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return { encrypted, iv: iv.toString("hex"), authTag: cipher.getAuthTag().toString("hex") };
}

export function decryptBuffer(encrypted, ivHex, authTagHex) {
  const decipher = crypto.createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(ivHex, "hex"));
  decipher.setAuthTag(Buffer.from(authTagHex, "hex"));
  return Buffer.concat([decipher.update(encrypted), decipher.final()]);
}

export function encryptText(text) {
  const { encrypted, iv, authTag } = encryptBuffer(Buffer.from(text, "utf8"));
  return { encrypted: encrypted.toString("base64"), iv, authTag };
}

export function decryptText(encryptedBase64, ivHex, authTagHex) {
  return decryptBuffer(Buffer.from(encryptedBase64, "base64"), ivHex, authTagHex).toString("utf8");
}
