import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ContactForm from '@/components/ContactForm/ContactForm'
import { contacts } from '@/data/contacts'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/routes'
import styles from './ContactView.module.css'

interface Props {
  locale: Locale
}

export default function ContactView({ locale }: Props) {
  const t = getDictionary(locale)
  const { street, postalCode, city, province } = contacts.address

  return (
    <>
      <Header locale={locale} alwaysDark />
      <main className={styles.main}>

        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageTitle}>{t.contact.title}</h1>
            <p className={styles.pageIntro}>{t.contact.intro}</p>
          </div>
        </div>

        <section className={styles.content}>
          <div className={styles.contentInner}>

            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt className={styles.detailLabel}>{t.contact.address}</dt>
                <dd className={styles.detailValue}>
                  {street}<br />
                  {postalCode} {city} ({province})
                  {t.contact.country && <><br />{t.contact.country}</>}
                </dd>
              </div>
              <div className={styles.detail}>
                <dt className={styles.detailLabel}>{t.contact.phone}</dt>
                <dd className={styles.detailValue}>
                  <a href={`tel:${contacts.phone.href}`} className={styles.link}>
                    {contacts.phone.display}
                  </a>
                </dd>
              </div>
              {contacts.email && (
                <div className={styles.detail}>
                  <dt className={styles.detailLabel}>{t.contact.email}</dt>
                  <dd className={styles.detailValue}>
                    <a href={`mailto:${contacts.email}`} className={styles.link}>
                      {contacts.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>{t.contact.writeUs}</h2>
              <ContactForm locale={locale} />
            </div>

          </div>
        </section>

      </main>
      <Footer locale={locale} />
    </>
  )
}
