(() => {
  const PRICE_URL = './pricing.html';

  function pricingIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>';
  }

  function installStyles() {
    if (document.getElementById('pricing-entry-style')) return;
    const style = document.createElement('style');
    style.id = 'pricing-entry-style';
    style.textContent = `
      .pricing-auth-promo{width:min(310px,100%);display:flex;align-items:center;gap:4px;margin:46px auto 0;padding:4px;border:1px solid #2c2c2c;border-radius:999px;background:#2f2f2f;box-shadow:0 14px 34px rgba(0,0,0,.20),0 4px 12px rgba(0,0,0,.10);text-decoration:none;transition:transform .18s ease,box-shadow .18s ease}
      .pricing-auth-promo:hover{transform:translateY(-2px);box-shadow:0 18px 40px rgba(0,0,0,.26),0 6px 14px rgba(0,0,0,.12)}
      .pricing-auth-promo-copy{min-width:0;flex:1;display:flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.04),0 3px 10px rgba(0,0,0,.10)}
      .pricing-auth-promo-copy strong{font-size:15px;line-height:1;color:#202020;letter-spacing:-.015em;font-weight:500;white-space:nowrap}
      .pricing-auth-promo-copy small{display:none}
      .pricing-auth-promo-icon{display:none}
      .pricing-auth-promo-arrow{width:44px;height:40px;display:grid;place-items:center;flex:0 0 44px;border-radius:999px;color:#fff;font-size:25px;line-height:1;font-weight:950;transition:transform .18s ease;text-shadow:0 1px 3px rgba(0,0,0,.18)}
      .pricing-auth-promo:hover .pricing-auth-promo-arrow{transform:translateX(2px)}
      .auth-box.pricing-login-layout{transform:translateY(-62px)}
      @media(max-width:820px){.auth-box.pricing-login-layout{transform:translateY(-24px)}.pricing-auth-promo{margin-top:34px}}
      .pricing-top-link{height:36px;padding:0 12px;border:1px solid var(--line);background:var(--surface);border-radius:10px;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:700;color:#5a5f68;text-decoration:none}
      .pricing-top-link:hover{background:var(--surface-2);color:var(--text)}
      .pricing-top-link svg{width:15px;height:15px}
      @media(max-width:820px){.pricing-top-link{height:34px;padding:0 10px}.pricing-top-link span{display:none}}
    `;
    document.head.appendChild(style);
  }

  function inject() {
    installStyles();

    document.querySelectorAll('.nav-main').forEach((nav) => {
      if (nav.querySelector('[data-pricing-nav]')) return;
      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = PRICE_URL;
      link.dataset.pricingNav = '1';
      link.innerHTML = `<span class="nav-icon">${pricingIcon()}</span><span class="nav-label">Үнийн мэдээлэл</span>`;
      nav.appendChild(link);
    });

    document.querySelectorAll('.auth-box').forEach((box) => {
      if (box.querySelector('[data-pricing-auth]')) return;
      const link = document.createElement('a');
      link.className = 'pricing-auth-promo';
      link.href = PRICE_URL;
      link.dataset.pricingAuth = '1';
      link.innerHTML = `
        <span class="pricing-auth-promo-copy"><strong>Үнийн мэдээлэл харах</strong></span>
        <span class="pricing-auth-promo-arrow" aria-hidden="true">→</span>
      `;
      const form = box.querySelector('.auth-form');
      if (form?.id === 'login-form') box.classList.add('pricing-login-layout');
      const foot = box.querySelector('.auth-foot');
      if (foot) foot.insertAdjacentElement('afterend', link);
      else box.appendChild(link);
    });

    document.querySelectorAll('.topbar,.mobile-top-actions').forEach((bar) => {
      if (bar.querySelector('[data-pricing-top]')) return;
      const link = document.createElement('a');
      link.className = 'pricing-top-link';
      link.href = PRICE_URL;
      link.dataset.pricingTop = '1';
      link.innerHTML = `${pricingIcon()}<span>Үнийн мэдээлэл</span>`;
      bar.prepend(link);
    });
  }

  const observer = new MutationObserver(() => inject());
  observer.observe(document.getElementById('app') || document.body, { childList: true, subtree: true });
  inject();
})();
