import React from 'react';
import { TRANSLATIONS } from '../data';

export default function Navbar({ page, navigate, currentUser, lang, setLang }) {
  const t = TRANSLATIONS[lang];
  return (
    <nav style={{background:'linear-gradient(135deg,#1A2414,#2A1F10)',padding:'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px',position:'sticky',top:0,zIndex:500,boxShadow:'0 4px 24px rgba(0,0,0,0.35)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'12px',cursor:'pointer'}} onClick={() => navigate('accueil')}>
        <span style={{fontSize:'28px',filter:'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>🧺</span>
        <div>
          <div style={{fontFamily:"'Abril Fatface',serif",color:'#A8CCB4',fontSize:'22px',letterSpacing:'1px',lineHeight:1}}>Le Panier Vert</div>
          <div style={{color:'#6A9E77',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',fontFamily:"'Merriweather',serif",fontStyle:'italic'}}>{t.tagline}</div>
        </div>
      </div>

      <div style={{display:'flex',gap:'6px',alignItems:'center'}}>
        {[
          {id:'fermes',      label:t.navFermes},
          {id:'produits',    label:t.navProduits},
          {id:'distributeurs',label:t.navDist},
          {id:'commercants', label:t.navComm},
        ].map(({id, label}) => (
          <button key={id}
            onClick={() => navigate(id)}
            style={{background:page===id?'#3D6B4A':'transparent',color:'rgba(181,213,190,0.8)',border:'1px solid rgba(181,213,190,0.2)',borderRadius:'6px',padding:'7px 14px',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",fontSize:'12px',fontWeight:600,transition:'all 0.2s',letterSpacing:'0.5px'}}>
            {label}
          </button>
        ))}
        <button onClick={() => navigate('abonnements')}
          style={{background:'#BF4E22',border:'1px solid #BF4E22',borderRadius:'6px',padding:'7px 14px',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",fontSize:'12px',fontWeight:700,color:'#FFFCF5',marginLeft:'4px'}}>
          {t.navRejoindre}
        </button>
        <button onClick={() => navigate(currentUser ? 'moncompte' : 'connexion')}
          style={{background:'#2A3D22',border:'1px solid #6A9E77',borderRadius:'6px',padding:'7px 14px',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",fontSize:'12px',fontWeight:600,color:'#A8CCB4'}}>
          {currentUser ? `👤 ${currentUser.nom.split(' ')[0]}` : t.navConnexion}
        </button>
        <div style={{display:'flex',background:'rgba(255,255,255,0.1)',borderRadius:'6px',overflow:'hidden',marginLeft:'4px'}}>
          {['fr','en'].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{background:lang===l?'#C97D12':'transparent',color:lang===l?'#FFFCF5':'rgba(181,213,190,0.7)',border:'none',padding:'7px 10px',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",fontSize:'11px',fontWeight:700,transition:'all 0.2s'}}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
