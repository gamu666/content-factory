(() => {
  const NAIMAN_SUPABASE_URL = 'https://buvmtdlvynfrjwcatlsv.supabase.co';
  const NAIMAN_SUPABASE_KEY = 'sb_publishable_o8Q6jjCR_Am7ggsLc8rQyg_9lq7ThQ0';
  const EXTRA_AGENT_PRICE = 79900;
  const PLANS = {
    START: { name: 'START', price: 1290000, includedAgents: 1 },
    GROW: { name: 'GROW', price: 2990000, includedAgents: 2 },
    PRO: { name: 'PRO', price: 5490000, includedAgents: 3 },
  };

  const I18N = {
    mn: {
      navLogin:'Нэвтрэх', navPlans:'Багц харах',
      heroTitle:'Танд тохирох багц.', heroLead:'Контент үйлдвэрлэл болон Facebook түгээлтийн automation нэг системд.', heroPill:'Контент + Automation',
      startChip:'Эхлэхэд', startCopy:'Өөрийн зураг, бичлэгтэй агентуудад зориулсан үндсэн багц.',
      startAutomation:'1 agent automation included', facebookPosting:'Facebook auto posting', captionQueue:'Caption variation + posting queue',
      recommended:'САНАЛ БОЛГОХ', growCopy:'Тогтмол property контент болон expert presence хөгжүүлэх агентуудад.', growAutomation:'2 agent automation included',
      proCopy:'Контентын бүх урсгал болон personal branding-аа цогцоор нь хөгжүүлэх багц.', proAutomation:'3 agent automation included', priorityProduction:'Priority production',
      orderBtn:'Захиалах',
      guideEyebrow:'БАГЦ ДОТОРХ ҮЙЛЧИЛГЭЭ', guideTitle:'Яг юу багтаж байгаа вэ?', guideLead:'Нэршил бүр ямар төрлийн контент, үйлчилгээ болохыг товч бөгөөд ойлгомжтой тайлбарлав.',
      propertyReelDesc:'Үл хөдлөхийн объект танилцуулах богино босоо видео. Үндсэн Property Reel-д манай зураг авалт орохгүй — захиалагч өөрийн зураг, бичлэгээ өгнө. Манайхаар объектын зураг авалт хийлгэх бол тусад нь зураг авалт / Drone Credit тооцно.',
      dronePrice:'Drone зураг авалт: 1 удаа — 250,000₮',
      posterDesc:'Зар сурталчилгаанд ашиглах нэг кадрын дизайн. Захиалагчийн өгсөн property зураг, мэдээллээр social post-д бэлэн poster бэлтгэнэ. Drone зураг хэрэгтэй бол тусдаа зураг авалт тооцно.',
      expertDesc:'Агент өөрийн мэдлэг, туршлагаа тайлбарласан 2–3 минутын мэргэжлийн контент. Сэдэв, мэдээлэл, ярих агуулгыг захиалагч бэлтгэнэ; манай баг зураг авалт, edit, subtitle, visual treatment-ийг хариуцна.',
      brandingDesc:'Агентыг өөрийг нь брэнд болгон таниулах богино видео. Ажлын хэв маяг, дүр төрх, үйлчилгээний онцлог, өдөр тутмын professional image-ийг тогтмол контент болгон хөгжүүлнэ.',
      droneCreditDesc:'Объект, орчин, байршлыг агаараас авах нэмэлт зураг авалтын эрх. Багцад Drone Credit байвал тухайн credit-ээ ашиглана; credit хүрэлцэхгүй бол нэмэлт drone зураг авалт 250,000₮-өөр тооцогдоно.',
      automationDesc:'Facebook зар түгээлтийг системээр удирдах хэсэг. Agent бүр өөрийн account/page-аа холбоод post queue, caption variation болон auto posting урсгалаа нэг дороос хянах боломжтой.',
      footerSub:'Real estate content production portal',
      orderKicker:'ЗАХИАЛГА', planLabel:'Багц', basePriceLabel:'Суурь үнэ', includedAgentLabel:'Багтсан agent', extraAgentLabel:'Нэмэлт agent', totalLabel:'Тооцоолсон нийт',
      nameLabel:'Таны нэр *', namePlaceholder:'Таны нэр', orgLabel:'Байгууллага', orgPlaceholder:'Байгууллага / агентлаг', emailLabel:'И-мэйл *', phoneLabel:'Утас *',
      noteLabel:'Нэмэх зүйл?', optionalLabel:'(заавал биш)', notePlaceholder:'Нэмэлт хэрэгцээ, асуултаа бичнэ үү.', submitOrder:'Захиалгын хүсэлт илгээх',
      requestDestination:'Хүсэлт НАЙМАН САР-ын админ хэсэгт шууд очно.', successTitle:'Хүсэлт илгээгдлээ', successDesc:'Таны хүсэлт амжилттай бүртгэгдлээ. НАЙМАН САР-ын админ хэсэгт очсон.', closeBtn:'Хаах',
      submitting:'Илгээж байна…', sending:'Хүсэлтийг илгээж байна…', sendError:'Хүсэлт илгээгдсэнгүй. Түр хүлээгээд дахин оролдоно уу.', packageSuffix:'багц', agentSuffix:'agent'
    },
    en: {
      navLogin:'Log in', navPlans:'View plans',
      heroTitle:'Choose the right plan.', heroLead:'Content production and Facebook distribution automation in one system.', heroPill:'Content + Automation',
      startChip:'Starter', startCopy:'A core plan for agents who already have their own property photos and footage.',
      startAutomation:'1 agent automation included', facebookPosting:'Facebook auto posting', captionQueue:'Caption variation + posting queue',
      recommended:'RECOMMENDED', growCopy:'For agents building consistent property content and expert presence.', growAutomation:'2 agent automation included',
      proCopy:'A complete package for content production and personal brand growth.', proAutomation:'3 agent automation included', priorityProduction:'Priority production',
      orderBtn:'Order',
      guideEyebrow:'WHAT IS INCLUDED', guideTitle:'What does each service mean?', guideLead:'A clear explanation of every content type and service included in the plans.',
      propertyReelDesc:'A short vertical video created to present a real-estate listing. Standard Property Reel does not include our filming service — the client provides photos or footage. If you want our team to film the property, filming / Drone Credit is charged separately.',
      dronePrice:'Drone filming: 1 session — 250,000₮',
      posterDesc:'A single-frame promotional design for social media. We create the poster using the property photos and information supplied by the client. Drone photography is charged separately when required.',
      expertDesc:'A 2–3 minute professional video where the agent shares knowledge and experience. The client prepares the topic, information and talking points; our team handles filming, editing, subtitles and visual treatment.',
      brandingDesc:'Short-form content focused on building the agent as a recognizable personal brand — work style, professional image, service strengths and day-to-day presence.',
      droneCreditDesc:'A credit for aerial filming of the property, surrounding area or location. If your plan includes Drone Credit, it can be used for that shoot. Additional drone filming is 250,000₮ per session.',
      automationDesc:'A system for managing Facebook distribution. Each agent can connect their own account/page and manage posting queue, caption variations and auto posting from one place.',
      footerSub:'Real estate content production portal',
      orderKicker:'ORDER', planLabel:'Plan', basePriceLabel:'Base price', includedAgentLabel:'Included agents', extraAgentLabel:'Extra agents', totalLabel:'Estimated total',
      nameLabel:'Your name *', namePlaceholder:'Your name', orgLabel:'Organization', orgPlaceholder:'Organization / agency', emailLabel:'Email *', phoneLabel:'Phone *',
      noteLabel:'Anything to add?', optionalLabel:'(optional)', notePlaceholder:'Add any extra needs or questions.', submitOrder:'Send order request',
      requestDestination:'Your request goes directly to the NAIMAN SAR admin panel.', successTitle:'Request sent', successDesc:'Your request has been registered successfully and sent to the NAIMAN SAR admin panel.', closeBtn:'Close',
      submitting:'Sending…', sending:'Sending your request…', sendError:'Request could not be sent. Please try again shortly.', packageSuffix:'plan', agentSuffix:'agent'
    }
  };

  let currentLang = localStorage.getItem('cf_pricing_lang') === 'en' ? 'en' : 'mn';

  function t(key) {
    return I18N[currentLang]?.[key] || I18N.mn[key] || key;
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'mn';
    localStorage.setItem('cf_pricing_lang', currentLang);
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'mn';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (I18N[currentLang]?.[key] != null) el.textContent = I18N[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (I18N[currentLang]?.[key] != null) el.placeholder = I18N[currentLang][key];
    });
    document.querySelectorAll('[data-lang]').forEach((btn) => btn.classList.toggle('is-active', btn.dataset.lang === currentLang));
    updateSummary();
  }

  let currentPlan = PLANS.GROW;
  const modal = document.getElementById('order-modal');
  const form = document.getElementById('pricing-order-form');
  const extraAgentSelect = document.getElementById('extra-agent-count');
  const feedback = document.getElementById('order-feedback');
  const submitButton = form?.querySelector('.order-submit');
  const successState = document.getElementById('order-success');
  const orderSummary = document.getElementById('order-summary');
  const dialog = document.querySelector('.order-dialog');

  function money(value) {
    return `₮${Number(value || 0).toLocaleString('en-US')}`;
  }

  function totalPrice() {
    const extra = Number(extraAgentSelect?.value || 0);
    return currentPlan.price + (extra * EXTRA_AGENT_PRICE);
  }

  function updateSummary() {
    document.getElementById('order-title').textContent = `${currentPlan.name} ${t('packageSuffix')}`;
    document.getElementById('order-plan-input').value = currentPlan.name;
    document.getElementById('order-base-price').textContent = money(currentPlan.price);
    const planSummary = document.getElementById('order-plan-summary');
    if (planSummary) planSummary.textContent = currentPlan.name;
    document.getElementById('order-included-agents').textContent = `${currentPlan.includedAgents} ${t('agentSuffix')}`;
    document.getElementById('order-total-price').textContent = money(totalPrice());
  }

  function openModal(planName) {
    currentPlan = PLANS[planName] || PLANS.GROW;
    if (extraAgentSelect) extraAgentSelect.value = '0';
    updateSummary();
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = t('requestDestination');
      feedback.className = 'order-feedback';
    }
    dialog?.classList.remove('is-success');
    if (form) form.hidden = false;
    if (orderSummary) orderSummary.hidden = false;
    if (successState) successState.hidden = true;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    window.setTimeout(() => form?.querySelector('input[name="name"]')?.focus(), 30);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  }

  async function prefillFromContentFactory() {
    try {
      if (!window.supabase || !window.REEL_FLOW_CONFIG?.SUPABASE_URL || !window.REEL_FLOW_CONFIG?.SUPABASE_ANON_KEY) return;
      const client = window.supabase.createClient(
        window.REEL_FLOW_CONFIG.SUPABASE_URL,
        window.REEL_FLOW_CONFIG.SUPABASE_ANON_KEY,
        { auth: { persistSession: true, autoRefreshToken: false, detectSessionInUrl: false } }
      );
      const { data: sessionData } = await client.auth.getSession();
      const user = sessionData?.session?.user;
      if (!user) return;

      const nameInput = form?.querySelector('input[name="name"]');
      const emailInput = form?.querySelector('input[name="email"]');
      const phoneInput = form?.querySelector('input[name="phone"]');
      const orgInput = form?.querySelector('input[name="organisation"]');
      if (emailInput && !emailInput.value) emailInput.value = user.email || '';

      const { data: profile } = await client
        .from('profiles')
        .select('full_name,email,phone,organization_name,agency_name')
        .eq('id', user.id)
        .maybeSingle();
      if (!profile) return;
      if (nameInput && !nameInput.value) nameInput.value = profile.full_name || '';
      if (emailInput && !emailInput.value) emailInput.value = profile.email || user.email || '';
      if (phoneInput && !phoneInput.value) phoneInput.value = profile.phone || '';
      if (orgInput && !orgInput.value) orgInput.value = profile.organization_name || profile.agency_name || '';
    } catch (error) {
      console.warn('Pricing form prefill skipped:', error);
    }
  }

  document.querySelectorAll('[data-order-plan]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.orderPlan));
  });
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
  extraAgentSelect?.addEventListener('change', updateSummary);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton?.disabled) return;
    const data = new FormData(form);
    if (String(data.get('website') || '').trim()) return;

    const extraAgents = Number(extraAgentSelect?.value || 0);
    const total = totalPrice();
    const note = String(data.get('note') || '').trim();
    const message = [
      '[Content Factory багцын хүсэлт]',
      `Багц: ${currentPlan.name}`,
      `Суурь үнэ: ${money(currentPlan.price)}`,
      `Багтсан agent: ${currentPlan.includedAgents}`,
      `Нэмэлт agent: ${extraAgents}${extraAgents ? ` (+${money(extraAgents * EXTRA_AGENT_PRICE)})` : ''}`,
      `Тооцоолсон нийт: ${money(total)}`,
      'Source: Content Factory pricing page',
      note ? `Нэмэлт: ${note}` : null,
    ].filter(Boolean).join('\n');

    submitButton.disabled = true;
    submitButton.textContent = t('submitting');
    feedback.className = 'order-feedback';
    feedback.textContent = t('sending');

    try {
      const response = await fetch(`${NAIMAN_SUPABASE_URL}/rest/v1/contact_requests`, {
        method: 'POST',
        headers: {
          apikey: NAIMAN_SUPABASE_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          name: String(data.get('name') || '').trim(),
          email: String(data.get('email') || '').trim(),
          phone: String(data.get('phone') || '').trim(),
          organisation: String(data.get('organisation') || '').trim() || null,
          message,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      feedback.hidden = true;
      dialog?.classList.add('is-success');
      if (form) form.hidden = true;
      if (orderSummary) orderSummary.hidden = true;
      if (successState) successState.hidden = false;
      const savedName = String(data.get('name') || '').trim();
      const savedEmail = String(data.get('email') || '').trim();
      const savedPhone = String(data.get('phone') || '').trim();
      const savedOrg = String(data.get('organisation') || '').trim();
      form.reset();
      form.querySelector('input[name="name"]').value = savedName;
      form.querySelector('input[name="email"]').value = savedEmail;
      form.querySelector('input[name="phone"]').value = savedPhone;
      form.querySelector('input[name="organisation"]').value = savedOrg;
      if (extraAgentSelect) extraAgentSelect.value = '0';
      updateSummary();
    } catch (error) {
      console.error(error);
      feedback.className = 'order-feedback is-error';
      feedback.textContent = t('sendError');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = `<span>${t('submitOrder')}</span> <span>→</span>`;
    }
  });

  applyLanguage(currentLang);
  void prefillFromContentFactory();
})();
