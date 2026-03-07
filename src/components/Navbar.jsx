import React, { useState } from 'react';
import { TRANSLATIONS } from '../data';

export default function Navbar({ page, navigate, currentUser, lang, setLang, totalPanier, setPanierOpen }) {
  const t = TRANSLATIONS[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'fermes',        label: t.navFermes },
    { id: 'produits',      label: t.navProduits },
    { id: 'distributeurs', label: t.navDist },
    { id: 'commercants',   label: t.navComm },
  ];

  const goTo = (id) => { navigate(id); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        background: 'linear-gradient(135deg,#1A2414,#2A1F10)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 500,
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
      }}>
        {/* Logo */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', cursor:'pointer' }} onClick={() => goTo('accueil')}>
          <span style={{ fontSize:'26px' }}>🧺</span>
          <div>
            <div style={{ fontFamily:"'Abril Fatface',serif", color:'#A8CCB4', fontSize:'20px', letterSpacing:'1px', lineHeight:1 }}>Le Panier Vert</div>
            <div style={{ color:'#6A9E77', fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'Merriweather',serif", fontStyle:'italic' }}>{t.tagline}</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display:'flex', gap:'6px', alignItems:'center' }}>
          {navItems.map(({ id, label }) => (
            <button key={id}
              onClick={() => goTo(id)}
              style={{
                background: page === id ? '#3D6B4A' : 'transparent',
                color: 'rgba(181,213,190,0.8)',
                border: '1px solid rgba(181,213,190,0.2)',
                borderRadius: '6px',
                padding: '7px 14px',
                cursor: 'pointer',
                fontFamily: "'Source Sans 3',sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                transition: 'all 0.2s',
                letterSpacing: '0.5px',
              }}>
              {label}
            </button>
          ))}

          <button onClick={() => goTo('abonnements')}
            style={{ background:'#BF4E22', border:'1px solid #BF4E22', borderRadius:'6px', padding:'7px 14px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'12px', fontWeight:700, color:'#FFFCF5', marginLeft:'4px' }}>
            {t.navRejoindre}
          </button>

          {setPanierOpen && (
            <button onClick={() => setPanierOpen(true)}
              style={{ position:'relative', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(181,213,190,0.2)', borderRadius:'6px', padding:'7px 12px', cursor:'pointer', color:'#A8CCB4', fontSize:'16px' }}>
              🛒
              {totalPanier > 0 && (
                <span style={{ position:'absolute', top:'-6px', right:'-6px', background:'#BF4E22', color:'#fff', borderRadius:'50%', width:'18px', height:'18px', fontSize:'9px', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {totalPanier.toFixed(0)}$
                </span>
              )}
            </button>
          )}

          <button onClick={() => goTo(currentUser ? 'moncompte' : 'connexion')}
            style={{ background:'#2A3D22', border:'1px solid #6A9E77', borderRadius:'6px', padding:'7px 14px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'12px', fontWeight:600, color:'#A8CCB4' }}>
            {currentUser ? `👤 ${currentUser.nom.split(' ')[0]}` : t.navConnexion}
          </button>

          <div style={{ display:'flex', background:'rgba(255,255,255,0.1)', borderRadius:'6px', overflow:'hidden', marginLeft:'4px' }}>
            {['fr','en'].map(l => (
              <button key={l} onClick={() => setLang(l)}
                style={{ background: lang === l ? '#C97D12' : 'transparent', color: lang === l ? '#FFFCF5' : 'rgba(181,213,190,0.7)', border:'none', padding:'7px 10px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'11px', fontWeight:700, transition:'all 0.2s' }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile — panier + hamburger */}
        <div className="nav-mobile" style={{ display:'none', alignItems:'center', gap:'10px' }}>
          {setPanierOpen && (
            <button onClick={() => setPanierOpen(true)}
              style={{ position:'relative', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(181,213,190,0.2)', borderRadius:'6px', padding:'8px 12px', cursor:'pointer', color:'#A8CCB4', fontSize:'18px' }}>
              🛒
              {totalPanier > 0 && (
                <span style={{ position:'absolute', top:'-6px', right:'-6px', background:'#BF4E22', color:'#fff', borderRadius:'50%', width:'18px', height:'18px', fontSize:'9px', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {totalPanier.toFixed(0)}$
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(181,213,190,0.2)', borderRadius:'6px', padding:'8px 14px', cursor:'pointer', color:'#A8CCB4', fontSize:'20px', lineHeight:1 }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)}
            style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:490 }} />
          <div style={{
            position: 'fixed', top: '64px', left: 0, right: 0,
            background: 'linear-gradient(180deg,#1A2414,#1E2D1A)',
            zIndex: 495,
            padding: '12px 16px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => goTo(id)}
                style={{
                  background: page === id ? '#3D6B4A' : 'rgba(255,255,255,0.05)',
                  color: '#A8CCB4',
                  border: '1px solid rgba(181,213,190,0.15)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  cursor: 'pointer',
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  textAlign: 'left',
                }}>
                {label}
              </button>
            ))}

            <button onClick={() => goTo('abonnements')}
              style={{ background:'#BF4E22', color:'#FFFCF5', border:'none', borderRadius:'8px', padding:'14px 18px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'15px', fontWeight:700, textAlign:'left', marginTop:'4px' }}>
              {t.navRejoindre}
            </button>

            <button onClick={() => goTo(currentUser ? 'moncompte' : 'connexion')}
              style={{ background:'#2A3D22', border:'1px solid #6A9E77', borderRadius:'8px', padding:'14px 18px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'15px', fontWeight:600, color:'#A8CCB4', textAlign:'left' }}>
              {currentUser ? `👤 ${currentUser.nom.split(' ')[0]}` : t.navConnexion}
            </button>

            <div style={{ display:'flex', gap:'8px', marginTop:'4px' }}>
              {['fr','en'].map(l => (
                <button key={l} onClick={() => { setLang(l); setMenuOpen(false); }}
                  style={{ flex:1, background: lang === l ? '#C97D12' : 'rgba(255,255,255,0.08)', color: lang === l ? '#FFFCF5' : 'rgba(181,213,190,0.7)', border:'1px solid rgba(181,213,190,0.15)', borderRadius:'6px', padding:'10px', cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif", fontSize:'13px', fontWeight:700 }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
