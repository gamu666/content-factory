-- Reel Flow v3 — Supabase production schema
-- Agent content order / production tracking website.
-- Run in a NEW Supabase project SQL Editor.
-- Never expose a service_role key in frontend code.

create extension if not exists pgcrypto;

create type public.user_role as enum ('agent','admin');
create type public.order_status as enum ('PLANNING','SHOOTING','EDITING','REVIEW','REVISION','COMPLETED');
create type public.payment_status as enum ('NOT_SET','PENDING','PAID');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  phone text,
  email text,
  agency_name text, -- compatibility/display fallback
  organization_name text,
  branch_name text,
  avatar_url text,                -- agent's own small profile photo
  organization_logo_url text,     -- branch/company official logo
  role public.user_role not null default 'agent',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create sequence if not exists public.reel_order_number_seq start 1;

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique default ('Контент-' || lpad(nextval('public.reel_order_number_seq')::text, 4, '0')),
  agent_id uuid not null references public.profiles(id) on delete cascade,
  assigned_admin_id uuid references public.profiles(id) on delete set null,
  property_name text not null,
  location text not null,
  property_type text not null,
  purpose text not null,
  description text not null default '',
  listing_url text,
  additional_notes text,
  status public.order_status not null default 'PLANNING',
  sub_status text,
  agreed_price numeric(14,2),
  payment_status public.payment_status not null default 'NOT_SET',
  shoot_date timestamptz,
  shoot_started_at timestamptz,
  shoot_location text,
  thumbnail_url text,
  final_video_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz
);

create table public.order_files (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  uploaded_by uuid not null references public.profiles(id) on delete cascade,
  file_type text,
  file_url text not null,
  original_name text,
  created_at timestamptz not null default now()
);

create table public.creative_briefs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders(id) on delete cascade,
  objective text,
  selling_points text,
  filming_concept text,
  filming_style text,
  editing_style text,
  special_shots text,
  agent_appearance boolean not null default false,
  drone_required boolean not null default false,
  voiceover_required boolean not null default false,
  text_overlay_notes text,
  music_direction text,
  reference_links text,
  client_summary text,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  previous_status public.order_status,
  new_status public.order_status not null,
  changed_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.order_activity (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  activity_type text,
  public_message text,
  internal_message text,
  created_by uuid references public.profiles(id) on delete set null,
  visible_to_agent boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  type text not null,
  title text not null,
  message text not null,
  order_id uuid references public.orders(id) on delete cascade,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index orders_agent_idx on public.orders(agent_id, created_at desc);
create index orders_status_idx on public.orders(status, updated_at desc);
create index orders_assigned_admin_idx on public.orders(assigned_admin_id, updated_at desc);
create index activity_order_idx on public.order_activity(order_id, created_at desc);
create index files_order_idx on public.order_files(order_id, created_at desc);
create index notifications_recipient_idx on public.notifications(recipient_id, created_at desc);
create index notifications_unread_idx on public.notifications(recipient_id, read_at) where read_at is null;

-- updated_at helper
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger orders_updated_at before update on public.orders
for each row execute function public.set_updated_at();
create trigger briefs_updated_at before update on public.creative_briefs
for each row execute function public.set_updated_at();

-- Automatically create an AGENT profile for public signups.
-- Admin roles should be assigned manually by a trusted backend/SQL action.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id, full_name, phone, email, agency_name, organization_name, branch_name, role
  ) values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name',''),
    new.raw_user_meta_data->>'phone',
    new.email,
    new.raw_user_meta_data->>'agency_name',
    coalesce(new.raw_user_meta_data->>'organization_name', new.raw_user_meta_data->>'agency_name'),
    new.raw_user_meta_data->>'branch_name',
    'agent'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Security helper. SECURITY DEFINER avoids policy recursion on profiles.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

