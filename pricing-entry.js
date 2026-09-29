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
      .pricing-auth-promo{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:20px 0 30px;padding:15px 16px;border:1px solid rgba(72,99,255,.20);border-radius:16px;background:linear-gradient(135deg,rgba(42,139,255,.10),rgba(105,88,255,.07));box-shadow:0 12px 34px rgba(39,91,220,.09);text-decoration:none;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
      .pricing-auth-promo:hover{transform:translateY(-2px);border-color:rgba(72,99,255,.38);box-shadow:0 16px 38px rgba(39,91,220,.14)}
      .pricing-auth-promo-copy{display:flex;flex-direction:column;gap:3px;min-width:0}
      .pricing-auth-promo-copy strong{font-size:13px;color:#111827;letter-spacing:-.01em}
      .pricing-auth-promo-copy small{font-size:10px;color:#7a8291;font-weight:600}
      .pricing-auth-promo-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;flex:0 0 auto;background:#1d8df2;color:white;box-shadow:0 8px 20px rgba(29,141,242,.24)}
      .pricing-auth-promo-icon svg{width:18px;height:18px}
      .pricing-auth-promo-arrow{font-size:18px;color:#1d8df2;font-weight:700;flex:0 0 auto}
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
        <span class="pricing-auth-promo-icon">${pricingIcon()}</span>
        <span class="pricing-auth-promo-copy"><strong>Үнийн мэдээлэл харах</strong><small>START · GROW · PRO багцууд</small></span>
        <span class="pricing-auth-promo-arrow">→</span>
      `;
      const form = box.querySelector('.auth-form');
      if (form) box.insertBefore(link, form);
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
