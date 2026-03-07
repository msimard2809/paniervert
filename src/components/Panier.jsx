import React from 'react';

export default function Panier({ panier, totalPanier, commission, retirer, vider, onClose, onCheckout }) {
  if (!panier) return null;
  return (
    <div style={{display:'none',position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:700,justifyContent:'center',alignItems:'flex-end'}}
      id="cart-overlay" className={panier.length >= 0 ? 'cart-overlay-show' : ''}>
      <div style={{background:'white',borderRadius:'20px 20px 0 0',padding:'28px 28px 40px',width:'100%',maxWidth:'540px',maxHeight:'80vh',overflowY:'auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
          <span style={{fontFamily:"'Abril Fatface',serif",fontSize:'22px',color:'var(--forest)'}}>🛒 Mon panier</span>
          <button onClick={onClose} style={{background:'none',border:'none',fontSize:'20px',cursor:'pointer',color:'#9B8B7A'}}>✕</button>
        </div>
        {panier.length === 0 ? (
          <div style={{textAlign:'center',padding:'40px 0',color:'#9B8B7A',fontFamily:"'Merriweather',serif",fontStyle:'italic'}}>Votre panier est vide 🌿</div>
        ) : (
          <>
            {panier.map(item => (
              <div key={item.id} style={{display:'grid',gridTemplateColumns:'48px 1fr auto auto',gap:'12px',alignItems:'center',padding:'12px 0',borderBottom:'1px solid var(--parchment)'}}>
                <span style={{fontSize:'28px',textAlign:'center'}}>{item.emoji}</span>
                <div>
                  <div style={{fontWeight:700,fontSize:'13px',color:'var(--forest)'}}>{item.nom}</div>
                  <div style={{fontSize:'10px',color:'#9B8B7A',fontStyle:'italic'}}>{item.ferme}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontWeight:700,color:'var(--harvest)',fontSize:'13px'}}>{item.prix}</div>
                  <div style={{fontSize:'10px',color:'#9B8B7A'}}>×{item.qty}</div>
                </div>
                <button onClick={() => retirer(item.id)} style={{background:'none',border:'none',color:'#C0392B',cursor:'pointer',fontSize:'16px',padding:'4px'}}>✕</button>
              </div>
            ))}
            <div style={{marginTop:'20px',padding:'16px',background:'var(--parchment)',borderRadius:'10px'}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px',marginBottom:'6px'}}><span>Sous-total</span><span style={{fontWeight:700}}>{totalPanier.toFixed(2)} $</span></div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',color:'#9B8B7A',marginBottom:'6px'}}><span>Commission Le Panier Vert (8%)</span><span>{commission.toFixed(2)} $</span></div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'15px',fontWeight:700,fontFamily:"'Abril Fatface',serif",borderTop:'1px solid var(--wheat)',paddingTop:'10px',marginTop:'10px'}}><span>Total</span><span style={{color:'var(--ember)'}}>{(totalPanier + commission).toFixed(2)} $</span></div>
            </div>
            <button onClick={onCheckout} style={{width:'100%',marginTop:'16px',padding:'14px',background:'var(--ember)',color:'white',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:700,cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif"}}>
              Passer à la caisse →
            </button>
            <button onClick={vider} style={{width:'100%',marginTop:'8px',padding:'10px',background:'transparent',color:'#9B8B7A',border:'1px solid var(--wheat)',borderRadius:'8px',fontSize:'12px',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif"}}>
              Vider le panier
            </button>
          </>
        )}
      </div>
    </div>
  );
}
