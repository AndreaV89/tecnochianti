import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sito in costruzione — TecnoChianti',
  description: 'Il nuovo sito di TecnoChianti è in preparazione. Torna presto.',
  robots: { index: false, follow: false },
}

const currentYear = new Date().getFullYear()

export default function InCostruzionePage() {
  return (
    <main className={styles.page}>
      <div className={styles.logo}>
        <span className={styles.logoName}>TecnoChianti</span>
        <span className={styles.logoDiscipline}>Studio di Architettura</span>
      </div>

      <hr className={styles.divider} />

      <div className={styles.content}>
        <h1 className={styles.heading}>Il sito è in costruzione</h1>
        <p className={styles.text}>
          Stiamo preparando i contenuti del nuovo sito. A breve online.
        </p>
      </div>

      <p className={styles.legal}>© {currentYear} TecnoChianti</p>
    </main>
  )
}
