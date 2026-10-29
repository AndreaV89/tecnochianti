import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument/SiteDocument'
import { siteMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = siteMetadata('it')

// Root layout delle pagine in italiano (alla radice del sito)
export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="it">{children}</SiteDocument>
}
