import crypto from "node:crypto";
import { getSql } from "./_db.mjs";

const tokenSecret = process.env.APP_SECRET || process.env.DATABASE_URL || "physiofit-local-secret";

export async function ensureAuthTables(sql) {
  await sql`
    create table if not exists public.auth_users (
      id text primary key,
      professional_id text,
      name text not null,
      username text not null unique,
      email text,
      role text not null default 'Profissional',
      status text not null default 'Ativo',
      password_hash text,
      must_change_password boolean not null default false,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `;

  const rows = await sql`select id from public.auth_users where id = 'admin' limit 1`;
  if (!rows.length) {
    const passwordHash = hashPassword("Admin@123");
    await sql`
      insert into public.auth_users (id, name, username, email, role, status, password_hash, must_change_password)
      values ('admin', 'Administrador', 'admin', 'admin@physiofit.local', 'Administrador', 'Ativo', ${passwordHash}, true)
      on conflict (id) do nothing
    `;
  }
}

export async function syncProfessionalUsers(sql) {
  await ensureAuthTables(sql);
  try {
    await sql`
      insert into public.auth_users (id, professional_id, name, username, email, role, status)
      select
        'professional-' || id,
        id,
        name,
        lower(regexp_replace(coalesce(email, 'profissional-' || id), '[^a-zA-Z0-9@._-]+', '', 'g')),
        nullif(email, ''),
        'Profissional',
        coalesce(status, 'Ativo')
      from public.professionals
      on conflict (id)
      do update set
        professional_id = excluded.professional_id,
        name = excluded.name,
        email = excluded.email,
        status = excluded.status,
        updated_at = now()
    `;
  } catch {
    // The normalized professionals table may not exist before the full schema is applied.
  }

  const appState = await sql`select data from public.app_state where key = 'production' limit 1`;
  const professionals = appState[0]?.data?.professionals || [];

  for (const professional of professionals) {
    if (!professional?.id || !professional?.name) continue;

    const username = normalizeUsername(professional.email || professional.name || professional.id);
    await sql`
      insert into public.auth_users (id, professional_id, name, username, email, role, status)
      values (
        ${`professional-${professional.id}`},
        ${professional.id},
        ${professional.name},
        ${username},
        ${professional.email || null},
        'Profissional',
        ${professional.status || "Ativo"}
      )
      on conflict (id)
      do update set
        professional_id = excluded.professional_id,
        name = excluded.name,
        email = excluded.email,
        status = excluded.status,
        updated_at = now()
    `;
  }
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return `pbkdf2$${salt}$${hash}`;
}

export function verifyPassword(password, passwordHash) {
  if (!passwordHash) return false;
  const [, salt, storedHash] = passwordHash.split("$");
  if (!salt || !storedHash) return false;

  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(storedHash, "hex"));
}

export function createToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    role: user.role,
    professionalId: user.professional_id || "",
    exp: Date.now() + 1000 * 60 * 60 * 12,
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", tokenSecret).update(encoded).digest("base64url");
  return `${encoded}.${signature}`;
}

export function verifyToken(token) {
  if (!token || !token.includes(".")) return null;
  const [encoded, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", tokenSecret).update(encoded).digest("base64url");
  if (!signature || signature.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;

  const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
  if (!payload.exp || payload.exp < Date.now()) return null;
  return payload;
}

export async function requireAdmin(event) {
  const token = event.headers.authorization?.replace(/^Bearer\s+/i, "");
  const user = verifyToken(token);
  if (!user || user.role !== "Administrador") {
    throw new Error("Acesso restrito ao administrador.");
  }
  return user;
}

export function normalizeUsername(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9@._-]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
}

export async function getAuthSql() {
  const sql = getSql();
  await syncProfessionalUsers(sql);
  return sql;
}
