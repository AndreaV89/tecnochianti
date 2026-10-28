import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/dictionaries'
import { SITE_URL, type Locale } from '@/i18n/routes'

// Metadati comuni a tutte le pagine di una lingua, usati dai due root layout.
// Le singole pagine sovrascrivono titolo e descrizione; l'immagine per i social resta questa.
export function siteMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale)
  return {
    metadataBase: new URL(SITE_URL),
    title: t.home.metaTitle,
    description: t.home.metaDescription,
    // Anteprima quando il link viene condiviso (WhatsApp, LinkedIn, Facebook...).
    // public/og-image.jpg: foto della Home scurita con il logo color carta, 1200 × 630
    openGraph: {
      type: 'website',
      siteName: 'TecnoChianti',
      locale: locale === 'it' ? 'it_IT' : 'en_GB',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TecnoChianti — Studio di Architettura' }],
    },
    twitter: { card: 'summary_large_image' },
  }
}
