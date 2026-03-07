// ═══════════════════════════════════════════════
// Le Panier Vert — Page Fermes
// ═══════════════════════════════════════════════
import React, { useState } from 'react';

const FERMES = [
  { nom:'Ferme Duval',            loc:'Compton',          region:'Cantons-de-l\'Est', tel:'450-835-2291', email:'ferme1@test.com', hrs:'Lun–Ven 7h–17h',  bg:'linear-gradient(135deg,#D8F3DC,#A4D8B4)', emoji:'🌾', badge:'✅ Bio certifié', badgeColor:'#3D6B4A', tags:['🥕 Légumes','🥚 Œufs','🫙 Conserves'], desc:'Maraîchers bio depuis 3 générations. Légumes cueillis le matin même. Paniers hebdomadaires disponibles.',                                 note:'★★★★★ 4.9', avis:'47 avis', coup:true  },
  { nom:'Fromagerie Lalonde',     loc:'Coaticook',        region:'Cantons-de-l\'Est', tel:'819-849-3344', email:'ferme2@test.com', hrs:'Mar–Sam 9h–17h',  bg:'linear-gradient(135deg,#FFF8DC,#FFE680)', emoji:'🧀', badge:'⭐ Coup de cœur', badgeColor:'#C97D12', tags:['🧀 Fromages','🥛 Lait cru','🐄 Artisanal'], desc:'Fromages artisanaux de lait cru. Vaches Jersiaises en pâturage libre. Médaille Or Caseus 2024.',              note:'★★★★★ 5.0', avis:'31 avis', coup:true  },
  { nom:'Rucher Saint-Paul',      loc:"Saint-Élie-d'Orford", region:'Cantons-de-l\'Est', tel:'450-868-1122', email:'ferme3@test.com', hrs:'Lun–Sam 8h–18h', bg:'linear-gradient(135deg,#FEF3C7,#FCD34D)', emoji:'🍯', badge:'🐝 Apiculteur',   badgeColor:'#BF4E22', tags:['🍯 Miel','🥚 Œufs','🕯️ Cire'],         desc:'80 ruches en lisière de forêt. Miel non pasteurisé depuis 1998. Récolte estivale uniquement.',                                          note:'★★★★☆ 4.7', avis:'22 avis', coup:false },
  { nom:'Les Jardins Émeraude',   loc:'Sherbrooke',       region:'Estrie',            tel:'819-820-4400', email:'jardins@test.com', hrs:'Lun–Ven 7h–16h', bg:'linear-gradient(135deg,#D1FAE5,#6EE7B7)', emoji:'🥬', badge:'✅ Bio certifié', badgeColor:'#3D6B4A', tags:['🌿 Herbes','🌸 Fleurs','🏠 4 saisons'], desc:'Légumes feuilles, herbes aromatiques, fleurs comestibles. Serre 4 saisons. Disponible toute l\'année.',                                 note:'★★★★★ 4.8', avis:'18 avis', coup:false },
  { nom:'Ferme du Lac',           loc:'Lac-Mégantic',     region:'Estrie',            tel:'819-583-5500', email:'lac@test.com',     hrs:'Mar–Sam 8h–17h', bg:'linear-gradient(135deg,#E0F0FF,#93C5FD)', emoji:'🐄', badge:'🥛 Laitier',     badgeColor:'#3D6F8F', tags:['🥛 Lait','🧈 Beurre','🥛 Yogourt'],   desc:'Lait bio, beurre, yogourt, crème fraîche. Vaches Holstein en pâturage libre. Idéal restaurants.',                                       note:'★★★★☆ 4.6', avis:'14 avis', coup:false },
  { nom:'Boucherie Bio Cantons',  loc:'Coaticook',        region:'Cantons-de-l\'Est', tel:'819-849-6600', email:'boucherie@test.com', hrs:'Mer–Sam 9h–17h', bg:'linear-gradient(135deg,#FFE4E6,#FCA5A5)', emoji:'🥩', badge:'🥩 Éleveur',  badgeColor:'#7A2E45', tags:['🐄 Bœuf','🐖 Porc','🐑 Agneau'],     desc:'Bœuf, porc, agneau bio certifié. Découpes sur mesure pour restaurants. Emballage sous-vide professionnel.',                             note:'★★★★★ 4.9', avis:'26 avis', coup:true  },
  { nom:'Verger Les Pommiers',    loc:'Dunham',           region:'Cantons-de-l\'Est', tel:'450-295-3300', email:'verger@test.com',  hrs:'Sam–Dim 9h–17h', bg:'linear-gradient(135deg,#FFE4CC,#FCA57A)', emoji:'🍎', badge:'✅ Bio certifié', badgeColor:'#BF4E22', tags:['🍎 Pommes','🍐 Poires','🍶 Cidre'],  desc:'20 variétés de pommes bio. Autocueillette en automne. Cidre artisanal et vinaigre de pomme.',                                           note:'★★★★★ 4.8', avis:'39 avis', coup:false },
  { nom:'Potager du Rang 4',      loc:'Magog',            region:'Cantons-de-l\'Est', tel:'819-843-1122', email:'potager@test.com', hrs:'Lun–Sam 7h–18h', bg:'linear-gradient(135deg,#DCFCE7,#86EFAC)', emoji:'🌱', badge:'🌱 Biologique',  badgeColor:'#3D6B4A', tags:['🧅 Alliums','🌽 Maïs','🥦 Crucifères'],'desc':'Spécialistes ail, oignons, maïs sucré et courges. Commandes par boîte pour restaurants et familles.',                                  note:'★★★★☆ 4.5', avis:'11 avis', coup:false },
  { nom:'La Bergerie du Sommet',  loc:'Orford',           region:'Cantons-de-l\'Est', tel:'819-868-0044', email:'bergerie@test.com', hrs:'Ven–Dim 9h–17h', bg:'linear-gradient(135deg,#F0E6FF,#C4B5FD)', emoji:'🐑', badge:'🐑 Éleveur',   badgeColor:'#7A2E45', tags:['🧀 Fromages','🥩 Agneau','🧶 Laine'],  desc:'Fromages de brebis affinés en cave naturelle. Agneau de lait disponible à Pâques et Noël.',                                             note:'★★★★★ 4.9', avis:'20 avis', coup:true  },
  { nom:'Ferme Maraîchère Lauzon',loc:'Richmond',         region:'Estrie',            tel:'819-826-5500', email:'lauzon@test.com',  hrs:'Mar–Sam 8h–17h', bg:'linear-gradient(135deg,#FEF9C3,#FDE68A)', emoji:'🌻', badge:'✅ Bio certifié', badgeColor:'#3D6B4A', tags:['🌻 Fleurs','🍓 Petits fruits','🥗 Salade'], desc:'Fleurs comestibles, salade mesclun, petits fruits. Livraison aux restaurants de Sherbrooke.',                                          note:'★★★★☆ 4.7', avis:'16 avis', coup:false },
  { nom:'Érablière du Chemin Neuf', loc:'Eastman',        region:'Cantons-de-l\'Est', tel:'450-297-3388', email:'erable@test.com',  hrs:'Mars–Avr, Lun–Dim', bg:'linear-gradient(135deg,#FEE2CC,#FCA5A5)', emoji:'🍁', badge:'🍁 Érablière', badgeColor:'#C4622D', tags:['🍁 Sirop','🍬 Bonbons','🫙 Beurre d\'érable'], desc:'Sirop d\'érable biologique certifié. 3 500 entailles. Visite de la cabane de mars à avril.',                                           note:'★★★★★ 5.0', avis:'58 avis', coup:true  },
  { nom:'Pépinière Bio Estrie',   loc:'Sainte-Catherine-de-Hatley', region:'Cantons-de-l\'Est', tel:'819-843-7700', email:'pepiniere@test.com', hrs:'Lun–Sam 8h–17h', bg:'linear-gradient(135deg,#D1FAE5,#34D399)', emoji:'🌿', badge:'🌿 Pépinière', badgeColor:'#3D6B4A', tags:['🌿 Plants potagers','🌳 Arbres fruitiers','🌷 Vivaces'], desc:'Plants de tomates, poivrons, courges. Arbres fruitiers rustiques. Conseil en permaculture.',  note:'★★★★☆ 4.6', avis:'9 avis',  coup:false },
];

