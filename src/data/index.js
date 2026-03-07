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
  { id:'p1',  emoji:'🥕', nom:'Carottes Nantes bio',        cat:'Légumes',    desc:'Cueillie le matin même, fraîcheur garantie. Idéales pour jus et potages.',           prix:'3 $ / botte',    prixNum:3,   dispo:'Juin–Oct',         color:'#C4622D', ferme:'Ferme Duval',           emailFerme:'ferme1@test.com',  modeVente:'both'    },
  { id:'p2',  emoji:'🐓', nom:'Œufs de ferme (doz.)',       cat:'Œufs',       desc:'Poules en plein air, nourries aux grains bio. Jaune d\'œuf orangé garanti.',          prix:'7 $ / doz.',     prixNum:7,   dispo:"Toute l'année",    color:'#C97D12', ferme:'Ferme Duval',           emailFerme:'ferme1@test.com',  modeVente:'instant' },
  { id:'p3',  emoji:'🥬', nom:'Panier légumes saison',      cat:'Paniers',    desc:'Assortiment de 8–10 légumes de saison, cueillette hebdomadaire le vendredi.',         prix:'38 $ / panier',  prixNum:38,  dispo:'Juin–Nov',         color:'#3D6B4A', ferme:'Ferme Duval',           emailFerme:'ferme1@test.com',  modeVente:'reserve' },
  { id:'p4',  emoji:'🧀', nom:'Fromage St-Laurent',         cat:'Fromages',   desc:'Pâte semi-ferme affinée 3 mois, lait cru de Jersiaises. Médaille Or 2024.',           prix:'14 $ / 200g',    prixNum:14,  dispo:"Toute l'année",    color:'#C97D12', ferme:'Fromagerie Lalonde',    emailFerme:'ferme2@test.com',  modeVente:'both'    },
  { id:'p5',  emoji:'🍯', nom:'Miel de trèfle',             cat:'Miel',       desc:'Non pasteurisé, récolte estivale des Cantons. 80 ruches en lisière de forêt.',        prix:'18 $ / 500g',    prixNum:18,  dispo:'Août–Sept',        color:'#C97D12', ferme:'Rucher Saint-Paul',     emailFerme:'ferme3@test.com',  modeVente:'both'    },
  { id:'p6',  emoji:'🍅', nom:'Tomates heirloom assorties', cat:'Légumes',    desc:'Mélange de tomates patrimoniales colorées. Non OGM, récoltées à maturité.',           prix:'5 $ / lb',       prixNum:5,   dispo:'Juil–Sept',        color:'#BF4E22', ferme:'Les Jardins Émeraude',  emailFerme:'jardins@test.com', modeVente:'both'    },
  { id:'p7',  emoji:'🫙', nom:'Confiture fraises bio',      cat:'Conserves',  desc:'Fraises des champs de Compton, sans pectine ajoutée. Recette grand-mère.',             prix:'9 $ / 250ml',    prixNum:9,   dispo:"Toute l'année",    color:'#7A2E45', ferme:'Ferme Duval',           emailFerme:'ferme1@test.com',  modeVente:'instant' },
  { id:'p8',  emoji:'🥛', nom:'Lait bio entier (2L)',       cat:'Laitier',    desc:'Lait non homogénéisé de vaches Holstein en pâturage. Crème en surface.',               prix:'6 $ / 2L',       prixNum:6,   dispo:"Toute l'année",    color:'#3D6F8F', ferme:'Ferme du Lac',          emailFerme:'lac@test.com',     modeVente:'reserve' },
  { id:'p9',  emoji:'🌿', nom:'Herbes fraîches (sachet)',   cat:'Herbes',     desc:'Basilic, persil, coriandre, thym. Coupées le matin. Sachet de 3 variétés.',            prix:'4 $ / sachet',   prixNum:4,   dispo:'Mai–Oct',          color:'#3D6B4A', ferme:'Les Jardins Émeraude',  emailFerme:'jardins@test.com', modeVente:'instant' },
  { id:'p10', emoji:'🥩', nom:'Panier bœuf bio (2 kg)',     cat:'Viandes',    desc:'Mélange de coupes de bœuf Angus bio. Emballage sous-vide. Idéal BBQ.',                 prix:'55 $ / panier',  prixNum:55,  dispo:"Toute l'année",    color:'#7A2E45', ferme:'Boucherie Bio Cantons', emailFerme:'boucherie@test.com',modeVente:'reserve' },
  { id:'p11', emoji:'🧈', nom:'Beurre fermier (250g)',      cat:'Laitier',    desc:'Beurre de baratte, lait cru. Salé aux fleurs de sel du Québec. Saveur incomparable.', prix:'8 $ / 250g',     prixNum:8,   dispo:"Toute l'année",    color:'#C97D12', ferme:'Ferme du Lac',          emailFerme:'lac@test.com',     modeVente:'instant' },
  { id:'p12', emoji:'🫐', nom:'Petits fruits sauvages',     cat:'Fruits',     desc:'Bleuets, framboises, camerises. Cueillis à la main. Disponibles frais ou congelés.',   prix:'12 $ / pinte',   prixNum:12,  dispo:'Juil–Août',        color:'#3D6F8F', ferme:'Rucher Saint-Paul',     emailFerme:'ferme3@test.com',  modeVente:'both'    },
  { id:'p13', emoji:'🧀', nom:'Fromage Vieux Clocher',      cat:'Fromages',   desc:'Cheddar vieilli 12 mois. Lait cru. Saveur prononcée, idéal pour plateau.',             prix:'16 $ / 200g',    prixNum:16,  dispo:"Toute l'année",    color:'#C4622D', ferme:'Fromagerie Lalonde',    emailFerme:'ferme2@test.com',  modeVente:'both'    },
  { id:'p14', emoji:'🌾', nom:'Farine de blé intégral bio', cat:'Farines',    desc:'Blé rouge d\'automne cultivé à Compton. Mouture sur pierre. Sans agent de traitement.',prix:'7 $ / 2 kg',     prixNum:7,   dispo:"Toute l'année",    color:'#D0AA88', ferme:'Ferme Duval',           emailFerme:'ferme1@test.com',  modeVente:'instant' },
  { id:'p15', emoji:'🍎', nom:'Panier pommes variées (5kg)',cat:'Fruits',     desc:'McIntosh, Cortland, Empire. Verger bio certifié. Cueillette en Estrie.',               prix:'22 $ / 5kg',     prixNum:22,  dispo:'Sept–Nov',         color:'#BF4E22', ferme:'Les Jardins Émeraude',  emailFerme:'jardins@test.com', modeVente:'both'    },
];

