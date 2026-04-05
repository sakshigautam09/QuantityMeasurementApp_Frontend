// ============================================================
// STATE
// ============================================================
let state = {
  user: null,          // { username, role, email }
  token: null,
  refreshToken: null,
  historyFilter: 'all',
  activeCategory: {},  // category -> active op
};

// ============================================================
// AUTH — STORAGE
// ============================================================
function loadStoredAuth() {
  const saved = localStorage.getItem('qm_auth');
  if (saved) {
    try {
      const d = JSON.parse(saved);
      state.user = d.user;
      state.token = d.token;
      state.refreshToken = d.refreshToken;
    } catch(e) {}
  }
}

function saveAuth(data) {
  state.user = { username: data.Username, role: data.Role };
  state.token = data.AccessToken;
  state.refreshToken = data.RefreshToken;
  localStorage.setItem('qm_auth', JSON.stringify({
    user: state.user, token: state.token, refreshToken: state.refreshToken
  }));
}

function logout() {
  state.user = null; state.token = null; state.refreshToken = null;
  localStorage.removeItem('qm_auth');
  renderUserPanel();
  updateAuthTag();
  showToast('Signed out successfully', 'success');
  if (document.getElementById('page-history').classList.contains('active')) {
    renderHistoryPage();
  }
}
