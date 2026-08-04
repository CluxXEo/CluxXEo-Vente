/* ============================================
   CLUEXXEO VENTE — boutique/index.js
   Gestion centrale de la boutique
   Ajoute tes articles ici !
   ============================================ */

// ─── CATALOGUE DES ARTICLES ───
// Pour ajouter un article, copie un bloc et remplis les infos
// image: chemin vers la photo depuis le dossier boutique/
// ex: "bon état/tshirt/photo1.jpg"
// stripeLink: le lien Payment Link Stripe correspondant à cat + etat
// genre: 'homme' | 'femme' | 'enfant' | 'bebe'
// taille: dépend du genre (voir tailleLabels plus bas)

const catalogue = [

  // ── EXEMPLE (supprime les // pour activer) ──
  // {
  //   id: 1,
  //   name: 'T-shirt blanc',
  //   cat: 'tshirt',
  //   genre: 'homme',
  //   size: 'M',
  //   taille: 'm',
  //   price: 3,
  //   etat: 'Bon état',
  //   dossier: 'bon état',
  //   image: 'bon état/tshirt/photo1.jpg',
  //   available: true,
  //   stripeLink: 'https://buy.stripe.com/xxxxx'
  // },

];

// ─── CORRESPONDANCE ÉTAT → COULEUR BADGE ───
const etatCouleurs = {
  'Très bon état': '#7A9E7E',
  'Bon état':      '#C4845A',
  'État correct':  '#9E9189',
};

// ─── CORRESPONDANCE CATÉGORIE (TYPE) → LABEL ───
const catLabels = {
  'tshirt': 'T-shirt',
  'sweat':  'Pull/Sweat',
  'bas':    'Bas',
};

// ─── CORRESPONDANCE GENRE → LABEL ───
const genreLabels = {
  'homme':  'Homme',
  'femme':  'Femme',
  'enfant': 'Enfant',
  'bebe':   'Bébé',
};

// ─── CORRESPONDANCE TAILLE → LABEL (selon le genre) ───
const tailleLabels = {
  // Homme / Femme
  'xs':  'XS',
  's':   'S',
  'm':   'M',
  'l':   'L',
  'xl':  'XL',
  'xxl': 'XXL',
  // Enfant (années)
  '2-4':   '2-4 ans',
  '4-6':   '4-6 ans',
  '6-8':   '6-8 ans',
  '8-10':  '8-10 ans',
  '10-12': '10-12 ans',
  '12-14': '12-14 ans',
  // Bébé (mois)
  '0-3m':  '0-3 mois',
  '3-6m':  '3-6 mois',
  '6-12m': '6-12 mois',
  '12-18m':'12-18 mois',
  '18-24m':'18-24 mois',
};

// ─── TAILLES DISPONIBLES PAR GENRE (pour générer les filtres) ───
const taillesParGenre = {
  'homme':  ['xs', 's', 'm', 'l', 'xl', 'xxl'],
  'femme':  ['xs', 's', 'm', 'l', 'xl', 'xxl'],
  'enfant': ['2-4', '4-6', '6-8', '8-10', '10-12', '12-14'],
  'bebe':   ['0-3m', '3-6m', '6-12m', '12-18m', '18-24m'],
};

// ─── FONCTION : récupérer les articles par état ───
function getArticlesByEtat(etat) {
  return catalogue.filter(a => a.etat === etat && a.available);
}

// ─── FONCTION : récupérer les articles par catégorie (type) ───
function getArticlesByCat(cat) {
  return catalogue.filter(a => a.cat === cat && a.available);
}

// ─── FONCTION : récupérer les articles par genre ───
function getArticlesByGenre(genre) {
  return catalogue.filter(a => a.genre === genre && a.available);
}

// ─── FONCTION : récupérer tous les articles disponibles ───
function getTousLesArticles() {
  return catalogue.filter(a => a.available);
}

// ─── FONCTION : compter les articles disponibles ───
function countDisponibles() {
  return catalogue.filter(a => a.available).length;
}
