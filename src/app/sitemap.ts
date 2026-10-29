import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { projectPath, routePath, SITE_URL, type Locale, type RouteKey } from '@/i18n/routes'

// Pagine in due lingue presenti nella sitemap (privacy e cookie policy sono solo in italiano)
const PAGES: RouteKey[] = ['home', 'studio', 'works', 'contact']

function entry(paths: Record<Locale, string>): MetadataRoute.Sitemap {
  // Una voce per lingua, ognuna con il rimando all'altra versione (hreflang)
  const languages = { it: SITE_URL + paths.it, en: SITE_URL + paths.en }
  return (['it', 'en'] as Locale[]).map(locale => ({
    url: SITE_URL + paths[locale],
    alternates: { languages },
  }))
}

// /sitemap.xml: elenco delle pagine per i motori di ricerca.
// I progetti "in arrivo" (comingSoon) non hanno una pagina e restano fuori.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.flatMap(key => entry({ it: routePath('it', key), en: routePath('en', key) })),
    ...projects
      .filter(project => !project.comingSoon)
      .flatMap(project => entry({
        it: projectPath('it', project.slug),
        en: projectPath('en', project.slug),
      })),
    { url: SITE_URL + routePath('it', 'privacy') },
    { url: SITE_URL + routePath('it', 'cookies') },
  ]
}
