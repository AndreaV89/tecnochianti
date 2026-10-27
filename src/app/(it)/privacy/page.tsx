import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage/LegalPage'
import { privacySections } from '@/data/legal-texts'

export const metadata: Metadata = {
  title: 'Privacy — TecnoChianti',
  description: 'Informativa sul trattamento dei dati personali del sito TecnoChianti.',
}

export default function PrivacyPage() {
  return <LegalPage title="Privacy" sections={privacySections} />
}
