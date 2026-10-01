/* BillTrack: installable app support (service worker + "Install app" button). */
(function () {
  var isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "[::1]";
  if ("serviceWorker" in navigator && (location.protocol === "https:" || isLocal)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  var deferredPrompt = null;
  function isStandalone() {
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  }
  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function getButton() {
    var btn = document.getElementById("installAppBtn");
    if (btn) return btn;
    var sidebar = document.getElementById("sidebar");
    if (!sidebar) return null;
    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "installAppBtn";
    btn.className = "nav-item-link install-trigger d-none";
    btn.innerHTML = '<i class="ti ti-download"></i> Install app';
    var footer = sidebar.querySelector(".sidebar-footer");
    sidebar.insertBefore(btn, footer || null);
    btn.addEventListener("click", function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () {
          deferredPrompt = null;
          btn.classList.add("d-none");
        });
      } else if (isIos() && typeof showToast === "function") {
        showToast("Tap the Share button, then \"Add to Home Screen\".");
      }
    });
    return btn;
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    var btn = getButton();
    if (btn && !isStandalone()) btn.classList.remove("d-none");
  });
  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    var btn = document.getElementById("installAppBtn");
    if (btn) btn.classList.add("d-none");
  });

  document.addEventListener("DOMContentLoaded", function () {
    var btn = getButton();
    if (btn && isIos() && !isStandalone()) btn.classList.remove("d-none");
  });
})();
