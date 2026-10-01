



var ICON_PATHS = {
  "menu-2": '<path d="M4 6h16M4 12h16M4 18h16"/>',
  "layout-dashboard": '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  "file-invoice": '<path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  "receipt-2": '<path d="M4 4h16v17l-3-2-3 2-3-2-3 2-4-2z"/><path d="M8 9h8M8 13h6"/>',
  "bell": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  "bell-ringing": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4M4 4l-1-1M20 4l1-1"/>',
  "chart-line": '<path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/>',
  "report-money": '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M7 10h2M15 10h2M8 15h8M12 9v6"/>',
  "user-circle": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6.5 19a6 6 0 0 1 11 0"/>',
  "calculator": '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18h8"/>',
  "logout": '<path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-5"/>',
  "bolt": '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  "droplet": '<path d="M12 3.5S6.5 9.2 6.5 14a5.5 5.5 0 0 0 11 0c0-4.8-5.5-10.5-5.5-10.5Z"/>',
  "world": '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  "home": '<path d="m3 10.5 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  "shield-lock": '<path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/>',
  "shield-check": '<path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  "device-mobile": '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  "file": '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h6"/>',
  "check": '<path d="m5 12 4 4L19 6"/>',
  "circle-check": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  "alert-triangle": '<path d="M12 3 2.5 20h19z"/><path d="M12 9v5M12 17h.01"/>',
  "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "calendar-event": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h2"/>',
  "eye": '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
  "pencil": '<path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10z"/><path d="m14 7 3 3"/>',
  "trash": '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
  "circle-x": '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
  "trending-down": '<path d="M3 7l6 6 4-4 7 8"/><path d="M14 17h6v-6"/>',
  "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  "checks": '<path d="m4 12 3 3 6-7M11 15l2 2 7-8"/>',
  "calendar": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  "lock": '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  "eye-off": '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a16 16 0 0 1-3.2 4.1M6.2 6.2C3.7 8.1 2.5 12 2.5 12s3.5 7 9.5 7c1 0 1.9-.2 2.8-.5"/>',
  "sparkles": '<path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4zM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7zM5 15l.6 1.9L7.5 18l-1.9.6L5 20.5l-.6-1.9L2.5 18l1.9-.6z"/>',
  "trending-up": '<path d="M3 17l6-6 4 4 7-8"/><path d="M14 7h6v6"/>',
  "wallet": '<path d="M4 6h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M2 8V6a2 2 0 0 1 2-2h12M16 13h5"/><circle cx="16" cy="13" r=".7" fill="currentColor" stroke="none"/>',
  "receipt": '<path d="M5 3h14v18l-3-2-4 2-4-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  "download": '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/>',
  "x": '<path d="M18 6 6 18M6 6l12 12"/>',
  "minus": '<path d="M5 12h14"/>'
};

function iconSvg(name, className, label) {
  var key = String(name || "").replace(/^ti-/, "");
  var paths = ICON_PATHS[key] || ICON_PATHS.file;
  var cls = className ? "ui-icon " + className : "ui-icon";
  var aria = label ? ' aria-label="' + escapeHtml(label) + '"' : ' aria-hidden="true"';
  return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false"' + aria + '>' + paths + '</svg>';
}

function hydrateStaticIcons(root) {
  var scope = root || document;
  scope.querySelectorAll("i.ti").forEach(function (el) {
    var name = Array.from(el.classList).find(function (c) { return c.indexOf("ti-") === 0; });
    if (!name) return;
    el.outerHTML = iconSvg(name);
  });
}

if (typeof MutationObserver !== "undefined") {
  var iconObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (node.matches && node.matches("i.ti")) hydrateStaticIcons(node.parentNode || document);
        else if (node.querySelector) hydrateStaticIcons(node);
      });
    });
  });
  if (document.documentElement) iconObserver.observe(document.documentElement, { childList: true, subtree: true });
}

var DUE_SOON_DAYS = 7;             
var MIN_HISTORY_FOR_FORECAST = 2;
var MIN_HISTORY_FOR_ANOMALY = 2;
var ANOMALY_MULTIPLIER = 1.3;  

var LS_BILLS = "billtrack_bills_v1";
var LS_PAYMENTS = "billtrack_payments_v1";
var LS_BUDGET = "billtrack_budget_v1";
var LS_NOTIF_READ = "billtrack_notif_read_v1";
var LS_SEEDED = "billtrack_seeded_v1";
var LS_GMAIL = "billtrack_gmail_v1";

var CATEGORIES = ["Electricity", "Water", "Internet", "Rent", "Insurance", "Subscription", "Other"];

var CATEGORY_ICON = {
  Electricity: "ti-bolt",
  Water: "ti-droplet",
  Internet: "ti-world",
  Rent: "ti-home",
  Insurance: "ti-shield-check",
  Subscription: "ti-device-mobile",
  Other: "ti-file"
};

function categoryIconClass(category) {
  var wanted = String(category || "").trim().toLowerCase();
  var match = Object.keys(CATEGORY_ICON).find(function (k) { return k.toLowerCase() === wanted; });
  return match ? CATEGORY_ICON[match] : CATEGORY_ICON.Other;
}

function categoryIconHtml(category) {
  return '<span class="category-icon" aria-hidden="true">' + iconSvg(categoryIconClass(category)) + '</span>';
}

function statusIcon(status) {
  if (status === "paid") return "ti-check";
  if (status === "no-date") return "ti-calendar";
  if (status === "overdue") return "ti-alert-triangle";
  if (status === "due-soon") return "ti-clock";
  return "ti-calendar-event";
}

function statusPillHtml(status, label) {
  return '<span class="status-pill ' + statusPillClass(status) + '">' + iconSvg(statusIcon(status)) + ' <span>' + escapeHtml(label) + '</span></span>';
}

function themeColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
var PROVIDER_SUGGESTIONS = ["Meralco", "Maynilad", "Globe", "PLDT", "Converge", "Netflix", "Spotify", "Rent", "Insurance"];
function nsKey(baseKey) {
  var uid = (typeof getCurrentUserId === "function") ? getCurrentUserId() : null;
  return baseKey + "::" + (uid || "anon");
}

function getBills() {
  return safeParse(localStorage.getItem(nsKey(LS_BILLS)), []);
}
function saveBills(bills) {
  try {
    localStorage.setItem(nsKey(LS_BILLS), JSON.stringify(bills));
    document.dispatchEvent(new Event("billtrack:data-changed"));
  } catch (e) {
    console.error("BillTrack: could not save bills.");
    showToast("Unable to save the bill. Your browser storage may be full.", "error");
  }
}

function getPaymentHistory() {
  return safeParse(localStorage.getItem(nsKey(LS_PAYMENTS)), []);
}
function savePaymentHistory(history) {
  try {
    localStorage.setItem(nsKey(LS_PAYMENTS), JSON.stringify(history));
    document.dispatchEvent(new Event("billtrack:data-changed"));
  } catch (e) {
    console.error("BillTrack: could not save payment history.");
  }
}

function getBudget() {
  var v = safeParse(localStorage.getItem(nsKey(LS_BUDGET)), null);
  return (typeof v === "number" && v > 0) ? v : 10000;
}
function setBudget(amount) {
  try {
    localStorage.setItem(nsKey(LS_BUDGET), JSON.stringify(amount));
  } catch (e) {
    console.error("BillTrack: could not save budget.");
  }
}

function getReadNotifIds() {
  return safeParse(localStorage.getItem(nsKey(LS_NOTIF_READ)), []);
}
function setNotifRead(id, isRead) {
  var set = getReadNotifIds();
  var has = set.indexOf(id) !== -1;
  if (isRead && !has) set.push(id);
  if (!isRead && has) set = set.filter(function (x) { return x !== id; });
  try {
    localStorage.setItem(nsKey(LS_NOTIF_READ), JSON.stringify(set));
  } catch (e) {
    console.error("BillTrack: could not save notification state.");
  }
}

function isSeeded() { return !!localStorage.getItem(nsKey(LS_SEEDED)); }
function markSeeded() { localStorage.setItem(nsKey(LS_SEEDED), "1"); }

function getGmailIntegration() {
  return safeParse(localStorage.getItem(nsKey(LS_GMAIL)), { connected: false, email: "", lastSync: null, mode: "demo" });
}
function saveGmailIntegration(data) {
  try { localStorage.setItem(nsKey(LS_GMAIL), JSON.stringify(data)); } catch (e) { console.error("BillTrack: could not save Gmail settings."); }
}
function connectGmailDemo(email) {
  var current = getGmailIntegration();
  current.connected = true;
  current.email = email || (getCurrentUser() ? getCurrentUser().email : "");
  current.mode = "demo";
  current.connectedAt = current.connectedAt || nowIso();
  saveGmailIntegration(current);
  return current;
}
function disconnectGmail() {
  saveGmailIntegration({ connected: false, email: "", lastSync: null, mode: "demo" });
}
function syncDemoGmailBill(data) {
  var integration = getGmailIntegration();
  if (!integration.connected) return { added: false, reason: "not-connected" };
  var provider = (data.provider || "").trim();
  var amount = parseFloat(data.amount);
  var dueDate = data.dueDate;
  if (!provider || !isFinite(amount) || amount <= 0 || !dueDate) return { added: false, reason: "invalid" };

  var bills = getBills();
  var duplicate = bills.some(function (b) {
    return b.provider.toLowerCase() === provider.toLowerCase() && b.dueDate === dueDate && Math.abs((parseFloat(b.amount) || 0) - amount) < 0.01;
  });
  if (duplicate) {
    integration.lastSync = nowIso();
    saveGmailIntegration(integration);
    return { added: false, reason: "duplicate" };
  }

  var bill = addBill({ provider: provider, amount: amount, dueDate: dueDate, recurrence: data.recurrence || "Monthly", category: data.category || "Other", source: "gmail", sourceEmail: integration.email, emailMessageId: data.emailMessageId || genId("gmail") });
  integration.lastSync = nowIso();
  saveGmailIntegration(integration);
  return { added: true, bill: bill };
}



function addDays(dateStr, days) {
  var d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return toLocalYmd(d);
}
function addMonths(dateStr, months) {
  var d = new Date(dateStr + "T00:00:00");
  d.setMonth(d.getMonth() + months);
  return toLocalYmd(d);
}
function advanceDueDate(dueDate, recurrence) {
  switch (recurrence) {
    case "Weekly": return addDays(dueDate, 7);
    case "Quarterly": return addMonths(dueDate, 3);
    case "Annually": return addMonths(dueDate, 12);
    case "One-time": return dueDate;
    case "Monthly":
    default: return addMonths(dueDate, 1);
  }
}

