// ═══════════════════════════════════════════════
// Le Panier Vert — Page Mon Compte (tableau de bord)
// ═══════════════════════════════════════════════
import React from 'react';

const TYPE_CONFIG = {
  ferme:        { color:'#3D6B4A', label:'Ferme bio',       e:'🌾', actions:[['📦 Mes produits','ajouterproduit'],['📊 Mes ventes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  distributeur: { color:'#C97D12', label:'Distributeur',    e:'📦', actions:[['📦 Mes produits','ajouterproduit'],['📊 Mes ventes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  commercant:   { color:'#BF4E22', label:'Commerçant',      e:'🏪', actions:[['🔍 Chercher fermes','commercants'],['📅 Mes commandes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  consommateur: { color:'#6A9E77', label:'Consommateur',    e:'🛒', actions:[['🥕 Parcourir produits','produits'],['🌾 Voir les fermes','fermes'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
};

export default function PageMonCompte({ currentUser, deconnexion, navigate, produits }) {
  if (!currentUser) {
    navigate('connexion');
    return null;
  }

  const cfg = TYPE_CONFIG[currentUser.type] || TYPE_CONFIG.consommateur;
  const mesProduits = produits.filter(p => p.emailFerme === currentUser.email);
  const code = 'PANIER-' + currentUser.nom.split(' ')[0].toUpperCase().substring(0, 5);

  return (
    <div className="page-enter">
      <div style={{ background:'#F8F3E8', padding:'40px 24px', minHeight:'80vh' }}>
        <div className="dash-wrap">

          {/* Header */}
          <div className="dash-header">
            <div className="dash-ava" style={{ background: cfg.color }}>
              <span style={{ fontSize:'28px' }}>{cfg.e}</span>
            </div>
            <div>
              <div className="dash-nom">{currentUser.nom}</div>
              <div>
                <span className="dash-type" style={{ background: cfg.color + '22', color: cfg.color }}>
                  {cfg.label}
                </span>
                {currentUser.nomferme && (
                  <span style={{ marginLeft:'8px', fontSize:'13px', color:'#6B5B45', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>
                    · {currentUser.nomferme}
                  </span>
                )}
              </div>
              <div style={{ fontSize:'12px', color:'#9B8B7A', marginTop:'4px' }}>
                📍 {currentUser.ville || 'Québec'} · {currentUser.email}
              </div>
            </div>
            <button className="btn-logout" style={{ background:'rgba(196,98,45,0.1)', color:'#BF4E22', border:'1px solid rgba(196,98,45,0.3)', borderRadius:'6px', padding:'8px 16px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontWeight:700, fontSize:'12px', marginLeft:'auto' }}
              onClick={deconnexion}>
              Déconnexion
            </button>
          </div>

          {/* Stats */}
          <div className="dash-stats">
            {[
              { n: mesProduits.length || '—', l:'Produits listés',    bg:'#1E2D1A' },
              { n:'8 %',                       l:'Commission ventes',  bg:'#C97D12' },
              { n:'0 $',                       l:'Abonnement à jour',  bg:'#3D6B4A' },
              { n: code,                       l:'Code parrainage',    bg:'#BF4E22' },
            ].map((s,i) => (
              <div key={i} className="ds" style={{ background: s.bg }}>
                <div className="ds-n" style={{ fontSize: s.n.length > 6 ? '16px' : '28px' }}>{s.n}</div>
                <div className="ds-l">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Actions rapides */}
          <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#1E2D1A', marginBottom:'14px' }}>
            Actions rapides
          </div>
          <div className="dash-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:'14px', marginBottom:'28px' }}>
            {cfg.actions.map(([label, page], i) => (
              <div key={i} className="act-card" onClick={() => navigate(page)}>
                <div style={{ fontSize:'26px', marginBottom:'8px' }}>{label.split(' ')[0]}</div>
                <div style={{ fontFamily:"'Abril Fatface',serif", color:'#1E2D1A', fontSize:'14px', marginBottom:'4px' }}>
                  {label.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>

          {/* Mes produits (vendeurs) */}
          {(currentUser.type === 'ferme' || currentUser.type === 'distributeur') && (
            <div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'14px' }}>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#1E2D1A' }}>
                  Mes produits ({mesProduits.length})
                </div>
                <button className="btn-fern" onClick={() => navigate('ajouterproduit')}>
                  + Ajouter un produit
                </button>
              </div>

              {mesProduits.length === 0 ? (
                <div style={{ background:'#FFFCF5', borderRadius:'12px', padding:'32px', textAlign:'center', border:'2px dashed #EDE4CF' }}>
                  <div style={{ fontSize:'40px', marginBottom:'10px' }}>📦</div>
                  <div style={{ fontFamily:"'Merriweather',serif", fontStyle:'italic', color:'#9B8B7A', fontSize:'14px' }}>
                    Vous n'avez pas encore de produits listés.
                  </div>
                  <button className="btn-primary" style={{ marginTop:'16px' }} onClick={() => navigate('ajouterproduit')}>
                    Ajouter mon premier produit →
                  </button>
                </div>
              ) : (
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:'14px' }}>
                  {mesProduits.map(p => (
                    <div key={p.id} style={{ background:'#FFFCF5', borderRadius:'10px', padding:'16px', border:'1px solid #EDE4CF', display:'flex', gap:'12px', alignItems:'center' }}>
                      <span style={{ fontSize:'32px' }}>{p.emoji}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:700, fontSize:'13px', color:'#1E2D1A' }}>{p.nom}</div>
                        <div style={{ fontSize:'11px', color:'#9B8B7A', marginTop:'2px' }}>{p.cat} · {p.dispo}</div>
                        <div style={{ fontSize:'13px', fontWeight:700, color:'#C97D12', marginTop:'4px' }}>{p.prix}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
