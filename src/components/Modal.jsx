import React from 'react';

export default function Modal({ modal, onClose }) {
  if (!modal) return null;
  return (
    <div className="overlay active" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-x" onClick={onClose}>✕</button>
        <h2 style={{fontFamily:"'Abril Fatface',serif",color:'var(--forest)',fontSize:'22px',marginBottom:'4px'}}>{modal.nom}</h2>
        <div style={{color:'var(--fern)',fontSize:'11px',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',marginBottom:'20px'}}>{modal.loc}</div>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          {modal.tel && (
            <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--parchment)',borderRadius:'8px',padding:'13px 16px',border:'1px solid var(--wheat)'}}>
              <span style={{fontSize:'20px'}}>📞</span>
              <div><strong style={{display:'block',color:'var(--ink)',fontSize:'13px'}}>{modal.tel}</strong><small style={{color:'#9B8B7A',fontSize:'11px'}}>Appelez pour commander ou vous renseigner</small></div>
            </div>
          )}
          {modal.email && (
            <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--parchment)',borderRadius:'8px',padding:'13px 16px',border:'1px solid var(--wheat)'}}>
              <span style={{fontSize:'20px'}}>✉️</span>
              <div><strong style={{display:'block',color:'var(--ink)',fontSize:'13px'}}>{modal.email}</strong><small style={{color:'#9B8B7A',fontSize:'11px'}}>Réponse dans les 24h</small></div>
            </div>
          )}
          {modal.hrs && (
            <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--parchment)',borderRadius:'8px',padding:'13px 16px',border:'1px solid var(--wheat)'}}>
              <span style={{fontSize:'20px'}}>🕐</span>
              <div><strong style={{display:'block',color:'var(--ink)',fontSize:'13px'}}>{modal.hrs}</strong><small style={{color:'#9B8B7A',fontSize:'11px'}}>Horaires d'ouverture</small></div>
            </div>
          )}
        </div>
        <div style={{background:'rgba(74,124,89,0.08)',borderRadius:'8px',padding:'12px 16px',marginTop:'14px',fontSize:'12px',color:'var(--moss)',fontFamily:"'Merriweather',serif",fontStyle:'italic',borderLeft:'3px solid var(--fern)'}}>
          Membre vérifié du réseau Le Panier Vert 🌿
        </div>
        <button style={{width:'100%',marginTop:'18px',padding:'14px',background:'var(--forest)',color:'var(--white)',border:'none',borderRadius:'6px',fontSize:'14px',fontWeight:700,cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",letterSpacing:'0.5px'}} onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
