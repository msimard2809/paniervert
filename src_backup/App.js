import { useState } from "react";

const C = {
  dark:"#1B4332", mid:"#2D6A4F", accent:"#52B788",
  pale:"#D8F3DC", orange:"#E76F51", gold:"#D4A017",
  cream:"#F5F0E8", white:"#FFFFFF", purple:"#9B72CF",
  red:"#DC2626",
};

const CSS = `
  *{box-sizing:border-box}body{margin:0}
  .pv-card{transition:transform .22s ease,box-shadow .22s ease}
  .pv-card:hover{transform:translateY(-6px);box-shadow:0 16px 36px rgba(0,0,0,.15)!important}
  .pv-feature{transition:transform .22s ease,box-shadow .22s ease}
  .pv-feature:hover{transform:translateY(-5px);box-shadow:0 14px 34px rgba(0,0,0,.13)!important}
  .pv-action{transition:transform .18s ease,box-shadow .18s ease}
  .pv-action:hover{transform:translateX(6px);box-shadow:0 8px 24px rgba(0,0,0,.12)!important}
  .pv-btn{transition:opacity .18s ease,transform .18s ease}
  .pv-btn:hover{opacity:.84;transform:translateY(-1px)}
  .pv-sect{animation:fadeUp .38s ease both}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
  input:focus,textarea:focus{border-color:#52B788!important;box-shadow:0 0 0 3px rgba(82,183,136,.15)}
`;

// ── DONNÉES ──────────────────────────────────────────────
const produitsB2B = [
  { id:1, emoji:"🌾", nom:"Semences de blé bio", desc:"Variétés rustiques certifiées bio, adaptées au Québec.", prix:45, prixAff:"45 $ / 25 kg", categorie:"Semences", color:C.mid },
  { id:2, emoji:"🥕", nom:"Semences potagères", desc:"Assortiment maraîcher : tomates, carottes, laitues.", prix:28, prixAff:"28 $ / kit", categorie:"Semences", color:C.mid },
  { id:3, emoji:"🌱", nom:"Gazon rustique Québec", desc:"Mélange résistant au gel, idéal pour le Québec.", prix:65, prixAff:"65 $ / 10 kg", categorie:"Gazon", color:C.accent },
  { id:4, emoji:"🪱", nom:"Vermicompost premium", desc:"Compost de vers de terre, riche en nutriments.", prix:35, prixAff:"35 $ / 20 L", categorie:"Engrais", color:C.gold },
  { id:5, emoji:"💧", nom:"Fertilisant liquide algues", desc:"Extrait d'algues marines, stimule la croissance.", prix:42, prixAff:"42 $ / 10 L", categorie:"Fertilisants", color:C.gold },
  { id:6, emoji:"🦠", nom:"Inoculant rhizobium", desc:"Bactéries fixatrices d'azote pour légumineuses.", prix:38, prixAff:"38 $ / kg", categorie:"Biostimulants", color:C.purple },
  { id:7, emoji:"🐞", nom:"Insecticide au neem", desc:"Huile de neem biologique — contrôle insectes.", prix:55, prixAff:"55 $ / 5 L", categorie:"Protection", color:C.orange },
  { id:8, emoji:"🍄", nom:"Fongicide au soufre", desc:"Soufre mouillable contre mildiou et champignons.", prix:32, prixAff:"32 $ / 5 kg", categorie:"Protection", color:C.orange },
];

const produitsB2C = [
  { id:11, emoji:"🥕", nom:"Panier légumes — Ferme Duval", desc:"Légumes de saison frais cueillis le matin même.", prix:38, prixAff:"38 $ / panier", categorie:"Légumes", color:C.orange, ferme:"Ferme Duval" },
  { id:12, emoji:"🧀", nom:"Fromage artisanal", desc:"Fromage à pâte ferme de vaches élevées au grand air.", prix:12, prixAff:"12 $ / 200g", categorie:"Laitier", color:C.gold, ferme:"Fromagerie Lalonde" },
  { id:13, emoji:"🍯", nom:"Miel de trèfle", desc:"Miel pur non pasteurisé, récolte estivale.", prix:18, prixAff:"18 $ / 500g", categorie:"Miels", color:C.gold, ferme:"Rucher Saint-Paul" },
  { id:14, emoji:"🥩", nom:"Bœuf haché bio", desc:"Bœuf nourri à l'herbe, élevé localement.", prix:22, prixAff:"22 $ / kg", categorie:"Viandes", color:"#C0392B", ferme:"Ferme Beaulieu" },
  { id:15, emoji:"🐓", nom:"Œufs de ferme (12)", desc:"Œufs de poules élevées en plein air.", prix:7, prixAff:"7 $ / doz.", categorie:"Œufs", color:C.mid, ferme:"Ferme Duval" },
  { id:16, emoji:"🍁", nom:"Sirop d'érable ambré", desc:"Récolte printanière, grade ambré goût riche.", prix:24, prixAff:"24 $ / 540 mL", categorie:"Érable", color:C.orange, ferme:"Érablière Fontaine" },
  { id:17, emoji:"🌿", nom:"Fines herbes séchées", desc:"Basilic, thym, origan — séchés naturellement.", prix:9, prixAff:"9 $ / sachet", categorie:"Herbes", color:C.accent, ferme:"Ferme Herbes Vives" },
  { id:18, emoji:"🫙", nom:"Confiture fraises locales", desc:"Fraises des champs, sucre de canne bio.", prix:11, prixAff:"11 $ / 250 mL", categorie:"Épicerie", color:"#E91E8C", ferme:"Ferme Bernier" },
];

