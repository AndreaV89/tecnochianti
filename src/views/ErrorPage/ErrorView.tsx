'use client'

import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { contacts } from '@/data/contacts'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
// Stessa impaginazione della 404
import styles from '@/views/NotFound/NotFoundView.module.css'
import ownStyles from './ErrorView.module.css'

interface Props {
  locale: Locale
  onRetry: () => void
}

// Pagina mostrata da error.tsx quando una pagina va in errore durante l'uso
export default function ErrorView({ locale, onRetry }: Props) {
  const t = getDictionary(locale)

  return (
    <>
      <Header locale={locale} alwaysDark />
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>{t.errorPage.title}</h1>
          <p className={styles.text}>
            {t.errorPage.text}{' '}
            <a href={`tel:${contacts.phone.href}`} className={ownStyles.phone}>{contacts.phone.display}</a>
          </p>

          <div className={styles.links}>
            <button type="button" onClick={onRetry} className={`${styles.arrowLink} ${ownStyles.retry}`}>
              {t.errorPage.retry}
            </button>
            <Link href={routePath(locale, 'home')} className={styles.arrowLink}>{t.errorPage.home}</Link>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
