'use client' // error.tsx deve essere un Client Component

import { useEffect } from 'react'
import ErrorView from '@/views/ErrorPage/ErrorView'

interface Props {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

// Errore imprevisto in una pagina: al posto della schermata generica di Next
// compare una pagina con la grafica del sito
export default function Error({ error, unstable_retry }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorView locale="en" onRetry={unstable_retry} />
}
