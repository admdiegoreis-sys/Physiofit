create extension if not exists "pgcrypto";

create table if not exists public.app_state (
  key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

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
);

create table if not exists public.lead_inbox (
  id text primary key default gen_random_uuid()::text,
  source text not null,
  payload jsonb not null,
  lead_id text,
  status text not null default 'Recebido',
  received_at timestamptz not null default now(),
  converted_at timestamptz
);

create table if not exists public.whatsapp_interactions (
  id text primary key default gen_random_uuid()::text,
  source text not null default 'whatsapp',
  phone text,
  contact_name text,
  message text,
  classification text not null,
  student_id text,
  lead_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.studios (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  document text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  auth_user_id text,
  name text not null,
  email text,
  role text not null default 'Recepcao',
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  name text not null,
  cpf text,
  rg text,
  birth_date date,
  phone text,
  email text,
  address text,
  financial_responsible text,
  emergency_contact text,
  status text not null default 'Ativo',
  notes text,
  health_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.professionals (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  name text not null,
  document text,
  email text,
  phone text,
  role text,
  max_patients integer default 1,
  color text,
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.modalities (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  name text not null,
  max_patients integer default 1,
  single_value numeric(12,2) default 0,
  experimental_value numeric(12,2) default 0,
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.plans (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  modality_id text references public.modalities(id),
  name text not null,
  plan_type text not null,
  sessions integer default 0,
  weekly_sessions integer default 0,
  value numeric(12,2) not null default 0,
  duration_days integer,
  allows_replacement boolean not null default true,
  replacement_limit integer default 0,
  replacement_deadline_days integer default 30,
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

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
);
create table if not exists public.enrollments (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  student_id text references public.students(id) on delete cascade,
  plan_id text references public.plans(id),
  professional_id text references public.professionals(id),
  start_date date not null,
  end_date date,
  due_day integer,
  monthly_value numeric(12,2) default 0,
  status text not null default 'Ativa',
  contract_status text,
  schedule jsonb not null default '{}'::jsonb,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  student_id text references public.students(id),
  professional_id text references public.professionals(id),
  modality_id text references public.modalities(id),
  appointment_date date not null,
  start_time time not null,
  end_time time not null,
  room text,
  session_kind text,
  status text not null default 'Agendada',
  replacement_credit boolean not null default false,
  replacement_used boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.suppliers (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  name text not null,
  document text,
  email text,
  phone text,
  category text,
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.chart_accounts (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  name text not null,
  dre_structure text,
  dfc_group text,
  activity text,
  nature text,
  status text not null default 'Ativo'
);

create table if not exists public.financial_movements (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  student_id text references public.students(id),
  supplier_id text references public.suppliers(id),
  supplier_name text,
  chart_account_id text references public.chart_accounts(id),
  direction text not null,
  status text not null default 'Aberto',
  competence_date date,
  forecast_date date,
  due_date date,
  paid_date date,
  amount numeric(12,2) not null default 0,
  description text,
  payment_method text,
  created_at timestamptz not null default now()
);

create table if not exists public.fiscal_invoices (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  financial_movement_id text references public.financial_movements(id),
  student_id text references public.students(id),
  number text,
  rps text,
  service text,
  service_code text,
  description text,
  amount numeric(12,2) not null default 0,
  iss numeric(12,2) default 0,
  competence_date date,
  issue_date date,
  status text not null default 'Pendente',
  rejection_reason text,
  xml_url text,
  pdf_url text,
  public_link text,
  created_at timestamptz not null default now()
);

create table if not exists public.clinical_records (
  id text primary key default gen_random_uuid()::text,
  studio_id text references public.studios(id) on delete cascade,
  student_id text references public.students(id) on delete cascade,
  professional_id text references public.professionals(id),
  record_date date not null,
  title text not null,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists idx_students_studio_name on public.students (studio_id, name);
create index if not exists idx_appointments_date on public.appointments (studio_id, appointment_date, start_time);
create index if not exists idx_financial_competence on public.financial_movements (studio_id, competence_date);
create index if not exists idx_financial_paid on public.financial_movements (studio_id, paid_date);
