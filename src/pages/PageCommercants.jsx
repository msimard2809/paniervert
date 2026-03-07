// ═══════════════════════════════════════════════
// Le Panier Vert — Page Commerçants (Hub complet)
// ═══════════════════════════════════════════════
import React, { useState } from 'react';

const ONGLETS = [
  { id:'recherche', label:'🔍 Trouver des producteurs' },
  { id:'commander', label:'🛒 Commander' },
  { id:'recurrent', label:'📦 Approvisionnement régulier' },
  { id:'carte',     label:'📍 Carte des fournisseurs' },
  { id:'fiches',    label:'⭐ Fiches producteurs' },
];

const FERMES_COMM = [
  { emoji:'🌾', nom:'Ferme Duval',          loc:'Compton',      km:'12 km',  note:'★★★★★ 4.9', tags:['🍅 Tomates','🥬 Verdures','🥕 Carottes'],  bg:'linear-gradient(135deg,#D8F3DC,#A4D8B4)', badge:'✅ Bio certifié', badgeC:'#3D6B4A', desc:'Maraîcher bio depuis 1987. Livraison lun & ven. Cmd min. 50 $.' },
  { emoji:'🧀', nom:'Fromagerie Lalonde',    loc:'Cookshire',    km:'35 km',  note:'★★★★★ 5.0', tags:['🧀 Fromage chèvre','🥛 Lait cru'],          bg:'linear-gradient(135deg,#FFF8DC,#FFE680)', badge:'✅ Bio certifié', badgeC:'#C97D12', desc:'Fromages artisanaux. Cmd min. 120 $. Livraison lundi.' },
  { emoji:'🍯', nom:'Rucher Saint-Paul',     loc:'Saint-Élie',   km:'28 km',  note:'★★★★☆ 4.7', tags:['🍯 Miel','🥚 Oeufs','🕯️ Cire'],            bg:'linear-gradient(135deg,#FEF3C7,#FCD34D)', badge:'🐝 Apiculteur', badgeC:'#BF4E22', desc:'Miel non pasteurisé. Cmd min. 80 $. Cueillette ou livraison.' },
  { emoji:'🥬', nom:'Les Jardins Émeraude',  loc:'Sherbrooke',   km:'45 km',  note:'★★★★★ 4.8', tags:['🌿 Herbes','🌸 Fleurs comestibles'],         bg:'linear-gradient(135deg,#D1FAE5,#6EE7B7)', badge:'✅ Bio certifié', badgeC:'#3D6B4A', desc:'Serre 4 saisons. Cmd min. 40 $. Livraison mercredi.' },
  { emoji:'🐄', nom:'Ferme du Lac',          loc:'Lac-Mégantic', km:'58 km',  note:'★★★★☆ 4.6', tags:['🥛 Lait bio','🧈 Beurre','🥛 Yogourt'],      bg:'linear-gradient(135deg,#E0F0FF,#93C5FD)', badge:'🥛 Laitier',     badgeC:'#3D6F8F', desc:'Lait bio. Cmd min. 150 $. Livraison vendredi.' },
  { emoji:'🥩', nom:'Boucherie Bio Cantons', loc:'Coaticook',    km:'52 km',  note:'★★★★★ 4.9', tags:['🐄 Boeuf','🐖 Porc','🐑 Agneau'],            bg:'linear-gradient(135deg,#FFE4E6,#FCA5A5)', badge:'🥩 Éleveur',    badgeC:'#7A2E45', desc:'Découpes sur mesure. Cmd min. 200 $. Emballage sous-vide.' },
];

