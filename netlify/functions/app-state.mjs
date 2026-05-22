import { getSql, json } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

async function ensureAppStateTable(sql) {
  await sql`
    create table if not exists public.app_state (
      key text primary key,
      data jsonb not null,
      updated_at timestamptz not null default now()
    )
  `;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();
    await ensureAppStateTable(sql);
    const key = event.queryStringParameters?.key || "production";

    if (event.httpMethod === "GET") {
      const rows = await sql`select key, data, updated_at from public.app_state where key = ${key} limit 1`;
      return json(200, rows[0] || null);
    }

    if (event.httpMethod === "PUT" || event.httpMethod === "POST") {
      const body = parseBody(event);
      const data = body.data;

      if (!data || typeof data !== "object") {
        return json(400, { error: "Dados obrigatorios para salvar o estado." });
      }

      const rows = await sql`
        insert into public.app_state (key, data, updated_at)
        values (${key}, ${JSON.stringify(data)}::jsonb, now())
        on conflict (key)
        do update set data = excluded.data, updated_at = now()
        returning key, updated_at
      `;

      return json(200, rows[0]);
    }

    return json(405, { error: "Metodo nao permitido." });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
