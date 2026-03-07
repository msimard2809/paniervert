import React from 'react';
import { TRANSLATIONS } from '../data';

export default function Footer({ navigate, lang }) {
  const t = TRANSLATIONS[lang];
  const links = [
    { label: t.footerLinks[0], page: 'fermes' },
    { label: t.footerLinks[1], page: 'distributeurs' },
    { label: t.footerLinks[2], page: 'abonnements' },
    { label: t.footerLinks[3], page: 'parrainage' },
  ];
  return (
    <footer style={{background:'#231A0F',color:'rgba(181,213,190,0.6)',padding:'52px 48px',textAlign:'center'}}>
      <div style={{fontFamily:"'Abril Fatface',serif",fontSize:'30px',color:'#A8CCB4',marginBottom:'8px'}}>🧺 Le Panier Vert</div>
      <p style={{fontSize:'12px',lineHeight:1.9,marginBottom:'22px',fontFamily:"'Merriweather',serif",fontStyle:'italic'}}>
        Marché bio du Québec · Connecter les fermes et les acheteurs<br/>
        Cantons-de-l'Est & partout au Québec · lepaniervert.quebec
      </p>
      <div style={{display:'flex',gap:'22px',justifyContent:'center',flexWrap:'wrap',marginBottom:'28px'}}>
        {links.map(({label, page}) => (
          <button key={page} onClick={() => navigate(page)}
            style={{background:'none',border:'none',color:'#6A9E77',cursor:'pointer',fontFamily:"'Source Sans 3',sans-serif",fontSize:'12px',fontWeight:600,letterSpacing:'0.5px',transition:'color 0.2s'}}
            onMouseOver={e => e.target.style.color='#C97D12'}
            onMouseOut={e  => e.target.style.color='#6A9E77'}>
            {label}
          </button>
        ))}
      </div>
      <div style={{fontSize:'10px',color:'rgba(181,213,190,0.3)',letterSpacing:'1px'}}>
        © 2026 Le Panier Vert — Tous droits réservés · Commission 8% · Acheteurs 100% gratuit
      </div>
    </footer>
  );
}