function getDaysUntil(dueDate) {
  if (!dueDate) return null;
  var today = new Date(todayStr() + "T00:00:00");
  var due = new Date(dueDate + "T00:00:00");
  return Math.round((due - today) / 86400000);
}

function isRecurringBill(bill) {
  return !!bill && !!bill.dueDate && !!bill.recurrence && bill.recurrence !== "None" && bill.recurrence !== "One-time";
}

function average(arr) {
  if (!arr.length) return 0;
  return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
}



function loadDemoData() {
  if (isSeeded()) { showToast("Demo data was already loaded for this account.", "error"); return; }

  var today = todayStr();
  var currentMonth = today.slice(0, 7);
  var y = today.slice(0, 4), m = today.slice(5, 7);
  function dateThisMonth(day) {
    var d = new Date(today + "T00:00:00");
    d.setDate(day);
    return d.toISOString().slice(0, 10);
  }

  var bills = [
    { id: genId("bill"), provider: "Meralco", amount: 2550, dueDate: addDays(today, -19), recurrence: "Monthly", category: "Electricity", status: "paid", createdAt: nowIso(), dateAdded: todayStr(), updatedAt: nowIso(), demo: true },
    { id: genId("bill"), provider: "Maynilad", amount: 980, dueDate: addDays(today, -6), recurrence: "Monthly", category: "Water", status: null, createdAt: nowIso(), dateAdded: todayStr(), updatedAt: nowIso(), demo: true },
    { id: genId("bill"), provider: "PLDT Fiber", amount: 1899, dueDate: addDays(today, 8), recurrence: "Monthly", category: "Internet", status: null, createdAt: nowIso(), dateAdded: todayStr(), updatedAt: nowIso(), demo: true },
    { id: genId("bill"), provider: "Netflix", amount: 549, dueDate: addDays(today, 3), recurrence: "Monthly", category: "Subscription", status: null, createdAt: nowIso(), dateAdded: todayStr(), updatedAt: nowIso(), demo: true },
    { id: genId("bill"), provider: "Spotify", amount: 149, dueDate: addDays(today, 6), recurrence: "Monthly", category: "Subscription", status: null, createdAt: nowIso(), dateAdded: todayStr(), updatedAt: nowIso(), demo: true }
  ];

  var meralcoId = bills[0].id, maynilalId = bills[1].id, pldtId = bills[2].id, netflixId = bills[3].id, spotifyId = bills[4].id;
  var months = [-5, -4, -3, -2, -1]; 
  function paidDate(monthsAgo) { return addMonths(addDays(today, -19), monthsAgo + 0).slice(0, 10); }

  var meralcoAmts = [1900, 1950, 1870, 1990, 1860];
  var maynilalAmts = [880, 900, 910, 940, 960];
  var pldtAmts = [1750, 1780, 1820, 1850, 1860];
  var netflixAmts = [549, 549, 549, 549, 549];
  var spotifyAmts = [149, 149, 149, 149, 149];

  var history = [];
  months.forEach(function (monthsAgo, i) {
    var d = addMonths(today, monthsAgo);
    history.push({ paymentId: genId("pmt"), billId: meralcoId, provider: "Meralco", category: "Electricity", amount: meralcoAmts[i], paymentDate: d, dueDate: d, demo: true });
    history.push({ paymentId: genId("pmt"), billId: maynilalId, provider: "Maynilad", category: "Water", amount: maynilalAmts[i], paymentDate: d, dueDate: d, demo: true });
    history.push({ paymentId: genId("pmt"), billId: pldtId, provider: "PLDT Fiber", category: "Internet", amount: pldtAmts[i], paymentDate: d, dueDate: d, demo: true });
    history.push({ paymentId: genId("pmt"), billId: netflixId, provider: "Netflix", category: "Subscription", amount: netflixAmts[i], paymentDate: d, dueDate: d, demo: true });
    history.push({ paymentId: genId("pmt"), billId: spotifyId, provider: "Spotify", category: "Subscription", amount: spotifyAmts[i], paymentDate: d, dueDate: d, demo: true });
  });
  history.push({ paymentId: genId("pmt"), billId: meralcoId, provider: "Meralco", category: "Electricity", amount: 2550, paymentDate: bills[0].dueDate, dueDate: bills[0].dueDate, demo: true });

  saveBills(bills);
  savePaymentHistory(history);
  setBudget(10000);
  markSeeded();
  showToast("Demo data loaded successfully");
}



function addBill(data) {
  var bills = getBills();
  var bill = {
    id: genId("bill"),
    provider: data.provider,
    amount: data.amount,
    dueDate: data.dueDate || "",
    recurrence: data.dueDate ? (data.recurrence || "None") : "None",
    category: (data.category || "").trim(),
    status: null,
    source: data.source || "manual",
    sourceEmail: data.sourceEmail || "",
    emailMessageId: data.emailMessageId || "",
    recurrenceGroupId: data.recurrenceGroupId || genId("cycle"),
    createdAt: nowIso(),
    dateAdded: todayStr(),
    updatedAt: nowIso(),
    demo: false
  };
  bills.push(bill);

  
  if (isRecurringBill(bill) && data.createNextCycle !== false) {
    var nextDue = advanceDueDate(bill.dueDate, bill.recurrence);
    bills.push({
      id: genId("bill"),
      provider: bill.provider,
      amount: bill.amount,
      dueDate: nextDue,
      recurrence: bill.recurrence,
      category: bill.category,
      status: null,
      source: "auto-recurring",
      sourceEmail: bill.sourceEmail || "",
      emailMessageId: "",
      recurrenceGroupId: bill.recurrenceGroupId,
      createdAt: nowIso(),
      dateAdded: todayStr(),
      updatedAt: nowIso(),
      demo: false
    });
  }
  saveBills(bills);
  return bill;
}

function updateBill(id, updates) {
  var bills = getBills();
  var idx = bills.findIndex(function (b) { return b.id === id; });
  if (idx === -1) return null;
  bills[idx] = Object.assign({}, bills[idx], updates, { updatedAt: nowIso() });
  saveBills(bills);
  return bills[idx];
}

function deleteBill(id) {
  var bills = getBills().filter(function (b) { return b.id !== id; });
  saveBills(bills);
}


function openPaymentModal(billId, onDone) {
  var bill = getBills().find(function (b) { return b.id === billId; });
  if (!bill) return;

  var modalEl = document.getElementById("paymentModal");
  if (!modalEl) return;

  document.getElementById("paymentModalProvider").textContent = bill.provider;
  var amountInput = document.getElementById("paymentAmountInput");
  var dateInput = document.getElementById("paymentDateInput");
  var form = document.getElementById("paymentForm");
  amountInput.value = toMoneyInputValue(bill.amount);
  dateInput.value = todayStr();
  dateInput.max = todayStr();

  var modal = window.bootstrap ? window.bootstrap.Modal.getOrCreateInstance(modalEl) : null;
  var freshForm = form.cloneNode(true);
  form.parentNode.replaceChild(freshForm, form);

  freshForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var amt = parseFloat(document.getElementById("paymentAmountInput").value);
    var date = document.getElementById("paymentDateInput").value;
    if (isNaN(amt) || amt <= 0) { showToast("Please enter a valid payment amount.", "error"); return; }
    if (!date) { showToast("Please enter a valid payment date.", "error"); return; }

    markBillAsPaid(billId, { amount: amt, paymentDate: date });
    if (modal) modal.hide();
    showToast("Payment recorded successfully");
    if (typeof onDone === "function") onDone();
  });

  if (modal) modal.show();
}

function markBillAsPaid(id, opts) {
  opts = opts || {};
  var bills = getBills();
  var idx = bills.findIndex(function (b) { return b.id === id; });
  if (idx === -1) return null;
  var bill = bills[idx];
  var paidAmount = opts.amount !== undefined ? opts.amount : bill.amount;
  var paidDate = opts.paymentDate || todayStr();

  var history = getPaymentHistory();
  history.push({
    paymentId: genId("pmt"),
    billId: bill.id,
    provider: bill.provider,
    category: bill.category,
    amount: paidAmount,
    paymentDate: paidDate,
    dueDate: bill.dueDate,
    dateAdded: billDateAdded(bill),
    demo: false
  });
  savePaymentHistory(history);

  if (!isRecurringBill(bill)) {
    bill.status = "paid";
    bill.updatedAt = nowIso();
    bills[idx] = bill;
  } else {

    bill.status = "paid";
    bill.updatedAt = nowIso();
    bills[idx] = bill;

    var nextDueDate = advanceDueDate(bill.dueDate, bill.recurrence);
    var nextBill = bills.find(function (b) {
      return b.id !== bill.id && b.recurrenceGroupId === bill.recurrenceGroupId && b.dueDate === nextDueDate && b.status !== "paid";
    });

    
    if (nextBill) {
      nextBill.amount = paidAmount;
      nextBill.updatedAt = nowIso();
      var followingDueDate = advanceDueDate(nextBill.dueDate, bill.recurrence);
      var followingExists = bills.some(function (b) {
        return b.recurrenceGroupId === bill.recurrenceGroupId && b.dueDate === followingDueDate;
      });
      if (!followingExists) {
        bills.push({
          id: genId("bill"),
          provider: bill.provider,
          amount: paidAmount,
          dueDate: followingDueDate,
          recurrence: bill.recurrence,
          category: bill.category,
          status: null,
          source: "auto-recurring",
          sourceEmail: bill.sourceEmail || "",
          emailMessageId: "",
          recurrenceGroupId: bill.recurrenceGroupId || genId("cycle"),
          createdAt: nowIso(),
          dateAdded: todayStr(),
          updatedAt: nowIso(),
          demo: false
        });
      }
    } else {
      bills.push({
        id: genId("bill"),
        provider: bill.provider,
        amount: paidAmount,
        dueDate: nextDueDate,
        recurrence: bill.recurrence,
        category: bill.category,
        status: null,
        source: "auto-recurring",
        sourceEmail: bill.sourceEmail || "",
        emailMessageId: "",
        recurrenceGroupId: bill.recurrenceGroupId || genId("cycle"),
        createdAt: nowIso(),
        dateAdded: todayStr(),
        updatedAt: nowIso(),
        demo: false
      });
    }
  }
  saveBills(bills);
  return bill;
}



