/* ============================================
   CLUEXXEO VENTE — boutique/index.js
   Gestion centrale de la boutique
   Ajoute tes articles ici !
   ============================================ */

// ─── CATALOGUE DES ARTICLES ───
// Pour ajouter un article, copie un bloc et remplis les infos
// image: chemin vers la photo depuis le dossier boutique/
// ex: "bon état/tshirt/photo1.jpg"

const catalogue = [

  // ── EXEMPLE (supprime les // pour activer) ──
  // {
  //   id: 1,
  //   name: 'T-shirt blanc',
  //   cat: 'tshirt',
  //   size: 'M',
  //   taille: 'm',
  //   price: 3,
  //   etat: 'Bon état',
  //   dossier: 'bon état',
  //   image: 'bon état/tshirt/photo1.jpg',
  //   available: true
  // },

];

// ─── CORRESPONDANCE ÉTAT → COULEUR BADGE ───
const etatCouleurs = {
  'Très bon état': '#7A9E7E',
  'Bon état':      '#C4845A',
  'État correct':  '#9E9189',
};

// ─── CORRESPONDANCE CATÉGORIE → LABEL ───
const catLabels = {
  'tshirt': 'T-shirt',
  'sweat':  'Sweat',
  'bas':    'Bas',
};

// ─── FONCTION : récupérer les articles par état ───
function getArticlesByEtat(etat) {
  return catalogue.filter(a => a.etat === etat && a.available);
}

// ─── FONCTION : récupérer les articles par catégorie ───
function getArticlesByCat(cat) {
  return catalogue.filter(a => a.cat === cat && a.available);
}

// ─── FONCTION : récupérer tous les articles disponibles ───
function getTousLesArticles() {
  return catalogue.filter(a => a.available);
}

// ─── FONCTION : compter les articles disponibles ───
function countDisponibles() {
  return catalogue.filter(a => a.available).length;
}
