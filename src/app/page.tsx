import Header from '@/components/Header/Header'
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import { featuredProjects, heroSlides } from '@/data/projects'
import styles from './page.module.css'

// Stesso calcolo della pagina Lavori (foto 16:9 in card 3:4 → ~2,4× la card).
// Griglia: 1 colonna sotto 640px, 2 fino a 1024px, poi 3 (card max ~375px).
const CARD_SIZES = '(max-width: 640px) 240vw, (max-width: 1024px) 120vw, 900px'

export default function HomePage() {
  return (
    <main>
      <Header />

      <section aria-label="Hero">
        <HeroSlideshow slides={heroSlides} />
      </section>

      <section className={styles.manifesto} aria-label="Manifesto">
        <div className={styles.manifestoInner}>
          <p className={styles.manifestoText}>
            Diamo forma al futuro<br />creando architetture custodi dell&apos;anima dei luoghi
          </p>
          {/* Bozza da far approvare al cliente */}
          <div className={styles.intro}>
            <p className={styles.introText}>
              TecnoChianti è uno studio di architettura con sede a Radda in Chianti.
              Dal 2013 progettiamo edifici privati e ci occupiamo del recupero e della
              valorizzazione del patrimonio edilizio esistente, seguendo ogni intervento
              dal progetto al cantiere.
            </p>
            <Link href="/studio" className={styles.arrowLink}>
              Lo studio
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.works} aria-labelledby="works-heading">
        <div className={styles.worksInner}>
          <header className={styles.worksHeader}>
            <span id="works-heading" className={styles.worksLabel}>
              Lavori in evidenza
            </span>
          </header>
          <div className={styles.worksGrid}>
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} sizes={CARD_SIZES} priority={i === 0} />
            ))}
          </div>
          <div className={styles.worksFooter}>
            <Link href="/lavori" className={styles.arrowLink}>
              Tutti i lavori
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Contatti">
        <div className={styles.ctaInner}>
          <p className={styles.ctaText}>Hai un progetto?</p>
          <Link href="/contatti" className={styles.ctaLink}>
            Parliamone
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
