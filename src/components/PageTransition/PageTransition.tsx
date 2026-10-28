'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/Logo/Logo'
import styles from './PageTransition.module.css'

// idle: pannello nascosto sotto lo schermo
// covering: il pannello sale e copre la pagina
// covered: pagina coperta, si aspetta che la nuova sia pronta
// revealing: il pannello esce verso l'alto scoprendo la nuova pagina
type Phase = 'idle' | 'covering' | 'covered' | 'revealing'

// Devono coincidere con le durate in PageTransition.module.css
const COVER_MS = 550
const REVEAL_MS = 650
// Se la nuova pagina non arriva (errore di rete...), dopo questo tempo il pannello si toglie comunque
const FALLBACK_MS = 6000

// Cambio lingua: italiano e inglese hanno root layout diversi, quindi il browser ricarica la pagina
// e questo componente riparte da zero. Prima di ricaricare salviamo un segno in sessionStorage:
// lo script in <head> (RELOAD_SCRIPT) lo legge e mette l'attributo data-page-transition su <html>,
// così la nuova pagina compare già coperta dal pannello, che poi esce verso l'alto come al solito.
const STORAGE_KEY = 'tc-page-transition'
export const RELOAD_SCRIPT = `try{if(sessionStorage.getItem('${STORAGE_KEY}')){sessionStorage.removeItem('${STORAGE_KEY}');document.documentElement.setAttribute('data-page-transition','covered')}}catch(e){}`

function localeOf(pathname: string): string {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it'
}

// Transizione tra le pagine (ispirata a architetti-template.vercel.app): al clic su un link interno
// sale un pannello antracite con il logo, si cambia pagina sotto il pannello e poi il pannello
// esce verso l'alto. Il clic viene intercettato prima di next/link (fase di cattura): se qui
// chiamiamo preventDefault, Link non naviga e la navigazione la facciamo noi a pagina coperta.
// Nessuna transizione per link esterni, nuove schede, avanti/indietro e con "riduci movimento".
export default function PageTransition() {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const phaseRef = useRef<Phase>('idle')
  const timers = useRef<number[]>([])

  const changePhase = (next: Phase) => {
    phaseRef.current = next
    setPhase(next)
  }

  const later = (callback: () => void, ms: number) => {
    timers.current.push(window.setTimeout(callback, ms))
  }

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (phaseRef.current !== 'idle') {
        // Clic durante una transizione già in corso: lo ignoriamo
        event.preventDefault()
        return
      }
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const link = (event.target as Element | null)?.closest('a')
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      // Stessa pagina (anche con #ancora): comportamento normale del browser
      if (url.pathname === window.location.pathname && url.search === window.location.search) return

      event.preventDefault()
      const reload = localeOf(url.pathname) !== localeOf(window.location.pathname)
      changePhase('covering')
      later(() => {
        changePhase('covered')
        if (reload) {
          try {
            sessionStorage.setItem(STORAGE_KEY, '1')
          } catch {
            // sessionStorage non disponibile: la nuova pagina comparirà senza pannello
          }
          window.location.assign(url.href)
          return
        }
        router.push(url.pathname + url.search + url.hash)
        later(() => {
          if (phaseRef.current === 'covered') changePhase('revealing')
        }, FALLBACK_MS)
      }, COVER_MS)
    }

    document.addEventListener('click', onClick, { capture: true })
    const pending = timers.current
    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      pending.forEach(clearTimeout)
    }
  }, [router])

  // Pagina appena ricaricata dopo un cambio lingua: è già coperta (vedi RELOAD_SCRIPT).
  // Passiamo a "revealing" e solo dopo, nell'effetto qui sotto, togliamo l'attributo:
  // così il pannello resta sempre coperto fino a quando parte l'uscita
  useEffect(() => {
    if (document.documentElement.getAttribute('data-page-transition') !== 'covered') return
    const timer = window.setTimeout(() => changePhase('revealing'), 150)
    return () => clearTimeout(timer)
  }, [])

  // La nuova pagina è arrivata: un fotogramma per farla disegnare, poi il pannello esce
  useEffect(() => {
    if (phaseRef.current !== 'covered') return
    const frame = requestAnimationFrame(() => changePhase('revealing'))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    if (phase !== 'revealing') return
    document.documentElement.removeAttribute('data-page-transition')
    const timer = window.setTimeout(() => changePhase('idle'), REVEAL_MS)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <div className={styles.panel} data-phase={phase} aria-hidden="true">
      <div className={styles.mark}>
        <Logo className={styles.logo} />
        <span className={styles.dash} />
      </div>
    </div>
  )
}
