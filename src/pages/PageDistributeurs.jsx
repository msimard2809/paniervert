// ═══════════════════════════════════════════════
// Le Panier Vert — Page Distributeurs
// ═══════════════════════════════════════════════
import React from 'react';

const DISTRIBUTEURS = [
  { nom:'Semences Empire inc.',   loc:'Waterville, QC', tel:'819-837-0777', email:'info@semencesempire.ca', hrs:"Lun–Ven 8h–17h", bg:'linear-gradient(135deg,#D8F3DC,#A4D8B4)', emoji:'🌱', badge:'⭐ Membre fondateur', badgeColor:'#3D6B4A', tags:['🌱 Semences bio','🌾 Céréales','📦 Gros volume'], desc:'Distribution de semences agricoles certifiées au Québec. Plus de 200 variétés disponibles.', note:'📦 Waterville, Cantons-de-l\'Est' },
  { nom:'Supra Vert inc.',         loc:'Waterville, QC', tel:'819-452-3619', email:'info@supravert.com',       hrs:"Lun–Ven 8h–17h", bg:'linear-gradient(135deg,#E0F0FF,#93C5FD)', emoji:'🌿', badge:'⭐ Membre fondateur', badgeColor:'#3D6F8F', tags:['🌿 Gazon','🌸 Fleurs indigènes','🌱 Semences'], desc:'Distribution de semences à gazon et de fleurs indigènes du Québec. Projets résidentiels et commerciaux.', note:'📦 Waterville, Cantons-de-l\'Est' },
  { nom:'Semences Bio QC',         loc:'Sherbrooke, QC', tel:'819-555-1234', email:'dist@test.com',            hrs:'Lun–Ven 9h–17h', bg:'linear-gradient(135deg,#FEF3C7,#FCD34D)', emoji:'🌾', badge:'✅ Bio certifié',    badgeColor:'#C97D12', tags:['🌾 Semences bio','🧪 Intrants','📋 Certifié Ecocert'], desc:'200+ variétés de semences certifiées biologiques. Livraison partout au Québec.', note:'📦 Sherbrooke, Estrie' },
  { nom:'Agro-Cantons Dist.',       loc:'Coaticook, QC', tel:'819-849-7700', email:'agrocantons@test.com',     hrs:'Lun–Sam 8h–17h', bg:'linear-gradient(135deg,#FFE4E6,#FCA5A5)', emoji:'🚜', badge:'🚜 Équipements',    badgeColor:'#7A2E45', tags:['🚜 Équipements','⚗️ Fertilisants','🌿 Bio'], desc:'Équipements agricoles, fertilisants et intrants bio. Conseils agronomiques inclus.', note:'📦 Coaticook, Cantons-de-l\'Est' },
];

export default function PageDistributeurs({ setModal, navigate }) {
  return (
    <div className="page-enter">
      <section style={{ background:'#F8F3E8', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow">Intrants et équipements</div>
          <h2 className="sec-title">📦 Distributeurs membres</h2>
          <p className="sec-sub">Semences, intrants biologiques, équipements agricoles. Fournisseurs certifiés qui approvisionnent les fermes membres.</p>

          <div className="annuaire-grid">
            {DISTRIBUTEURS.map((d, i) => (
              <div key={i} className="fiche" onClick={() => setModal({ nom:d.nom, loc:d.loc, tel:d.tel, email:d.email, hrs:d.hrs })}>
                <div className="fiche-top" style={{ background: d.bg }}>
                  <span className="fiche-coup" style={{ background: d.badgeColor }}>{d.badge}</span>
                  <span className="fiche-e">{d.emoji}</span>
                  <div className="fiche-nom">{d.nom}</div>
                  <div className="fiche-loc">📍 {d.loc}</div>
                  <div className="fiche-desc">{d.desc}</div>
                  <div className="fiche-tags">{d.tags.map((t,j)=><span key={j} className="tag">{t}</span>)}</div>
                </div>
                <div className="fiche-foot">
                  <div className="fiche-hrs"><strong>{d.note}</strong></div>
                  <button className="btn-fern">📞 Contacter</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'48px', padding:'28px', background:'linear-gradient(135deg,#1E2D1A,#2A3D22)', borderRadius:'14px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', color:'#FFFCF5', marginBottom:'10px' }}>
              Vous distribuez des intrants bio ?
            </div>
            <p style={{ color:'rgba(181,213,190,0.7)', fontSize:'13px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'20px' }}>
              Rejoignez le réseau Le Panier Vert et connectez-vous directement avec les fermes de votre région.
            </p>
            <button className="btn-primary" onClick={() => navigate('abonnements')}>
              Inscrire mon entreprise →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
