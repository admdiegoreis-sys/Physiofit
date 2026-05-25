export const leadStatuses = ["Novo lead", "Contato iniciado", "Respondido", "Visita agendada", "Visita realizada", "Proposta enviada", "Matriculado", "Perdido"];

function phoneFromChatId(value = "") {
  const [chatId] = String(value).split("@");
  const digits = chatId.replace(/\D/g, "");
  return digits ? `+${digits}` : "";
}

function wahaLeadPayload(payload = {}) {
  const event = payload.event || "";
  const message = payload.payload;
  if (!event.startsWith("message") || !message) return null;

  if (message.fromMe) {
    return { skip: true, skipReason: "Mensagem enviada pelo proprio estudio." };
  }

  if (String(message.from || "").includes("@g.us")) {
    return { skip: true, skipReason: "Mensagem de grupo ignorada." };
  }

  const senderName = payload.contact?.name || payload.contact?.pushName || message._data?.notifyName || message.pushName || "";
  const phone = phoneFromChatId(message.from || message.chatId || message.participant);
  const body = message.body || message.text || message.caption || "";

  return {
    nome: payload.nome || payload.name || senderName || "Lead WhatsApp",
    telefone: payload.telefone || payload.phone || phone,
    email: payload.email || "",
    instagram: payload.instagram || "",
    origem_lead: payload.origem_lead || payload.origin || "WhatsApp",
    canal_entrada: payload.canal_entrada || "whatsapp",
    mensagem_inicial: payload.mensagem_inicial || payload.initialMessage || body,
    interesse: payload.interesse || payload.interest || "",
    status: payload.status || "Novo lead",
    data_entrada: payload.data_entrada || payload.entryDate || new Date().toISOString().slice(0, 10),
    data_visita: payload.data_visita || payload.visitDate || null,
    responsavel: payload.responsavel || payload.ownerId || payload.owner || "",
    observacoes: payload.observacoes || payload.notes || `WAHA ${payload.session || "default"} · ${event}`,
  };
}

export async function ensureLeadTables(sql) {
  await sql`
    create table if not exists public.leads (
      id text primary key default gen_random_uuid()::text,
      nome text not null,
      telefone text,
      email text,
      instagram text,
      origem_lead text not null default 'Outro',
      canal_entrada text not null default 'Manual',
      mensagem_inicial text,
      interesse text,
      status text not null default 'Novo lead',
      data_entrada date not null default current_date,
      data_visita date,
      responsavel text,
      observacoes text,
      historico jsonb not null default '[]'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `;

  await sql`
    alter table public.leads
      add column if not exists nome text,
      add column if not exists telefone text,
      add column if not exists instagram text,
      add column if not exists origem_lead text default 'Outro',
      add column if not exists canal_entrada text default 'Manual',
      add column if not exists mensagem_inicial text,
      add column if not exists interesse text,
      add column if not exists data_entrada date default current_date,
      add column if not exists data_visita date,
      add column if not exists responsavel text,
      add column if not exists observacoes text,
      add column if not exists historico jsonb default '[]'::jsonb
  `;

  await sql`
    do $$
    begin
      if exists (
        select 1 from information_schema.columns
        where table_schema = 'public' and table_name = 'leads' and column_name = 'name'
      ) then
        alter table public.leads alter column name drop not null;
      end if;
      if exists (
        select 1 from information_schema.columns
        where table_schema = 'public' and table_name = 'leads' and column_name = 'origin'
      ) then
        alter table public.leads alter column origin drop not null;
      end if;
      if exists (
        select 1 from information_schema.columns
        where table_schema = 'public' and table_name = 'leads' and column_name = 'interest'
      ) then
        alter table public.leads alter column interest drop not null;
      end if;
    end $$;
  `;

  await sql`
    create table if not exists public.lead_inbox (
      id text primary key default gen_random_uuid()::text,
      source text not null,
      payload jsonb not null,
      lead_id text,
      status text not null default 'Recebido',
      received_at timestamptz not null default now(),
      converted_at timestamptz
    )
  `;
}

export function normalizeLeadPayload(payload = {}) {
  const wahaPayload = wahaLeadPayload(payload);
  if (wahaPayload?.skip) return wahaPayload;
  if (wahaPayload) payload = wahaPayload;

  const status = leadStatuses.includes(payload.status) ? payload.status : "Novo lead";

  return {
    nome: payload.nome || payload.name || "",
    telefone: payload.telefone || payload.phone || "",
    email: payload.email || "",
    instagram: payload.instagram || "",
    origem_lead: payload.origem_lead || payload.origin || payload.origem || "Outro",
    canal_entrada: payload.canal_entrada || payload.entryChannel || payload.canal || "Manual",
    mensagem_inicial: payload.mensagem_inicial || payload.initialMessage || payload.message || "",
    interesse: payload.interesse || payload.interest || "",
    status,
    data_entrada: payload.data_entrada || payload.entryDate || new Date().toISOString().slice(0, 10),
    data_visita: payload.data_visita || payload.visitDate || null,
    responsavel: payload.responsavel || payload.ownerId || payload.owner || "",
    observacoes: payload.observacoes || payload.notes || "",
  };
}
