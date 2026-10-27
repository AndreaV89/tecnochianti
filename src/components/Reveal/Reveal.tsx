'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Reveal.module.css'

interface Props {
  children: ReactNode
  className?: string
  // Ritardo in millisecondi, per far comparire più blocchi uno dopo l'altro
  delay?: number
}

// Fa comparire il contenuto (dissolvenza + salita) quando entra nello schermo.
// Il contenuto è nascosto dal CSS solo se JavaScript è attivo e l'utente non ha chiesto
// di ridurre le animazioni (vedi Reveal.module.css): negli altri casi resta sempre visibile.
// Lo stato è anche nell'attributo data-revealed, per animare elementi interni dal CSS di chi lo usa.
export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      // Parte quando il blocco è entrato di almeno il 10% dell'altezza dello schermo
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${className ?? ''}`}
      data-revealed={revealed}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
