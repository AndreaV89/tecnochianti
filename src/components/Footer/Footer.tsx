import Link from 'next/link'
import { contacts } from '@/data/contacts'
import { professionalsLegal } from '@/data/legal'
import Logo from '@/components/Logo/Logo'
import CookiePreferencesButton from '@/components/CookieConsent/CookiePreferencesButton'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

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
            <p className={styles.description}>{t.footer.description}</p>
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
          {/* Dati legali dei professionisti: restano in italiano anche nella versione inglese */}
          <ul className={styles.professionals} role="list">
            {professionalsLegal.map(p => (
              <li key={p.vatNumber} lang="it">
                {p.title} {p.name} · P.IVA {p.vatNumber} · {p.register}
              </li>
            ))}
          </ul>

          <div className={styles.legalRow}>
            <span>© {currentYear} TecnoChianti</span>
            <nav className={styles.legalLinks} aria-label={t.footer.legalLabel}>
              <Link href={routePath(locale, 'privacy')} className={styles.link}>{t.footer.privacy}</Link>
              <Link href={routePath(locale, 'cookies')} className={styles.link}>{t.footer.cookies}</Link>
              <CookiePreferencesButton className={styles.link} label={t.footer.cookiePreferences} />
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
