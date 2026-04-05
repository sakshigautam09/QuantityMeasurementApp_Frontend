// ============================================================
// API CALLS
// ============================================================
async function apiFetch(endpoint, method='GET', body=null) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (state.token) opts.headers['Authorization'] = `Bearer ${state.token}`;
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${API_BASE}${endpoint}`, opts);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.Message || json.message || json.title || `Error ${res.status}`);
  return json;
}

async function checkApiStatus() {
  try {
    await fetch(`${API_BASE.replace('/api/v1','')}/health`);
    document.getElementById('apiStatusTag').textContent = 'API Connected';
    document.getElementById('apiStatusTag').className = 'tag online';
  } catch {
    document.getElementById('apiStatusTag').textContent = 'API Offline';
    document.getElementById('apiStatusTag').className = 'tag';
  }
}
