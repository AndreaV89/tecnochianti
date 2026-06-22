import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Lavori — TecnoChianti',
}

export default function LavoriPage() {
  return (
    <>
      <Header alwaysDark />
      <main style={{ paddingTop: '6rem', minHeight: '100svh' }}>
        <div
          style={{
            maxWidth: 'var(--content-width)',
            margin: '0 auto',
            padding: '4rem 2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-grigio-medio)',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
            }}
          >
            Pagina in costruzione
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
