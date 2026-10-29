import type { Metadata } from 'next'
import StudioView from '@/views/Studio/StudioView'
import { getDictionary } from '@/i18n/dictionaries'
import { routeAlternates } from '@/i18n/routes'

const t = getDictionary('en')

export const metadata: Metadata = {
  title: t.studio.metaTitle,
  description: t.studio.metaDescription,
  alternates: routeAlternates('en', 'studio'),
}

export default function Page() {
  return <StudioView locale="en" />
}
