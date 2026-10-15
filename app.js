let MENU = [
  {
    id: 'sicak-icecekler',
    title: 'Sıcak İçecekler',
    photo: 'assets/coffee.jpg',
    items: [
      { name: 'Çay', price: 25 },
      { name: 'Fincan Çay', price: 35 },
      { name: 'Ihlamur Çayı', price: 40 },
      { name: 'Papatya Çayı', price: 110 },
      { name: 'Oralet Çeşitleri', price: 40 },
      { name: 'Türk Kahvesi', price: 100 },
      { name: 'Duble Türk Kahvesi', price: 160 },
      { name: 'Damla Sakızlı Türk Kahvesi', price: 100 },
      { name: 'Menengiç Kahvesi', price: 100 },
      { name: 'Espresso', price: 100 },
      { name: 'Americano', price: 130 },
      { name: 'Filtre Kahve', price: 100 },
      { name: 'Latte', price: 150 },
      { name: 'Karamel Latte', price: 150 },
      { name: 'Cappuccino', price: 150 },
      { name: 'Mocha', price: 150 },
      { name: 'White Mocha', price: 150 },
      { name: 'Sıcak Çikolata', price: 150 },
      { name: 'Salep', price: 100 }
    ]
  },
  {
    id: 'soguk-kahveler',
    title: 'Soğuk Kahveler',
    photo: 'assets/soguk-kahveler.jpg',
    items: [
      { name: 'Buzlu Americano', price: 160 },
      { name: 'Buzlu Latte', price: 160 },
      { name: 'Buzlu Aromalı Latte', price: 160 },
      { name: 'Buzlu Cappuccino', price: 160 },
      { name: 'Buzlu Mocha', price: 160 },
      { name: 'Buzlu White Chocolate', price: 160 }
    ]
  },
  {
    id: 'soft-icecekler',
    title: 'Soft İçecekler',
    photo: 'assets/softdrinks.jpg',
    items: [
      { name: 'Kola', price: 90 },
      { name: 'Fanta', price: 90 },
      { name: 'Ice Tea', price: 90 },
      { name: 'Ayran', price: 60 },
      { name: 'Limonata', price: 80 },
      { name: 'Sade Soda', price: 60 },
      { name: 'Meyveli Soda', price: 80 },
      { name: 'Churchill', price: 100 },
      { name: 'Enerji İçeceği', price: 140 }
    ]
  },
  {
    id: 'su-gazoz',
    title: 'Su ve Gazozlar',
    photo: 'assets/softdrinks.jpg',
    items: [
      { name: 'Su', price: 30 },
      { name: 'Cola Turka (Şişe)', price: 60 },
      { name: 'Cola Turka (Kutu)', price: 80 },
      { name: 'Çamlıca Gazoz', price: 80 },
      { name: 'Beyoğlu Gazoz Çeşitleri', price: 80 },
      { name: 'Meyve Suyu', price: 90 },
      { name: 'Maltana Enerji İçeceği', price: 100 }
    ]
  },
  {
    id: 'yemekler',
    title: 'Yemekler',
    photo: 'assets/burger.jpg',
    items: [
      { name: 'Köri Soslu Tavuk', price: 300 },
      { name: 'Barbekü Soslu Tavuk', price: 300 },
      { name: 'Mantı', price: 200 }
    ]
  },
  {
    id: 'makarnalar',
    title: 'Makarnalar',
    photo: 'assets/makarnalar.png',
    items: [
      { name: 'Bolonez Soslu Makarna', price: 250 },
      { name: 'Köri Soslu Makarna', price: 250 },
      { name: 'Pesto Soslu Makarna', price: 250 }
    ]
  },
  {
    id: 'gozleme',
    title: 'Gözleme',
    photo: 'assets/gozlemeler.png',
    items: [
      { name: 'Kaşarlı Gözleme', price: 200 },
      { name: 'Karışık Gözleme', price: 220 },
      { name: 'Kavurma Gözleme', price: 250 }
    ]
  },
  {
    id: 'tost',
    title: 'Tost',
    photo: 'assets/tostlar.png',
    items: [
      { name: 'Kaşarlı Tost', price: 170 },
      { name: 'Karışık Tost', price: 200 },
      { name: 'Kavurma Tost', price: 220 }
    ]
  },
  {
    id: 'izgara',
    title: 'Izgara',
    photo: 'assets/izgaralar.png',
    items: [
      { name: 'Izgara Köfte', price: 480 },
      { name: 'Izgara Tavuk', price: 380 }
    ]
  },
  {
    id: 'atistirmalik',
    title: 'Atıştırmalıklar',
    photo: 'assets/breakfast.jpg',
    items: [
      { name: 'Patates Tabağı', price: 175 },
      { name: 'Kombo Tabağı', price: 250 },
      { name: 'Duble Kombo Tabağı', price: 450 }
    ]
  },
  {
    id: 'tatlilar',
    title: 'Tatlılar',
    photo: 'assets/dessert1.jpg',
    items: [
      { name: 'Fıstık Tanesi', price: 260 },
      { name: 'Kahve Çekirdeği', price: 220 },
      { name: 'Magnolya', price: 180 },
      { name: 'Tiramisu', price: 180 },
      { name: 'Limonlu Cheesecake', price: 180 },
      { name: 'Ballı Fıstık', price: 200 }
    ]
  },
  {
    id: 'nargileler',
    title: 'Nargileler',
    photo: 'assets/nargileler.png',
    items: [
      { name: 'Anason', price: 350 },
      { name: 'Üzüm', price: 350 },
      { name: 'Pişmiş Şeftali', price: 350 },
      { name: 'Lady Killer', price: 350 },
      { name: 'Love 58', price: 350 },
      { name: 'Dejavu', price: 350 },
      { name: 'Mahalle Cafe Special', price: 350 },
      { name: 'Schweppes', price: 350 },
      { name: 'Pembe Panter', price: 350 },
      { name: 'Tatlı Cadı', price: 350 }
    ]
  }
];

