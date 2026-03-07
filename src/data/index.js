// ═══════════════════════════════════════════════
// LE PANIER VERT — Données centralisées
// ═══════════════════════════════════════════════

export const USERS_DEMO = {
  'client@test.com':         { nom:'Jean Tremblay',    email:'client@test.com',         mdp:'123456',       type:'consommateur', ville:'Sherbrooke', abonne:true },
  'ferme1@test.com':         { nom:'Famille Duval',    email:'ferme1@test.com',          mdp:'123456',       type:'ferme',        ville:'Compton',    nomferme:'Ferme Duval',           tel:'450-835-2291', desc:'Maraîchers bio depuis 3 générations. Légumes cueillis le matin même.', abonne:true, plan:'ferme' },
  'ferme2@test.com':         { nom:'Famille Lalonde',  email:'ferme2@test.com',          mdp:'123456',       type:'ferme',        ville:'Coaticook',  nomferme:'Fromagerie Lalonde',    tel:'819-849-3344', desc:'Fromages artisanaux de lait cru de vaches Jersiaises en pâturage.', abonne:true, plan:'ferme' },
  'ferme3@test.com':         { nom:'Paul Bouchard',    email:'ferme3@test.com',          mdp:'123456',       type:'ferme',        ville:'Magog',      nomferme:'Rucher Saint-Paul',     tel:'450-868-1122', desc:'80 ruches en lisière de forêt. Miel non pasteurisé depuis 1998.', abonne:true, plan:'ferme' },
  'info@semencesempire.ca':  { nom:'Marie-Eve Simard', email:'info@semencesempire.ca',   mdp:'semences2026', type:'distributeur', ville:'Waterville', nomferme:'Semences Empire inc.',  tel:'819-837-0777', desc:'Entreprise de distribution de semences agricoles au Québec.', abonne:true, plan:'distributeur' },
  'info@supravert.com':      { nom:'Marie-Eve Simard', email:'info@supravert.com',       mdp:'supravert2026',type:'distributeur', ville:'Waterville', nomferme:'Supra Vert inc.',       tel:'819-452-3619', desc:'Entreprise de distribution de semences à gazon et de fleurs indigènes.', abonne:true, plan:'distributeur' },
  'dist@test.com':           { nom:'Pierre Côté',      email:'dist@test.com',            mdp:'123456',       type:'distributeur', ville:'Sherbrooke', nomferme:'Semences Bio QC',       tel:'819-555-1234', desc:'200+ variétés de semences certifiées biologiques.', abonne:true, plan:'distributeur' },
  'comm@test.com':           { nom:'Sophie Martin',    email:'comm@test.com',            mdp:'123456',       type:'commercant',   ville:'Magog',      nomferme:'Épicerie Bio Magog',    tel:'450-555-9999', desc:'Épicerie fine spécialisée en produits bio locaux.', abonne:true, plan:'commercant' },
};

export const PRODUITS_PUBLICS = [
  { id:'p1', emoji:'🥕', nom:'Carottes Nantes bio',       cat:'Légumes',   desc:'Cueillie le matin même, fraîcheur garantie.',           prix:'3 $ / botte',    prixNum:3,   dispo:'Juin–Oct',        color:'#C4622D', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'both'    },
  { id:'p2', emoji:'🐓', nom:'Œufs de ferme (doz.)',      cat:'Œufs',      desc:'Poules en plein air, nourries aux grains bio.',         prix:'7 $ / doz.',     prixNum:7,   dispo:"Toute l'année",   color:'#3D6B4A', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'instant' },
  { id:'p3', emoji:'🥬', nom:'Panier légumes saison',     cat:'Légumes',   desc:'Assortiment de légumes de saison, cueillette hebdo.',   prix:'38 $ / panier',  prixNum:38,  dispo:'Juin–Nov',        color:'#3D6B4A', ferme:'Ferme Duval',        emailFerme:'ferme1@test.com', modeVente:'reserve' },
  { id:'p4', emoji:'🧀', nom:'Fromage St-Laurent',        cat:'Fromages',  desc:'Pâte semi-ferme affinée 3 mois, lait cru.',             prix:'14 $ / 200g',    prixNum:14,  dispo:"Toute l'année",   color:'#C97D12', ferme:'Fromagerie Lalonde', emailFerme:'ferme2@test.com', modeVente:'both'    },
  { id:'p5', emoji:'🍯', nom:'Miel de trèfle',            cat:'Miel',      desc:'Non pasteurisé, récolte estivale des Cantons.',         prix:'18 $ / 500g',    prixNum:18,  dispo:'Août–Sept',       color:'#C97D12', ferme:'Rucher Saint-Paul',  emailFerme:'ferme3@test.com', modeVente:'both'    },
];

