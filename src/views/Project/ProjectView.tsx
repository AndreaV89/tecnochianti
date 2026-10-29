import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { projects, localizeProject, photoAlt, photoSrc } from '@/data/projects'
import { getDictionary } from '@/i18n/dictionaries'
import { languageAlternates, projectPath, routePath, type Locale } from '@/i18n/routes'
import photoSizesJson from '@/data/photo-sizes.json'
import styles from './ProjectView.module.css'

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
// e una coppia (una stretta + una larga allineate in alto, che cambiano lato a ogni coppia).
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

// Nei testi di projects.ts i grassetti sono scritti tra **...**:
// dividendo sugli asterischi, le parti in posizione dispari sono quelle in grassetto
function renderBold(text: string): ReactNode[] {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  )
}

// I lavori "dettagli a breve" non hanno una scheda
function findProject(slug: string, locale: Locale) {
  const project = projects.find(p => p.slug === slug && !p.comingSoon)
  return project ? localizeProject(project, locale) : undefined
}

// Slug uguali nelle due lingue: le route /lavori/[slug] e /en/works/[slug] usano lo stesso elenco
export function getProjectStaticParams() {
  return projects.filter(p => !p.comingSoon).map(p => ({ slug: p.slug }))
}

export function getProjectMetadata(locale: Locale, slug: string): Metadata {
  const project = findProject(slug, locale)
  if (!project) return {}
  return {
    title: `${project.title} — TecnoChianti`,
    // Senza abstract resta la description generale del sito
    description: project.abstract || undefined,
    alternates: languageAlternates(locale, {
      it: projectPath('it', slug),
      en: projectPath('en', slug),
    }),
  }
}

interface Props {
  locale: Locale
  slug: string
}

export default function ProjectView({ locale, slug }: Props) {
  const project = findProject(slug, locale)
  if (!project) notFound()
  const t = getDictionary(locale)

  const infoItems = [
    { label: t.project.location, value: project.location },
    { label: t.project.year, value: project.year },
    { label: t.project.status, value: t.project.statusLabels[project.status] },
    { label: t.project.intervention, value: project.intervention },
    { label: t.project.category, value: project.category },
  ]

  const galleryRows = buildGalleryRows(
    project.photos.map(file => {
      const [width, height] = photoSizes[project.slug]?.[file] ?? [3, 2]
      return { file, width, height }
    }),
  )

  const renderPhoto = (photo: GalleryPhoto, sizes: string) => (
    <Image
      src={photoSrc(project.slug, photo.file)}
      alt={photoAlt(project, photo.file)}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      className={styles.galleryImage}
    />
  )

  return (
    <>
      <Header locale={locale} />

      {/* Hero a colori, piena larghezza */}
      <div className={styles.hero}>
        <Image
          src={photoSrc(project.slug, project.cover)}
          alt={photoAlt(project, project.cover)}
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
              {project.abstract && <p className={styles.abstract}>{project.abstract}</p>}
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
        {project.paragraphs.length > 0 && (
          <section className={styles.description}>
            <div className={styles.descriptionInner}>
              {project.paragraphs.map((paragraph, i) => (
                <p key={i} className={styles.descriptionText}>{renderBold(paragraph)}</p>
              ))}
            </div>
          </section>
        )}

        {/* Galleria */}
        {project.photos.length > 0 && (
          <section className={styles.gallery} aria-label={t.project.galleryLabel}>
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
            <Link href={routePath(locale, 'works')} className={styles.backLink}>
              {t.project.back}
            </Link>
          </div>
        </div>

      </main>

      <Footer locale={locale} />
    </>
  )
}
