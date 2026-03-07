// ═══════════════════════════════════════════════
// Le Panier Vert — Tiroir Panier
// ═══════════════════════════════════════════════
import React from 'react';

export default function PanierDrawer({ panier, totalPanier, retirerDuPanier, viderPanier, open, setOpen, navigate }) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:799 }}
      />

      {/* Tiroir */}
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0,
        width: '380px', background: '#FFFCF5',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.2)',
        zIndex: 800, display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ background:'#1E2D1A', padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'20px', color:'#FFFCF5' }}>
            🛒 Votre panier
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background:'rgba(255,255,255,0.1)', border:'none', color:'#A8CCB4', borderRadius:'50%', width:'32px', height:'32px', cursor:'pointer', fontSize:'16px' }}
          >✕</button>
        </div>

        {/* Items */}
        <div style={{ flex:1, overflowY:'auto', padding:'16px' }}>
          {panier.length === 0 ? (
            <div style={{ textAlign:'center', padding:'48px 24px', color:'#9B8B7A' }}>
              <div style={{ fontSize:'48px', marginBottom:'12px' }}>🧺</div>
              <div style={{ fontFamily:"'Merriweather',serif", fontStyle:'italic', fontSize:'14px' }}>
                Votre panier est vide
              </div>
            </div>
          ) : (
            panier.map(item => (
              <div key={item.id} style={{
                background: '#FFFCF5', borderRadius:'10px', padding:'14px',
                marginBottom:'10px', border:'1px solid #EDE4CF',
                display:'flex', alignItems:'center', gap:'12px',
              }}>
                <span style={{ fontSize:'32px' }}>{item.emoji}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:'13px', color:'#231A0F' }}>{item.nom}</div>
                  <div style={{ fontSize:'11px', color:'#6B5B45', marginTop:'2px' }}>
                    {item.ferme} · Qté : {item.qty}
                  </div>
                  <div style={{ fontSize:'13px', fontWeight:700, color:'#C97D12', marginTop:'4px' }}>
                    {(item.prixNum * item.qty).toFixed(2)} $
                  </div>
                </div>
                <button
                  onClick={() => retirerDuPanier(item.id)}
                  style={{ background:'#FEE2E2', border:'none', color:'#C0392B', borderRadius:'6px', padding:'6px 10px', cursor:'pointer', fontSize:'11px', fontWeight:700 }}
                >
                  Retirer
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {panier.length > 0 && (
          <div style={{ padding:'16px', borderTop:'2px solid #EDE4CF', background:'#F8F3E8' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'14px' }}>
              <span style={{ fontFamily:"'Abril Fatface',serif", fontSize:'16px', color:'#1E2D1A' }}>Total</span>
              <span style={{ fontFamily:"'Abril Fatface',serif", fontSize:'24px', color:'#C97D12' }}>
                {totalPanier.toFixed(2)} $
              </span>
            </div>
            <button
              onClick={() => { setOpen(false); navigate('checkout'); }}
              style={{
                width:'100%', padding:'14px', background:'#BF4E22', color:'#FFFCF5',
                border:'none', borderRadius:'8px', fontSize:'14px', fontWeight:700,
                cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", marginBottom:'8px',
              }}
            >
              Passer à la caisse →
            </button>
            <button
              onClick={viderPanier}
              style={{
                width:'100%', padding:'10px', background:'transparent', color:'#9B8B7A',
                border:'1px solid #D0AA88', borderRadius:'6px', fontSize:'12px',
                cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif",
              }}
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  );
}
