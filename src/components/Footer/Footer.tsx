import Link from 'next/link'
import { contacts } from '@/data/contacts'
import { professionalsLegal } from '@/data/legal'
import Logo from '@/components/Logo/Logo'
import CookiePreferencesButton from '@/components/CookieConsent/CookiePreferencesButton'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

// Firma dello sviluppatore, concordata con il cliente
const CREDIT_URL = 'https://www.andreavannetti.dev'

interface Props {
  locale: Locale
}

// Due fasce: sopra marchio + contatti e menu, sotto dati legali e link.
export default function Footer({ locale }: Props) {
  const { street, postalCode, city, province } = contacts.address
  const t = getDictionary(locale)

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo className={styles.logo} />
          </div>

          <div className={styles.info}>
            <address className={styles.address}>
              {street}, {postalCode} {city} ({province})
            </address>
            <a href={`tel:${contacts.phone.href}`} className={styles.link}>
              {contacts.phone.display}
            </a>
            {contacts.email && (
              <a href={`mailto:${contacts.email}`} className={styles.link}>
                {contacts.email}
              </a>
            )}
            <nav className={styles.nav} aria-label={t.footer.navLabel}>
              <Link href={routePath(locale, 'home')} className={styles.link}>{t.footer.home}</Link>
              <Link href={routePath(locale, 'works')} className={styles.link}>{t.header.works}</Link>
              <Link href={routePath(locale, 'studio')} className={styles.link}>{t.header.studio}</Link>
              <Link href={routePath(locale, 'contact')} className={styles.link}>{t.header.contact}</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          {/* Dati legali dei professionisti (i titoli Arch. e P.I. restano in italiano) */}
          <ul className={styles.professionals} role="list">
            {professionalsLegal.map(p => (
              <li key={p.vatNumber}>
                {p.title} {p.name} · {t.footer.vat} {p.vatNumber} · {p.register[locale]}
              </li>
            ))}
          </ul>

          <div className={styles.legalRow}>
            <span>© {currentYear} TecnoChianti</span>
            <nav className={styles.legalLinks} aria-label={t.footer.legalLabel}>
              <Link href={routePath(locale, 'privacy')} className={styles.link}>{t.footer.privacy}</Link>
              <Link href={routePath(locale, 'cookies')} className={styles.link}>{t.footer.cookies}</Link>
              <CookiePreferencesButton className={styles.link} label={t.footer.cookiePreferences} />
              <a href={CREDIT_URL} target="_blank" rel="noopener" className={`${styles.link} ${styles.credit}`}>
                {/* Marchio </> di Andrea Vannetti, colore da currentColor come il resto del footer */}
                <svg className={styles.creditIcon} viewBox="175 492 1428 794" aria-hidden="true">
                  <polygon points="963.15 1137.44 927.41 1285 1601.93 1004.23 1601.93 886.32 1079.39 657.18 1050.27 777.37 1467.39 944.95 963.15 1137.44" />
                  <polygon points="765.46 1156.17 765.36 1156.51 763.7 1163.61 735.15 1282.76 830.28 1282.76 1021.58 492.66 924.36 492.66 888.52 642.35 772.61 1126.34 765.46 1156.17" />
                  <polygon points="758.92 779.33 629.58 840.3 596.76 953.7 310.07 841.57 787 658.65 822.36 510.86 175.72 783.76 175.72 902.72 677.19 1117.19 758.92 779.33" />
                </svg>
                {t.footer.credit}
              </a>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