function calculateBillStatus(bill) {
  if (bill.status === "paid") return "paid";
  if (!bill.dueDate) return "no-date";
  var days = getDaysUntil(bill.dueDate);
  if (days < 0) return "overdue";
  if (days <= DUE_SOON_DAYS) return "due-soon";
  return "upcoming";
}

function getBillsWithStatus() {
  return getBills().map(function (b) {
    return Object.assign({}, b, {
      computedStatus: calculateBillStatus(b),
      daysUntil: getDaysUntil(b.dueDate)
    });
  });
}
function getUpcomingBills() { return getBillsWithStatus().filter(function (b) { return b.computedStatus === "upcoming"; }); }
function getDueSoonBills() { return getBillsWithStatus().filter(function (b) { return b.computedStatus === "due-soon"; }); }
function getOverdueBills() { return getBillsWithStatus().filter(function (b) { return b.computedStatus === "overdue"; }); }
function getPaidBills() { return getBillsWithStatus().filter(function (b) { return b.computedStatus === "paid"; }); }

function statusLabel(status) {
  if (status === "paid") return "Paid";
  if (status === "overdue") return "Overdue";
  if (status === "due-soon") return "Due Soon";
  if (status === "no-date") return "No due date";
  return "Upcoming";
}
function statusPillClass(status) {
  if (status === "paid") return "status-paid";
  if (status === "overdue") return "status-overdue";
  if (status === "due-soon") return "status-due-soon";
  return "status-neutral";
}



function getTotalExpenses() {
  return getBills().reduce(function (sum, b) { return sum + (parseFloat(b.amount) || 0); }, 0);
}

function getBudgetStatus() {
  var budget = getBudget();
  var expenses = getTotalExpenses();
  var remaining = budget - expenses;
  var ratio = budget > 0 ? remaining / budget : 0;
  var label, cls;
  if (remaining < 0) { label = "Over budget"; cls = "status-overdue"; }
  else if (ratio < 0.15) { label = "Tight"; cls = "status-upcoming"; }
  else { label = "Healthy"; cls = "status-paid"; }
  return { budget: budget, expenses: expenses, remaining: remaining, label: label, cls: cls };
}



function getProviderHistory(provider) {
  return getPaymentHistory()
    .filter(function (p) { return p.provider === provider; })
    .sort(function (a, b) { return a.paymentDate < b.paymentDate ? -1 : (a.paymentDate > b.paymentDate ? 1 : 0); });
}

function getAllProviders() {
  var set = {};
  getBills().forEach(function (b) { set[b.provider] = true; });
  getPaymentHistory().forEach(function (p) { set[p.provider] = true; });
  return Object.keys(set);
}

function calculateProviderForecast(provider) {
  var hist = getProviderHistory(provider);
  var amounts = hist.map(function (p) { return p.amount; });
  if (amounts.length < MIN_HISTORY_FOR_FORECAST) {
    return { provider: provider, hasEnoughData: false, average: amounts.length ? average(amounts) : null, count: amounts.length };
  }
  return {
    provider: provider,
    hasEnoughData: true,
    average: average(amounts),
    predicted: average(amounts),
    count: amounts.length,
    lastAmount: amounts[amounts.length - 1],
    lastDate: hist[hist.length - 1].paymentDate
  };
}

function calculateForecast() {
  var providers = getAllProviders();
  var total = 0, usable = 0, missing = [];
  providers.forEach(function (p) {
    var f = calculateProviderForecast(p);
    if (f.hasEnoughData) { total += f.predicted; usable++; } else { missing.push(p); }
  });
  return { predictedTotal: usable ? total : null, providersUsed: usable, providersMissing: missing, hasEnoughData: usable > 0 };
}

function getHistoricalAverageMonthly() {
  var currentYm = todayStr().slice(0, 7);
  var months = getMonthlyPaymentTotals().filter(function (m) { return m.month !== currentYm; });
  if (!months.length) return null;
  return average(months.map(function (m) { return m.total; }));
}

function getMonthlyPaymentTotals() {
  var history = getPaymentHistory();
  var map = {};
  history.forEach(function (p) {
    var ym = p.paymentDate.slice(0, 7);
    map[ym] = (map[ym] || 0) + (parseFloat(p.amount) || 0);
  });
  return Object.keys(map).sort().map(function (m) { return { month: m, total: map[m] }; });
}

function detectAnomalies() {
  var results = [];
  var providers = getAllProviders();
  var billsByProvider = {};
  getBills().forEach(function (b) { billsByProvider[b.provider] = b; });

  providers.forEach(function (provider) {
    var bill = billsByProvider[provider];
    if (!bill) return;
    var hist = getProviderHistory(provider);
    var baseline, currentAmount, referenceDate;

    if (bill.status === "paid" && hist.length) {
      var mostRecent = hist[hist.length - 1];
      baseline = hist.slice(0, -1).map(function (p) { return p.amount; });
      currentAmount = mostRecent.amount;
      referenceDate = mostRecent.paymentDate;
    } else {
      baseline = hist.map(function (p) { return p.amount; });
      currentAmount = bill.amount;
      referenceDate = bill.dueDate;
    }

    if (baseline.length < MIN_HISTORY_FOR_ANOMALY) return;
    var avg = average(baseline);
    if (avg <= 0) return;
    if (currentAmount > avg * ANOMALY_MULTIPLIER) {
      results.push({
        billId: bill.id,
        provider: provider,
        amount: currentAmount,
        average: avg,
        percentAbove: Math.round(((currentAmount - avg) / avg) * 1000) / 10,
        date: referenceDate
      });
    }
  });
  return results;
}



function generateNotifications() {
  var notifs = [];

  getOverdueBills().forEach(function (b) {
    var daysOver = Math.abs(b.daysUntil);
    notifs.push({
      id: "overdue-" + b.id,
      type: "overdue",
      title: "Your " + b.provider + " bill is overdue",
      desc: formatCurrency(b.amount) + " was due " + formatDateShort(b.dueDate) + " \u2014 " + daysOver + " day" + (daysOver === 1 ? "" : "s") + " overdue.",
      date: b.dueDate
    });
  });

  getDueSoonBills().forEach(function (b) {
    var d = b.daysUntil;
    var when = d === 0 ? "today" : ("in " + d + " day" + (d === 1 ? "" : "s"));
    notifs.push({
      id: "duesoon-" + b.id,
      type: "reminder",
      title: "Your " + b.provider + " bill is due " + (d === 0 ? "today" : "soon"),
      desc: formatCurrency(b.amount) + " is due " + when + ".",
      date: b.dueDate
    });
  });

  detectAnomalies().forEach(function (a) {
    notifs.push({
      id: "anomaly-" + a.billId,
      type: "anomaly",
      title: "Unusual amount detected: " + a.provider,
      desc: a.provider + "'s bill is " + a.percentAbove + "% above its historical average (" + formatCurrency(a.amount) + " vs " + formatCurrency(a.average) + " avg).",
      date: a.date
    });
  });

  var typeOrder = { overdue: 0, anomaly: 1, reminder: 2 };
  notifs.sort(function (a, b) {
    return (typeOrder[a.type] - typeOrder[b.type]) || (a.date < b.date ? 1 : -1);
  });

  var readSet = getReadNotifIds();
  notifs.forEach(function (n) { n.read = readSet.indexOf(n.id) !== -1; });
  return notifs;
}

var NOTIF_ICON = {
  overdue: { cls: "ti-alert-triangle", bg: "rgba(231,111,81,0.14)", color: "var(--danger)" },
  reminder: { cls: "ti-clock", bg: "rgba(244,162,89,0.16)", color: "var(--warning)" },
  anomaly: { cls: "ti-trending-up", bg: "rgba(231,111,81,0.14)", color: "var(--danger)" }
};



function initDashboard() {
  var totalEl = document.getElementById("metricTotalExpenses");
  if (!totalEl) return;

  var greetingEl = document.getElementById("dashboardGreeting");
  if (greetingEl && typeof getCurrentUser === "function") {
    var user = getCurrentUser();
    var firstName = user ? (user.fullName || "").trim().split(/\s+/)[0] : "";
    var hour = new Date().getHours();
    var timeGreeting = hour < 12 ? "Good morning" : (hour < 18 ? "Good afternoon" : "Good evening");
    greetingEl.textContent = firstName ? (timeGreeting + ", " + firstName + " \uD83D\uDC4B") : (timeGreeting + " \uD83D\uDC4B");
  }

  var upcomingEl = document.getElementById("metricUpcomingBills");
  var budgetEl = document.getElementById("metricBudgetStatus");
  var anomalyEl = document.getElementById("metricAnomalyAlerts");
  var forecastEl = document.getElementById("metricForecast");
  var recentList = document.getElementById("recentBillsList");

  function render() {
    var totalExpenses = getTotalExpenses();
    var upcomingCount = getUpcomingBills().length + getDueSoonBills().length;
    var budgetStatus = getBudgetStatus();
    var anomalies = detectAnomalies();

    totalEl.textContent = formatCurrency(totalExpenses);
    upcomingEl.textContent = String(upcomingCount);
    budgetEl.textContent = budgetStatus.label;
    budgetEl.style.color = budgetStatus.label === "Healthy" ? "var(--success)" : (budgetStatus.label === "Tight" ? "var(--warning)" : "var(--danger)");
    anomalyEl.textContent = String(anomalies.length);
    if (forecastEl) {
      var fc = calculateForecast();
      forecastEl.textContent = fc.hasEnoughData ? formatCurrency(fc.predictedTotal) : "N/A";
      forecastEl.style.color = fc.hasEnoughData ? "var(--success)" : "var(--text-muted)";
    }

    if (recentList) {
      var bills = getBillsWithStatus().sort(function (a, b) { return (a.updatedAt < b.updatedAt) ? 1 : -1; }).slice(0, 6);
      if (!bills.length) {
        recentList.innerHTML = '<div class="empty-state">No bills added yet.<br>Add your first household bill to start tracking your expenses.</div>';
      } else {
        recentList.innerHTML = bills.map(function (b) {
          var amountText = formatCurrency(b.amount);
          var metaText = !b.dueDate ? (amountText + " \u00B7 No due date") :
            (b.computedStatus === "overdue" ? ("Was due " + formatDateShort(b.dueDate)) : ("Due " + formatDateShort(b.dueDate)));
          var pillIcon = statusIcon(b.computedStatus);
          var pillText = b.computedStatus === "paid" ? "Paid" : (b.computedStatus === "overdue" ? "Overdue" : (b.computedStatus === "due-soon" ? (b.daysUntil + " day" + (b.daysUntil === 1 ? "" : "s")) : (b.computedStatus === "no-date" ? "No date" : "Upcoming")));
          return '<div class="bill-row">' +
            '<div><div class="bill-provider">' + escapeHtml(b.provider) + '</div><div class="bill-meta">' + metaText + '</div></div>' +
            '<span class="status-pill ' + statusPillClass(b.computedStatus) + '"><i class="ti ' + pillIcon + '"></i> ' + escapeHtml(pillText) + '</span>' +
            '</div>';
        }).join("");
      }
    }
  }

  function refreshDashboard() {
    render();
  }
  refreshDashboard();
  initDashboardChart();

  // Live updates: re-check every 30 seconds, when the tab is shown again,
  // and whenever another tab changes BillTrack data.
  setInterval(refreshDashboard, 30000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) refreshDashboard(); });
  window.addEventListener("storage", function (e) { if (!e.key || e.key.indexOf("billtrack_") === 0) refreshDashboard(); });

  if (window.location.search.indexOf("welcome=1") !== -1) {
    showToast("Account created successfully");
    window.history.replaceState({}, "", window.location.pathname);
  }
}

