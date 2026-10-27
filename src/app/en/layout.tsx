import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument/SiteDocument'
import { getDictionary } from '@/i18n/dictionaries'
import { SITE_URL } from '@/i18n/routes'

const t = getDictionary('en')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.home.metaTitle,
  description: t.home.metaDescription,
}

// Root layout delle pagine in inglese (sotto /en)
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>
}
