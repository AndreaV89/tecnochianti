'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  alwaysDark?: boolean
}

export default function Header({ alwaysDark = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(alwaysDark)

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
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>TecnoChianti</span>
          <span className={styles.logoDiscipline}>Studio di Architettura</span>
        </Link>
        <nav className={styles.nav} aria-label="Navigazione principale">
          <Link href="/studio" className={styles.navLink}>Studio</Link>
          <Link href="/lavori" className={styles.navLink}>Lavori</Link>
        </nav>
      </div>
    </header>
  )
}