const showcaseEl = document.querySelector('.category-showcase');
const photoCategoryGridEl = document.getElementById('photo-category-grid');
const menuPanelEl = document.getElementById('menu-panel');
const menuRootEl = document.getElementById('menu-root');
const searchInputEl = document.getElementById('search-input');
const clearBtnEl = document.getElementById('clear-btn');

let activeCategoryId = null;
let query = '';

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

const formatPrice = (price) => `${Number(price).toLocaleString('tr-TR')} TL`;

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (!cat) return null;
  return MENU.some((category) => category.id === cat) ? cat : null;
}

function setCategoryInUrl(categoryId, options = {}) {
  const { replace = false } = options;
  const url = new URL(window.location.href);

  if (categoryId) {
    url.searchParams.set('cat', categoryId);
  } else {
    url.searchParams.delete('cat');
  }

  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({ cat: categoryId || null }, '', url);
}

function createPhotoCategoryButtons() {
  photoCategoryGridEl.innerHTML = '';

  for (const category of MENU) {
    const card = document.createElement('button');
    card.className = 'photo-cat-btn';
    card.dataset.category = category.id;
    card.innerHTML = `
      <img src="${escapeHtml(category.photo || 'assets/coffee.jpg')}" alt="${escapeHtml(category.title)}" />
      <span class="photo-cat-title">${escapeHtml(category.title)}</span>
    `;
    photoCategoryGridEl.appendChild(card);
  }
}

function getActiveCategory() {
  return MENU.find((category) => category.id === activeCategoryId) || null;
}

function getFilteredItems(items) {
  if (!query) return items;
  const needle = query.toLowerCase();
  return items.filter((item) => item.name.toLowerCase().includes(needle));
}

function renderHome() {
  showcaseEl.classList.remove('is-hidden');
  menuPanelEl.classList.add('is-hidden');
  menuRootEl.innerHTML = '';
  query = '';
  searchInputEl.value = '';
}

function renderByRoute() {
  activeCategoryId = getCategoryFromUrl();
  if (activeCategoryId) {
    renderMenu();
  } else {
    renderHome();
  }
}

function renderMenu() {
  const category = getActiveCategory();
  if (!category) {
    renderHome();
    return;
  }

  showcaseEl.classList.add('is-hidden');
  menuPanelEl.classList.remove('is-hidden');

  const filteredItems = getFilteredItems(category.items);

  if (!filteredItems.length) {
    menuRootEl.innerHTML = '<div class="empty-state">Bu kategoride aramana uygun ürün bulunamadı.</div>';
    return;
  }

  const itemsMarkup = filteredItems
    .map((item) => {
      const noteMarkup = item.note ? `<div class="item-note">${escapeHtml(item.note)}</div>` : '';
      return `
        <div class="item-row ${item.photo ? 'has-photo' : ''}">
          ${item.photo ? `<img class="product-photo" src="${escapeHtml(item.photo)}" alt="" loading="lazy" />` : ''}
          <div>
            <div class="item-name">${escapeHtml(item.name)}</div>
            ${noteMarkup}
          </div>
          <div class="item-price">${formatPrice(item.price)}</div>
        </div>
      `;
    })
    .join('');

  menuRootEl.innerHTML = `
    <article class="menu-category">
      <div class="menu-head">
        <h3>${escapeHtml(category.title)}</h3>
        <span class="item-count">${filteredItems.length} ürün</span>
      </div>
      <div class="item-list">${itemsMarkup}</div>
    </article>
  `;
}

photoCategoryGridEl.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest('.photo-cat-btn');
  if (!(button instanceof HTMLButtonElement)) return;

  const next = button.dataset.category;
  if (!next) return;

  setCategoryInUrl(next);
  renderByRoute();
});

searchInputEl.addEventListener('input', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  query = target.value.trim();
  renderMenu();
});

clearBtnEl.addEventListener('click', () => {
  query = '';
  searchInputEl.value = '';
  renderMenu();
});

window.addEventListener('popstate', () => {
  renderByRoute();
});

async function refreshMenu() {
  if (!window.MAHALLE_API) return;
  try {
    const response = await fetch(window.MAHALLE_API + '/api/menu', { cache: 'no-store', signal: AbortSignal.timeout(10000) });
    if (!response.ok) return;
    const data = await response.json();
    if (!Array.isArray(data.categories) || !data.categories.every(c => c.id && c.title && Array.isArray(c.items))) return;
    MENU = data.categories;
    createPhotoCategoryButtons();
    renderByRoute();
    if (data.updatedAt) document.getElementById('menu-updated').textContent = 'Mahalle Cafe Menü • Son güncelleme: ' + new Date(data.updatedAt).toLocaleDateString('tr-TR');
  } catch { /* Bağlantı sorunu olduğunda mevcut menü kullanılabilir. */ }
}
createPhotoCategoryButtons();
setCategoryInUrl(getCategoryFromUrl(), { replace: true });
renderByRoute();
refreshMenu();
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshMenu(); });
setInterval(() => { if (!document.hidden) refreshMenu(); }, 60000);
document.getElementById('home-btn').addEventListener('click', () => { setCategoryInUrl(null); renderByRoute(); });