function initDashboardChart() {
  var canvas = document.getElementById("billsChart");
  if (!canvas || typeof Chart === "undefined") return;

  var monthly = getMonthlyPaymentTotals(); 
  var currentYm = todayStr().slice(0, 7);
  if (!monthly.length || monthly[monthly.length - 1].month !== currentYm) {
    monthly = monthly.concat([{ month: currentYm, total: getTotalExpenses() }]);
  } else {
    monthly[monthly.length - 1] = { month: currentYm, total: getTotalExpenses() };
  }

  function labelFor(ym) {
    var d = new Date(ym + "-01T00:00:00");
    return d.toLocaleDateString(undefined, { month: "short" });
  }

  function sliceRange(n) {
    var slice = monthly.slice(Math.max(0, monthly.length - n));
    return { labels: slice.map(function (m) { return labelFor(m.month); }), values: slice.map(function (m) { return Math.round(m.total * 100) / 100; }) };
  }

  var ranges = { "3M": sliceRange(3), "6M": sliceRange(6), "1Y": sliceRange(12) };

  var ctx = canvas.getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ranges["6M"].labels,
      datasets: [{
        label: "Total bills (\u20B1)",
        data: ranges["6M"].values,
        backgroundColor: themeColor("--primary"),
        borderRadius: 6,
        maxBarThickness: 34
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: function (item) { return formatCurrency(item.parsed.y); } } }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: themeColor("--border") }, ticks: { callback: function (value) { return formatCurrency(value); } } },
        x: { grid: { display: false } }
      }
    }
  });

  var rangeButtons = document.querySelectorAll("[data-range]");
  rangeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      rangeButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var range = btn.getAttribute("data-range");
      chart.data.labels = ranges[range].labels;
      chart.data.datasets[0].data = ranges[range].values;
      chart.update();
    });
  });
}



function initBillsPage() {
  var tableBody = document.getElementById("billsTableBody");
  if (!tableBody) return;

  var form = document.getElementById("billForm");
  var providerInput = document.getElementById("billProvider");
  var amountInput = document.getElementById("billAmount");
  var dueDateInput = document.getElementById("billDueDate");
  var recurrenceInput = document.getElementById("billRecurrence");
  var categoryInput = document.getElementById("billCategory");
  var formTitle = document.getElementById("billFormTitle");
  var cancelBtn = document.getElementById("billFormCancel");
  var saveBtn = document.getElementById("billFormSave");
  var searchInput = document.getElementById("billSearch");
  var sortSelect = document.getElementById("billSort");
  var filterButtons = document.querySelectorAll("[data-bill-filter]");
  var paidWrap = document.getElementById("billPaidWrap");
  var paidCheck = document.getElementById("billAlreadyPaid");

  var editingId = null;
  var activeFilter = "all";
  var BILL_FIELDS = ["billProvider", "billAmount", "billDueDate", "billRecurrence", "billCategory", "billAlreadyPaid"];
  var draft = createFormDraft("bill", BILL_FIELDS, {
    getMeta: function () { return { editingId: editingId }; },
    // A blank "Add bill" form needs no draft; an edit form always keeps one.
    isPristine: function (d) {
      return !d.meta.editingId && !d.values.billProvider && !d.values.billAmount && !d.values.billDueDate &&
        !d.values.billCategory && !d.values.billAlreadyPaid && (d.values.billRecurrence || "None") === "None";
    }
  });
  var autoNote = document.getElementById("billAutoPaidNote");
  function syncAutoNote() {
    var show = !editingId && dueDateInput && !dueDateInput.value;
    if (autoNote) autoNote.classList.toggle("d-none", !show);
    if (paidWrap && !editingId) paidWrap.classList.toggle("d-none", !!show);
  }
  if (dueDateInput) dueDateInput.addEventListener("input", syncAutoNote);
  if (dueDateInput) dueDateInput.addEventListener("change", syncAutoNote);

  function resetForm() {
    editingId = null;
    form.reset();
    if (paidWrap) paidWrap.classList.remove("d-none");
    formTitle.textContent = "Add bill";
    saveBtn.textContent = "Add bill";
    syncAutoNote();
  }

  function startEdit(id) {
    var bill = getBills().find(function (b) { return b.id === id; });
    if (!bill) return;
    editingId = id;
    providerInput.value = bill.provider;
    amountInput.value = toMoneyInputValue(bill.amount);
    dueDateInput.value = bill.dueDate || "";
    recurrenceInput.value = (bill.recurrence && bill.recurrence !== "One-time") ? bill.recurrence : "None";
    if (categoryInput) categoryInput.value = bill.category || "";
    syncAutoNote();
    if (paidWrap) paidWrap.classList.add("d-none");
    formTitle.textContent = "Edit bill";
    saveBtn.textContent = "Save changes";
    providerInput.focus();
    draft.save();
  }

  function matchesFilter(b) {
    if (activeFilter === "all") return true;
    return b.computedStatus === activeFilter;
  }
  function matchesSearch(b, q) {
    if (!q) return true;
    q = q.toLowerCase();
    return b.provider.toLowerCase().indexOf(q) !== -1 || (b.category || "").toLowerCase().indexOf(q) !== -1;
  }

  function render() {
    var q = searchInput ? searchInput.value.trim() : "";
    var sort = sortSelect ? sortSelect.value : "due-asc";
    var bills = getBillsWithStatus()
      .filter(function (b) { return matchesFilter(b) && matchesSearch(b, q); })
      .sort(function (a, b) {
        switch (sort) {
          case "due-desc":
            if (!a.dueDate || !b.dueDate) return (a.dueDate ? 0 : 1) - (b.dueDate ? 0 : 1);
            return a.dueDate < b.dueDate ? 1 : -1;
          case "amount-desc": return b.amount - a.amount;
          case "amount-asc": return a.amount - b.amount;
          case "due-asc":
          default:
            if (!a.dueDate || !b.dueDate) return (a.dueDate ? 0 : 1) - (b.dueDate ? 0 : 1);
            return a.dueDate < b.dueDate ? -1 : 1;
        }
      });

    if (!bills.length) {
      if (getBills().length) {
        tableBody.innerHTML = '<div class="empty-state">No bills found.<br>Try a different search or filter.</div>';
      } else {
        tableBody.innerHTML = '<div class="empty-state">No bills added yet.<br>Add your first household bill to start tracking your expenses.</div>';
      }
    } else {
      tableBody.innerHTML = bills.map(function (bill) {
        var pillText = bill.computedStatus === "due-soon" ? ("Due in " + bill.daysUntil + "d") : statusLabel(bill.computedStatus);
        var recurText = isRecurringBill(bill) ? bill.recurrence : "";
        var metaParts = [bill.category, recurText].filter(Boolean);
        var categoryLine = metaParts.length
          ? '<div class="bill-category">' + (bill.category ? '<span class="category-icon" aria-hidden="true">' + iconSvg(categoryIconClass(bill.category)) + '</span>' : '') + '<span class="category-label">' + escapeHtml(metaParts.join(" \u00B7 ")) + '</span></div>'
          : '';
        var markPaidBtn = bill.computedStatus !== "paid" ? '<button class="btn-ghost-icon" data-paid="' + bill.id + '" aria-label="Mark as paid" title="Mark as paid">' + iconSvg("circle-check") + '</button>' : "";
        return '<div class="bill-row flex-wrap">' +
          '<div style="min-width:160px;">' +
            '<div class="bill-provider">' + escapeHtml(bill.provider) + '</div>' +
            categoryLine +
            '<div class="bill-meta">Added: ' + formatDateFull(billDateAdded(bill)) + '</div>' +
            ((bill.source === "gmail") ? '<div class="bill-meta"><i class="ti ti-mail"></i> Gmail detected</div>' : (bill.source === "auto-recurring" ? '<div class="bill-meta"><i class="ti ti-repeat"></i> Auto-created next bill</div>' : '')) +
          '</div>' +
          '<div style="min-width:90px;">' + formatCurrency(bill.amount) + '</div>' +
          '<div class="bill-meta" style="min-width:110px;">' + (bill.dueDate ? formatDateShort(bill.dueDate) : "No due date") + '</div>' +
          '<div style="min-width:110px;">' + statusPillHtml(bill.computedStatus, pillText) + '</div>' +
          '<div class="bill-actions">' +
            markPaidBtn +
            '<button class="btn-ghost-icon" data-view="' + bill.id + '" aria-label="View bill" title="View bill">' + iconSvg("eye") + '</button>' +
            '<button class="btn-ghost-icon" data-edit="' + bill.id + '" aria-label="Edit bill" title="Edit bill">' + iconSvg("pencil") + '</button>' +
            '<button class="btn-ghost-icon" data-delete="' + bill.id + '" aria-label="Delete bill" title="Delete bill">' + iconSvg("trash") + '</button>' +
          '</div>' +
        '</div>';
      }).join("");
    }

    tableBody.querySelectorAll("[data-edit]").forEach(function (btn) {
      btn.addEventListener("click", function () { startEdit(btn.getAttribute("data-edit")); });
    });
    tableBody.querySelectorAll("[data-delete]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-delete");
        var bill = getBills().find(function (b) { return b.id === id; });
        var name = bill ? bill.provider : "this bill";
        confirmDialog({
          title: "Delete bill",
          message: 'Are you sure you want to delete the "' + name + '" bill? This cannot be undone.',
          confirmText: "Delete",
          danger: true,
          onConfirm: function () {
            deleteBill(id);
            if (editingId === id) { resetForm(); draft.clear(); }
            render();
            showToast("Bill deleted successfully");
          }
        });
      });
    });
    tableBody.querySelectorAll("[data-paid]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-paid");
        openPaymentModal(id, render);
      });
    });
    tableBody.querySelectorAll("[data-view]").forEach(function (btn) {
      btn.addEventListener("click", function () { showBillDetail(btn.getAttribute("data-view")); });
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var provider = providerInput.value.trim();
      var amount = parseFloat(amountInput.value);
      var dueDate = dueDateInput.value;

      if (!provider) { showToast("Please enter a bill provider.", "error"); providerInput.focus(); return; }
      if (isNaN(amount) || amount <= 0) { showToast("Please enter a valid amount greater than " + formatCurrency(0) + ".", "error"); amountInput.focus(); return; }
      var recurrence = recurrenceInput.value || "None";
      if (!dueDate && recurrence !== "None") {
        showToast("Choose a due date to use a recurrence, or set recurrence to None.", "error");
        dueDateInput.focus();
        return;
      }

      var data = {
        provider: provider,
        amount: amount,
        dueDate: dueDate || "",
        recurrence: dueDate ? recurrence : "None",
        category: categoryInput ? categoryInput.value.trim() : ""
      };

      if (editingId) {
        updateBill(editingId, data);
        showToast("Bill updated successfully");
      } else {
        var created = addBill(data);
        if (!dueDate) {
          markBillAsPaid(created.id, { amount: amount, paymentDate: todayStr() });
          showToast("Added and logged in Payment History");
        } else if (paidCheck && paidCheck.checked) {
          markBillAsPaid(created.id, { amount: amount, paymentDate: todayStr() });
          showToast("Added and marked as paid");
        } else {
          showToast("Bill added successfully");
        }
      }
      resetForm();
      draft.clear();
      render();
    });
  }

  if (cancelBtn) cancelBtn.addEventListener("click", function () { resetForm(); draft.clear(); });
  if (searchInput) searchInput.addEventListener("input", render);
  if (sortSelect) sortSelect.addEventListener("change", render);
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-bill-filter");
      render();
    });
  });

  render();
  resetForm();

  // Bring back anything left unsaved when the user navigated away (sidebar click, reload).
  var saved = draft.restore();
  if (saved) {
    var savedId = saved.meta && saved.meta.editingId;
    if (savedId && getBills().some(function (b) { return b.id === savedId; })) {
      editingId = savedId;
      if (paidWrap) paidWrap.classList.add("d-none");
      formTitle.textContent = "Edit bill";
      saveBtn.textContent = "Save changes";
    } else if (savedId) {
      // The bill being edited no longer exists; start fresh.
      resetForm();
      draft.clear();
    }
    syncAutoNote();
  }
  draft.watch();
}

