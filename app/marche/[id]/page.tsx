'use client'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export default function ProduitPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Nav />
      <main className="min-h-screen p-8">
        <Link href="/marche">← Retour au marché</Link>
        <h1 className="text-3xl font-bold mt-4">Produit {params.id}</h1>
      </main>
      <Footer />
    </div>
  )
}
