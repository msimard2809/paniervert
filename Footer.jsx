// Le Panier Vert — Footer (corrigé)
import React from 'react';

export default function Footer({ navigate = () => {} }) {
  const liens = [
    { label:'Nos fermes',    page:'fermes' },
    { label:'Distributeurs', page:'distributeurs' },
    { label:'Commerçants',   page:'commercants' },
    { label:"S'inscrire",    page:'abonnements' },
    { label:'Parrainage',    page:'parrainage' },
  ];

  return (
    <footer>
      <div className="f-logo">🧺 Le Panier Vert</div>
      <p style={{ fontSize:'12px', lineHeight:1.9, marginBottom:'22px', fontFamily:"'Merriweather',serif", fontStyle:'italic', color:'rgba(181,213,190,0.6)' }}>
        La première place de marché bio du Québec.<br />
        Fermes · Distributeurs · Commerçants · Consommateurs
      </p>
      <nav className="f-links">
        {liens.map(l => (
          <a key={l.page} href="#" onClick={e => { e.preventDefault(); navigate(l.page); }}>
            {l.label}
          </a>
        ))}
      </nav>
      <div style={{ borderTop:'1px solid rgba(181,213,190,0.1)', paddingTop:'20px' }}>
        <div style={{ fontSize:'10px', color:'rgba(181,213,190,0.3)', letterSpacing:'1px' }}>
          © 2026 Le Panier Vert · lepaniervert.quebec · Cantons-de-l'Est, Québec
        </div>
      </div>
    </footer>
  );
}
