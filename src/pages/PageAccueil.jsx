// ═══════════════════════════════════════════════
// Le Panier Vert — Page Accueil
// ═══════════════════════════════════════════════
import React from 'react';
import { TRANSLATIONS } from '../data/data';

export default function PageAccueil({ lang, navigate }) {
  const t = TRANSLATIONS[lang];

  const stats = [
    { n:'2 000+', l: t.hs1 || 'Fermes partenaires',  e:'🌾' },
    { n:'150+',   l: t.hs2 || 'Distributeurs membres', e:'📦' },
    { n:'5 000+', l: t.hs3 || 'Consommateurs actifs',  e:'🛒' },
    { n:'100%',   l: t.hs4 || 'Agriculture biologique', e:'🌿' },
  ];

  const portails = [
    { e:'🌾', titre:'Fermes biologiques',   fr:'Créez votre vitrine. Vendez directement.',       en:'Create your storefront. Sell directly.',    bg:'linear-gradient(135deg,#C4622D,#A04A20)', page:'abonnements' },
    { e:'📦', titre:'Distributeurs',        fr:"Rejoignez le plus grand réseau d'intrants bio.", en:'Join the largest organic input network.',    bg:'linear-gradient(135deg,#2D5A3D,#1B3A2D)', page:'abonnements' },
    { e:'🏪', titre:'Commerçants',          fr:'Approvisionnez-vous en bio local. Gratuit.',     en:'Source local organics. Free for buyers.',    bg:'linear-gradient(135deg,#4A5568,#2D3748)', page:'commercants'  },
    { e:'🛒', titre:'Consommateurs',        fr:'Achetez directement à la ferme. 0 intermédiaire.',en:'Buy directly from farms. 0 middlemen.',     bg:'linear-gradient(135deg,#8B3A52,#6B2A3E)', page:'inscription'  },
  ];

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <div style={{
        background: '#1E2D1A', minHeight:'96vh', display:'flex', alignItems:'center',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse at 8% 60%,rgba(201,125,18,0.25) 0%,transparent 50%), radial-gradient(ellipse at 92% 20%,rgba(191,78,34,0.2) 0%,transparent 45%), radial-gradient(ellipse at 50% 90%,rgba(61,107,74,0.3) 0%,transparent 55%)',
        }} />
        <div style={{ position:'relative', zIndex:1, maxWidth:'1100px', margin:'0 auto', padding:'80px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center' }}>

          {/* Left */}
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(181,213,190,0.1)', border:'1px solid rgba(181,213,190,0.3)', color:'#A8CCB4', borderRadius:'4px', padding:'6px 14px', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'24px' }}>
              🌿 {t.badge}
            </div>
            <h1 style={{ fontFamily:"'Abril Fatface',serif", fontSize:'clamp(32px,4.2vw,62px)', color:'#FFFCF5', lineHeight:1.1, marginBottom:'22px' }}
                dangerouslySetInnerHTML={{ __html: t.title }} />
            <p style={{ fontSize:'20px', color:'rgba(168,204,180,0.9)', lineHeight:1.6, marginBottom:'38px', fontFamily:"'Merriweather',serif", fontWeight:300, fontStyle:'italic' }}>
              {t.sub}
            </p>
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('fermes')}>{t.btn1}</button>
              <button className="btn-secondary" onClick={() => navigate('abonnements')}>{t.btn2}</button>
            </div>
          </div>

          {/* Right — stat cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background:'rgba(255,255,255,0.06)', backdropFilter:'blur(10px)',
                border:'1px solid rgba(181,213,190,0.15)', borderRadius:'10px',
                padding:'18px 22px', display:'flex', alignItems:'center', gap:'16px',
                transition:'transform 0.2s', cursor:'default',
              }}
                onMouseOver={e => e.currentTarget.style.transform='translateX(4px)'}
                onMouseOut={e => e.currentTarget.style.transform='translateX(0)'}
              >
                <span style={{ fontSize:'32px' }}>{s.e}</span>
                <div>
                  <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'28px', color:'#C97D12' }}>{s.n}</div>
                  <div style={{ fontSize:'12px', color:'rgba(181,213,190,0.7)', letterSpacing:'1px', textTransform:'uppercase' }}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="divider" />

      {/* ── Portails ── */}
      <section style={{ background:'#F8F3E8', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div className="sec-eyebrow">Rejoignez le réseau</div>
          <h2 className="sec-title">Vous êtes…</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'18px', marginTop:'40px' }}>
            {portails.map((p, i) => (
              <div
                key={i}
                onClick={() => navigate(p.page)}
                style={{
                  background: p.bg, color:'#FFFCF5', borderRadius:'14px', padding:'36px 28px',
                  cursor:'pointer', transition:'all 0.3s', boxShadow:'0 6px 24px rgba(0,0,0,0.15)',
                }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.25)'; }}
                onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 24px rgba(0,0,0,0.15)'; }}
              >
                <span style={{ fontSize:'44px', display:'block', marginBottom:'16px' }}>{p.e}</span>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'22px', marginBottom:'10px' }}>{p.titre}</div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.8)', fontFamily:"'Merriweather',serif", fontStyle:'italic', lineHeight:1.6 }}>
                  {lang === 'fr' ? p.fr : p.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section style={{ background:'#1E2D1A', padding:'72px 48px', textAlign:'center' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ color:'#6A9E77', fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'Merriweather',serif", fontStyle:'italic', marginBottom:'12px' }}>Le modèle</div>
          <h2 style={{ fontFamily:"'Abril Fatface',serif", fontSize:'38px', color:'#FFFCF5', marginBottom:'48px' }}>Pourquoi Le Panier Vert ?</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'24px' }}>
            {[
              { n:'8%',        l:'Commission seulement',     c:'#C97D12' },
              { n:'29,99 $',   l:'Abonnement Débutant/mois', c:'#3D6B4A' },
              { n:'0 $',       l:'Pour les acheteurs',       c:'#BF4E22' },
              { n:'100%',      l:'Passif via Stripe',        c:'#6A9E77' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Abril Fatface',serif", fontSize:'48px', color: s.c, marginBottom:'8px' }}>{s.n}</div>
                <div style={{ fontSize:'13px', color:'rgba(181,213,190,0.7)', letterSpacing:'1px', textTransform:'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA Final ── */}
      <section style={{ background:'#F8F3E8', padding:'72px 48px', textAlign:'center' }}>
        <div className="sec-eyebrow">Prêt à commencer ?</div>
        <h2 className="sec-title">Rejoignez le réseau dès aujourd'hui</h2>
        <p className="sec-sub">Aucune mise de fonds. Aucun risque. Premier mois offert avec parrainage.</p>
        <div style={{ display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
          <button className="btn-primary" style={{ fontSize:'16px', padding:'16px 36px' }} onClick={() => navigate('inscription')}>
            Créer mon compte gratuit →
          </button>
          <button
            onClick={() => navigate('abonnements')}
            style={{ background:'transparent', color:'#3D6B4A', border:'2px solid #3D6B4A', borderRadius:'6px', padding:'15px 32px', fontSize:'15px', fontWeight:600, cursor:'pointer', fontFamily:"'Source Sans 3',sans-serif" }}
          >
            Voir les plans →
          </button>
        </div>
      </section>
    </div>
  );
}
