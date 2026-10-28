import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './NotFoundView.module.css'

interface Props {
  locale: Locale
  // Nel 404 globale la lingua non si conosce: si aggiunge una riga nell'altra lingua
  showOtherLanguage?: boolean
}

export default function NotFoundView({ locale, showOtherLanguage = false }: Props) {
  const t = getDictionary(locale)
  const otherLocale: Locale = locale === 'it' ? 'en' : 'it'

  return (
    <>
      <Header locale={locale} alwaysDark />
      <main className={styles.main}>
        <div className={styles.inner}>
          <span className={styles.code} aria-hidden="true">404</span>
          <h1 className={styles.title}>{t.notFound.title}</h1>
          <p className={styles.text}>{t.notFound.text}</p>

          <div className={styles.links}>
            <Link href={routePath(locale, 'home')} className={styles.arrowLink}>{t.notFound.home}</Link>
            <Link href={routePath(locale, 'works')} className={styles.arrowLink}>{t.notFound.works}</Link>
          </div>

          {showOtherLanguage && (
            <p className={styles.otherLanguage} lang={otherLocale}>
              <Link href={routePath(otherLocale, 'home')} hrefLang={otherLocale}>
                {t.notFound.otherLanguage}
              </Link>
            </p>
          )}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
