// gtag di Google Analytics, definito dallo script in CookieConsent
interface Window {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}