function showBillDetail(id) {
  var bill = getBillsWithStatus().find(function (b) { return b.id === id; });
  var modalEl = document.getElementById("billDetailModal");
  if (!bill || !modalEl) return;

  var body = document.getElementById("billDetailBody");
  var hist = getProviderHistory(bill.provider).slice(-5).reverse();

  var historyHtml = hist.length
    ? hist.map(function (p) {
        return '<div class="bill-row"><div><div class="bill-provider">' + formatDateLong(p.paymentDate) + '</div><div class="bill-meta">Payment</div></div><div>' + formatCurrency(p.amount) + '</div></div>';
      }).join("")
    : '<div class="empty-state">No payment history yet for ' + escapeHtml(bill.provider) + '.</div>';

  body.innerHTML =
    '<div class="mb-3">' + statusPillHtml(bill.computedStatus, statusLabel(bill.computedStatus)) + '</div>' +
    '<div class="row g-2 mb-3">' +
      '<div class="col-6"><div class="bill-meta">Name</div><div class="bill-provider">' + escapeHtml(bill.provider) + '</div></div>' +
      '<div class="col-6"><div class="bill-meta">Category</div><div class="bill-category mt-1">' + (bill.category ? categoryIconHtml(bill.category) : '') + '<span class="bill-provider category-label">' + escapeHtml(bill.category || "\u2014") + '</span></div></div>' +
      '<div class="col-6"><div class="bill-meta">Amount</div><div class="bill-provider">' + formatCurrency(bill.amount) + '</div></div>' +
      '<div class="col-6"><div class="bill-meta">Date added</div><div class="bill-provider">' + formatDateFull(billDateAdded(bill)) + '</div></div>' +
      '<div class="col-6"><div class="bill-meta">Due date</div><div class="bill-provider">' + (bill.dueDate ? formatDateLong(bill.dueDate) : "No due date") + '</div></div>' +
      '<div class="col-6"><div class="bill-meta">Recurrence</div><div class="bill-provider">' + escapeHtml(isRecurringBill(bill) ? bill.recurrence : "None") + '</div></div>' +
      '<div class="col-6"><div class="bill-meta">Source</div><div class="bill-provider">' + escapeHtml(bill.source === "gmail" ? "Gmail" : (bill.source === "auto-recurring" ? "Automatic recurring bill" : "Manual entry")) + '</div></div>' +
    '</div>' +
    '<div style="font-weight:500;font-size:13.5px;" class="mb-2">Recent payment history</div>' +
    historyHtml;

  if (window.bootstrap) {
    var modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  } else {
    modalEl.classList.add("show");
    modalEl.style.display = "block";
  }
}



function initRemindersPage() {
  var overdueEl = document.getElementById("overdueList");
  if (!overdueEl) return;
  var dueSoonEl = document.getElementById("dueSoonList");
  var upcomingEl = document.getElementById("upcomingList");
  var overdueCount = document.getElementById("overdueCount");
  var dueSoonCount = document.getElementById("dueSoonCount");
  var upcomingCount = document.getElementById("upcomingCount");

  function rowHtml(b, rightText, rightColor) {
    return '<div class="bill-row"><div><div class="bill-provider">' + escapeHtml(b.provider) + '</div><div class="bill-meta">' + formatCurrency(b.amount) + ' \u00B7 due ' + formatDateShort(b.dueDate) + '</div></div>' +
      '<span class="bill-meta" style="color:' + rightColor + ';font-weight:500;">' + rightText + '</span></div>';
  }
  function emptyHtml(text) { return '<div class="empty-state">' + text + '</div>'; }

  function render() {
    var overdue = getOverdueBills().sort(function (a, b) { return a.daysUntil - b.daysUntil; });
    var dueSoon = getDueSoonBills().sort(function (a, b) { return a.daysUntil - b.daysUntil; });
    var upcoming = getUpcomingBills().sort(function (a, b) { return a.daysUntil - b.daysUntil; });

    overdueCount.textContent = overdue.length;
    dueSoonCount.textContent = dueSoon.length;
    upcomingCount.textContent = upcoming.length;

    overdueEl.innerHTML = overdue.length ? overdue.map(function (b) {
      var d = Math.abs(b.daysUntil);
      return rowHtml(b, d + " day" + (d === 1 ? "" : "s") + " overdue", "var(--danger)");
    }).join("") : emptyHtml("Nothing overdue. Nice work.");

    dueSoonEl.innerHTML = dueSoon.length ? dueSoon.map(function (b) {
      return rowHtml(b, (b.daysUntil === 0 ? "Due today" : (b.daysUntil + " day" + (b.daysUntil === 1 ? "" : "s") + " left")), "var(--warning)");
    }).join("") : emptyHtml("No bills due soon.");

    upcomingEl.innerHTML = upcoming.length ? upcoming.map(function (b) {
      return rowHtml(b, b.daysUntil + " days left", "var(--text-muted)");
    }).join("") : emptyHtml("No upcoming bills.");
  }

  render();
}



function initDashboardNotifications() {
  var list = document.getElementById("notifList");
  if (!list) return null;
  var markAllBtn = document.getElementById("notifMarkAllBtn");
  var summaryEl = document.getElementById("notifUnreadSummary");
  var badgeEl = document.getElementById("notifBadge");

  function updateSummary() {
    var unreadCount = list.querySelectorAll(".notif-item.unread").length;
    if (summaryEl) summaryEl.textContent = unreadCount ? (unreadCount + " unread") : "You're all caught up.";
    if (markAllBtn) markAllBtn.classList.toggle("d-none", unreadCount === 0);
    if (badgeEl) {
      badgeEl.textContent = String(unreadCount);
      badgeEl.classList.toggle("d-none", unreadCount === 0);
    }
  }

  function toggleRead(id, item) {
    var isUnread = item.classList.contains("unread");
    setNotifRead(id, isUnread);
    item.classList.toggle("unread");
    var btn = item.querySelector("[data-mark-read-btn]");
    if (btn) btn.textContent = item.classList.contains("unread") ? "Mark as read" : "Mark as unread";
    updateSummary();
  }

  function render() {
    var notifs = generateNotifications();
    if (!notifs.length) {
      list.innerHTML = '<div class="empty-state">No new notifications.</div>';
      if (summaryEl) summaryEl.textContent = "";
      if (markAllBtn) markAllBtn.classList.add("d-none");
      if (badgeEl) badgeEl.classList.add("d-none");
      return;
    }
    list.innerHTML = notifs.map(function (n) {
      var icon = NOTIF_ICON[n.type] || NOTIF_ICON.reminder;
      return '<div class="notif-item' + (n.read ? "" : " unread") + '" data-notif-id="' + n.id + '" role="button" tabindex="0" aria-label="' + escapeHtml(n.title) + (n.read ? ", read" : ", unread") + '">' +
        '<div class="notif-icon" style="background:' + icon.bg + ';color:' + icon.color + ';"><i class="ti ' + icon.cls + '"></i></div>' +
        '<div class="flex-fill"><div class="notif-title">' + escapeHtml(n.title) + '</div><div class="notif-desc">' + escapeHtml(n.desc) + '</div></div>' +
        '<div class="d-flex flex-column align-items-end gap-1">' +
          '<div class="notif-time">' + formatDateShort(n.date) + '</div>' +
          '<button type="button" class="btn-ghost-icon notif-markall-btn" data-mark-read-btn>' + (n.read ? "Mark as unread" : "Mark as read") + '</button>' +
        '</div>' +
      '</div>';
    }).join("");

    list.querySelectorAll(".notif-item").forEach(function (item) {
      var id = item.getAttribute("data-notif-id");
      item.addEventListener("click", function () { toggleRead(id, item); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleRead(id, item); }
      });
      var btn = item.querySelector("[data-mark-read-btn]");
      if (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          toggleRead(id, item);
        });
      }
    });

    updateSummary();
  }

  if (markAllBtn) {
    markAllBtn.addEventListener("click", function () {
      list.querySelectorAll(".notif-item.unread").forEach(function (item) {
        setNotifRead(item.getAttribute("data-notif-id"), true);
      });
      render();
      showToast("All notifications marked as read");
    });
  }

  return { render: render };
}


