'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type MouseEvent } from 'react'
import Logo from '@/components/Logo/Logo'
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

  // Link alla pagina in cui si è già (es. logo cliccato dalla Home): Next non fa niente,
  // quindi riportiamo noi la pagina in cima, con lo scroll fluido del sito
  const scrollTopIfCurrent = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (href !== pathname) return
    event.preventDefault()
    window.scrollTo({ top: 0 })
  }

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
        <Link
          href={routePath(locale, 'home')}
          className={styles.logo}
          onClick={scrollTopIfCurrent(routePath(locale, 'home'))}
        >
          <Logo className={styles.logoMark} />
        </Link>
        <nav className={styles.nav} aria-label={t.header.navLabel}>
          <Link href={routePath(locale, 'studio')} className={styles.navLink} onClick={scrollTopIfCurrent(routePath(locale, 'studio'))}>
            {t.header.studio}
          </Link>
          <Link href={routePath(locale, 'works')} className={styles.navLink} onClick={scrollTopIfCurrent(routePath(locale, 'works'))}>
            {t.header.works}
          </Link>
          <Link href={routePath(locale, 'contact')} className={styles.navLink} onClick={scrollTopIfCurrent(routePath(locale, 'contact'))}>
            {t.header.contact}
          </Link>
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