const fermes = [
  { id:1, nom:"Ferme Duval", loc:"Compton, QC", bio:"Famille Duval — maraîchers depuis 3 générations. Certifiés bio depuis 2018.", tags:["Légumes","Œufs","Herbes"], emoji:"🥕" },
  { id:2, nom:"Fromagerie Lalonde", loc:"Coaticook, QC", bio:"Fromages artisanaux de lait cru de vaches Jersiaises.", tags:["Fromages","Lait","Beurre"], emoji:"🧀" },
  { id:3, nom:"Rucher Saint-Paul", loc:"Magog, QC", bio:"Apiculteur artisan — 80 ruches en lisière de forêt.", tags:["Miel","Propolis","Cire"], emoji:"🍯" },
  { id:4, nom:"Ferme Beaulieu", loc:"Eastman, QC", bio:"Élevage bovin et porcin en pâturage extensif.", tags:["Bœuf","Porc","Agneau"], emoji:"🥩" },
  { id:5, nom:"Érablière Fontaine", loc:"North Hatley, QC", bio:"Acériculteur de père en fils depuis 1962.", tags:["Érable","Beurre d'érable"], emoji:"🍁" },
  { id:6, nom:"Ferme Herbes Vives", loc:"Sutton, QC", bio:"Spécialiste des plantes médicinales et fines herbes.", tags:["Herbes","Tisanes","Huiles"], emoji:"🌿" },
];

