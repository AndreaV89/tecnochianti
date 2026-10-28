import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './LegalPage.module.css'

export interface LegalSection {
  title: string
  paragraphs: string[]
}

interface Props {
  title: string
  sections: LegalSection[]
}

// Impaginazione comune per Privacy e Cookie policy (solo in italiano per ora)
export default function LegalPage({ title, sections }: Props) {
  return (
    <>
      <Header locale="it" alwaysDark />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageTitle}>{title}</h1>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contentInner}>
            {sections.map(section => (
              <section key={section.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className={styles.body}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale="it" />
    </>
  )
}
