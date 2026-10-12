import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Sito in costruzione: ogni richiesta viene servita con la pagina
// /in-costruzione (rewrite, l'URL nella barra indirizzi non cambia).
// Per riattivare il sito completo: eliminare questo file.
// Il blocco è disattivato in sviluppo (npm run dev) e nei deploy di preview su Vercel
// (es. branch develop), per poter vedere le pagine reali. Resta attivo solo in produzione.
// Nota: su Vercel NODE_ENV è sempre 'production', anche nei preview: serve VERCEL_ENV.
export function proxy(request: NextRequest) {
  const isDev = process.env.NODE_ENV === 'development'
  const isVercelPreview = process.env.VERCEL_ENV === 'preview'
  if (isDev || isVercelPreview) return NextResponse.next()
  return NextResponse.rewrite(new URL('/in-costruzione', request.url))
}

export const config = {
  matcher: [
    '/((?!in-costruzione|_next/static|_next/image|favicon.ico|.*\\.\\w+$).*)',
  ],
}
