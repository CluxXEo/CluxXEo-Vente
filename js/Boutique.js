/* ============================================
   CLUEXXEO VENTE — boutique.js
   Produits, filtres, ajout au panier
   ============================================ */

// ─── CATALOGUE PRODUITS ───
// Ajoute tes articles ici quand tu en auras !
// Exemple de structure :
// { id:1, name:'T-shirt blanc', cat:'hauts', size:'M', taille:'m', price:3, emoji:'👕', etat:'Très bon état', available:true }

const products = [
  // Aucun article pour l'instant — ajoute les ici !
];

// ─── FILTRE ACTIF ───
let activeFilter = 'tous';

// ─── RENDU DES PRODUITS ───
function renderProducts(filter = 'tous') {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-count');
  if (!grid) return;

  const sizeFilters = ['xs', 'm', 'l'];

  const filtered = products.filter(p => {
    if (filter === 'tous') return true;
    if (sizeFilters.includes(filter)) return p.taille === filter;
    return p.cat === filter;
  });

  const available = filtered.filter(p => p.available).length;
  if (countEl) countEl.textContent = available;

  // Boutique vide
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="boutique-vide">
        <div class="empty-icon">🧺</div>
        <p>La boutique arrive bientôt !</p>
        <p>Nous préparons notre première collection. Revenez vite 🌿</p>
      </div>`;
    return;
  }

  // Affichage des cartes
  grid.innerHTML = filtered.map(p => `
    <div class="product-card ${p.available ? '' : 'sold'}">
      <div class="product-img" style="background:${p.color || '#EDE8DF'}22">
        <span class="product-badge">${p.available ? p.etat : 'Vendu'}</span>
        <span style="font-size:4rem;opacity:.35">${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-meta">
          <span class="tag">${p.size}</span>
          <span class="tag">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</span>
        </div>
        <div class="product-footer">
          <span class="product-price">${p.price} €</span>
          ${p.available
            ? `<button class="btn-reserve" onclick='addToCart(${JSON.stringify(p)})'>Réserver</button>`
            : `<span style="font-size:.8rem;color:var(--stone)">Indisponible</span>`
          }
        </div>
      </div>
    </div>
  `).join('');
}

// ─── FILTRE ───
function filterProducts(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(filter);
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
