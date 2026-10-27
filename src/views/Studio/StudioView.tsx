import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import StudioVideo from '@/components/StudioVideo/StudioVideo'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/routes'
import styles from './StudioView.module.css'

interface Props {
  locale: Locale
}

export default function StudioView({ locale }: Props) {
  const t = getDictionary(locale)

  const professionals = [
    { name: 'Vincenzo Bove', role: t.studio.roles.architect },
    { name: 'Carlo Matassini', role: t.studio.roles.industrialExpert },
    { name: 'Riccardo Panichi', role: t.studio.roles.architect },
  ]

  return (
    <>
      <Header locale={locale} alwaysDark />
      <main className={styles.main}>

        {/* Header pagina */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <span className={styles.pageTitle}>{t.studio.title}</span>
          </div>
        </div>

        {/* Testo introduttivo */}
        <section className={styles.intro} aria-label={t.studio.introLabel}>
          <div className={styles.introInner}>
            <div className={styles.textColumn}>
              {t.studio.paragraphs.map((paragraph, i) => (
                <p key={i} className={styles.body}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Video del territorio (generato con scripts/optimize-video.mjs) */}
        <section className={styles.video} aria-label={t.studio.videoLabel}>
          <StudioVideo src="/video/studio.mp4" poster="/video/studio-poster.webp" />
        </section>

        {/* Professionisti */}
        <section className={styles.section} aria-label={t.studio.team}>
          <div className={styles.sectionInner}>
            <div className={styles.divider}>
              <span className={styles.sectionLabel}>{t.studio.team}</span>
            </div>
            <ul className={styles.professionals} role="list">
              {professionals.map(p => (
                <li key={p.name} className={styles.professional}>
                  <span className={styles.professionalName}>{p.name}</span>
                  <span className={styles.professionalRole}>{p.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Servizi */}
        <section className={styles.section} aria-label={t.studio.services}>
          <div className={styles.sectionInner}>
            <div className={styles.divider}>
              <span className={styles.sectionLabel}>{t.studio.services}</span>
            </div>
            <ul className={styles.services} role="list">
              {t.studio.serviceList.map(s => (
                <li key={s} className={styles.service}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer locale={locale} />
    </>
  )
}
