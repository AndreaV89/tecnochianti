import Header from '@/components/Header/Header'
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import type { Project } from '@/types'
import styles from './page.module.css'

const featuredProjects: Project[] = [
  {
    id: 'villa-in-chianti',
    title: 'Villa in Chianti',
    category: 'Residenziale',
    year: 2023,
    imageSrc: 'https://picsum.photos/seed/proj101/800/1067',
    imageAlt: 'Villa residenziale in Chianti',
  },
  {
    id: 'albergo-diffuso',
    title: 'Albergo Diffuso',
    category: 'Ricettiva',
    year: 2022,
    imageSrc: 'https://picsum.photos/seed/proj202/800/1067',
    imageAlt: 'Progetto albergo diffuso in Toscana',
  },
  {
    id: 'ex-frantoio',
    title: 'Ex Frantoio',
    category: 'Recupero',
    year: 2021,
    imageSrc: 'https://picsum.photos/seed/proj303/800/1067',
    imageAlt: 'Recupero di un ex frantoio',
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />

      <section aria-label="Hero">
        <HeroSlideshow />
      </section>

      <section className={styles.manifesto} aria-label="Manifesto">
        <div className={styles.manifestoInner}>
          <p className={styles.manifestoText}>
            Progettiamo luoghi<br />che durano.
          </p>
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
              <ProjectCard key={project.id} project={project} priority={i === 0} />
            ))}
          </div>
          <div className={styles.worksFooter}>
            <Link href="/lavori" className={styles.allWorksLink}>
              Tutti i lavori
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
