import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument/SiteDocument'
import { getDictionary } from '@/i18n/dictionaries'
import { SITE_URL } from '@/i18n/routes'

const t = getDictionary('it')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.home.metaTitle,
  description: t.home.metaDescription,
}

// Root layout delle pagine in italiano (alla radice del sito)
export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="it">{children}</SiteDocument>
}
