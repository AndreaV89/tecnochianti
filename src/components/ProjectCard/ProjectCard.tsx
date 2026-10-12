import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { photoSrc } from '@/data/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  // Larghezza da dichiarare al browser per scegliere la versione dell'immagine.
  // Va calcolata da chi usa la card, perché dipende dalle colonne della griglia.
  sizes: string
  priority?: boolean
}

// Come da brief: nella griglia solo foto (B/N, colore in hover), categoria e nome.
// Lo stato "in corso" è indicato come testo nella riga della categoria, non sulla foto.
export default function ProjectCard({ project, sizes, priority = false }: Props) {
  return (
    <Link href={`/lavori/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={photoSrc(project.slug, project.cover)}
          alt={project.title}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>
          {project.category}
          {project.status === 'in-corso' && (
            <span className={styles.status}> · In corso</span>
          )}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </Link>
  )
}
