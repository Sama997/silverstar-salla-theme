/* تفاعلات واجهة سيلفر ستار: خفيفة ومحصورة حتى لا تتعارض مع مكونات سلة. */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  function ready(callback) {
    if (doc.readyState === "loading") {
      doc.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  }

  function qs(selector, scope) {
    return (scope || doc).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || doc).querySelectorAll(selector));
  }

  function initRtl() {
    root.setAttribute("dir", "rtl");
    root.setAttribute("lang", root.getAttribute("lang") || "ar");
    doc.body.classList.add("ss-twilight-ready");
  }

  function initMobileMenu() {
    var button = qs("[data-ss-menu-toggle]");
    var nav = qs("[data-ss-nav]");
    if (!button || !nav) return;

    button.addEventListener("click", function () {
      var expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      nav.classList.toggle("is-open", !expanded);
    });

    qsa("a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        button.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  function initReveal() {
    var items = qsa(".ss-reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initProductGallery() {
    var main = qs(".ss-pdp__main-image img");
    var thumbs = qsa("[data-ss-thumb]");
    if (!main || !thumbs.length) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        var next = thumb.getAttribute("data-ss-thumb");
        if (!next) return;
        main.src = next;
        thumbs.forEach(function (item) {
          item.removeAttribute("aria-current");
        });
        thumb.setAttribute("aria-current", "true");
      });
    });
  }

  function findPrimaryAddAction() {
    return qs(".ss-pdp-primary-action") ||
      qs("salla-add-product") ||
      qs("salla-add-product-button") ||
      qs("button[type='submit']") ||
      qs(".add-to-cart") ||
      qs(".add_to_cart");
  }

  function triggerPrimaryAddAction() {
    var action = findPrimaryAddAction();
    if (!action) return;
    action.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    if (typeof action.click === "function") action.click();
  }

  function initStickyBuy() {
    var page = qs("[data-ss-product-page]");
    var bar = qs("[data-ss-sticky-buy]");
    var trigger = qs("[data-ss-sticky-add]", bar || doc);
    if (!page || !bar || !trigger) return;

    trigger.addEventListener("click", triggerPrimaryAddAction);

    function sync() {
      var summary = qs(".ss-pdp__summary");
      if (!summary) {
        bar.hidden = false;
        return;
      }
      var rect = summary.getBoundingClientRect();
      bar.hidden = rect.bottom > window.innerHeight * 0.82;
    }

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
  }

  function initSmoothAnchors() {
    qsa('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = qs(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    });
  }

  ready(function () {
    initRtl();
    initMobileMenu();
    initReveal();
    initProductGallery();
    initStickyBuy();
    initSmoothAnchors();
  });
})();
