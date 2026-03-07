// ═══════════════════════════════════════════════
// Le Panier Vert — Données centralisées
// ═══════════════════════════════════════════════

export const USERS_DEMO = {
  'client@test.com':         { nom:'Jean Tremblay',    email:'client@test.com',         mdp:'123456',       type:'consommateur', ville:'Sherbrooke', abonne:true },
  'ferme1@test.com':         { nom:'Famille Duval',    email:'ferme1@test.com',          mdp:'123456',       type:'ferme',        ville:'Compton',    nomferme:'Ferme Duval',          tel:'450-835-2291', desc:'Maraîchers bio depuis 3 générations. Légumes cueillis le matin même.',             abonne:true, plan:'ferme' },
  'ferme2@test.com':         { nom:'Famille Lalonde',  email:'ferme2@test.com',          mdp:'123456',       type:'ferme',        ville:'Coaticook',  nomferme:'Fromagerie Lalonde',   tel:'819-849-3344', desc:'Fromages artisanaux de lait cru de vaches Jersiaises en pâturage.',           abonne:true, plan:'ferme' },
  'ferme3@test.com':         { nom:'Paul Bouchard',    email:'ferme3@test.com',          mdp:'123456',       type:'ferme',        ville:'Magog',      nomferme:'Rucher Saint-Paul',    tel:'450-868-1122', desc:'80 ruches en lisière de forêt. Miel non pasteurisé depuis 1998.',             abonne:true, plan:'ferme' },
  'info@semencesempire.ca':  { nom:'Marie-Eve Simard', email:'info@semencesempire.ca',   mdp:'semences2026', type:'distributeur', ville:'Waterville', nomferme:'Semences Empire inc.', tel:'819-837-0777', desc:'Entreprise de distribution de semences agricoles au Québec.',                 abonne:true, plan:'distributeur' },
  'info@supravert.com':      { nom:'Marie-Eve Simard', email:'info@supravert.com',       mdp:'supravert2026',type:'distributeur', ville:'Waterville', nomferme:'Supra Vert inc.',      tel:'819-452-3619', desc:'Entreprise de distribution de semences à gazon et de fleurs indigènes.',      abonne:true, plan:'distributeur' },
  'dist@test.com':           { nom:'Pierre Côté',      email:'dist@test.com',            mdp:'123456',       type:'distributeur', ville:'Sherbrooke', nomferme:'Semences Bio QC',      tel:'819-555-1234', desc:'200+ variétés de semences certifiées biologiques.',                          abonne:true, plan:'distributeur' },
  'comm@test.com':           { nom:'Sophie Martin',    email:'comm@test.com',            mdp:'123456',       type:'commercant',   ville:'Magog',      nomferme:'Épicerie Bio Magog',   tel:'450-555-9999', desc:'Épicerie fine spécialisée en produits bio locaux.',                          abonne:true, plan:'commercant' },
};

export const PRODUITS_PUBLICS = [
  { id:'p1', emoji:'🥕', nom:'Carottes Nantes bio',    cat:'Légumes',  desc:'Cueillie le matin même, fraîcheur garantie.',          prix:'3 $ / botte',   prixNum:3,  dispo:'Juin–Oct',        color:'#C4622D', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'both'    },
  { id:'p2', emoji:'🐓', nom:'Œufs de ferme (doz.)',   cat:'Œufs',     desc:'Poules en plein air, nourries aux grains bio.',        prix:'7 $ / doz.',    prixNum:7,  dispo:"Toute l'année",   color:'#3D6B4A', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'instant' },
  { id:'p3', emoji:'🥬', nom:'Panier légumes saison',  cat:'Légumes',  desc:'Assortiment de légumes de saison, cueillette hebdo.',  prix:'38 $ / panier', prixNum:38, dispo:'Juin–Nov',        color:'#3D6B4A', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'reserve' },
  { id:'p4', emoji:'🧀', nom:'Fromage St-Laurent',     cat:'Fromages', desc:'Pâte semi-ferme affinée 3 mois, lait cru.',            prix:'14 $ / 200g',   prixNum:14, dispo:"Toute l'année",   color:'#C97D12', ferme:'Fromagerie Lalonde', emailFerme:'ferme2@test.com', modeVente:'both'    },
  { id:'p5', emoji:'🍯', nom:'Miel de trèfle',         cat:'Miel',     desc:'Non pasteurisé, récolte estivale des Cantons.',        prix:'18 $ / 500g',   prixNum:18, dispo:'Août–Sept',       color:'#C97D12', ferme:'Rucher Saint-Paul',  emailFerme:'ferme3@test.com', modeVente:'both'    },
];

