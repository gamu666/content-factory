(() => {
  const PRICE_ROUTE = '#/pricing';

  function pricingIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>';
  }

  function installStyles() {
    if (document.getElementById('pricing-entry-style')) return;
    const style=document.createElement('style');
    style.id='pricing-entry-style';
    style.textContent=`

      .internal-pricing-page{padding-bottom:54px}
      .internal-pricing-head{margin-bottom:24px}
      .page-kicker{font-size:9px;font-weight:800;letter-spacing:.14em;color:#7779ff;margin-bottom:8px}
      .internal-plan-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
      .internal-plan-card{position:relative;display:flex;flex-direction:column;min-height:440px;padding:22px;border:1px solid var(--line);border-radius:18px;background:var(--surface);box-shadow:var(--shadow-sm)}
      .internal-plan-card.featured{border-color:#696ce5;box-shadow:0 0 0 1px rgba(105,108,229,.08),var(--shadow-sm)}
      .internal-plan-badge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);padding:6px 10px;border-radius:999px;background:#7779ff;color:#fff;font-size:8px;font-weight:850;letter-spacing:.08em;white-space:nowrap}
      .internal-plan-top{display:flex;justify-content:space-between;align-items:center;gap:10px}
      .internal-plan-top strong{font-size:12px;letter-spacing:.05em}
      .internal-plan-top span{font-size:9px;color:var(--muted);background:var(--surface-2);border:1px solid var(--line);padding:5px 8px;border-radius:999px}
      .internal-plan-price{margin:24px 0 14px;font-size:34px;line-height:1;font-weight:780;letter-spacing:-.055em}
      .internal-plan-copy{min-height:56px;margin:0 0 16px;padding-bottom:16px;border-bottom:1px solid var(--line);color:var(--muted);font-size:11px;line-height:1.65}
      .internal-plan-card ul{list-style:none;margin:0;padding:0;display:grid;gap:10px;font-size:11px;color:var(--text)}
      .internal-plan-card li{position:relative;padding-left:16px}
      .internal-plan-card li::before{content:"";position:absolute;left:0;top:5px;width:6px;height:6px;border:2px solid #8588ff;border-radius:50%}
      .internal-plan-extra{margin-top:auto;padding-top:18px;color:var(--muted);font-size:9px;line-height:1.5}
      .internal-service-section{margin-top:42px}
      .internal-service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
      .internal-service-grid article{padding:19px;border:1px solid var(--line);border-radius:15px;background:var(--surface)}
      .internal-service-grid article.wide{grid-column:1/-1}
      .internal-service-grid strong{display:block;font-size:13px;margin-bottom:8px}
      .internal-service-grid p{margin:0;color:var(--muted);font-size:10px;line-height:1.7}
      .internal-service-grid small{display:inline-block;margin-top:12px;color:#7376e9;font-size:9px;font-weight:700}
      @media(max-width:1000px){.internal-plan-grid{grid-template-columns:1fr}.internal-plan-card{min-height:auto}}
      @media(max-width:820px){
        .internal-service-grid{grid-template-columns:1fr}.internal-service-grid article.wide{grid-column:auto}
        .internal-plan-price{font-size:30px}
      }
    `;
    document.head.appendChild(style);
  }

  function inject() {
    installStyles();
    const active=location.hash==='#/pricing';

    document.querySelectorAll('.nav-main').forEach((nav)=>{
      let link=nav.querySelector('[data-pricing-nav]');
      if(!link){
        link=document.createElement('a');
        link.dataset.pricingNav='1';
        link.innerHTML=`<span class="nav-icon">${pricingIcon()}</span><span class="nav-label">Үнийн мэдээлэл</span>`;
        nav.appendChild(link);
      }
      link.className=`nav-link ${active?'active':''}`;
      link.href=PRICE_ROUTE;
    });
    document.querySelectorAll("[data-pricing-top]").forEach(el=>el.remove());
  }

  const observer=new MutationObserver(()=>inject());
  observer.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
  window.addEventListener('hashchange',()=>setTimeout(inject,0));
  inject();
})();