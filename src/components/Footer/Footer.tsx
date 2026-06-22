import Link from 'next/link'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Sinistra — identità */}
        <div className={styles.brand}>
          <div className={styles.brandTop}>
            <span className={styles.name}>TecnoChianti</span>
            <span className={styles.discipline}>architettura · ingegneria</span>
          </div>
          <p className={styles.description}>
            Studio tecnico fondato nel 1990, con sede a Radda in Chianti.
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
          <div className={styles.social}>
            <span className={styles.navLabel}>Social</span>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </div>

          <div className={styles.contactInfo}>
            <span className={styles.navLabel}>Contatti</span>
            <a href="mailto:info@tecnochianti.it" className={styles.contactLink}>
              info@tecnochianti.it
            </a>
            <a href="tel:+390000000000" className={styles.contactLink}>
              +39 000 000 0000
            </a>
            <span className={styles.address}>Radda in Chianti, Siena</span>
          </div>

          <p className={styles.legal}>© {currentYear} TecnoChianti</p>
        </div>

      </div>
    </footer>
  )
}
