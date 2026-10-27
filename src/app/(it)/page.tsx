import type { Metadata } from 'next'
import HomeView from '@/views/Home/HomeView'
import { getDictionary } from '@/i18n/dictionaries'
import { routeAlternates } from '@/i18n/routes'

const t = getDictionary('it')

export const metadata: Metadata = {
  title: t.home.metaTitle,
  description: t.home.metaDescription,
  alternates: routeAlternates('it', 'home'),
}

export default function Page() {
  return <HomeView locale="it" />
}
