
var LS_USERS = "billtrack_users_v1";
var SESSION_KEY = "billtrack_session_v1";
var SESSION_EXPIRED_FLAG = "billtrack_session_expired_v1";
var HASH_ROUNDS = 1500;
var SESSION_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; 



function bufferToHex(buffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), function (b) {
    return b.toString(16).padStart(2, "0");
  }).join("");
}

function randomSaltHex() {
  var arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return bufferToHex(arr.buffer);
}

async function sha256Hex(text) {
  var data = new TextEncoder().encode(text);
  var digest = await crypto.subtle.digest("SHA-256", data);
  return bufferToHex(digest);
}

async function hashPassword(password, saltHex) {
  var value = saltHex + ":" + password;
  for (var i = 0; i < HASH_ROUNDS; i++) {
    value = await sha256Hex(value);
  }
  return value;
}



function getUsers() {
  return safeParse(localStorage.getItem(LS_USERS), []);
}
function saveUsers(users) {
  try {
    localStorage.setItem(LS_USERS, JSON.stringify(users));
  } catch (e) {
    console.error("BillTrack: could not save account data.");
  }
}
function findUserByIdentifier(identifier) {
  identifier = (identifier || "").trim().toLowerCase();
  return getUsers().find(function (u) {
    return u.username.toLowerCase() === identifier || u.email.toLowerCase() === identifier;
  });
}
function usernameOrEmailTaken(username, email, excludeUserId) {
  var users = getUsers();
  var u = (username || "").trim().toLowerCase();
  var e = (email || "").trim().toLowerCase();
  return users.some(function (x) {
    if (excludeUserId && x.id === excludeUserId) return false;
    return x.username.toLowerCase() === u || x.email.toLowerCase() === e;
  });
}



function setSession(user, remember) {
  var session = { userId: user.id, username: user.username, fullName: user.fullName, email: user.email, issuedAt: nowIso() };
  var json = JSON.stringify(session);
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  if (remember) {
    localStorage.setItem(SESSION_KEY, json);
  } else {
    sessionStorage.setItem(SESSION_KEY, json);
  }
}

function getSession() {
  var rememberedRaw = localStorage.getItem(SESSION_KEY);
  var raw = rememberedRaw || sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  var session = safeParse(raw, null);
  if (!session) return null;

  if (rememberedRaw && session.issuedAt) {
    var ageMs = Date.now() - new Date(session.issuedAt).getTime();
    if (ageMs > SESSION_MAX_AGE_MS) {
      clearSession();
      try { sessionStorage.setItem(SESSION_EXPIRED_FLAG, "1"); } catch (e) {  }
      return null;
    }
  }
  return session;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

function getCurrentUser() {
  var session = getSession();
  if (!session) return null;
  var user = getUsers().find(function (u) { return u.id === session.userId; });
  return user || null;
}
function getCurrentUserId() {
  var session = getSession();
  return session ? session.userId : null;
}



function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}
function isValidUsername(username) {
  return /^[a-zA-Z0-9_.]{3,20}$/.test(username || "");
}



async function registerUser(data) {
  var errors = [];
  var fullName = (data.fullName || "").trim();
  var username = (data.username || "").trim();
  var email = (data.email || "").trim();
  var password = data.password || "";
  var confirmPassword = data.confirmPassword || "";

  if (!fullName) errors.push("Full name is required.");
  if (!isValidUsername(username)) errors.push("Username must be 3–20 characters (letters, numbers, underscore, dot).");
  if (!isValidEmail(email)) errors.push("Please enter a valid email address.");
  if (password.length < 8) errors.push("Password must be at least 8 characters long.");
  if (password !== confirmPassword) errors.push("Passwords do not match.");
  if (!errors.length && usernameOrEmailTaken(username, email)) errors.push("That username or email is already registered.");

  if (errors.length) return { ok: false, errors: errors };

  var salt = randomSaltHex();
  var passwordHash = await hashPassword(password, salt);

  var user = {
    id: genId("user"),
    fullName: fullName,
    username: username,
    email: email,
    salt: salt,
    passwordHash: passwordHash,
    createdAt: nowIso()
  };

  var users = getUsers();
  users.push(user);
  saveUsers(users);

  return { ok: true, user: user };
}

async function loginUser(identifier, password, remember) {
  identifier = (identifier || "").trim();
  password = password || "";
  if (!identifier || !password) {
    return { ok: false, error: "Please enter your email/username and password." };
  }
  var user = findUserByIdentifier(identifier);
  if (!user) {
    return { ok: false, error: "No account matches that email or username." };
  }
  var attemptHash = await hashPassword(password, user.salt);
  if (attemptHash !== user.passwordHash) {
    return { ok: false, error: "Incorrect password. Please try again." };
  }
  setSession(user, !!remember);
  return { ok: true, user: user };
}

