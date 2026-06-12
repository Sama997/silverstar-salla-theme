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


  function injectSeamlessHomeStyle() {
    if (document.getElementById("ss-seamless-home-style")) return;

    var style = document.createElement("style");
    style.id = "ss-seamless-home-style";
    style.textContent = `
      body.ss-enhanced-home {
        --ss-flow-bg: #f4f8fb;
        --ss-flow-surface: rgba(255, 255, 255, 0.72);
        --ss-flow-line: rgba(0, 82, 149, 0.08);
        background:
          radial-gradient(circle at 78% 4%, rgba(0, 82, 149, 0.13), transparent 26%),
          radial-gradient(circle at 8% 30%, rgba(0, 77, 115, 0.08), transparent 28%),
          linear-gradient(180deg, #ffffff 0%, #f4f8fb 34%, #edf5f8 64%, #ffffff 100%) !important;
      }

      body.ss-enhanced-home main,
      body.ss-enhanced-home .main,
      body.ss-enhanced-home #app {
        background: transparent !important;
      }

      body.ss-enhanced-home .ss-home-injected {
        position: relative;
        isolation: isolate;
        width: 100%;
        margin: 0 auto;
        padding: 0 0 40px;
        background:
          linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(232, 243, 248, 0.58) 34%, rgba(244, 248, 251, 0.75) 70%, rgba(255,255,255,0) 100%);
      }

      body.ss-enhanced-home .ss-home-injected::before {
        content: "";
        position: absolute;
        inset: 120px 0 0;
        z-index: -1;
        pointer-events: none;
        background:
          radial-gradient(ellipse at 78% 18%, rgba(0, 82, 149, 0.08), transparent 35%),
          radial-gradient(ellipse at 18% 54%, rgba(0, 77, 115, 0.06), transparent 34%),
          linear-gradient(155deg, transparent 0 18%, rgba(255,255,255,0.64) 18% 19%, transparent 20% 100%);
      }

      body.ss-enhanced-home .advanced-slider--1,
      body.ss-enhanced-home .special-product--2,
      body.ss-enhanced-home .s-block--advanced-content-normal,
      body.ss-enhanced-home .s-block--videos-gallery,
      body.ss-enhanced-home .s-block--testimonials,
      body.ss-enhanced-home .s-block--circle-links,
      body.ss-enhanced-home .s-block--images-grid,
      body.ss-enhanced-home .s-block--best-offers,
      body.ss-enhanced-home .s-block--custom-products,
      body.ss-enhanced-home .s-block--faq,
      body.ss-enhanced-home .ss-brand-strip,
      body.ss-enhanced-home .ss-compare-section,
      body.ss-enhanced-home .ss-hair-section {
        width: min(var(--ss-container), calc(100% - 28px)) !important;
        margin: 0 auto !important;
      }

      body.ss-enhanced-home .ss-home-injected > * + * {
        margin-top: clamp(12px, 2.2vw, 24px) !important;
      }

      body.ss-enhanced-home .advanced-slider--1 {
        border: 0 !important;
        border-radius: 24px !important;
        background: linear-gradient(180deg, #f7fbfd, #edf5f8) !important;
        box-shadow: 0 18px 42px rgba(0, 77, 115, 0.10) !important;
      }

      body.ss-enhanced-home .special-product--2,
      body.ss-enhanced-home .s-block--advanced-content-normal,
      body.ss-enhanced-home .s-block--testimonials,
      body.ss-enhanced-home .s-block--circle-links,
      body.ss-enhanced-home .s-block--images-grid,
      body.ss-enhanced-home .s-block--best-offers,
      body.ss-enhanced-home .s-block--custom-products,
      body.ss-enhanced-home .s-block--faq,
      body.ss-enhanced-home .ss-hair-section {
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        overflow: visible !important;
      }

      body.ss-enhanced-home .ss-brand-card,
      body.ss-enhanced-home .ss-category-card,
      body.ss-enhanced-home .ss-feature,
      body.ss-enhanced-home .ss-compare-card,
      body.ss-enhanced-home .s-product-card-entry,
      body.ss-enhanced-home .product-entry,
      body.ss-enhanced-home .product-card,
      body.ss-enhanced-home .s-product-card-vertical {
        border-color: var(--ss-flow-line) !important;
        background: var(--ss-flow-surface) !important;
        box-shadow: 0 10px 30px rgba(0, 77, 115, 0.055) !important;
        backdrop-filter: blur(10px);
      }

      body.ss-enhanced-home .ss-brand-card,
      body.ss-enhanced-home .ss-category-card,
      body.ss-enhanced-home .ss-feature,
      body.ss-enhanced-home .ss-compare-card {
        border-radius: 18px !important;
      }

      body.ss-enhanced-home .ss-brand-strip {
        gap: 12px !important;
      }

      body.ss-enhanced-home .ss-compare-section {
        border: 0 !important;
        border-radius: 24px !important;
        background:
          radial-gradient(circle at 82% 18%, rgba(255,255,255,0.16), transparent 26%),
          linear-gradient(135deg, rgba(0, 82, 149, 0.96), rgba(0, 77, 115, 0.92)) !important;
        box-shadow: 0 18px 44px rgba(0, 77, 115, 0.13) !important;
      }

      body.ss-enhanced-home .s-block--videos-gallery {
        padding: 24px 0 !important;
        border-radius: 24px !important;
        background:
          linear-gradient(135deg, rgba(23, 33, 43, 0.96), rgba(0, 77, 115, 0.90)) !important;
        box-shadow: 0 18px 44px rgba(0, 77, 115, 0.12) !important;
      }

      body.ss-enhanced-home .ss-section-head,
      body.ss-enhanced-home .ss-compare-head,
      body.ss-enhanced-home .s-block__title,
      body.ss-enhanced-home .s-products-slider-section .s-slider-block__title {
        margin-bottom: 12px !important;
      }

      body.ss-enhanced-home .s-product-card-entry,
      body.ss-enhanced-home .product-entry,
      body.ss-enhanced-home .product-card,
      body.ss-enhanced-home .s-product-card-vertical {
        border-radius: 18px !important;
      }

      body.ss-enhanced-home .s-product-card-image,
      body.ss-enhanced-home .product-entry__image,
      body.ss-enhanced-home .product-card__image {
        background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(239,247,252,0.78)) !important;
      }

      body.ss-enhanced-home .s-button-primary,
      body.ss-enhanced-home .ss-compare-action,
      body.ss-enhanced-home button[type="submit"],
      body.ss-enhanced-home .btn--primary {
        background: linear-gradient(135deg, var(--ss-blue), var(--ss-teal)) !important;
        box-shadow: 0 10px 24px rgba(0, 77, 115, 0.15) !important;
      }

      @media (max-width: 900px) {
        body.ss-enhanced-home .ss-home-injected {
          padding-bottom: 28px;
        }

        body.ss-enhanced-home .advanced-slider--1,
        body.ss-enhanced-home .special-product--2,
        body.ss-enhanced-home .s-block--advanced-content-normal,
        body.ss-enhanced-home .s-block--videos-gallery,
        body.ss-enhanced-home .s-block--testimonials,
        body.ss-enhanced-home .s-block--circle-links,
        body.ss-enhanced-home .s-block--images-grid,
        body.ss-enhanced-home .s-block--best-offers,
        body.ss-enhanced-home .s-block--custom-products,
        body.ss-enhanced-home .s-block--faq,
        body.ss-enhanced-home .ss-brand-strip,
        body.ss-enhanced-home .ss-compare-section,
        body.ss-enhanced-home .ss-hair-section {
          width: min(100% - 18px, var(--ss-container)) !important;
        }

        body.ss-enhanced-home .ss-home-injected > * + * {
          margin-top: 18px !important;
        }

        body.ss-enhanced-home .ss-brand-card,
        body.ss-enhanced-home .ss-category-card,
        body.ss-enhanced-home .ss-compare-section {
          border-radius: 22px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function createSilverStarSections() {
    var wrapper = document.createElement("div");
    wrapper.className = "ss-home-injected";

    wrapper.innerHTML = `
      <section class="ss-brand-strip" aria-label="Silver Star Brand Value">
        <div class="ss-brand-card">
          <h2>مكانس سيلفر ستار</h2>
          <p>
            خيار عملي لتنظيف البيت، الاستراحة، والمكاتب الصغيرة. اختر السعة المناسبة
            حسب استخدامك اليومي وطبيعة المكان.
          </p>

          <div class="ss-feature-grid">
            <div class="ss-feature">
              <b>قوة شفط عملية</b>
              <small>مناسبة للغبار والتنظيف المتكرر.</small>
            </div>
            <div class="ss-feature">
              <b>سعات متعددة</b>
              <small>اختر بين 15 لتر و30 لتر حسب احتياجك.</small>
            </div>
            <div class="ss-feature">
              <b>جاف ورطب</b>
              <small>يتعامل مع الغبار وبعض الانسكابات اليومية.</small>
            </div>
          </div>
        </div>

        <div class="ss-category-card">
          <h2>اختيار المكنسة المناسبة</h2>
          <p>
            إذا كان الاستخدام خفيفاً ومتكرراً فمقاس 15 لتر مناسب. للمساحات الأكبر
            أو جلسات التنظيف الأطول، اختر 30 لتر.
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
            <p>قسم إضافي صغير داخل تجربة سيلفر ستار، بحضور بصري هادئ لا يطغى على المكانس الأساسية.</p>
          </div>
          <a class="ss-mini-link" href="/search?q=أجهزة%20الشعر">تسوقي أجهزة الشعر</a>
        </div>

        <div class="ss-melissa-media" aria-label="Melissa Hair Devices Images">
          <img src="https://cdn.salla.sa/NWDqG/products/UQUFg5lJgZwv18vvvBtfjFhO5Lf8yvY9Y7j8gNOE.jpg" alt="جهاز تمويج الشعر الذاتي من ميليسا" loading="lazy">
          <img src="https://cdn.salla.sa/NWDqG/products/7zxr0KC0zjqI1i8fXyttHheWil0fFC3bjYvHcWbq.png" alt="فرشاة هواء ساخن من ميليسا" loading="lazy">
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

    var anchor =
      document.querySelector(".advanced-slider--1") ||
      document.querySelector(".special-product--2") ||
      document.querySelector(".s-block--advanced-content") ||
      findSectionByText("main > section, section", "15 لتر") ||
      findSectionByText("main > section, section", "30 لتر");

    if (anchor && anchor.parentNode) {
      anchor.insertAdjacentElement("afterend", sections);
      return true;
    }

    if (header && header.parentNode) {
      var mainAfterHeader = document.querySelector("main") || document.querySelector("#app");
      if (mainAfterHeader && mainAfterHeader.lastElementChild) {
        mainAfterHeader.appendChild(sections);
      } else {
        header.insertAdjacentElement("afterend", sections);
      }
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
      ".advanced-slider--1",
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
    var melissa = document.querySelector(".ss-hair-section");
    var faq = document.querySelector(".s-block--faq");

    if (!slider || !vacuum15 || !vacuum30 || !compare || !melissa) return false;

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
    cursor = moveAfter(cursor, melissa);
    cursor = moveAfter(cursor, faq);

    host.setAttribute("data-ss-home-order", "premium-celia-runtime");
    return true;
  }

  function removeExtraNativeHairImage() {
    var image = document.querySelector('img[src*="352f74dd-2c46-4788-a982-844be3b1b06d"]');
    if (!image) return false;

    var card = image.closest(".col-span-2") || image.closest("a") || image.parentElement;
    if (!card || !card.parentElement) return false;

    card.remove();
    return true;
  }

  function scheduleHomeEnhancements() {
    document.body.classList.add("ss-enhanced-home");
    injectSeamlessHomeStyle();
    markFirstProductSection();
    markLowPriorityHomeBlocks();
    injectAfterHeader();

    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      removeExtraNativeHairImage();
      if (arrangeSilverStarHomeOrder() || tries >= 70) clearInterval(timer);
    }, 250);

    arrangeSilverStarHomeOrder();
    removeExtraNativeHairImage();
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
