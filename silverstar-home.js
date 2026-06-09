/* =========================================================
   Silver Star Premium Celia Runtime
   Aligns Celia theme with the Silver Star reference system.
   ========================================================= */

(function () {
  "use strict";


  function normalizePath() {
    return window.location.pathname.replace(/\/+$/, "");
  }

  function isHomePage() {
    var path = normalizePath();
    return path === "" || path === "/" || path === "/ar" || path === "/en";
  }

  function isCartPage() {
    return normalizePath().indexOf("/cart") === 0 || document.body.classList.contains("cart");
  }

  function isProductPage() {
    return document.body.classList.contains("product-single") || !!document.querySelector(".product-single.thumbnails");
  }

  function addBaseRuntimeClass() {
    document.body.classList.add("ss-runtime");
    document.documentElement.setAttribute("dir", "rtl");
  }

  function createSilverStarSections() {
    var wrapper = document.createElement("div");
    wrapper.className = "ss-home-injected";

    wrapper.innerHTML = `
      <section class="ss-hero-wrap" aria-label="Silver Star Main Banner">
        <div class="ss-hero">
          <div class="ss-hero-content">
            <div class="ss-eyebrow">تنظيف جاف ورطب وتجفيف سيراميك</div>

            <h1>
              سيلفر ستار
              <span>قوة تنظيف موثوقة كل يوم</span>
            </h1>

            <p>
              مكانس عالية التحمل مصممة للبيت السعودي، تجمع بين قوة الشفط، السعة العملية،
              وتجربة شراء واضحة من أول زيارة حتى قرار الشراء.
            </p>

            <div class="ss-actions">
              <a class="ss-btn ss-btn-primary" href="#ss-products-start">تسوق المكانس</a>
              <a class="ss-btn ss-btn-secondary" href="#ss-proof-section">شاهد التجربة</a>
            </div>

            <div class="ss-trust-row">
              <div class="ss-trust-card">
                <strong>1800W / 2000W</strong>
                <small>قوة شفط عملية للبيت والاستراحة</small>
              </div>
              <div class="ss-trust-card">
                <strong>15L / 30L</strong>
                <small>اختيار السعة حسب الاستخدام</small>
              </div>
              <div class="ss-trust-card">
                <strong>جاف ورطب</strong>
                <small>تعامل أفضل مع الغبار والانسكابات</small>
              </div>
              <div class="ss-trust-card">
                <strong>ضمان وخدمة</strong>
                <small>تجربة شراء أوضح بعد البيع</small>
              </div>
            </div>
          </div>

          <div class="ss-hero-visual" aria-hidden="true">
            <div class="ss-product-orbit">
              <div>
                <strong>Silver<br>Star</strong>
                <span>Wet & Dry Vacuum</span>
                <em>قرار تنظيف أذكى</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ss-brand-strip" aria-label="Silver Star Brand Value">
        <div class="ss-brand-card">
          <h2>لماذا سيلفر ستار؟</h2>
          <p>
            لأن العميل لا يبحث عن جهاز فقط، بل عن حل تنظيف متكامل. نعرض المنتج بمعلومات
            واضحة، قرار سريع بين السعات، وتجربة شراء تقلل التردد قبل الإضافة للسلة.
          </p>

          <div class="ss-feature-grid">
            <div class="ss-feature">
              <b>قوة هندسية</b>
              <small>رسالة بصرية تركز على الشفط والجاف والرطب.</small>
            </div>
            <div class="ss-feature">
              <b>قرار أسرع</b>
              <small>مقارنة واضحة بين 15 لتر و30 لتر.</small>
            </div>
            <div class="ss-feature">
              <b>ثقة أعلى</b>
              <small>ضمان، دفع آمن، وشحن داخل المملكة.</small>
            </div>
          </div>
        </div>

        <div class="ss-category-card">
          <h2>رحلة شراء مرتبة</h2>
          <p>
            الواجهة الجديدة تضع المنتج الأساسي أولاً، ثم الدليل، ثم الثقة، ثم المنتجات
            المكملة التي يضيفها التاجر من مكونات سلة الرسمية.
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
    if (document.querySelector(".ss-home-injected")) return true;

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

    var main = document.querySelector("main") || document.querySelector("#app") || document.body;
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

  function moveAfter(anchor, node) {
    if (!anchor || !node || !anchor.parentElement) return anchor;
    if (anchor.nextElementSibling !== node) anchor.insertAdjacentElement("afterend", node);
    return node;
  }

  function markLowPriorityHomeBlocks() {
    var selectors = [
      ".animated-text--0",
      ".dynamic-banner--4",
      ".products-lookbook--5",
      "#featured-products-style2-6",
      ".s-block--stats",
      ".s-block--blog"
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (node) {
        node.classList.add("ss-low-priority");
      });
    });
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
    var compare = document.querySelector(".ss-compare-section");
    var brand = document.querySelector(".ss-brand-strip");
    var proof = document.querySelector(".s-block--videos-gallery");
    var testimonials = document.querySelector(".s-block--testimonials");
    var accessories = document.querySelector(".s-block--circle-links");
    var imageGrid = document.querySelector(".s-block--images-grid");
    var spareParts = document.querySelector(".s-block--best-offers");
    var cleaners = document.querySelector(".s-block--custom-products");
    var faq = document.querySelector(".s-block--faq");

    if (!slider || !vacuum15 || !vacuum30 || !compare) return false;

    if (hero) hero.remove();
    markLowPriorityHomeBlocks();

    if (slider.parentElement !== host || slider !== host.firstElementChild) {
      host.insertBefore(slider, host.firstElementChild);
    }

    var cursor = slider;
    cursor = moveAfter(cursor, vacuum15);
    cursor = moveAfter(cursor, vacuum30);
    cursor = moveAfter(cursor, compare);
    cursor = moveAfter(cursor, brand);
    if (proof) {
      proof.id = "ss-proof-section";
      cursor = moveAfter(cursor, proof);
    }
    cursor = moveAfter(cursor, testimonials);
    cursor = moveAfter(cursor, accessories);
    cursor = moveAfter(cursor, imageGrid);
    cursor = moveAfter(cursor, spareParts);
    cursor = moveAfter(cursor, cleaners);
    cursor = moveAfter(cursor, faq);

    host.setAttribute("data-ss-home-order", "premium-celia-runtime");
    return true;
  }

  function scheduleHomeEnhancements() {
    document.body.classList.add("ss-enhanced-home");
    markFirstProductSection();
    injectAfterHeader();

    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (arrangeSilverStarHomeOrder() || tries >= 70) clearInterval(timer);
    }, 250);

    arrangeSilverStarHomeOrder();
  }

  function directChildrenByTag(parent, tagName) {
    if (!parent) return null;
    tagName = tagName.toUpperCase();
    for (var i = 0; i < parent.children.length; i++) {
      if (parent.children[i].tagName === tagName) return parent.children[i];
    }
    return null;
  }

  function enhanceProductPage() {
    var single = document.querySelector(".product-single.thumbnails");
    if (!single) return false;

    document.body.classList.add("ss-enhanced-product");

    if (!single.querySelector(".ss-product-decision-panel")) {
      var pageText = (document.body.innerText || "").slice(0, 1800);
      var capacity = pageText.indexOf("30 لتر") !== -1 ? "30 لتر" : "15 لتر";
      var power = pageText.indexOf("2000 واط") !== -1 ? "2000 واط" : "1800 واط";
      var panel = document.createElement("div");
      panel.className = "ss-product-decision-panel";
      panel.innerHTML = `
        <span><b>${power}</b>قوة شفط</span>
        <span><b>${capacity}</b>سعة عملية</span>
        <span><b>جاف ورطب</b>استخدام متعدد</span>
        <span><b>ضمان</b>خدمة بعد البيع</span>
      `;

      var article = directChildrenByTag(single, "article");
      if (article) {
        single.insertBefore(panel, article);
      } else {
        single.appendChild(panel);
      }
    }

    var description = directChildrenByTag(single, "article");
    if (description && !description.dataset.ssDescriptionEnhanced) {
      description.dataset.ssDescriptionEnhanced = "true";
      var toggle = document.createElement("div");
      toggle.className = "ss-product-desc-toggle";
      toggle.innerHTML = '<button type="button">عرض كامل التفاصيل</button>';
      description.insertAdjacentElement("afterend", toggle);
      toggle.querySelector("button").addEventListener("click", function () {
        var expanded = description.classList.toggle("ss-desc-expanded");
        toggle.querySelector("button").textContent = expanded ? "إخفاء التفاصيل الطويلة" : "عرض كامل التفاصيل";
      });
    }

    return true;
  }

  function scheduleProductEnhancements() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (enhanceProductPage() || tries >= 60) clearInterval(timer);
    }, 250);

    enhanceProductPage();
  }

  function enhanceCartPage() {
    document.body.classList.add("ss-enhanced-cart");

    var bodyText = document.body.innerText || "";
    if (bodyText.indexOf("السلة فارغة") === -1 || document.querySelector(".ss-cart-recovery")) return true;

    var panel = document.createElement("section");
    panel.className = "ss-cart-recovery";
    panel.innerHTML = `
      <h2>السلة فارغة، اختر المكنسة المناسبة</h2>
      <p>ابدأ بمنتجات سيلفر ستار الأساسية: 15 لتر للاستخدام اليومي، و30 لتر للمساحات الكبيرة والتنظيف العميق.</p>
      <div class="ss-cart-recovery__actions">
        <a href="/OEDewr">اختيار مكنسة 15 لتر</a>
        <a href="/VqRjKrQ">اختيار مكنسة 30 لتر</a>
      </div>
    `;

    var container = document.querySelector("main .container") || document.querySelector(".container") || document.body;
    container.insertAdjacentElement("afterend", panel);
    return true;
  }

  function scheduleCartEnhancements() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (enhanceCartPage() || tries >= 40) clearInterval(timer);
    }, 250);

    enhanceCartPage();
  }

  function init() {
    addBaseRuntimeClass();

    if (isHomePage()) scheduleHomeEnhancements();
    if (isProductPage()) scheduleProductEnhancements();
    if (isCartPage()) scheduleCartEnhancements();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