function PanelRecherche({ setModal, navigate }) {
  const [prod, setProd] = useState('Tous les produits');
  const [region, setRegion] = useState("Toute la province");

  return (
    <section style={{ background:'#F8F3E8', padding:'48px' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div className="sec-eyebrow">Trouvez vos fournisseurs</div>
          <h3 className="sec-title" style={{ fontSize:'30px' }}>🔍 Recherche de producteurs bio</h3>
          <p className="sec-sub" style={{ marginBottom:'0' }}>Filtrez par région, produit, certification et distance. Contactez directement.</p>
        </div>

        {/* Barre recherche */}
        <div style={{ background:'#1E2D1A', borderRadius:'14px', padding:'24px', marginBottom:'24px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr auto', gap:'10px', alignItems:'end' }}>
            <div>
              <div style={{ color:'#A8CCB4', fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'6px' }}>🥕 Produit</div>
              <select value={prod} onChange={e=>setProd(e.target.value)} style={{ width:'100%', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(181,213,190,0.3)', color:'#FFFCF5', borderRadius:'7px', padding:'10px 12px', fontSize:'12px', fontFamily:"'Source Sans 3',sans-serif" }}>
                {['Tous les produits','🥕 Légumes','🍎 Fruits','🧀 Fromages','🥩 Viandes','🥚 Oeufs','🍯 Miel','🌾 Céréales','🫙 Conserves'].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <div style={{ color:'#A8CCB4', fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'6px' }}>📍 Région</div>
              <select value={region} onChange={e=>setRegion(e.target.value)} style={{ width:'100%', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(181,213,190,0.3)', color:'#FFFCF5', borderRadius:'7px', padding:'10px 12px', fontSize:'12px', fontFamily:"'Source Sans 3',sans-serif" }}>
                {["Toute la province","Cantons-de-l'Est","Montérégie","Laurentides","Chaudière-Appalaches"].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <div style={{ color:'#A8CCB4', fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'6px' }}>📏 Distance</div>
              <select style={{ width:'100%', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(181,213,190,0.3)', color:'#FFFCF5', borderRadius:'7px', padding:'10px 12px', fontSize:'12px', fontFamily:"'Source Sans 3',sans-serif" }}>
                {['50 km','100 km','150 km','Province entière'].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <button style={{ background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'7px', padding:'11px 20px', fontSize:'13px', fontWeight:700, cursor:'pointer', height:'42px', whiteSpace:'nowrap' }}>
              Chercher →
            </button>
          </div>
          <div style={{ marginTop:'14px', padding:'12px', background:'rgba(255,255,255,0.05)', borderRadius:'8px', border:'1px solid rgba(181,213,190,0.12)', display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
            <span style={{ color:'#6A9E77', fontSize:'10px', fontWeight:700, textTransform:'uppercase' }}>Exemple :</span>
            <span style={{ color:'#FFFCF5', fontSize:'12px' }}>🧀 Fromage bio · rayon 100 km</span>
            <span style={{ color:'#6A9E77' }}>→</span>
            <span style={{ background:'rgba(106,158,119,0.3)', border:'1px solid #6A9E77', color:'#A8CCB4', borderRadius:'5px', padding:'2px 10px', fontSize:'11px', fontWeight:700 }}>3 fermes trouvées ✓</span>
          </div>
        </div>

        {/* Grille fermes */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
          <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#1E2D1A' }}>
            Producteurs disponibles <span style={{ color:'#3D6B4A', fontSize:'16px' }}>(6 résultats)</span>
          </div>
        </div>
        <div className="annuaire-grid">
          {FERMES_COMM.map((f, i) => (
            <div key={i} className="fiche" onClick={() => setModal({ nom:f.nom, loc:f.loc+', QC', tel:'819-000-0000', email:'info@ferme.ca', hrs:'Lun–Ven 8h–17h' })}>
              <div className="fiche-top" style={{ background: f.bg }}>
                <span className="fiche-coup" style={{ background: f.badgeC }}>{f.badge}</span>
                <span className="fiche-e">{f.emoji}</span>
                <div className="fiche-nom">{f.nom}</div>
                <div className="fiche-loc">📍 {f.loc} · {f.km}</div>
                <div className="fiche-desc">{f.desc}</div>
                <div className="fiche-tags">{f.tags.map((t,j)=><span key={j} className="tag">{t}</span>)}</div>
              </div>
              <div className="fiche-foot">
                <div className="fiche-hrs"><strong>{f.note}</strong></div>
                <button className="btn-fern">Contacter →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelCommander({ navigate }) {
  const commande = [
    { e:'🍅', item:'Tomates bio (variétés)', qty:'30 kg' },
    { e:'🥬', item:'Laitue & verdures',      qty:'20 têtes' },
    { e:'🥚', item:'Oeufs calibre gros',     qty:'15 douzaines' },
    { e:'🧀', item:'Fromage de chèvre',      qty:'5 kg' },
    { e:'🍯', item:'Miel de trèfle',         qty:'3 bocaux' },
  ];
  const assignees = [
    { e:'🌾', nom:'Ferme Duval',          info:'Compton · 12 km · Livraison vendredi', items:'Tomates + Laitue' },
    { e:'🍯', nom:'Rucher Saint-Paul',    info:'Saint-Élie · 28 km · Cueillette dispo', items:'Oeufs + Miel' },
    { e:'🧀', nom:'Fromagerie Lalonde',   info:'Cookshire · 35 km · Livraison lundi',  items:'Fromage' },
  ];

  return (
    <section style={{ background:'#F8F3E8', padding:'48px' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div className="sec-eyebrow">Commande professionnelle</div>
          <h3 className="sec-title" style={{ fontSize:'30px' }}>🛒 Commander directement aux fermes</h3>
          <p className="sec-sub" style={{ marginBottom:'0' }}>Légumes · Viande · Fromage · Miel · Oeufs. Livraison ou cueillette à la ferme.</p>
        </div>

        <div style={{ background:'#1E2D1A', borderRadius:'14px', padding:'28px', marginBottom:'24px' }}>
          <div style={{ color:'#A8CCB4', fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px' }}>
            💡 Exemple — Restaurant Le Terroir, Magog
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
            <div>
              <div style={{ color:'#6A9E77', fontSize:'11px', fontWeight:700, letterSpacing:'1px', marginBottom:'10px' }}>PANIER DU CHEF</div>
              {commande.map((c,i) => (
                <div key={i} style={{ background:'rgba(255,255,255,0.07)', borderRadius:'7px', padding:'10px 14px', display:'flex', justifyContent:'space-between', marginBottom:'7px' }}>
                  <span style={{ color:'#FFFCF5', fontSize:'12px' }}>{c.e} {c.item}</span>
                  <span style={{ color:'#C97D12', fontWeight:700, fontSize:'12px' }}>{c.qty}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ color:'#6A9E77', fontSize:'11px', fontWeight:700, letterSpacing:'1px', marginBottom:'10px' }}>FERMES ASSIGNÉES</div>
              {assignees.map((a,i) => (
                <div key={i} style={{ background:'rgba(106,158,119,0.2)', border:'1px solid rgba(106,158,119,0.4)', borderRadius:'7px', padding:'10px 14px', marginBottom:'7px' }}>
                  <div style={{ color:'#A8CCB4', fontSize:'12px', fontWeight:700 }}>{a.e} {a.nom} — {a.items}</div>
                  <div style={{ color:'rgba(181,213,190,0.55)', fontSize:'10px', marginTop:'2px' }}>{a.info}</div>
                </div>
              ))}
              <div style={{ background:'rgba(201,125,18,0.2)', border:'1px solid rgba(201,125,18,0.5)', borderRadius:'7px', padding:'10px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ color:'#FFFCF5', fontSize:'12px', fontWeight:700 }}>💰 Total estimé</span>
                <span style={{ color:'#C97D12', fontSize:'18px', fontWeight:700, fontFamily:"'Abril Fatface',serif" }}>487,50 $</span>
              </div>
              <div style={{ display:'flex', gap:'8px', marginTop:'10px' }}>
                <button onClick={() => navigate('inscription')} style={{ flex:1, padding:'10px', background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'7px', fontSize:'12px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>
                  ✅ Confirmer
                </button>
                <button style={{ padding:'10px 14px', background:'rgba(255,255,255,0.08)', color:'#A8CCB4', border:'1px solid rgba(181,213,190,0.3)', borderRadius:'7px', fontSize:'11px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>
                  💬 Négocier
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Catégories */}
        <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'18px', color:'#1E2D1A', marginBottom:'14px' }}>Parcourir par catégorie</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))', gap:'12px' }}>
          {[['🥕','Légumes','12'],['🍎','Fruits','8'],['🧀','Fromages','5'],['🥩','Viandes','7'],['🥚','Oeufs','10'],['🍯','Miel','6'],['🫙','Conserves','9'],['🌿','Herbes','6']].map(([e,n,c])=>(
            <div key={n} style={{ background:'#FFFCF5', border:'2px solid #EDE4CF', borderRadius:'10px', padding:'16px 12px', textAlign:'center', cursor:'pointer', transition:'all 0.2s' }}
              onMouseOver={e=>e.currentTarget.style.borderColor='#3D6B4A'} onMouseOut={e=>e.currentTarget.style.borderColor='#EDE4CF'}>
              <div style={{ fontSize:'30px', marginBottom:'5px' }}>{e}</div>
              <div style={{ fontSize:'12px', fontWeight:700, color:'#1E2D1A' }}>{n}</div>
              <div style={{ fontSize:'10px', color:'#3D6B4A', marginTop:'2px' }}>{c} fermes</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelRecurrent({ navigate }) {
  const commandes = [
    { e:'🍅', item:'Tomates bio',          ferme:'Ferme Duval, Compton',     freq:'Chaque lundi',     qty:'20 kg',       prix:'~76 $/sem' },
    { e:'🥬', item:'Laitue + verdures',    ferme:'Jardins Émeraude',         freq:'Chaque vendredi',  qty:'15 têtes',    prix:'~29 $/sem' },
    { e:'🥚', item:'Oeufs extra-gros',     ferme:'Rucher Saint-Paul',        freq:'Aux 2 semaines',   qty:'30 douzaines',prix:'~225$/2sem' },
    { e:'🧀', item:'Fromage de chèvre',    ferme:'Fromagerie Lalonde',       freq:'1er du mois',      qty:'8 kg',        prix:'~144 $/mois'},
  ];
  return (
    <section style={{ background:'#F8F3E8', padding:'48px' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div className="sec-eyebrow">Automatisez votre approvisionnement</div>
          <h3 className="sec-title" style={{ fontSize:'30px' }}>📦 Commandes récurrentes automatiques</h3>
          <p className="sec-sub" style={{ marginBottom:'0' }}>Configurez une fois. La ferme reçoit automatiquement chaque semaine. Zéro oubli.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginBottom:'28px' }}>
          {[['📝','1. Configurez','Choisissez produits, quantités et fréquence. Une seule fois.'],['🤝','2. La ferme accepte','Confirmation de disponibilité et prix fidèle. Relation de confiance.'],['✅','3. Livraison auto','Chaque semaine ou mois, votre commande part automatiquement.']].map(([e,t,d])=>(
            <div key={t} style={{ background:'#FFFCF5', borderRadius:'12px', padding:'24px', textAlign:'center', border:'2px solid #EDE4CF' }}>
              <div style={{ fontSize:'32px', marginBottom:'10px' }}>{e}</div>
              <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'16px', color:'#1E2D1A', marginBottom:'6px' }}>{t}</div>
              <div style={{ fontSize:'12px', color:'#6B5B45', fontFamily:"'Merriweather',serif", fontStyle:'italic', lineHeight:1.6 }}>{d}</div>
            </div>
          ))}
        </div>
        <div style={{ background:'#1E2D1A', borderRadius:'14px', padding:'24px' }}>
          <div style={{ color:'#A8CCB4', fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:'14px' }}>
            📅 Exemple — Commandes actives d'un restaurant
          </div>
          {commandes.map((c,i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.07)', borderRadius:'9px', padding:'12px 16px', display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:'12px', alignItems:'center', marginBottom:'8px' }}>
              <span style={{ fontSize:'22px' }}>{c.e}</span>
              <div>
                <div style={{ color:'#FFFCF5', fontWeight:700, fontSize:'13px' }}>{c.item}</div>
                <div style={{ color:'rgba(181,213,190,0.5)', fontSize:'10px', marginTop:'2px' }}>{c.ferme} · {c.freq}</div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ color:'#C97D12', fontSize:'13px', fontWeight:700 }}>{c.qty}</div>
                <div style={{ color:'rgba(181,213,190,0.4)', fontSize:'9px' }}>{c.prix}</div>
              </div>
              <span style={{ background:'rgba(106,158,119,0.25)', border:'1px solid #6A9E77', color:'#A8CCB4', borderRadius:'4px', padding:'2px 8px', fontSize:'9px', fontWeight:700 }}>ACTIF ✓</span>
            </div>
          ))}
          <div style={{ marginTop:'14px', padding:'12px 16px', background:'rgba(201,125,18,0.15)', border:'1px solid rgba(201,125,18,0.4)', borderRadius:'9px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ color:'#FFFCF5', fontSize:'12px', fontWeight:600 }}>Budget hebdomadaire automatisé</span>
            <span style={{ color:'#C97D12', fontSize:'20px', fontWeight:700, fontFamily:"'Abril Fatface',serif" }}>~473 $ / semaine</span>
          </div>
        </div>
        <div style={{ textAlign:'center', marginTop:'20px' }}>
          <button onClick={() => navigate('inscription')} style={{ background:'#3D6B4A', color:'#FFFCF5', border:'none', borderRadius:'8px', padding:'12px 28px', fontSize:'13px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>
            + Configurer mes commandes récurrentes
          </button>
        </div>
      </div>
    </section>
  );
}

function PanelCarte() {
  const pins = [
    { nom:'Ferme Duval',        x:40, y:36, bg:'#3D6B4A', e:'🌾' },
    { nom:'Fromagerie Lalonde', x:60, y:27, bg:'#C97D12', e:'🧀' },
    { nom:'Rucher Saint-Paul',  x:28, y:54, bg:'#BF4E22', e:'🐝' },
    { nom:'Jardins Émeraude',   x:70, y:52, bg:'#3D6B4A', e:'🥬' },
    { nom:'Ferme du Lac',       x:52, y:65, bg:'#C97D12', e:'🐄' },
    { nom:'Boucherie Bio CdE',  x:82, y:34, bg:'#7A2E45', e:'🥩' },
  ];
  return (
    <section style={{ background:'#F8F3E8', padding:'48px' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'24px' }}>
          <div className="sec-eyebrow">Navigation géographique</div>
          <h3 className="sec-title" style={{ fontSize:'30px' }}>📍 Carte des fournisseurs près de vous</h3>
          <p className="sec-sub" style={{ marginBottom:'0' }}>Visualisez toutes les fermes autour de votre établissement. Filtrez par produit.</p>
        </div>
        {/* Carte stylisée */}
        <div style={{ background:'#1E2D1A', borderRadius:'14px', overflow:'hidden', marginBottom:'20px', position:'relative', height:'380px', border:'2px solid #2A3D22' }}>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,#111D11,#0A150A)' }}>
            <div style={{ position:'absolute', left:0, top:'42%', right:0, height:'1px', background:'rgba(200,160,80,0.15)', transform:'rotate(-2deg)' }} />
            <div style={{ position:'absolute', left:'32%', top:0, bottom:0, width:'1px', background:'rgba(200,160,80,0.1)', transform:'rotate(6deg)' }} />
            <div style={{ position:'absolute', left:'65%', top:0, bottom:0, width:'1px', background:'rgba(200,160,80,0.1)', transform:'rotate(-4deg)' }} />
          </div>
          {/* Légende */}
          <div style={{ position:'absolute', top:'12px', left:'12px', zIndex:10, background:'rgba(20,35,20,0.94)', border:'1px solid #2A3D22', borderRadius:'9px', padding:'10px 12px' }}>
            <div style={{ color:'#A8CCB4', fontSize:'9px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'7px' }}>LÉGENDE</div>
            {[['#3D6B4A','Maraîcher'],['#C97D12','Laitier'],['#BF4E22','Apiculteur'],['#7A2E45','Transformateur']].map(([c,l])=>(
              <div key={l} style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'4px' }}>
                <span style={{ width:'8px', height:'8px', background:c, borderRadius:'50%', display:'inline-block' }} />
                <span style={{ color:'rgba(181,213,190,0.7)', fontSize:'10px' }}>{l}</span>
              </div>
            ))}
          </div>
          {/* Rayon */}
          <div style={{ position:'absolute', left:'40%', top:'36%', transform:'translate(-50%,-50%)', width:'150px', height:'150px', border:'2px dashed rgba(106,158,119,0.3)', borderRadius:'50%', pointerEvents:'none' }} />
          {/* Point actuel */}
          <div style={{ position:'absolute', left:'40%', top:'36%', transform:'translate(-50%,-50%)', zIndex:6 }}>
            <div style={{ width:'12px', height:'12px', background:'#5BA3D9', border:'3px solid white', borderRadius:'50%', boxShadow:'0 2px 8px rgba(0,0,0,0.5)' }} />
          </div>
          {/* Épingles */}
          {pins.map((p,i) => (
            <div key={i} style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, transform:'translate(-50%,-50%)', zIndex:5, cursor:'pointer' }}>
              <div style={{ background:p.bg, color:'white', borderRadius:'7px', padding:'3px 8px', fontSize:'9px', fontWeight:700, boxShadow:'0 3px 10px rgba(0,0,0,0.5)', whiteSpace:'nowrap', position:'relative' }}>
                {p.e} {p.nom}
                <div style={{ position:'absolute', bottom:'-5px', left:'50%', transform:'translateX(-50%)', borderLeft:'5px solid transparent', borderRight:'5px solid transparent', borderTop:`5px solid ${p.bg}` }} />
              </div>
            </div>
          ))}
          {/* Info */}
          <div style={{ position:'absolute', bottom:'12px', right:'12px', background:'rgba(20,35,20,0.94)', border:'1px solid #2A3D22', borderRadius:'9px', padding:'10px 12px' }}>
            <div style={{ color:'#A8CCB4', fontSize:'11px', fontWeight:700 }}>📍 Votre restaurant · Magog</div>
            <div style={{ color:'rgba(181,213,190,0.5)', fontSize:'9px', marginTop:'2px' }}>Rayon : 100 km</div>
            <div style={{ color:'#C97D12', fontSize:'12px', fontWeight:700, marginTop:'4px' }}>6 fermes dans la zone ✓</div>
          </div>
        </div>
        {/* Liste */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:'10px' }}>
          {pins.map((p,i) => (
            <div key={i} style={{ background:'#FFFCF5', borderRadius:'9px', padding:'12px', border:'1px solid #EDE4CF', display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', transition:'all 0.2s' }}
              onMouseOver={e=>e.currentTarget.style.borderColor='#3D6B4A'} onMouseOut={e=>e.currentTarget.style.borderColor='#EDE4CF'}>
              <span style={{ fontSize:'22px' }}>{p.e}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:'12px', color:'#1E2D1A' }}>{p.nom}</div>
              </div>
              <button style={{ background:'#3D6B4A', color:'white', border:'none', borderRadius:'5px', padding:'5px 9px', fontSize:'9px', fontWeight:700, cursor:'pointer' }}>Voir →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelFiches({ navigate }) {
  const produits = [
    ['🍅 Tomates (12 variétés)', true], ['🥬 Laitue & verdures', true],
    ['🥕 Carottes', true], ['🫑 Poivrons', true], ['🧅 Oignons', false], ['🌿 Herbes fraîches', true],
  ];
  return (
    <section style={{ background:'#F8F3E8', padding:'48px' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'28px' }}>
          <div className="sec-eyebrow">Transparence totale</div>
          <h3 className="sec-title" style={{ fontSize:'30px' }}>⭐ Fiches producteurs détaillées</h3>
          <p className="sec-sub" style={{ marginBottom:'0' }}>Photos · Certifications · Disponibilité · Historique qualité.</p>
        </div>
        <div style={{ background:'#FFFCF5', borderRadius:'14px', overflow:'hidden', boxShadow:'0 8px 36px rgba(0,0,0,0.1)', border:'2px solid #EDE4CF' }}>
          <div style={{ background:'linear-gradient(135deg,#1E2D1A,#2A3D22)', padding:'24px 28px', display:'grid', gridTemplateColumns:'60px 1fr auto', gap:'16px', alignItems:'center' }}>
            <span style={{ fontSize:'50px' }}>🌾</span>
            <div>
              <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'24px', color:'#FFFCF5' }}>Ferme Tremblay</div>
              <div style={{ color:'#A8CCB4', fontSize:'12px', marginTop:'3px' }}>📍 Compton, Cantons-de-l'Est · Famille Tremblay depuis 1974</div>
              <div style={{ display:'flex', gap:'6px', marginTop:'8px', flexWrap:'wrap' }}>
                <span style={{ background:'rgba(106,158,119,0.3)', border:'1px solid #6A9E77', color:'#A8CCB4', borderRadius:'4px', padding:'2px 8px', fontSize:'9px', fontWeight:700 }}>✅ BIO CERTIFIÉ ECOCERT</span>
                <span style={{ background:'rgba(201,125,18,0.25)', border:'1px solid #C97D12', color:'#FFD580', borderRadius:'4px', padding:'2px 8px', fontSize:'9px', fontWeight:700 }}>⭐ VENDEUR VEDETTE</span>
                <span style={{ background:'rgba(61,111,143,0.25)', border:'1px solid #3D6F8F', color:'#A8D4F0', borderRadius:'4px', padding:'2px 8px', fontSize:'9px', fontWeight:700 }}>📦 LIVRAISON DISPO</span>
              </div>
            </div>
            <div style={{ textAlign:'center', background:'rgba(255,255,255,0.1)', borderRadius:'9px', padding:'12px 16px' }}>
              <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'32px', color:'#C97D12' }}>4.9</div>
              <div style={{ color:'#A8CCB4', fontSize:'11px', fontWeight:700 }}>★★★★★</div>
              <div style={{ color:'rgba(181,213,190,0.5)', fontSize:'9px', marginTop:'2px' }}>52 avis pros</div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderTop:'2px solid #EDE4CF' }}>
            <div style={{ padding:'20px', borderRight:'1px solid #EDE4CF' }}>
              <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', color:'#3D6B4A', textTransform:'uppercase', marginBottom:'12px' }}>🥕 Produits</div>
              {produits.map(([p,dispo])=>(
                <div key={p} style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', borderBottom:'1px solid #EDE4CF', fontSize:'11px' }}>
                  <span>{p}</span>
                  <span style={{ fontWeight:700, color: dispo ? '#1A5C1A' : '#9B8B7A' }}>{dispo ? '✓ Dispo' : 'Saisonnier'}</span>
                </div>
              ))}
            </div>
            <div style={{ padding:'20px', borderRight:'1px solid #EDE4CF' }}>
              <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', color:'#3D6B4A', textTransform:'uppercase', marginBottom:'12px' }}>📋 Certifications</div>
              {[['#F0FFF0','#A8E6A8','#1A5C1A','✅ Ecocert Canada','Cert. bio · 2025'],['#FFF8E1','#FFD54F','#856404','🌱 Agriculture raisonnée','Gestion intégrée nuisibles'],['#E3F2FD','#90CAF9','#0D47A1','💧 Irrigation durable','Système goutte-à-goutte']].map(([bg,border,c,t,d])=>(
                <div key={t} style={{ background:bg, border:`1px solid ${border}`, borderRadius:'7px', padding:'8px 10px', marginBottom:'8px' }}>
                  <div style={{ color:c, fontSize:'11px', fontWeight:700 }}>{t}</div>
                  <div style={{ color:c, fontSize:'9px', opacity:0.7, marginTop:'2px' }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ padding:'20px' }}>
              <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', color:'#3D6B4A', textTransform:'uppercase', marginBottom:'12px' }}>📅 Livraison</div>
              {[['Cmd min.','50 $'],['Délai','48h avant'],['Jours','Lun & Ven'],['Zone','CdE · 60 km'],['Cueillette','✅ Dispo']].map(([k,v])=>(
                <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize:'11px', marginBottom:'7px' }}>
                  <span style={{ color:'#6B5B45' }}>{k}</span>
                  <span style={{ fontWeight:700 }}>{v}</span>
                </div>
              ))}
              <div style={{ display:'flex', flexDirection:'column', gap:'7px', marginTop:'12px' }}>
                <button onClick={() => navigate('inscription')} style={{ background:'#3D6B4A', color:'white', border:'none', borderRadius:'7px', padding:'9px', fontSize:'11px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>📦 Commander maintenant</button>
                <button onClick={() => navigate('inscription')} style={{ background:'#1E2D1A', color:'#A8CCB4', border:'1px solid #6A9E77', borderRadius:'7px', padding:'9px', fontSize:'11px', fontWeight:600, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>💬 Contacter & Négocier</button>
                <button style={{ background:'#C97D12', color:'white', border:'none', borderRadius:'7px', padding:'9px', fontSize:'11px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>📅 Commande récurrente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageCommercants({ setModal, navigate }) {
  const [onglet, setOnglet] = useState('recherche');

  const renderPanel = () => {
    switch(onglet) {
      case 'recherche': return <PanelRecherche setModal={setModal} navigate={navigate} />;
      case 'commander': return <PanelCommander navigate={navigate} />;
      case 'recurrent': return <PanelRecurrent navigate={navigate} />;
      case 'carte':     return <PanelCarte />;
      case 'fiches':    return <PanelFiches navigate={navigate} />;
      default:          return <PanelRecherche setModal={setModal} navigate={navigate} />;
    }
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <div style={{ background:'linear-gradient(135deg,#1A1235,#2D1B4E,#1A0F30)', padding:'56px 48px 36px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 15% 60%,rgba(201,125,18,0.2) 0%,transparent 55%),radial-gradient(ellipse at 85% 25%,rgba(122,46,69,0.2) 0%,transparent 50%)', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1, maxWidth:'860px', margin:'0 auto' }}>
          <div style={{ display:'inline-block', background:'rgba(201,125,18,0.2)', border:'1px solid rgba(201,125,18,0.5)', color:'#FFD580', borderRadius:'4px', padding:'5px 14px', fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px' }}>
            Hub d'approvisionnement professionnel
          </div>
          <h2 style={{ fontFamily:"'Abril Fatface',serif", fontSize:'42px', color:'#FFFCF5', marginBottom:'12px' }}>
            🏪 Espace <span style={{ color:'#C97D12' }}>Commerçants</span>
          </h2>
          <p style={{ fontSize:'15px', color:'rgba(200,185,255,0.85)', fontFamily:"'Merriweather',serif", fontStyle:'italic', lineHeight:1.65, marginBottom:'24px' }}>
            Restaurants · Épiceries fines · Cafés · Marchés · Transformateurs · Hôtels<br/>
            Approvisionnez-vous directement aux fermes bio. <strong style={{ color:'#FFD580' }}>Gratuit pour les acheteurs.</strong>
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px', maxWidth:'600px', margin:'0 auto 24px' }}>
            {[['50+','Fermes','#C97D12'],['100%','Bio certifié','#A8E6CF'],['0 $','Pour acheteurs','#BF4E22'],['Direct','Ferme → cuisine','#FFD580']].map(([n,l,c])=>(
              <div key={l} style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'10px', padding:'12px 8px', textAlign:'center' }}>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', color:c }}>{n}</div>
                <div style={{ fontSize:'9px', color:'rgba(200,185,255,0.6)', letterSpacing:'1px', textTransform:'uppercase', marginTop:'2px' }}>{l}</div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('inscription')} style={{ background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'8px', padding:'12px 28px', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", boxShadow:'0 4px 20px rgba(191,78,34,0.45)' }}>
            Créer mon compte acheteur gratuit →
          </button>
        </div>
      </div>

      {/* Onglets sticky */}
      <div style={{ background:'#FFFCF5', borderBottom:'2px solid #EDE4CF', position:'sticky', top:'72px', zIndex:100, overflowX:'auto' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 24px', display:'flex', minWidth:'600px' }}>
          {ONGLETS.map(o => (
            <button key={o.id} className={`comm-tab${onglet===o.id?' active':''}`} onClick={() => setOnglet(o.id)}>
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Panel actif */}
      {renderPanel()}

      {/* Section avantages */}
      <section style={{ background:'linear-gradient(135deg,#1E2D1A,#1A1235)', padding:'48px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', textAlign:'center' }}>
          <div style={{ color:'#C97D12', fontSize:'10px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', marginBottom:'8px' }}>Pourquoi rejoindre</div>
          <h3 style={{ fontFamily:"'Abril Fatface',serif", fontSize:'28px', color:'#FFFCF5', marginBottom:'28px' }}>Le vrai avantage pour les commerçants</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'14px', marginBottom:'28px' }}>
            {[['🆓','100% gratuit','Les acheteurs ne paient jamais.'],['🔍','Trouvez l\'introuvable','Fermes bio certifiées exclusives.'],['📦','Commandes auto','Approvisionnement récurrent hebdo.'],['💰','Prix directs','Aucun intermédiaire. Économies réelles.'],['⭐','Valorisez votre menu','Badge Partenaire Le Panier Vert.'],['🤝','Relations durables','Priorité de réservation garantie.']].map(([e,t,d])=>(
              <div key={t} style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(181,213,190,0.13)', borderRadius:'11px', padding:'18px' }}>
                <div style={{ fontSize:'26px', marginBottom:'8px' }}>{e}</div>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'15px', color:'#FFFCF5', marginBottom:'5px' }}>{t}</div>
                <div style={{ fontSize:'11px', color:'rgba(181,213,190,0.65)', lineHeight:1.5, fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ background:'rgba(201,125,18,0.15)', border:'2px solid rgba(201,125,18,0.35)', borderRadius:'12px', padding:'22px 28px', marginBottom:'24px', textAlign:'center' }}>
            <div style={{ color:'#C97D12', fontSize:'11px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'6px' }}>💡 Exemple — valeur d'une seule relation</div>
            <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#FFFCF5', marginBottom:'12px' }}>Restaurant Le Terroir + Ferme Duval = 500 $/semaine</div>
            <div style={{ display:'flex', gap:'24px', justifyContent:'center', flexWrap:'wrap' }}>
              {[['26 000 $','Revenus ferme/an','#C97D12'],['2 080 $','Commission (8%)','#BF4E22'],['Menu ★★','Valorisation resto','#A8E6CF']].map(([n,l,c])=>(
                <div key={l} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'24px', color:c }}>{n}</div>
                  <div style={{ color:'rgba(181,213,190,0.5)', fontSize:'9px', textTransform:'uppercase', letterSpacing:'1px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
            <button onClick={() => navigate('inscription')} style={{ background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'9px', padding:'13px 36px', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>
              🏪 Créer mon compte acheteur gratuit
            </button>
            <button onClick={() => navigate('abonnements')} style={{ background:'transparent', color:'#A8CCB4', border:'2px solid rgba(181,213,190,0.35)', borderRadius:'9px', padding:'12px 24px', fontSize:'13px', fontWeight:600, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}>
              Voir les plans vendeurs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