// ── STYLES ───────────────────────────────────────────────
const S = {
  app:{ fontFamily:"'Segoe UI', Georgia, serif", minHeight:"100vh", background:C.cream },

  nav:{ background:C.dark, padding:"0 36px", display:"flex", alignItems:"center", justifyContent:"space-between", height:70, boxShadow:"0 2px 24px rgba(0,0,0,0.3)", position:"sticky", top:0, zIndex:200, borderBottom:`3px solid ${C.accent}` },
  navLogo:{ color:C.pale, fontWeight:"bold", fontSize:22, letterSpacing:3, cursor:"pointer", lineHeight:1.2 },
  navTagline:{ color:C.accent, fontSize:11, fontStyle:"italic", letterSpacing:1 },
  navLinks:{ display:"flex", gap:8, alignItems:"center" },
  navBtn:(a,col)=>({ background:a?col:"transparent", color:a?C.white:C.pale, border:`2px solid ${a?col:"rgba(255,255,255,0.25)"}`, borderRadius:22, padding:"7px 18px", cursor:"pointer", fontWeight:"bold", fontSize:12, transition:"all 0.2s" }),
  cartBtn:(n)=>({ background:n>0?C.orange:"rgba(255,255,255,0.12)", color:C.white, border:n>0?"none":"2px solid rgba(255,255,255,0.25)", borderRadius:22, padding:"7px 18px", cursor:"pointer", fontWeight:"bold", fontSize:13, display:"flex", alignItems:"center", gap:6 }),

  hero:{ background:`linear-gradient(150deg, ${C.dark} 0%, #1e5a3d 55%, ${C.mid} 100%)`, padding:"72px 32px 62px", textAlign:"center", position:"relative", overflow:"hidden" },
  heroPattern:{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" },
  heroBadge:{ display:"inline-block", background:"rgba(82,183,136,0.2)", border:"1px solid rgba(82,183,136,0.45)", borderRadius:24, padding:"6px 20px", fontSize:12, color:C.accent, fontWeight:"bold", marginBottom:20, letterSpacing:1 },
  heroTitle:{ color:C.pale, fontSize:54, fontWeight:"bold", margin:"0 0 14px", letterSpacing:2, textShadow:"0 3px 24px rgba(0,0,0,0.35)" },
  heroSub:{ color:C.accent, fontSize:19, fontStyle:"italic", margin:"0 0 34px", opacity:0.95 },
  pillsRow:{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" },
  pill:(bg)=>({ background:bg, color:C.white, borderRadius:24, padding:"9px 22px", fontWeight:"bold", fontSize:13, letterSpacing:0.3, boxShadow:"0 3px 10px rgba(0,0,0,0.15)" }),

  section:{ maxWidth:1100, margin:"0 auto", padding:"48px 28px" },
  sectionTitle:{ color:C.dark, fontSize:28, fontWeight:"bold", marginBottom:6, letterSpacing:0.5 },
  sectionBar:{ width:52, height:4, background:C.accent, borderRadius:2, marginBottom:10 },
  sectionSub:{ color:C.mid, fontSize:14, fontStyle:"italic", marginBottom:30 },

  grid:{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:22 },

  card:{ background:C.white, borderRadius:18, boxShadow:"0 4px 18px rgba(0,0,0,0.08)", overflow:"hidden" },
  cardTop:(col)=>({ background:`linear-gradient(160deg, ${col} 0%, ${col}cc 100%)`, padding:"28px 20px 18px", textAlign:"center" }),
  cardEmoji:{ fontSize:50, marginBottom:8, filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.2))" },
  cardTitle:{ color:C.white, fontWeight:"bold", fontSize:16, margin:"0 0 6px" },
  cardCat:{ background:"rgba(255,255,255,0.25)", color:"#fff", borderRadius:12, padding:"3px 12px", fontSize:11, fontWeight:"bold", display:"inline-block", backdropFilter:"blur(4px)" },
  cardBody:{ padding:"16px 20px 20px" },
  cardDesc:{ color:"#666", fontSize:13, lineHeight:1.7, marginBottom:12 },
  cardPrice:{ color:C.dark, fontWeight:"bold", fontSize:17, marginBottom:12 },
  addBtn:(col,done)=>({ background:done?C.accent:col, color:C.white, border:"none", borderRadius:10, padding:"11px 16px", cursor:"pointer", fontWeight:"bold", fontSize:13, width:"100%", transition:"background 0.3s" }),

  statsRow:{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:16, marginBottom:44 },
  statCard:(col)=>({ background:`linear-gradient(145deg, ${col} 0%, ${col}cc 100%)`, borderRadius:16, padding:"24px", textAlign:"center", boxShadow:`0 6px 22px ${col}55` }),
  statNum:{ color:C.white, fontSize:36, fontWeight:"bold", fontFamily:"Georgia" },
  statLbl:{ color:"rgba(255,255,255,0.82)", fontSize:12, marginTop:5, fontWeight:"500" },

  farmCard:{ background:C.white, borderRadius:18, boxShadow:"0 4px 18px rgba(0,0,0,0.08)", overflow:"hidden" },
  farmTop:{ background:`linear-gradient(135deg, ${C.dark} 0%, ${C.mid} 100%)`, padding:"22px 24px" },
  farmName:{ color:C.pale, fontWeight:"bold", fontSize:19, margin:"8px 0 4px" },
  farmLoc:{ color:C.accent, fontSize:12, fontWeight:"500" },
  farmBody:{ padding:"16px 24px 22px" },
  farmBio:{ color:"#555", fontSize:13, lineHeight:1.7, marginBottom:12 },
  farmTag:{ background:C.pale, color:C.dark, borderRadius:12, padding:"3px 12px", fontSize:11, fontWeight:"bold", marginRight:6, display:"inline-block", marginBottom:4, border:`1px solid ${C.accent}55` },

  input:{ width:"100%", padding:"12px 16px", borderRadius:10, border:"1.5px solid #DDD", fontSize:14, fontFamily:"inherit", boxSizing:"border-box", outline:"none", marginBottom:14, transition:"border-color 0.2s" },
  label:{ display:"block", fontWeight:"bold", color:C.dark, marginBottom:5, fontSize:13 },
  btn:(col)=>({ background:col, color:C.white, border:"none", borderRadius:12, padding:"13px", fontSize:15, cursor:"pointer", fontWeight:"bold", width:"100%", marginTop:8 }),
  btnOutline:(col)=>({ background:"transparent", color:col, border:`2px solid ${col}`, borderRadius:12, padding:"12px", fontSize:14, cursor:"pointer", fontWeight:"bold", width:"100%", marginTop:8 }),
};

// ── COMPOSANTS ───────────────────────────────────────────
function ProduitCard({ produit, onAdd, couleur }) {
  const [done, setDone] = useState(false);
  function handle() { onAdd(produit); setDone(true); setTimeout(()=>setDone(false),1500); }
  return (
    <div className="pv-card" style={S.card}>
      <div style={S.cardTop(produit.color)}>
        <div style={S.cardEmoji}>{produit.emoji}</div>
        <p style={S.cardTitle}>{produit.nom}</p>
        <span style={S.cardCat}>{produit.categorie}</span>
        {produit.ferme && <div style={{color:"rgba(255,255,255,0.82)",fontSize:11,marginTop:6,fontStyle:"italic"}}>🏡 {produit.ferme}</div>}
      </div>
      <div style={S.cardBody}>
        <p style={S.cardDesc}>{produit.desc}</p>
        <p style={S.cardPrice}>{produit.prixAff}</p>
        <button className="pv-btn" style={S.addBtn(couleur,done)} onClick={handle}>{done?"✓ Ajouté !":"＋ Ajouter au panier"}</button>
      </div>
    </div>
  );
}

function FermeCard({ f }) {
  return (
    <div className="pv-card" style={S.farmCard}>
      <div style={S.farmTop}>
        <div style={{fontSize:36}}>{f.emoji}</div>
        <p style={S.farmName}>{f.nom}</p>
        <p style={S.farmLoc}>📍 {f.loc}</p>
      </div>
      <div style={S.farmBody}>
        <p style={S.farmBio}>{f.bio}</p>
        <div>{f.tags.map(t=><span key={t} style={S.farmTag}>{t}</span>)}</div>
      </div>
    </div>
  );
}

function SectionHeader({ titre, sub }) {
  return (
    <>
      <h2 style={S.sectionTitle}>{titre}</h2>
      <div style={S.sectionBar}/>
      <p style={S.sectionSub}>{sub}</p>
    </>
  );
}

// ── PAGE INSCRIPTION ──────────────────────────────────────
function PageInscription({ setOnglet, setUser }) {
  const [type, setType] = useState("");
  const [etape, setEtape] = useState("choix");
  const [form, setForm] = useState({ nom:"", email:"", motdepasse:"", tel:"", ville:"", nomferme:"", description:"" });
  const [erreur, setErreur] = useState("");

  function handleChamp(e) { setForm(f=>({...f,[e.target.name]:e.target.value})); }

  function valider() {
    if (!form.nom||!form.email||!form.motdepasse) { setErreur("Veuillez remplir tous les champs obligatoires."); return; }
    if (form.motdepasse.length < 6) { setErreur("Le mot de passe doit avoir au moins 6 caractères."); return; }
    const nouvelUser = { nom:form.nom, email:form.email, type, ville:form.ville, nomferme:form.nomferme };
    setUser(nouvelUser);
    setOnglet("moncompte");
  }

  const types = [
    { id:"consommateur", emoji:"🛒", titre:"Consommateur", desc:"J'achète des produits locaux bio directement des fermes.", color:C.orange },
    { id:"ferme", emoji:"🌾", titre:"Ferme partenaire", desc:"Je vends mes récoltes via Panier Vert et j'achète mes intrants.", color:C.mid },
    { id:"distributeur", emoji:"📦", titre:"Membre distributeur", desc:"Je distribue des produits agricoles bio sur la plateforme.", color:C.purple },
  ];

  if (etape === "choix") return (
    <div className="pv-sect" style={{...S.section, maxWidth:860}}>
      <h2 style={{color:C.dark, marginBottom:4, fontSize:28}}>👤 Créer un compte</h2>
      <div style={S.sectionBar}/>
      <p style={{color:C.mid, marginBottom:32, fontStyle:"italic"}}>Choisissez votre type de compte pour commencer</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:20}}>
        {types.map(t=>(
          <div key={t.id} className="pv-feature" onClick={()=>{ setType(t.id); setEtape("formulaire"); }}
            style={{background:C.white, borderRadius:18, cursor:"pointer", boxShadow:"0 4px 18px rgba(0,0,0,0.09)", overflow:"hidden"}}>
            <div style={{background:`linear-gradient(135deg, ${t.color} 0%, ${t.color}cc 100%)`, padding:"28px 24px 20px", textAlign:"center"}}>
              <div style={{fontSize:48, marginBottom:8}}>{t.emoji}</div>
              <h3 style={{color:C.white, margin:0, fontSize:18}}>{t.titre}</h3>
            </div>
            <div style={{padding:"16px 24px 22px"}}>
              <p style={{color:"#666", fontSize:13, lineHeight:1.65, margin:"0 0 16px"}}>{t.desc}</p>
              <div style={{background:t.color, color:C.white, borderRadius:10, padding:"10px", textAlign:"center", fontWeight:"bold", fontSize:13}}>Choisir →</div>
            </div>
          </div>
        ))}
      </div>
      <p style={{textAlign:"center", marginTop:28, color:"#666", fontSize:13}}>
        Déjà un compte ?{" "}
        <span style={{color:C.accent, cursor:"pointer", fontWeight:"bold"}} onClick={()=>setOnglet("connexion")}>Se connecter</span>
      </p>
    </div>
  );

  const typeInfo = types.find(t=>t.id===type);
  return (
    <div className="pv-sect" style={{...S.section, maxWidth:560}}>
      <div style={{background:C.white, borderRadius:20, boxShadow:"0 6px 28px rgba(0,0,0,0.1)", overflow:"hidden"}}>
        <div style={{background:`linear-gradient(135deg, ${typeInfo.color} 0%, ${typeInfo.color}cc 100%)`, padding:"28px", textAlign:"center"}}>
          <div style={{fontSize:48}}>{typeInfo.emoji}</div>
          <h2 style={{color:C.white, margin:"10px 0 4px"}}>Inscription — {typeInfo.titre}</h2>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:13, margin:0, fontStyle:"italic"}}>Remplissez vos informations</p>
        </div>
        <div style={{padding:32}}>
          {erreur && <div style={{background:"#fee2e2", color:C.red, borderRadius:10, padding:"11px 16px", marginBottom:18, fontSize:13}}>{erreur}</div>}
          <label style={S.label}>Nom complet *</label>
          <input name="nom" value={form.nom} onChange={handleChamp} placeholder="Marie-Eve Tremblay" style={S.input}/>
          <label style={S.label}>Courriel *</label>
          <input name="email" type="email" value={form.email} onChange={handleChamp} placeholder="marie@exemple.com" style={S.input}/>
          <label style={S.label}>Mot de passe * (min. 6 caractères)</label>
          <input name="motdepasse" type="password" value={form.motdepasse} onChange={handleChamp} placeholder="••••••••" style={S.input}/>
          <label style={S.label}>Téléphone</label>
          <input name="tel" value={form.tel} onChange={handleChamp} placeholder="450-555-1234" style={S.input}/>
          <label style={S.label}>Ville</label>
          <input name="ville" value={form.ville} onChange={handleChamp} placeholder="Compton, QC" style={S.input}/>
          {(type==="ferme"||type==="distributeur") && <>
            <label style={S.label}>{type==="ferme"?"Nom de la ferme *":"Nom de l'entreprise *"}</label>
            <input name="nomferme" value={form.nomferme} onChange={handleChamp} placeholder={type==="ferme"?"Ferme Duval":"Distribution Bio Québec"} style={S.input}/>
            <label style={S.label}>Description</label>
            <textarea name="description" value={form.description} onChange={handleChamp}
              placeholder={type==="ferme"?"Décrivez votre ferme et vos produits...":"Décrivez vos produits et votre territoire..."}
              style={{...S.input, height:90, resize:"vertical"}}/>
          </>}
          <button className="pv-btn" style={S.btn(typeInfo.color)} onClick={valider}>✅ Créer mon compte</button>
          <button className="pv-btn" style={S.btnOutline(C.mid)} onClick={()=>setEtape("choix")}>← Retour</button>
        </div>
      </div>
    </div>
  );
}

