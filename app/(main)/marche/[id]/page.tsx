import Link from 'next/link'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

export default function ProduitPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e8' }}>
      <Nav page="marche" />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px 72px', fontFamily: 'Georgia, serif' }}>
        <p style={{ margin: '0 0 12px', fontSize: 13, letterSpacing: 2, color: '#2d5a27', fontFamily: 'system-ui', textTransform: 'uppercase' }}>
          Marche local
        </p>
        <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(28px, 5vw, 44px)', color: '#1a3a15' }}>
          Fiche produit a completer
        </h1>
        <p style={{ margin: '0 0 24px', fontSize: 16, lineHeight: 1.7, color: '#4b5563', fontFamily: 'system-ui' }}>
          Cette page dynamique existe maintenant pour que le build Next.js reste valide. Il reste a brancher les vraies donnees produit.
        </p>
        <Link
          href="/marche"
          style={{
            display: 'inline-block',
            padding: '12px 18px',
            borderRadius: 10,
            background: '#1a3a15',
            color: '#f5e6c8',
            textDecoration: 'none',
            fontFamily: 'system-ui',
            fontWeight: 700,
          }}
        >
          Retour au marche
        </Link>
      </main>
      <Footer />
    </div>
  )
}
