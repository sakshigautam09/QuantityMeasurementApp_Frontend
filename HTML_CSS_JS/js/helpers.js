// ============================================================
// HELPERS
// ============================================================
function setLoading(btn, on) {
  if (!btn) return;
  if (on) {
    btn.dataset.orig = btn.innerHTML;
    btn.innerHTML = '<div class="spinner"></div>';
    btn.disabled = true;
  } else {
    btn.innerHTML = btn.dataset.orig || btn.innerHTML;
    btn.disabled = false;
  }
}

function showToast(msg, type = 'success') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span>${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}
