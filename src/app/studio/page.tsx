import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Studio — TecnoChianti',
  description: 'TecnoChianti è uno studio tecnico di architettura e ingegneria a Radda in Chianti. Progettazione, direzione lavori e pratiche edilizie in Toscana dal 1990.',
}

const professionals = [
  { name: 'Vincenzo Bove', role: 'Architetto' },
  { name: 'Carlo Matassini', role: 'Perito Industriale' },
  { name: 'Riccardo Panichi', role: 'Architetto' },
]

const services = [
  'Progettazione architettonica',
  'Progettazione strutturale',
  'Progettazione urbanistica',
  'Direzione lavori',
  'Computo metrico estimativo',
  'Stima e perizia immobiliare',
  'Pratiche catastali',
  'Pratiche edilizie, SCIA e DIA',
  'Certificazione energetica',
  'Sicurezza in cantiere',
]

export default function StudioPage() {
  return (
    <>
      <Header alwaysDark />
      <main className={styles.main}>

        {/* Header pagina */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <span className={styles.pageTitle}>Studio</span>
          </div>
        </div>

        {/* Testo introduttivo */}
        <section className={styles.intro} aria-label="Chi siamo">
          <div className={styles.introInner}>
            <div className={styles.textColumn}>
              <p className={styles.body}>
                TecnoChianti nasce nel 1990 come risposta alla crescente necessità
                di competenze tecniche integrate nel territorio del Chianti. Nel corso
                degli anni abbiamo affiancato privati, enti e imprese in ogni fase
                del processo edilizio: dalla progettazione alla direzione lavori,
                dalla gestione delle pratiche burocratiche alla stima del patrimonio
                immobiliare.
              </p>
              <p className={styles.body}>
                Il nostro lavoro è radicato nel territorio toscano, ma aperto alla
                complessità di ogni progetto. Crediamo nella qualità come scelta
                quotidiana: nei materiali, nelle soluzioni tecniche, nella cura del
                dettaglio che distingue un intervento ordinario da uno destinato
                a durare.
              </p>
            </div>

            <blockquote className={styles.pullQuote}>
              Trent'anni di lavoro,<br />lo stesso impegno.
            </blockquote>
          </div>
        </section>

        {/* Professionisti */}
        <section className={styles.section} aria-label="Il team">
          <div className={styles.sectionInner}>
            <div className={styles.divider}>
              <span className={styles.sectionLabel}>Il team</span>
            </div>
            <ul className={styles.professionals} role="list">
              {professionals.map(p => (
                <li key={p.name} className={styles.professional}>
                  <span className={styles.professionalName}>{p.name}</span>
                  <span className={styles.professionalRole}>{p.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Servizi */}
        <section className={styles.section} aria-label="Cosa facciamo">
          <div className={styles.sectionInner}>
            <div className={styles.divider}>
              <span className={styles.sectionLabel}>Cosa facciamo</span>
            </div>
            <ul className={styles.services} role="list">
              {services.map(s => (
                <li key={s} className={styles.service}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
