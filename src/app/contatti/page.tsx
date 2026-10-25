import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ContactForm from '@/components/ContactForm/ContactForm'
import { contacts } from '@/data/contacts'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contatti — TecnoChianti',
  description: 'Contatta TecnoChianti, studio di architettura a Radda in Chianti (SI).',
}

export default function ContattiPage() {
  const { street, postalCode, city, province } = contacts.address

  return (
    <>
      <Header alwaysDark />
      <main className={styles.main}>

        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageTitle}>Contatti</h1>
          </div>
        </div>

        <section className={styles.content}>
          <div className={styles.contentInner}>

            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt className={styles.detailLabel}>Indirizzo</dt>
                <dd className={styles.detailValue}>
                  {street}<br />
                  {postalCode} {city} ({province})
                </dd>
              </div>
              <div className={styles.detail}>
                <dt className={styles.detailLabel}>Telefono</dt>
                <dd className={styles.detailValue}>
                  <a href={`tel:${contacts.phone.href}`} className={styles.link}>
                    {contacts.phone.display}
                  </a>
                </dd>
              </div>
              {contacts.email && (
                <div className={styles.detail}>
                  <dt className={styles.detailLabel}>Email</dt>
                  <dd className={styles.detailValue}>
                    <a href={`mailto:${contacts.email}`} className={styles.link}>
                      {contacts.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>Scrivici</h2>
              <ContactForm />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
