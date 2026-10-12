import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { photoSrc } from '@/data/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  priority?: boolean
}

// Come da brief: nella griglia solo foto (B/N, colore in hover), categoria e nome
export default function ProjectCard({ project, priority = false }: Props) {
  return (
    <Link href={`/lavori/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={photoSrc(project.slug, project.cover)}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </Link>
  )
}