-- Notify BOTH admins when an agent creates an order.
create or replace function public.notify_admins_new_order()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  agent_name text;
begin
  select full_name into agent_name from public.profiles where id = new.agent_id;

  insert into public.notifications(recipient_id, type, title, message, order_id)
  select p.id,
         'NEW_ORDER',
         'Шинэ контент захиалга',
         coalesce(agent_name,'Агент') || ' · ' || new.order_number || ' · ' || new.property_name,
         new.id
  from public.profiles p
  where p.role = 'admin';

  return new;
end;
$$;

create trigger orders_notify_admins
after insert on public.orders
for each row execute function public.notify_admins_new_order();


-- Initial public timeline event when an order is created.
create or replace function public.create_initial_order_activity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.order_activity(order_id, activity_type, public_message, created_by, visible_to_agent)
  values (new.id, 'ORDER_CREATED', 'Захиалга хүлээн авлаа', new.agent_id, true);
  return new;
end;
$$;

create trigger orders_initial_activity
after insert on public.orders
for each row execute function public.create_initial_order_activity();

-- Keep history + notify only the relevant agent when status changes.
create or replace function public.handle_order_status_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  mn_status text;
begin
  if new.status is distinct from old.status then
    insert into public.order_status_history(order_id, previous_status, new_status, changed_by)
    values (new.id, old.status, new.status, auth.uid());

    if new.status = 'COMPLETED' then
      new.completed_at := coalesce(new.completed_at, now());
    elsif old.status = 'COMPLETED' and new.status <> 'COMPLETED' then
      new.completed_at := null;
    end if;

    mn_status := case new.status
      when 'PLANNING' then 'Төлөвлөж байна'
      when 'SHOOTING' then 'Зураг авалт'
      when 'EDITING' then 'Боловсруулж байна'
      when 'REVIEW' then 'Хянаж байна'
      when 'REVISION' then 'Засвар хийгдэж байна'
      when 'COMPLETED' then 'Бэлэн болсон'
      else new.status::text
    end;

    if old.shoot_started_at is null and new.shoot_started_at is not null then
      insert into public.order_activity(order_id, activity_type, public_message, created_by, visible_to_agent)
      values (new.id, 'SHOOT_STARTED', 'Зураг авалт эхэллээ', auth.uid(), true);
    end if;

    insert into public.order_activity(order_id, activity_type, public_message, created_by, visible_to_agent)
    values (new.id, 'STATUS_CHANGE', mn_status || ' төлөвт шилжлээ', auth.uid(), true);

    insert into public.notifications(recipient_id, type, title, message, order_id)
    values (
      new.agent_id,
      'STATUS_CHANGE',
      'Бичлэгийн төлөв шинэчлэгдлээ',
      new.order_number || ' · ' || mn_status,
      new.id
    );
  end if;
  return new;
end;
$$;

create trigger orders_status_change
before update of status on public.orders
for each row execute function public.handle_order_status_change();

-- If an admin only toggles "shoot started" while status stays SHOOTING, add timeline event.
create or replace function public.handle_shoot_started_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if old.status is not distinct from new.status
     and old.shoot_started_at is null
     and new.shoot_started_at is not null then
    insert into public.order_activity(order_id, activity_type, public_message, created_by, visible_to_agent)
    values (new.id, 'SHOOT_STARTED', 'Зураг авалт эхэллээ', auth.uid(), true);
  end if;
  return new;
end;
$$;

create trigger orders_shoot_started_change
after update of shoot_started_at on public.orders
for each row execute function public.handle_shoot_started_change();