function initForecastingPage() {
  var predictedEl = document.getElementById("metricPredictedNext");
  if (!predictedEl) return;
  var histAvgEl = document.getElementById("metricHistoricalAvg");
  var mostRecentEl = document.getElementById("metricMostRecent");
  var trendEl = document.getElementById("metricTrend");
  var anomalyList = document.getElementById("anomalyList");
  var providerTable = document.getElementById("providerForecastTable");
  var canvas = document.getElementById("forecastChart");
  var chart = null;

  function render() {
    var forecast = calculateForecast();
    var histAvg = getHistoricalAverageMonthly();
    var mostRecent = getTotalExpenses();

    predictedEl.textContent = forecast.hasEnoughData ? formatCurrency(forecast.predictedTotal) : "N/A";
    histAvgEl.textContent = histAvg !== null ? formatCurrency(histAvg) : "N/A";
    mostRecentEl.textContent = formatCurrency(mostRecent);

    if (histAvg && histAvg > 0) {
      var trend = ((mostRecent - histAvg) / histAvg) * 100;
      trendEl.innerHTML = '<i class="ti ' + (trend >= 0 ? "ti-trending-up" : "ti-trending-down") + '" style="font-size:20px;"></i> ' + (trend >= 0 ? "+" : "") + trend.toFixed(1) + "%";
      trendEl.style.color = trend >= 0 ? "var(--danger)" : "var(--success)";
    } else {
      trendEl.textContent = "N/A";
      trendEl.style.color = "var(--text-muted)";
    }

    var anomalies = detectAnomalies();
    if (anomalyList) {
      anomalyList.innerHTML = anomalies.length ? anomalies.map(function (a) {
        return '<div class="d-flex gap-2 align-items-start p-2 mb-2" style="background:rgba(231,111,81,0.08);border-radius:8px;">' +
          '<i class="ti ti-alert-triangle" style="color:var(--danger);font-size:18px;margin-top:2px;"></i>' +
          '<div><div style="font-size:13.5px;font-weight:500;">' + escapeHtml(a.provider) + " bill is " + a.percentAbove + '% above its average</div>' +
          '<div class="bill-meta">Unusual amount detected \u2014 ' + formatCurrency(a.amount) + ' vs ' + formatCurrency(a.average) + ' average</div></div></div>';
      }).join("") : '<div class="empty-state">No unusual bills detected.</div>';
    }

    if (providerTable) {
      var providers = getAllProviders().sort();
      providerTable.innerHTML = providers.map(function (p) {
        var f = calculateProviderForecast(p);
        return '<div class="bill-row"><div><div class="bill-provider">' + escapeHtml(p) + '</div><div class="bill-meta">' + f.count + ' payment' + (f.count === 1 ? "" : "s") + ' on record</div></div>' +
          '<div>' + (f.hasEnoughData ? formatCurrency(f.predicted) : "N/A") + '</div></div>';
      }).join("") || '<div class="empty-state">No provider data yet.</div>';
    }

    if (canvas && typeof Chart !== "undefined") {
      var monthly = getMonthlyPaymentTotals();
      var currentYm = todayStr().slice(0, 7);
      if (!monthly.length || monthly[monthly.length - 1].month !== currentYm) {
        monthly = monthly.concat([{ month: currentYm, total: mostRecent }]);
      } else {
        monthly[monthly.length - 1] = { month: currentYm, total: mostRecent };
      }
      var recent = monthly.slice(Math.max(0, monthly.length - 6));
      var labels = recent.map(function (m) { return new Date(m.month + "-01T00:00:00").toLocaleDateString(undefined, { month: "short" }); });
      var values = recent.map(function (m) { return Math.round(m.total * 100) / 100; });
      if (forecast.hasEnoughData) {
        labels.push("Predicted");
        values.push(Math.round(forecast.predictedTotal * 100) / 100);
      }
      var colors = recent.map(function () { return themeColor("--primary"); });
      if (forecast.hasEnoughData) colors.push(themeColor("--secondary"));

      if (chart) chart.destroy();
      chart = new Chart(canvas.getContext("2d"), {
        type: "bar",
        data: { labels: labels, datasets: [{ label: "Total bills (\u20B1)", data: values, backgroundColor: colors, borderRadius: 6, maxBarThickness: 34 }] },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (item) { return formatCurrency(item.parsed.y); } } } },
          scales: { y: { beginAtZero: true, grid: { color: themeColor("--border") }, ticks: { callback: function (v) { return formatCurrency(v); } } }, x: { grid: { display: false } } }
        }
      });
    }
  }

  render();
  document.addEventListener("billtrack:data-changed", render);
  window.addEventListener("storage", function (e) { if (!e.key || e.key.indexOf("billtrack_") === 0) render(); });
}

// Notification bell in the top-right of every page (next to the calculator).
function initTopbarNotifications() {
  var actions = document.querySelector(".topbar-actions");
  if (!actions || document.getElementById("notifBellBtn")) return;

  var wrap = document.createElement("div");
  wrap.className = "notif-bell-wrap";
  wrap.innerHTML =
    '<button type="button" class="topbar-icon-btn notif-bell-btn" id="notifBellBtn" aria-label="Notifications" aria-haspopup="dialog" aria-expanded="false" title="Notifications">' +
      '<i class="ti ti-bell"></i><span class="notif-bell-badge d-none" id="notifBadge">0</span>' +
    '</button>' +
    '<div class="notif-panel d-none" id="notifPanel" role="dialog" aria-label="Notifications">' +
      '<div class="d-flex justify-content-between align-items-center mb-2 gap-2">' +
        '<div class="d-flex align-items-center gap-2"><div style="font-weight:600;font-size:14px;">Notifications</div>' +
          '<span class="live-pill" title="Updates automatically"><span class="live-dot"></span>Live</span></div>' +
        '<button type="button" class="btn-ghost-icon notif-markall-btn d-none" id="notifMarkAllBtn">Mark all as read</button>' +
      '</div>' +
      '<div class="bill-meta mb-2" id="notifUnreadSummary"></div>' +
      '<div id="notifList" class="notif-scroll"></div>' +
    '</div>';
  actions.insertBefore(wrap, actions.firstChild);

  var btn = document.getElementById("notifBellBtn");
  var panelEl = document.getElementById("notifPanel");
  var api = initDashboardNotifications();
  if (!api) return;
  api.render();

  function setOpen(open) {
    panelEl.classList.toggle("d-none", !open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) api.render();
  }
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(panelEl.classList.contains("d-none"));
  });
  document.addEventListener("click", function (e) {
    if (!panelEl.classList.contains("d-none") && !wrap.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panelEl.classList.contains("d-none")) { setOpen(false); btn.focus(); }
  });

  // Live updates: same page changes, every 30s, tab focus, and other tabs.
  document.addEventListener("billtrack:data-changed", api.render);
  setInterval(api.render, 30000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) api.render(); });
  window.addEventListener("storage", function (e) { if (!e.key || e.key.indexOf("billtrack_") === 0) api.render(); });
}


var LS_SIDEBAR_COLLAPSED = "billtrack_sidebar_collapsed_v1";

function initSidebar() {
  var toggleBtn = document.getElementById("sidebarToggle");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("sidebarBackdrop");
  if (!toggleBtn || !sidebar || !backdrop) return;

  var root = document.documentElement;
  var mobileQuery = window.matchMedia("(max-width: 991.98px)");

  function isCollapsed() { return root.classList.contains("sidebar-collapsed"); }
  function syncAria() {
    var visible = mobileQuery.matches ? sidebar.classList.contains("open") : !isCollapsed();
    toggleBtn.setAttribute("aria-expanded", visible ? "true" : "false");
  }
  function closeMobile() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
    syncAria();
  }

  toggleBtn.addEventListener("click", function () {
    if (mobileQuery.matches) {
      var willOpen = !sidebar.classList.contains("open");
      sidebar.classList.toggle("open", willOpen);
      backdrop.classList.toggle("open", willOpen);
    } else {
      var collapsed = root.classList.toggle("sidebar-collapsed");
      try { localStorage.setItem(LS_SIDEBAR_COLLAPSED, collapsed ? "1" : "0"); } catch (e) {}
    }
    syncAria();
  });

  backdrop.addEventListener("click", closeMobile);
  sidebar.querySelectorAll("a.nav-item-link").forEach(function (a) {
    a.addEventListener("click", function () { if (mobileQuery.matches) closeMobile(); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileQuery.matches && sidebar.classList.contains("open")) closeMobile();
  });

  var onBreakpointChange = function () {
    closeMobile();
    var saved = null;
    try { saved = localStorage.getItem(LS_SIDEBAR_COLLAPSED); } catch (e) {}
    root.classList.toggle("sidebar-collapsed", !mobileQuery.matches && saved === "1");
    syncAria();
  };
  if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", onBreakpointChange);
  else if (mobileQuery.addListener) mobileQuery.addListener(onBreakpointChange);

  syncAria();
}

var LS_CALC = "billtrack_calc_v1";

