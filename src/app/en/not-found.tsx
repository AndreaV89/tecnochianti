import type { Metadata } from 'next'
import NotFoundView from '@/views/NotFound/NotFoundView'
import { getDictionary } from '@/i18n/dictionaries'

export const metadata: Metadata = {
  title: getDictionary('en').notFound.metaTitle,
}

// 404 quando una pagina inglese chiama notFound() (es. un progetto che non esiste)
export default function NotFound() {
  return <NotFoundView locale="en" />
}
