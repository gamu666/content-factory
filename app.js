const DB_KEY = 'reel_flow_demo_db_v3';
const SESSION_KEY = 'reel_flow_demo_session_v1';
const THEME_KEY = 'reel_flow_demo_theme_v1';
const BRAND_NAME = 'Content Factory';
const BRAND_SUB = 'контент портал';
const BRAND_LOGO_SRC = 'data:image/png;base64,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';

const statusLabels = {
  PLANNING: 'Төлөвлөж байна',
  SHOOTING: 'Зураг авалт',
  EDITING: 'Боловсруулж байна',
  REVIEW: 'Хянаж байна',
  REVISION: 'Засвар хийгдэж байна',
  COMPLETED: 'Бэлэн болсон'
};
const subStatusLabels = {
  FOOTAGE_PREP: 'Бичлэгээ цэгцэлж байна',
  EDITING: 'Edit хийж байна',
  COLOR: 'Өнгө тохируулж байна',
  SOUND: 'Дуу боловсруулж байна',
  RENDERING: 'Render хийж байна'
};
const paymentLabels = {
  NOT_SET: 'Үнэ тохируулаагүй',
  PENDING: 'Хүлээгдэж байна',
  PAID: 'Төлөгдсөн'
};
const propertyTypes = ['Орон сууц','Хаус','Оффис','Үйлчилгээний талбай','Газар','Төсөл','Бусад'];
const purposes = ['Зарах','Түрээслүүлэх','Агентын personal branding','Төслийн сурталчилгаа','Бусад'];
const primaryStages = ['PLANNING','SHOOTING','EDITING','COMPLETED'];
const QUEUE_HOURS_PER_CONTENT = 8;

const SUPABASE_CONFIG = window.REEL_FLOW_CONFIG || {};
const REMOTE_ENABLED = !!(SUPABASE_CONFIG.SUPABASE_URL && SUPABASE_CONFIG.SUPABASE_ANON_KEY && window.supabase?.createClient);
const sb = REMOTE_ENABLED ? window.supabase.createClient(
  SUPABASE_CONFIG.SUPABASE_URL,
  SUPABASE_CONFIG.SUPABASE_ANON_KEY,
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
) : null;
let REMOTE_DB = null;
let REMOTE_USER_ID = null;
let REMOTE_LOADED = false;
let realtimeChannel = null;
let remoteRefreshTimer = null;
let PASSWORD_RECOVERY_ACTIVE = new URLSearchParams(window.location.search).get('reset') === '1';

function blankDb() {
  return {profiles:[],orders:[],briefs:[],activity:[],notifications:[],order_status_history:[],productionQueue:[]};
}
function throwIfError(result, fallback='Supabase алдаа') {
  if (result?.error) throw new Error(result.error.message || fallback);
  return result?.data;
}
function normalizeRemoteDb(db) {
  db ||= blankDb();
  db.profiles ||= []; db.orders ||= []; db.briefs ||= []; db.activity ||= []; db.notifications ||= []; db.order_status_history ||= []; db.productionQueue ||= [];
  db.profiles = db.profiles.map(p=>({organization_name:p.organization_name||p.agency_name||'',branch_name:p.branch_name||'',organization_logo_url:p.organization_logo_url||'',avatar_url:p.avatar_url||'',...p}));
  db.orders = db.orders.map(o=>({shoot_started_at:o.shoot_started_at??null,...o,order_number:String(o.order_number||'').replace(/^REEL-/i,'Контент-')}));
  db.notifications = db.notifications.map(n=>({...n,message:String(n.message||'').replace(/REEL-/gi,'Контент-'),title:String(n.title||'').replace(/Reel/gi,'контент')}));
  return db;
}
async function loadRemoteDb() {
  if (!REMOTE_ENABLED) return;
  const sess = await sb.auth.getSession();
  if (sess.error) throw sess.error;
  REMOTE_USER_ID = sess.data.session?.user?.id || null;
  if (!REMOTE_USER_ID) {
    REMOTE_DB = blankDb();
    REMOTE_LOADED = true;
    return;
  }

  const profileRes = await sb.from('profiles').select('*').order('created_at',{ascending:true});
  const profiles = throwIfError(profileRes,'Профайл уншиж чадсангүй') || [];
  const me = profiles.find(p=>p.id===REMOTE_USER_ID) || null;
  if (!me) {
    REMOTE_DB = normalizeRemoteDb({profiles,orders:[],briefs:[],activity:[],notifications:[],order_status_history:[],productionQueue:[]});
    REMOTE_LOADED = true;
    return;
  }

  const [ordersRes, activityRes, notificationsRes, historyRes, queueRes] = await Promise.all([
    sb.from('orders').select('*').order('created_at',{ascending:false}),
    sb.from('order_activity').select('*').order('created_at',{ascending:true}),
    sb.from('notifications').select('*').order('created_at',{ascending:false}),
    sb.from('order_status_history').select('*').order('created_at',{ascending:true}),
    sb.rpc('get_production_queue')
  ]);
  const orders = throwIfError(ordersRes,'Захиалга уншиж чадсангүй') || [];
  const activity = throwIfError(activityRes,'Үйл явц уншиж чадсангүй') || [];
  const notifications = throwIfError(notificationsRes,'Мэдэгдэл уншиж чадсангүй') || [];
  const order_status_history = throwIfError(historyRes,'Төлөвийн түүх уншиж чадсангүй') || [];
  const productionQueue = queueRes.error ? [] : (queueRes.data || []);

  let briefs = [];
  if (me.role === 'admin') {
    const briefsRes = await sb.from('creative_briefs').select('*');
    briefs = throwIfError(briefsRes,'Creative brief уншиж чадсангүй') || [];
  } else {
    const rows = await Promise.all(orders.map(async o=>{
      const r = await sb.rpc('get_agent_brief',{p_order_id:o.id});
      return r.error ? [] : (r.data || []);
    }));
    briefs = rows.flat().map(b=>({id:`safe_${b.order_id}`, ...b}));
  }

  REMOTE_DB = normalizeRemoteDb({profiles,orders,briefs,activity,notifications,order_status_history,productionQueue});
  REMOTE_LOADED = true;
}
function scheduleRemoteRefresh() {
  if (!REMOTE_ENABLED || !REMOTE_USER_ID) return;
  clearTimeout(remoteRefreshTimer);
  remoteRefreshTimer = setTimeout(async ()=>{
    try { await loadRemoteDb(); await render(); } catch (e) { console.error(e); }
  }, 250);
}
function setupRealtime() {
  if (!REMOTE_ENABLED || !REMOTE_USER_ID) return;
  if (realtimeChannel) sb.removeChannel(realtimeChannel);
  realtimeChannel = sb.channel(`content-factory-${REMOTE_USER_ID}`)
    .on('postgres_changes',{event:'*',schema:'public',table:'orders'},scheduleRemoteRefresh)
    .on('postgres_changes',{event:'*',schema:'public',table:'notifications'},scheduleRemoteRefresh)
    .on('postgres_changes',{event:'*',schema:'public',table:'order_activity'},scheduleRemoteRefresh)
    .on('postgres_changes',{event:'*',schema:'public',table:'creative_briefs'},scheduleRemoteRefresh)
    .on('postgres_changes',{event:'*',schema:'public',table:'profiles'},scheduleRemoteRefresh)
    .subscribe();
}
async function uploadPublicProfileAsset(bucket,userId,file,baseName) {
  const ext=(file.name.split('.').pop()||'png').toLowerCase().replace(/[^a-z0-9]/g,'') || 'png';
  const path=`${userId}/${baseName}.${ext}`;
  const r=await sb.storage.from(bucket).upload(path,file,{upsert:true,cacheControl:'3600',contentType:file.type||undefined});
  throwIfError(r,'Файл upload хийж чадсангүй');
  return sb.storage.from(bucket).getPublicUrl(path).data.publicUrl + `?v=${Date.now()}`;
}

function uid(prefix='id') { return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`; }
function nowIso() { return new Date().toISOString(); }
function dateOnly(offset=0) {
  const d = new Date(); d.setDate(d.getDate()+offset);
  return d.toISOString().slice(0,10);
}
function esc(s='') { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function formatMoney(n) { return n == null || n === '' ? '' : `${Number(n).toLocaleString('en-US')}₮`; }
function formatDate(iso, includeTime=false) {
  if (!iso) return '—';
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  if (Number.isNaN(d.getTime())) return iso;
  const opts = {month:'long', day:'numeric'};
  if (includeTime) Object.assign(opts,{hour:'2-digit',minute:'2-digit',hour12:false});
  return new Intl.DateTimeFormat('mn-MN', opts).format(d);
}
function brandLogoHtml(cls='brand-logo-img') { return `<img src="${BRAND_LOGO_SRC}" alt="${BRAND_NAME}" class="${cls}" />`; }

function initials(name='') { return name.split(/\s+/).filter(Boolean).slice(-2).map(x=>x[0]).join('').toUpperCase() || 'RF'; }
function orgName(user={}) { return user.organization_name || user.agency_name || ''; }
function agentSubtitle(user={}) { return [orgName(user), user.branch_name].filter(Boolean).join(' · ') || 'Агент'; }
function userAvatarHtml(user={}, extra='') {
  const photo = user.avatar_url || '';
  if (photo) return `<div class="avatar avatar-photo ${extra}"><img src="${esc(photo)}" alt="${esc(user.full_name||'Профайл зураг')}" /></div>`;
  return `<div class="avatar ${extra}">${esc(initials(user.full_name))}</div>`;
}
function organizationLogoHtml(user={}, extra='') {
  const logo=user.organization_logo_url||'';
  if (logo) return `<div class="organization-logo ${extra}"><img src="${esc(logo)}" alt="${esc(orgName(user)||'Байгууллагын лого')}" /></div>`;
  return `<div class="organization-logo organization-logo-empty ${extra}"><span>${esc(initials(orgName(user)||'RF'))}</span></div>`;
}
function fileToDataUrl(file) { return new Promise((resolve,reject)=>{ const r=new FileReader(); r.onload=()=>resolve(r.result); r.onerror=reject; r.readAsDataURL(file); }); }

function seedDb() {
  const profiles = [
    {id:'agent_1', email:'agent@demo.mn', password:'demo123', full_name:'Агент хэрэглэгч', phone:'0000 0000', agency_name:'Demo Agency', organization_name:'Demo Agency', branch_name:'Төв салбар', organization_logo_url:'', role:'agent', avatar_url:'', created_at:'2026-09-01T08:00:00Z'},
    {id:'admin_1', email:'admin@demo.mn', password:'admin123', full_name:'Админ хэрэглэгч', phone:'0000 0000', agency_name:BRAND_NAME, role:'admin', avatar_url:'', created_at:'2026-09-01T08:00:00Z'},
    {id:'admin_2', email:'admin2@demo.mn', password:'admin123', full_name:'Ган-Эрдэнэ', phone:'9900 2200', agency_name:BRAND_NAME, role:'admin', avatar_url:'', created_at:'2026-09-01T08:00:00Z'}
  ];
  const orders = [
    {id:'order_24', order_number:'Контент-0024', agent_id:'agent_1', assigned_admin_id:'admin_1', property_name:'Жишээ объект', location:'Жишээ байршил', property_type:'Үйлчилгээний талбай', purpose:'Зарах', description:'Зайсан орчим дахь үйлчилгээний зориулалттай талбай.', listing_url:'', additional_notes:'Өргөн өнцгийн орон зай, байршлын давуу талыг онцолно.', status:'EDITING', sub_status:'EDITING', agreed_price:350000, payment_status:'PENDING', shoot_date:'2026-09-25T11:00:00+08:00', shoot_started_at:'2026-09-25T11:08:00+08:00', shoot_location:'Жишээ байршил', thumbnail_url:'', final_video_url:'', created_at:'2026-09-24T06:32:00Z', updated_at:'2026-09-26T01:20:00Z', completed_at:null},
    {id:'order_25', order_number:'Контент-0025', agent_id:'agent_1', assigned_admin_id:'admin_2', property_name:'River Garden', location:'Хан-Уул', property_type:'Орон сууц', purpose:'Зарах', description:'3 өрөө орон сууц.', listing_url:'', additional_notes:'', status:'SHOOTING', sub_status:'', agreed_price:300000, payment_status:'PAID', shoot_date:'2026-09-28T14:00:00+08:00', shoot_started_at:null, shoot_location:'River Garden, ХУД', thumbnail_url:'', final_video_url:'', created_at:'2026-09-23T04:10:00Z', updated_at:'2026-09-24T09:00:00Z', completed_at:null},
    {id:'order_26', order_number:'Контент-0026', agent_id:'agent_1', assigned_admin_id:'admin_1', property_name:'Japan Town', location:'Хан-Уул', property_type:'Орон сууц', purpose:'Түрээслүүлэх', description:'2 өрөө байр.', listing_url:'', additional_notes:'', status:'COMPLETED', sub_status:'', agreed_price:280000, payment_status:'PAID', shoot_date:'2026-09-18T10:30:00+08:00', shoot_started_at:'2026-09-18T10:35:00+08:00', shoot_location:'Japan Town, ХУД', thumbnail_url:'', final_video_url:'https://example.com/final/reel-0026', created_at:'2026-09-15T05:20:00Z', updated_at:'2026-09-20T08:30:00Z', completed_at:'2026-09-20T08:30:00Z'}
  ];
  const briefs = [
    {id:'brief_24', order_id:'order_24', objective:'Объектыг худалдах', selling_points:'Байршил, орон зай, зах зээлийн үнэ', filming_concept:'Орон зайн мэдрэмжийг цэвэр, хурдан хэмнэлтэй кадраар харуулна.', filming_style:'Clean property tour', editing_style:'Fast clean cuts', special_shots:'Гадна орчин + гол орон зайн reveal', agent_appearance:false, drone_required:true, voiceover_required:false, text_overlay_notes:'Үнэ ба байршлыг товч гаргана.', music_direction:'Modern clean', reference_links:'', client_summary:'Объектын орон зай, байршлын давуу талыг хурдан хэмнэлтэй контент хэлбэрээр харуулна.', internal_notes:'Wide shot-аа эхэнд авч, төгсгөлд CTA.', created_at:'2026-09-24T08:10:00Z', updated_at:'2026-09-24T08:10:00Z'},
    {id:'brief_25', order_id:'order_25', objective:'Орон сууцыг худалдах', selling_points:'Орчин, төлөвлөлт, гэрэлтүүлэг', filming_concept:'Өрөө хоорондын урсгалыг зөөлөн хөдөлгөөнөөр харуулна.', filming_style:'Lifestyle property', editing_style:'Smooth premium', special_shots:'Living room reveal', agent_appearance:true, drone_required:false, voiceover_required:true, text_overlay_notes:'Талбай, өрөөний тоо', music_direction:'Soft modern', reference_links:'', client_summary:'Орон сууцны төлөвлөлт, гэрэлтүүлэг, амьдрах орчны мэдрэмжийг premium байдлаар харуулна.', internal_notes:'Agent intro 4-5 sec.', created_at:'2026-09-23T06:00:00Z', updated_at:'2026-09-23T06:00:00Z'}
  ];
  const activity = [
    {id:'a1', order_id:'order_24', public_message:'Боловсруулалт эхэллээ', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-26T01:20:00Z'},
    {id:'a2', order_id:'order_24', public_message:'Зураг авалт дууслаа', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-25T10:40:00Z'},
    {id:'a3', order_id:'order_24', public_message:'Зураг авалт товлогдлоо', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-24T08:30:00Z'},
    {id:'a4', order_id:'order_24', public_message:'Бичлэгийн төлөвлөгөө баталгаажлаа', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-24T08:10:00Z'},
    {id:'a5', order_id:'order_24', public_message:'Захиалга хүлээн авлаа', visible_to_agent:true, created_by:'agent_1', created_at:'2026-09-24T06:32:00Z'},
    {id:'a6', order_id:'order_25', public_message:'Зураг авалт товлогдлоо', visible_to_agent:true, created_by:'admin_2', created_at:'2026-09-24T09:00:00Z'},
    {id:'a7', order_id:'order_25', public_message:'Захиалга хүлээн авлаа', visible_to_agent:true, created_by:'agent_1', created_at:'2026-09-23T04:10:00Z'},
    {id:'a8', order_id:'order_26', public_message:'Бичлэг бэлэн боллоо', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-20T08:30:00Z'},
    {id:'a9', order_id:'order_26', public_message:'Боловсруулалт эхэллээ', visible_to_agent:true, created_by:'admin_1', created_at:'2026-09-18T08:20:00Z'}
  ];
  const notifications = [
    {id:'n1', recipient_id:'agent_1', type:'STATUS_CHANGE', title:'Бичлэгийн төлөв шинэчлэгдлээ', message:'Контент-0024 · Боловсруулж байна', order_id:'order_24', read_at:null, created_at:'2026-09-26T01:20:00Z'},
    {id:'n2', recipient_id:'admin_1', type:'NEW_ORDER', title:'Шинэ контент захиалга', message:'Агент хэрэглэгч · Контент-0025 · Жишээ объект', order_id:'order_25', read_at:null, created_at:'2026-09-23T04:10:00Z'},
    {id:'n3', recipient_id:'admin_2', type:'NEW_ORDER', title:'Шинэ контент захиалга', message:'Агент хэрэглэгч · Контент-0025 · Жишээ объект', order_id:'order_25', read_at:null, created_at:'2026-09-23T04:10:00Z'}
  ];
  return {profiles, orders, briefs, activity, notifications};
}

function getDb() {
  if (REMOTE_ENABLED) return REMOTE_DB || blankDb();
  try {
    const raw=localStorage.getItem(DB_KEY);
    if (raw) {
      const db=JSON.parse(raw);
      db.notifications ||= [];
      db.order_status_history ||= [];
      db.orders=(db.orders||[]).map(o=>({
        ...o,
        order_number:String(o.order_number||'').replace(/^REEL-/i,'Контент-')
      }));
      db.notifications=(db.notifications||[]).map(n=>({
        ...n,
        message:String(n.message||'').replace(/REEL-/gi,'Контент-'),
        title:String(n.title||'').replace(/Reel/gi,'контент')
      }));
      db.profiles=(db.profiles||[]).map(p=>({organization_name:p.organization_name||p.agency_name||'',branch_name:p.branch_name||'',organization_logo_url:p.organization_logo_url||'',avatar_url:p.avatar_url||'',...p}));
      db.orders=(db.orders||[]).map(o=>({shoot_started_at:o.shoot_started_at??null,...o}));
      return db;
    }
  } catch {}
  const db=seedDb(); localStorage.setItem(DB_KEY, JSON.stringify(db)); return db;
}
function saveDb(db) { if (!REMOTE_ENABLED) localStorage.setItem(DB_KEY, JSON.stringify(db)); }
function getSession() { return REMOTE_ENABLED ? REMOTE_USER_ID : localStorage.getItem(SESSION_KEY); }
function setSession(id) { if (REMOTE_ENABLED) { REMOTE_USER_ID=id||null; return; } if (id) localStorage.setItem(SESSION_KEY,id); else localStorage.removeItem(SESSION_KEY); }
function currentUser(db=getDb()) { const id=getSession(); return db.profiles.find(p=>p.id===id) || null; }
function route() { const h=location.hash.replace(/^#/,'') || '/'; return h; }
function navigate(path) { if (route()===path) render(); else location.hash=path; }

function icon(name) {
  const paths = {
    home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
    orders:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>',
    queue:'<path d="M6 7h12M6 12h12M6 17h12"/><circle cx="3" cy="7" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="17" r="1"/>',
    video:'<rect x="3" y="5" width="14" height="14" rx="3"/><path d="m17 10 4-2v8l-4-2"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h7v18h-7"/>',
    arrow:'<path d="m9 18 6-6-6-6"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.09 14H3v-4h.09A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63 1.7 1.7 0 0 0 10 3.09V3h4v.09A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9c.18.63.75 1 1.54 1.09H21v4h-.09c-.79.09-1.36.46-1.51.91Z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    back:'<path d="m15 18-6-6 6-6"/>',
    upload:'<path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    film:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>',
    moon:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"/>',
    money:'<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M7 12h.01M17 12h.01"/><circle cx="12" cy="12" r="2"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.orders}</svg>`;
}

