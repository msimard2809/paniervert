# 🧺 Le Panier Vert — React App

Marché bio du Québec — plateforme complète React.

---

## 🚀 Installation dans VS Code

### 1. Copiez les fichiers dans votre projet

Copiez le contenu de ce dossier dans :
```
C:\Users\mesco\projets\paniervert\
```

### 2. Ouvrez le terminal dans VS Code
```
Ctrl + `  (backtick)
```

### 3. Installez les dépendances
```bash
npm install
```

### 4. Lancez le projet
```bash
npm start
```

Le site s'ouvre automatiquement sur **http://localhost:3000** 🎉

---

## 📁 Structure des fichiers

```
src/
├── App.jsx                          ← Point d'entrée principal
├── index.js                         ← Montage React DOM
│
├── data/
│   └── data.js                      ← Données (users, produits, plans, traductions)
│
├── hooks/
│   └── useApp.js                    ← État global (navigation, auth, panier)
│
├── styles/
│   └── global.css                   ← Tous les styles CSS
│
├── components/
│   ├── Navbar.jsx                   ← Barre de navigation
│   ├── Footer.jsx                   ← Pied de page
│   ├── PanierDrawer.jsx             ← Tiroir panier flottant
│   └── ModalContact.jsx             ← Modal contact ferme
│
└── pages/
    ├── PageAccueil.jsx              ← Hero + portails + stats
    ├── PageFermes.jsx               ← Annuaire des fermes
    ├── PageProduits.jsx             ← Marché avec filtres
    ├── PageCommercants.jsx          ← Hub commerçants (5 onglets)
    ├── PageDistributeurs.jsx        ← Annuaire distributeurs
    ├── PageAbonnements.jsx          ← Plans tarifaires
    ├── PageAuth.jsx                 ← Connexion + Inscription
    ├── PageMonCompte.jsx            ← Tableau de bord membre
    └── PageProduitParrainage.jsx    ← Ajouter produit + Parrainage
```

---

## 🔑 Comptes de démonstration

| Type          | Courriel                    | Mot de passe   |
|---------------|-----------------------------|----------------|
| Consommateur  | client@test.com             | 123456         |
| Ferme 1       | ferme1@test.com             | 123456         |
| Ferme 2       | ferme2@test.com             | 123456         |
| Ferme 3       | ferme3@test.com             | 123456         |
| Distributeur  | info@semencesempire.ca      | semences2026   |
| Distributeur  | info@supravert.com          | supravert2026  |
| Commerçant    | comm@test.com               | 123456         |

---

## 💳 Stripe — Configurer les vrais liens

Dans `src/data/data.js`, remplacez les liens Stripe :

```js
export const STRIPE_LINKS = {
  debutant:   'https://buy.stripe.com/VOTRE_LIEN_DEBUTANT',
  croissance: 'https://buy.stripe.com/VOTRE_LIEN_CROISSANCE',
  pro:        'https://buy.stripe.com/VOTRE_LIEN_PRO',
  illimites:  'https://buy.stripe.com/VOTRE_LIEN_ILLIMITES',
};
```

---

## 🌐 Déploiement sur Vercel

```bash
npm run build
```
Puis poussez sur GitHub et connectez à Vercel.

---

## 📋 Plans tarifaires v18

| Plan       | Produits     | Prix/mois |
|------------|--------------|-----------|
| 🌱 Débutant  | 0–25         | 29,99 $   |
| 🌿 Croissance| 26–50        | 49,99 $   |
| 🚀 Pro       | 51–100       | 69,99 $   |
| 💎 Illimités | 200+         | 79,99 $   |

Commission : **8%** sur toutes les transactions.
Acheteurs : **Gratuit**.

---

*Le Panier Vert · lepaniervert.quebec · © 2026*
