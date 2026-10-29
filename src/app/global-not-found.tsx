import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument/SiteDocument'
import NotFoundView from '@/views/NotFound/NotFoundView'
import { getDictionary } from '@/i18n/dictionaries'
import { SITE_URL } from '@/i18n/routes'

const t = getDictionary('it')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.notFound.metaTitle,
}

// 404 per tutti gli indirizzi che non esistono (attivato con experimental.globalNotFound in next.config.ts).
// Non passa dai root layout, quindi crea lui <html> e <body>. In italiano, con una riga in inglese.
export default function GlobalNotFound() {
  return (
    <SiteDocument locale="it">
      <NotFoundView locale="it" showOtherLanguage />
    </SiteDocument>
  )
}