function toast(message, type='') {
  const root=document.getElementById('toast-root'); if(!root) return;
  const el=document.createElement('div'); el.className=`toast ${type}`; el.textContent=message; root.appendChild(el);
  setTimeout(()=>el.remove(), 2800);
}

function statusClass(s) { return `status-${String(s).toLowerCase()}`; }
function statusPill(order) { return `<span class="status-pill ${statusClass(order.status)}"><i class="status-dot"></i>${esc(statusLabels[order.status]||order.status)}</span>`; }
function paymentPill(p) {
  const cls = p==='PAID' ? 'status-completed' : p==='PENDING' ? 'status-editing' : 'status-planning';
  return `<span class="status-pill ${cls}"><i class="status-dot"></i>${esc(paymentLabels[p]||p)}</span>`;
}
function stageIndex(status) {
  if (status==='PLANNING') return 0;
  if (status==='SHOOTING') return 1;
  if (['EDITING','REVIEW','REVISION'].includes(status)) return 2;
  if (status==='COMPLETED') return 3;
  return 0;
}
function progressHtml(status) {
  const labels=['Төлөвлөлт','Зураг авалт','Боловсруулалт','Бэлэн'];
  const idx=stageIndex(status);
  return `<div class="progress">${labels.map((l,i)=>`<div class="progress-step ${i<idx?'done':''} ${i===idx?'active':''}">${l}</div>`).join('')}</div>`;
}


