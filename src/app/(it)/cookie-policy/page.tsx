import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage/LegalPage'
import { cookieSections } from '@/data/legal-texts'

export const metadata: Metadata = {
  title: 'Cookie policy — TecnoChianti',
  description: 'Informazioni sui cookie utilizzati dal sito TecnoChianti.',
}

export default function CookiePolicyPage() {
  return <LegalPage title="Cookie policy" sections={cookieSections} />
}
