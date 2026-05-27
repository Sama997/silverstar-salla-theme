/* =========================================================
   Silver Star - Salla Premium Conversion Layer JS
   Version: 1.0.0
   ========================================================= */
(function(){
  'use strict';

  if (window.__SilverStarEnhanceLoaded) return;
  window.__SilverStarEnhanceLoaded = true;
  document.documentElement.classList.add('ss-injected');

  const STORE_WHATSAPP = '966500000000'; // عدل الرقم هنا قبل النشر
  const SHOP_LINK = '/categories';
  const BEST_SELLER_LINK = '/products';

  function isHomePage(){
    const path = location.pathname.replace(/\/+$/,'');
    return path === '' || path === '/' || path === '/ar' || path === '/en';
  }

  function findInsertionPoint(){
    return document.querySelector('main') ||
           document.querySelector('.app-inner') ||
           document.querySelector('#app') ||
           document.body;
  }

  function injectHero(){
    if (!isHomePage() || document.querySelector('.ss-premium-hero')) return;
    const point = findInsertionPoint();
    const wrap = document.createElement('section');
    wrap.className = 'ss-premium-hero';
    wrap.setAttribute('dir','rtl');
    wrap.innerHTML = `
      <div class="ss-hero-grid">
        <div>
          <div class="ss-eyebrow">✦ Silver Star | حلول نظافة منزلية ذكية</div>
          <h1 class="ss-hero-title">نظافة عميقة… وجفاف فوري في كل ركن من منزلك</h1>
          <p class="ss-hero-subtitle">اختاري أجهزة سيلفر ستار المصممة لتختصر وقت التنظيف وتتعامل مع الغبار والسوائل والسجاد والكنب والزوايا بكفاءة أعلى وتجربة استخدام أسهل.</p>
          <div class="ss-hero-actions">
            <a class="ss-btn ss-btn-primary" href="${SHOP_LINK}">تسوقي الآن</a>
            <a class="ss-btn ss-btn-secondary" href="${BEST_SELLER_LINK}">شاهدي الأكثر طلباً</a>
          </div>
        </div>
        <div class="ss-hero-card">
          <h3>لماذا Silver Star؟</h3>
          <ul class="ss-hero-list">
            <li>أداء جاف ورطب يناسب الاستخدام اليومي داخل المنزل.</li>
            <li>خزان عملي وملحقات متعددة للوصول للأماكن الصعبة.</li>
            <li>دفع آمن، شحن سريع، وخدمة ما بعد البيع.</li>
            <li>تصميم عملي يساعد على تنظيف أسرع وبجهد أقل.</li>
          </ul>
        </div>
      </div>`;
    point.prepend(wrap);
  }

  function injectTrustBar(){
    if (!isHomePage() || document.querySelector('.ss-trust-bar')) return;
    const hero = document.querySelector('.ss-premium-hero');
    if (!hero) return;
    const bar = document.createElement('section');
    bar.className = 'ss-trust-bar';
    bar.setAttribute('dir','rtl');
    bar.innerHTML = `
      <div class="ss-trust-item"><span>🔒</span>دفع آمن</div>
      <div class="ss-trust-item"><span>🚚</span>شحن سريع</div>
      <div class="ss-trust-item"><span>🛠️</span>ضمان وصيانة</div>
      <div class="ss-trust-item"><span>💧</span>جاف ورطب</div>
      <div class="ss-trust-item"><span>⭐</span>منتجات مختارة</div>`;
    hero.insertAdjacentElement('afterend', bar);
  }

  function injectValueCards(){
    if (!isHomePage() || document.querySelector('.ss-value-section')) return;
    const bar = document.querySelector('.ss-trust-bar');
    if (!bar) return;
    const section = document.createElement('section');
    section.className = 'ss-value-section';
    section.setAttribute('dir','rtl');
    section.innerHTML = `
      <div class="ss-value-card"><div class="icon">⚡</div><h3>قوة تنظيف عالية</h3><p>مناسبة للتنظيف العميق للأرضيات والسجاد والزوايا مع أداء ثابت للاستخدام المنزلي.</p></div>
      <div class="ss-value-card"><div class="icon">💧</div><h3>للجاف والرطب</h3><p>حل عملي للتعامل مع الغبار والسوائل والانسكابات اليومية دون الحاجة لأكثر من جهاز.</p></div>
      <div class="ss-value-card"><div class="icon">🧩</div><h3>ملحقات متعددة</h3><p>فوهات وإكسسوارات تساعد على تنظيف الكنب، الزوايا، السيارات، والأسطح المختلفة.</p></div>
      <div class="ss-value-card"><div class="icon">🛡️</div><h3>خدمة ما بعد البيع</h3><p>إبراز الضمان والصيانة وقطع الغيار يزيد ثقة العميلة ويقلل تردد الشراء.</p></div>`;
    bar.insertAdjacentElement('afterend', section);
  }

  function improveProductCards(){
    const selectors = [
      '.s-product-card-entry',
      '.product-entry',
      '.salla-product-card',
      '.product-card'
    ];
    const cards = document.querySelectorAll(selectors.join(','));
    cards.forEach(function(card, index){
      if (card.dataset.ssEnhanced) return;
      card.dataset.ssEnhanced = '1';
      card.style.position = card.style.position || 'relative';
      const titleText = (card.innerText || '').toLowerCase();
      if (index < 4 || titleText.includes('مكنسة') || titleText.includes('الأكثر')) {
        const badge = document.createElement('div');
        badge.className = 'ss-best-badge';
        badge.textContent = 'الأكثر طلباً';
        card.appendChild(badge);
      }
    });
  }

  function injectMobileCTA(){
    if (document.querySelector('.ss-mobile-cta')) return;
    const cta = document.createElement('div');
    cta.className = 'ss-mobile-cta';
    cta.setAttribute('dir','rtl');
    cta.innerHTML = `
      <a class="shop" href="${SHOP_LINK}">اطلبي الآن</a>
      <a class="wa" href="https://wa.me/${STORE_WHATSAPP}" target="_blank" rel="noopener">واتساب</a>`;
    document.body.appendChild(cta);
  }

  function run(){
    injectHero();
    injectTrustBar();
    injectValueCards();
    improveProductCards();
    injectMobileCTA();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  const observer = new MutationObserver(function(){
    improveProductCards();
  });
  observer.observe(document.documentElement, {childList:true, subtree:true});
})();
