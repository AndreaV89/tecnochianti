// Scelta dell'utente sui cookie di analisi, salvata nel browser (localStorage).
// Usata dal banner (CookieConsent) e dal link "Preferenze cookie" nel footer.

export type ConsentChoice = 'granted' | 'denied'

const STORAGE_KEY = 'tc-cookie-consent'
// Evento interno: avvisa il banner che la scelta è cambiata
const CHANGE_EVENT = 'tc-consent-change'
// Evento interno: chiede al banner di riaprirsi
const OPEN_EVENT = 'tc-consent-open'

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    // localStorage non disponibile (es. navigazione privata con blocchi)
    return null
  }
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    // Se non si può salvare, la scelta vale solo per questa pagina
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

// Revoca del consenso: cancella i cookie di Google Analytics (_ga, _ga_<ID>) già salvati.
// GA li scrive sul dominio principale (es. .tecnochianti.it), quindi proviamo l'host attuale
// e tutti i domini "genitori": un cookie si cancella solo indicando lo stesso dominio.
export function deleteAnalyticsCookies(): void {
  const names = document.cookie
    .split(';')
    .map(cookie => cookie.split('=')[0].trim())
    .filter(name => name === '_ga' || name.startsWith('_ga_'))
  const parts = window.location.hostname.split('.')
  const domains = parts.map((_, i) => parts.slice(i).join('.'))
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`
    }
  }
}

export function subscribeConsent(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

export function openConsentBanner(): void {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function subscribeOpenBanner(callback: () => void): () => void {
  window.addEventListener(OPEN_EVENT, callback)
  return () => window.removeEventListener(OPEN_EVENT, callback)
}
