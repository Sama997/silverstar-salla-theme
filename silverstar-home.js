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
                <strong>سيلفر<br>ستار</strong>
                <span>مكانس كهربائية بضمان</span>
                <em>نظافة أسهل كل يوم</em>
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

      <section class="ss-compare-section" aria-label="Vacuum Comparison">
        <div class="ss-compare-head">
          <small>اختيار المقاس المناسب</small>
          <h2>أي مكنسة تناسب بيتك؟</h2>
          <p>مقارنة مختصرة تساعد العميل يقرر بسرعة بين 15 لتر و30 لتر حسب مساحة البيت وطبيعة التنظيف.</p>
        </div>

        <div class="ss-compare-grid">
          <details class="ss-compare-card" open>
            <summary>
              <span>15 لتر</span>
              <b>خفيفة وسريعة</b>
              <em>للاستخدام اليومي</em>
            </summary>
            <ul>
              <li>مناسبة للشقق والتنظيف المتكرر.</li>
              <li>أسهل في التخزين والتنقل.</li>
              <li>خيار عملي للبيت اليومي.</li>
            </ul>
            <a class="ss-compare-action" href="/OEDewr">اختيار 15 لتر</a>
          </details>

          <details class="ss-compare-card ss-compare-card-primary" open>
            <summary>
              <span>30 لتر</span>
              <b>سعة وقوة أكبر</b>
              <em>للمساحات الكبيرة</em>
            </summary>
            <ul>
              <li>مناسبة للبيوت الكبيرة والاستراحات.</li>
              <li>خزان أكبر لجلسات تنظيف أطول.</li>
              <li>أفضل للتنظيف العميق والاستخدام المكثف.</li>
            </ul>
            <a class="ss-compare-action" href="/VqRjKrQ">اختيار 30 لتر</a>
          </details>
        </div>

        <div class="ss-compare-note">
          <b>اختيار سريع:</b>
          <span>15 لتر للاستخدام اليومي، و30 لتر للمساحات الكبيرة والتنظيف العميق.</span>
        </div>
      </section>

      <section class="ss-hair-section" aria-label="Hair Devices">
        <div class="ss-section-head">
          <div>
            <h2>أجهزة الشعر المختارة</h2>
            <p>منتجات تصفيف وعناية مختارة ضمن أقسام سيلفر ستار، بحضور بصري هادئ لا يطغى على منتجاتنا الأساسية.</p>
          </div>
          <a class="ss-mini-link" href="/search?q=أجهزة%20الشعر">تسوقي أجهزة الشعر</a>
        </div>

        <div class="ss-melissa-media" aria-label="Melissa Hair Devices Images">
          <img src="https://cdn.jsdelivr.net/gh/Sama997/silverstar-salla-theme@main/assets/generated/melissa-thumb-section.jpg?v=20260608-05" alt="أجهزة شعر مختارة من ميليسا" loading="lazy">
          <img src="https://cdn.jsdelivr.net/gh/Sama997/silverstar-salla-theme@main/assets/generated/melissa-thumb-products-clean.jpg?v=20260608-05" alt="فرشاة هواء ساخن وجهاز تمويج للشعر" loading="lazy">
        </div>

        <div class="ss-hair-grid">
          <a class="ss-hair-card" href="/search?q=استشوار%20شعر">
            <div class="ss-hair-content">
              <small>فرشاة هواء ساخن</small>
              <h3>استشوار وفرشاة ميليسا</h3>
              <p>تصفيف سريع بلمسة ناعمة ولمعان يليق بالاستخدام اليومي.</p>
              <span>تسوق الآن</span>
            </div>
          </a>

          <a class="ss-hair-card" href="/search?q=ويفي%20شعر">
            <div class="ss-hair-content">
              <small>جهاز تمويج الشعر</small>
              <h3>تمويج احترافي بلمسة واحدة</h3>
              <p>مظهر ثابت وتموجات أنيقة بدون تعقيد.</p>
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

  function findSectionByText(selector, text) {
    var list = document.querySelectorAll(selector);
    for (var i = 0; i < list.length; i++) {
      if ((list[i].innerText || "").indexOf(text) !== -1) return list[i];
    }
    return null;
  }

  function arrangeSilverStarHomeOrder() {
    var host = document.querySelector(".ss-home-injected");
    if (!host) return false;

    var slider = document.querySelector(".advanced-slider--1");
    var hero = host.querySelector(".ss-hero-wrap") || document.querySelector(".ss-hero-wrap");
    var vacuum15 =
      document.querySelector(".special-product--2") ||
      findSectionByText("main > section, section", "15 لتر");
    var vacuum30 =
      document.querySelector(".s-block--advanced-content") ||
      findSectionByText("main > section, section", "30 لتر");
    var melissa = document.querySelector(".ss-hair-section");
    var compare = document.querySelector(".ss-compare-section");
    var brand = document.querySelector(".ss-brand-strip");

    if (!slider || !vacuum15 || !vacuum30 || !compare || !melissa) return false;

    if (hero) hero.remove();

    if (slider.parentElement !== host || slider !== host.firstElementChild) {
      host.insertBefore(slider, host.firstElementChild);
    }

    slider.insertAdjacentElement("afterend", vacuum15);
    vacuum15.insertAdjacentElement("afterend", vacuum30);
    vacuum30.insertAdjacentElement("afterend", compare);
    compare.insertAdjacentElement("afterend", melissa);
    if (brand) melissa.insertAdjacentElement("afterend", brand);

    host.setAttribute("data-ss-home-order", "slider-15l-30l-compare-melissa");
    return true;
  }

  function scheduleSilverStarHomeOrder() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (arrangeSilverStarHomeOrder() || tries >= 60) clearInterval(timer);
    }, 250);

    arrangeSilverStarHomeOrder();
  }

  function init() {
    markFirstProductSection();
    injectAfterHeader();
    scheduleSilverStarHomeOrder();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();