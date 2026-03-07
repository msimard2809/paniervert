// ═══════════════════════════════════════════════
// Le Panier Vert — Page Fermes
// ═══════════════════════════════════════════════
import React from 'react';

const FERMES = [
  { nom:'Ferme Duval', loc:'Compton, QC', tel:'450-835-2291', email:'ferme1@test.com', hrs:"Lun–Ven 7h–17h", bg:'linear-gradient(135deg,#D8F3DC,#A4D8B4)', emoji:'🌾', badge:'✅ Bio certifié', badgeColor:'#3D6B4A', tags:['🥕 Légumes','🥚 Oeufs','🫙 Conserves'], desc:'Maraîchers bio depuis 3 générations. Légumes cueillis le matin même. Paniers hebdomadaires disponibles.', note:'★★★★★ 4.9 (47 avis)' },
  { nom:'Fromagerie Lalonde', loc:'Coaticook, QC', tel:'819-849-3344', email:'ferme2@test.com', hrs:'Mar–Sam 9h–17h', bg:'linear-gradient(135deg,#FFF8DC,#FFE680)', emoji:'🧀', badge:'⭐ Coup de cœur', badgeColor:'#C97D12', tags:['🧀 Fromages','🥛 Lait cru','🐄 Artisanal'], desc:"Fromages artisanaux de lait cru. Vaches Jersiaises en pâturage libre. Spécialités des Cantons.", note:'★★★★★ 5.0 (31 avis)' },
  { nom:'Rucher Saint-Paul', loc:"Saint-Élie-d'Orford, QC", tel:'450-868-1122', email:'ferme3@test.com', hrs:"Lun–Sam 8h–18h", bg:'linear-gradient(135deg,#FEF3C7,#FCD34D)', emoji:'🍯', badge:'🐝 Apiculteur', badgeColor:'#BF4E22', tags:['🍯 Miel','🥚 Oeufs','🕯️ Cire'], desc:'80 ruches en lisière de forêt. Miel non pasteurisé depuis 1998. Récolte estivale uniquement.', note:'★★★★☆ 4.7 (22 avis)' },
  { nom:'Les Jardins Émeraude', loc:'Sherbrooke, QC', tel:'819-820-4400', email:'jardins@test.com', hrs:'Lun–Ven 7h–16h', bg:'linear-gradient(135deg,#D1FAE5,#6EE7B7)', emoji:'🥬', badge:'✅ Bio certifié', badgeColor:'#3D6B4A', tags:['🌿 Herbes','🌸 Fleurs','🏠 4 saisons'], desc:'Légumes feuilles, herbes aromatiques, fleurs comestibles. Serre 4 saisons. Disponible toute l\'année.', note:'★★★★★ 4.8 (18 avis)' },
  { nom:'Ferme du Lac', loc:'Lac-Mégantic, QC', tel:'819-583-5500', email:'lac@test.com', hrs:'Mar–Sam 8h–17h', bg:'linear-gradient(135deg,#E0F0FF,#93C5FD)', emoji:'🐄', badge:'🥛 Laitier', badgeColor:'#3D6F8F', tags:['🥛 Lait','🧈 Beurre','🥛 Yogourt'], desc:"Lait bio, beurre, yogourt, crème fraîche. Vaches Holstein en pâturage libre. Idéal restaurants.", note:'★★★★☆ 4.6 (14 avis)' },
  { nom:'Boucherie Bio Cantons', loc:'Coaticook, QC', tel:'819-849-6600', email:'boucherie@test.com', hrs:'Mer–Sam 9h–17h', bg:'linear-gradient(135deg,#FFE4E6,#FCA5A5)', emoji:'🥩', badge:'🥩 Éleveur', badgeColor:'#7A2E45', tags:['🐄 Boeuf','🐖 Porc','🐑 Agneau'], desc:'Boeuf, porc, agneau bio certifié. Découpes sur mesure pour restaurants. Emballage sous-vide pro.', note:'★★★★★ 4.9 (26 avis)' },
];

export default function PageFermes({ setModal, navigate }) {
  return (
    <div className="page-enter">
      <section style={{ background:'#F8F3E8', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow">Nos producteurs</div>
          <h2 className="sec-title">🌾 Fermes membres</h2>
          <p className="sec-sub">Fermes biologiques certifiées des Cantons-de-l'Est. Contactez-les directement, commandez leurs produits.</p>

          <div className="annuaire-grid">
            {FERMES.map((f, i) => (
              <div key={i} className="fiche" onClick={() => setModal({ nom:f.nom, loc:f.loc, tel:f.tel, email:f.email, hrs:f.hrs })}>
                <div className="fiche-top" style={{ background: f.bg }}>
                  <span className="fiche-coup" style={{ background: f.badgeColor }}>{f.badge}</span>
                  <span className="fiche-e">{f.emoji}</span>
                  <div className="fiche-nom">{f.nom}</div>
                  <div className="fiche-loc">📍 {f.loc}</div>
                  <div className="fiche-desc">{f.desc}</div>
                  <div className="fiche-tags">{f.tags.map((t,j) => <span key={j} className="tag">{t}</span>)}</div>
                </div>
                <div className="fiche-foot">
                  <div className="fiche-hrs">
                    <strong>{f.note}</strong>
                    {f.hrs}
                  </div>
                  <button className="btn-fern">📞 Contacter</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'48px', padding:'28px', background:'linear-gradient(135deg,#1E2D1A,#2A3D22)', borderRadius:'14px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', color:'#FFFCF5', marginBottom:'10px' }}>
              Vous avez une ferme bio ?
            </div>
            <p style={{ color:'rgba(181,213,190,0.7)', fontSize:'13px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'20px' }}>
              Créez votre vitrine et commencez à vendre en ligne dès aujourd'hui. Premier mois offert.
            </p>
            <button className="btn-primary" onClick={() => navigate('abonnements')}>
              Inscrire ma ferme →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