export const STRIPE_LINKS = {
  ferme:        'https://buy.stripe.com/test_VOTRE_LIEN_FERME',
  distributeur: 'https://buy.stripe.com/test_VOTRE_LIEN_DISTRIBUTEUR',
  commercant:   'https://buy.stripe.com/test_VOTRE_LIEN_COMMERCANT',
};

export const PLANS = [
  { id:'gratuit',    emoji:'🪴', nom:'Vitrine',    prix:'0',      produits:'1–3 produits',    couleur:'#6A9E77', features:['Fiche profil visible','Jusqu\'à 3 produits listés','Bouton "Contacter" seulement','Pas de vente en ligne','Pas de commission'] },
  { id:'debutant',   emoji:'🌱', nom:'Débutant',   prix:'29,99',  produits:'0–25 produits',   couleur:'#3D6B4A', features:['Vitrine complète','Jusqu\'à 25 produits','Achat immédiat Stripe/PayPal','Réservations en ligne','Commission 8% / vente'] },
  { id:'croissance', emoji:'🌿', nom:'Croissance', prix:'49,99',  produits:'26–50 produits',  couleur:'#C97D12', popular:true, features:['Tout Débutant +','Jusqu\'à 50 produits','Commandes récurrentes','Statistiques de base','Support prioritaire'] },
  { id:'pro',        emoji:'🚀', nom:'Pro',        prix:'69,99',  produits:'51–200 produits', couleur:'#BF4E22', features:['Tout Croissance +','Jusqu\'à 200 produits','Priorité dans les résultats','Publicités incluses','Tableau de bord avancé'] },
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
