// ═══════════════════════════════════════════════
// Le Panier Vert — Page Mon Compte (tableau de bord)
// ═══════════════════════════════════════════════
import React, { useRef } from 'react';

const TYPE_CONFIG = {
  ferme:        { color:'#3D6B4A', label:'Ferme bio',       e:'🌾', actions:[['📦 Mes produits','ajouterproduit'],['📊 Mes ventes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  distributeur: { color:'#C97D12', label:'Distributeur',    e:'📦', actions:[['📦 Mes produits','ajouterproduit'],['📊 Mes ventes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  commercant:   { color:'#BF4E22', label:'Commerçant',      e:'🏪', actions:[['🔍 Chercher fermes','commercants'],['📅 Mes commandes','moncompte'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
  consommateur: { color:'#6A9E77', label:'Consommateur',    e:'🛒', actions:[['🥕 Parcourir produits','produits'],['🌾 Voir les fermes','fermes'],['🤝 Parrainage','parrainage'],['⚙️ Mon profil','moncompte']] },
};

export default function PageMonCompte({ currentUser, deconnexion, navigate, produits, ajouterProduit }) {
  const fileInputRef = useRef(null);

  if (!currentUser) {
    navigate('connexion');
    return null;
  }

  const cfg = TYPE_CONFIG[currentUser.type] || TYPE_CONFIG.consommateur;
  const mesProduits = produits.filter(p => p.emailFerme === currentUser.email);
  const code = 'PANIER-' + currentUser.nom.split(' ')[0].toUpperCase().substring(0, 5);

  const telechargerModele = async () => {
    const XLSX = await import('xlsx');
    const lignes = [
      ['nom','categorie','description','prix','prix_num','disponibilite','emoji','mode_vente','image'],
      ['Carottes Nantes bio','Légumes','Fraîches du matin, non lavées','3 $ / botte','3',"Juin–Oct",'🥕','both',''],
      ['Miel de trèfle','Miel','Non pasteurisé, récolte estivale','18 $ / 500g','18',"Août–Sept",'🍯','instant',''],
    ];
    const ws = XLSX.utils.aoa_to_sheet(lignes);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Produits');
    XLSX.writeFile(wb, 'modele_produits_paniervert.xlsx');
  };

  const importerExcel = async (e) => {
    const file = e.target.files[0];
    if (!file || !ajouterProduit) return;
    try {
      const XLSX = await import('xlsx');
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data);
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws);
      let count = 0;
      rows.forEach(row => {
        const nom = row['nom'] || row['Nom'] || '';
        if (!nom.trim()) return;
        ajouterProduit({
          nom:       nom.trim(),
          cat:       row['categorie'] || row['Catégorie'] || 'Autre',
          desc:      row['description'] || row['Description'] || '',
          prix:      row['prix'] || row['Prix'] || '',
          prixNum:   parseFloat(row['prix_num'] || row['Prix num'] || 0) || 0,
          dispo:     row['disponibilite'] || row['Disponibilité'] || "Toute l'année",
          emoji:     row['emoji'] || row['Emoji'] || '📦',
          modeVente: row['mode_vente'] || row['Mode vente'] || 'both',
          image:     (row['image'] || row['Image'] || '').trim() || null,
          color:     '#3D6B4A',
          ferme:     currentUser.nomferme || currentUser.nom,
          emailFerme: currentUser.email,
        });
        count++;
      });
      alert(`✅ ${count} produit${count>1?'s':''} importé${count>1?'s':''} avec succès !`);
    } catch {
      alert('❌ Erreur lors de la lecture du fichier. Vérifiez le format.');
    }
    e.target.value = '';
  };

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
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', marginBottom:'14px' }}>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#1E2D1A' }}>
                  Mes produits ({mesProduits.length})
                </div>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  <button
                    style={{ background:'#FFFCF5', border:'1.5px solid #D0AA88', color:'#6B5B45', borderRadius:'6px', padding:'7px 14px', cursor:'pointer', fontSize:'12px', fontWeight:600, fontFamily:"'Source Sans 3',sans-serif" }}
                    onClick={telechargerModele}
                  >
                    📥 Modèle Excel
                  </button>
                  <button
                    style={{ background:'#FFFCF5', border:'1.5px solid #3D6B4A', color:'#3D6B4A', borderRadius:'6px', padding:'7px 14px', cursor:'pointer', fontSize:'12px', fontWeight:600, fontFamily:"'Source Sans 3',sans-serif" }}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  >
                    📊 Importer Excel
                  </button>
                  <input ref={fileInputRef} type="file" accept=".xlsx,.xls" style={{ display:'none' }} onChange={importerExcel} />
                  <button className="btn-fern" onClick={() => navigate('ajouterproduit')}>
                    + Ajouter un produit
                  </button>
                </div>
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
                      {p.image ? (
                        <img src={p.image} alt={p.nom} style={{ width:'48px', height:'48px', objectFit:'cover', borderRadius:'6px', flexShrink:0 }} onError={e=>{e.target.style.display='none';}} />
                      ) : (
                        <span style={{ fontSize:'32px' }}>{p.emoji}</span>
                      )}
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
