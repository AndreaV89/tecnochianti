import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './ContactCta.module.css'

interface Props {
  locale: Locale
}

// Invito al contatto in fondo alle pagine (Home e Lavori): etichetta, domanda grande e link a Contatti.
// Testi in dictionaries.ts (home.ctaLabel, home.ctaQuestion, home.ctaLink).
export default function ContactCta({ locale }: Props) {
  const t = getDictionary(locale)

  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <span id="cta-heading" className={styles.label}>
          {t.home.ctaLabel}
        </span>
        <p className={styles.text}>{t.home.ctaQuestion}</p>
        <Link href={routePath(locale, 'contact')} className={styles.link}>
          {t.home.ctaLink}
        </Link>
      </div>
    </section>
  )
}
