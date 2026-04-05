// ============================================================
// AUTH MODAL
// ============================================================
function openModal() {
  document.getElementById('authModal').classList.add('show');
}

function closeModal() {
  document.getElementById('authModal').classList.remove('show');
}

function switchAuthTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('registerTab').classList.toggle('active', tab === 'register');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('modalTitle').textContent = tab === 'login' ? 'Welcome back' : 'Create account';
  document.getElementById('modalSubtitle').textContent = tab === 'login' ? 'Sign in to save history' : 'Get started for free';
}

async function doLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!username || !password) { showToast('Please fill all fields', 'error'); return; }

  const btn = document.getElementById('loginBtn');
  setLoading(btn, true);
  try {
    const data = await apiFetch('/users/login', 'POST', { Username: username, Password: password });
    saveAuth(data);
    renderUserPanel(); updateAuthTag(); closeModal();
    showToast('Welcome back, ' + data.Username + '!', 'success');
    renderHistoryPage();
  } catch(err) {
    showToast(err.message, 'error');
  } finally { setLoading(btn, false); }
}

async function doRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  if (!username || !email || !password) { showToast('Please fill all fields', 'error'); return; }

  const btn = document.getElementById('registerBtn');
  setLoading(btn, true);
  try {
    const data = await apiFetch('/users/register', 'POST', { Username: username, Email: email, Password: password });
    saveAuth(data);
    renderUserPanel(); updateAuthTag(); closeModal();
    showToast('Account created! Welcome, ' + data.Username + '!', 'success');
  } catch(err) {
    showToast(err.message, 'error');
  } finally { setLoading(btn, false); }
}

// GOOGLE AUTH
let googleInitialized = false;

function initGoogleAuth() {
  if (googleInitialized) return;
  if (typeof google === 'undefined') {
    showToast('Google SDK not loaded. Check your internet connection.', 'error');
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
    auto_select: false,
    cancel_on_tap_outside: true,
  });
  googleInitialized = true;
}

function triggerGoogleLogin() {
  if (GOOGLE_CLIENT_ID === '621930458072-e1r85is40jvtcb3l1509se4m6f04ekb0.apps.googleusercontent.com') {
    showToast('Google Client ID not configured yet.', 'error');
    return;
  }
  try {
    initGoogleAuth();
    // Render the official Google Sign-In button inside the modal
    const container = document.getElementById('googleBtnFallback');
    container.innerHTML = '';
    google.accounts.id.renderButton(container, {
      theme: 'filled_black',
      size: 'large',
      width: 360,
      text: 'signin_with',
      shape: 'rectangular',
    });
    // Also try One Tap prompt
    google.accounts.id.prompt((notification) => {
      console.log('Google prompt moment:', notification.getMomentType ? notification.getMomentType() : 'unknown');
    });
  } catch(err) {
    console.error('Google auth error:', err);
    showToast('Google sign-in error: ' + err.message, 'error');
  }
}

async function handleGoogleCredential(response) {
  const idToken = response.credential;
  if (!idToken) { showToast('Google sign-in failed', 'error'); return; }

  try {
    const data = await apiFetch('/users/google-login', 'POST', { IdToken: idToken });
    saveAuth(data);
    renderUserPanel(); updateAuthTag(); closeModal();
    showToast('Signed in as ' + data.Username, 'success');
    renderHistoryPage();
  } catch(err) {
    showToast(err.message, 'error');
  }
}

// USER PANEL
function renderUserPanel() {
  const el = document.getElementById('userPanel');
  if (state.user) {
    const initials = state.user.username.slice(0,2).toUpperCase();
    el.innerHTML =
      '<div class="user-card">' +
        '<div class="avatar">' + initials + '</div>' +
        '<div class="user-info">' +
          '<div class="user-name">' + state.user.username + '</div>' +
          '<div class="user-role">' + (state.user.role || 'User') + '</div>' +
        '</div>' +
        '<button class="logout-btn" onclick="logout()" title="Sign out">&#8617;</button>' +
      '</div>';
  } else {
    el.innerHTML =
      '<div class="signin-prompt" onclick="openModal()">' +
        '<p>Sign in to save your history</p>' +
        '<button class="signin-btn">&#128273; Sign In / Register</button>' +
      '</div>' +
      '<div id="googleBtnFallback" style="margin-top:8px"></div>';
  }
  updateAuthTag();
}

function updateAuthTag() {
  const tag = document.getElementById('authStatusTag');
  if (state.user) {
    tag.textContent = '@' + state.user.username;
    tag.style.color = 'var(--accent)';
  } else {
    tag.textContent = 'Guest Mode';
    tag.style.color = '';
  }
}