function logoutUser() {
  clearSession();
  window.location.replace("login.html");
}



function updateProfile(userId, updates) {
  var errors = [];
  var fullName = (updates.fullName || "").trim();
  var username = (updates.username || "").trim();
  var email = (updates.email || "").trim();

  if (!fullName) errors.push("Full name is required.");
  if (!isValidUsername(username)) errors.push("Username must be 3–20 characters (letters, numbers, underscore, dot).");
  if (!isValidEmail(email)) errors.push("Please enter a valid email address.");
  if (!errors.length && usernameOrEmailTaken(username, email, userId)) errors.push("That username or email is already in use by another account.");
  if (errors.length) return { ok: false, errors: errors };

  var users = getUsers();
  var idx = users.findIndex(function (u) { return u.id === userId; });
  if (idx === -1) return { ok: false, errors: ["Account not found."] };

  users[idx] = Object.assign({}, users[idx], { fullName: fullName, username: username, email: email });
  saveUsers(users);
  var session = getSession();
  if (session && session.userId === userId) {
    var remembered = !!localStorage.getItem(SESSION_KEY);
    setSession(users[idx], remembered);
  }
  return { ok: true, user: users[idx] };
}

async function changePassword(userId, currentPassword, newPassword, confirmNewPassword) {
  var errors = [];
  if (newPassword.length < 8) errors.push("New password must be at least 8 characters long.");
  if (newPassword !== confirmNewPassword) errors.push("New passwords do not match.");
  if (errors.length) return { ok: false, errors: errors };

  var users = getUsers();
  var idx = users.findIndex(function (u) { return u.id === userId; });
  if (idx === -1) return { ok: false, errors: ["Account not found."] };

  var user = users[idx];
  var currentHash = await hashPassword(currentPassword, user.salt);
  if (currentHash !== user.passwordHash) return { ok: false, errors: ["Current password is incorrect."] };

  var newSalt = randomSaltHex();
  var newHash = await hashPassword(newPassword, newSalt);
  users[idx] = Object.assign({}, user, { salt: newSalt, passwordHash: newHash });
  saveUsers(users);
  return { ok: true };
}



function requireAuth() {
  if (!getSession()) {
    window.location.replace("login.html");
    return null;
  }
  return getCurrentUser();
}



function initSidebarUser() {
  var user = getCurrentUser();
  if (!user) return;
  var nameEl = document.getElementById("sidebarUserName");
  var avatarEl = document.getElementById("sidebarUserAvatar");
  var logoutBtn = document.getElementById("sidebarLogoutBtn");
  if (nameEl) nameEl.textContent = user.fullName;
  if (avatarEl) avatarEl.textContent = (user.fullName || "?").trim().charAt(0).toUpperCase();
  if (logoutBtn && !logoutBtn.dataset.wired) {
    logoutBtn.dataset.wired = "1";
    logoutBtn.addEventListener("click", function () {
      confirmDialog({
        title: "Log out?",
        message: "You'll need to log in again to access your bills.",
        confirmText: "Logout",
        danger: false,
        onConfirm: function () {
          showToast("Logged out successfully");
          setTimeout(logoutUser, 400);
        }
      });
    });
  }
}



function initLoginPage() {
  var form = document.getElementById("loginForm");
  if (!form) return;
  if (getSession()) { window.location.replace("index.html"); return; }

  var identifierInput = document.getElementById("loginIdentifier");
  var passwordInput = document.getElementById("loginPassword");
  var rememberInput = document.getElementById("loginRemember");
  var errorBox = document.getElementById("loginError");
  var infoBox = document.getElementById("loginInfo");
  var submitBtn = document.getElementById("loginSubmit");

  if (infoBox && sessionStorage.getItem(SESSION_EXPIRED_FLAG)) {
    sessionStorage.removeItem(SESSION_EXPIRED_FLAG);
    infoBox.textContent = "You were logged out after 30 days for your security. Please log in again.";
    infoBox.classList.remove("d-none");
  }

  initPasswordToggle(document.getElementById("loginPasswordToggle"), passwordInput);

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorBox.classList.add("d-none");
    submitBtn.disabled = true;
    submitBtn.textContent = "Logging in…";

    var result = await loginUser(identifierInput.value, passwordInput.value, rememberInput.checked);

    submitBtn.disabled = false;
    submitBtn.textContent = "Log in";

    if (!result.ok) {
      errorBox.textContent = result.error;
      errorBox.classList.remove("d-none");
      return;
    }
    window.location.href = "index.html";
  });
}



