import type { Metadata } from 'next'
import ContactView from '@/views/Contact/ContactView'
import { getDictionary } from '@/i18n/dictionaries'
import { routeAlternates } from '@/i18n/routes'

const t = getDictionary('en')

export const metadata: Metadata = {
  title: t.contact.metaTitle,
  description: t.contact.metaDescription,
  alternates: routeAlternates('en', 'contact'),
}

export default function Page() {
  return <ContactView locale="en" />
}
