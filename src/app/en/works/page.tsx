import type { Metadata } from 'next'
import WorksView from '@/views/Works/WorksView'
import { getDictionary } from '@/i18n/dictionaries'
import { routeAlternates } from '@/i18n/routes'

const t = getDictionary('en')

export const metadata: Metadata = {
  title: t.works.metaTitle,
  description: t.works.metaDescription,
  alternates: routeAlternates('en', 'works'),
}

export default function Page() {
  return <WorksView locale="en" />
}
