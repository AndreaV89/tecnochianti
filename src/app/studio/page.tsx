import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Studio — TecnoChianti',
  description: 'TecnoChianti è uno studio di architettura con sede a Radda in Chianti. Progettazione architettonica, strutturale e impiantistica tra le province di Siena, Firenze e Arezzo.',
}

const professionals = [
  { name: 'Vincenzo Bove', role: 'Architetto' },
  { name: 'Carlo Matassini', role: 'Perito Industriale' },
  { name: 'Riccardo Panichi', role: 'Architetto' },
]

// Elenco fornito dal cliente
const services = [
  'Progettazione e direzione lavori architettonica',
  'Pratiche edilizie e amministrative',
  'Perizie e stime immobiliari',
  'Consulenze tecniche',
  'Assistenza tecnica alla compravendita immobiliare',
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
                TecnoChianti nasce nel 2013 come raggruppamento di professionisti
                in grado di assicurare una copertura qualificata alla propria
                committenza, anche grazie alla collaborazione consolidata con partner
                esterni. Lo studio può così offrire servizi di progettazione
                architettonica e strutturale per interventi di ogni livello di
                complessità, oltre che di progettazione impiantistica, con una
                particolare attenzione al tema della sostenibilità ambientale e della
                progettazione di edifici a basso consumo energetico.
              </p>
              <p className={styles.body}>
                Con sede operativa a Radda in Chianti e attivo principalmente tra le
                province di Siena, Firenze e Arezzo, lo studio estende la propria
                operatività all&apos;intero territorio regionale e a più ampio raggio.
              </p>
            </div>
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
