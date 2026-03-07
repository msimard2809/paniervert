// ═══════════════════════════════════════════════
// Le Panier Vert — Page Produits
// ═══════════════════════════════════════════════
import React, { useState } from 'react';

const CATS = ['Tous','Légumes','Œufs','Fromages','Miel','Semences'];

export default function PageProduits({ produits, ajouterAuPanier, currentUser }) {
  const [catActive, setCatActive] = useState('Tous');
  const [recherche, setRecherche]  = useState('');

  const filtres = produits.filter(p => {
    const matchCat = catActive === 'Tous' || p.cat === catActive;
    const matchQ   = p.nom.toLowerCase().includes(recherche.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="page-enter">
      <section style={{ background:'#F8F3E8', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow">Marché en ligne</div>
          <h2 className="sec-title">🥕 Produits disponibles</h2>
          <p className="sec-sub">Achetez directement aux fermes. Livraison ou cueillette. Paiement sécurisé Stripe ou PayPal.</p>

          {/* Filtres */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', flexWrap:'wrap', marginBottom:'32px' }}>
            <div className="prod-filters">
              {CATS.map(c => (
                <button key={c} className={`prod-filter${catActive===c?' active':''}`} onClick={()=>setCatActive(c)}>{c}</button>
              ))}
            </div>
            <input
              className="prod-search"
              placeholder="🔍 Rechercher..."
              value={recherche}
              onChange={e=>setRecherche(e.target.value)}
            />
          </div>

          {/* Grille produits */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'20px' }}>
            {filtres.map(p => (
              <div key={p.id} style={{
                background:'#FFFCF5', borderRadius:'14px', overflow:'hidden',
                boxShadow:'0 4px 20px rgba(42,31,20,0.1)', border:'1px solid #EDE4CF',
                transition:'all 0.3s',
              }}
                onMouseOver={e=>e.currentTarget.style.transform='translateY(-6px)'}
                onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}
              >
                {/* Couleur top */}
                <div style={{ background:`linear-gradient(135deg,${p.color}22,${p.color}44)`, padding:'28px 22px 20px', position:'relative' }}>
                  <span style={{ position:'absolute', top:'10px', right:'10px', background: p.modeVente==='reserve' ? '#3D6B4A' : '#C97D12', color:'#FFFCF5', borderRadius:'4px', padding:'2px 8px', fontSize:'9px', fontWeight:700, textTransform:'uppercase' }}>
                    {p.modeVente==='instant' ? '⚡ Achat immédiat' : p.modeVente==='reserve' ? '📅 Réservation' : '⚡ Achat & Résa'}
                  </span>
                  <span style={{ fontSize:'48px', display:'block', marginBottom:'10px' }}>{p.emoji}</span>
                  <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'18px', color:'#1E2D1A', marginBottom:'4px' }}>{p.nom}</div>
                  <div style={{ fontSize:'10px', color:'#3D6B4A', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'8px' }}>
                    🌾 {p.ferme}
                  </div>
                  <div style={{ fontSize:'12px', color:'#6B5B45', fontFamily:"'Merriweather',serif", fontStyle:'italic', lineHeight:1.6 }}>{p.desc}</div>
                </div>

                <div style={{ padding:'16px 22px', borderTop:'1px solid #EDE4CF' }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'12px' }}>
                    <div>
                      <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', color: p.color }}>{p.prix}</div>
                      <div style={{ fontSize:'10px', color:'#9B8B7A' }}>📅 {p.dispo}</div>
                    </div>
                    <span style={{ background:'#EDE4CF', color:'#1E2D1A', borderRadius:'4px', padding:'3px 9px', fontSize:'10px', fontWeight:700 }}>
                      {p.cat}
                    </span>
                  </div>
                  <div style={{ display:'flex', gap:'8px' }}>
                    {(p.modeVente === 'instant' || p.modeVente === 'both') && (
                      <button
                        onClick={() => ajouterAuPanier(p)}
                        style={{ flex:1, padding:'10px', background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'6px', fontSize:'12px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}
                      >
                        🛒 Acheter
                      </button>
                    )}
                    {(p.modeVente === 'reserve' || p.modeVente === 'both') && (
                      <button
                        onClick={() => ajouterAuPanier(p)}
                        style={{ flex:1, padding:'10px', background:'#3D6B4A', color:'#FFFCF5', border:'none', borderRadius:'6px', fontSize:'12px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}
                      >
                        📅 Réserver
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtres.length === 0 && (
            <div style={{ padding:'48px', color:'#9B8B7A', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>
              Aucun produit trouvé pour cette sélection.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