export const STRIPE_LINKS = {
  ferme:        'https://buy.stripe.com/test_VOTRE_LIEN_FERME',
  distributeur: 'https://buy.stripe.com/test_VOTRE_LIEN_DISTRIBUTEUR',
  commercant:   'https://buy.stripe.com/test_VOTRE_LIEN_COMMERCANT',
};

export const PLANS = [
  { id:'debutant',   emoji:'🌱', nom:'Débutant',   prix:'29,99',  produits:'0–25 produits',   couleur:'#6A9E77', features:['Vitrine producteur','Fiche profil complète','Jusqu\'à 25 produits','Réservations clients','Support par courriel'] },
  { id:'croissance', emoji:'🌿', nom:'Croissance', prix:'49,99',  produits:'26–50 produits',  couleur:'#3D6B4A', features:['Tout Débutant +','Jusqu\'à 50 produits','Achat immédiat activé','Commandes récurrentes','Statistiques de base'] },
  { id:'pro',        emoji:'🚀', nom:'Pro',        prix:'69,99',  produits:'51–100 produits', couleur:'#C97D12', vedette:true, features:['Tout Croissance +','Jusqu\'à 100 produits','Priorité dans les résultats','Publicités incluses','Tableau de bord avancé'] },
  { id:'illimites',  emoji:'💎', nom:'Illimités',  prix:'79,99',  produits:'200+ produits',   couleur:'#7A2E45', features:['Tout Pro +','Produits illimités','Position premium','Gestionnaire de compte','API partenaire'] },
];

export const FERMES_DEMO = [
  { nom:'Ferme Duval',          loc:'Compton',     dist:'12 km', emoji:'🌾', type:'maraicher',  produits:'Tomates · Laitue · Carottes',   certif:'Bio certifié', note:4.9, avis:47 },
  { nom:'Fromagerie Lalonde',   loc:'Cookshire',   dist:'35 km', emoji:'🧀', type:'fromager',   produits:'Fromages artisanaux',           certif:'Bio certifié', note:5.0, avis:31 },
  { nom:'Rucher Saint-Paul',    loc:'Saint-Élie',  dist:'28 km', emoji:'🐝', type:'apiculteur', produits:'Miel · Œufs',                   certif:'Bio certifié', note:4.7, avis:22 },
  { nom:'Les Jardins Émeraude', loc:'Sherbrooke',  dist:'45 km', emoji:'🥬', type:'maraicher',  produits:'Légumes · Herbes',              certif:'Bio certifié', note:4.8, avis:18 },
  { nom:'Ferme du Lac',         loc:'Lac-Mégantic',dist:'58 km', emoji:'🐄', type:'laitier',    produits:'Lait · Beurre · Yogourt',       certif:'Naturel',      note:4.6, avis:14 },
  { nom:'Boucherie Bio Cantons',loc:'Coaticook',   dist:'52 km', emoji:'🥩', type:'eleveur',    produits:'Bœuf · Porc · Agneau',          certif:'Bio certifié', note:4.9, avis:26 },
];

// Traductions FR/EN
export const TRANSLATIONS = {
  fr: {
    navFermes: '🌾 Fermes', navProduits: '🥕 Produits',
    navDist: '📦 Distributeurs', navComm: '🏪 Commerçants',
    navRejoindre: 'Rejoindre le réseau →', navConnexion: '👤 Connexion',
    tagline: 'Marché bio du Québec',
    heroBadge: 'Réseau agricole du Québec',
    heroTitle: 'Le marché bio qui connecte', heroEm: 'fermes & acheteurs',
    heroSub: 'Accédez directement aux producteurs bio certifiés des Cantons-de-l\'Est et de tout le Québec.',
    btnFermes: '🔍 Découvrir les fermes', btnRejoindre: 'Rejoindre le réseau →',
    footerLinks: ['Nos fermes','Distributeurs','S\'inscrire','Parrainage'],
  },
  en: {
    navFermes: '🌾 Farms', navProduits: '🥕 Products',
    navDist: '📦 Distributors', navComm: '🏪 Merchants',
    navRejoindre: 'Join the network →', navConnexion: '👤 Login',
    tagline: 'Quebec\'s organic marketplace',
    heroBadge: 'Quebec Agricultural Network',
    heroTitle: 'The bio market connecting', heroEm: 'farms & buyers',
    heroSub: 'Access certified organic producers directly from the Eastern Townships and all of Quebec.',
    btnFermes: '🔍 Discover farms', btnRejoindre: 'Join the network →',
    footerLinks: ['Our farms','Distributors','Sign up','Referral'],
  },
};
