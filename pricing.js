(() => {
  const NAIMAN_SUPABASE_URL = 'https://buvmtdlvynfrjwcatlsv.supabase.co';
  const NAIMAN_SUPABASE_KEY = 'sb_publishable_o8Q6jjCR_Am7ggsLc8rQyg_9lq7ThQ0';
  const EXTRA_AGENT_PRICE = 79900;
  const CAMERA_CREDIT_PRICE = 250000;
  const DRONE_CREDIT_PRICE = 250000;
  const PLANS = {
    START: { name: 'START', price: 1290000, includedAgents: 1, includedCamera: 0, includedDrone: 0 },
    GROW: { name: 'GROW', price: 2990000, includedAgents: 2, includedCamera: 1, includedDrone: 1 },
    PRO: { name: 'PRO', price: 5490000, includedAgents: 3, includedCamera: 2, includedDrone: 2 },
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
      propertyReelDesc:'Үл хөдлөхийн объектыг сошиал орчинд сонирхол татахуйц байдлаар танилцуулах богино босоо видео. Бэлэн зураг, бичлэгээ ашиглуулж болно, эсвэл шаардлагатай үед манай зураг авалтын үйлчилгээг нэмэлтээр сонгох боломжтой.',
      shootingAddonsPrice:'Нэмэлт Camera / Drone Credit — тус бүр 250,000₮',
      posterDesc:'Объектын гол давуу тал, үнэ, байршил зэрэг мэдээллийг цэгцтэй харуулсан сошиал постын дизайн. Таны бэлэн зураг, мэдээлэл дээр тулгуурлан шууд нийтлэхэд бэлэн байдлаар бэлтгэнэ.',
      expertDesc:'Агентын мэдлэг, туршлага, зөвлөгөөг харуулсан 2–3 минутын мэргэжлийн контент. Та гол сэдэв, санаагаа өгнө; манай баг зураг авалт, edit, subtitle болон визуал боловсруулалтыг хариуцаж контент болгон гаргана.',
      brandingDesc:'Агентын өөрийн дүр төрх, ажлын хэв маяг, үйлчилгээний онцлогийг тогтмол харуулах богино видео цуврал. Хувийн брэндээ танигдахуйц, нэг өнгө аястай хөгжүүлэхэд зориулагдана.',
      droneCreditDesc:'Drone ашиглан объект, орчин, байршлын зураг болон бичлэг авна. Агаараас харах өнцөг нь property контентыг илүү бүрэн, сонирхолтой харуулахад ашиглагдана.',
      droneCreditPrice:'Нэмэлт Drone Credit — 250,000₮',
      cameraCreditDesc:'Мэргэжлийн камераар объектын дотор, гадна орчны зураг болон бичлэг авна. Property Reel, Poster болон бусад контентод ашиглах чанартай эх материал бэлтгэнэ.',
      cameraCreditPrice:'Нэмэлт Camera Credit — 250,000₮',
      automationDesc:'Facebook контент түгээлтийг илүү цэгцтэй удирдах автоматжуулалтын хэсэг. Agent бүр өөрийн account/page-аа холбоод post queue, caption variation болон auto posting урсгалаа нэг дороос хянах боломжтой.',
      footerSub:'Real estate content production portal',
      orderKicker:'ЗАХИАЛГА', planLabel:'Багц', basePriceLabel:'Суурь үнэ', includedAgentLabel:'Багтсан agent', includedCameraLabel:'Багтсан Camera Credit', includedDroneLabel:'Багтсан Drone Credit', extraAgentLabel:'Нэмэлт agent', extraCameraLabel:'Нэмэлт Camera Credit', extraDroneLabel:'Нэмэлт Drone Credit', cameraAddonPrice:'1 credit = 250,000₮', droneAddonPrice:'1 credit = 250,000₮', totalLabel:'Тооцоолсон нийт',
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
      propertyReelDesc:'A short vertical video designed to present a real-estate listing in an engaging social-first format. You can use your existing photos and footage, or add our filming service when you need fresh visuals.',
      shootingAddonsPrice:'Additional Camera / Drone Credit — 250,000₮ each',
      posterDesc:'A social-ready visual that presents the property’s key selling points, price and location clearly. We build it from your available photos and listing information.',
      expertDesc:'A 2–3 minute professional video built around the agent’s knowledge, experience and advice. You bring the main topic and ideas; our team handles filming, editing, subtitles and visual treatment.',
      brandingDesc:'A short-form series that consistently presents the agent’s personality, work style and service strengths, helping build a recognizable and cohesive personal brand.',
      droneCreditDesc:'Drone filming provides both photos and video of the property, surroundings and location from the air, adding a wider and more engaging perspective to property content.',
      droneCreditPrice:'Additional Drone Credit — 250,000₮',
      cameraCreditDesc:'Professional camera filming provides both photos and video of the property interior and exterior, creating high-quality source material for Property Reels, Posters and other content.',
      cameraCreditPrice:'Additional Camera Credit — 250,000₮',
      automationDesc:'A streamlined way to manage Facebook content distribution. Each agent can connect their account/page and handle posting queue, caption variations and auto posting from one place.',
      footerSub:'Real estate content production portal',
      orderKicker:'ORDER', planLabel:'Plan', basePriceLabel:'Base price', includedAgentLabel:'Included agents', includedCameraLabel:'Included Camera Credit', includedDroneLabel:'Included Drone Credit', extraAgentLabel:'Extra agents', extraCameraLabel:'Extra Camera Credit', extraDroneLabel:'Extra Drone Credit', cameraAddonPrice:'1 credit = 250,000₮', droneAddonPrice:'1 credit = 250,000₮', totalLabel:'Estimated total',
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
  const extraCameraSelect = document.getElementById('extra-camera-count');
  const extraDroneSelect = document.getElementById('extra-drone-count');
  const feedback = document.getElementById('order-feedback');
  const submitButton = form?.querySelector('.order-submit');
  const successState = document.getElementById('order-success');
  const orderSummary = document.getElementById('order-summary');
  const dialog = document.querySelector('.order-dialog');

  function money(value) {
    return `₮${Number(value || 0).toLocaleString('en-US')}`;
  }

  function totalPrice() {
    const extraAgents = Number(extraAgentSelect?.value || 0);
    const extraCamera = Number(extraCameraSelect?.value || 0);
    const extraDrone = Number(extraDroneSelect?.value || 0);
    return currentPlan.price
      + (extraAgents * EXTRA_AGENT_PRICE)
      + (extraCamera * CAMERA_CREDIT_PRICE)
      + (extraDrone * DRONE_CREDIT_PRICE);
  }

  function updateSummary() {
    document.getElementById('order-title').textContent = `${currentPlan.name} ${t('packageSuffix')}`;
    document.getElementById('order-plan-input').value = currentPlan.name;
    document.getElementById('order-base-price').textContent = money(currentPlan.price);
    const planSummary = document.getElementById('order-plan-summary');
    if (planSummary) planSummary.textContent = currentPlan.name;
    document.getElementById('order-included-agents').textContent = `${currentPlan.includedAgents} ${t('agentSuffix')}`;
    document.getElementById('order-included-camera').textContent = `${currentPlan.includedCamera} credit`;
    document.getElementById('order-included-drone').textContent = `${currentPlan.includedDrone} credit`;
    document.getElementById('order-total-price').textContent = money(totalPrice());
  }

  function openModal(planName) {
    currentPlan = PLANS[planName] || PLANS.GROW;
    if (extraAgentSelect) extraAgentSelect.value = '0';
    if (extraCameraSelect) extraCameraSelect.value = '0';
    if (extraDroneSelect) extraDroneSelect.value = '0';
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

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  document.querySelectorAll('[data-order-plan]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.orderPlan));
  });
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
  extraAgentSelect?.addEventListener('change', updateSummary);
  extraCameraSelect?.addEventListener('change', updateSummary);
  extraDroneSelect?.addEventListener('change', updateSummary);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton?.disabled) return;
    const data = new FormData(form);
    if (String(data.get('website') || '').trim()) return;

    const extraAgents = Number(extraAgentSelect?.value || 0);
    const extraCamera = Number(extraCameraSelect?.value || 0);
    const extraDrone = Number(extraDroneSelect?.value || 0);
    const total = totalPrice();
    const note = String(data.get('note') || '').trim();
    const message = [
      '[Content Factory багцын хүсэлт]',
      `Багц: ${currentPlan.name}`,
      `Суурь үнэ: ${money(currentPlan.price)}`,
      `Багтсан agent: ${currentPlan.includedAgents}`,
      `Багтсан Camera Credit: ${currentPlan.includedCamera}`,
      `Багтсан Drone Credit: ${currentPlan.includedDrone}`,
      `Нэмэлт agent: ${extraAgents}${extraAgents ? ` (+${money(extraAgents * EXTRA_AGENT_PRICE)})` : ''}`,
      `Нэмэлт Camera Credit: ${extraCamera}${extraCamera ? ` (+${money(extraCamera * CAMERA_CREDIT_PRICE)})` : ''}`,
      `Нэмэлт Drone Credit: ${extraDrone}${extraDrone ? ` (+${money(extraDrone * DRONE_CREDIT_PRICE)})` : ''}`,
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
      if (extraCameraSelect) extraCameraSelect.value = '0';
      if (extraDroneSelect) extraDroneSelect.value = '0';
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
