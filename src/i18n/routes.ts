import type { Metadata } from 'next'

// Lingue del sito: l'italiano è alla radice (/studio), l'inglese sotto /en (/en/studio)
export type Locale = 'it' | 'en'

export const SITE_URL = 'https://www.tecnochianti.it'

export type RouteKey = 'home' | 'studio' | 'works' | 'contact' | 'privacy' | 'cookies'

// Percorso di ogni pagina nelle due lingue.
// Privacy e cookie policy esistono solo in italiano: la versione inglese rimanda a quelle.
const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: { it: '/', en: '/en' },
  studio: { it: '/studio', en: '/en/studio' },
  works: { it: '/lavori', en: '/en/works' },
  contact: { it: '/contatti', en: '/en/contact' },
  privacy: { it: '/privacy', en: '/privacy' },
  cookies: { it: '/cookie-policy', en: '/cookie-policy' },
}

export function routePath(locale: Locale, key: RouteKey): string {
  return ROUTES[key][locale]
}

// Scheda progetto: lo slug è lo stesso nelle due lingue
export function projectPath(locale: Locale, slug: string): string {
  return `${ROUTES.works[locale]}/${slug}`
}

// Stessa pagina nell'altra lingua, per il selettore IT/EN dell'header.
// Le pagine che esistono in una sola lingua (privacy, cookie policy) portano alla Home.
export function translatePath(pathname: string, target: Locale): string {
  const source: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it'
  if (source === target) return pathname

  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    const from = ROUTES[key][source]
    const to = ROUTES[key][target]
    if (from === to) continue
    if (pathname === from) return to
    // Sottopagine, es. /lavori/beretuzzo → /en/works/beretuzzo
    if (key !== 'home' && pathname.startsWith(`${from}/`)) {
      return to + pathname.slice(from.length)
    }
  }
  return ROUTES.home[target]
}

// Indirizzo canonico e versioni linguistiche della pagina (tag hreflang per i motori di ricerca)
export function languageAlternates(
  locale: Locale,
  paths: Record<Locale, string>,
): Metadata['alternates'] {
  return {
    canonical: paths[locale],
    languages: { it: paths.it, en: paths.en, 'x-default': paths.it },
  }
}

export function routeAlternates(locale: Locale, key: RouteKey): Metadata['alternates'] {
  return languageAlternates(locale, ROUTES[key])
}
