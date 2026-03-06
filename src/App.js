import { useState } from "react";

const COLORS = {
  dark: "#1B4332", mid: "#2D6A4F", accent: "#52B788",
  pale: "#D8F3DC", orange: "#E76F51", gold: "#D4A017",
  cream: "#F5F0E8", white: "#FFFFFF",
};

const styles = {
  app: { fontFamily: "Georgia, serif", minHeight: "100vh", background: COLORS.cream },
  nav: { background: COLORS.dark, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" },
  navLogo: { color: COLORS.pale, fontWeight: "bold", fontSize: 26, letterSpacing: 2 },
  navTagline: { color: COLORS.accent, fontSize: 13, fontStyle: "italic" },
  navLinks: { display: "flex", gap: 8 },
  navBtn: (active, color) => ({ background: active ? color : "transparent", color: active ? COLORS.white : COLORS.pale, border: `2px solid ${color}`, borderRadius: 20, padding: "6px 18px", cursor: "pointer", fontWeight: "bold", fontSize: 13, transition: "all 0.2s" }),
  hero: { background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.mid} 100%)`, padding: "60px 32px", textAlign: "center" },
  heroTitle: { color: COLORS.pale, fontSize: 48, fontWeight: "bold", margin: "0 0 12px" },
  heroSub: { color: COLORS.accent, fontSize: 20, fontStyle: "italic", margin: "0 0 32px" },
  pillsRow: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" },
  pill: (bg) => ({ background: bg, color: COLORS.white, borderRadius: 20, padding: "8px 22px", fontWeight: "bold", fontSize: 13 }),
  section: { maxWidth: 1100, margin: "0 auto", padding: "40px 24px" },
  sectionTitle: { color: COLORS.dark, fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  sectionSub: { color: COLORS.mid, fontSize: 15, fontStyle: "italic", marginBottom: 28 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 },
  card: { background: COLORS.white, borderRadius: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden", transition: "transform 0.2s", cursor: "pointer" },
  cardTop: (color) => ({ background: color, padding: "24px 20px 16px", textAlign: "center" }),
  cardEmoji: { fontSize: 44, marginBottom: 8 },
  cardTitle: { color: COLORS.white, fontWeight: "bold", fontSize: 16, margin: 0 },
  cardBody: { padding: "16px 20px" },
  cardDesc: { color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 12 },
  cardPrice: { color: COLORS.dark, fontWeight: "bold", fontSize: 15 },
  addBtn: (color) => ({ background: color, color: COLORS.white, border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: "bold", fontSize: 13, width: "100%" }),
  cartBar: { position: "fixed", bottom: 24, right: 24, background: COLORS.dark, color: COLORS.white, borderRadius: 50, width: 64, height: 64, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", cursor: "pointer", zIndex: 100 },
  cartCount: { background: COLORS.orange, color: COLORS.white, borderRadius: 10, fontSize: 11, fontWeight: "bold", padding: "1px 6px", marginTop: 2 },
  farmCard: { background: COLORS.white, borderRadius: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden" },
  farmTop: { background: COLORS.dark, padding: "20px 24px" },
  farmName: { color: COLORS.pale, fontWeight: "bold", fontSize: 20, margin: "0 0 4px" },
  farmLoc: { color: COLORS.accent, fontSize: 13 },
  farmBody: { padding: "16px 24px" },
  farmBio: { color: "#555", fontSize: 13, lineHeight: 1.6, marginBottom: 12 },
  farmTag: (color) => ({ background: color, color: COLORS.white, borderRadius: 12, padding: "3px 12px", fontSize: 11, fontWeight: "bold", marginRight: 6, display: "inline-block", marginBottom: 4 }),
  statsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 40 },
  statCard: (color) => ({ background: color, borderRadius: 12, padding: "20px 24px", textAlign: "center" }),
  statNum: { color: COLORS.white, fontSize: 32, fontWeight: "bold", fontFamily: "Georgia" },
  statLbl: { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 4 },
};

// ── DONNÉES ──────────────────────────────────────────────
const produitsB2B = [
  { id:1, emoji:"🌾", nom:"Semences de blé bio", desc:"Variétés rustiques certifiées bio, adaptées au Québec. Non traitées, sans OGM.", prix:"45 $ / 25 kg", categorie:"Semences", color:COLORS.mid },
  { id:2, emoji:"🥕", nom:"Semences potagères", desc:"Assortiment maraîcher : tomates, carottes, laitues, courgettes, poivrons.", prix:"28 $ / kit", categorie:"Semences", color:COLORS.mid },
  { id:3, emoji:"🌱", nom:"Gazon rustique Québec", desc:"Mélange résistant au gel, idéal pour le climat québécois.", prix:"65 $ / 10 kg", categorie:"Gazon", color:COLORS.accent },
  { id:4, emoji:"🪱", nom:"Vermicompost premium", desc:"Compost de vers de terre, riche en nutriments disponibles.", prix:"35 $ / 20 L", categorie:"Engrais", color:COLORS.gold },
  { id:5, emoji:"💧", nom:"Fertilisant liquide algues", desc:"Extrait d'algues marines, stimule la croissance et la résistance.", prix:"42 $ / 10 L", categorie:"Fertilisants", color:COLORS.gold },
  { id:6, emoji:"🦠", nom:"Inoculant rhizobium", desc:"Bactéries fixatrices d'azote pour légumineuses. Remplace l'engrais azoté.", prix:"38 $ / kg", categorie:"Biostimulants", color:"#9B72CF" },
  { id:7, emoji:"🐞", nom:"Insecticide au neem", desc:"Huile de neem biologique — contrôle insectes sans chimie.", prix:"55 $ / 5 L", categorie:"Protection", color:COLORS.orange },
  { id:8, emoji:"🍄", nom:"Fongicide au soufre", desc:"Soufre mouillable contre mildiou, oïdium et autres champignons.", prix:"32 $ / 5 kg", categorie:"Protection", color:COLORS.orange },
];

const produitsB2C = [
  { id:11, emoji:"🥕", nom:"Panier légumes — Ferme Duval", desc:"Légumes de saison frais cueillis le matin même. Certifiés bio.", prix:"38 $ / panier", categorie:"Légumes", color:"#E76F51", ferme:"Ferme Duval" },
  { id:12, emoji:"🧀", nom:"Fromage artisanal", desc:"Fromage à pâte ferme de vaches élevées au grand air, sans antibiotiques.", prix:"12 $ / 200g", categorie:"Laitier", color:"#D4A017", ferme:"Fromagerie Lalonde" },
  { id:13, emoji:"🍯", nom:"Miel de trèfle", desc:"Miel pur non pasteurisé, récolte estivale des Cantons-de-l'Est.", prix:"18 $ / 500g", categorie:"Miels", color:COLORS.gold, ferme:"Rucher Saint-Paul" },
  { id:14, emoji:"🥩", nom:"Bœuf haché bio", desc:"Bœuf nourri à l'herbe, élevé localement. Congelé sous vide.", prix:"22 $ / kg", categorie:"Viandes", color:"#C0392B", ferme:"Ferme Beaulieu" },
  { id:15, emoji:"🐓", nom:"Œufs de ferme (12)", desc:"Œufs de poules élevées en plein air, nourries aux grains locaux.", prix:"7 $ / doz.", categorie:"Œufs", color:COLORS.mid, ferme:"Ferme Duval" },
  { id:16, emoji:"🍁", nom:"Sirop d'érable ambré", desc:"Récolte printanière, grade ambré goût riche. Non filtré.", prix:"24 $ / 540 mL", categorie:"Érable", color:COLORS.orange, ferme:"Érablière Fontaine" },
  { id:17, emoji:"🌿", nom:"Fines herbes séchées", desc:"Basilic, thym, origan, romarin — séchés naturellement.", prix:"9 $ / sachet", categorie:"Herbes", color:COLORS.accent, ferme:"Ferme Herbes Vives" },
  { id:18, emoji:"🫙", nom:"Confiture fraises locales", desc:"Fraises des champs, sucre de canne bio. Sans pectine ajoutée.", prix:"11 $ / 250 mL", categorie:"Épicerie", color:"#E91E8C", ferme:"Ferme Bernier" },
];

const fermes = [
  { id:1, nom:"Ferme Duval", loc:"Compton, QC", bio:"Famille Duval — maraîchers depuis 3 générations. Certifiés bio depuis 2018.", tags:["Légumes","Œufs","Herbes"], emoji:"🥕" },
  { id:2, nom:"Fromagerie Lalonde", loc:"Coaticook, QC", bio:"Fromages artisanaux de lait cru de vaches Jersiaises élevées en pâturage.", tags:["Fromages","Lait","Beurre"], emoji:"🧀" },
  { id:3, nom:"Rucher Saint-Paul", loc:"Magog, QC", bio:"Apiculteur artisan — 80 ruches en lisière de forêt. Miel non pasteurisé.", tags:["Miel","Propolis","Cire"], emoji:"🍯" },
  { id:4, nom:"Ferme Beaulieu", loc:"Eastman, QC", bio:"Élevage bovin et porcin en pâturage extensif. Nourri à l'herbe, sans hormones.", tags:["Bœuf","Porc","Agneau"], emoji:"🥩" },
  { id:5, nom:"Érablière Fontaine", loc:"North Hatley, QC", bio:"Acériculteur de père en fils depuis 1962. 8 000 entailles en forêt mixte.", tags:["Érable","Beurre d'érable"], emoji:"🍁" },
  { id:6, nom:"Ferme Herbes Vives", loc:"Sutton, QC", bio:"Spécialiste des plantes médicinales et fines herbes biologiques du Québec.", tags:["Herbes","Tisanes","Huiles"], emoji:"🌿" },
];

// ── COMPOSANTS ───────────────────────────────────────────
function ProduitCard({ produit, onAdd, couleurBtn }) {
  const [ajouté, setAjouté] = useState(false);
  function handleAdd() {
    onAdd(produit);
    setAjouté(true);
    setTimeout(() => setAjouté(false), 1500);
  }
  return (
    <div style={styles.card}>
      <div style={styles.cardTop(produit.color)}>
        <div style={styles.cardEmoji}>{produit.emoji}</div>
        <p style={styles.cardTitle}>{produit.nom}</p>
        <span style={{ background:"rgba(255,255,255,0.2)", color:"#fff", borderRadius:10, padding:"2px 10px", fontSize:11 }}>{produit.categorie}</span>
      </div>
      <div style={styles.cardBody}>
        <p style={styles.cardDesc}>{produit.desc}</p>
        <p style={styles.cardPrice}>{produit.prix}</p>
        <button style={styles.addBtn(ajouté ? COLORS.accent : couleurBtn)} onClick={handleAdd}>
          {ajouté ? "✓ Ajouté !" : "＋ Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

function FermeCard({ ferme }) {
  return (
    <div style={styles.farmCard}>
      <div style={styles.farmTop}>
        <div style={{ fontSize:32, marginBottom:8 }}>{ferme.emoji}</div>
        <p style={styles.farmName}>{ferme.nom}</p>
        <p style={styles.farmLoc}>📍 {ferme.loc}</p>
      </div>
      <div style={styles.farmBody}>
        <p style={styles.farmBio}>{ferme.bio}</p>
        <div>{ferme.tags.map(t => <span key={t} style={styles.farmTag(COLORS.accent)}>{t}</span>)}</div>
      </div>
    </div>
  );
}

// ── APPLICATION PRINCIPALE ───────────────────────────────
export default function App() {
  const [onglet, setOnglet] = useState("accueil");
  const [panier, setPanier] = useState([]);

  function ajouterAuPanier(produit) {
    setPanier(p => {
      const existe = p.find(x => x.id === produit.id);
      if (existe) return p.map(x => x.id === produit.id ? { ...x, qte: x.qte + 1 } : x);
      return [...p, { ...produit, qte: 1 }];
    });
  }

  const totalItems = panier.reduce((s, x) => s + x.qte, 0);

  return (
    <div style={styles.app}>

      {/* NAVIGATION */}
      <nav style={styles.nav}>
        <div>
          <div style={styles.navLogo}>🧺 PANIER VERT</div>
          <div style={styles.navTagline}>Du champ au consommateur</div>
        </div>
        <div style={styles.navLinks}>
          {[["accueil","🏠 Accueil"],["b2b","🌱 Pour les fermes"],["b2c","🛒 Boutique"],["fermes","🤝 Nos fermes"]].map(([id, label]) => (
            <button key={id} style={styles.navBtn(onglet===id, id==="b2b" ? COLORS.accent : id==="b2c" ? COLORS.orange : COLORS.mid)} onClick={() => setOnglet(id)}>{label}</button>
          ))}
        </div>
      </nav>

      {/* ACCUEIL */}
      {onglet === "accueil" && (
        <>
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>🧺 PANIER VERT</h1>
            <p style={styles.heroSub}>Du champ au consommateur — Partout au Québec</p>
            <div style={styles.pillsRow}>
              <span style={styles.pill(COLORS.mid)}>🌱 B2B — Distribution bio aux fermes</span>
              <span style={styles.pill(COLORS.orange)}>🛒 B2C — Marché local en ligne</span>
              <span style={styles.pill(COLORS.gold)}>🏆 100% Agriculture biologique</span>
            </div>
          </div>
          <div style={styles.section}>
            <div style={styles.statsRow}>
              {[[COLORS.dark,"50–80","Fermes clientes B2B"],[COLORS.mid,"25–40","Partenaires B2C"],[COLORS.orange,"500+","Consommateurs"],["#9B72CF","100%","Produits bio"]].map(([color,num,lbl]) => (
                <div key={lbl} style={styles.statCard(color)}>
                  <div style={styles.statNum}>{num}</div>
                  <div style={styles.statLbl}>{lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
              <div style={{ background:COLORS.white, borderRadius:14, padding:28, borderLeft:`6px solid ${COLORS.accent}`, boxShadow:"0 4px 16px rgba(0,0,0,0.07)" }}>
                <h2 style={{ color:COLORS.dark, marginTop:0 }}>🌱 Pour les fermes (B2B)</h2>
                <p style={{ color:"#555", lineHeight:1.7 }}>Commandez vos semences certifiées bio, engrais biologiques, fertilisants, inoculants et solutions naturelles directement en ligne. Livraison à la ferme sur nos tournées habituelles.</p>
                <button style={{ ...styles.addBtn(COLORS.accent), width:"auto", padding:"10px 24px" }} onClick={() => setOnglet("b2b")}>Voir le catalogue →</button>
              </div>
              <div style={{ background:COLORS.white, borderRadius:14, padding:28, borderLeft:`6px solid ${COLORS.orange}`, boxShadow:"0 4px 16px rgba(0,0,0,0.07)" }}>
                <h2 style={{ color:COLORS.dark, marginTop:0 }}>🛒 Pour les consommateurs (B2C)</h2>
                <p style={{ color:"#555", lineHeight:1.7 }}>Achetez directement des fermes biologiques des Cantons-de-l'Est. Légumes frais, fromages artisanaux, viandes, miel, sirop d'érable — livrés chez vous.</p>
                <button style={{ ...styles.addBtn(COLORS.orange), width:"auto", padding:"10px 24px" }} onClick={() => setOnglet("b2c")}>Voir la boutique →</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* B2B — CATALOGUE INTRANTS BIO */}
      {onglet === "b2b" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🌱 Catalogue — Intrants biologiques pour fermes</h2>
          <p style={styles.sectionSub}>Semences certifiées bio · Engrais organiques · Fertilisants · Protection naturelle · Zéro pesticide chimique</p>
          <div style={styles.grid}>
            {produitsB2B.map(p => <ProduitCard key={p.id} produit={p} onAdd={ajouterAuPanier} couleurBtn={COLORS.mid} />)}
          </div>
        </div>
      )}

      {/* B2C — BOUTIQUE */}
      {onglet === "b2c" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🛒 Boutique — Produits des fermes locales</h2>
          <p style={styles.sectionSub}>Légumes · Fromages · Viandes · Miel · Érable · Herbes — Livraison partout au Québec</p>
          <div style={styles.grid}>
            {produitsB2C.map(p => <ProduitCard key={p.id} produit={p} onAdd={ajouterAuPanier} couleurBtn={COLORS.orange} />)}
          </div>
        </div>
      )}

      {/* NOS FERMES */}
      {onglet === "fermes" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🤝 Nos fermes partenaires</h2>
          <p style={styles.sectionSub}>Des producteurs des Cantons-de-l'Est qui cultivent sainement et vendent via Panier Vert</p>
          <div style={styles.grid}>
            {fermes.map(f => <FermeCard key={f.id} ferme={f} />)}
          </div>
        </div>
      )}

      {/* PANIER FLOTTANT */}
      {totalItems > 0 && (
        <div style={styles.cartBar} onClick={() => alert(`Panier : ${totalItems} article(s)\n` + panier.map(x => `• ${x.nom} ×${x.qte}`).join("\n"))}>
          <span style={{ fontSize:24 }}>🛒</span>
          <span style={styles.cartCount}>{totalItems}</span>
        </div>
      )}

    </div>
  );
}