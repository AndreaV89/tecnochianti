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

// Le copertine sono orizzontali (16:9) ma la card è verticale (3:4): con object-fit cover
// la foto mostrata è larga circa 2,4 volte la card. Card: 100vw sotto 560px, poi metà
// del contenuto (max ~576px).
const CARD_SIZES = '(max-width: 560px) 240vw, (max-width: 1264px) 120vw, 1380px'

export default function LavoriPage() {
  // Un'unica griglia: i lavori in corso vanno in fondo, segnalati nella card
  const sortedProjects = [
    ...projects.filter(p => p.status !== 'in-corso'),
    ...projects.filter(p => p.status === 'in-corso'),
  ]

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
          <div className={styles.grid}>
            {sortedProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                sizes={CARD_SIZES}
                priority={i < 2}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