function initSignupPage() {
  var form = document.getElementById("signupForm");
  if (!form) return;

  if (getSession()) { window.location.replace("index.html"); return; }

  var fullNameInput = document.getElementById("signupFullName");
  var usernameInput = document.getElementById("signupUsername");
  var emailInput = document.getElementById("signupEmail");
  var passwordInput = document.getElementById("signupPassword");
  var confirmInput = document.getElementById("signupConfirmPassword");
  var errorBox = document.getElementById("signupError");
  var submitBtn = document.getElementById("signupSubmit");

  initPasswordToggle(document.getElementById("signupPasswordToggle"), passwordInput);
  initPasswordToggle(document.getElementById("signupConfirmToggle"), confirmInput);
  initPasswordStrengthMeter(passwordInput, document.getElementById("signupStrengthMeter"), document.getElementById("signupStrengthLabel"));

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorBox.classList.add("d-none");
    submitBtn.disabled = true;
    submitBtn.textContent = "Creating account…";

    var result = await registerUser({
      fullName: fullNameInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmInput.value
    });

    submitBtn.disabled = false;
    submitBtn.textContent = "Create account";

    if (!result.ok) {
      errorBox.innerHTML = result.errors.map(function (e) { return escapeHtml(e); }).join("<br>");
      errorBox.classList.remove("d-none");
      return;
    }

    await loginUser(usernameInput.value, passwordInput.value, true);
    window.location.href = "index.html?welcome=1";
  });
}



function initProfilePage() {
  var infoForm = document.getElementById("profileInfoForm");
  if (!infoForm) return;

  var user = requireAuth();
  if (!user) return;
  initSidebarUser();

  var nameInput = document.getElementById("profileFullName");
  var usernameInput = document.getElementById("profileUsername");
  var emailInput = document.getElementById("profileEmail");
  var infoError = document.getElementById("profileInfoError");
  var avatarBig = document.getElementById("profileAvatarBig");
  var memberSince = document.getElementById("profileMemberSince");

  function fillDisplay() {
    nameInput.value = user.fullName;
    usernameInput.value = user.username;
    emailInput.value = user.email;
    if (avatarBig) avatarBig.textContent = (user.fullName || "?").trim().charAt(0).toUpperCase();
    if (memberSince) memberSince.textContent = "Member since " + formatDateLong(user.createdAt.slice(0, 10));
  }
  fillDisplay();

  // Keep unsaved profile edits (not passwords) when navigating away and back.
  var profileDraft = createFormDraft("profile", ["profileFullName", "profileUsername", "profileEmail"]);
  profileDraft.restore();
  profileDraft.watch();

  infoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    infoError.classList.add("d-none");
    var result = updateProfile(user.id, {
      fullName: nameInput.value,
      username: usernameInput.value,
      email: emailInput.value
    });
    if (!result.ok) {
      infoError.innerHTML = result.errors.map(function (er) { return escapeHtml(er); }).join("<br>");
      infoError.classList.remove("d-none");
      return;
    }
    user = result.user;
    profileDraft.clear();
    fillDisplay();
    initSidebarUser();
    showToast("Profile updated successfully");
  });

  var pwForm = document.getElementById("profilePasswordForm");
  if (pwForm) {
    var currentPw = document.getElementById("profileCurrentPassword");
    var newPw = document.getElementById("profileNewPassword");
    var confirmPw = document.getElementById("profileConfirmPassword");
    var pwError = document.getElementById("profilePasswordError");

    initPasswordToggle(document.getElementById("profileCurrentToggle"), currentPw);
    initPasswordToggle(document.getElementById("profileNewToggle"), newPw);
    initPasswordStrengthMeter(newPw, document.getElementById("profileStrengthMeter"), document.getElementById("profileStrengthLabel"));

    pwForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      pwError.classList.add("d-none");
      var result = await changePassword(user.id, currentPw.value, newPw.value, confirmPw.value);
      if (!result.ok) {
        pwError.innerHTML = result.errors.map(function (er) { return escapeHtml(er); }).join("<br>");
        pwError.classList.remove("d-none");
        return;
      }
      pwForm.reset();
      showToast("Password changed successfully");
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initLoginPage();
  initSignupPage();
  initSidebarUser();
  initProfilePage();
});