function ensureCalcWidget() {
  if (document.getElementById("calcWidget")) return document.getElementById("calcWidget");
  if (!document.getElementById("sidebar")) return null; 

  var el = document.createElement("div");
  el.className = "calc-widget d-none";
  el.id = "calcWidget";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-label", "Calculator");
  el.innerHTML =
    '<div class="calc-widget-header" id="calcWidgetHandle">' +
      '<div class="calc-widget-title"><i class="ti ti-calculator"></i> Calculator</div>' +
      '<div class="calc-widget-actions">' +
        '<button type="button" class="calc-widget-btn" id="calcMinBtn" aria-label="Minimize calculator"><i class="ti ti-minus"></i></button>' +
        '<button type="button" class="calc-widget-btn" id="calcCloseBtn" aria-label="Close calculator"><i class="ti ti-x"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="calc-widget-body" id="calcWidgetBody">' +
      '<div class="range-toggle mb-3">' +
        '<button type="button" data-calc-tab="arithmetic" class="active">Arithmetic</button>' +
        '<button type="button" data-calc-tab="budget">Budget</button>' +
      '</div>' +
      '<div id="calcArithmeticPanel">' +
        '<div class="calc-display" id="calcDisplay">0</div>' +
        '<div class="calc-keypad">' +
          [
            ["C", "C", "calc-key-clear"], ["back", "\u232B", ""], ["%", "%", ""], ["/", "\u00F7", "calc-key-op"],
            ["7", "7", ""], ["8", "8", ""], ["9", "9", ""], ["*", "\u00D7", "calc-key-op"],
            ["4", "4", ""], ["5", "5", ""], ["6", "6", ""], ["-", "\u2212", "calc-key-op"],
            ["1", "1", ""], ["2", "2", ""], ["3", "3", ""], ["+", "+", "calc-key-op"],
            ["0", "0", ""], [".", ".", ""]
          ].map(function (k) {
            return '<button type="button" class="calc-key ' + k[2] + '" data-calc-key="' + k[0] + '">' + k[1] + '</button>';
          }).join("") +
          '<button type="button" class="calc-key calc-key-equals" data-calc-key="=" style="grid-column: span 2;">=</button>' +
        '</div>' +
      '</div>' +
      '<div id="calcBudgetPanel" class="d-none">' +
        '<p class="page-subtext" style="margin-top:0;">Estimate what\'s left after your bills for the month.</p>' +
        '<div class="mb-3"><label class="form-label" for="calcIncome">Monthly budget (\u20B1)</label>' +
          '<input type="number" class="form-control" id="calcIncome" data-money min="0" step="0.01" inputmode="decimal" placeholder="e.g. 25000"></div>' +
        '<div class="mb-3"><label class="form-label" for="calcExpenses">Current bills total (\u20B1)</label>' +
          '<input type="number" class="form-control" id="calcExpenses" data-money min="0" step="0.01" readonly></div>' +
        '<button type="button" class="btn btn-navy w-100" id="calcButton">Calculate</button>' +
        '<div class="calc-result-box mt-3 d-none" id="calcResultBox">' +
          '<div class="calc-result-label">Remaining after bills</div>' +
          '<div class="calc-result-value" id="calcRemaining">\u20B10.00</div>' +
          '<span class="status-pill mt-2" id="calcStatus"></span>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(el);
  return el;
}

function initCalcWidget() {
  var widget = ensureCalcWidget();
  if (!widget) return;
  var handle = document.getElementById("calcWidgetHandle");
  var minBtn = document.getElementById("calcMinBtn");
  var closeBtn = document.getElementById("calcCloseBtn");
  var triggers = document.querySelectorAll("[data-calc-toggle]");

  var state = safeParse((function () { try { return localStorage.getItem(LS_CALC); } catch (e) { return null; } })(), {});

  function save() {
    try { localStorage.setItem(LS_CALC, JSON.stringify(state)); } catch (e) {}
  }
  function clampToScreen() {
    var maxX = Math.max(0, window.innerWidth - widget.offsetWidth);
    var maxY = Math.max(0, window.innerHeight - widget.offsetHeight);
    var x = Math.min(Math.max(0, widget.offsetLeft), maxX);
    var y = Math.min(Math.max(0, widget.offsetTop), maxY);
    widget.style.left = x + "px";
    widget.style.top = y + "px";
    state.x = x; state.y = y;
  }
  function place() {
    if (typeof state.x === "number" && typeof state.y === "number") {
      widget.style.left = state.x + "px";
      widget.style.top = state.y + "px";
    } else {
      widget.style.left = Math.max(8, window.innerWidth - widget.offsetWidth - 16) + "px";
      widget.style.top = Math.max(8, window.innerHeight - widget.offsetHeight - 16) + "px";
    }
    clampToScreen();
  }
  function setMinimized(min) {
    state.min = !!min;
    widget.classList.toggle("minimized", state.min);
    minBtn.setAttribute("aria-label", state.min ? "Expand calculator" : "Minimize calculator");
    if (widget.offsetParent !== null) clampToScreen();
    save();
  }
  function openCalc() {
    widget.classList.remove("d-none");
    state.open = true;
    place();
    setMinimized(state.min);
    document.dispatchEvent(new Event("billtrack:calc-open"));
    save();
  }
  function closeCalc() {
    widget.classList.add("d-none");
    state.open = false;
    save();
  }
  function toggleCalc() {
    if (widget.classList.contains("d-none")) openCalc(); else closeCalc();
    triggers.forEach(function (t) { t.setAttribute("aria-pressed", widget.classList.contains("d-none") ? "false" : "true"); });
  }

  triggers.forEach(function (t) {
    t.addEventListener("click", function () {
      toggleCalc();
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        var sb = document.getElementById("sidebar"), bd = document.getElementById("sidebarBackdrop");
        if (sb) sb.classList.remove("open");
        if (bd) bd.classList.remove("open");
      }
    });
  });
  closeBtn.addEventListener("click", function () {
    closeCalc();
    triggers.forEach(function (t) { t.setAttribute("aria-pressed", "false"); });
  });
  minBtn.addEventListener("click", function () { setMinimized(!state.min); });

  
  var dragging = false, offX = 0, offY = 0;
  handle.addEventListener("pointerdown", function (e) {
    if (e.target.closest("button")) return;
    dragging = true;
    offX = e.clientX - widget.offsetLeft;
    offY = e.clientY - widget.offsetTop;
    widget.classList.add("dragging");
    try { handle.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  handle.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var x = Math.min(Math.max(0, e.clientX - offX), Math.max(0, window.innerWidth - widget.offsetWidth));
    var y = Math.min(Math.max(0, e.clientY - offY), Math.max(0, window.innerHeight - widget.offsetHeight));
    widget.style.left = x + "px";
    widget.style.top = y + "px";
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    widget.classList.remove("dragging");
    clampToScreen();
    save();
  }
  handle.addEventListener("pointerup", endDrag);
  handle.addEventListener("pointercancel", endDrag);
  window.addEventListener("resize", function () { if (!widget.classList.contains("d-none")) clampToScreen(); });

  if (state.open) {
    openCalc();
    triggers.forEach(function (t) { t.setAttribute("aria-pressed", "true"); });
  }
}

function initBudgetCalculator() {
  initCalcWidget();
  initCalcTabs();
  initBudgetTab();
  initArithmeticTab();
}

function initCalcTabs() {
  var tabButtons = document.querySelectorAll("[data-calc-tab]");
  if (!tabButtons.length) return;
  var panels = { budget: document.getElementById("calcBudgetPanel"), arithmetic: document.getElementById("calcArithmeticPanel") };
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var target = btn.getAttribute("data-calc-tab");
      Object.keys(panels).forEach(function (key) {
        if (!panels[key]) return;
        panels[key].classList.toggle("d-none", key !== target);
      });
    });
  });
}

function initBudgetTab() {
  var calcBtn = document.getElementById("calcButton");
  if (!calcBtn) return;

  var incomeInput = document.getElementById("calcIncome"); 
  var expensesInput = document.getElementById("calcExpenses"); 
  var resultBox = document.getElementById("calcResultBox");
  var resultRemaining = document.getElementById("calcRemaining");
  var resultStatus = document.getElementById("calcStatus");

  var calcDraft = createFormDraft("calc-budget", ["calcIncome"]);
  function prefill() {
    if (!calcDraft.has()) incomeInput.value = toMoneyInputValue(getBudget());
    expensesInput.value = toMoneyInputValue(getTotalExpenses());
  }
  prefill();
  calcDraft.restore();
  calcDraft.watch();
  document.addEventListener("billtrack:calc-open", prefill);

  calcBtn.addEventListener("click", function () {
    var income = parseFloat(incomeInput.value);
    if (isNaN(income) || income <= 0) { incomeInput.focus(); return; }
    setBudget(income);
    calcDraft.clear();

    var expenses = getTotalExpenses();
    var remaining = income - expenses;
    var ratio = remaining / income;

    resultBox.classList.remove("d-none");
    resultRemaining.textContent = formatCurrency2(remaining);
    resultRemaining.style.color = remaining < 0 ? "var(--danger)" : "var(--success)";

    if (remaining < 0) {
      resultStatus.textContent = "Over budget \u2014 expenses exceed budget.";
      resultStatus.className = "status-pill status-overdue mt-2";
    } else if (ratio < 0.15) {
      resultStatus.textContent = "Tight budget \u2014 less than 15% left over.";
      resultStatus.className = "status-pill status-upcoming mt-2";
    } else {
      resultStatus.textContent = "Healthy budget.";
      resultStatus.className = "status-pill status-paid mt-2";
    }
    if (document.getElementById("metricBudgetStatus")) initDashboard();
  });
}


function evaluateArithmetic(expr) {
  var tokens = String(expr).match(/\d+\.?\d*|\.\d+|[+\-*/%]/g);
  if (!tokens || !tokens.length) return null;

  var pos = 0;
  function peek() { return tokens[pos]; }
  function next() { return tokens[pos++]; }
  function isOp(t) { return t === "+" || t === "-" || t === "*" || t === "/" || t === "%"; }

  function parseNumber() {
    var t = next();
    if (t === undefined || isOp(t)) return null;
    var n = parseFloat(t);
    return isNaN(n) ? null : n;
  }
  function parseTerm() {
    var value = parseNumber();
    if (value === null) return null;
    while (peek() === "*" || peek() === "/" || peek() === "%") {
      var op = next();
      var rhs = parseNumber();
      if (rhs === null) return null;
      if (op === "*") value = value * rhs;
      else if (op === "/") { if (rhs === 0) return null; value = value / rhs; }
      else value = value % rhs;
    }
    return value;
  }
  function parseExpression() {
    var value = parseTerm();
    if (value === null) return null;
    while (peek() === "+" || peek() === "-") {
      var op = next();
      var rhs = parseTerm();
      if (rhs === null) return null;
      value = op === "+" ? value + rhs : value - rhs;
    }
    return value;
  }

  var result = parseExpression();
  if (result === null || pos !== tokens.length || !isFinite(result)) return null;
  return result;
}