-- Notification read helpers: users can mark only their own notifications as read.
create or replace function public.mark_notification_read(p_notification_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.notifications
  set read_at = coalesce(read_at, now())
  where id = p_notification_id
    and recipient_id = auth.uid();
$$;

grant execute on function public.mark_notification_read(uuid) to authenticated;

create or replace function public.mark_all_notifications_read()
returns void
language sql
security definer
set search_path = public
as $$
  update public.notifications
  set read_at = coalesce(read_at, now())
  where recipient_id = auth.uid()
    and read_at is null;
$$;

grant execute on function public.mark_all_notifications_read() to authenticated;

-- RLS
alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.order_files enable row level security;
alter table public.creative_briefs enable row level security;
alter table public.order_status_history enable row level security;
alter table public.order_activity enable row level security;
alter table public.notifications enable row level security;

-- profiles
create policy "profile read own or admin" on public.profiles
for select to authenticated
using (id = auth.uid() or public.is_admin());

create policy "agent update own profile" on public.profiles
for update to authenticated
using (id = auth.uid() and role = 'agent')
with check (id = auth.uid() and role = 'agent');

create policy "admin manage profiles" on public.profiles
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- orders
create policy "agent read own orders" on public.orders
for select to authenticated
using (agent_id = auth.uid() or public.is_admin());

create policy "agent create own orders" on public.orders
for insert to authenticated
with check (
  agent_id = auth.uid()
  and status = 'PLANNING'
  and payment_status = 'NOT_SET'
  and agreed_price is null
  and assigned_admin_id is null
);

create policy "admin manage orders" on public.orders
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- order files
create policy "read files for own order or admin" on public.order_files
for select to authenticated
using (
  public.is_admin() or exists (
    select 1 from public.orders o
    where o.id = order_id and o.agent_id = auth.uid()
  )
);

create policy "agent add files to own order" on public.order_files
for insert to authenticated
with check (
  uploaded_by = auth.uid() and exists (
    select 1 from public.orders o
    where o.id = order_id and o.agent_id = auth.uid()
  )
);

create policy "admin manage order files" on public.order_files
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- creative briefs are admin-managed because they contain internal notes.
create policy "admin manage creative briefs" on public.creative_briefs
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- status history
create policy "agent read own status history" on public.order_status_history
for select to authenticated
using (
  public.is_admin() or exists (
    select 1 from public.orders o
    where o.id = order_id and o.agent_id = auth.uid()
  )
);
create policy "admin read status history" on public.order_status_history
for select to authenticated
using (public.is_admin());

-- activity
create policy "agent read public own activity" on public.order_activity
for select to authenticated
using (
  public.is_admin() or (
    visible_to_agent = true and exists (
      select 1 from public.orders o
      where o.id = order_id and o.agent_id = auth.uid()
    )
  )
);
create policy "admin manage activity" on public.order_activity
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

-- notifications: trigger-generated; user reads only own rows.
create policy "read own notifications" on public.notifications
for select to authenticated
using (recipient_id = auth.uid());

-- Agent-safe brief RPC: exposes only client-safe columns and verifies ownership.
create or replace function public.get_agent_brief(p_order_id uuid)
returns table (
  order_id uuid,
  objective text,
  selling_points text,
  client_summary text,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select b.order_id, b.objective, b.selling_points, b.client_summary, b.updated_at
  from public.creative_briefs b
  join public.orders o on o.id = b.order_id
  where b.order_id = p_order_id
    and (o.agent_id = auth.uid() or public.is_admin());
$$;

grant execute on function public.get_agent_brief(uuid) to authenticated;

-- Storage suggestion:
-- 1) order-assets   private: <agent_id>/<order_id>/<filename>
-- 2) final-videos  private: <agent_id>/<order_id>/<filename>
-- 3) avatars       private/public based on product choice: <user_id>/avatar.ext
-- 4) org-logos     private/public based on product choice: <user_id>/logo.ext
-- Admin UI can generate signed URLs for downloading organization logos.


-- Safe production queue for agents. It exposes only order number/status for other agents.
create or replace function public.get_production_queue()
returns table (
  order_id uuid,
  order_number text,
  status public.order_status,
  started_at timestamptz,
  is_mine boolean,
  queue_position bigint
)
language sql
stable
security definer
set search_path = public
as $$
  select
    case when o.agent_id = auth.uid() or public.is_admin() then o.id else null end as order_id,
    o.order_number,
    o.status,
    o.shoot_started_at as started_at,
    (o.agent_id = auth.uid()) as is_mine,
    row_number() over (order by o.shoot_started_at asc, o.created_at asc) as queue_position
  from public.orders o
  where o.payment_status = 'PAID'
    and o.shoot_started_at is not null
    and o.status <> 'COMPLETED'
  order by o.shoot_started_at asc, o.created_at asc;
