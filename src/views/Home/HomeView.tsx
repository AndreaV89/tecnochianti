import Link from 'next/link'
import Header from '@/components/Header/Header'
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import { getFeaturedProjects, getHeroSlides } from '@/data/projects'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './HomeView.module.css'

// Stesso calcolo della pagina Lavori (foto 16:9 in card 3:4 → ~2,4× la card).
// Griglia: 1 colonna sotto 640px, 2 fino a 1024px, poi 3 (card max ~375px).
const CARD_SIZES = '(max-width: 640px) 240vw, (max-width: 1024px) 120vw, 900px'

interface Props {
  locale: Locale
}

export default function HomeView({ locale }: Props) {
  const t = getDictionary(locale)
  const [claimFirstLine, claimSecondLine] = t.home.manifesto

  return (
    <main>
      <Header locale={locale} />

      <section aria-label={t.home.heroLabel}>
        <HeroSlideshow slides={getHeroSlides(locale)} />
      </section>

      <section className={styles.manifesto} aria-label={t.home.manifestoLabel}>
        <div className={styles.manifestoInner}>
          <p className={styles.manifestoText}>
            {claimFirstLine}<br />{claimSecondLine}
          </p>
          <div className={styles.intro}>
            <p className={styles.introText}>{t.home.intro}</p>
            <Link href={routePath(locale, 'studio')} className={styles.arrowLink}>
              {t.home.studioLink}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.works} aria-labelledby="works-heading">
        <div className={styles.worksInner}>
          <header className={styles.worksHeader}>
            <span id="works-heading" className={styles.worksLabel}>
              {t.home.featuredWorks}
            </span>
          </header>
          <div className={styles.worksGrid}>
            {getFeaturedProjects(locale).map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                sizes={CARD_SIZES}
                priority={i === 0}
              />
            ))}
          </div>
          <div className={styles.worksFooter}>
            <Link href={routePath(locale, 'works')} className={styles.arrowLink}>
              {t.home.allWorks}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.ctaInner}>
          <span id="cta-heading" className={styles.worksLabel}>
            {t.home.ctaLabel}
          </span>
          <p className={styles.ctaText}>{t.home.ctaQuestion}</p>
          <Link href={routePath(locale, 'contact')} className={styles.ctaLink}>
            {t.home.ctaLink}
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
