// ═══════════════════════════════════════════════
// Le Panier Vert — Page Connexion
// ═══════════════════════════════════════════════
import React, { useState } from 'react';

export function PageConnexion({ connexion, navigate }) {
  const [email, setEmail] = useState('');
  const [mdp, setMdp]     = useState('');
  const [err, setErr]     = useState('');

  const soumettre = () => {
    setErr('');
    const erreur = connexion(email, mdp);
    if (erreur) { setErr(erreur); return; }
    navigate('moncompte');
  };

  const demoComptes = [
    { label:'👨 Consommateur',         email:'client@test.com',        mdp:'123456' },
    { label:'🌾 Ferme Duval',           email:'ferme1@test.com',         mdp:'123456' },
    { label:'🧀 Fromagerie Lalonde',    email:'ferme2@test.com',         mdp:'123456' },
    { label:'📦 Semences Empire',       email:'info@semencesempire.ca',  mdp:'semences2026' },
    { label:'📦 Supra Vert',            email:'info@supravert.com',      mdp:'supravert2026' },
    { label:'🏪 Épicerie Bio Magog',    email:'comm@test.com',           mdp:'123456' },
  ];

  return (
    <div className="page-enter">
      <div className="form-wrap" style={{ paddingTop:'60px' }}>
        <div className="form-box">
          <h2>👤 Connexion</h2>
          <p>Accédez à votre espace membre Le Panier Vert.</p>
          {err && <div className="msg-err">{err}</div>}
          <label>Courriel</label>
          <input type="email" placeholder="votre@courriel.ca" value={email} onChange={e=>setEmail(e.target.value)} />
          <label>Mot de passe</label>
          <input type="password" placeholder="••••••••" value={mdp} onChange={e=>setMdp(e.target.value)}
            onKeyDown={e=>e.key==='Enter' && soumettre()} />
          <button className="btn-submit" style={{ background:'#1E2D1A' }} onClick={soumettre}>
            Se connecter →
          </button>
          <button className="btn-back" onClick={() => navigate('inscription')}>
            Créer un compte
          </button>

          {/* Comptes démo */}
          <div className="demo-box" style={{ marginTop:'20px' }}>
            <div className="demo-box-title">🧪 Comptes de démonstration</div>
            {demoComptes.map(c => (
              <div key={c.email} className="demo-item" onClick={() => { setEmail(c.email); setMdp(c.mdp); }}>
                {c.label} — <span>{c.email}</span> / {c.mdp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// Le Panier Vert — Page Inscription
// ═══════════════════════════════════════════════
export function PageInscription({ inscription, navigate }) {
  const [type, setType]     = useState('');
  const [nom, setNom]       = useState('');
  const [email, setEmail]   = useState('');
  const [mdp, setMdp]       = useState('');
  const [ville, setVille]   = useState('');
  const [nomOrg, setNomOrg] = useState('');
  const [tel, setTel]       = useState('');
  const [desc, setDesc]     = useState('');
  const [err, setErr]       = useState('');

  const types = [
    { id:'ferme',        e:'🌾', t:'Ferme bio',    d:'Producteur' },
    { id:'distributeur', e:'📦', t:'Distributeur', d:'Intrants bio' },
    { id:'commercant',   e:'🏪', t:'Commerçant',   d:'Restaurant, épicerie…' },
    { id:'consommateur', e:'🛒', t:'Consommateur', d:'Particulier — gratuit' },
  ];

  const soumettre = () => {
    setErr('');
    if (!nom || !email || !mdp || !type) { setErr('Veuillez remplir tous les champs requis.'); return; }
    if (mdp.length < 6) { setErr('Mot de passe : minimum 6 caractères.'); return; }
    const erreur = inscription({ nom, email, mdp, type, ville, nomferme: nomOrg, tel, desc });
    if (erreur) { setErr(erreur); return; }
    navigate('moncompte');
  };

  return (
    <div className="page-enter">
      <div className="form-wrap" style={{ paddingTop:'60px' }}>
        <div className="form-box">
          <h2>🌱 Créer un compte</h2>
          <p>Rejoignez Le Panier Vert — premier mois offert avec parrainage.</p>
          {err && <div className="msg-err">{err}</div>}

          {/* Type */}
          <label>Vous êtes…</label>
          <div className="type-grid">
            {types.map(t => (
              <div key={t.id} className={`type-card${type===t.id?' sel':''}`} onClick={()=>setType(t.id)}>
                <div className="type-card-e">{t.e}</div>
                <h3>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </div>

          <label>Nom complet *</label>
          <input placeholder="Marie-Eve Simard" value={nom} onChange={e=>setNom(e.target.value)} />

          <label>Courriel *</label>
          <input type="email" placeholder="votre@courriel.ca" value={email} onChange={e=>setEmail(e.target.value)} />

          <label>Mot de passe *</label>
          <input type="password" placeholder="Minimum 6 caractères" value={mdp} onChange={e=>setMdp(e.target.value)} />

          {type && type !== 'consommateur' && (
            <>
              <label>Nom de votre {type === 'ferme' ? 'ferme' : type === 'distributeur' ? 'entreprise' : 'établissement'}</label>
              <input placeholder="Ex: Ferme des Quatre Vents" value={nomOrg} onChange={e=>setNomOrg(e.target.value)} />
              <label>Téléphone</label>
              <input placeholder="819-555-1234" value={tel} onChange={e=>setTel(e.target.value)} />
              <label>Description</label>
              <textarea placeholder="Décrivez votre ferme ou entreprise…" value={desc} onChange={e=>setDesc(e.target.value)} />
            </>
          )}

          <label>Ville</label>
          <input placeholder="Compton, QC" value={ville} onChange={e=>setVille(e.target.value)} />

          <button className="btn-submit" style={{ background:'#BF4E22' }} onClick={soumettre}>
            Créer mon compte →
          </button>
          <button className="btn-back" onClick={() => navigate('connexion')}>
            J'ai déjà un compte
          </button>
        </div>
      </div>
    </div>
  );
}