$$;

grant execute on function public.get_production_queue() to authenticated;

-- Storage buckets.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars','avatars',true,10485760,array['image/jpeg','image/png','image/webp']),
  ('org-logos','org-logos',true,10485760,array['image/jpeg','image/png','image/webp','image/svg+xml']),
  ('order-assets','order-assets',false,52428800,null),
  ('final-videos','final-videos',false,1073741824,null)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Own-folder upload/update/delete for profile media. Public buckets handle anonymous reads.
create policy "cf avatars insert own" on storage.objects
for insert to authenticated
with check (bucket_id='avatars' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf avatars update own" on storage.objects
for update to authenticated
using (bucket_id='avatars' and (storage.foldername(name))[1]=auth.uid()::text)
with check (bucket_id='avatars' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf avatars select own" on storage.objects
for select to authenticated
using (bucket_id='avatars' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf avatars delete own" on storage.objects
for delete to authenticated
using (bucket_id='avatars' and (storage.foldername(name))[1]=auth.uid()::text);

create policy "cf org logos insert own" on storage.objects
for insert to authenticated
with check (bucket_id='org-logos' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf org logos update own" on storage.objects
for update to authenticated
using (bucket_id='org-logos' and (storage.foldername(name))[1]=auth.uid()::text)
with check (bucket_id='org-logos' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf org logos select own or admin" on storage.objects
for select to authenticated
using (bucket_id='org-logos' and ((storage.foldername(name))[1]=auth.uid()::text or public.is_admin()));
create policy "cf org logos delete own" on storage.objects
for delete to authenticated
using (bucket_id='org-logos' and (storage.foldername(name))[1]=auth.uid()::text);

-- Order materials: agents can upload/read their own user folder; admins can read all.
create policy "cf order assets insert own" on storage.objects
for insert to authenticated
with check (bucket_id='order-assets' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "cf order assets read own or admin" on storage.objects
for select to authenticated
using (bucket_id='order-assets' and ((storage.foldername(name))[1]=auth.uid()::text or public.is_admin()));
create policy "cf order assets delete own or admin" on storage.objects
for delete to authenticated
using (bucket_id='order-assets' and ((storage.foldername(name))[1]=auth.uid()::text or public.is_admin()));

-- Final videos are private. Admins manage, the owning agent can read.
create policy "cf final videos admin insert" on storage.objects
for insert to authenticated
with check (bucket_id='final-videos' and public.is_admin());
create policy "cf final videos admin update" on storage.objects
for update to authenticated
using (bucket_id='final-videos' and public.is_admin())
with check (bucket_id='final-videos' and public.is_admin());
create policy "cf final videos read own or admin" on storage.objects
for select to authenticated
using (
  bucket_id='final-videos' and (
    public.is_admin() or (storage.foldername(name))[1]=auth.uid()::text
  )
);

-- Realtime publication (idempotent).
do $$
declare t text;
begin
  foreach t in array array['orders','notifications','order_activity','creative_briefs','profiles'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname='supabase_realtime' and schemaname='public' and tablename=t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- V24 security/performance hardening applied to the live project.
alter function public.set_updated_at() set search_path = public;
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.notify_admins_new_order() from public, anon, authenticated;
revoke all on function public.create_initial_order_activity() from public, anon, authenticated;
revoke all on function public.handle_order_status_change() from public, anon, authenticated;
revoke all on function public.handle_shoot_started_change() from public, anon, authenticated;
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
revoke all on function public.get_agent_brief(uuid) from public, anon;
grant execute on function public.get_agent_brief(uuid) to authenticated;
revoke all on function public.get_production_queue() from public, anon;
grant execute on function public.get_production_queue() to authenticated;
revoke all on function public.mark_notification_read(uuid) from public, anon;
grant execute on function public.mark_notification_read(uuid) to authenticated;
revoke all on function public.mark_all_notifications_read() from public, anon;
grant execute on function public.mark_all_notifications_read() to authenticated;