function getTheme() { return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'; }
function setTheme(theme) { localStorage.setItem(THEME_KEY, theme === 'dark' ? 'dark' : 'light'); applyTheme(); }
function applyTheme() {
  if (typeof document === 'undefined') return;
  const dark = getTheme() === 'dark';
  document.body.classList.toggle('dark-theme', dark);
  document.documentElement.style.background = dark ? '#0b0d12' : '#f6f7f9';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#0b0d12' : '#eceff2');
}
function themeToggleHtml() {
  const dark = getTheme() === 'dark';
  return `<button class="theme-toggle ${dark?'dark':''}" type="button" data-action="toggle-theme" title="${dark?'Light горим':'Dark горим'}"><span class="theme-toggle-icon">${icon(dark?'sun':'moon')}</span><span class="theme-toggle-copy"><strong>${dark?'Dark':'Light'}</strong><small>${dark?'Light болгох':'Dark болгох'}</small></span></button>`;
}

function themeSwitchHtml() {
  const dark = getTheme() === 'dark';
  return `<div class="theme-switch" role="group" aria-label="Өнгөний горим">
    <button type="button" class="theme-switch-option ${!dark?'active':''}" data-action="set-theme" data-theme="light" title="Light горим">${icon('sun')}<span>Light</span></button>
    <button type="button" class="theme-switch-option ${dark?'active':''}" data-action="set-theme" data-theme="dark" title="Dark горим">${icon('moon')}<span>Dark</span></button>
  </div>`;
}


function effectiveShootStartedAt(order) {
  if (order?.shoot_started_at) return order.shoot_started_at;
  if (['EDITING','REVIEW','REVISION','COMPLETED'].includes(order?.status)) {
    return order.shoot_date || order.updated_at || order.created_at || null;
  }
  return null;
}
function queueEligible(order) {
  return order?.payment_status === 'PAID' && !!effectiveShootStartedAt(order) && order.status !== 'COMPLETED';
}
function productionQueue(db) {
  if (REMOTE_ENABLED && Array.isArray(db.productionQueue)) {
    return db.productionQueue.map((q,i)=>{
      const own = q.order_id ? (db.orders||[]).find(o=>o.id===q.order_id) : null;
      if (own) return own;
      return {
        id:q.order_id||`queue_${i+1}`,
        order_number:q.order_number,
        agent_id:q.is_mine?getSession():null,
        status:q.status||'SHOOTING',
        payment_status:'PAID',
        shoot_started_at:q.started_at||null,
        created_at:q.started_at||null
      };
    });
  }
  return (db.orders||[]).filter(queueEligible).sort((a,b)=>{
    const ta=new Date(effectiveShootStartedAt(a)||0).getTime();
    const tb=new Date(effectiveShootStartedAt(b)||0).getTime();
    if (ta!==tb) return ta-tb;
    return new Date(a.created_at||0)-new Date(b.created_at||0);
  });
}
function queueInfo(db, order) {
  if (!order) return null;
  if (order.status === 'COMPLETED') return {kind:'done', title:'Бичлэг бэлэн болсон', detail:'Production дууссан.'};
  if (['EDITING','REVIEW','REVISION'].includes(order.status)) {
    return {kind:'active', title:'Таны контент хийгдэж байна', detail:statusLabels[order.status]||'Боловсруулж байна'};
  }
  if (order.payment_status !== 'PAID') {
    return {kind:'waiting', title:'Дараалал хараахан үүсээгүй', detail:'Төлбөр баталгаажсаны дараа production дараалалд орно.'};
  }
  if (!effectiveShootStartedAt(order)) {
    return {kind:'waiting', title:'Дараалал хараахан үүсээгүй', detail:'Зураг авалт эхэлсний дараа production дараалалд орно.'};
  }
  const queue=productionQueue(db);
  const index=queue.findIndex(x=>x.id===order.id);
  if (index<0) return null;
  if (index===0) return {kind:'next', title:'Таны контент дараагийн ээлжинд', detail:'Боловсруулалт удахгүй эхэлнэ.'};
  const hours=index*QUEUE_HOURS_PER_CONTENT;
  return {kind:'queue', title:`Таны өмнө ${index} контент байна`, detail:`Ойролцоогоор ${hours} цагийн дараа хийгдэж эхэлнэ.`};
}
function queueInfoHtml(db, order, compact=false) {
  const info=queueInfo(db,order); if(!info) return '';
  return `<div class="queue-box queue-${info.kind} ${compact?'compact':''}"><div class="queue-title">${esc(info.title)}</div><div class="queue-detail">${esc(info.detail)}</div></div>`;
}

function addNotification(db, recipientId, type, title, message, orderId=null) {
  db.notifications ||= [];
  db.notifications.push({id:uid('notification'),recipient_id:recipientId,type,title,message,order_id:orderId,read_at:null,created_at:nowIso()});
}
function notificationPath(user, notification) {
  if (!notification.order_id) return user.role==='admin'?'/admin':'/dashboard';
  return user.role==='admin'?`/admin/orders/${notification.order_id}`:`/orders/${notification.order_id}`;
}
function notificationsHtml(db,user) {
  const items=(db.notifications||[]).filter(n=>n.recipient_id===user.id).sort((a,b)=>new Date(b.created_at)-new Date(a.created_at)).slice(0,12);
  const unread=items.filter(n=>!n.read_at).length;
  return `<div class="notification-wrap"><button class="icon-btn notification-bell" data-action="toggle-notifications" title="Мэдэгдэл">${icon('bell')}${unread?`<span class="notification-badge">${unread>9?'9+':unread}</span>`:''}</button><div id="notification-popover" class="notification-popover"><div class="notification-head"><div><strong>Мэдэгдэл</strong><span>${unread?`${unread} шинэ`:'Шинэ мэдэгдэлгүй'}</span></div>${unread?`<button type="button" data-action="mark-all-notifications-read">Бүгдийг уншсан</button>`:''}</div><div class="notification-list">${items.length?items.map(n=>`<button type="button" class="notification-item ${n.read_at?'':'unread'}" data-action="open-notification" data-notification-id="${n.id}" data-path="${notificationPath(user,n)}"><span class="notification-dot"></span><span class="notification-copy"><strong>${esc(n.title)}</strong><small>${esc(n.message)}</small><em>${formatDate(n.created_at,true)}</em></span></button>`).join(''):`<div class="notification-empty">Одоогоор мэдэгдэл алга.</div>`}</div></div></div>`;
}

function shell(content, active='dashboard') {
  const db=getDb(), user=currentUser(db); if(!user) return content;
  const admin=user.role==='admin';
  const nav = admin ? [
    ['admin','/admin','home','Хяналтын самбар'],
    ['admin-orders','/admin/orders','orders','Захиалгууд'],
    ['admin-agents','/admin/agents','users','Агентууд'],
    ['admin-shoots','/admin/shoots','calendar','Зураг авалт'],
    ['admin-profile','/admin/profile','user','Профайл']
  ] : [
    ['dashboard','/dashboard','home','Нүүр'],
    ['orders','/orders','orders','Захиалгууд'],
    ['queue','/queue','queue','Дараалал'],
    ['videos','/videos','video','Миний бичлэгүүд'],
    ['profile','/profile','user','Профайл']
  ];
  const mobile = admin ? nav : [
    ['dashboard','/dashboard','home','Нүүр'],
    ['orders','/orders','orders','Захиалга'],
    ['queue','/queue','queue','Дараалал'],
    ['videos','/videos','video','Бичлэг'],
    ['profile','/profile','user','Профайл']
  ];
  return `<div class="app-shell">
    <aside class="sidebar">
      <div class="sidebar-card">
        <div class="sidebar-top">
          <div class="brand sidebar-brand"><span class="brand-mark brand-mark-logo">${brandLogoHtml()}</span><div>${BRAND_NAME}<div class="brand-sub">${BRAND_SUB}</div></div></div>
        </div>
        <nav class="nav nav-main">${nav.map(([key,path,ic,label])=>`<a class="nav-link ${active===key?'active':''}" href="#${path}"><span class="nav-icon">${icon(ic)}</span><span class="nav-label">${label}</span></a>`).join('')}</nav>
        <div class="sidebar-bottom">
          <div class="sidebar-theme">${themeSwitchHtml()}</div>
          <div class="sidebar-footer">
            <button class="user-mini user-mini-button" type="button" data-nav="${admin?'/admin/profile':'/profile'}" title="Профайл">${userAvatarHtml(user)}<div class="sidebar-user-copy" style="min-width:0;flex:1;text-align:left"><strong>${esc(user.full_name)}</strong><span>${admin?'Админ':esc(agentSubtitle(user))}</span></div></button>
          </div>
          <div class="sidebar-controls">
            <button class="sidebar-action" type="button" data-action="logout" title="Гарах"><span class="sidebar-action-icon">${icon('logout')}</span><span class="sidebar-action-copy"><strong>Гарах</strong><small>Системээс гарах</small></span></button>
          </div>
        </div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">${themeToggleHtml()}${notificationsHtml(db,user)}<button class="top-profile-button" type="button" data-nav="${admin?'/admin/profile':'/profile'}" title="Профайл">${userAvatarHtml(user)}</button></header>
      <div class="mobile-topbar"><div class="brand"><span class="brand-mark brand-mark-logo">${brandLogoHtml()}</span><span>${BRAND_NAME}</span></div><div class="mobile-top-actions">${themeToggleHtml()}${notificationsHtml(db,user)}<button class="top-profile-button" type="button" data-nav="${admin?'/admin/profile':'/profile'}" title="Профайл">${userAvatarHtml(user)}</button></div></div>
      ${content}
    </main>
    <nav class="mobile-nav">${mobile.map(([key,path,ic,label],i)=>{
      return `<button class="${active===key?'active':''}" data-nav="${path}">${icon(ic)}<span>${label.replace('Миний ','')}</span></button>`;
    }).join('')}</nav>
  </div>`;
}

function pageHead(title, sub='', actions='') {
  return `<div class="page-head"><div><h1 class="page-title">${title}</h1>${sub?`<p class="page-sub">${sub}</p>`:''}</div>${actions?`<div class="actions">${actions}</div>`:''}</div>`;
}

function orderCard(order) {
  const deliveryState=order.status==='COMPLETED'
    ? `<span class="delivery-card-state ${order.final_video_url?'ready':'waiting'}">${order.final_video_url?`${icon('video')} Бичлэг үзэх боломжтой`:`${icon('clock')} Бичлэгийн линк хүлээгдэж байна`}</span>`
    : '';
  return `<article class="card order-card" data-nav="/orders/${order.id}">
    <div class="order-card-top"><div><div class="order-number">${esc(order.order_number)}</div><h3>${esc(order.property_name)}</h3><div class="order-location">${esc(order.location)}</div></div>${statusPill(order)}</div>
    ${progressHtml(order.status)}
    <div class="order-meta"><span>${order.shoot_date?`Зураг авалт: <strong>${formatDate(order.shoot_date,true)}</strong>`:`Сүүлд шинэчилсэн: <strong>${formatDate(order.updated_at,true)}</strong>`}</span>${deliveryState}</div>
  </article>`;
}

function dashboardPage() {
  const db=getDb(), user=currentUser(db);
  const orders=db.orders.filter(o=>o.agent_id===user.id).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
  const active=orders.filter(o=>o.status!=='COMPLETED');
  const complete=orders.filter(o=>o.status==='COMPLETED');
  const primary=active[0];
  const others=active.slice(1);
  const nextShoot=active.filter(o=>o.shoot_date && new Date(o.shoot_date)>=new Date()).sort((a,b)=>new Date(a.shoot_date)-new Date(b.shoot_date))[0];
  const unread=(db.notifications||[]).filter(n=>n.recipient_id===user.id&&!n.read_at).length;
  const actions=`<button class="btn btn-primary" data-nav="/orders/new">${icon('plus')}<span class="hide-sm">Шинэ контент захиалах</span></button>`;
  const hero=primary?`<section class="dashboard-feature" data-nav="/orders/${primary.id}">
      <div class="feature-top"><div><span class="feature-kicker">Одоо хийгдэж байгаа</span><div class="feature-order-no">${esc(primary.order_number)}</div></div>${statusPill(primary)}</div>
      <div class="feature-copy"><h2>${esc(primary.property_name)}</h2><p>${esc(primary.location)} · ${esc(primary.property_type)}</p></div>
      <div class="feature-progress">${progressHtml(primary.status)}</div>
      <div class="feature-footer"><div class="feature-meta"><span>Сүүлд шинэчилсэн<strong>${formatDate(primary.updated_at,true)}</strong></span>${primary.shoot_date?`<span>Зураг авалт<strong>${formatDate(primary.shoot_date,true)}</strong></span>`:''}</div><button class="feature-open" type="button">Дэлгэрэнгүй ${icon('arrow')}</button></div>
    </section>`:`<section class="dashboard-feature feature-empty"><span class="feature-kicker">Production</span><h2>Шинэ контентоо эхлүүлээрэй.</h2><p>Захиалгын мэдээллээ илгээсний дараа зураг авалтын төлөвлөгөөг хамт тохирно.</p><button class="feature-open" type="button" data-nav="/orders/new">Контент захиалах ${icon('arrow')}</button></section>`;
  const nextShootCard=nextShoot?`<div class="module-card next-shoot-card">
      <div class="module-head"><span>Дараагийн зураг авалт</span>${icon('calendar')}</div>
      <div class="shoot-date-big">${new Intl.DateTimeFormat('mn-MN',{day:'2-digit'}).format(new Date(nextShoot.shoot_date))}</div>
      <div class="shoot-month">${new Intl.DateTimeFormat('mn-MN',{month:'long'}).format(new Date(nextShoot.shoot_date))}</div>
      <strong>${esc(nextShoot.property_name)}</strong><p>${formatDate(nextShoot.shoot_date,true)} · ${esc(nextShoot.shoot_location||nextShoot.location)}</p>
      <button class="mini-link" data-nav="/orders/${nextShoot.id}">Захиалга харах ${icon('arrow')}</button>
    </div>`:`<div class="module-card next-shoot-card"><div class="module-head"><span>Дараагийн зураг авалт</span>${icon('calendar')}</div><div class="module-empty-mark">—</div><strong>Товлогдоогүй</strong><p>Зураг авалтын шинэ тов энд харагдана.</p></div>`;
  return shell(`<div class="container dashboard-home">${pageHead(`Сайн байна уу, ${esc(user.full_name.split(' ').slice(-1)[0])}`, 'Контент үйлдвэрлэлийн хамгийн чухал мэдээллүүд.', actions)}
    <div class="dashboard-modules">${hero}<aside class="dashboard-side-modules">
      <div class="module-card compact-stats"><div class="module-head"><span>Тойм</span><span class="module-live"><i></i> live</span></div><div class="stat-tiles"><div><strong>${active.length}</strong><span>Хийгдэж байгаа</span></div><div><strong>${complete.length}</strong><span>Бэлэн болсон</span></div><div><strong>${unread}</strong><span>Шинэ мэдэгдэл</span></div></div></div>
      ${nextShootCard}
    </aside></div>
    ${others.length?`<section class="section secondary-production"><div class="section-head"><h2 class="section-title">Бусад хийгдэж байгаа</h2><span class="section-note">${others.length} ажил</span></div><div class="order-grid">${others.map(orderCard).join('')}</div></section>`:''}
    ${!active.length?`<section class="section"><div class="section-head"><h2 class="section-title">Сүүлийн бичлэгүүд</h2></div>${complete.length?`<div class="order-grid">${complete.slice(0,2).map(orderCard).join('')}</div>`:''}</section>`:''}
  </div>`,'dashboard');
}

function emptyState(title, copy, button='', path='') {
  return `<div class="card empty"><div class="empty-icon">${icon('film')}</div><h3>${title}</h3><p>${copy}</p>${button?`<button class="btn btn-secondary" data-nav="${path}">${button}</button>`:''}</div>`;
}

function ordersPage() {
  const db=getDb(), user=currentUser(db); const orders=db.orders.filter(o=>o.agent_id===user.id).sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const actions=`<button class="btn btn-primary" data-nav="/orders/new">${icon('plus')}<span class="hide-sm">Шинэ контент захиалах</span></button>`;
  return shell(`<div class="container">${pageHead('Захиалгууд','Таны бүх контент захиалгын түүх.',actions)}${orders.length?`<div class="list">${orders.map(o=>`<div class="card list-row queue-list-row" data-nav="/orders/${o.id}"><div class="row-main"><strong>${esc(o.property_name)}</strong><span>${esc(o.order_number)} · ${esc(o.location)}</span></div><div class="queue-cell">${queueInfoHtml(db,o,true)}</div><div class="row-cell status-cell">${statusPill(o)}</div><div class="row-cell shoot-cell">${o.shoot_date?formatDate(o.shoot_date,true):'Товлогдоогүй'}<span>Зураг авалт</span></div><div class="row-arrow">${icon('arrow')}</div></div>`).join('')}</div>`:emptyState('Одоогоор захиалга алга','Анхны контент захиалгаа үүсгээрэй.','Контент захиалах','/orders/new')}</div>`,'orders');
}

function newOrderPage() {
  const db=getDb(), user=currentUser(db);
  return shell(`<div class="container">${pageHead('Шинэ контент захиалах','Объектын үндсэн мэдээллээ илгээнэ үү. Зураг, бичлэг файл оруулах шаардлагагүй. Бичлэгийн style, зураг авалтын шийдлийг дараа нь хамт ярилцана.',`<button class="btn btn-secondary" data-nav="/orders">${icon('back')} Буцах</button>`)}
    <form id="new-order-form" class="card form-card">
      <div class="form-grid">
        <div class="field"><label>Объектын нэр *</label><input name="property_name" required placeholder="Объектын нэрийг оруулна уу" /></div>
        <div class="field"><label>Байршил *</label><input name="location" required placeholder="Жишээ: Зайсан, ХУД" /></div>
        <div class="field"><label>Үл хөдлөхийн төрөл *</label><select name="property_type" required><option value="">Сонгох</option>${propertyTypes.map(x=>`<option>${x}</option>`).join('')}</select></div>
        <div class="field"><label>Бичлэгийн зорилго *</label><select name="purpose" required><option value="">Сонгох</option>${purposes.map(x=>`<option>${x}</option>`).join('')}</select></div>
        <div class="field full"><label>Объектын товч мэдээлэл *</label><textarea name="description" required placeholder="Талбай, өрөөний тоо, онцлох давуу тал зэрэг..."></textarea></div>
        <div class="field full"><label>Зарын холбоос</label><input name="listing_url" type="url" placeholder="https://..." /></div>
        <div class="field full"><label>Нэмэлт тайлбар</label><textarea name="additional_notes" placeholder="Зураг авалтын цаг, онцгой хүсэлт байвал энд бичнэ үү."></textarea></div>
      </div>
      <div class="form-actions"><button type="button" class="btn btn-secondary" data-nav="/orders">Цуцлах</button><button class="btn btn-primary" type="submit">Захиалга илгээх</button></div>
    </form>
  </div>`,'orders');
}

function orderDetailPage(id) {
  const db=getDb(), user=currentUser(db), order=db.orders.find(o=>o.id===id && o.agent_id===user.id);
  if(!order) return notFound();
  const brief=db.briefs.find(b=>b.order_id===order.id);
  const acts=db.activity.filter(a=>a.order_id===order.id && a.visible_to_agent).sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  const sub=order.sub_status ? subStatusLabels[order.sub_status] : '';
  const price = order.agreed_price!=null ? formatMoney(order.agreed_price) : 'Үнэ тохиролцож байна';
  const revisionRequest=acts.filter(a=>a.activity_type==='REVISION_REQUEST').slice(-1)[0];
  const revisionUi=order.status==='COMPLETED'
    ? `<form id="revision-request-form" class="revision-request-form" data-order-id="${order.id}">
        <div class="revision-request-head"><div><strong>Засварын хүсэлт</strong><span>Өөрчлөх шаардлагатай хэсгээ тодорхой бичнэ үү.</span></div></div>
        <div class="field"><textarea name="revision_message" required maxlength="1200" placeholder="Жишээ: 00:08–00:12 хэсгийн кадрыг солих, төгсгөлийн текстийг богиносгох..."></textarea></div>
        <button class="btn btn-secondary" type="submit">${icon('orders')} Засварын хүсэлт илгээх</button>
      </form>`
    : order.status==='REVISION'
      ? `<div class="revision-request-sent"><strong>Засварын хүсэлт илгээгдсэн</strong><p>${esc(revisionRequest?.public_message?.replace(/^Засварын хүсэлт:\s*/,'')||'Манай баг хүсэлтийг хүлээн авч засварлаж байна.')}</p></div>`
      : '';
  const finalPanel=order.final_video_url
    ? `<section class="card panel final-delivery-agent"><div class="panel-title">Бэлэн болсон бичлэг</div><p class="brief">${order.status==='REVISION'?'Засварын хүсэлт дээр ажиллаж байна.':'Бичлэг тань бэлэн болсон.'}</p><div class="actions" style="margin-top:14px"><a class="btn btn-primary" href="${esc(order.final_video_url)}" target="_blank" rel="noopener">${icon('video')} Бичлэг үзэх</a><a class="btn btn-secondary" href="${esc(order.final_video_url)}" target="_blank" rel="noopener">Линк нээх</a></div>${revisionUi}</section>`
    : order.status==='COMPLETED'
      ? `<section class="card panel final-delivery-agent final-delivery-missing"><div class="panel-title">Бэлэн болсон бичлэг</div><div class="delivery-missing-box">${icon('video')}<div><strong>Бичлэгийн линк хараахан оруулаагүй байна</strong><p>Админ бичлэгийн линк нэммэгц энд <b>Бичлэг үзэх</b> товч автоматаар гарна.</p></div></div></section>`
      : '';
  return shell(`<div class="container">${pageHead(`${esc(order.order_number)} · ${esc(order.property_name)}`, esc(order.location), `<button class="btn btn-secondary" data-nav="/orders">${icon('back')} Буцах</button>`)}
    <div class="detail-grid"><div class="detail-main">
      <section class="card panel"><div class="panel-title">Одоогийн төлөв</div><div class="current-status"><div><h2>${esc(statusLabels[order.status])}</h2><p>${esc(sub||'Явц шинэчлэгдэж байна')}</p></div>${statusPill(order)}</div>${progressHtml(order.status)}</section>
      ${order.shoot_date?`<section class="card panel"><div class="panel-title">Production дараалал</div>${queueInfoHtml(db,order)}</section><section class="card panel"><div class="panel-title">Зураг авалт</div><div class="info-list"><div class="info-row"><span>Огноо, цаг</span><strong>${formatDate(order.shoot_date,true)}</strong></div><div class="info-row"><span>Байршил</span><strong>${esc(order.shoot_location||order.location)}</strong></div></div></section>`:''}
      <section class="card panel"><div class="panel-title">Бичлэгийн төлөвлөгөө</div><p class="brief">${esc(brief?.client_summary || 'Манай баг тантай ярилцсаны дараа бичлэгийн товч төлөвлөгөө энд харагдана.')}</p></section>
      ${finalPanel}
    </div><aside class="detail-side">
      <section class="card panel"><div class="panel-title">Төлбөр</div><div class="price">${price}</div>${paymentPill(order.payment_status)}</section>
      <section class="card panel"><div class="panel-title">Захиалгын мэдээлэл</div><div class="info-list"><div class="info-row"><span>Төрөл</span><strong>${esc(order.property_type)}</strong></div><div class="info-row"><span>Зорилго</span><strong>${esc(order.purpose)}</strong></div><div class="info-row"><span>Захиалсан</span><strong>${formatDate(order.created_at,true)}</strong></div></div></section>
      <section class="card panel"><div class="panel-title">Үйл явц</div>${acts.length?`<div class="timeline">${acts.map(a=>`<div class="timeline-item"><div class="timeline-time">${formatDate(a.created_at,true)}</div><div class="timeline-text">${esc(a.public_message)}</div></div>`).join('')}</div>`:'<p class="brief">Одоогоор шинэчлэлт алга.</p>'}</section>
    </aside></div>
  </div>`,'orders');
}


function queuePage() {
  const db=getDb(), user=currentUser(db);
  const queue=productionQueue(db);
  const mine=queue.filter(o=>o.agent_id===user.id);
  const firstMineIndex=queue.findIndex(o=>o.agent_id===user.id);
  const ahead=firstMineIndex<0?null:firstMineIndex;
  const estimate=ahead==null?null:ahead*QUEUE_HOURS_PER_CONTENT;
  const summary = firstMineIndex<0
    ? `<div class="queue-summary-card queue-summary-empty"><span>Таны идэвхтэй контент</span><strong>Дараалалд алга</strong><p>Төлбөр төлөгдөж, зураг авалт эхэлсний дараа контент энд автоматаар орно.</p></div>`
    : `<div class="queue-summary-card"><span>Таны хамгийн ойрын контент</span><strong>${ahead===0?'Дараагийн ээлж':`Таны өмнө ${ahead} контент байна`}</strong><p>${ahead===0?'Боловсруулалт удахгүй эхэлнэ.':`Ойролцоогоор ${estimate} цагийн дараа хийгдэж эхэлнэ.`}</p></div>`;
  const rows=queue.map((o,i)=>{
    const isMine=o.agent_id===user.id;
    const state=['EDITING','REVIEW','REVISION'].includes(o.status)?'Хийгдэж байна':(i===0?'Дараагийн ээлж':'Хүлээгдэж байна');
    const wait=i*QUEUE_HOURS_PER_CONTENT;
    return `<div class="queue-position-row ${isMine?'mine':''}">
      <div class="queue-position-index">${i+1}</div>
      <div class="queue-position-main"><strong>${esc(o.order_number)}</strong><span>${isMine?'Таны контент':'Контент'}</span></div>
      <div class="queue-position-state"><strong>${state}</strong><span>${i===0?'Одоо':`~${wait} цаг`}</span></div>
      ${isMine?'<span class="queue-you-badge">ТАНЫХ</span>':''}
    </div>`;
  }).join('');
  return shell(`<div class="container queue-page">${pageHead('Дараалал','Одоо үйлдвэрлэлд орсон контентуудын дарааллыг харна. 1 контент ≈ 8 цаг.')}
    ${summary}
    <section class="section"><div class="section-head"><h2 class="section-title">Үйлдвэрлэлийн дараалал</h2><span class="section-note">${queue.length} контент</span></div>
    ${queue.length?`<div class="queue-position-list">${rows}</div>`:emptyState('Дараалал хоосон байна','Төлбөр төлөгдөж, зураг авалт эхэлсэн контент одоогоор алга.')}
    </section>
    <div class="queue-rule-note"><strong>Дараалалд орох нөхцөл</strong><span>Төлбөр төлөгдсөн + зураг авалт эхэлсэн + бэлэн болоогүй контентууд л энд тоологдоно.</span></div>
  </div>`,'queue');
}

function videosPage() {
  const db=getDb(), user=currentUser(db), orders=db.orders.filter(o=>o.agent_id===user.id).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
  const q=route().split('?')[1]||''; const params=new URLSearchParams(q); const tab=params.get('tab')||'active';
  let filtered = tab==='completed'?orders.filter(o=>o.status==='COMPLETED'):tab==='upcoming'?orders.filter(o=>o.status==='SHOOTING' && o.shoot_date):orders.filter(o=>o.status!=='COMPLETED');
  return shell(`<div class="container">${pageHead('Миний бичлэгүүд','Хийгдэж байгаа болон бэлэн болсон контентууд.')}
    <div class="tabs"><button class="tab ${tab==='active'?'active':''}" data-nav="/videos?tab=active">Хийгдэж байгаа</button><button class="tab ${tab==='upcoming'?'active':''}" data-nav="/videos?tab=upcoming">Удахгүй</button><button class="tab ${tab==='completed'?'active':''}" data-nav="/videos?tab=completed">Бэлэн болсон</button></div>
    ${filtered.length?`<div class="order-grid">${filtered.map(orderCard).join('')}</div>`:emptyState('Энд одоогоор бичлэг алга','Тухайн ангилалд харагдах контент одоогоор байхгүй байна.')}
  </div>`,'videos');
}


function profilePage() {
  const db=getDb(), user=currentUser(db);
  const logo=user.organization_logo_url||'';
  const avatar=user.avatar_url||'';
  return shell(`<div class="container profile-page-v10">${pageHead('Профайл','Хувийн мэдээлэл, зураг болон байгууллагын мэдээллээ удирдана.')}
    <form id="profile-form" class="profile-layout-v10">
      <aside class="profile-media-stack-v10">
        <section class="card profile-media-card-v10 profile-photo-card-v10">
          <div class="profile-card-kicker">Профайл зураг</div>
          <div class="profile-card-copy">Таны жижиг профайл зураг.</div>
          <div id="profile-avatar-preview" class="profile-avatar-preview profile-avatar-v10 ${avatar?'has-photo':''}">${avatar?`<img src="${esc(avatar)}" alt="Профайл зураг" />`:`<span>${esc(initials(user.full_name))}</span>`}</div>
          <input id="profile-avatar-input" name="avatar_image" type="file" accept="image/png,image/jpeg,image/webp" hidden />
          <input id="remove-avatar-flag" name="remove_avatar" type="hidden" value="0" />
          <div class="profile-media-actions-v10">
            <label class="btn btn-secondary" for="profile-avatar-input">${icon('upload')} Зураг оруулах</label>
            ${avatar?`<button class="profile-remove-btn-v10" type="button" data-action="remove-profile-avatar">Арилгах</button>`:''}
          </div>
          <p class="help profile-help-v10">JPG, PNG, WEBP · 10MB хүртэл.</p>
        </section>

        <section class="card profile-media-card-v10 profile-logo-card-v10">
          <div class="profile-card-kicker">Байгууллагын лого</div>
          <div class="profile-card-copy">Админ талаас татаж авч ашиглах албан ёсны лого.</div>
          <div id="profile-logo-preview" class="profile-logo-preview profile-logo-v10 ${logo?'has-logo':''}">${logo?`<img src="${esc(logo)}" alt="Байгууллагын лого" />`:`<span>${esc(initials(orgName(user)||'RF'))}</span>`}</div>
          <input id="profile-logo-input" name="organization_logo" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" hidden />
          <input id="remove-logo-flag" name="remove_logo" type="hidden" value="0" />
          <div class="profile-media-actions-v10">
            <label class="btn btn-secondary" for="profile-logo-input">${icon('upload')} Лого оруулах</label>
            ${logo?`<button class="profile-remove-btn-v10" type="button" data-action="remove-profile-logo">Арилгах</button>`:''}
          </div>
        </section>
      </aside>

      <div class="profile-info-stack-v10">
        <section class="card profile-info-card-v10 profile-personal-card-v10">
          <div class="profile-info-head-v10">
            <div>
              <span>Хувийн мэдээлэл</span>
              <h2>${esc(user.full_name)}</h2>
            </div>
            <div class="profile-mini-avatar-v10">${userAvatarHtml(user)}</div>
          </div>
          <div class="form-grid profile-form-grid-v10">
            <div class="field"><label>Овог нэр</label><input name="full_name" value="${esc(user.full_name)}" required /></div>
            <div class="field"><label>Утасны дугаар</label><input name="phone" value="${esc(user.phone||'')}" /></div>
            <div class="field full"><label>И-мэйл</label><input value="${esc(user.email)}" disabled /><div class="help">И-мэйл солих шаардлагатай бол админтай холбогдоно уу.</div></div>
          </div>
        </section>

        <section class="card profile-info-card-v10 profile-company-card-v10">
          <div class="profile-info-head-v10 compact">
            <div>
              <span>Байгууллагын мэдээлэл</span>
              <h2>${esc(orgName(user)||'Байгууллага оруулаагүй')}</h2>
            </div>
          </div>
          <div class="form-grid profile-form-grid-v10">
            <div class="field"><label>Байгууллага / агентлагийн нэр</label><input name="organization_name" value="${esc(orgName(user))}" placeholder="Байгууллагын нэр" /></div>
            <div class="field"><label>Салбарын нэр</label><input name="branch_name" value="${esc(user.branch_name||'')}" placeholder="Салбарын нэр" /></div>
          </div>
          <div class="profile-save-row-v10">
            <span>Өөрчлөлт хийсний дараа хадгална уу.</span>
            <button class="btn btn-primary profile-save-v10" type="submit">Хадгалах</button>
          </div>
        </section>
      </div>
    </form>

    <form id="change-password-form" class="card profile-security-card-v32">
      <div class="profile-info-head-v10 compact">
        <div><span>Нууцлал</span><h2>Нууц үг солих</h2></div>
      </div>
      <div class="form-grid profile-form-grid-v10">
        <div class="field"><label>Одоогийн нууц үг</label><input name="current_password" type="password" required minlength="6" autocomplete="current-password" placeholder="Одоогийн нууц үг" /></div>
        <div class="field"><label>Шинэ нууц үг</label><input id="change-password-new" name="new_password" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг" /></div>
        <div class="field"><label>Шинэ нууц үг давтах</label><input id="change-password-confirm" name="new_password_confirm" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг давтах" /></div>
      </div>
      <div class="profile-save-row-v10">
        <span>Нууц үгээ тогтмол шинэчилж, бусадтай бүү хуваалцаарай.</span>
        <button class="btn btn-primary profile-save-v10" type="submit">Нууц үг солих</button>
      </div>
    </form>
  </div>`,'profile');
}


function adminProfilePage() {
  const db=getDb(), user=currentUser(db);
  const avatar=user.avatar_url||'';
  return shell(`<div class="container profile-page-v10 admin-profile-page-v31">${pageHead('Профайл','Админы хувийн мэдээлэл болон профайл зургаа удирдана.')}
    <form id="admin-profile-form" class="profile-layout-v10 admin-profile-layout-v31">
      <aside class="profile-media-stack-v10 admin-profile-media-v31">
        <section class="card profile-media-card-v10 profile-photo-card-v10 admin-profile-photo-card-v31">
          <div class="profile-card-kicker">Профайл зураг</div>
          <div class="profile-card-copy">Админы профайл зураг.</div>
          <div id="profile-avatar-preview" class="profile-avatar-preview profile-avatar-v10 ${avatar?'has-photo':''}">${avatar?`<img src="${esc(avatar)}" alt="Профайл зураг" />`:`<span>${esc(initials(user.full_name))}</span>`}</div>
          <input id="profile-avatar-input" name="avatar_image" type="file" accept="image/png,image/jpeg,image/webp" hidden />
          <input id="remove-avatar-flag" name="remove_avatar" type="hidden" value="0" />
          <div class="profile-media-actions-v10">
            <label class="btn btn-secondary" for="profile-avatar-input">${icon('upload')} Зураг оруулах</label>
            ${avatar?`<button class="profile-remove-btn-v10" type="button" data-action="remove-profile-avatar">Арилгах</button>`:''}
          </div>
          <p class="help profile-help-v10">JPG, PNG, WEBP · 10MB хүртэл.</p>
        </section>

        <section class="admin-role-card admin-role-card-v31">
          <div class="admin-role-icon">${icon('settings')}</div>
          <span>Системийн эрх</span>
          <strong>Админ</strong>
          <p>Захиалга, агент, зураг авалт болон production төлөвийг удирдах эрхтэй.</p>
        </section>
      </aside>

      <div class="profile-info-stack-v10">
        <section class="card profile-info-card-v10 profile-personal-card-v10 admin-profile-info-v31">
          <div class="profile-info-head-v10">
            <div>
              <span>Хувийн мэдээлэл</span>
              <h2>${esc(user.full_name)}</h2>
            </div>
            <div class="profile-mini-avatar-v10">${userAvatarHtml(user)}</div>
          </div>
          <div class="form-grid profile-form-grid-v10">
            <div class="field"><label>Овог нэр</label><input name="full_name" value="${esc(user.full_name)}" required /></div>
            <div class="field"><label>Утасны дугаар</label><input name="phone" value="${esc(user.phone||'')}" placeholder="Утасны дугаараа оруулна уу" /></div>
            <div class="field full"><label>И-мэйл</label><input value="${esc(user.email)}" disabled /><div class="help">И-мэйл солих шаардлагатай бол админтай холбогдоно уу.</div></div>
            <div class="field full"><label>Эрх</label><input value="Админ" disabled /></div>
          </div>
          <div class="profile-save-row-v10 admin-profile-save-row-v31">
            <span>Өөрчлөлт хийсний дараа хадгална уу.</span>
            <button class="btn btn-primary profile-save-v10" type="submit">Хадгалах</button>
          </div>
        </section>
      </div>
    </form>

    <form id="change-password-form" class="card profile-security-card-v32 admin-profile-security-v32">
      <div class="profile-info-head-v10 compact">
        <div><span>Нууцлал</span><h2>Нууц үг солих</h2></div>
      </div>
      <div class="form-grid profile-form-grid-v10">
        <div class="field"><label>Одоогийн нууц үг</label><input name="current_password" type="password" required minlength="6" autocomplete="current-password" placeholder="Одоогийн нууц үг" /></div>
        <div class="field"><label>Шинэ нууц үг</label><input id="change-password-new" name="new_password" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг" /></div>
        <div class="field"><label>Шинэ нууц үг давтах</label><input id="change-password-confirm" name="new_password_confirm" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг давтах" /></div>
      </div>
      <div class="profile-save-row-v10">
        <span>Админ эрхтэй account тул хүчтэй, давтагдаагүй нууц үг ашиглана уу.</span>
        <button class="btn btn-primary profile-save-v10" type="submit">Нууц үг солих</button>
      </div>
    </form>
  </div>`,'admin-profile');
}

function loginPage(mode='login') {
  const register=mode==='register';
  return `<div class="auth-page"><section class="auth-visual"><div class="auth-brand"><span class="brand-mark brand-mark-logo">${brandLogoHtml()}</span>${BRAND_NAME}</div><div class="auth-quote"><h1>Контентын явц<br>нэг дор.</h1><p>Үл хөдлөхийн агент, контент production багийн хоорондох захиалга, зураг авалт, edit, delivery-г цэгцтэй удирдах веб орчин.</p></div><div style="color:#777c85;font-size:11px">Real estate контент үйлдвэрлэлийн портал</div></section><section class="auth-side"><div class="auth-box"><h2>${register?'Бүртгэл үүсгэх':'Тавтай морил'}</h2><p>${register?'Контент захиалга өгч, үйлдвэрлэлийн явцаа нэг дор хянаарай.':'Өөрийн захиалга, зураг авалт, бичлэгийн явцаа харахын тулд нэвтэрнэ үү.'}</p>
  <form id="${register?'register-form':'login-form'}" class="auth-form">
    ${register?`<div class="field"><label>Овог нэр</label><input name="full_name" required placeholder="Овог нэрээ оруулна уу" autocomplete="name" /></div><div class="field"><label>Утасны дугаар</label><input name="phone" required placeholder="Утасны дугаараа оруулна уу" autocomplete="tel" /></div><div class="field"><label>Байгууллага / агентлаг</label><input name="agency_name" placeholder="Байгууллагын нэр" /></div>`:''}
    ${register?`<div class="field"><label>И-мэйл</label><input name="email" type="email" required placeholder="И-мэйл хаягаа оруулна уу" autocomplete="email" /></div>`:`<div class="field"><label>И-мэйл</label><input name="identifier" type="text" inputmode="email" required placeholder="И-мэйл хаягаа оруулна уу" autocomplete="username" /></div>`}
    <div class="field"><label>Нууц үг</label><input id="register-password" name="password" type="password" required minlength="6" placeholder="••••••••" autocomplete="${register?'new-password':'current-password'}" /></div>
    ${register?`<div class="field"><label>Нууц үг давтах</label><input id="register-password-confirm" name="password_confirm" type="password" required minlength="6" placeholder="••••••••" autocomplete="new-password" /><div class="help">Дээрх нууц үгтэй яг ижил оруулна.</div></div>`:`<div class="auth-recovery-link"><button type="button" data-nav="/forgot-password">Нууц үгээ мартсан уу?</button></div>`}
    <button class="btn btn-primary" type="submit">${register?'Бүртгүүлэх':'Нэвтрэх'}</button>
  </form>
  <div class="auth-foot">${register?'Бүртгэлтэй юу?':'Бүртгэлгүй юу?'} <button data-nav="${register?'/login':'/register'}">${register?'Нэвтрэх':'Бүртгэл үүсгэх'}</button></div>
  ${!register && !REMOTE_ENABLED?`<div class="demo-box"><strong>Demo нэвтрэх</strong><br>Agent: agent@demo.mn / demo123<br>Admin: admin@demo.mn / admin123</div>`:''}
  </div></section></div>`;
}


function forgotPasswordPage() {
  return `<div class="auth-page"><section class="auth-visual"><div class="auth-brand"><span class="brand-mark brand-mark-logo">${brandLogoHtml()}</span>${BRAND_NAME}</div><div class="auth-quote"><h1>Нууц үгээ<br>сэргээх.</h1><p>Бүртгэлтэй и-мэйл хаяг руу нууц үг шинэчлэх хамгаалалттай холбоос илгээнэ.</p></div></section><section class="auth-side"><div class="auth-box"><h2>Нууц үгээ мартсан уу?</h2><p>Бүртгэлтэй и-мэйл хаягаа оруулна уу.</p>
    <form id="forgot-password-form" class="auth-form">
      <div class="field"><label>И-мэйл</label><input name="email" type="email" required autocomplete="email" placeholder="И-мэйл хаягаа оруулна уу" /></div>
      <button class="btn btn-primary" type="submit">Сэргээх холбоос илгээх</button>
    </form>
    <div class="auth-foot"><button type="button" data-nav="/login">Нэвтрэх рүү буцах</button></div>
  </div></section></div>`;
}

function resetPasswordPage() {
  return `<div class="auth-page"><section class="auth-visual"><div class="auth-brand"><span class="brand-mark brand-mark-logo">${brandLogoHtml()}</span>${BRAND_NAME}</div><div class="auth-quote"><h1>Шинэ нууц үг<br>тохируулах.</h1><p>Шинэ нууц үгээ хоёр удаа ижил оруулж баталгаажуулна.</p></div></section><section class="auth-side"><div class="auth-box"><h2>Нууц үг шинэчлэх</h2><p>Доорх шинэ нууц үг цаашид таны нэвтрэх нууц үг болно.</p>
    <form id="reset-password-form" class="auth-form">
      <div class="field"><label>Шинэ нууц үг</label><input id="reset-password-new" name="new_password" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг" /></div>
      <div class="field"><label>Шинэ нууц үг давтах</label><input id="reset-password-confirm" name="new_password_confirm" type="password" required minlength="6" autocomplete="new-password" placeholder="Шинэ нууц үг давтах" /></div>
      <button class="btn btn-primary" type="submit">Нууц үг шинэчлэх</button>
    </form>
  </div></section></div>`;
}

function adminDashboard() {
  const db=getDb(); const orders=db.orders;
  const count=s=>orders.filter(o=>o.status===s).length;
  const today=new Date().toISOString().slice(0,10);
  const upcoming=orders.filter(o=>o.shoot_date && o.shoot_date.slice(0,10)>=today && o.status!=='COMPLETED').sort((a,b)=>new Date(a.shoot_date)-new Date(b.shoot_date));
  const nextShoot=upcoming[0];
  const newNotifs=(db.notifications||[]).filter(n=>n.type==='NEW_ORDER'&&!n.read_at).length;
  const kpis=[
    ['Төлөвлөлт',count('PLANNING'),'PLANNING'],
    ['Зураг авалт',count('SHOOTING'),'SHOOTING'],
    ['Боловсруулалт',count('EDITING'),'EDITING'],
    ['Хянаж байгаа',count('REVIEW'),'REVIEW'],
    ['Засвар',count('REVISION'),'REVISION'],
    ['Бэлэн',count('COMPLETED'),'COMPLETED']
  ];
  const recent=[...orders].sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)).slice(0,6);
  const nextPanel=nextShoot?`<div class="admin-next-shoot" data-nav="/admin/orders/${nextShoot.id}"><div class="module-head"><span>Дараагийн зураг авалт</span>${icon('calendar')}</div><div class="admin-next-time">${formatDate(nextShoot.shoot_date,true)}</div><strong>${esc(nextShoot.property_name)}</strong><p>${esc(nextShoot.shoot_location||nextShoot.location)}</p><span class="mini-link">Нээх ${icon('arrow')}</span></div>`:`<div class="admin-next-shoot"><div class="module-head"><span>Дараагийн зураг авалт</span>${icon('calendar')}</div><div class="module-empty-mark">—</div><strong>Товлогдоогүй</strong></div>`;
  return shell(`<div class="container admin-home">${pageHead('Хяналтын самбар','Өнөөдрийн production ажлын тойм.',`<button class="btn btn-secondary" data-nav="/admin/orders">Бүх захиалга</button>`)}
    <div class="admin-command-grid"><section class="admin-command-center"><div class="feature-top"><div><span class="feature-kicker">Production control</span><div class="feature-order-no">${BRAND_NAME}</div></div><span class="module-live light"><i></i> ажиллаж байна</span></div><div class="admin-command-title"><h2>Ажлын урсгал</h2><p>Захиалга бүрийн одоогийн шат нэг дор.</p></div><div class="admin-kpis">${kpis.map(([l,v,status])=>`<button class="admin-kpi admin-kpi-link" type="button" data-nav="/admin/orders?status=${status}" title="${l} шатны захиалгуудыг харах"><span>${l}</span><strong>${v}</strong><small>Нээх ${icon('arrow')}</small></button>`).join('')}</div></section><aside class="admin-side-stack"><div class="module-card admin-alert-card"><div class="module-head"><span>Шинэ захиалга</span>${icon('bell')}</div><strong>${newNotifs}</strong><p>Уншаагүй admin мэдэгдэл</p></div>${nextPanel}</aside></div>
    <section class="section"><div class="section-head"><h2 class="section-title">Удахгүй болох зураг авалт</h2><span class="section-note">${upcoming.length} тов</span></div>${upcoming.length?`<div class="shoot-list">${upcoming.slice(0,5).map(o=>shootItem(o,db)).join('')}</div>`:emptyState('Зураг авалт товлогдоогүй','Одоогоор upcoming зураг авалт алга.')}</section>
    <section class="section"><div class="section-head"><h2 class="section-title">Сүүлд шинэчлэгдсэн</h2></div><div class="card table-wrap">${adminOrdersTable(recent,db)}</div></section>
  </div>`,'admin');
}

