(() => {
  const NAIMAN_SUPABASE_URL = 'https://buvmtdlvynfrjwcatlsv.supabase.co';
  const NAIMAN_SUPABASE_KEY = 'sb_publishable_o8Q6jjCR_Am7ggsLc8rQyg_9lq7ThQ0';
  const EXTRA_AGENT_PRICE = 79900;
  const PLANS = {
    START: { name: 'START', price: 1290000, includedAgents: 1 },
    GROW: { name: 'GROW', price: 2990000, includedAgents: 2 },
    PRO: { name: 'PRO', price: 5490000, includedAgents: 3 },
  };

  let currentPlan = PLANS.GROW;
  const modal = document.getElementById('order-modal');
  const form = document.getElementById('pricing-order-form');
  const extraAgentSelect = document.getElementById('extra-agent-count');
  const feedback = document.getElementById('order-feedback');
  const submitButton = form?.querySelector('.order-submit');
  const successState = document.getElementById('order-success');
  const orderSummary = document.getElementById('order-summary');

  function money(value) {
    return `₮${Number(value || 0).toLocaleString('en-US')}`;
  }

  function totalPrice() {
    const extra = Number(extraAgentSelect?.value || 0);
    return currentPlan.price + (extra * EXTRA_AGENT_PRICE);
  }

  function updateSummary() {
    document.getElementById('order-title').textContent = `${currentPlan.name} багц`;
    document.getElementById('order-plan-input').value = currentPlan.name;
    document.getElementById('order-base-price').textContent = money(currentPlan.price);
    const planSummary = document.getElementById('order-plan-summary');
    if (planSummary) planSummary.textContent = currentPlan.name;
    document.getElementById('order-included-agents').textContent = `${currentPlan.includedAgents} agent`;
    document.getElementById('order-total-price').textContent = money(totalPrice());
  }

  function openModal(planName) {
    currentPlan = PLANS[planName] || PLANS.GROW;
    if (extraAgentSelect) extraAgentSelect.value = '0';
    updateSummary();
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = 'Хүсэлт НАЙМАН САР-ын админ хэсэгт шууд очно.';
      feedback.className = 'order-feedback';
    }
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
      'Automation: эхний хугацаа FREE',
      'Source: Content Factory pricing page',
      note ? `Нэмэлт: ${note}` : null,
    ].filter(Boolean).join('\n');

    submitButton.disabled = true;
    submitButton.innerHTML = 'Илгээж байна…';
    feedback.className = 'order-feedback';
    feedback.textContent = 'Хүсэлтийг илгээж байна…';

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
      if (form) form.hidden = true;
      if (orderSummary) orderSummary.hidden = true;
      if (successState) successState.hidden = false;
      document.getElementById('order-title').textContent = 'Амжилттай';
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
      feedback.textContent = 'Хүсэлт илгээгдсэнгүй. Түр хүлээгээд дахин оролдоно уу.';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Захиалгын хүсэлт илгээх <span>→</span>';
    }
  });

  void prefillFromContentFactory();
})();
