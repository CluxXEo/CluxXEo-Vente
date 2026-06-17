/* ============================================
   CLUEXXEO VENTE — nav.js
   Panier, Toast, Navigation active
   ============================================ */

// ─── PANIER (stocké en mémoire) ───
let cart = JSON.parse(localStorage.getItem('cluxCart') || '[]');

function saveCart() {
  localStorage.setItem('cluxCart', JSON.stringify(cart));
}

function addToCart(product) {
  const existing = cart.find(x => x.id === product.id);
  if (existing) { showToast('Déjà dans le panier !'); return; }
  cart.push(product);
  saveCart();
  updateCartCount();
  showToast(`${product.emoji} ${product.name} ajouté au panier !`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}

// ─── RENDU PANIER ───
function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');
  const checkBtn  = document.getElementById('checkout-btn');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Votre panier est vide 🛍</div>';
    if (totalEl)  totalEl.style.display  = 'none';
    if (checkBtn) checkBtn.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, x) => s + x.price, 0);

  container.innerHTML = cart.map(p => `
    <div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name} — ${p.size}</div>
        <div class="cart-item-price">${p.price} €</div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${p.id})">✕</button>
    </div>
  `).join('');

  document.getElementById('cart-total-price').textContent = total + ' €';
  if (totalEl)  totalEl.style.display  = 'flex';
  if (checkBtn) checkBtn.style.display = 'block';
}

// ─── OUVERTURE / FERMETURE PANIER ───
function openCart() {
  document.getElementById('cart-modal').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-modal').classList.remove('open');
}

function closeCartOutside(e) {
  if (e.target === document.getElementById('cart-modal')) closeCart();
}

function checkout() {
  showToast('🎉 Réservation confirmée ! On vous contacte vite.');
  cart = [];
  saveCart();
  updateCartCount();
  closeCart();
}

// ─── TOAST ───
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ─── LIEN ACTIF DANS LA NAV ───
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setActiveNav();
});
