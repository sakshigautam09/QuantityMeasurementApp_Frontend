// ============================================================
// NAVIGATION
// ============================================================
function navigate(page, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const titles = {
    home: 'Dashboard <span>Overview</span>',
    length: 'Length <span>Operations</span>',
    weight: 'Weight <span>Operations</span>',
    volume: 'Volume <span>Operations</span>',
    temperature: 'Temperature <span>Operations</span>',
    history: 'Operation <span>History</span>'
  };
  document.getElementById('topbarTitle').innerHTML = titles[page] || page;

  if (page === 'history') renderHistoryPage();

  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
