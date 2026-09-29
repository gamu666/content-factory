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
      .pricing-auth-link{width:100%;margin-top:10px;text-decoration:none}
      .pricing-auth-divider{display:flex;align-items:center;gap:10px;margin:18px 0 2px;color:#a0a4ab;font-size:10px}
      .pricing-auth-divider::before,.pricing-auth-divider::after{content:"";height:1px;background:#eceef1;flex:1}
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
      const divider = document.createElement('div');
      divider.className = 'pricing-auth-divider';
      divider.dataset.pricingAuth = '1';
      divider.textContent = 'эсвэл';
      const link = document.createElement('a');
      link.className = 'btn btn-secondary pricing-auth-link';
      link.href = PRICE_URL;
      link.textContent = 'Үнийн мэдээлэл харах';
      box.appendChild(divider);
      box.appendChild(link);
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
