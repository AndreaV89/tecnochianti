import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: Props) {
  return (
    <Link href={`/lavori/${project.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        {project.inProgress && (
          <span className={styles.badge}>In corso</span>
        )}
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.year}>{project.year}</span>
      </div>
    </Link>
  )
}
