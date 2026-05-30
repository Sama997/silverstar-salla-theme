/* =========================================================
   Silver Star Home Injection
   Adds premium home sections without changing product images
   ========================================================= */

(function () {
  "use strict";

  function isHomePage() {
    var path = window.location.pathname.replace(/\/+$/, "");
    return path === "" || path === "/" || path === "/ar" || path === "/en";
  }

  if (!isHomePage()) return;
  if (document.querySelector(".ss-hero-wrap")) return;

  document.body.classList.add("ss-enhanced-home");
  document.documentElement.setAttribute("dir", "rtl");

  function createSilverStarSections() {
    var wrapper = document.createElement("div");
    wrapper.className = "ss-home-injected";

    wrapper.innerHTML = `
      <section class="ss-hero-wrap" aria-label="Silver Star Main Banner">
        <div class="ss-hero">
          <div class="ss-hero-content">
            <div class="ss-eyebrow">العلامة الأقرب للبيت السعودي</div>

            <h1>
              سيلفر ستار
              <span>قوة تنظيف موثوقة كل يوم</span>
            </h1>

            <p>
              مكانس عملية مصممة للاستخدام اليومي، تجمع بين قوة الأداء، سهولة الاستخدام،
              وخدمة ما بعد البيع داخل المملكة. اختر المنتج المناسب لبيتك بثقة.
            </p>

            <div class="ss-actions">
              <a class="ss-btn ss-btn-primary" href="#ss-products-start">تسوق منتجات سيلفر ستار</a>
              <a class="ss-btn ss-btn-secondary" href="/search?q=سيلفر%20ستار">شاهد الأكثر طلباً</a>
            </div>

            <div class="ss-trust-row">
              <div class="ss-trust-card">
                <strong>ضمان سنتين</strong>
                <small>على المحرك والمكونات الرئيسية</small>
              </div>
              <div class="ss-trust-card">
                <strong>شحن داخل المملكة</strong>
                <small>توصيل عبر شركات شحن موثوقة</small>
              </div>
              <div class="ss-trust-card">
                <strong>دفع آمن</strong>
                <small>مدى، Apple Pay، وتمارا/تابي</small>
              </div>
              <div class="ss-trust-card">
                <strong>خدمة ما بعد البيع</strong>
                <small>دعم وقطع غيار حسب التوفر</small>
              </div>
            </div>
          </div>

          <div class="ss-hero-visual" aria-hidden="true">
            <div class="ss-product-orbit">
              <div>
                <strong>Silver<br>Star</strong>
                <span>Vacuum Cleaners</span>
                <em>اختيار ذكي للمنزل</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ss-brand-strip" aria-label="Silver Star Brand Value">
        <div class="ss-brand-card">
          <h2>ليش تختار سيلفر ستار؟</h2>
          <p>
            لأن قرار الشراء ما يعتمد على السعر فقط. العميل يحتاج منتج عملي، ضمان واضح،
            توفر خدمة، وتجربة شراء مريحة. لذلك نعرض منتجات سيلفر ستار كخيار أساسي
            مبني على الثقة والاستخدام اليومي.
          </p>

          <div class="ss-feature-grid">
            <div class="ss-feature">
              <b>أداء عملي</b>
              <small>منتجات مناسبة للاستخدام المنزلي والاستراحات.</small>
            </div>
            <div class="ss-feature">
              <b>ثقة أعلى</b>
              <small>واجهة واضحة ورسائل ضمان تقلل تردد العميل.</small>
            </div>
            <div class="ss-feature">
              <b>شراء أسرع</b>
              <small>أزرار مباشرة تقود العميل للمنتجات الأكثر طلباً.</small>
            </div>
          </div>
        </div>

        <div class="ss-category-card">
          <h2>منتجات إضافية مختارة</h2>
          <p>
            إلى جانب مكانس سيلفر ستار، نوفر منتجات مختارة بعناية تخدم احتياج البيت،
            مع الحفاظ على ظهور سيلفر ستار كعلامة رئيسية في الواجهة.
          </p>
        </div>
      </section>

      <section class="ss-hair-section" aria-label="Hair Devices">
        <div class="ss-section-head">
          <div>
            <h2>أجهزة الشعر</h2>
            <p>قسم جديد لمنتجات العناية اليومية: استشوار شعر وويفي شعر بتقديم مرتب وواضح.</p>
          </div>
          <a class="ss-mini-link" href="/search?q=أجهزة%20الشعر">مشاهدة القسم</a>
        </div>

        <div class="ss-hair-grid">
          <a class="ss-hair-card" href="/search?q=استشوار%20شعر">
            <div class="ss-hair-content">
              <small>Hair Dryer</small>
              <h3>استشوار شعر</h3>
              <p>اختيارات عملية للاستخدام اليومي بتصميم أنيق وسهل الاستخدام.</p>
              <span>تسوق الآن</span>
            </div>
          </a>

          <a class="ss-hair-card" href="/search?q=ويفي%20شعر">
            <div class="ss-hair-content">
              <small>Hair Waver</small>
              <h3>ويفي شعر</h3>
              <p>منتجات مخصصة لتصفيف الشعر بطريقة سهلة ومظهر احترافي.</p>
              <span>اكتشف المنتج</span>
            </div>
          </a>
        </div>
      </section>
    `;

    return wrapper;
  }

  function markFirstProductSection() {
    var selectors = [
      ".s-products-list-wrapper",
      ".s-products-slider-section",
      ".products-list",
      ".product-list",
      ".products",
      ".s-product-card-entry",
      ".product-entry"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var found = document.querySelector(selectors[i]);
      if (found) {
        var section = found.closest("section") || found.parentElement || found;
        section.id = "ss-products-start";
        return;
      }
    }
  }

  function injectAfterHeader() {
    var sections = createSilverStarSections();

    var header =
      document.querySelector("header") ||
      document.querySelector(".store-header") ||
      document.querySelector(".salla-header") ||
      document.querySelector("salla-header");

    if (header && header.parentNode) {
      header.insertAdjacentElement("afterend", sections);
      return true;
    }

    var main =
      document.querySelector("main") ||
      document.querySelector("#app") ||
      document.body;

    if (main.firstChild) {
      main.insertBefore(sections, main.firstChild);
    } else {
      main.appendChild(sections);
    }

    return true;
  }

  function init() {
    markFirstProductSection();
    injectAfterHeader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
