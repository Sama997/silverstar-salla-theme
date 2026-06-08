(function () {
  var bannerSrc = "data:image/jpeg;base64,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";

  function installMelissaDesign() {
    var section = document.querySelector(".ss-hair-section");
    if (!section || section.querySelector(".ss-melissa-design-banner")) return;

    var media = section.querySelector(".ss-melissa-media");
    if (!media) return;

    var banner = document.createElement("figure");
    banner.className = "ss-melissa-design-banner";
    banner.innerHTML = '<img src="' + bannerSrc + '" alt="أجهزة الشعر من ميليسا" loading="lazy" decoding="async">';
    media.parentNode.insertBefore(banner, media);
  }

  function installStyles() {
    if (document.querySelector('style[data-ss-melissa-design="true"]')) return;
    var style = document.createElement("style");
    style.setAttribute("data-ss-melissa-design", "true");
    style.textContent = [
      '.ss-hair-section .ss-melissa-design-banner{margin:0 auto 12px;width:min(100%,680px);overflow:hidden;border-radius:8px;border:1px solid rgba(200,163,74,.26);background:#111827;box-shadow:0 12px 28px rgba(17,24,39,.10)}',
      '.ss-hair-section .ss-melissa-design-banner img{display:block;width:100%;aspect-ratio:16/9;height:auto;object-fit:cover}',
      '@media(max-width:520px){.ss-hair-section .ss-melissa-design-banner{margin-bottom:10px}.ss-hair-section .ss-melissa-design-banner img{aspect-ratio:16/9}}'
    ].join('');
    document.head.appendChild(style);
  }

  function boot() {
    installStyles();
    installMelissaDesign();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  setTimeout(boot, 800);
  setTimeout(boot, 1800);
})();