function initArithmeticTab() {
  var display = document.getElementById("calcDisplay");
  var keys = document.querySelectorAll("[data-calc-key]");
  if (!display || !keys.length) return;
  var expression = "";
  function render() { display.textContent = expression || "0"; }
  function safeEvaluate(expr) {
    if (!/^[0-9+\-*/.%\s]+$/.test(expr)) return null;
    return evaluateArithmetic(expr);
  }
  function press(value) {
    if (value === "C") { expression = ""; }
    else if (value === "back") { expression = expression === "Error" ? "" : expression.slice(0, -1); }
    else if (value === "=") {
      if (!expression) return;
      var result = safeEvaluate(expression);
      expression = result === null ? "Error" : String(Math.round(result * 100) / 100);
    } else {
      if (expression === "Error") expression = "";
      expression += value;
    }
    render();
  }
  keys.forEach(function (key) {
    key.addEventListener("click", function () { press(key.getAttribute("data-calc-key")); });
  });

  // Keyboard support while the calculator window is open (laptops / iPad keyboards)
  var widget = document.getElementById("calcWidget");
  var arithmeticPanel = document.getElementById("calcArithmeticPanel");
  document.addEventListener("keydown", function (e) {
    if (!widget || widget.classList.contains("d-none") || widget.classList.contains("minimized")) return;
    if (arithmeticPanel && arithmeticPanel.classList.contains("d-none")) return;
    var tag = (e.target && e.target.tagName) || "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (!widget.contains(e.target) && document.querySelector(".modal.show")) return;
    if (!widget.contains(e.target) && document.activeElement && document.activeElement !== document.body) return;
    var k = e.key;
    if (/^[0-9.]$/.test(k) || /^[+\-*/%]$/.test(k)) { press(k); e.preventDefault(); }
    else if (k === "Enter" || k === "=") { press("="); e.preventDefault(); }
    else if (k === "Backspace") { press("back"); e.preventDefault(); }
    else if (k === "Delete") { press("C"); e.preventDefault(); }
  });
  render();
}



function initBudgetPage() {
  var form = document.getElementById("budgetForm");
  if (!form) return;

  var input = document.getElementById("budgetAmountInput");
  var progressBar = document.getElementById("budgetProgressBar");
  var progressLabel = document.getElementById("budgetProgressLabel");
  var elBudget = document.getElementById("budgetMetricBudget");
  var elBills = document.getElementById("budgetMetricBills");
  var elPaid = document.getElementById("budgetMetricPaid");
  var elRemaining = document.getElementById("budgetMetricRemaining");
  var warningBox = document.getElementById("budgetWarning");
  var draft = createFormDraft("budget", ["budgetAmountInput"]);

  function render() {
    var status = getBudgetStatus(); 
    var currentYm = todayStr().slice(0, 7);
    var paidThisMonth = getPaymentHistory()
      .filter(function (p) { return p.paymentDate.slice(0, 7) === currentYm; })
      .reduce(function (sum, p) { return sum + (parseFloat(p.amount) || 0); }, 0);

    if (document.activeElement !== input && !draft.has()) input.value = toMoneyInputValue(status.budget);
    elBudget.textContent = formatCurrency(status.budget);
    elBills.textContent = formatCurrency(status.expenses);
    elPaid.textContent = formatCurrency(paidThisMonth);
    elRemaining.textContent = formatCurrency2(status.remaining);
    elRemaining.style.color = status.remaining < 0 ? "var(--danger)" : "var(--success)";

    var pct = status.budget > 0 ? Math.min(999, (status.expenses / status.budget) * 100) : 0;
    var pctClamped = Math.min(100, pct);
    progressBar.style.width = pctClamped + "%";
    progressBar.className = "budget-progress-fill " + (pct >= 100 ? "bar-danger" : (pct >= 85 ? "bar-warning" : "bar-success"));
    progressLabel.textContent = formatCurrency(status.expenses) + " / " + formatCurrency(status.budget) + " \u00B7 " + Math.round(pct) + "% used";

    if (pct >= 100) {
      warningBox.innerHTML = '<i class="ti ti-alert-triangle"></i> Your bills already exceed your monthly budget.';
      warningBox.className = "budget-warning warning-danger";
      warningBox.classList.remove("d-none");
    } else if (pct >= 85) {
      warningBox.innerHTML = '<i class="ti ti-alert-triangle"></i> You\u2019re close to your monthly budget \u2014 ' + Math.round(100 - pct) + "% left.";
      warningBox.className = "budget-warning warning-amber";
      warningBox.classList.remove("d-none");
    } else {
      warningBox.classList.add("d-none");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var amount = parseFloat(input.value);
    if (isNaN(amount) || amount <= 0) { showToast("Please enter a valid monthly budget.", "error"); return; }
    setBudget(amount);
    draft.clear();
    input.value = toMoneyInputValue(amount);
    render();
    showToast("Budget updated successfully");
  });

  render();
  draft.restore();
  draft.watch();
  document.addEventListener("billtrack:data-changed", render);
  window.addEventListener("storage", function (e) { if (!e.key || e.key.indexOf("billtrack_") === 0) render(); });
  document.addEventListener("visibilitychange", function () { if (!document.hidden) render(); });
  setInterval(render, 30000);
}



function initGmailIntegrationPage() {
  var statusEl = document.getElementById("gmailIntegrationStatus");
  var emailEl = document.getElementById("gmailIntegrationEmail");
  var connectBtn = document.getElementById("gmailConnectBtn");
  var disconnectBtn = document.getElementById("gmailDisconnectBtn");
  var connectedEmailEl = document.getElementById("gmailConnectedEmail");
  if (!statusEl || !connectBtn) return;

  function render() {
    var integration = getGmailIntegration();
    var user = getCurrentUser();
    var email = integration.email || (user ? user.email : "");
    if (emailEl) emailEl.value = email;
    if (integration.connected) {
      statusEl.textContent = "Connected";
      connectBtn.textContent = "Connected";
      connectBtn.disabled = true;
      if (connectedEmailEl) {
        connectedEmailEl.textContent = email;
        connectedEmailEl.classList.remove("d-none");
      }
      if (disconnectBtn) disconnectBtn.classList.remove("d-none");
    } else {
      statusEl.textContent = "Not connected";
      connectBtn.textContent = "Connect";
      connectBtn.disabled = false;
      if (connectedEmailEl) connectedEmailEl.classList.add("d-none");
      if (disconnectBtn) disconnectBtn.classList.add("d-none");
    }
  }

  connectBtn.addEventListener("click", function () {
    var email = (emailEl ? emailEl.value : "").trim();
    if (!isValidEmail(email)) {
      showToast("Your account email is not valid.", "error");
      return;
    }
    connectGmailDemo(email);
    render();
    showToast("Google account connected.");
  });
  if (disconnectBtn) disconnectBtn.addEventListener("click", function () {
    disconnectGmail();
    render();
    showToast("Google account disconnected.");
  });
  render();
}

function initPaymentsPage() {
  var list = document.getElementById("paymentsList");
  if (!list) return;

  var searchInput = document.getElementById("paymentSearch");
  var sortSelect = document.getElementById("paymentSort");
  var totalPaidEl = document.getElementById("paymentTotalPaid");
  var monthPaidEl = document.getElementById("paymentMonthPaid");
  var weekPaidEl = document.getElementById("paymentWeekPaid");
  var dayPaidEl = document.getElementById("paymentDayPaid");

  function weekStartOf(dateStr) {
    var d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); 
    return toLocalYmd(d);
  }
  function sumPayments(rows) {
    return rows.reduce(function (sum, p) { return sum + (parseFloat(p.amount) || 0); }, 0);
  }

  function render() {
    var q = (searchInput ? searchInput.value.trim().toLowerCase() : "");
    var sort = sortSelect ? sortSelect.value : "date-desc";

    var history = getPaymentHistory().filter(function (p) {
      return !q || p.provider.toLowerCase().indexOf(q) !== -1;
    });

    history.sort(function (a, b) {
      switch (sort) {
        case "date-asc": return a.paymentDate < b.paymentDate ? -1 : 1;
        case "amount-desc": return b.amount - a.amount;
        case "amount-asc": return a.amount - b.amount;
        case "date-desc":
        default: return a.paymentDate < b.paymentDate ? 1 : -1;
      }
    });

    var allHistory = getPaymentHistory();
    var today = todayStr();
    var currentYm = today.slice(0, 7);
    var weekStart = weekStartOf(today);
    var weekEnd = addDays(weekStart, 6);

    if (totalPaidEl) totalPaidEl.textContent = formatCurrency(sumPayments(allHistory));
    if (monthPaidEl) monthPaidEl.textContent = formatCurrency(sumPayments(allHistory.filter(function (p) { return p.paymentDate.slice(0, 7) === currentYm; })));
    if (weekPaidEl) weekPaidEl.textContent = formatCurrency(sumPayments(allHistory.filter(function (p) { return p.paymentDate >= weekStart && p.paymentDate <= weekEnd; })));
    if (dayPaidEl) dayPaidEl.textContent = formatCurrency(sumPayments(allHistory.filter(function (p) { return p.paymentDate === today; })));

    if (!history.length) {
      list.innerHTML = '<div class="empty-state">' +
        (allHistory.length ? "No payments found.<br>Try a different search or filter." : "No payment history yet.<br>Payments appear here once you mark a bill as paid.") +
        "</div>";
      return;
    }

    var billsById = {};
    getBills().forEach(function (b) { billsById[b.id] = b; });
    list.innerHTML = history.map(function (p) {
      var added = p.dateAdded || (billsById[p.billId] ? billDateAdded(billsById[p.billId]) : "");
      return '<div class="bill-row flex-wrap">' +
        '<div style="min-width:150px;"><div class="bill-provider">' + escapeHtml(p.provider) + '</div>' +
        (added ? '<div class="bill-meta">Added: ' + formatDateFull(added) + '</div>' : '') + '</div>' +
        '<div style="min-width:100px;">' + formatCurrency2(p.amount) + '</div>' +
        '<div class="bill-meta" style="min-width:120px;">Paid ' + formatDateShort(p.paymentDate) + '</div>' +
        '<div class="bill-meta" style="min-width:130px;">' + (p.dueDate ? ('Due date: ' + formatDateShort(p.dueDate)) : '') + '</div>' +
        "</div>";
    }).join("");
  }

  if (searchInput) searchInput.addEventListener("input", render);
  if (sortSelect) sortSelect.addEventListener("change", render);

  render();
  document.addEventListener("billtrack:data-changed", render);
  window.addEventListener("storage", function (e) { if (!e.key || e.key.indexOf("billtrack_") === 0) render(); });
  document.addEventListener("visibilitychange", function () { if (!document.hidden) render(); });
  setInterval(render, 30000);
}



document.addEventListener("DOMContentLoaded", function () {
  hydrateStaticIcons();
  if (typeof requireAuth === "function" && !requireAuth()) return;

  if (typeof initSidebarUser === "function") initSidebarUser();

  initSidebar();
  initTopbarNotifications();
  initDashboard();
  initForecastingPage();
  initBillsPage();
  initRemindersPage();
  initBudgetCalculator();
  initBudgetPage();
  initPaymentsPage();
  initGmailIntegrationPage();
});