const REGIONS = ['Toutes', "Cantons-de-l'Est", 'Estrie'];
const TYPES   = ['Tous types', 'Légumes', 'Fromages', 'Viandes', 'Fruits', 'Miel', 'Laitier'];

export default function PageFermes({ setModal, navigate }) {
  const [region,    setRegion]    = useState('Toutes');
  const [type,      setType]      = useState('Tous types');
  const [recherche, setRecherche] = useState('');
  const [coupOnly,  setCoupOnly]  = useState(false);

  const filtrees = FERMES.filter(f => {
    const matchRegion = region === 'Toutes'    || f.region === region;
    const matchCoup   = !coupOnly              || f.coup;
    const matchQ      = recherche === ''       || f.nom.toLowerCase().includes(recherche.toLowerCase()) || f.loc.toLowerCase().includes(recherche.toLowerCase());
    return matchRegion && matchCoup && matchQ;
  });

  return (
    <div className="page-enter">

      {/* ── Header ── */}
      <section className="section-pad" style={{ background:'#1E2D1A', textAlign:'center', paddingBottom:'40px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow" style={{ color:'#6A9E77' }}>Nos producteurs</div>
          <h2 style={{ fontFamily:"'Abril Fatface',serif", fontSize:'clamp(26px,3.5vw,42px)', color:'#FFFCF5', marginBottom:'14px' }}>
            🌾 Fermes membres
          </h2>
          <p style={{ color:'rgba(168,204,180,0.85)', fontFamily:"'Merriweather',serif", fontStyle:'italic', fontSize:'15px', lineHeight:1.7, maxWidth:'600px', margin:'0 auto 32px' }}>
            Fermes biologiques certifiées des Cantons-de-l'Est. Contactez-les directement, commandez leurs produits.
          </p>

          {/* Stats rapides */}
          <div style={{ display:'flex', gap:'24px', justifyContent:'center', flexWrap:'wrap', marginBottom:'8px' }}>
            {[
              { n:`${FERMES.length}`, l:'Fermes actives', c:'#C97D12' },
              { n:`${FERMES.filter(f=>f.coup).length}`, l:'Coups de cœur', c:'#BF4E22' },
              { n:'100%', l:'Bio certifié', c:'#6A9E77' },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'28px', color:s.c }}>{s.n}</div>
                <div style={{ fontSize:'10px', color:'rgba(181,213,190,0.6)', letterSpacing:'1px', textTransform:'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Filtres ── */}
      <section style={{ background:'#F8F3E8', padding:'24px 24px 0' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', gap:'10px', flexWrap:'wrap', alignItems:'center', justifyContent:'center' }}>

          <input
            placeholder="🔍 Nom ou ville..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            style={{ padding:'10px 14px', borderRadius:'8px', border:'1.5px solid #D0AA88', fontSize:'13px', fontFamily:"'Source Sans 3',sans-serif", background:'#FFFCF5', color:'#231A0F', outline:'none', minWidth:'200px' }}
          />

          <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
            {REGIONS.map(r => (
              <button key={r} onClick={() => setRegion(r)}
                style={{ background: region === r ? '#1E2D1A' : '#FFFCF5', color: region === r ? '#A8CCB4' : '#6B5B45', border:'1.5px solid', borderColor: region === r ? '#1E2D1A' : '#D0AA88', borderRadius:'6px', padding:'8px 14px', cursor:'pointer', fontSize:'12px', fontWeight:600, fontFamily:"'Source Sans 3',sans-serif", transition:'all 0.2s' }}>
                {r}
              </button>
            ))}
          </div>

          <button onClick={() => setCoupOnly(o => !o)}
            style={{ background: coupOnly ? '#C97D12' : '#FFFCF5', color: coupOnly ? '#FFFCF5' : '#6B5B45', border:'1.5px solid', borderColor: coupOnly ? '#C97D12' : '#D0AA88', borderRadius:'6px', padding:'8px 14px', cursor:'pointer', fontSize:'12px', fontWeight:700, fontFamily:"'Source Sans 3',sans-serif", transition:'all 0.2s' }}>
            ⭐ Coups de cœur seulement
          </button>
        </div>
      </section>

      {/* ── Grille ── */}
      <section style={{ background:'#F8F3E8', padding:'24px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>

          <div style={{ fontSize:'12px', color:'#9B8B7A', marginBottom:'16px', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>
            {filtrees.length} ferme{filtrees.length > 1 ? 's' : ''} trouvée{filtrees.length > 1 ? 's' : ''}
          </div>

          <div className="annuaire-grid">
            {filtrees.map((f, i) => (
              <div key={i} className="fiche" onClick={() => setModal({ nom:f.nom, loc:f.loc, tel:f.tel, email:f.email, hrs:f.hrs })}>
                <div className="fiche-top" style={{ background:f.bg }}>
                  <span className="fiche-coup" style={{ background:f.badgeColor }}>{f.badge}</span>
                  <span className="fiche-e">{f.emoji}</span>
                  <div className="fiche-nom">{f.nom}</div>
                  <div className="fiche-loc">📍 {f.loc}, QC &nbsp;·&nbsp; {f.region}</div>
                  <div className="fiche-desc">{f.desc}</div>
                  <div className="fiche-tags">{f.tags.map((t,j) => <span key={j} className="tag">{t}</span>)}</div>
                </div>
                <div className="fiche-foot">
                  <div className="fiche-hrs">
                    <strong>{f.note} <span style={{ fontWeight:400, fontSize:'10px', color:'#9B8B7A' }}>({f.avis})</span></strong>
                    🕐 {f.hrs}
                  </div>
                  <button className="btn-cnt">📞 Contacter</button>
                </div>
              </div>
            ))}
          </div>

          {filtrees.length === 0 && (
            <div style={{ padding:'60px', textAlign:'center', color:'#9B8B7A', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>
              Aucune ferme trouvée pour ces critères.
            </div>
          )}

          {/* CTA inscription */}
          <div style={{ marginTop:'48px', padding:'32px', background:'linear-gradient(135deg,#1E2D1A,#2A3D22)', borderRadius:'14px', textAlign:'center' }}>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'24px', color:'#FFFCF5', marginBottom:'10px' }}>
              🌱 Vous avez une ferme bio ?
            </div>
            <p style={{ color:'rgba(181,213,190,0.75)', fontSize:'14px', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'20px', lineHeight:1.7 }}>
              Créez votre vitrine, vendez en ligne et rejoignez {FERMES.length} fermes déjà membres. Premier mois offert.
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
