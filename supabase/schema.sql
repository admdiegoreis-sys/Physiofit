create extension if not exists "pgcrypto";

create table if not exists public.studios (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  document text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  auth_user_id uuid,
  name text not null,
  email text,
  role text not null default 'Recepção',
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  name text not null,
  max_patients integer default 1,
  single_value numeric(12,2) default 0,
  experimental_value numeric(12,2) default 0,
  status text not null default 'Ativo',
  created_at timestamptz not null default now()
);

create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  modality_id uuid references public.modalities(id),
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  student_id uuid references public.students(id),
  name text not null,
  phone text,
  email text,
  origin text not null,
  interest text not null,
  status text not null default 'Novo lead',
  owner_id uuid references public.professionals(id),
  first_contact_date date,
  next_follow_up_date date,
  loss_reason text,
  notes text,
  history text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  student_id uuid references public.students(id) on delete cascade,
  plan_id uuid references public.plans(id),
  professional_id uuid references public.professionals(id),
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  student_id uuid references public.students(id),
  professional_id uuid references public.professionals(id),
  modality_id uuid references public.modalities(id),
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

create table if not exists public.chart_accounts (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  name text not null,
  dre_structure text,
  dfc_group text,
  activity text,
  nature text,
  status text not null default 'Ativo'
);

create table if not exists public.financial_movements (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  student_id uuid references public.students(id),
  supplier_name text,
  chart_account_id uuid references public.chart_accounts(id),
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  financial_movement_id uuid references public.financial_movements(id),
  student_id uuid references public.students(id),
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
  id uuid primary key default gen_random_uuid(),
  studio_id uuid references public.studios(id) on delete cascade,
  student_id uuid references public.students(id) on delete cascade,
  professional_id uuid references public.professionals(id),
  record_date date not null,
  title text not null,
  note text,
  created_at timestamptz not null default now()
);

alter table public.studios enable row level security;
alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.professionals enable row level security;
alter table public.modalities enable row level security;
alter table public.plans enable row level security;
alter table public.leads enable row level security;
alter table public.enrollments enable row level security;
alter table public.appointments enable row level security;
alter table public.chart_accounts enable row level security;
alter table public.financial_movements enable row level security;
alter table public.fiscal_invoices enable row level security;
alter table public.clinical_records enable row level security;

-- Para desenvolvimento inicial. Antes de produção com login, substituir por políticas por perfil/studio.
create policy "dev_read_all_studios" on public.studios for select using (true);
create policy "dev_read_all_profiles" on public.profiles for select using (true);
create policy "dev_read_all_students" on public.students for select using (true);
create policy "dev_read_all_professionals" on public.professionals for select using (true);
create policy "dev_read_all_modalities" on public.modalities for select using (true);
create policy "dev_read_all_plans" on public.plans for select using (true);
create policy "dev_read_all_leads" on public.leads for select using (true);
create policy "dev_read_all_enrollments" on public.enrollments for select using (true);
create policy "dev_read_all_appointments" on public.appointments for select using (true);
create policy "dev_read_all_chart_accounts" on public.chart_accounts for select using (true);
create policy "dev_read_all_financial_movements" on public.financial_movements for select using (true);
create policy "dev_read_all_fiscal_invoices" on public.fiscal_invoices for select using (true);
create policy "dev_read_all_clinical_records" on public.clinical_records for select using (true);
