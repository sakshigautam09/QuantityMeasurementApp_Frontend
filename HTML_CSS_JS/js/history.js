// ============================================================
// HISTORY PAGE
// ============================================================
async function renderHistoryPage() {
  const el = document.getElementById('historyContent');

  if (!state.user) {
    el.innerHTML = `
      <div class="auth-lock">
        <div class="lock-icon">🔒</div>
        <h3>Sign in to view History</h3>
        <p>Your operations are saved when you're signed in. View, filter, and analyse past measurements.</p>
        <button class="auth-lock-btn" onclick="openModal()">Sign In / Register</button>
      </div>`;
    return;
  }

  el.innerHTML = `<div style="color:var(--text-muted);font-size:13px;padding:20px 0">Loading history…</div>`;

  try {
    let data = [];
    if (state.historyFilter === 'all') {
      const ops = ['compare','convert','add','subtract','divide'];
      const results = await Promise.allSettled(ops.map(op =>
        apiFetch(`/quantities/history/operation/${op.toUpperCase()}`)
      ));
      results.forEach(r => {
        if (r.status === 'fulfilled' && Array.isArray(r.value)) data.push(...r.value);
      });
    } else if (['compare','convert','add','subtract','divide'].includes(state.historyFilter)) {
      const res = await apiFetch(`/quantities/history/operation/${state.historyFilter.toUpperCase()}`);
      data = Array.isArray(res) ? res : [];
    } else {
      const res = await apiFetch(`/quantities/history/type/${state.historyFilter.toUpperCase()}`);
      data = Array.isArray(res) ? res : [];
    }

    // Sort newest first
    data.sort((a,b) => new Date(b.Timestamp||b.timestamp) - new Date(a.Timestamp||a.timestamp));

    el.innerHTML = `
      <div class="history-filters">
        <button class="filter-btn ${state.historyFilter==='all'?'active':''}" onclick="setHistFilter('all')">All</button>
        <button class="filter-btn ${state.historyFilter==='compare'?'active':''}" onclick="setHistFilter('compare')">Compare</button>
        <button class="filter-btn ${state.historyFilter==='convert'?'active':''}" onclick="setHistFilter('convert')">Convert</button>
        <button class="filter-btn ${state.historyFilter==='add'?'active':''}" onclick="setHistFilter('add')">Add</button>
        <button class="filter-btn ${state.historyFilter==='subtract'?'active':''}" onclick="setHistFilter('subtract')">Subtract</button>
        <button class="filter-btn ${state.historyFilter==='divide'?'active':''}" onclick="setHistFilter('divide')">Divide</button>
        <button class="filter-btn ${state.historyFilter==='length'?'active':''}" onclick="setHistFilter('length')">Length</button>
        <button class="filter-btn ${state.historyFilter==='weight'?'active':''}" onclick="setHistFilter('weight')">Weight</button>
        <button class="filter-btn ${state.historyFilter==='volume'?'active':''}" onclick="setHistFilter('volume')">Volume</button>
        <button class="filter-btn ${state.historyFilter==='temperature'?'active':''}" onclick="setHistFilter('temperature')">Temp</button>
      </div>`;

    if (data.length === 0) {
      el.innerHTML += `
        <div class="empty-state">
          <div class="big">📭</div>
          <h3>No records found</h3>
          <p>Perform some operations to see them here.</p>
        </div>`;
      return;
    }

    const list = document.createElement('div');
    list.className = 'history-list';
    list.innerHTML = data.slice(0, 100).map(item => historyItem(item)).join('');
    el.appendChild(list);

    document.getElementById('histBadge').style.display = 'inline';
  } catch(err) {
    el.innerHTML += `<div style="color:var(--error);font-size:13px;margin-top:12px">Failed to load: ${err.message}</div>`;
  }
}

function historyItem(item) {
  const op = (item.OperationType || item.operationType || '').toUpperCase();
  const cat = (item.Operand1?.Category || item.operand1?.category || '').toUpperCase();
  const hasError = item.HasError || item.hasError;
  const q1 = item.Operand1 || item.operand1 || {};
  const q2 = item.Operand2 || item.operand2 || {};
  const res = item.Result || item.result || {};
  const ts = item.Timestamp || item.timestamp;

  let expr = `${q1.Value ?? ''} ${q1.UnitName ?? ''}`;
  if (q2.Value !== undefined) expr += ` ${op} ${q2.Value} ${q2.UnitName}`;

  let resultStr = hasError
    ? `⚠ ${item.ErrorMessage || item.errorMessage || 'Error'}`
    : (res.Value !== undefined ? `= ${roundTo(res.Value,4)} ${res.UnitName || ''}` : '');

  const time = ts ? new Date(ts).toLocaleString() : '';

  return `
    <div class="history-item ${hasError ? 'has-error' : ''}">
      <span class="hist-op">${op}</span>
      <div class="hist-info">
        <div class="hist-expr">${expr.trim()}</div>
        <div class="hist-result ${hasError?'err':''}">${resultStr}</div>
      </div>
      <span class="hist-cat">${cat}</span>
      <span class="hist-time">${time}</span>
    </div>`;
}

function setHistFilter(f) {
  state.historyFilter = f;
  renderHistoryPage();
}

// ─── HOME – RECENT OPS ───
async function renderHomeRecent() {
  const el = document.getElementById('recentOps');
  try {
    const res = await apiFetch('/quantities/history/operation/CONVERT');
    const data = Array.isArray(res) ? res.slice(0, 4) : [];
    if (data.length === 0) return;
    el.innerHTML = `
      <div class="sidebar-label" style="margin-bottom:10px;padding:0">Recent Operations</div>
      <div class="history-list">
        ${data.map(item => historyItem(item)).join('')}
      </div>`;
  } catch {}
}
