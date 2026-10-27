'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState, useSyncExternalStore } from 'react'
import {
  readConsent,
  saveConsent,
  subscribeConsent,
  subscribeOpenBanner,
  type ConsentChoice,
} from '@/lib/consent'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './CookieConsent.module.css'

// Se la variabile non è impostata, Google Analytics non viene caricato
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

// Lato server la scelta non si conosce: 'pending' evita di mostrare il banner
// prima di aver letto localStorage (niente sfarfallio per chi ha già scelto)
type ConsentState = ConsentChoice | null | 'pending'

function useConsent(): ConsentState {
  return useSyncExternalStore<ConsentState>(subscribeConsent, readConsent, () => 'pending')
}

// Google Consent Mode v2: tutto negato di default, prima di qualsiasi altra chiamata.
// gtag.js vero e proprio si carica solo dopo il consenso (vedi sotto).
const consentDefaultScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
`

// Eseguito una sola volta, al primo consenso (anche da una visita precedente)
const configScript = `
gtag('consent', 'update', { analytics_storage: 'granted' });
gtag('js', new Date());
gtag('config', ${JSON.stringify(GA_ID)});
`

interface Props {
  locale: Locale
}

export default function CookieConsent({ locale }: Props) {
  const t = getDictionary(locale).cookieBanner
  const consent = useConsent()
  const [reopened, setReopened] = useState(false)

  useEffect(() => subscribeOpenBanner(() => setReopened(true)), [])

  const choose = (choice: ConsentChoice) => {
    // Revoca dopo un consenso già dato: GA è già caricato, si blocca l'uso dei cookie
    if (choice === 'denied') window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    // Nuovo consenso dopo una revoca nella stessa visita: configScript non riparte
    if (choice === 'granted') window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    saveConsent(choice)
    setReopened(false)
  }

  const showBanner = consent === null || (reopened && consent !== 'pending')

  return (
    <>
      {GA_ID && (
        <Script id="ga-consent-default" strategy="afterInteractive">
          {consentDefaultScript}
        </Script>
      )}
      {GA_ID && consent === 'granted' && (
        <>
          <Script id="ga-config" strategy="afterInteractive">
            {configScript}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {showBanner && (
        <div className={styles.banner} role="dialog" aria-label={t.label} aria-live="polite">
          <p className={styles.text}>
            {t.text}{' '}
            <Link href={routePath(locale, 'cookies')} className={styles.link}>{t.policyLink}</Link>
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={() => choose('denied')}>
              {t.reject}
            </button>
            <button type="button" className={styles.button} onClick={() => choose('granted')}>
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