function adminOrdersTable(orders,db) {
  return `<table><thead><tr><th>Захиалга</th><th>Агент</th><th>Төлөв</th><th>Зураг авалт</th><th>Төлбөр</th></tr></thead><tbody>${orders.map(o=>{const a=db.profiles.find(p=>p.id===o.agent_id);return `<tr data-nav="/admin/orders/${o.id}" data-order-row data-search="${esc(`${o.order_number} ${o.property_name} ${o.location} ${a?.full_name||''}`.toLowerCase())}" data-status="${o.status}"><td><div class="table-main"><strong>${esc(o.property_name)}</strong><span>${esc(o.order_number)} · ${esc(o.location)}</span></div></td><td>${a?`<button class="agent-link" data-nav="/admin/agents/${a.id}" type="button"><strong>${esc(a.full_name)}</strong><span>${esc(agentSubtitle(a))}</span></button>`:'—'}</td><td>${statusPill(o)}</td><td>${o.shoot_date?formatDate(o.shoot_date,true):'—'}</td><td>${paymentPill(o.payment_status)}</td></tr>`}).join('')}</tbody></table>`;
}

function adminOrdersPage() {
  const db=getDb();
  const q=route().split('?')[1]||'';
  const params=new URLSearchParams(q);
  const status=params.get('status')||'';
  const all=[...db.orders].sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
  const orders=status?all.filter(o=>o.status===status):all;
  const subtitle=status
    ? `${statusLabels[status]||status} шатны ${orders.length} захиалга.`
    : 'Бүх контент үйлдвэрлэлийн ажлыг удирдана.';
  return shell(`<div class="container">${pageHead('Захиалгууд',subtitle)}
    <div class="filter-row"><input id="admin-order-search" placeholder="Захиалга, агент хайх..."/><select id="admin-status-filter"><option value="">Бүх төлөв</option>${Object.entries(statusLabels).map(([v,l])=>`<option value="${v}" ${status===v?'selected':''}>${l}</option>`).join('')}</select></div>
    <div class="stage-filter-chips"><button type="button" class="stage-chip ${!status?'active':''}" data-nav="/admin/orders">Бүгд <strong>${all.length}</strong></button>${Object.entries(statusLabels).map(([v,l])=>`<button type="button" class="stage-chip ${status===v?'active':''}" data-nav="/admin/orders?status=${v}">${l} <strong>${all.filter(o=>o.status===v).length}</strong></button>`).join('')}</div>
    <div class="card table-wrap">${orders.length?adminOrdersTable(orders,db):`<div class="empty compact"><h3>${esc(statusLabels[status]||'Энэ шат')} захиалга алга</h3><p>Одоогоор энэ шатанд байгаа контент байхгүй байна.</p></div>`}</div>
  </div>`,'admin-orders');
}

