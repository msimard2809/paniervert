// ═══════════════════════════════════════════════
// Le Panier Vert — Page Abonnements
// ═══════════════════════════════════════════════
import React from 'react';
import { PLANS, STRIPE_LINKS } from '../data/data';

export default function PageAbonnements({ navigate }) {
  return (
    <div className="page-enter">
      <div className="plans-wrap" style={{ background:'#1E2D1A', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow" style={{ color:'#6A9E77' }}>Rejoindre le réseau</div>
          <h2 className="sec-title" style={{ color:'#FFFCF5' }}>Choisissez votre plan</h2>
          <p className="sec-sub" style={{ color:'rgba(181,213,190,0.7)' }}>
            Abonnement selon le nombre de produits. Commission de 8% sur les ventes. Acheteurs 100% gratuits.
          </p>

          <div className="plans-grid">
            {PLANS.map(p => (
              <div key={p.id} className={`plan${p.popular?' feat':''}`}>
                {p.popular && <div className="plan-pop">⭐ PLUS POPULAIRE</div>}
                <div className="plan-e">{p.emoji}</div>
                <div className="plan-nom">{p.nom}</div>
                <div className="plan-desc">{p.produits}</div>
                <div className="plan-prix">{p.prix}<span> $</span></div>
                <div className="plan-per">/ mois · facturation mensuelle</div>
                <ul className="plan-ul">
                  {p.features.map((f,i) => <li key={i}>{f}</li>)}
                </ul>
                <button
                  className="btn-plan"
                  style={{ background: p.color }}
                  onClick={() => window.open(STRIPE_LINKS[p.id] || '#', '_blank')}
                >
                  Choisir {p.nom} →
                </button>
              </div>
            ))}
          </div>

          {/* Acheteurs gratuit */}
          <div style={{ marginTop:'48px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(181,213,190,0.2)', borderRadius:'14px', padding:'32px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'28px', color:'#FFFCF5', marginBottom:'10px' }}>
              🛒 Vous êtes acheteur ? C'est 100% gratuit.
            </div>
            <p style={{ color:'rgba(181,213,190,0.7)', fontSize:'14px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'20px' }}>
              Restaurants, épiceries, consommateurs — créez votre compte et commandez dès aujourd'hui.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate('inscription')}
            >
              Créer mon compte acheteur →
            </button>
          </div>

          {/* Commission */}
          <div style={{ marginTop:'32px', color:'rgba(181,213,190,0.5)', fontSize:'12px', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>
            * Commission de 8% prélevée automatiquement sur chaque transaction via Stripe. Paiement sécurisé.
          </div>
        </div>
      </div>
    </div>
  );
}
