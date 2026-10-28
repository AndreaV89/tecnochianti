import Header from '@/components/Header/Header'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import ContactCta from '@/components/ContactCta/ContactCta'
import { getProjects } from '@/data/projects'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/routes'
import styles from './WorksView.module.css'

// Le copertine sono orizzontali (16:9) ma la card è verticale (3:4): con object-fit cover
// la foto mostrata è larga circa 2,4 volte la card. Card: 100vw sotto 560px, poi metà
// del contenuto (max ~576px).
const CARD_SIZES = '(max-width: 560px) 240vw, (max-width: 1264px) 120vw, 1380px'

interface Props {
  locale: Locale
}

export default function WorksView({ locale }: Props) {
  const t = getDictionary(locale)
  const projects = getProjects(locale)
  // Dal più recente al più vecchio (a parità di anno resta l'ordine di projects.ts)
  const sortedProjects = [...projects].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <>
      <Header locale={locale} alwaysDark />
      <main className={styles.main}>

        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageTitle}>{t.works.title}</h1>
            <span className={styles.pageCount}>{t.works.count(projects.length)}</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            {sortedProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                sizes={CARD_SIZES}
                priority={i < 2}
              />
            ))}
          </div>
        </div>

        <ContactCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