export const STRIPE_LINKS = {
  debutant:     'https://buy.stripe.com/test_VOTRE_LIEN_DEBUTANT',
  croissance:   'https://buy.stripe.com/test_VOTRE_LIEN_CROISSANCE',
  pro:          'https://buy.stripe.com/test_VOTRE_LIEN_PRO',
  illimites:    'https://buy.stripe.com/test_VOTRE_LIEN_ILLIMITES',
};

export const PLANS = [
  { id:'debutant',   emoji:'🌱', nom:'Débutant',   produits:'0–25 produits',    prix:'29,99', color:'#3D6B4A', features:['Vitrine en ligne','Achat immédiat Stripe/PayPal','Réservation en ligne','Commission 8% / vente','1 mois offert par parrainage'] },
  { id:'croissance', emoji:'🌿', nom:'Croissance', produits:'26–50 produits',   prix:'49,99', color:'#6A9E77', features:['Vitrine en ligne','Achat immédiat Stripe/PayPal','Réservation en ligne','Commission 8% / vente','1 mois offert par parrainage'] },
  { id:'pro',        emoji:'🚀', nom:'Pro',        produits:'51–100 produits',  prix:'69,99', color:'#C97D12', features:['Vitrine en ligne','Achat immédiat Stripe/PayPal','Réservation en ligne','Commission 8% / vente','1 mois offert par parrainage'], popular:true },
  { id:'illimites',  emoji:'💎', nom:'Illimités',  produits:'200+ produits',    prix:'79,99', color:'#BF4E22', features:['Vitrine en ligne','Achat immédiat Stripe/PayPal','Réservation en ligne','Commission 8% / vente','1 mois offert par parrainage'] },
];

export const TRANSLATIONS = {
  fr: {
    tagline: 'Marché bio du Québec',
    badge: 'Plateforme bio · Québec',
    title: 'Fermes, distributeurs, commerçants et consommateurs — <em>tous connectés</em>',
    sub: 'Le seul marché bio québécois où chacun gère ses propres ventes.',
    btn1: '🔍 Découvrir les fermes',
    btn2: 'Rejoindre le réseau →',
    navFermes: '🌾 Fermes', navProd: '🥕 Produits', navDist: '📦 Distributeurs',
    navComm: '🏪 Commerçants', navJoin: 'Rejoindre le réseau →',
    conn: '👤 Connexion', moncompte: '👤 Mon compte',
    mTelLbl: 'Téléphone', mEmailLbl: 'Courriel', mHrsLbl: "Heures d'ouverture",
    mNote: "💡 La ferme gère ses propres commandes et livraisons selon ses conditions.",
    mBtn: '✅ Parfait, je les contacte !',
    parCode: 'Cliquez pour copier', copie: '✅ Copié !',
  },
  en: {
    tagline: "Quebec's organic market",
    badge: 'Bio Platform · Quebec',
    title: 'Farms, distributors, merchants and consumers — <em>all connected</em>',
    sub: "Quebec's only organic marketplace where everyone manages their own sales.",
    btn1: '🔍 Discover farms',
    btn2: 'Join the network →',
    navFermes: '🌾 Farms', navProd: '🥕 Products', navDist: '📦 Distributors',
    navComm: '🏪 Merchants', navJoin: 'Join the network →',
    conn: '👤 Login', moncompte: '👤 My account',
    mTelLbl: 'Phone', mEmailLbl: 'Email', mHrsLbl: 'Opening hours',
    mNote: "💡 The farm manages its own orders and deliveries according to its own terms.",
    mBtn: "✅ Perfect, I'll contact them!",
    parCode: 'Click to copy', copie: '✅ Copied!',
  },
};

export const PROD_COLORS = ['#C4622D','#D4891A','#4A7C59','#2D5A3D','#8B3A52','#4A7FA5','#7BAE87'];
