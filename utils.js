


function safeParse(json, fallback) {
  try {
    var v = JSON.parse(json);
    return (v === null || v === undefined) ? fallback : v;
  } catch (e) {
    return fallback;
  }
}



function genId(prefix) {
  return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function nowIso() { return new Date().toISOString(); }
function toLocalYmd(d) {
  var m = d.getMonth() + 1, day = d.getDate();
  return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
}
function todayStr() { return toLocalYmd(new Date()); }



function formatCurrency(n) {
  if (n === null || n === undefined || n === "") return "—";
  n = Number(n);
  if (!isFinite(n)) return "—";
  return "\u20B1" + n.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
// Kept for existing callers; all peso values now share the same two-decimal format.
function formatCurrency2(n) { return formatCurrency(n); }

// Plain "1234.50" string for <input type="number"> (no symbol/commas allowed there). Display only; never stored.
function toMoneyInputValue(n) {
  if (n === null || n === undefined || n === "") return "";
  n = Number(n);
  return isFinite(n) ? n.toFixed(2) : "";
}
// Any input marked data-money is shown with two decimals once the user leaves it (e.g. 75.5 -> 75.50).
document.addEventListener("focusout", function (e) {
  var el = e.target;
  if (!el || !el.matches || !el.matches("input[data-money]") || el.readOnly) return;
  if (el.value === "") return;
  var n = parseFloat(el.value);
  if (isFinite(n)) el.value = toMoneyInputValue(n);
});

function formatDateShort(dateStr) {
  if (!dateStr) return "—";
  var d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
function formatDateLong(dateStr) {
  if (!dateStr) return "—";
  var d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}
function formatDateFull(dateStr) {
  if (!dateStr) return "—";
  var d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
}
// Date a bill was added (YYYY-MM-DD). Bills saved before this field existed fall back to their createdAt timestamp.
function billDateAdded(bill) {
  if (bill && bill.dateAdded) return bill.dateAdded;
  var d = bill && bill.createdAt ? new Date(bill.createdAt) : null;
  return (d && !isNaN(d.getTime())) ? toLocalYmd(d) : "";
}
function escapeHtml(str) {
  return String(str === undefined || str === null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}



function ensureToastHost() {
  var host = document.getElementById("toastHost");
  if (!host) {
    host = document.createElement("div");
    host.id = "toastHost";
    host.className = "toast-host";
    host.setAttribute("aria-live", "polite");
    document.body.appendChild(host);
  }
  return host;
}

function showToast(message, type) {
  type = type || "success";
  var host = ensureToastHost();
  var el = document.createElement("div");
  el.className = "app-toast app-toast-" + type;
  var icon = type === "error" ? "ti-circle-x" : "ti-circle-check";
  el.innerHTML = '<i class="ti ' + icon + '"></i><span>' + escapeHtml(message) + "</span>";
  host.appendChild(el);
  requestAnimationFrame(function () { el.classList.add("show"); });
  setTimeout(function () {
    el.classList.remove("show");
    setTimeout(function () { el.remove(); }, 250);
  }, 3400);
}



function ensureConfirmModal() {
  var modalEl = document.getElementById("globalConfirmModal");
  if (modalEl) return modalEl;

  modalEl = document.createElement("div");
  modalEl.className = "modal fade";
  modalEl.id = "globalConfirmModal";
  modalEl.tabIndex = -1;
  modalEl.setAttribute("aria-hidden", "true");
  modalEl.innerHTML =
    '<div class="modal-dialog modal-dialog-centered">' +
      '<div class="modal-content" style="border-radius:12px;border:none;">' +
        '<div class="modal-header" style="border-bottom:1px solid var(--border);">' +
          '<h5 class="modal-title" id="globalConfirmTitle" style="font-size:15px;font-weight:600;"></h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
        "</div>" +
        '<div class="modal-body" id="globalConfirmBody" style="font-size:14px;color:var(--text-muted);"></div>' +
        '<div class="modal-footer" style="border-top:1px solid var(--border);">' +
          '<button type="button" class="btn btn-outline-navy" id="globalConfirmCancel" data-bs-dismiss="modal">Cancel</button>' +
          '<button type="button" class="btn" id="globalConfirmOk"></button>' +
        "</div>" +
      "</div>" +
    "</div>";
  document.body.appendChild(modalEl);
  return modalEl;
}


function confirmDialog(opts) {
  opts = opts || {};
  var modalEl = ensureConfirmModal();
  document.getElementById("globalConfirmTitle").textContent = opts.title || "Are you sure?";
  document.getElementById("globalConfirmBody").textContent = opts.message || "This action cannot be undone.";
  var okBtn = document.getElementById("globalConfirmOk");
  okBtn.textContent = opts.confirmText || "Confirm";
  okBtn.className = "btn " + (opts.danger === false ? "btn-navy" : "btn-danger");
  var freshOk = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(freshOk, okBtn);

  var modal = window.bootstrap ? window.bootstrap.Modal.getOrCreateInstance(modalEl) : null;
  freshOk.addEventListener("click", function () {
    if (modal) modal.hide();
    if (typeof opts.onConfirm === "function") opts.onConfirm();
  });

  if (modal) {
    modal.show();
  } else {
    if (window.confirm(opts.message || "Are you sure?") && typeof opts.onConfirm === "function") opts.onConfirm();
  }
}



function initPasswordToggle(buttonEl, inputEl) {
  if (!buttonEl || !inputEl) return;
  buttonEl.addEventListener("click", function () {
    var showing = inputEl.type === "text";
    inputEl.type = showing ? "password" : "text";
    buttonEl.innerHTML = showing ? '<i class="ti ti-eye"></i>' : '<i class="ti ti-eye-off"></i>';
    buttonEl.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  });
}



function passwordStrength(pw) {
  pw = pw || "";
  var score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (pw.length === 0) return { score: 0, label: "", cls: "" };
  if (score <= 1) return { score: score, label: "Weak", cls: "strength-weak" };
  if (score <= 3) return { score: score, label: "Medium", cls: "strength-medium" };
  return { score: score, label: "Strong", cls: "strength-strong" };
}

function initPasswordStrengthMeter(inputEl, meterEl, labelEl) {
  if (!inputEl || !meterEl) return;
  function render() {
    var s = passwordStrength(inputEl.value);
    meterEl.className = "strength-meter " + s.cls;
    meterEl.style.setProperty("--strength-pct", Math.min(100, (s.score / 5) * 100) + "%");
    if (labelEl) labelEl.textContent = inputEl.value ? s.label : "";
  }
  inputEl.addEventListener("input", render);
  render();
}



/* Unsaved-form drafts. Kept in sessionStorage so they survive navigating between pages
   (every sidebar link is a full page load) but not a closed tab. Namespaced per user.
   Passwords are never stored. */
function createFormDraft(name, fieldIds, opts) {
  opts = opts || {};
  var uid = (typeof getCurrentUserId === "function") ? getCurrentUserId() : null;
  var key = "billtrack_draft_" + name + "::" + (uid || "anon");

  function read() {
    try { return safeParse(sessionStorage.getItem(key), null); } catch (e) { return null; }
  }
  function els() {
    return fieldIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  }
  function collect() {
    var values = {};
    els().forEach(function (el) { values[el.id] = (el.type === "checkbox") ? el.checked : el.value; });
    return { values: values, meta: opts.getMeta ? opts.getMeta() : {} };
  }

  var api = {
    has: function () { return !!read(); },
    save: function () {
      var d = collect();
      try {
        if (opts.isPristine && opts.isPristine(d)) sessionStorage.removeItem(key);
        else sessionStorage.setItem(key, JSON.stringify(d));
      } catch (e) {}
    },
    clear: function () { try { sessionStorage.removeItem(key); } catch (e) {} },
    // Applies the saved values to the fields; returns the saved draft (or null) so callers can restore extra state.
    restore: function () {
      var d = read();
      if (!d) return null;
      els().forEach(function (el) {
        if (!(el.id in d.values)) return;
        if (el.type === "checkbox") el.checked = !!d.values[el.id];
        else el.value = d.values[el.id];
        if (el.matches("input[data-money]") && el.value !== "") el.value = toMoneyInputValue(el.value) || el.value;
      });
      return d;
    },
    // Start listening for edits (call after restore so restoring doesn't rewrite the draft).
    watch: function () {
      els().forEach(function (el) {
        el.addEventListener("input", api.save);
        el.addEventListener("change", api.save);
      });
    }
  };
  return api;
}
