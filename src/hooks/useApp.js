import { useState, useCallback } from 'react';
import { USERS_DEMO, PRODUITS_PUBLICS } from '../data';

const COMMISSION = 0.08;

function loadStorage() {
  try {
    const u = localStorage.getItem('pv_users');
    const p = localStorage.getItem('pv_produits');
    return {
      users:    u ? { ...USERS_DEMO, ...JSON.parse(u) } : { ...USERS_DEMO },
      produits: p ? JSON.parse(p) : [...PRODUITS_PUBLICS],
    };
  } catch {
    return { users: { ...USERS_DEMO }, produits: [...PRODUITS_PUBLICS] };
  }
}

export function useApp() {
  const stored = loadStorage();
  const [page,         setPage]        = useState('accueil');
  const [currentUser,  setCurrentUser] = useState(null);
  const [lang,         setLangState]   = useState('fr');
  const [users,        setUsers]       = useState(stored.users);
  const [produits,     setProduits]    = useState(stored.produits);
  const [panier,       setPanier]      = useState([]);
  const [modal,        setModal]       = useState(null);
  const [showCart,     setShowCart]    = useState(false);
  const [showConfirm,  setShowConfirm] = useState(false);
  const [typeInscript, setTypeInscript]= useState('');

  const navigate = useCallback((id) => { setPage(id); window.scrollTo(0,0); }, []);
  const setLang  = useCallback((l)  => setLangState(l), []);

  const connecter = useCallback((email, mdp) => {
    const u = users[email];
    if (!u) return 'Courriel introuvable.';
    if (u.mdp !== mdp) return 'Mot de passe incorrect.';
    setCurrentUser(u);
    return null;
  }, [users]);

  const deconnecter = useCallback(() => { setCurrentUser(null); navigate('accueil'); }, [navigate]);

  const inscrire = useCallback((data) => {
    const newUser = { ...data, abonne: false };
    const updated = { ...users, [data.email]: newUser };
    setUsers(updated);
    try { localStorage.setItem('pv_users', JSON.stringify(
      Object.fromEntries(Object.entries(updated).filter(([k]) => !USERS_DEMO[k]))
    )); } catch {}
    setCurrentUser(newUser);
  }, [users]);

  const ajouterProduit = useCallback((prod) => {
    const np = { ...prod, id: 'u' + Date.now() };
    const updated = [...produits, np];
    setProduits(updated);
    try { localStorage.setItem('pv_produits', JSON.stringify(
      updated.filter(p => !PRODUITS_PUBLICS.find(x => x.id === p.id))
    )); } catch {}
  }, [produits]);

  const supprimerProduit = useCallback((id) => {
    const updated = produits.filter(p => p.id !== id);
    setProduits(updated);
    try { localStorage.setItem('pv_produits', JSON.stringify(
      updated.filter(p => !PRODUITS_PUBLICS.find(x => x.id === p.id))
    )); } catch {}
  }, [produits]);

  const ajouterAuPanier = useCallback((produit) => {
    setPanier(prev => {
      const ex = prev.find(i => i.id === produit.id);
      if (ex) return prev.map(i => i.id === produit.id ? {...i, qty: i.qty+1} : i);
      return [...prev, {...produit, qty:1}];
    });
    setShowCart(true);
  }, []);

  const retirerDuPanier = useCallback((id) => setPanier(p => p.filter(i => i.id !== id)), []);
  const viderPanier = useCallback(() => setPanier([]), []);

  const totalPanier = panier.reduce((s,i) => s + (i.prixNum||0)*i.qty, 0);
  const commission  = totalPanier * COMMISSION;

  return {
    page, currentUser, lang, users, produits, panier, modal,
    showCart, showConfirm, typeInscript, totalPanier, commission,
    navigate, setLang, connecter, deconnecter, inscrire,
    ajouterProduit, supprimerProduit,
    ajouterAuPanier, retirerDuPanier, viderPanier,
    setModal, setShowCart, setShowConfirm, setTypeInscript,
  };
}
