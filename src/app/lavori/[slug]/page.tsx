import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { projects, photoSrc } from '@/data/projects'
import photoSizesJson from '@/data/photo-sizes.json'
import styles from './page.module.css'

// Larghezza e altezza di ogni foto, generate da scripts/optimize-photos.mjs
// Ogni valore è [larghezza, altezza]
const photoSizes: Record<string, Record<string, number[]>> = photoSizesJson

interface GalleryPhoto {
  file: string
  width: number
  height: number
}

type GalleryRow =
  | { kind: 'full'; photo: GalleryPhoto }
  | { kind: 'pair'; photos: [GalleryPhoto, GalleryPhoto]; reversed: boolean }
  | { kind: 'single'; photo: GalleryPhoto }

// Impaginazione "sfalsata": si alternano una foto orizzontale a tutta larghezza
// e una coppia (una stretta abbassata + una larga, che cambiano lato a ogni coppia).
// Le foto verticali non vanno mai a tutta larghezza. Nessuna foto viene tagliata.
function buildGalleryRows(photos: GalleryPhoto[]): GalleryRow[] {
  const rows: GalleryRow[] = []
  let pairCount = 0
  let i = 0

  while (i < photos.length) {
    const photo = photos[i]
    const isLandscape = photo.width >= photo.height
    const previousWasFull = rows.at(-1)?.kind === 'full'

    if (isLandscape && (!previousWasFull || i === photos.length - 1)) {
      rows.push({ kind: 'full', photo })
      i += 1
    } else if (i + 1 < photos.length) {
      rows.push({ kind: 'pair', photos: [photo, photos[i + 1]], reversed: pairCount % 2 === 1 })
      pairCount += 1
      i += 2
    } else {
      // Ultima foto, verticale: centrata a metà larghezza
      rows.push({ kind: 'single', photo })
      i += 1
    }
  }

  return rows
}

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

  const galleryRows = buildGalleryRows(
    project.photos.map(file => {
      const [width, height] = photoSizes[project.slug]?.[file] ?? [3, 2]
      return { file, width, height }
    }),
  )

  // Numero progressivo per l'alt, nell'ordine della galleria
  const altFor = (file: string) =>
    `${project.title}, foto ${project.photos.indexOf(file) + 1}`

  const renderPhoto = (photo: GalleryPhoto, sizes: string) => (
    <Image
      src={photoSrc(project.slug, photo.file)}
      alt={altFor(photo.file)}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      className={styles.galleryImage}
    />
  )

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
              {galleryRows.map(row => {
                if (row.kind === 'full') {
                  return (
                    <div key={row.photo.file} className={styles.galleryFull}>
                      {renderPhoto(row.photo, '(max-width: 768px) 100vw, 1200px')}
                    </div>
                  )
                }
                if (row.kind === 'single') {
                  return (
                    <div key={row.photo.file} className={styles.gallerySingle}>
                      {renderPhoto(row.photo, '(max-width: 768px) 100vw, 600px')}
                    </div>
                  )
                }
                const [first, second] = row.photos
                return (
                  <div
                    key={first.file}
                    className={`${styles.galleryPair} ${row.reversed ? styles.galleryPairReversed : ''}`}
                  >
                    <div className={styles.galleryPairItem}>
                      {renderPhoto(first, '(max-width: 768px) 100vw, 700px')}
                    </div>
                    <div className={styles.galleryPairItem}>
                      {renderPhoto(second, '(max-width: 768px) 100vw, 700px')}
                    </div>
                  </div>
                )
              })}
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
