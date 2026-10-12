import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { projects, photoSrc } from '@/data/projects'
import styles from './page.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — TecnoChianti`,
    description: project.abstract,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  // Le righe senza valore (dati da confermare) non vengono mostrate
  const infoItems = project.details.filter(item => item.value)

  return (
    <>
      <Header />

      {/* Hero a colori, piena larghezza */}
      <div className={styles.hero}>
        <Image
          src={photoSrc(project.slug, project.cover)}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
      </div>

      <main className={styles.main}>

        {/* Titolo + info */}
        <section className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.titleBlock}>
              <span className={styles.category}>{project.category}</span>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.abstract}>{project.abstract}</p>
            </div>
            <dl className={styles.info}>
              {infoItems.map(item => (
                <div key={item.label} className={styles.infoRow}>
                  <dt className={styles.infoLabel}>{item.label}</dt>
                  <dd className={styles.infoValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Descrizione */}
        <section className={styles.description}>
          <div className={styles.descriptionInner}>
            {project.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.descriptionText}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Galleria */}
        {project.photos.length > 0 && (
          <section className={styles.gallery} aria-label="Galleria immagini">
            <div className={styles.galleryInner}>
              {project.photos.map((file, i) => (
                <div key={file} className={styles.galleryItem}>
                  <Image
                    src={photoSrc(project.slug, file)}
                    alt={`${project.title}, foto ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigazione */}
        <div className={styles.nav}>
          <div className={styles.navInner}>
            <Link href="/lavori" className={styles.backLink}>
              ← Tutti i lavori
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
