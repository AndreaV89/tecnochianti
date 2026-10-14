import Link from 'next/link'
import { contacts } from '@/data/contacts'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

// Mostrati solo se compilati in src/data/contacts.ts
const socialLinks = [
  { label: 'Instagram', href: contacts.social.instagram },
  { label: 'LinkedIn', href: contacts.social.linkedin },
].filter(link => link.href)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Sinistra — identità */}
        <div className={styles.brand}>
          <div className={styles.brandTop}>
            <span className={styles.name}>TecnoChianti</span>
            <span className={styles.discipline}>Studio di Architettura</span>
          </div>
          <p className={styles.description}>
            Studio di architettura fondato nel 1990, con sede a Radda in Chianti.
            Progettiamo, dirigiamo e realizziamo interventi residenziali,
            ricettivi e di recupero in Toscana e non solo.
          </p>
        </div>

        {/* Centro — navigazione */}
        <nav className={styles.nav} aria-label="Navigazione footer">
          <span className={styles.navLabel}>Menu</span>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/lavori" className={styles.navLink}>Lavori</Link>
          <Link href="/studio" className={styles.navLink}>Studio</Link>
          <Link href="/studio#contatti" className={styles.navLink}>Contatti</Link>
        </nav>

        {/* Destra — social, contatti, legal */}
        <div className={styles.contact}>
          {socialLinks.length > 0 && (
            <div className={styles.social}>
              <span className={styles.navLabel}>Social</span>
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className={styles.contactInfo}>
            <span className={styles.navLabel}>Contatti</span>
            <address className={styles.address}>
              {contacts.address.street}<br />
              {contacts.address.postalCode} {contacts.address.city} ({contacts.address.province})
            </address>
            <a href={`tel:${contacts.phone.href}`} className={styles.contactLink}>
              {contacts.phone.display}
            </a>
            {contacts.email && (
              <a href={`mailto:${contacts.email}`} className={styles.contactLink}>
                {contacts.email}
              </a>
            )}
          </div>

          <p className={styles.legal}>© {currentYear} TecnoChianti</p>
        </div>

      </div>
    </footer>
  )
}
