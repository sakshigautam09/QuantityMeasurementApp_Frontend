// ============================================================
// CATEGORY FORMS
// ============================================================
function initAllCategories() {
  ['length','weight','volume','temperature'].forEach(cat => {
    state.activeCategory[cat] = 'convert';
    renderCategoryTabs(cat);
    renderCategoryForm(cat, 'convert');
  });
}

function renderCategoryTabs(cat) {
  const el = document.getElementById(`${cat}-tabs`);
  const ops = cat === 'temperature' ? ['compare','convert'] : OPS;
  el.innerHTML = ops.map(op => `
    <button class="op-tab ${op === 'convert' ? 'active' : ''}"
      onclick="switchOp('${cat}','${op}',this)">
      ${OP_LABELS[op]}
    </button>
  `).join('');
}

function switchOp(cat, op, btn) {
  state.activeCategory[cat] = op;
  document.querySelectorAll(`#${cat}-tabs .op-tab`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCategoryForm(cat, op);
  const rb = document.getElementById(`${cat}-result`);
  rb.className = 'result-box'; rb.innerHTML = '';
}

function renderCategoryForm(cat, op) {
  const el = document.getElementById(`${cat}-form`);
  const units = UNIT_LABELS[cat.toUpperCase()];
  const unitOpts = units.map(u => `<option value="${u.v}">${u.l}</option>`).join('');

  if (op === 'convert') {
    el.innerHTML = `
      <div class="form-row single">
        <div class="input-group">
          <div class="input-label">Value</div>
          <div class="input-pair">
            <input type="number" id="${cat}-v1" placeholder="0" min="0" step="any"/>
            <select id="${cat}-u1">${unitOpts}</select>
          </div>
        </div>
        <div class="input-group">
          <div class="input-label">Convert To</div>
          <select id="${cat}-u2">${unitOpts}</select>
        </div>
      </div>
      <button class="run-btn" onclick="runOp('${cat}','${op}')">
        <span>Run Conversion</span>
      </button>`;
  } else if (op === 'compare') {
    el.innerHTML = `
      <div class="form-row">
        <div class="input-group">
          <div class="input-label">First Quantity</div>
          <div class="input-pair">
            <input type="number" id="${cat}-v1" placeholder="0" min="0" step="any"/>
            <select id="${cat}-u1">${unitOpts}</select>
          </div>
        </div>
        <div class="op-sym">⇄</div>
        <div class="input-group">
          <div class="input-label">Second Quantity</div>
          <div class="input-pair">
            <input type="number" id="${cat}-v2" placeholder="0" min="0" step="any"/>
            <select id="${cat}-u2">${unitOpts}</select>
          </div>
        </div>
      </div>
      <button class="run-btn" onclick="runOp('${cat}','${op}')">
        <span>Compare</span>
      </button>`;
  } else {
    const sym = op === 'add' ? '+' : op === 'subtract' ? '−' : '÷';
    el.innerHTML = `
      <div class="form-row">
        <div class="input-group">
          <div class="input-label">First Quantity</div>
          <div class="input-pair">
            <input type="number" id="${cat}-v1" placeholder="0" min="0" step="any"/>
            <select id="${cat}-u1">${unitOpts}</select>
          </div>
        </div>
        <div class="op-sym">${sym}</div>
        <div class="input-group">
          <div class="input-label">Second Quantity</div>
          <div class="input-pair">
            <input type="number" id="${cat}-v2" placeholder="0" min="0" step="any"/>
            <select id="${cat}-u2">${unitOpts}</select>
          </div>
        </div>
      </div>
      <button class="run-btn" onclick="runOp('${cat}','${op}')">
        <span>${OP_LABELS[op].split(' ').slice(1).join(' ')}</span>
      </button>`;
  }
}

// ============================================================
// HELPER — capitalize first letter only (e.g. "length" → "Length")
// API expects MeasurementType as "Length", "Weight", "Volume", "Temperature"
// ============================================================
function toMeasurementType(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
}

// ============================================================
// RUN OPERATION
// ============================================================
async function runOp(cat, op) {
  const measurementType = toMeasurementType(cat); // e.g. "Length"
  const v1 = parseFloat(document.getElementById(`${cat}-v1`)?.value);
  const u1 = document.getElementById(`${cat}-u1`)?.value;
  const v2 = parseFloat(document.getElementById(`${cat}-v2`)?.value ?? 0);
  const u2 = document.getElementById(`${cat}-u2`)?.value;

  if (isNaN(v1)) { showToast('Please enter a valid number', 'error'); return; }
  if (v1 < 0)    { showToast('Value cannot be negative', 'error'); return; }

  const btn = document.querySelector(`#page-${cat} .run-btn`);
  setLoading(btn, true);

  // API expects: { Value, Unit, MeasurementType }  (NOT UnitName / Category)
  let body;
  if (op === 'convert') {
    body = {
      ThisQuantityDTO: { Value: v1, Unit: u1, MeasurementType: measurementType },
      ThatQuantityDTO: { Value: 0,  Unit: u2, MeasurementType: measurementType }
    };
  } else {
    if (isNaN(v2)) { showToast('Please enter second value', 'error'); setLoading(btn, false); return; }
    body = {
      ThisQuantityDTO: { Value: v1, Unit: u1, MeasurementType: measurementType },
      ThatQuantityDTO: { Value: v2, Unit: u2, MeasurementType: measurementType }
    };
  }

  try {
    const res = await apiFetch(`/quantities/${op}`, 'POST', body);
    showResult(cat, op, res, v1, u1, v2, u2);
    showToast(`${op.charAt(0).toUpperCase() + op.slice(1)} successful`, 'success');
  } catch(err) {
    showResultError(cat, err.message);
    showToast(err.message, 'error');
  } finally {
    setLoading(btn, false);
  }
}

function showResult(cat, op, res, v1, u1, v2, u2) {
  const rb = document.getElementById(`${cat}-result`);

  // API response fields: ResultValue, ResultUnit, ResultString, IsError
  if (res.IsError) {
    showResultError(cat, res.ErrorMessage || 'An error occurred');
    return;
  }

  let detail = '';
  if (op === 'convert')      detail = `${v1} ${u1} → ${u2}`;
  else if (op === 'compare') detail = `${v1} ${u1} vs ${v2} ${u2}`;
  else                       detail = `${v1} ${u1} ${op} ${v2} ${u2}`;

  let valDisplay = '';
  if (op === 'compare') {
    // ResultUnit is "EQUAL" or "NOT_EQUAL", ResultString is "true"/"false"
    const equal = res.ResultUnit === 'EQUAL' || res.ResultString === 'true';
    valDisplay = equal ? '✅ Equal' : '❌ Not Equal';
  } else if (op === 'divide') {
    valDisplay = `${roundTo(res.ResultValue, 6)} (ratio)`;
  } else {
    valDisplay = `${roundTo(res.ResultValue, 6)} ${res.ResultUnit || ''}`;
  }

  rb.innerHTML = `
    <div class="result-label">Result</div>
    <div class="result-value">${valDisplay}</div>
    <div class="result-detail">${detail}</div>`;
  rb.className = 'result-box success show';
}

function showResultError(cat, msg) {
  const rb = document.getElementById(`${cat}-result`);
  rb.innerHTML = `
    <div class="result-label">Error</div>
    <div class="result-value error">${msg}</div>`;
  rb.className = 'result-box error show';
}

function roundTo(n, d) { return Math.round(n * 10**d) / 10**d; }
