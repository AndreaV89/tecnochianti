import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './ContactCta.module.css'

interface Props {
  locale: Locale
  // Pagina in cui compare: Home e Lavori hanno domanda e testo diversi
  variant: 'home' | 'works'
}

// Invito al contatto in fondo alle pagine (Home e Lavori): etichetta, domanda grande, testo breve e link a Contatti.
// Testi in dictionaries.ts (home.cta*, works.ctaQuestion, works.ctaText).
export default function ContactCta({ locale, variant }: Props) {
  const t = getDictionary(locale)
  const texts = variant === 'home' ? t.home : t.works

  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <span id="cta-heading" className={styles.label}>
          {t.home.ctaLabel}
        </span>
        <div className={styles.body}>
          <p className={styles.text}>{texts.ctaQuestion}</p>
          <p className={styles.subtext}>{texts.ctaText}</p>
        </div>
        <Link href={routePath(locale, 'contact')} className={styles.link}>
          {t.home.ctaLink}
        </Link>
      </div>
    </section>
  )
}