function adminOrderDetailPage(id) {
  const db=getDb(), order=db.orders.find(o=>o.id===id); if(!order) return notFound();
  const agent=db.profiles.find(p=>p.id===order.agent_id); const admins=db.profiles.filter(p=>p.role==='admin'); const brief=db.briefs.find(b=>b.order_id===order.id);
  const acts=db.activity.filter(a=>a.order_id===order.id).sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  const revisionRequests=acts.filter(a=>a.activity_type==='REVISION_REQUEST');
  const latestRevision=revisionRequests.slice(-1)[0];
  const shootLocal=order.shoot_date?new Date(order.shoot_date):null;
  const shootValue=shootLocal?`${shootLocal.getFullYear()}-${String(shootLocal.getMonth()+1).padStart(2,'0')}-${String(shootLocal.getDate()).padStart(2,'0')}T${String(shootLocal.getHours()).padStart(2,'0')}:${String(shootLocal.getMinutes()).padStart(2,'0')}`:'';
  return shell(`<div class="container">${pageHead(`${esc(order.order_number)} · ${esc(order.property_name)}`, `${esc(agent?.full_name||'Агент')} · ${esc(order.location)}`,`<button class="btn btn-secondary" data-nav="/admin/orders">${icon('back')} Буцах</button>`)}
    <form id="admin-order-form" data-order-id="${order.id}"><div class="detail-grid"><div class="detail-main">
      <section class="card panel"><div class="panel-title">Production</div><div class="form-grid"><div class="field"><label>Үндсэн төлөв</label><select name="status">${Object.entries(statusLabels).map(([v,l])=>`<option value="${v}" ${order.status===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Дэд төлөв</label><select name="sub_status"><option value="">—</option>${Object.entries(subStatusLabels).map(([v,l])=>`<option value="${v}" ${order.sub_status===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Зураг авалтын огноо, цаг</label><input name="shoot_date" type="datetime-local" value="${shootValue}"/></div><div class="field full"><label>Зураг авалтын байршил</label><input name="shoot_location" value="${esc(order.shoot_location||'')}" /></div><div class="field full"><label class="queue-start-toggle"><input name="shoot_started" type="checkbox" ${effectiveShootStartedAt(order)?'checked':''} /><span><strong>Зураг авалт эхэлсэн</strong><small>Төлбөр төлөгдсөн үед энэ захиалга production дараалалд тоологдоно.</small></span></label></div></div>${progressHtml(order.status)}</section>
      ${latestRevision?`<section class="card panel revision-admin-alert"><div class="panel-title">Agent-ийн засварын хүсэлт</div><div class="revision-admin-message">${esc(latestRevision.public_message||'Засварын хүсэлт ирсэн.')}</div><div class="revision-admin-meta">${formatDate(latestRevision.created_at,true)}</div></section>`:''}
      <section class="card panel"><div class="panel-title">Creative brief</div><div class="form-grid"><div class="field"><label>Зорилго</label><input name="objective" value="${esc(brief?.objective||'')}"/></div><div class="field"><label>Онцлох давуу тал</label><input name="selling_points" value="${esc(brief?.selling_points||'')}"/></div><div class="field"><label>Зураг авалтын концепц</label><input name="filming_concept" value="${esc(brief?.filming_concept||'')}"/></div><div class="field"><label>Edit style</label><input name="editing_style" value="${esc(brief?.editing_style||'')}"/></div><div class="field full"><label>Agent-д харагдах товч төлөвлөгөө</label><textarea name="client_summary">${esc(brief?.client_summary||'')}</textarea></div><div class="field full"><label>Дотоод тэмдэглэл</label><textarea name="internal_notes">${esc(brief?.internal_notes||'')}</textarea></div></div></section>
      <section class="card panel"><div class="panel-title">Public update</div><div class="field"><label>Agent-д харагдах шинэчлэлт</label><input name="public_update" placeholder="Жишээ: Боловсруулалт эхэллээ" /></div></section>
    </div><aside class="detail-side">
      <section class="card panel"><div class="panel-title">Төлбөр</div><div class="field"><label>Тохиролцсон үнэ</label><input name="agreed_price" type="number" min="0" step="1000" value="${order.agreed_price??''}" placeholder="350000" /></div><div class="field" style="margin-top:14px"><label>Төлбөрийн төлөв</label><select name="payment_status">${Object.entries(paymentLabels).map(([v,l])=>`<option value="${v}" ${order.payment_status===v?'selected':''}>${l}</option>`).join('')}</select></div></section>
      <section class="card panel final-delivery-admin"><div class="panel-title">Бэлэн болсон бичлэг</div><div class="field"><label>Бичлэгийн линк</label><input name="final_video_url" value="${esc(order.final_video_url||'')}" placeholder="Google Drive, YouTube, Vimeo зэрэг линк..." /></div>${order.status==='COMPLETED'&&!order.final_video_url?`<div class="delivery-admin-warning">Бэлэн болсон төлөвтэй боловч бичлэгийн линк оруулаагүй байна.</div>`:`<p class="help">Линк хадгалагдсаны дараа agent-ийн захиалгын дэлгэрэнгүй болон “Бэлэн болсон” хэсэгт шууд харагдана.</p>`}</section>
      <section class="card panel"><div class="panel-title">Агент</div>${agent?`<button class="agent-profile-mini" type="button" data-nav="/admin/agents/${agent.id}">${userAvatarHtml(agent,'agent-card-logo')}<span><strong>${esc(agent.full_name)}</strong><small>${esc(agentSubtitle(agent))}</small></span>${icon('arrow')}</button>`:''}<div class="info-list" style="margin-top:14px"><div class="info-row"><span>Утас</span><strong>${esc(agent?.phone||'—')}</strong></div><div class="info-row"><span>Байгууллага</span><strong>${esc(orgName(agent||{})||'—')}</strong></div><div class="info-row"><span>Салбар</span><strong>${esc(agent?.branch_name||'—')}</strong></div></div></section>
      <button class="btn btn-primary" type="submit" style="width:100%;min-height:46px">Өөрчлөлт хадгалах</button>
    </aside></div></form>
    <section class="section"><div class="section-head"><h2 class="section-title">Activity</h2></div><div class="card panel">${acts.length?`<div class="timeline">${acts.map(a=>`<div class="timeline-item"><div class="timeline-time">${formatDate(a.created_at,true)} · ${a.visible_to_agent?'Agent-д харагдана':'Дотоод'}</div><div class="timeline-text">${esc(a.public_message||a.internal_message||'Шинэчлэлт')}</div></div>`).join('')}</div>`:'<p class="brief">Activity алга.</p>'}</div></section>
  </div>`,'admin-orders');
}

function adminAgentsPage() {
  const db=getDb(), agents=db.profiles.filter(p=>p.role==='agent');
  return shell(`<div class="container">${pageHead('Агентууд','Бүртгэлтэй агентууд ба тэдний production түүх.')}
    <div class="card table-wrap"><table><thead><tr><th>Агент</th><th>Утас</th><th>Байгууллага / салбар</th><th>Идэвхтэй</th><th>Бэлэн</th><th>Нийт</th></tr></thead><tbody>${agents.map(a=>{const os=db.orders.filter(o=>o.agent_id===a.id);return `<tr data-nav="/admin/agents/${a.id}"><td><div class="agent-table-person">${userAvatarHtml(a,'table-avatar')}<div class="table-main"><strong>${esc(a.full_name)}</strong><span>${esc(a.email)}</span></div></div></td><td>${esc(a.phone||'—')}</td><td>${esc(agentSubtitle(a))}</td><td>${os.filter(o=>o.status!=='COMPLETED').length}</td><td>${os.filter(o=>o.status==='COMPLETED').length}</td><td>${os.length}</td></tr>`}).join('')}</tbody></table></div>
  </div>`,'admin-agents');
}

function adminAgentDetailPage(id) {
  const db=getDb(), agent=db.profiles.find(p=>p.id===id&&p.role==='agent'); if(!agent) return notFound();
  const os=db.orders.filter(o=>o.agent_id===id).sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const logo=agent.organization_logo_url||'';
  const logoName=(orgName(agent)||agent.full_name||'organization').replace(/[^a-zA-Z0-9А-Яа-яӨөҮү_-]+/g,'-');
  return shell(`<div class="container">${pageHead(agent.full_name,`${esc(agentSubtitle(agent))} · ${esc(agent.phone||'')}`,`<button class="btn btn-secondary" data-nav="/admin/agents">${icon('back')} Буцах</button>`)}
    <div class="detail-grid"><div class="detail-main"><section class="card panel"><div class="panel-title">Захиалгын түүх</div>${os.length?`<div class="list">${os.map(o=>`<div class="card list-row" data-nav="/admin/orders/${o.id}"><div class="row-main"><strong>${esc(o.property_name)}</strong><span>${esc(o.order_number)} · ${esc(o.location)}</span></div><div class="row-cell">${statusPill(o)}</div><div class="row-cell">${formatDate(o.created_at)}</div><div>${icon('arrow')}</div></div>`).join('')}</div>`:'<p class="brief">Захиалга алга.</p>'}</section></div><aside class="detail-side"><section class="card panel"><div class="panel-title">Профайл</div><div class="agent-profile-head">${userAvatarHtml(agent,'agent-profile-photo')}<div><strong>${esc(agent.full_name)}</strong><span>${esc(agentSubtitle(agent))}</span></div></div><div class="info-list"><div class="info-row"><span>И-мэйл</span><strong>${esc(agent.email)}</strong></div><div class="info-row"><span>Утас</span><strong>${esc(agent.phone||'—')}</strong></div><div class="info-row"><span>Байгууллага</span><strong>${esc(orgName(agent)||'—')}</strong></div><div class="info-row"><span>Салбар</span><strong>${esc(agent.branch_name||'—')}</strong></div></div></section><section class="card panel"><div class="panel-title">Байгууллагын лого</div>${organizationLogoHtml(agent,'admin-org-logo')}${logo?`<a class="btn btn-secondary logo-download-btn" href="${esc(logo)}" download="${esc(logoName)}-logo.png">${icon('upload')} Лого татах</a>`:`<p class="brief">Агент одоогоор лого оруулаагүй байна.</p>`}</section></aside></div>
  </div>`,'admin-agents');
}

function shootItem(o,db) {
  const a=db.profiles.find(p=>p.id===o.agent_id); const d=new Date(o.shoot_date);
  return `<div class="card shoot-item" data-nav="/admin/orders/${o.id}"><div class="shoot-time">${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}</div><div><strong>${esc(o.property_name)}</strong>${a?`<button class="agent-link compact" type="button" data-nav="/admin/agents/${a.id}">${esc(a.full_name)} · ${esc(o.location)}</button>`:`<span>${esc(o.location)}</span>`}</div><div><strong>${esc(o.shoot_location||o.location)}</strong><span>${formatDate(o.shoot_date)}</span></div>${statusPill(o)}</div>`;
}

function adminShootsPage() {
  const db=getDb(); const orders=db.orders.filter(o=>o.shoot_date && o.status!=='COMPLETED').sort((a,b)=>new Date(a.shoot_date)-new Date(b.shoot_date));
  const today=new Date(); const todayKey=today.toISOString().slice(0,10); const week=new Date(today); week.setDate(week.getDate()+7);
  const todayItems=orders.filter(o=>o.shoot_date.slice(0,10)===todayKey);
  const weekItems=orders.filter(o=>new Date(o.shoot_date)>today && new Date(o.shoot_date)<=week);
  const later=orders.filter(o=>new Date(o.shoot_date)>week);
  const block=(title,items)=>`<section class="section"><div class="section-head"><h2 class="section-title">${title}</h2><span class="section-note">${items.length}</span></div>${items.length?`<div class="shoot-list">${items.map(o=>shootItem(o,db)).join('')}</div>`:emptyState(`${title} зураг авалт алга`,'Товлогдсон зураг авалт байхгүй байна.')}</section>`;
  return shell(`<div class="container">${pageHead('Зураг авалт','Production schedule-ийг энгийнээр хянах хэсэг.')}${block('Өнөөдөр',todayItems)}${block('Энэ долоо хоног',weekItems)}${block('Удахгүй',later)}</div>`,'admin-shoots');
}


function notFound() {
  const u=currentUser(); const content=`<div class="container">${emptyState('Хуудас олдсонгүй','Таны нээх гэсэн хуудас байхгүй эсвэл танд хандах эрх алга.','Нүүр рүү буцах',u?.role==='admin'?'/admin':'/dashboard')}</div>`;
  return u?shell(content,u.role==='admin'?'admin':'dashboard'):loginPage();
}

async function render() {
  try {
    if (REMOTE_ENABLED && !REMOTE_LOADED) await loadRemoteDb();
  } catch (e) {
    console.error(e);
    const root=document.getElementById('app');
    if(root) root.innerHTML=`<div class="container"><div class="card empty"><h3>Сервертэй холбогдож чадсангүй</h3><p>${esc(e.message||'Supabase connection error')}</p></div></div>`;
    return;
  }
  const db=getDb(), user=currentUser(db); let r=route();
  if(PASSWORD_RECOVERY_ACTIVE || r==='/reset-password') {
    document.getElementById('app').innerHTML=resetPasswordPage();
    return;
  }
  if(r==='/forgot-password') {
    document.getElementById('app').innerHTML=forgotPasswordPage();
    return;
  }
  if(r==='/') { navigate(user?(user.role==='admin'?'/admin':'/dashboard'):'/login'); return; }
  if(!user) {
    if(r==='/register') document.getElementById('app').innerHTML=loginPage('register');
    else document.getElementById('app').innerHTML=loginPage('login');
    return;
  }
  if(user.role==='admin') {
    if(!r.startsWith('/admin')) { navigate('/admin'); return; }
    let html;
    if(r==='/admin') html=adminDashboard();
    else if(r==='/admin/orders' || r.startsWith('/admin/orders?')) html=adminOrdersPage();
    else if(r.startsWith('/admin/orders/')) html=adminOrderDetailPage(r.split('/')[3]);
    else if(r==='/admin/agents') html=adminAgentsPage();
    else if(r.startsWith('/admin/agents/')) html=adminAgentDetailPage(r.split('/')[3]);
    else if(r==='/admin/shoots') html=adminShootsPage();
    else if(r==='/admin/profile') html=adminProfilePage();
    else html=notFound();
    document.getElementById('app').innerHTML=html; return;
  }
  if(r.startsWith('/admin')) { navigate('/dashboard'); return; }
  let html;
  if(r==='/dashboard') html=dashboardPage();
  else if(r==='/orders') html=ordersPage();
  else if(r==='/orders/new') html=newOrderPage();
  else if(r==='/queue') html=queuePage();
  else if(r.startsWith('/orders/')) html=orderDetailPage(r.split('/')[2]);
  else if(r.startsWith('/videos')) html=videosPage();
  else if(r==='/profile') html=profilePage();
  else html=notFound();
  document.getElementById('app').innerHTML=html;
}

function generateOrderNumber(db) {
  const max=db.orders.reduce((m,o)=>Math.max(m,Number(String(o.order_number).replace(/\D/g,''))||0),0);
  return `Контент-${String(max+1).padStart(4,'0')}`;
}

function addActivity(db, orderId, message, visible=true, by=null) {
  db.activity.push({id:uid('act'),order_id:orderId,public_message:message,internal_message:'',visible_to_agent:visible,created_by:by||getSession(),created_at:nowIso()});
}

const PRIVATE_ADMIN_USERNAME='80114941';
const PRIVATE_ADMIN_EMAIL='owner@contentfactory.mn';

async function handleLogin(form) {
  const fd=new FormData(form), identifier=String(fd.get('identifier')||fd.get('email')||'').trim(), password=String(fd.get('password'));
  const compact=identifier.replace(/\s+/g,'');
  const isPrivateAdmin=compact===PRIVATE_ADMIN_USERNAME;
  const email=(isPrivateAdmin?PRIVATE_ADMIN_EMAIL:identifier).toLowerCase();

  if (REMOTE_ENABLED) {
    try {
      const r=await sb.auth.signInWithPassword({email,password});
      throwIfError(r,'Нэвтрэхэд алдаа гарлаа');
      REMOTE_LOADED=false;
      await loadRemoteDb();
      setupRealtime();
      const u=currentUser();
      if(!u) throw new Error('Профайл олдсонгүй.');
      toast('Амжилттай нэвтэрлээ.','success');
      navigate(u.role==='admin'?'/admin':'/dashboard');
    } catch(e) {
      toast(e.message==='Invalid login credentials'?'Нэвтрэх нэр эсвэл нууц үг буруу байна.':e.message,'error');
    }
    return;
  }

  const db=getDb();
  const u=db.profiles.find(p=>{
    const pEmail=String(p.email||'').toLowerCase();
    const adminMatch=isPrivateAdmin && (p.role==='admin');
    return (adminMatch || pEmail===email) && p.password===password;
  });
  if(!u) { toast('Нэвтрэх нэр эсвэл нууц үг буруу байна.','error'); return; }
  setSession(u.id); toast('Амжилттай нэвтэрлээ.','success'); navigate(u.role==='admin'?'/admin':'/dashboard');
}

async function handleRegister(form) {
  const fd=new FormData(form), email=String(fd.get('email')).trim().toLowerCase();
  const password=String(fd.get('password')||''), confirm=String(fd.get('password_confirm')||'');
  if(password!==confirm) { toast('Нууц үг давталттайгаа таарахгүй байна.','error'); form.querySelector('[name="password_confirm"]')?.focus(); return; }
  const full_name=String(fd.get('full_name')).trim(), phone=String(fd.get('phone')).trim(), organization=String(fd.get('agency_name')||'').trim();
  if (REMOTE_ENABLED) {
    try {
      const r=await sb.auth.signUp({
        email,password,
        options:{data:{full_name,phone,agency_name:organization,organization_name:organization}}
      });
      throwIfError(r,'Бүртгэл үүсгэж чадсангүй');
      if (!r.data.session) {
        toast('Бүртгэл үүслээ. И-мэйлээр ирсэн баталгаажуулах холбоосоо дарна уу.','success');
        navigate('/login');
        return;
      }
      REMOTE_LOADED=false;
      await loadRemoteDb();
      setupRealtime();
      toast('Бүртгэл амжилттай үүслээ.','success');
      navigate('/dashboard');
    } catch(e) { toast(e.message,'error'); }
    return;
  }
  const db=getDb();
  if(db.profiles.some(p=>p.email.toLowerCase()===email)) { toast('Энэ и-мэйл бүртгэлтэй байна.','error'); return; }
  const u={id:uid('agent'),email,password,full_name,phone,agency_name:organization,organization_name:organization,branch_name:'',organization_logo_url:'',role:'agent',avatar_url:'',created_at:nowIso()};
  db.profiles.push(u); saveDb(db); setSession(u.id); toast('Бүртгэл амжилттай үүслээ.','success'); navigate('/dashboard');
}


async function handleForgotPassword(form) {
  if(!REMOTE_ENABLED) { toast('Нууц үг сэргээх нь online систем дээр ажиллана.','error'); return; }
  const fd=new FormData(form);
  const email=String(fd.get('email')||'').trim().toLowerCase();
  try {
    const redirectTo=`${window.location.origin}${window.location.pathname}?reset=1`;
    const r=await sb.auth.resetPasswordForEmail(email,{redirectTo});
    throwIfError(r,'Сэргээх холбоос илгээж чадсангүй');
    toast('Нууц үг сэргээх холбоос и-мэйл рүү илгээгдлээ.','success');
    form.reset();
  } catch(e) { console.error(e); toast(e.message,'error'); }
}

async function handleResetPassword(form) {
  if(!REMOTE_ENABLED) { toast('Нууц үг шинэчлэх нь online систем дээр ажиллана.','error'); return; }
  const fd=new FormData(form);
  const password=String(fd.get('new_password')||'');
  const confirm=String(fd.get('new_password_confirm')||'');
  if(password!==confirm) { toast('Шинэ нууц үгнүүд таарахгүй байна.','error'); return; }
  try {
    const r=await sb.auth.updateUser({password});
    throwIfError(r,'Нууц үг шинэчилж чадсангүй');
    PASSWORD_RECOVERY_ACTIVE=false;
    REMOTE_LOADED=false;
    await loadRemoteDb();
    const u=currentUser();
    const next=u?(u.role==='admin'?'/admin/profile':'/profile'):'/login';
    history.replaceState(null,'',`${window.location.pathname}#${next}`);
    toast('Нууц үг амжилттай шинэчлэгдлээ.','success');
    await render();
  } catch(e) { console.error(e); toast(e.message,'error'); }
}

async function handleChangePassword(form) {
  const fd=new FormData(form);
  const current=String(fd.get('current_password')||'');
  const next=String(fd.get('new_password')||'');
  const confirm=String(fd.get('new_password_confirm')||'');
  if(next!==confirm) { toast('Шинэ нууц үгнүүд таарахгүй байна.','error'); return; }
  if(current===next) { toast('Шинэ нууц үг одоогийнхоос өөр байх ёстой.','error'); return; }

  if(REMOTE_ENABLED) {
    try {
      const sessionRes=await sb.auth.getSession();
      throwIfError(sessionRes,'Session шалгаж чадсангүй');
      const email=sessionRes.data?.session?.user?.email;
      if(!email) throw new Error('Account-ийн и-мэйл олдсонгүй.');

      const verify=await sb.auth.signInWithPassword({email,password:current});
      if(verify.error) throw new Error('Одоогийн нууц үг буруу байна.');

      const updated=await sb.auth.updateUser({password:next});
      throwIfError(updated,'Нууц үг сольж чадсангүй');
      form.reset();
      toast('Нууц үг амжилттай солигдлоо.','success');
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }

  const db=getDb(), u=currentUser(db);
  const p=db.profiles.find(x=>x.id===u?.id);
  if(!p || p.password!==current) { toast('Одоогийн нууц үг буруу байна.','error'); return; }
  p.password=next;
  saveDb(db);
  form.reset();
  toast('Нууц үг амжилттай солигдлоо.','success');
}

async function handleRevisionRequest(form) {
  const fd=new FormData(form);
  const orderId=form.dataset.orderId;
  const message=String(fd.get('revision_message')||'').trim();
  if(!message) { toast('Засварын хүсэлтээ бичнэ үү.','error'); return; }

  if(REMOTE_ENABLED) {
    try {
      const r=await sb.rpc('request_order_revision',{p_order_id:orderId,p_message:message});
      throwIfError(r,'Засварын хүсэлт илгээж чадсангүй');
      await loadRemoteDb();
      toast('Засварын хүсэлт амжилттай илгээгдлээ.','success');
      await render();
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }

  const db=getDb(), u=currentUser(db), o=db.orders.find(x=>x.id===orderId && x.agent_id===u?.id);
  if(!o || o.status!=='COMPLETED') { toast('Зөвхөн бэлэн болсон контент дээр засвар хүсэх боломжтой.','error'); return; }
  addActivity(db,o.id,`Засварын хүсэлт: ${message}`,true,u.id);
  const last=db.activity[db.activity.length-1];
  if(last) last.activity_type='REVISION_REQUEST';
  o.status='REVISION';
  o.updated_at=nowIso();
  db.profiles.filter(p=>p.role==='admin').forEach(a=>addNotification(db,a.id,'REVISION_REQUEST','Засварын хүсэлт',`${o.order_number} · ${u.full_name||'Агент'}`,o.id));
  saveDb(db);
  toast('Засварын хүсэлт амжилттай илгээгдлээ.','success');
  render();
}


async function handleNewOrder(form) {
  const fd=new FormData(form);
  if (REMOTE_ENABLED) {
    try {
      const user=currentUser(); if(!user) throw new Error('Нэвтрэх шаардлагатай.');
      const payload={
        agent_id:user.id,
        property_name:String(fd.get('property_name')).trim(),
        location:String(fd.get('location')).trim(),
        property_type:String(fd.get('property_type')),
        purpose:String(fd.get('purpose')),
        description:String(fd.get('description')).trim(),
        listing_url:String(fd.get('listing_url')||'').trim()||null,
        additional_notes:String(fd.get('additional_notes')||'').trim()||null
      };
      const ins=await sb.from('orders').insert(payload).select('*').single();
      const order=throwIfError(ins,'Захиалга хадгалж чадсангүй');
      await loadRemoteDb();
      toast('Захиалга амжилттай илгээгдлээ.','success');
      navigate(`/orders/${order.id}`);
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }
  const db=getDb(), user=currentUser(db); const id=uid('order');
  const order={id,order_number:generateOrderNumber(db),agent_id:user.id,assigned_admin_id:null,property_name:String(fd.get('property_name')).trim(),location:String(fd.get('location')).trim(),property_type:String(fd.get('property_type')),purpose:String(fd.get('purpose')),description:String(fd.get('description')).trim(),listing_url:String(fd.get('listing_url')||'').trim(),additional_notes:String(fd.get('additional_notes')||'').trim(),status:'PLANNING',sub_status:'',agreed_price:null,payment_status:'NOT_SET',shoot_date:null,shoot_started_at:null,shoot_location:'',thumbnail_url:'',final_video_url:'',created_at:nowIso(),updated_at:nowIso(),completed_at:null};
  db.orders.push(order);
  addActivity(db,id,'Захиалга хүлээн авлаа',true,user.id);
  db.profiles.filter(p=>p.role==='admin').forEach(admin=>addNotification(db,admin.id,'NEW_ORDER','Шинэ контент захиалга',`${user.full_name} · ${order.order_number} · ${order.property_name}`,order.id));
  saveDb(db); toast('Захиалга амжилттай илгээгдлээ.','success'); navigate(`/orders/${id}`);
}

async function handleProfile(form) {
  const fd=new FormData(form);
  if (REMOTE_ENABLED) {
    try {
      const u=currentUser(); if(!u) throw new Error('Нэвтрэх шаардлагатай.');
      const patch={
        full_name:String(fd.get('full_name')).trim(),
        phone:String(fd.get('phone')).trim(),
        organization_name:String(fd.get('organization_name')||'').trim(),
        agency_name:String(fd.get('organization_name')||'').trim(),
        branch_name:String(fd.get('branch_name')||'').trim()
      };
      if(String(fd.get('remove_avatar'))==='1') patch.avatar_url=null;
      const avatarFile=fd.get('avatar_image');
      if(avatarFile && avatarFile.name) {
        if(!String(avatarFile.type).startsWith('image/')) throw new Error('Профайл зураг image файл байх ёстой.');
        if(avatarFile.size>10*1024*1024) throw new Error('Профайл зураг 10MB-аас бага байх ёстой.');
        patch.avatar_url=await uploadPublicProfileAsset('avatars',u.id,avatarFile,'avatar');
      }
      if(String(fd.get('remove_logo'))==='1') patch.organization_logo_url=null;
      const logoFile=fd.get('organization_logo');
      if(logoFile && logoFile.name) {
        if(!String(logoFile.type).startsWith('image/')) throw new Error('Лого зураг файл байх ёстой.');
        if(logoFile.size>10*1024*1024) throw new Error('Лого 10MB-аас бага байх ёстой.');
        patch.organization_logo_url=await uploadPublicProfileAsset('org-logos',u.id,logoFile,'logo');
      }
      const r=await sb.from('profiles').update(patch).eq('id',u.id);
      throwIfError(r,'Профайл хадгалж чадсангүй');
      await loadRemoteDb();
      toast('Профайл хадгалагдлаа.','success');
      await render();
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }
  const db=getDb(), u=currentUser(db); const p=db.profiles.find(x=>x.id===u.id);
  p.full_name=String(fd.get('full_name')).trim();
  p.phone=String(fd.get('phone')).trim();
  const organization=String(fd.get('organization_name')||'').trim();
  p.organization_name=organization; p.agency_name=organization;
  p.branch_name=String(fd.get('branch_name')||'').trim();
  if(String(fd.get('remove_avatar'))==='1') p.avatar_url='';
  const avatarFile=fd.get('avatar_image');
  if(avatarFile && avatarFile.name) {
    if(!String(avatarFile.type).startsWith('image/')) { toast('Профайл зураг image файл байх ёстой.','error'); return; }
    if(avatarFile.size>10*1024*1024) { toast('Профайл зураг 10MB-аас бага байх ёстой.','error'); return; }
    try { p.avatar_url=await fileToDataUrl(avatarFile); } catch { toast('Профайл зураг уншиж чадсангүй.','error'); return; }
  }
  if(String(fd.get('remove_logo'))==='1') p.organization_logo_url='';
  const file=fd.get('organization_logo');
  if(file && file.name) {
    if(!String(file.type).startsWith('image/')) { toast('Лого зураг файл байх ёстой.','error'); return; }
    if(file.size>10*1024*1024) { toast('Лого 10MB-аас бага байх ёстой.','error'); return; }
    try { p.organization_logo_url=await fileToDataUrl(file); } catch { toast('Лого уншиж чадсангүй.','error'); return; }
  }
  saveDb(db); toast('Профайл хадгалагдлаа.','success'); render();
}


async function handleAdminProfile(form) {
  const fd=new FormData(form);
  if (REMOTE_ENABLED) {
    try {
      const u=currentUser(); if(!u || u.role!=='admin') return;
      const patch={full_name:String(fd.get('full_name')).trim(),phone:String(fd.get('phone')||'').trim()};
      if(String(fd.get('remove_avatar'))==='1') patch.avatar_url=null;
      const avatarFile=fd.get('avatar_image');
      if(avatarFile && avatarFile.name) {
        if(!String(avatarFile.type).startsWith('image/')) throw new Error('Профайл зураг image файл байх ёстой.');
        if(avatarFile.size>10*1024*1024) throw new Error('Профайл зураг 10MB-аас бага байх ёстой.');
        patch.avatar_url=await uploadPublicProfileAsset('avatars',u.id,avatarFile,'avatar');
      }
      const r=await sb.from('profiles').update(patch).eq('id',u.id);
      throwIfError(r,'Админ профайл хадгалж чадсангүй');
      await loadRemoteDb(); toast('Админ профайл хадгалагдлаа.','success'); await render();
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }
  const db=getDb(), u=currentUser(db); const p=db.profiles.find(x=>x.id===u.id);
  if(!p || p.role!=='admin') return;
  p.full_name=String(fd.get('full_name')).trim();
  p.phone=String(fd.get('phone')||'').trim();
  if(String(fd.get('remove_avatar'))==='1') p.avatar_url='';
  const avatarFile=fd.get('avatar_image');
  if(avatarFile && avatarFile.name) {
    if(!String(avatarFile.type).startsWith('image/')) { toast('Профайл зураг image файл байх ёстой.','error'); return; }
    if(avatarFile.size>10*1024*1024) { toast('Профайл зураг 10MB-аас бага байх ёстой.','error'); return; }
    try { p.avatar_url=await fileToDataUrl(avatarFile); } catch { toast('Профайл зураг уншиж чадсангүй.','error'); return; }
  }
  saveDb(db); toast('Админ профайл хадгалагдлаа.','success'); render();
}


async function handleAdminOrder(form) {
  const fd=new FormData(form), id=form.dataset.orderId;
  if (REMOTE_ENABLED) {
    try {
      const db=getDb(), o=db.orders.find(x=>x.id===id); if(!o) return;
      const newStatus=String(fd.get('status'));
      const shoot=String(fd.get('shoot_date')||'');
      const shootStartedChecked=fd.get('shoot_started')==='on';
      let shoot_started_at=o.shoot_started_at||null;
      if(['EDITING','REVIEW','REVISION','COMPLETED'].includes(newStatus)) shoot_started_at=shoot_started_at|| (shoot?new Date(shoot).toISOString():null) || nowIso();
      else if(newStatus==='SHOOTING' && shootStartedChecked) shoot_started_at=shoot_started_at||nowIso();
      else if(newStatus==='SHOOTING' && !shootStartedChecked) shoot_started_at=null;
      else if(newStatus==='PLANNING') shoot_started_at=null;
      const price=String(fd.get('agreed_price')||'').trim();
      const finalVideoUrl=String(fd.get('final_video_url')||'').trim();
      if(newStatus==='COMPLETED' && !finalVideoUrl) {
        toast('Бэлэн болсон төлөвт оруулахын өмнө бичлэгийн линк оруулна уу.','error');
        return;
      }
      const patch={
        status:newStatus,
        sub_status:String(fd.get('sub_status')||'')||null,
        shoot_date:shoot?new Date(shoot).toISOString():null,
        shoot_started_at,
        shoot_location:String(fd.get('shoot_location')||'').trim()||null,
        agreed_price:price?Number(price):null,
        payment_status:String(fd.get('payment_status')),
        final_video_url:finalVideoUrl||null
      };
      const up=await sb.from('orders').update(patch).eq('id',id);
      throwIfError(up,'Захиалга шинэчилж чадсангүй');
      const briefPayload={
        order_id:id,
        objective:String(fd.get('objective')||'')||null,
        selling_points:String(fd.get('selling_points')||'')||null,
        filming_concept:String(fd.get('filming_concept')||'')||null,
        editing_style:String(fd.get('editing_style')||'')||null,
        client_summary:String(fd.get('client_summary')||'')||null,
        internal_notes:String(fd.get('internal_notes')||'')||null
      };
      const br=await sb.from('creative_briefs').upsert(briefPayload,{onConflict:'order_id'});
      throwIfError(br,'Creative brief хадгалж чадсангүй');
      const msg=String(fd.get('public_update')||'').trim();
      if(msg) {
        const ar=await sb.from('order_activity').insert({order_id:id,activity_type:'MANUAL_UPDATE',public_message:msg,visible_to_agent:true,created_by:getSession()});
        throwIfError(ar,'Шинэчлэлт хадгалж чадсангүй');
      }
      await loadRemoteDb();
      toast('Захиалгын өөрчлөлт хадгалагдлаа.','success');
      await render();
    } catch(e) { console.error(e); toast(e.message,'error'); }
    return;
  }
  const db=getDb(), o=db.orders.find(x=>x.id===id); if(!o) return;
  const prevStatus=o.status; const newStatus=String(fd.get('status')); const finalVideoUrl=String(fd.get('final_video_url')||'').trim();
  if(newStatus==='COMPLETED' && !finalVideoUrl) { toast('Бэлэн болсон төлөвт оруулахын өмнө бичлэгийн линк оруулна уу.','error'); return; }
  const hadShootStarted=!!effectiveShootStartedAt(o); o.status=newStatus; o.sub_status=String(fd.get('sub_status')); const shoot=String(fd.get('shoot_date')||''); o.shoot_date=shoot?new Date(shoot).toISOString():null; o.shoot_location=String(fd.get('shoot_location')||'').trim(); const shootStartedChecked=fd.get('shoot_started')==='on'; if(['EDITING','REVIEW','REVISION','COMPLETED'].includes(newStatus)) { o.shoot_started_at=o.shoot_started_at||o.shoot_date||nowIso(); } else if(newStatus==='SHOOTING' && shootStartedChecked) { o.shoot_started_at=o.shoot_started_at||nowIso(); } else if(newStatus==='SHOOTING' && !shootStartedChecked) { o.shoot_started_at=null; } else if(newStatus==='PLANNING') { o.shoot_started_at=null; } const price=String(fd.get('agreed_price')||'').trim(); o.agreed_price=price?Number(price):null; o.payment_status=String(fd.get('payment_status')); o.final_video_url=finalVideoUrl; o.updated_at=nowIso(); if(!hadShootStarted && !!effectiveShootStartedAt(o) && newStatus==='SHOOTING') addActivity(db,o.id,'Зураг авалт эхэллээ',true,getSession());
  if(prevStatus!==newStatus) {
    db.order_status_history ||= []; db.order_status_history.push({id:uid('hist'),order_id:o.id,previous_status:prevStatus,new_status:newStatus,changed_by:getSession(),created_at:nowIso()});
    addActivity(db,o.id,`${statusLabels[newStatus]} төлөвт шилжлээ`,true,getSession());
    addNotification(db,o.agent_id,'STATUS_CHANGE','Бичлэгийн төлөв шинэчлэгдлээ',`${o.order_number} · ${statusLabels[newStatus]}`,o.id);
    if(newStatus==='COMPLETED') o.completed_at=nowIso();
  }
  let brief=db.briefs.find(b=>b.order_id===o.id); if(!brief) { brief={id:uid('brief'),order_id:o.id,created_at:nowIso()}; db.briefs.push(brief); }
  Object.assign(brief,{objective:String(fd.get('objective')||''),selling_points:String(fd.get('selling_points')||''),filming_concept:String(fd.get('filming_concept')||''),editing_style:String(fd.get('editing_style')||''),client_summary:String(fd.get('client_summary')||''),internal_notes:String(fd.get('internal_notes')||''),updated_at:nowIso()});
  const msg=String(fd.get('public_update')||'').trim(); if(msg) addActivity(db,o.id,msg,true,getSession());
  saveDb(db); toast('Захиалгын өөрчлөлт хадгалагдлаа.','success'); render();
}


function filterAdminOrders() {
  const q=(document.getElementById('admin-order-search')?.value||'').toLowerCase().trim(); const status=document.getElementById('admin-status-filter')?.value||'';
  document.querySelectorAll('[data-order-row]').forEach(row=>{ const okQ=!q || row.dataset.search.includes(q); const okS=!status || row.dataset.status===status; row.style.display=(okQ&&okS)?'':'none'; });
}

document.addEventListener('click', e=>{
  const nav=e.target.closest('[data-nav]'); if(nav){ e.preventDefault(); navigate(nav.dataset.nav); return; }
  const actionEl=e.target.closest('[data-action]');
  const action=actionEl?.dataset.action;
  if(action==='logout'){ if(REMOTE_ENABLED){ void (async()=>{ await sb.auth.signOut(); REMOTE_USER_ID=null; REMOTE_DB=blankDb(); REMOTE_LOADED=true; if(realtimeChannel){ sb.removeChannel(realtimeChannel); realtimeChannel=null; } toast('Системээс гарлаа.'); navigate('/login'); })(); } else { setSession(null); toast('Системээс гарлаа.'); navigate('/login'); } return; }
  if(action==='toggle-theme'){ setTheme(getTheme()==='dark'?'light':'dark'); render(); return; }
  if(action==='set-theme'){ setTheme(actionEl.dataset.theme==='dark'?'dark':'light'); render(); return; }
  if(action==='toggle-notifications'){
    e.preventDefault(); e.stopPropagation();
    const wrap=actionEl.closest('.notification-wrap'); const pop=wrap?.querySelector('.notification-popover');
    document.querySelectorAll('.notification-popover.open').forEach(x=>{ if(x!==pop) x.classList.remove('open'); });
    pop?.classList.toggle('open'); return;
  }
  if(action==='open-notification'){
    if(REMOTE_ENABLED){ void (async()=>{ await sb.rpc('mark_notification_read',{p_notification_id:actionEl.dataset.notificationId}); await loadRemoteDb(); navigate(actionEl.dataset.path||'/dashboard'); })(); }
    else { const db=getDb(), n=(db.notifications||[]).find(x=>x.id===actionEl.dataset.notificationId); if(n) n.read_at=nowIso(); saveDb(db); navigate(actionEl.dataset.path||'/dashboard'); }
    return;
  }
  if(action==='mark-all-notifications-read'){
    if(REMOTE_ENABLED){ void (async()=>{ await sb.rpc('mark_all_notifications_read'); await loadRemoteDb(); await render(); })(); }
    else { const db=getDb(), u=currentUser(db); (db.notifications||[]).filter(n=>n.recipient_id===u.id&&!n.read_at).forEach(n=>n.read_at=nowIso()); saveDb(db); render(); }
    return;
  }
  if(action==='remove-profile-avatar'){
    const preview=document.getElementById('profile-avatar-preview'); const flag=document.getElementById('remove-avatar-flag'); const input=document.getElementById('profile-avatar-input');
    if(flag) flag.value='1'; if(input) input.value='';
    if(preview){ preview.classList.remove('has-photo'); preview.innerHTML=`<span>${esc(initials(currentUser()?.full_name||'RF'))}</span>`; }
    return;
  }
  if(action==='remove-profile-logo'){
    const preview=document.getElementById('profile-logo-preview'); const flag=document.getElementById('remove-logo-flag'); const input=document.getElementById('profile-logo-input');
    if(flag) flag.value='1'; if(input) input.value='';
    if(preview){ preview.classList.remove('has-logo'); preview.innerHTML='<span>RF</span>'; }
    return;
  }
  if(!e.target.closest('.notification-wrap')) document.querySelectorAll('.notification-popover.open').forEach(x=>x.classList.remove('open'));
});

document.addEventListener('submit', e=>{
  e.preventDefault();
  if(e.target.id==='login-form') void handleLogin(e.target);
  else if(e.target.id==='register-form') void handleRegister(e.target);
  else if(e.target.id==='forgot-password-form') void handleForgotPassword(e.target);
  else if(e.target.id==='reset-password-form') void handleResetPassword(e.target);
  else if(e.target.id==='change-password-form') void handleChangePassword(e.target);
  else if(e.target.id==='revision-request-form') void handleRevisionRequest(e.target);
  else if(e.target.id==='new-order-form') void handleNewOrder(e.target);
  else if(e.target.id==='profile-form') void handleProfile(e.target);
  else if(e.target.id==='admin-profile-form') void handleAdminProfile(e.target);
  else if(e.target.id==='admin-order-form') void handleAdminOrder(e.target);
});

document.addEventListener('change', e=>{
  if(e.target.id==='admin-status-filter') {
    const v=e.target.value||'';
    navigate(v?`/admin/orders?status=${v}`:'/admin/orders');
    return;
  }
  if(e.target.id==='profile-avatar-input') {
    const file=e.target.files?.[0], preview=document.getElementById('profile-avatar-preview'), flag=document.getElementById('remove-avatar-flag');
    if(flag) flag.value='0';
    if(file && preview) {
      if(!String(file.type).startsWith('image/')) { toast('Профайл зураг image файл байх ёстой.','error'); e.target.value=''; return; }
      if(file.size>10*1024*1024) { toast('Профайл зураг 10MB-аас бага байх ёстой.','error'); e.target.value=''; return; }
      const reader=new FileReader(); reader.onload=()=>{ preview.classList.add('has-photo'); preview.innerHTML=`<img src="${esc(reader.result)}" alt="Профайл зураг preview" />`; }; reader.readAsDataURL(file);
    }
  }
  if(e.target.id==='profile-logo-input') {
    const file=e.target.files?.[0], preview=document.getElementById('profile-logo-preview'), flag=document.getElementById('remove-logo-flag');
    if(flag) flag.value='0';
    if(file && preview) {
      if(!String(file.type).startsWith('image/')) { toast('Лого зураг файл байх ёстой.','error'); e.target.value=''; return; }
      if(file.size>10*1024*1024) { toast('Лого 10MB-аас бага байх ёстой.','error'); e.target.value=''; return; }
      const reader=new FileReader(); reader.onload=()=>{ preview.classList.add('has-logo'); preview.innerHTML=`<img src="${esc(reader.result)}" alt="Лого preview" />`; }; reader.readAsDataURL(file);
    }
  }
  if(e.target.id==='admin-status-filter') filterAdminOrders();
});
document.addEventListener('input', e=>{
  if(e.target.id==='admin-order-search') filterAdminOrders();
  if(['register-password','register-password-confirm'].includes(e.target.id)) {
    const p=document.getElementById('register-password'), c=document.getElementById('register-password-confirm');
    if(c) c.setCustomValidity(p && c.value && p.value!==c.value ? 'Нууц үг таарахгүй байна.' : '');
  }
  if(['change-password-new','change-password-confirm'].includes(e.target.id)) {
    const p=document.getElementById('change-password-new'), c=document.getElementById('change-password-confirm');
    if(c) c.setCustomValidity(p && c.value && p.value!==c.value ? 'Нууц үг таарахгүй байна.' : '');
  }
  if(['reset-password-new','reset-password-confirm'].includes(e.target.id)) {
    const p=document.getElementById('reset-password-new'), c=document.getElementById('reset-password-confirm');
    if(c) c.setCustomValidity(p && c.value && p.value!==c.value ? 'Нууц үг таарахгүй байна.' : '');
  }
});

window.addEventListener('hashchange', ()=>{ void render(); });
window.addEventListener('storage', e=>{ if(!REMOTE_ENABLED && (e.key===DB_KEY || e.key===SESSION_KEY)) void render(); if(e.key===THEME_KEY) { applyTheme(); void render(); } });
applyTheme();
if (REMOTE_ENABLED) {
  sb.auth.onAuthStateChange(async (event, session)=>{
    if(event==='PASSWORD_RECOVERY') PASSWORD_RECOVERY_ACTIVE=true;
    const nextId=session?.user?.id||null;
    if(nextId===REMOTE_USER_ID && REMOTE_LOADED) return;
    REMOTE_USER_ID=nextId;
    REMOTE_LOADED=false;
    try { await loadRemoteDb(); setupRealtime(); await render(); } catch(e) { console.error(e); }
  });
  void (async()=>{ try { await loadRemoteDb(); setupRealtime(); await render(); } catch(e) { console.error(e); await render(); } })();
} else {
  void render();
}
