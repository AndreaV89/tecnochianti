import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/i18n/routes'

// /robots.txt: tutto indicizzabile, con l'indirizzo della sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
