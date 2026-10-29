import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import StudioLandscape from '@/components/StudioLandscape/StudioLandscape'
import Reveal from '@/components/Reveal/Reveal'
import ScrollFillText from '@/components/ScrollFillText/ScrollFillText'
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

        {/* Video del territorio (generato con scripts/optimize-video.mjs) che scorrendo diventa un
            disegno di colline; la presentazione scorre sopra: il titolo della pagina e, sotto, a sinistra il testo sullo studio,
            a destra la frase sull'attività. Il primo paragrafo si "riempie" di colore scorrendo
            (ScrollFillText), il resto compare con una dissolvenza (Reveal) */}
        <StudioLandscape src="/video/studio.mp4" poster="/video/studio-poster.webp" label={t.studio.videoLabel}>
          <section className={styles.intro} aria-label={t.studio.introLabel}>
            <div className={styles.introInner}>
              <Reveal className={styles.titleRow}>
                <h1 className={styles.pageTitle}>{t.studio.title}</h1>
              </Reveal>
              <div className={styles.textColumn}>
                <ScrollFillText text={t.studio.paragraphs[0]} className={styles.lead} />
                {t.studio.paragraphs.slice(1).map((paragraph, i) => (
                  <Reveal key={i}>
                    <p className={styles.body}>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300}>
                <p className={styles.statement}>{t.studio.statement}</p>
              </Reveal>
            </div>
          </section>
        </StudioLandscape>

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
