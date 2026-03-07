// ═══════════════════════════════════════════════
// Le Panier Vert — Modal contact ferme
// ═══════════════════════════════════════════════
import React from 'react';

export default function ModalContact({ modal, onClose, lang }) {
  if (!modal) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{ position:'absolute', top:'14px', right:'14px', background:'#EDE4CF', border:'none', borderRadius:'50%', width:'32px', height:'32px', cursor:'pointer', fontSize:'14px', color:'#231A0F' }}
        >✕</button>
        <h2>{modal.nom}</h2>
        <div style={{ color:'#3D6B4A', fontSize:'11px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'20px' }}>
          📍 {modal.loc}
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'14px', background:'#EDE4CF', borderRadius:'8px', padding:'13px 16px', border:'1px solid #D0AA88' }}>
            <span style={{ fontSize:'20px' }}>📞</span>
            <div>
              <strong style={{ display:'block', color:'#231A0F', fontSize:'13px' }}>Téléphone</strong>
              <small style={{ color:'#9B8B7A', fontSize:'11px', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{modal.tel}</small>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'14px', background:'#EDE4CF', borderRadius:'8px', padding:'13px 16px', border:'1px solid #D0AA88' }}>
            <span style={{ fontSize:'20px' }}>✉️</span>
            <div>
              <strong style={{ display:'block', color:'#231A0F', fontSize:'13px' }}>Courriel</strong>
              <small style={{ color:'#9B8B7A', fontSize:'11px', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{modal.email}</small>
            </div>
          </div>
          {modal.hrs && (
            <div style={{ display:'flex', alignItems:'center', gap:'14px', background:'#EDE4CF', borderRadius:'8px', padding:'13px 16px', border:'1px solid #D0AA88' }}>
              <span style={{ fontSize:'20px' }}>🕐</span>
              <div>
                <strong style={{ display:'block', color:'#231A0F', fontSize:'13px' }}>Heures d'ouverture</strong>
                <small style={{ color:'#9B8B7A', fontSize:'11px', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{modal.hrs}</small>
              </div>
            </div>
          )}
        </div>
        <div style={{ background:'rgba(74,124,89,0.08)', borderRadius:'8px', padding:'12px 16px', marginTop:'14px', fontSize:'12px', color:'#2A3D22', fontFamily:"'Merriweather',serif", fontStyle:'italic', borderLeft:'3px solid #3D6B4A' }}>
          💡 La ferme gère ses propres commandes et livraisons selon ses conditions.
        </div>
        <button
          onClick={onClose}
          style={{ width:'100%', marginTop:'18px', padding:'14px', background:'#1E2D1A', color:'#FFFCF5', border:'none', borderRadius:'6px', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}
        >
          ✅ Parfait, je les contacte !
        </button>
      </div>
    </div>
  );
}
