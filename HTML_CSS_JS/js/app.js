// ============================================================
// APP INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredAuth();
  renderUserPanel();
  initAllCategories();
  renderHomeRecent();
  checkApiStatus();
});

// Close modal on overlay click
document.getElementById('authModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Enter key shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (document.getElementById('loginUsername') === document.activeElement ||
        document.getElementById('loginPassword') === document.activeElement) {
      doLogin();
    }
    if (document.getElementById('regPassword') === document.activeElement) {
      doRegister();
    }
  }
});
