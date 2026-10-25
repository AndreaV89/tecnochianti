import Link from 'next/link'
import { contacts } from '@/data/contacts'
import { professionalsLegal } from '@/data/legal'
import CookiePreferencesButton from '@/components/CookieConsent/CookiePreferencesButton'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

// Due fasce: sopra marchio + contatti e menu, sotto dati legali e link.
export default function Footer() {
  const { street, postalCode, city, province } = contacts.address

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.name}>TecnoChianti</span>
            <span className={styles.discipline}>Studio di Architettura</span>
            <p className={styles.description}>
              TecnoChianti si occupa di progettazione di edifici privati, recupero
              e valorizzazione del patrimonio edilizio esistente.
            </p>
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
            <nav className={styles.nav} aria-label="Navigazione footer">
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/lavori" className={styles.link}>Lavori</Link>
              <Link href="/studio" className={styles.link}>Studio</Link>
              <Link href="/contatti" className={styles.link}>Contatti</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.professionals} role="list">
            {professionalsLegal.map(p => (
              <li key={p.vatNumber}>
                {p.title} {p.name} · P.IVA {p.vatNumber} · {p.register}
              </li>
            ))}
          </ul>

          <div className={styles.legalRow}>
            <span>© {currentYear} TecnoChianti</span>
            <nav className={styles.legalLinks} aria-label="Note legali">
              <Link href="/privacy" className={styles.link}>Privacy</Link>
              <Link href="/cookie-policy" className={styles.link}>Cookie policy</Link>
              <CookiePreferencesButton className={styles.link} />
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