// ── PAGE CONNEXION ────────────────────────────────────────
function PageConnexion({ setOnglet, setUser }) {
  const [form, setForm] = useState({ email:"", motdepasse:"" });
  const [erreur, setErreur] = useState("");

  function handleChamp(e) { setForm(f=>({...f,[e.target.name]:e.target.value})); }

  function connecter() {
    if (!form.email||!form.motdepasse) { setErreur("Veuillez entrer votre courriel et mot de passe."); return; }
    const demoUsers = [
      { email:"consommateur@test.com", motdepasse:"123456", nom:"Jean Tremblay", type:"consommateur" },
      { email:"ferme@test.com", motdepasse:"123456", nom:"Ferme Duval", type:"ferme", nomferme:"Ferme Duval" },
      { email:"distributeur@test.com", motdepasse:"123456", nom:"Distribution Bio", type:"distributeur", nomferme:"Distribution Bio QC" },
    ];
    const user = demoUsers.find(u=>u.email===form.email && u.motdepasse===form.motdepasse);
    if (user) { setUser(user); setOnglet("moncompte"); }
    else setErreur("Courriel ou mot de passe incorrect.");
  }

  return (
    <div className="pv-sect" style={{...S.section, maxWidth:500}}>
      <div style={{background:C.white, borderRadius:20, boxShadow:"0 6px 28px rgba(0,0,0,0.1)", overflow:"hidden"}}>
        <div style={{background:`linear-gradient(135deg, ${C.dark} 0%, ${C.mid} 100%)`, padding:"32px", textAlign:"center"}}>
          <div style={{fontSize:48}}>🔐</div>
          <h2 style={{color:C.pale, margin:"10px 0 4px"}}>Se connecter</h2>
          <p style={{color:C.accent, fontSize:13, margin:0, fontStyle:"italic"}}>Bienvenue sur Panier Vert</p>
        </div>
        <div style={{padding:32}}>
          {erreur && <div style={{background:"#fee2e2", color:C.red, borderRadius:10, padding:"11px 16px", marginBottom:18, fontSize:13}}>{erreur}</div>}
          <label style={S.label}>Courriel</label>
          <input name="email" type="email" value={form.email} onChange={handleChamp} placeholder="votre@courriel.com" style={S.input}/>
          <label style={S.label}>Mot de passe</label>
          <input name="motdepasse" type="password" value={form.motdepasse} onChange={handleChamp} placeholder="••••••••" style={S.input}/>
          <button className="pv-btn" style={S.btn(C.dark)} onClick={connecter}>🔐 Se connecter</button>
          <button className="pv-btn" style={S.btnOutline(C.accent)} onClick={()=>setOnglet("inscription")}>Créer un compte →</button>
          <div style={{background:C.pale, borderRadius:12, padding:"14px 18px", marginTop:22, border:`1px solid ${C.accent}44`}}>
            <p style={{fontWeight:"bold", color:C.dark, fontSize:12, margin:"0 0 10px"}}>🧪 Comptes de démonstration :</p>
            {[
              ["🛒 Consommateur","consommateur@test.com"],
              ["🌾 Ferme","ferme@test.com"],
              ["📦 Distributeur","distributeur@test.com"],
            ].map(([label, email])=>(
              <p key={email} style={{fontSize:11, color:C.mid, margin:"4px 0", cursor:"pointer"}}
                onClick={()=>setForm({email, motdepasse:"123456"})}>
                {label} — <span style={{color:C.accent, fontWeight:"bold"}}>{email}</span> / 123456
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PAGE MON COMPTE ───────────────────────────────────────
function PageMonCompte({ user, setUser, setOnglet }) {
  const tableauBord = {
    consommateur: [
      { emoji:"🛒", label:"Mes commandes", val:"3 commandes", color:C.orange },
      { emoji:"💰", label:"Total dépensé", val:"124.50 $", color:C.mid },
      { emoji:"🌿", label:"Produits bio achetés", val:"12 produits", color:C.accent },
      { emoji:"🏡", label:"Fermes visitées", val:"4 fermes", color:C.gold },
    ],
    ferme: [
      { emoji:"📦", label:"Commandes reçues", val:"8 commandes", color:C.orange },
      { emoji:"💰", label:"Revenus ce mois", val:"342.00 $", color:C.mid },
      { emoji:"🌱", label:"Produits listés", val:"6 produits", color:C.accent },
      { emoji:"⭐", label:"Note moyenne", val:"4.8 / 5", color:C.gold },
    ],
    distributeur: [
      { emoji:"📦", label:"Produits distribués", val:"15 produits", color:C.orange },
      { emoji:"💰", label:"Revenus ce mois", val:"1 240.00 $", color:C.mid },
      { emoji:"🚛", label:"Livraisons effectuées", val:"28 livraisons", color:C.accent },
      { emoji:"🌿", label:"Fermes clientes", val:"12 fermes", color:C.gold },
    ],
  };

  const stats = tableauBord[user.type] || tableauBord.consommateur;
  const typeLabel = { consommateur:"🛒 Consommateur", ferme:"🌾 Ferme partenaire", distributeur:"📦 Membre distributeur" };
  const typeColor = { consommateur:C.orange, ferme:C.mid, distributeur:C.purple };

  return (
    <div className="pv-sect" style={S.section}>
      {/* Entête profil */}
      <div style={{background:C.white, borderRadius:20, marginBottom:28, boxShadow:"0 4px 20px rgba(0,0,0,0.09)", overflow:"hidden"}}>
        <div style={{background:`linear-gradient(135deg, ${typeColor[user.type]} 0%, ${typeColor[user.type]}cc 100%)`, padding:"28px 32px", display:"flex", alignItems:"center", gap:20}}>
          <div style={{background:"rgba(255,255,255,0.2)", borderRadius:"50%", width:80, height:80, display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, backdropFilter:"blur(4px)"}}>
            {user.type==="consommateur"?"🛒":user.type==="ferme"?"🌾":"📦"}
          </div>
          <div style={{flex:1}}>
            <h2 style={{color:C.white, margin:"0 0 4px", fontSize:24}}>{user.nomferme||user.nom}</h2>
            <p style={{color:"rgba(255,255,255,0.8)", margin:"0 0 8px", fontSize:13}}>{user.email}</p>
            <span style={{background:"rgba(255,255,255,0.25)", color:C.white, borderRadius:12, padding:"4px 14px", fontSize:12, fontWeight:"bold"}}>{typeLabel[user.type]}</span>
          </div>
          <button style={{background:"rgba(255,255,255,0.15)", color:C.white, border:"2px solid rgba(255,255,255,0.35)", borderRadius:12, padding:"9px 20px", cursor:"pointer", fontWeight:"bold", fontSize:13, backdropFilter:"blur(4px)"}}
            onClick={()=>{ setUser(null); setOnglet("accueil"); }}>
            Déconnexion
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <h3 style={{color:C.dark, marginBottom:6, fontSize:20}}>📊 Mon tableau de bord</h3>
      <div style={S.sectionBar}/>
      <div style={{...S.statsRow, marginTop:16}}>
        {stats.map(s=>(
          <div key={s.label} style={S.statCard(s.color)}>
            <div style={{fontSize:30, marginBottom:8}}>{s.emoji}</div>
            <div style={S.statNum}>{s.val}</div>
            <div style={S.statLbl}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <h3 style={{color:C.dark, marginBottom:6, fontSize:20}}>⚡ Actions rapides</h3>
      <div style={S.sectionBar}/>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:18, marginTop:16}}>
        {user.type==="consommateur" && <>
          <ActionCard emoji="🛒" titre="Voir la boutique" desc="Parcourez les produits des fermes locales" color={C.orange} onClick={()=>setOnglet("b2c")}/>
          <ActionCard emoji="📦" titre="Mes commandes" desc="Suivez l'état de vos commandes en cours" color={C.mid} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
          <ActionCard emoji="❤️" titre="Mes favoris" desc="Vos produits et fermes préférés" color={C.gold} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
        </>}
        {user.type==="ferme" && <>
          <ActionCard emoji="➕" titre="Ajouter un produit" desc="Listez un nouveau produit sur la boutique" color={C.accent} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
          <ActionCard emoji="📦" titre="Commandes reçues" desc="Gérez vos commandes en attente" color={C.orange} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
          <ActionCard emoji="🌱" titre="Acheter des intrants" desc="Commandez vos semences et engrais bio" color={C.mid} onClick={()=>setOnglet("b2b")}/>
        </>}
        {user.type==="distributeur" && <>
          <ActionCard emoji="➕" titre="Ajouter un produit" desc="Listez un nouveau produit à distribuer" color={C.purple} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
          <ActionCard emoji="📊" titre="Mes ventes" desc="Suivez vos commandes et revenus" color={C.orange} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
          <ActionCard emoji="🚛" titre="Mes tournées" desc="Planifiez vos livraisons aux fermes" color={C.mid} onClick={()=>alert("Fonctionnalité bientôt disponible !")}/>
        </>}
      </div>
    </div>
  );
}

function ActionCard({ emoji, titre, desc, color, onClick }) {
  return (
    <div onClick={onClick} className="pv-action" style={{background:C.white, borderRadius:16, padding:"20px 22px", cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.08)", borderLeft:`5px solid ${color}`}}>
      <div style={{display:"flex", alignItems:"center", gap:14}}>
        <div style={{fontSize:34, lineHeight:1, flexShrink:0}}>{emoji}</div>
        <div style={{flex:1}}>
          <h3 style={{color:C.dark, margin:"0 0 5px", fontSize:15}}>{titre}</h3>
          <p style={{color:"#777", fontSize:12, margin:0, lineHeight:1.5}}>{desc}</p>
        </div>
        <div style={{color:color, fontSize:20, fontWeight:"bold", flexShrink:0}}>→</div>
      </div>
    </div>
  );
}

// ── PAGE PANIER ───────────────────────────────────────────
function PagePanier({ panier, setPanier, setOnglet }) {
  const [etape, setEtape] = useState("panier");
  const [form, setForm] = useState({ nom:"", email:"", adresse:"", ville:"", code:"", tel:"" });
  const livraison = 8;

  function changerQte(id, delta) { setPanier(p=>p.map(x=>x.id===id?{...x,qte:Math.max(0,x.qte+delta)}:x).filter(x=>x.qte>0)); }
  function retirer(id) { setPanier(p=>p.filter(x=>x.id!==id)); }
  function handleChamp(e) { setForm(f=>({...f,[e.target.name]:e.target.value})); }

  const sousTotal = panier.reduce((s,x)=>s+x.prix*x.qte,0);
  const tps = +(sousTotal*0.05).toFixed(2);
  const tvq = +(sousTotal*0.09975).toFixed(2);
  const total = +(sousTotal+tps+tvq+livraison).toFixed(2);

  if (panier.length===0 && etape==="panier") return (
    <div className="pv-sect" style={{...S.section, textAlign:"center", paddingTop:90}}>
      <div style={{fontSize:72, marginBottom:16}}>🛒</div>
      <h2 style={{color:C.dark, fontSize:28}}>Votre panier est vide</h2>
      <p style={{color:C.mid, marginBottom:30, fontSize:15}}>Ajoutez des produits depuis la boutique.</p>
      <button className="pv-btn" style={{background:C.orange, color:C.white, border:"none", borderRadius:12, padding:"13px 32px", fontSize:15, cursor:"pointer", fontWeight:"bold", marginRight:12}} onClick={()=>setOnglet("b2c")}>🛒 Boutique</button>
      <button className="pv-btn" style={{background:C.mid, color:C.white, border:"none", borderRadius:12, padding:"13px 32px", fontSize:15, cursor:"pointer", fontWeight:"bold"}} onClick={()=>setOnglet("b2b")}>🌱 Catalogue</button>
    </div>
  );

  if (etape==="confirmation") return (
    <div className="pv-sect" style={{...S.section, maxWidth:620, textAlign:"center", paddingTop:70}}>
      <div style={{background:C.white, borderRadius:24, padding:48, boxShadow:"0 10px 40px rgba(0,0,0,0.12)"}}>
        <div style={{fontSize:72, marginBottom:16}}>✅</div>
        <h2 style={{color:C.dark, fontSize:28}}>Commande confirmée !</h2>
        <p style={{color:C.mid, fontSize:16}}>Merci <strong>{form.nom}</strong> pour votre commande Panier Vert.</p>
        <div style={{background:C.pale, borderRadius:14, padding:"18px 22px", margin:"24px 0", textAlign:"left", border:`1px solid ${C.accent}44`}}>
          {panier.map(x=><p key={x.id} style={{margin:"5px 0", fontSize:14, color:"#555"}}>• {x.nom} ×{x.qte} — {(x.prix*x.qte).toFixed(2)} $</p>)}
          <hr style={{border:"none", borderTop:`2px solid ${C.accent}`, margin:"12px 0"}}/>
          <p style={{margin:"4px 0", fontWeight:"bold", color:C.dark, fontSize:15}}>Total : {total} $</p>
        </div>
        <button className="pv-btn" style={{background:C.accent, color:C.white, border:"none", borderRadius:12, padding:"13px 32px", fontSize:15, cursor:"pointer", fontWeight:"bold"}}
          onClick={()=>{ setPanier([]); setOnglet("accueil"); setEtape("panier"); }}>
          🏠 Retour à l'accueil
        </button>
      </div>
    </div>
  );

  if (etape==="livraison") return (
    <div className="pv-sect" style={{...S.section, maxWidth:700}}>
      <h2 style={{color:C.dark, marginBottom:4, fontSize:26}}>📦 Informations de livraison</h2>
      <div style={S.sectionBar}/>
      <div style={{background:C.white, borderRadius:20, padding:36, boxShadow:"0 6px 28px rgba(0,0,0,0.09)", marginTop:20}}>
        {[{l:"Nom complet *",n:"nom",t:"text",p:"Marie-Eve Tremblay"},{l:"Courriel *",n:"email",t:"email",p:"marie@exemple.com"},{l:"Téléphone",n:"tel",t:"tel",p:"450-555-1234"},{l:"Adresse *",n:"adresse",t:"text",p:"123 rue des Érables"},{l:"Ville *",n:"ville",t:"text",p:"Compton"},{l:"Code postal",n:"code",t:"text",p:"J0B 1L0"}].map(f=>(
          <div key={f.n}>
            <label style={S.label}>{f.l}</label>
            <input name={f.n} type={f.t} placeholder={f.p} value={form[f.n]} onChange={handleChamp} style={S.input}/>
          </div>
        ))}
        <div style={{background:C.pale, borderRadius:12, padding:"16px 20px", margin:"18px 0", border:`1px solid ${C.accent}44`}}>
          {[["Sous-total",sousTotal.toFixed(2)+" $"],["TPS (5%)",tps+" $"],["TVQ (9.975%)",tvq+" $"],["Livraison",livraison+" $"]].map(([l,v])=>(
            <div key={l} style={{display:"flex", justifyContent:"space-between", fontSize:13, color:"#555", marginBottom:5}}><span>{l}</span><span>{v}</span></div>
          ))}
          <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold", color:C.dark, fontSize:17, borderTop:`2px solid ${C.accent}`, paddingTop:10, marginTop:6}}><span>TOTAL</span><span>{total} $</span></div>
        </div>
        <div style={{display:"flex", gap:12}}>
          <button className="pv-btn" style={{background:"#eee", color:C.dark, border:"none", borderRadius:12, padding:"13px 22px", cursor:"pointer", fontWeight:"bold"}} onClick={()=>setEtape("panier")}>← Retour</button>
          <button className="pv-btn" style={{background:C.orange, color:C.white, border:"none", borderRadius:12, padding:"13px", cursor:"pointer", fontWeight:"bold", flex:1}}
            onClick={()=>{ if(!form.nom||!form.email||!form.adresse||!form.ville){alert("Remplissez tous les champs.");return;} setEtape("confirmation"); }}>
            ✅ Confirmer la commande
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pv-sect" style={S.section}>
      <h2 style={{color:C.dark, marginBottom:4, fontSize:26}}>🛒 Mon panier ({panier.reduce((s,x)=>s+x.qte,0)} article{panier.reduce((s,x)=>s+x.qte,0)>1?"s":""})</h2>
      <div style={{...S.sectionBar, marginBottom:28}}/>
      <div style={{display:"grid", gridTemplateColumns:"1fr 340px", gap:24, alignItems:"start"}}>
        <div>
          {panier.map(x=>(
            <div key={x.id} style={{background:C.white, borderRadius:14, padding:"16px 20px", marginBottom:12, boxShadow:"0 3px 14px rgba(0,0,0,0.08)", display:"flex", alignItems:"center", gap:16}}>
              <div style={{fontSize:38}}>{x.emoji}</div>
              <div style={{flex:1}}>
                <p style={{fontWeight:"bold", color:C.dark, margin:"0 0 3px", fontSize:14}}>{x.nom}</p>
                <p style={{color:C.orange, fontWeight:"bold", fontSize:13, margin:0}}>{x.prix.toFixed(2)} $ / unité</p>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:10}}>
                <button onClick={()=>changerQte(x.id,-1)} style={{background:C.pale, border:"none", borderRadius:8, width:30, height:30, cursor:"pointer", fontWeight:"bold", fontSize:15}}>−</button>
                <span style={{fontWeight:"bold", minWidth:20, textAlign:"center", fontSize:15}}>{x.qte}</span>
                <button onClick={()=>changerQte(x.id,+1)} style={{background:C.pale, border:"none", borderRadius:8, width:30, height:30, cursor:"pointer", fontWeight:"bold", fontSize:15}}>+</button>
              </div>
              <p style={{fontWeight:"bold", color:C.dark, minWidth:72, textAlign:"right", fontSize:14}}>{(x.prix*x.qte).toFixed(2)} $</p>
              <button onClick={()=>retirer(x.id)} style={{background:"#fee2e2", border:"none", borderRadius:8, padding:"6px 10px", cursor:"pointer", color:C.red, fontSize:13, fontWeight:"bold"}}>✕</button>
            </div>
          ))}
        </div>
        <div style={{background:C.white, borderRadius:18, padding:26, boxShadow:"0 6px 28px rgba(0,0,0,0.1)", position:"sticky", top:88}}>
          <h3 style={{color:C.dark, marginTop:0, marginBottom:16, fontSize:17}}>Récapitulatif</h3>
          {[["Sous-total",sousTotal.toFixed(2)+" $"],["TPS (5%)",tps+" $"],["TVQ (9.975%)",tvq+" $"],["Livraison",livraison+" $"]].map(([l,v])=>(
            <div key={l} style={{display:"flex", justifyContent:"space-between", fontSize:13, color:"#666", marginBottom:8}}><span>{l}</span><span>{v}</span></div>
          ))}
          <div style={{display:"flex", justifyContent:"space-between", fontWeight:"bold", color:C.dark, fontSize:17, borderTop:`2px solid ${C.accent}`, paddingTop:12, marginTop:6, marginBottom:20}}><span>TOTAL</span><span>{total} $</span></div>
          <button className="pv-btn" style={{background:C.orange, color:C.white, border:"none", borderRadius:12, padding:"13px", fontSize:14, cursor:"pointer", fontWeight:"bold", width:"100%", marginBottom:10}} onClick={()=>setEtape("livraison")}>📦 Procéder au paiement →</button>
          <button className="pv-btn" style={{background:"transparent", color:C.mid, border:`2px solid ${C.mid}`, borderRadius:12, padding:"11px", fontSize:13, cursor:"pointer", width:"100%"}} onClick={()=>setOnglet("b2c")}>← Continuer les achats</button>
        </div>
      </div>
    </div>
  );
}

// ── APPLICATION PRINCIPALE ───────────────────────────────
export default function App() {
  const [onglet, setOnglet] = useState("accueil");
  const [panier, setPanier] = useState([]);
  const [user, setUser] = useState(null);

  function ajouterAuPanier(produit) {
    setPanier(p=>{ const e=p.find(x=>x.id===produit.id); if(e) return p.map(x=>x.id===produit.id?{...x,qte:x.qte+1}:x); return [...p,{...produit,qte:1}]; });
  }

  const totalItems = panier.reduce((s,x)=>s+x.qte,0);
  const totalPrix = panier.reduce((s,x)=>s+x.prix*x.qte,0);

  return (
    <div style={S.app}>
      <style>{CSS}</style>

      {/* NAVIGATION */}
      <nav style={S.nav}>
        <div onClick={()=>setOnglet("accueil")} style={{cursor:"pointer"}}>
          <div style={S.navLogo}>🧺 PANIER VERT</div>
          <div style={S.navTagline}>Du champ au consommateur</div>
        </div>
        <div style={S.navLinks}>
          {[["accueil","🏠 Accueil",C.mid],["b2b","🌱 Fermes",C.accent],["b2c","🛒 Boutique",C.orange],["fermes","🤝 Partenaires",C.mid]].map(([id,label,col])=>(
            <button key={id} className="pv-btn" style={S.navBtn(onglet===id,col)} onClick={()=>setOnglet(id)}>{label}</button>
          ))}
          <button className="pv-btn" style={S.cartBtn(totalItems)} onClick={()=>setOnglet("panier")}>
            🛒 {totalItems>0?`${totalItems} — ${totalPrix.toFixed(2)} $`:"Panier"}
          </button>
          {user ? (
            <button className="pv-btn" style={{background:C.mid, color:C.white, border:"none", borderRadius:22, padding:"7px 18px", cursor:"pointer", fontWeight:"bold", fontSize:12}} onClick={()=>setOnglet("moncompte")}>
              👤 {user.nom.split(" ")[0]}
            </button>
          ) : (
            <button className="pv-btn" style={{background:"transparent", color:C.pale, border:"2px solid rgba(255,255,255,0.35)", borderRadius:22, padding:"7px 18px", cursor:"pointer", fontWeight:"bold", fontSize:12}} onClick={()=>setOnglet("connexion")}>
              👤 Connexion
            </button>
          )}
        </div>
      </nav>

      {/* ACCUEIL */}
      {onglet==="accueil" && <>
        <div style={S.hero}>
          <div style={S.heroPattern}/>
          <div style={{position:"relative"}}>
            <div style={S.heroBadge}>🌿 Agriculture biologique · Québec</div>
            <h1 style={S.heroTitle}>🧺 PANIER VERT</h1>
            <p style={S.heroSub}>Du champ au consommateur — Partout au Québec</p>
            <div style={S.pillsRow}>
              <span style={S.pill(C.mid)}>🌱 B2B — Distribution bio</span>
              <span style={S.pill(C.orange)}>🛒 B2C — Marché local</span>
              <span style={S.pill(C.gold)}>🏆 100% Bio</span>
            </div>
          </div>
        </div>

        <div className="pv-sect" style={S.section}>
          <div style={S.statsRow}>
            {[[C.dark,"50–80","Fermes B2B"],[C.mid,"25–40","Partenaires B2C"],[C.orange,"500+","Consommateurs"],[C.purple,"100%","Bio certifié"]].map(([col,num,lbl])=>(
              <div key={lbl} style={S.statCard(col)}>
                <div style={S.statNum}>{num}</div>
                <div style={S.statLbl}>{lbl}</div>
              </div>
            ))}
          </div>

          <h2 style={{...S.sectionTitle, marginBottom:4}}>Comment ça fonctionne</h2>
          <div style={S.sectionBar}/>
          <p style={S.sectionSub}>Une plateforme unique pour les fermes et les consommateurs</p>

          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(290px, 1fr))", gap:22}}>
            {[
              {col:C.accent, emoji:"🌱", titre:"Pour les fermes (B2B)", desc:"Semences bio, engrais, fertilisants. Livraison directement à la ferme sur nos tournées hebdomadaires.", btn:"Voir le catalogue", ong:"b2b"},
              {col:C.orange, emoji:"🛒", titre:"Pour les consommateurs (B2C)", desc:"Légumes frais, fromages artisanaux, viandes, miel, sirop d'érable. Livraison chez vous.", btn:"Voir la boutique", ong:"b2c"},
              {col:C.purple, emoji:"📦", titre:"Membres distributeurs", desc:"Distribuez vos produits bio sur notre plateforme et rejoignez notre réseau de producteurs.", btn:"Devenir membre", ong:"inscription"},
            ].map(c=>(
              <div key={c.titre} className="pv-feature" style={{background:C.white, borderRadius:18, overflow:"hidden", boxShadow:"0 4px 18px rgba(0,0,0,0.09)"}}>
                <div style={{background:`linear-gradient(145deg, ${c.col} 0%, ${c.col}cc 100%)`, padding:"30px 26px 22px", textAlign:"center"}}>
                  <div style={{fontSize:48, marginBottom:10}}>{c.emoji}</div>
                  <h3 style={{color:C.white, margin:0, fontSize:18, fontWeight:"bold"}}>{c.titre}</h3>
                </div>
                <div style={{padding:"20px 26px 26px"}}>
                  <p style={{color:"#555", lineHeight:1.75, fontSize:13, marginBottom:20}}>{c.desc}</p>
                  <button className="pv-btn" style={{background:c.col, color:C.white, border:"none", borderRadius:10, padding:"11px 22px", cursor:"pointer", fontWeight:"bold", fontSize:13, width:"100%"}} onClick={()=>setOnglet(c.ong)}>{c.btn} →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>}

      {/* B2B */}
      {onglet==="b2b" && (
        <div className="pv-sect" style={S.section}>
          <SectionHeader titre="🌱 Catalogue — Intrants biologiques" sub="Semences certifiées · Engrais organiques · Fertilisants · Protection naturelle"/>
          <div style={S.grid}>{produitsB2B.map(p=><ProduitCard key={p.id} produit={p} onAdd={ajouterAuPanier} couleur={C.mid}/>)}</div>
        </div>
      )}

      {/* B2C */}
      {onglet==="b2c" && (
        <div className="pv-sect" style={S.section}>
          <SectionHeader titre="🛒 Boutique — Produits des fermes" sub="Légumes · Fromages · Viandes · Miel · Érable · Herbes · Livraison partout au Québec"/>
          <div style={S.grid}>{produitsB2C.map(p=><ProduitCard key={p.id} produit={p} onAdd={ajouterAuPanier} couleur={C.orange}/>)}</div>
        </div>
      )}

      {/* FERMES */}
      {onglet==="fermes" && (
        <div className="pv-sect" style={S.section}>
          <SectionHeader titre="🤝 Nos fermes partenaires" sub="Des producteurs passionnés des Cantons-de-l'Est qui cultivent sainement"/>
          <div style={S.grid}>{fermes.map(f=><FermeCard key={f.id} f={f}/>)}</div>
        </div>
      )}

      {onglet==="panier" && <PagePanier panier={panier} setPanier={setPanier} setOnglet={setOnglet}/>}
      {onglet==="inscription" && <PageInscription setOnglet={setOnglet} setUser={setUser}/>}
      {onglet==="connexion" && <PageConnexion setOnglet={setOnglet} setUser={setUser}/>}
      {onglet==="moncompte" && user && <PageMonCompte user={user} setUser={setUser} setOnglet={setOnglet} panier={panier}/>}
    </div>
  );
}
