import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import { projects } from '@/data/projects'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Lavori — TecnoChianti',
  description: 'Progetti di architettura, recupero e urbanistica realizzati da TecnoChianti a Radda in Chianti e in Toscana.',
}

export default function LavoriPage() {
  const concluded = projects.filter(p => !p.inProgress)
  const ongoing = projects.filter(p => p.inProgress)

  return (
    <>
      <Header alwaysDark />
      <main className={styles.main}>

        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <span className={styles.pageTitle}>Lavori</span>
            <span className={styles.pageCount}>{projects.length} progetti</span>
          </div>
        </div>

        <div className={styles.content}>

          <section aria-label="Progetti conclusi">
            <div className={styles.grid}>
              {concluded.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  priority={i < 2}
                />
              ))}
            </div>
          </section>

          {ongoing.length > 0 && (
            <section className={styles.ongoingSection} aria-label="Progetti in corso">
              <div className={styles.sectionDivider}>
                <span className={styles.sectionLabel}>In corso</span>
              </div>
              <div className={styles.grid}>
                {ongoing.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
