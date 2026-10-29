import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { photoAlt, photoSrc } from '@/data/projects'
import { getDictionary } from '@/i18n/dictionaries'
import { projectPath, type Locale } from '@/i18n/routes'
import styles from './ProjectCard.module.css'

interface Props {
  // Già nella lingua della pagina (vedi getProjects)
  project: Project
  locale: Locale
  // Larghezza da dichiarare al browser per scegliere la versione dell'immagine.
  // Va calcolata da chi usa la card, perché dipende dalle colonne della griglia.
  sizes: string
  priority?: boolean
}

// Come da brief: nella griglia solo foto (B/N, colore in hover), categoria e nome.
// Lo stato "in corso" è indicato come testo nella riga della categoria, non sulla foto.
// In hover il nome compare anche sopra la foto (solo decorativo: aria-hidden).
// I lavori comingSoon non hanno scheda: la card non è un link e in hover mostra "Dettagli a breve".
export default function ProjectCard({ project, locale, sizes, priority = false }: Props) {
  const t = getDictionary(locale)
  const content = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={photoSrc(project.slug, project.cover)}
          alt={photoAlt(project, project.cover)}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} aria-hidden="true">
          {project.comingSoon ? (
            <span className={styles.overlayNote}>{t.works.comingSoon}</span>
          ) : (
            <span className={styles.overlayTitle}>{project.title}</span>
          )}
        </div>
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>
          {project.category}
          {project.status === 'in-corso' && (
            <span className={styles.status}> · {t.works.inProgress}</span>
          )}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </>
  )

  if (project.comingSoon) {
    return <div className={`${styles.card} ${styles.cardStatic}`}>{content}</div>
  }

  return (
    <Link href={projectPath(locale, project.slug)} className={styles.card}>
      {content}
    </Link>
  )
}
