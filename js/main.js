// ===========================
// 古民家リノベーション メインJS
// ===========================

document.addEventListener('DOMContentLoaded', function () {

  // アクティブナビ
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === currentPath) a.classList.add('active');
  });

  // 施工事例ページ：JSON読み込み
  const caseGrid = document.getElementById('case-grid');
  if (caseGrid) loadCases(caseGrid);

  // 施工事例トップ表示（index.html）
  const casePreview = document.getElementById('case-preview');
  if (casePreview) loadCasesPreview(casePreview);

  // タグフィルター
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tag = this.dataset.tag;
      filterCases(tag);
    });
  });

});

// ===========================
// 施工事例：全件表示
// ===========================
async function loadCases(container) {
  try {
    const res = await fetch('data/cases.json');
    const cases = await res.json();
    renderCards(container, cases);
  } catch (e) {
    container.innerHTML = '<p style="text-align:center;color:#888;">施工事例を読み込めませんでした。</p>';
  }
}

// ===========================
// 施工事例：トップ3件プレビュー
// ===========================
async function loadCasesPreview(container) {
  try {
    const res = await fetch('data/cases.json');
    const cases = await res.json();
    renderCards(container, cases.slice(0, 3));
  } catch (e) {
    container.innerHTML = '';
  }
}

// ===========================
// カード生成
// ===========================
function renderCards(container, cases) {
  container.innerHTML = '';
  cases.forEach(c => {
    const tags = c.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const card = document.createElement('article');
    card.className = 'card case-card';
    card.dataset.tags = c.tags.join(',');
    card.innerHTML = `
      <div class="case-img-wrap">
        <img src="${c.image}" alt="${c.title}"
             onerror="this.src='images/placeholder.svg';this.onerror=null;">
      </div>
      <div class="case-body">
        <div class="case-meta">
          <span class="case-location">📍 ${c.location}</span>
          <span class="case-year">${c.year}年施工</span>
        </div>
        <h3 class="case-title">${c.title}</h3>
        <p class="case-desc">${c.description}</p>
        <div class="case-info">
          <span class="info-item">💰 工事費 ${c.budget}</span>
          <span class="info-item">🗓️ 工期 ${c.period}</span>
          <span class="info-item energy">🌿 ${c.energy_saving}</span>
        </div>
        <div class="case-tags">${tags}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===========================
// タグフィルタリング
// ===========================
function filterCases(tag) {
  document.querySelectorAll('.case-card').forEach(card => {
    if (tag === 'all' || card.dataset.tags.includes(tag)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
