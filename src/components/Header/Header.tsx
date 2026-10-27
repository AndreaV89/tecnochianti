'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, translatePath, type Locale } from '@/i18n/routes'
import styles from './Header.module.css'

interface HeaderProps {
  locale: Locale
  alwaysDark?: boolean
}

export default function Header({ locale, alwaysDark = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(alwaysDark)
  const pathname = usePathname()
  const t = getDictionary(locale)
  // Il selettore mostra solo l'altra lingua e porta alla stessa pagina tradotta
  const otherLocale: Locale = locale === 'it' ? 'en' : 'it'

  useEffect(() => {
    if (alwaysDark) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [alwaysDark])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href={routePath(locale, 'home')} className={styles.logo}>
          <span className={styles.logoName}>TecnoChianti</span>
          <span className={styles.logoDiscipline}>{t.brand.discipline}</span>
        </Link>
        <nav className={styles.nav} aria-label={t.header.navLabel}>
          <Link href={routePath(locale, 'studio')} className={styles.navLink}>{t.header.studio}</Link>
          <Link href={routePath(locale, 'works')} className={styles.navLink}>{t.header.works}</Link>
          <Link href={routePath(locale, 'contact')} className={styles.navLink}>{t.header.contact}</Link>
          <Link
            href={translatePath(pathname, otherLocale)}
            hrefLang={otherLocale}
            lang={otherLocale}
            className={`${styles.navLink} ${styles.languageLink}`}
            aria-label={otherLocale === 'en' ? 'English' : 'Italiano'}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  )
}
