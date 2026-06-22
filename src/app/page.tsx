import Header from '@/components/Header/Header'
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import { featuredProjects } from '@/data/projects'
import styles from './page.module.css'

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
