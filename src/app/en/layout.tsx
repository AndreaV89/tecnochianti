import type { Metadata } from 'next'
import SiteDocument from '@/components/SiteDocument/SiteDocument'
import { siteMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = siteMetadata('en')

// Root layout delle pagine in inglese (sotto /en)
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>
}
