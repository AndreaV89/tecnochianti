import type { Metadata } from 'next'
import NotFoundView from '@/views/NotFound/NotFoundView'
import { getDictionary } from '@/i18n/dictionaries'

export const metadata: Metadata = {
  title: getDictionary('it').notFound.metaTitle,
}

// 404 quando una pagina italiana chiama notFound() (es. un progetto che non esiste)
export default function NotFound() {
  return <NotFoundView locale="it" />
}
