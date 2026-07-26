export async function ensurePrecadastroTable(sql) {
  await sql`
    create table if not exists public.precadastro_links (
      token text primary key default gen_random_uuid()::text,
      lead_id text,
      name text,
      phone text,
      status text not null default 'Pendente',
      payload jsonb,
      created_at timestamptz not null default now(),
      submitted_at timestamptz,
      applied_at timestamptz
    )
  `;
}
