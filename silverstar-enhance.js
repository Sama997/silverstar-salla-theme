
(function(){
  "use strict";
  const CONFIG={
    heroTitle:"تنظيف عميق.<br>للحياة أسهل.",
    heroSubtitle:"تقنية قوية تجمع بين الأداء العالي والتصميم العملي لتجربة تنظيف أكثر راحة واحترافية.",
    primaryCta:"تسوق الآن",
    secondaryCta:"شاهد المنتجات",
    primaryLink:"/categories",
    secondaryLink:"/products"
  };
  function $(s,r=document){return r.querySelector(s)}
  function $all(s,r=document){return Array.from(r.querySelectorAll(s))}
  function isHome(){const p=location.pathname.replace(/\/+$/,"")||"/";return p==="/"||p==="/ar"}
  function findBestProductImage(){
    const imgs=$all("img").filter(img=>{
      const src=img.currentSrc||img.src||"", alt=(img.alt||"").toLowerCase(), rect=img.getBoundingClientRect();
      if(!src||src.includes("logo")||src.includes("icon")) return false;
      if(alt.includes("logo")||alt.includes("شعار")) return false;
      return rect.width>=80&&rect.height>=80;
    });
    imgs.sort((a,b)=>{const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();return br.width*br.height-ar.width*ar.height});
    return imgs[0]?(imgs[0].currentSrc||imgs[0].src):"";
  }
  function mount(){return $("main")||$(".main-content")||$("#app")||document.body}
  function createHero(){
    if(!isHome()||$(".ss-premium-home")) return;
    const m=mount(), img=findBestProductImage();
    const w=document.createElement("section");
    w.className="ss-premium-home";
    w.innerHTML=`
    <div class="ss-hero">
      <div class="ss-hero__inner">
        <div class="ss-hero__content">
          <div class="ss-eyebrow">✨ منتجات أصلية وتجربة تنظيف احترافية</div>
          <h1>${CONFIG.heroTitle}</h1>
          <p>${CONFIG.heroSubtitle}</p>
          <div class="ss-hero__actions">
            <a class="ss-btn ss-btn--light" href="${CONFIG.primaryLink}">${CONFIG.primaryCta} <span>←</span></a>
            <a class="ss-btn ss-btn--ghost" href="${CONFIG.secondaryLink}">${CONFIG.secondaryCta}</a>
          </div>
        </div>
        <div class="ss-hero__media">
          <div class="ss-device-orb"></div>
          ${img?`<img class="ss-hero__product" src="${img}" alt="Silver Star Product" loading="eager">`:`<div class="ss-hero__fallback">Silver Star</div>`}
        </div>
      </div>
    </div>
    <div class="ss-trust">
      <div class="ss-trust__item"><div class="ss-trust__icon">✓</div><div><p class="ss-trust__title">منتجات أصلية</p><p class="ss-trust__sub">100% أصلية</p></div></div>
      <div class="ss-trust__item"><div class="ss-trust__icon">🚚</div><div><p class="ss-trust__title">شحن سريع</p><p class="ss-trust__sub">لجميع مناطق المملكة</p></div></div>
      <div class="ss-trust__item"><div class="ss-trust__icon">🔒</div><div><p class="ss-trust__title">دفع آمن</p><p class="ss-trust__sub">خيارات دفع متعددة</p></div></div>
      <div class="ss-trust__item"><div class="ss-trust__icon">🛡</div><div><p class="ss-trust__title">ضمان سنة</p><p class="ss-trust__sub">على جميع الأجهزة</p></div></div>
      <div class="ss-trust__item"><div class="ss-trust__icon">🎧</div><div><p class="ss-trust__title">دعم فني</p><p class="ss-trust__sub">متوفر 24/7</p></div></div>
    </div>`;
    const old=$(".main-slider, salla-slider, .home-slider, .hero, .banner, .banners, section.slider");
    if(old&&old.parentNode){old.parentNode.insertBefore(w,old);old.style.display="none"}else{m.insertBefore(w,m.firstChild)}
  }
  function addSectionTitle(){
    if(!isHome()||$(".ss-section-head")) return;
    const list=$(".s-products-list, .products-list, .product-list, salla-products-list, .products");
    if(!list||!list.parentNode)return;
    const h=document.createElement("div");
    h.className="ss-section-head";
    h.innerHTML=`<div class="ss-section-kicker">— الأفضل مبيعاً —</div><h2>منتجاتنا الأكثر طلباً</h2>`;
    list.parentNode.insertBefore(h,list);
  }
  function injectFeatures(){
    if(!isHome()||$(".ss-features")) return;
    const area=$(".s-products-list, .products-list, .product-list, salla-products-list, .products, main");
    if(!area||!area.parentNode)return;
    const s=document.createElement("section");
    s.className="ss-features";
    s.innerHTML=`
      <div class="ss-feature"><div class="ss-feature__icon">🌀</div><h3>شفط قوي</h3><p>أداء عملي يساعد على إزالة الغبار والأوساخ بكفاءة أعلى.</p></div>
      <div class="ss-feature"><div class="ss-feature__icon">💧</div><h3>تنظيف جاف ورطب</h3><p>مرونة أكبر للتعامل مع مختلف احتياجات التنظيف اليومية.</p></div>
      <div class="ss-feature"><div class="ss-feature__icon">⚡</div><h3>استهلاك عملي</h3><p>تصميم مناسب للاستخدام المنزلي المتكرر بدون تعقيد.</p></div>
      <div class="ss-feature"><div class="ss-feature__icon">🔇</div><h3>تجربة أكثر راحة</h3><p>واجهة استخدام سهلة وتصميم بصري واضح يساعد العميل على الاختيار.</p></div>`;
    area.parentNode.insertBefore(s,area.nextSibling);
  }
  function addWhatsapp(){
    if($(".ss-whatsapp-float"))return;
    const a=document.createElement("a");
    a.className="ss-whatsapp-float";a.href="https://wa.me/";a.target="_blank";a.rel="noopener";
    a.innerHTML=`<span>☘</span><span>تواصل واتساب</span>`;
    document.body.appendChild(a);
  }
  function init(){createHero();addSectionTitle();injectFeatures();addWhatsapp()}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
  setTimeout(init,900);setTimeout(init,1800);
})();
