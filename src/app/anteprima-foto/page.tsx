import type { Metadata } from 'next'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import styles from './page.module.css'

// Pagina TEMPORANEA per scegliere copertine e foto della hero.
// Non è linkata da nessuna parte: eliminare la cartella quando non serve più.

export const metadata: Metadata = {
  title: 'Anteprima foto — TecnoChianti',
  robots: { index: false, follow: false },
}

interface PhotoFolder {
  slug: string
  files: string[]
}

// Legge direttamente public/progetti, così mostra tutte le foto generate
// dallo script anche se non sono ancora elencate in src/data/projects.ts
function getPhotoFolders(): PhotoFolder[] {
  const root = path.join(process.cwd(), 'public', 'progetti')
  return readdirSync(root, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => ({
      slug: entry.name,
      files: readdirSync(path.join(root, entry.name))
        .filter(name => name.endsWith('.webp'))
        .sort(),
    }))
}

export default function AnteprimaFotoPage() {
  const folders = getPhotoFolders()

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Anteprima foto</h1>
        <p className={styles.note}>
          Pagina temporanea. Per cambiare copertina o hero modificare il nome file
          in <code>src/data/projects.ts</code>.
        </p>
      </header>

      {folders.map(folder => (
        <section key={folder.slug} className={styles.section}>
          <h2 className={styles.slug}>
            {folder.slug} <span className={styles.count}>{folder.files.length} foto</span>
          </h2>
          <div className={styles.grid}>
            {folder.files.map(file => (
              <figure key={file} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/progetti/${folder.slug}/${file}`}
                    alt={`${folder.slug} ${file}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <figcaption className={styles.caption}>{file}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
