(() => {
  const PRICE_URL = './pricing.html';
  const DASHBOARD_ROUTE = '#/dashboard';
  const OPEN_FLAG = 'cf_open_dashboard_pricing';

  function pricingIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>';
  }

  function installStyles() {
    if (document.getElementById('pricing-entry-style')) return;
    const style = document.createElement('style');
    style.id = 'pricing-entry-style';
    style.textContent = `
      .pricing-top-link{height:36px;padding:0 12px;border:1px solid var(--line);background:var(--surface);border-radius:10px;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:700;color:#5a5f68;text-decoration:none}
      .pricing-top-link:hover{background:var(--surface-2);color:var(--text)}
      .pricing-top-link svg{width:15px;height:15px}

      .dashboard-pricing-section{margin-top:34px}
      .dashboard-pricing-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:14px}
      .dashboard-pricing-head h2{margin:0;font-size:22px;letter-spacing:-.04em}
      .dashboard-pricing-head p{margin:6px 0 0;color:var(--muted);font-size:11px;line-height:1.6}
      .dashboard-plan-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
      .dashboard-plan-card{border:1px solid var(--line);background:var(--surface);border-radius:16px;padding:18px;display:flex;flex-direction:column;min-height:260px}
      .dashboard-plan-card.featured{border-color:#7275ed;box-shadow:0 0 0 1px rgba(114,117,237,.08)}
      .dashboard-plan-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
      .dashboard-plan-top strong{font-size:12px;letter-spacing:.05em}
      .dashboard-plan-tag{font-size:9px;padding:5px 8px;border-radius:999px;background:var(--surface-2);color:var(--muted)}
      .dashboard-plan-price{font-size:28px;line-height:1;font-weight:780;letter-spacing:-.05em;margin:20px 0 14px}
      .dashboard-plan-list{display:grid;gap:8px;margin:0;padding:0;list-style:none;color:var(--muted);font-size:10px;line-height:1.45}
      .dashboard-plan-list li{position:relative;padding-left:13px}
      .dashboard-plan-list li::before{content:"";position:absolute;left:0;top:5px;width:5px;height:5px;border-radius:50%;background:#8588ff}
      .dashboard-plan-note{margin-top:auto;padding-top:16px;color:var(--muted);font-size:9px;line-height:1.5;border-top:1px solid var(--line)}
      .dashboard-plan-card.featured .dashboard-plan-tag{background:#7376f0;color:white}
      .dashboard-pricing-mobile-note{display:none}

      @media(max-width:900px){
        .dashboard-plan-grid{grid-template-columns:1fr}
        .dashboard-plan-card{min-height:auto}
      }
      @media(max-width:820px){
        .pricing-top-link{height:34px;padding:0 10px}
        .pricing-top-link span{display:none}
        .dashboard-pricing-section{margin-top:28px}
        .dashboard-pricing-head{align-items:flex-start}
      }
    `;
    document.head.appendChild(style);
  }

  function pricingSectionHtml() {
    return `
      <section id="dashboard-pricing" class="dashboard-pricing-section">
        <div class="dashboard-pricing-head">
          <div>
            <h2>Багц & үнийн мэдээлэл</h2>
            <p>Нэвтэрсэн үед багцын мэдээллээ dashboard дотроосоо харна.</p>
          </div>
        </div>
        <div class="dashboard-plan-grid">
          <article class="dashboard-plan-card">
            <div class="dashboard-plan-top"><strong>START</strong><span class="dashboard-plan-tag">Эхлэхэд</span></div>
            <div class="dashboard-plan-price">₮1,290,000</div>
            <ul class="dashboard-plan-list">
              <li>4 Property Reel</li><li>4 Poster</li><li>1 agent automation</li>
              <li>Facebook auto posting</li><li>Caption variation + posting queue</li>
            </ul>
            <div class="dashboard-plan-note">Нэмэлт Camera / Drone Credit — тус бүр 250,000₮</div>
          </article>
          <article class="dashboard-plan-card featured">
            <div class="dashboard-plan-top"><strong>GROW</strong><span class="dashboard-plan-tag">Санал болгох</span></div>
            <div class="dashboard-plan-price">₮2,990,000</div>
            <ul class="dashboard-plan-list">
              <li>6 Property Reel</li><li>6 Poster</li><li>2 Expert Content</li>
              <li>1 Camera Credit</li><li>1 Drone Credit</li><li>2 agent automation</li>
            </ul>
            <div class="dashboard-plan-note">Нэмэлт Camera / Drone Credit — тус бүр 250,000₮</div>
          </article>
          <article class="dashboard-plan-card">
            <div class="dashboard-plan-top"><strong>PRO</strong><span class="dashboard-plan-tag">Full system</span></div>
            <div class="dashboard-plan-price">₮5,490,000</div>
            <ul class="dashboard-plan-list">
              <li>8 Property Reel</li><li>8 Poster</li><li>4 Expert Content</li><li>4 Agent Branding Reel</li>
              <li>2 Camera Credit</li><li>2 Drone Credit</li><li>3 agent automation</li><li>Priority production</li>
            </ul>
            <div class="dashboard-plan-note">Нэмэлт Camera / Drone Credit — тус бүр 250,000₮</div>
          </article>
        </div>
      </section>
    `;
  }

  function openDashboardPricing(e) {
    e?.preventDefault();
    sessionStorage.setItem(OPEN_FLAG, '1');
    if (location.hash !== '/dashboard' && location.hash !== '#/dashboard') {
      location.hash = '/dashboard';
    }
    window.setTimeout(scrollToPricing, 80);
  }

  function scrollToPricing() {
    const section = document.getElementById('dashboard-pricing');
    if (!section) return;
    if (sessionStorage.getItem(OPEN_FLAG) === '1') {
      sessionStorage.removeItem(OPEN_FLAG);
      section.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }

  function inject() {
    installStyles();

    const dashboard = document.querySelector('.dashboard-home');
    if (dashboard && !dashboard.querySelector('#dashboard-pricing')) {
      dashboard.insertAdjacentHTML('beforeend', pricingSectionHtml());
    }

    document.querySelectorAll('.nav-main').forEach((nav) => {
      if (nav.querySelector('[data-pricing-nav]')) return;
      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = DASHBOARD_ROUTE;
      link.dataset.pricingNav = '1';
      link.innerHTML = `<span class="nav-icon">${pricingIcon()}</span><span class="nav-label">Үнийн мэдээлэл</span>`;
      link.addEventListener('click', openDashboardPricing);
      nav.appendChild(link);
    });

    document.querySelectorAll('.topbar,.mobile-top-actions').forEach((bar) => {
      if (bar.querySelector('[data-pricing-top]')) return;
      const link = document.createElement('a');
      link.className = 'pricing-top-link';
      link.href = DASHBOARD_ROUTE;
      link.dataset.pricingTop = '1';
      link.innerHTML = `${pricingIcon()}<span>Үнийн мэдээлэл</span>`;
      link.addEventListener('click', openDashboardPricing);
      bar.prepend(link);
    });

    scrollToPricing();
  }

  const observer = new MutationObserver(() => inject());
  observer.observe(document.getElementById('app') || document.body, { childList: true, subtree: true });
  inject();
})();