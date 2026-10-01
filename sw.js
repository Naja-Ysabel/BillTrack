/* BillTrack service worker: lets the app install and keep working offline. */
var VERSION = "billtrack-v3";
var APP_SHELL = [
  "./", "index.html", "bills.html", "payments.html", "forecasting.html", "reminders.html", "budget.html", "profile.html",
  "login.html", "signup.html",
  "style.css", "utils.js", "auth.js", "script.js", "pwa.js",
  "manifest.webmanifest",
  "assets/billtrack-logo.svg",
  "assets/icons/icon-192.png", "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png", "assets/icons/apple-touch-icon.png"
];
var CDN_WARMUP = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.4/chart.umd.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/2.44.0/iconfont/tabler-icons.min.css",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700;750&display=swap"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      var jobs = APP_SHELL.map(function (url) { return cache.add(url).catch(function () {}); });
      CDN_WARMUP.forEach(function (url) {
        jobs.push(fetch(url, { mode: "no-cors" }).then(function (res) { return cache.put(url, res); }).catch(function () {}));
      });
      return Promise.all(jobs);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (url.origin === self.location.origin) {
    // Your own files: try the network first (so edits show up), fall back to the saved copy offline.
    event.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(VERSION).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req, { ignoreSearch: true }).then(function (hit) {
          return hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error());
        });
      })
    );
    return;
  }

  // Libraries and fonts from CDNs: saved copy first, fill the cache on first use.
  event.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (cache) { cache.put(req, copy); });
        return res;
      });
    })
  );
});
