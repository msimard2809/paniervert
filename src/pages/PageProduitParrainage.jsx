// ═══════════════════════════════════════════════
// Le Panier Vert — Page Ajouter Produit
// ═══════════════════════════════════════════════
import React, { useState } from 'react';

const EMOJIS = ['🥕','🥬','🍅','🥦','🧅','🌽','🫑','🍓','🍎','🫐','🍇','🧀','🥚','🍯','🥩','🐓','🌾','🫙','🌿','🌸'];
const CATS   = ['Légumes','Fruits','Fromages','Œufs','Miel','Viandes','Céréales','Conserves','Herbes','Semences','Autre'];

export function PageAjouterProduit({ currentUser, ajouterProduit, navigate }) {
  const [emoji, setEmoji]       = useState('🥕');
  const [nom, setNom]           = useState('');
  const [cat, setCat]           = useState('Légumes');
  const [desc, setDesc]         = useState('');
  const [prix, setPrix]         = useState('');
  const [prixNum, setPrixNum]   = useState('');
  const [dispo, setDispo]       = useState('');
  const [mode, setMode]         = useState('both');
  const [err, setErr]           = useState('');
  const [ok, setOk]             = useState('');

  if (!currentUser || (currentUser.type !== 'ferme' && currentUser.type !== 'distributeur')) {
    navigate('connexion');
    return null;
  }

  const soumettre = () => {
    setErr(''); setOk('');
    if (!nom || !prix) { setErr('Veuillez remplir le nom et le prix.'); return; }
    ajouterProduit({
      emoji, nom, cat, desc, prix,
      prixNum: parseFloat(prixNum) || parseFloat(prix) || 0,
      dispo: dispo || "Toute l'année",
      color: '#3D6B4A',
      ferme: currentUser.nomferme || currentUser.nom,
      emailFerme: currentUser.email,
      modeVente: mode,
    });
    setOk('✅ Produit ajouté avec succès !');
    setNom(''); setPrix(''); setPrixNum(''); setDesc(''); setDispo('');
    setTimeout(() => navigate('moncompte'), 1500);
  };

  return (
    <div className="page-enter">
      <div className="form-wrap" style={{ paddingTop:'60px', maxWidth:'640px' }}>
        <div className="form-box">
          <h2>📦 Ajouter un produit</h2>
          <p>Votre produit sera visible publiquement sur la plateforme.</p>
          {err && <div className="msg-err">{err}</div>}
          {ok  && <div className="msg-ok">{ok}</div>}

          {/* Emoji */}
          <label>Emoji du produit</label>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'14px' }}>
            {EMOJIS.map(e => (
              <button key={e} onClick={() => setEmoji(e)} style={{
                fontSize:'22px', padding:'6px 8px', border: emoji===e ? '2px solid #3D6B4A' : '1px solid #D0AA88',
                borderRadius:'6px', background: emoji===e ? '#F0FFF0' : '#FFFCF5', cursor:'pointer',
              }}>{e}</button>
            ))}
          </div>

          <label>Nom du produit *</label>
          <input placeholder="Ex: Carottes Nantes bio" value={nom} onChange={e=>setNom(e.target.value)} />

          <label>Catégorie</label>
          <select value={cat} onChange={e=>setCat(e.target.value)}>
            {CATS.map(c => <option key={c}>{c}</option>)}
          </select>

          <label>Description</label>
          <textarea placeholder="Décrivez votre produit, origine, méthode de culture…" value={desc} onChange={e=>setDesc(e.target.value)} />

          <label>Prix affiché (ex: 3 $ / botte) *</label>
          <input placeholder="Ex: 3 $ / botte" value={prix} onChange={e=>setPrix(e.target.value)} />

          <label>Prix numérique ($) — pour le panier</label>
          <input type="number" placeholder="3.00" step="0.01" value={prixNum} onChange={e=>setPrixNum(e.target.value)} />

          <label>Disponibilité</label>
          <input placeholder="Ex: Juin–Oct ou Toute l'année" value={dispo} onChange={e=>setDispo(e.target.value)} />

          <label>Mode de vente</label>
          <select value={mode} onChange={e=>setMode(e.target.value)}>
            <option value="instant">⚡ Achat immédiat seulement</option>
            <option value="reserve">📅 Réservation seulement</option>
            <option value="both">⚡📅 Les deux</option>
          </select>

          <button className="btn-submit" style={{ background:'#BF4E22' }} onClick={soumettre}>
            Publier le produit →
          </button>
          <button className="btn-back" onClick={() => navigate('moncompte')}>
            Retour au tableau de bord
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// Le Panier Vert — Page Parrainage
// ═══════════════════════════════════════════════
export function PageParrainage({ currentUser, navigate }) {
  const [copie, setCopie] = useState(false);
  const code = currentUser
    ? 'PANIER-' + currentUser.nom.split(' ')[0].toUpperCase().substring(0, 5)
    : 'PANIER-XXXX';

  const copierCode = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopie(true);
    setTimeout(() => setCopie(false), 2000);
  };

  const steps = [
    { e:'🔗', t:'Partagez votre code', d:'Envoyez votre code unique à un ami producteur ou distributeur.' },
    { e:'🌱', t:'Il s\'inscrit',        d:'Votre ami crée son compte et entre votre code lors de l\'inscription.' },
    { e:'🎁', t:'1 mois offert',        d:'Vous recevez tous les deux un mois d\'abonnement gratuit.' },
  ];

  return (
    <div className="page-enter">
      <section style={{ background:'#EDE4CF', padding:'72px 48px', textAlign:'center', borderTop:'3px solid #D0AA88' }}>
        <div style={{ maxWidth:'700px', margin:'0 auto' }}>
          <div className="sec-eyebrow">Recommandez Le Panier Vert</div>
          <h2 className="sec-title">🤝 Programme de parrainage</h2>

          <div style={{ background:'#FFFCF5', borderRadius:'16px', padding:'36px', border:'2px solid #D0AA88' }}>
            <h3 style={{ fontFamily:"'Abril Fatface',serif", color:'#1E2D1A', fontSize:'24px', marginBottom:'10px' }}>
              1 parrainage = 1 mois offert à vous deux
            </h3>
            <p style={{ color:'#6B5B45', fontFamily:"'Merriweather',serif", fontStyle:'italic', fontSize:'13px', lineHeight:1.7, marginBottom:'24px' }}>
              Invitez une ferme, un distributeur ou un commerçant à rejoindre Le Panier Vert.<br/>
              Dès qu'il s'abonne, vous recevez tous les deux un mois gratuit.
            </p>

            {/* Étapes */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px', marginBottom:'24px' }}>
              {steps.map((s,i) => (
                <div key={i} style={{ textAlign:'center', padding:'14px' }}>
                  <div style={{ fontSize:'32px', marginBottom:'8px' }}>{s.e}</div>
                  <div style={{ fontWeight:700, color:'#1E2D1A', fontSize:'13px', marginBottom:'4px' }}>{s.t}</div>
                  <div style={{ color:'#9B8B7A', fontSize:'11px', lineHeight:1.5, fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{s.d}</div>
                </div>
              ))}
            </div>

            {/* Code */}
            <div className="parrainage-code" onClick={copierCode}>
              {copie ? '✅ Copié !' : code}
            </div>
            <div style={{ fontSize:'12px', color:'#9B8B7A', marginBottom:'20px' }}>
              {copie ? '✅ Code copié dans le presse-papiers' : '👆 Cliquez pour copier votre code'}
            </div>

            {!currentUser && (
              <button className="btn-primary" onClick={() => navigate('inscription')}>
                Créer un compte pour obtenir votre code →
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
