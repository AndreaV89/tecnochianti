import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Sito in costruzione: ogni richiesta viene servita con la pagina
// /in-costruzione (rewrite, l'URL nella barra indirizzi non cambia).
// Per riattivare il sito completo: eliminare questo file.
// In sviluppo (npm run dev) il blocco è disattivato per poter lavorare sulle pagine reali.
export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') return NextResponse.next()
  return NextResponse.rewrite(new URL('/in-costruzione', request.url))
}

export const config = {
  matcher: [
    '/((?!in-costruzione|_next/static|_next/image|favicon.ico|.*\\.\\w+$).*)',
  ],
}
