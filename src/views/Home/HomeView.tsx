import Link from 'next/link'
import Header from '@/components/Header/Header'
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import ContactCta from '@/components/ContactCta/ContactCta'
import { getFeaturedProjects, getHeroSlides } from '@/data/projects'
import { contacts } from '@/data/contacts'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, SITE_URL, type Locale } from '@/i18n/routes'
import styles from './HomeView.module.css'

// Stesso calcolo della pagina Lavori (foto 16:9 in card 3:4 → ~2,4× la card).
// Griglia: 1 colonna sotto 640px, 2 fino a 1024px, poi 3 (card max ~375px).
const CARD_SIZES = '(max-width: 640px) 240vw, (max-width: 1024px) 120vw, 900px'

interface Props {
  locale: Locale
}

// Dati strutturati (Schema.org) dello studio per Google: non si vedono nella pagina,
// servono alla ricerca locale. Contengono solo i contatti pubblici del sito.
function studioJsonLd(locale: Locale, description: string) {
  const { street, postalCode, city, province } = contacts.address
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TecnoChianti — Studio di Architettura',
    description,
    url: `${SITE_URL}${routePath(locale, 'home')}`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: contacts.phone.href,
    email: contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      postalCode,
      addressLocality: city,
      addressRegion: province,
      addressCountry: 'IT',
    },
  }
}

export default function HomeView({ locale }: Props) {
  const t = getDictionary(locale)
  const [claimFirstLine, claimSecondLine] = t.home.manifesto

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioJsonLd(locale, t.home.metaDescription)) }}
      />
      <Header locale={locale} />

      <section aria-label={t.home.heroLabel}>
        <HeroSlideshow slides={getHeroSlides(locale)} />
      </section>

      <section className={styles.manifesto} aria-label={t.home.manifestoLabel}>
        <div className={styles.manifestoInner}>
          <h1 className={styles.manifestoText}>
            {claimFirstLine}<br />{claimSecondLine}
          </h1>
          <p className={styles.manifestoSub}>{t.home.manifestoSub}</p>
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

      <ContactCta locale={locale} variant="home" />

      <Footer locale={locale} />
    </main>
  )
}
