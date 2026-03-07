// ═══════════════════════════════════════════════
// Le Panier Vert — App.jsx (point d'entrée)
// ═══════════════════════════════════════════════
import React from 'react';
import './styles/global.css';

import { useApp }           from './hooks/useApp';
import Navbar               from './components/Navbar';
import Footer               from './components/Footer';
import PanierDrawer         from './components/PanierDrawer';
import ModalContact         from './components/ModalContact';

import PageAccueil          from './pages/PageAccueil';
import PageFermes           from './pages/PageFermes';
import PageProduits         from './pages/PageProduits';
import PageCommercants      from './pages/PageCommercants';
import PageDistributeurs    from './pages/PageDistributeurs';
import PageAbonnements      from './pages/PageAbonnements';
import PageMonCompte        from './pages/PageMonCompte';
import { PageConnexion, PageInscription } from './pages/PageAuth';
import { PageAjouterProduit, PageParrainage } from './pages/PageProduitParrainage';

export default function App() {
  const app = useApp();

  const renderPage = () => {
    switch (app.page) {
      case 'accueil':        return <PageAccueil       lang={app.lang}            navigate={app.navigate} />;
      case 'fermes':         return <PageFermes        setModal={app.setModal}    navigate={app.navigate} />;
      case 'produits':       return <PageProduits      produits={app.produits}    ajouterAuPanier={app.ajouterAuPanier} currentUser={app.currentUser} />;
      case 'commercants':    return <PageCommercants   setModal={app.setModal}    navigate={app.navigate} />;
      case 'distributeurs':  return <PageDistributeurs setModal={app.setModal}    navigate={app.navigate} />;
      case 'abonnements':    return <PageAbonnements   navigate={app.navigate} />;
      case 'connexion':      return <PageConnexion     connexion={app.connecter}  navigate={app.navigate} />;
      case 'inscription':    return <PageInscription   inscription={app.inscrire} navigate={app.navigate} />;
      case 'moncompte':      return <PageMonCompte     currentUser={app.currentUser} deconnexion={app.deconnecter} navigate={app.navigate} produits={app.produits} />;
      case 'ajouterproduit': return <PageAjouterProduit currentUser={app.currentUser} ajouterProduit={app.ajouterProduit} navigate={app.navigate} />;
      case 'parrainage':     return <PageParrainage    currentUser={app.currentUser} navigate={app.navigate} />;
      default:               return <PageAccueil       lang={app.lang}            navigate={app.navigate} />;
    }
  };

  return (
    <>
      <Navbar
        page={app.page}
        lang={app.lang}
        setLang={app.setLang}
        currentUser={app.currentUser}
        navigate={app.navigate}
        totalPanier={app.totalPanier}
        setPanierOpen={app.setShowCart}
      />

      <div className="divider" />

      <main>
        {renderPage()}
      </main>

      <Footer navigate={app.navigate} lang={app.lang} />

      <PanierDrawer
        panier={app.panier}
        totalPanier={app.totalPanier}
        retirerDuPanier={app.retirerDuPanier}
        viderPanier={app.viderPanier}
        open={app.showCart}
        setOpen={app.setShowCart}
        navigate={app.navigate}
      />

      <ModalContact
        modal={app.modal}
        onClose={() => app.setModal(null)}
        lang={app.lang}
      />
    </>
  );
}
