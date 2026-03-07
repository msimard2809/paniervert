// ═══════════════════════════════════════════════
// Le Panier Vert — Page Abonnements
// ═══════════════════════════════════════════════
import React from 'react';
import { PLANS } from '../data';

export default function PageAbonnements({ navigate, currentUser }) {
  return (
    <div className="page-enter">
      <div className="plans-wrap" style={{ background:'#1E2D1A', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

          <div className="sec-eyebrow" style={{ color:'#6A9E77' }}>Rejoindre le réseau</div>
          <h2 className="sec-title" style={{ color:'#FFFCF5' }}>Choisissez votre plan</h2>
          <p className="sec-sub" style={{ color:'rgba(181,213,190,0.7)', marginBottom:'8px' }}>
            Commencez gratuitement avec une vitrine de base. Passez à un plan payant pour vendre en ligne.
          </p>
          <p style={{ color:'rgba(181,213,190,0.5)', fontSize:'12px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'48px' }}>
            Commission de 8% sur les ventes en ligne uniquement · Acheteurs toujours 100% gratuits
          </p>

          <div className="plans-grid">
            {PLANS.map(p => (
              <div key={p.id} className={`plan${p.popular ? ' feat' : ''}`}>
                {p.popular && <div className="plan-pop">⭐ PLUS POPULAIRE</div>}
                <div className="plan-e">{p.emoji}</div>
                <div className="plan-nom">{p.nom}</div>
                <div className="plan-desc">{p.produits}</div>
                <div className="plan-prix">
                  {p.prix === '0' ? (
                    <span style={{ fontSize:'36px' }}>Gratuit</span>
                  ) : (
                    <>{p.prix}<span> $</span></>
                  )}
                </div>
                <div className="plan-per">
                  {p.prix === '0' ? 'pour toujours · aucune carte requise' : '/ mois · facturation mensuelle'}
                </div>
                <ul className="plan-ul">
                  {p.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button
                  className="btn-plan"
                  style={{ background: p.couleur || '#3D6B4A' }}
                  onClick={() => navigate(currentUser ? 'moncompte' : 'inscription')}
                >
                  {p.prix === '0' ? 'Commencer gratuitement →' : `Choisir ${p.nom} →`}
                </button>
              </div>
            ))}
          </div>

          {/* Comparaison gratuit vs payant */}
          <div style={{ marginTop:'48px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(181,213,190,0.15)', borderRadius:'14px', padding:'28px 32px', textAlign:'left' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'18px', color:'#FFFCF5', marginBottom:'18px', textAlign:'center' }}>
              🪴 Plan Vitrine gratuit — qu'est-ce que ça inclut ?
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
              <div>
                <div style={{ fontSize:'11px', color:'#6A9E77', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px' }}>✅ Inclus gratuitement</div>
                {['Fiche profil visible sur la plateforme','Apparaître dans l\'annuaire des fermes','Jusqu\'à 3 produits listés avec description','Bouton "Contacter" pour vos clients','Aucune limite de durée'].map((f,i) => (
                  <div key={i} style={{ fontSize:'13px', color:'rgba(181,213,190,0.8)', padding:'5px 0', borderBottom:'1px solid rgba(181,213,190,0.07)', fontFamily:"'Source Sans 3',sans-serif" }}>✓ {f}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize:'11px', color:'#C97D12', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px' }}>🚀 Plans payants ajoutent</div>
                {['Vente en ligne avec paiement Stripe/PayPal','Réservations et abonnements paniers','Plus de 3 produits (25, 50, 200+)','Priorité dans les résultats de recherche','Statistiques et tableau de bord'].map((f,i) => (
                  <div key={i} style={{ fontSize:'13px', color:'rgba(181,213,190,0.8)', padding:'5px 0', borderBottom:'1px solid rgba(181,213,190,0.07)', fontFamily:"'Source Sans 3',sans-serif" }}>+ {f}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Acheteurs */}
          <div style={{ marginTop:'24px', background:'rgba(61,107,74,0.15)', border:'1px solid rgba(61,107,74,0.3)', borderRadius:'14px', padding:'28px 32px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', color:'#FFFCF5', marginBottom:'8px' }}>
              🛒 Acheteurs — 100% gratuit, toujours.
            </div>
            <p style={{ color:'rgba(181,213,190,0.7)', fontSize:'14px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'18px' }}>
              Restaurants, épiceries, consommateurs — créez votre compte et commandez dès aujourd'hui. Sans abonnement.
            </p>
            <button className="btn-primary" onClick={() => navigate('inscription')}>
              Créer mon compte acheteur →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
