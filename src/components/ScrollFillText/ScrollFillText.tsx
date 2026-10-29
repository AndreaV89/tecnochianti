'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import styles from './ScrollFillText.module.css'

interface Props {
  text: string
  className?: string
}

// Testo che si "riempie" di colore scorrendo la pagina: le parole partono tenui e diventano
// piene una dopo l'altra (ispirato a architetti-template.vercel.app, sezione "Lo studio").
// Il JavaScript scrive in --filled quante parole sono già piene; il CSS calcola l'opacità
// di ogni parola dal suo indice (--i). Senza JavaScript o con "riduci movimento" il testo è pieno.
export default function ScrollFillText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const words = text.split(' ')

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.style.setProperty('--filled', String(words.length))
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      // Inizia quando il paragrafo entra dal basso (85% dello schermo),
      // finisce quando la sua fine arriva a metà schermo
      const start = viewport * 0.85
      const end = viewport * 0.5 - rect.height
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1)
      element.style.setProperty('--filled', (progress * words.length).toFixed(2))
    }
    // Un solo calcolo per fotogramma, anche se lo scroll genera molti eventi
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [words.length])

  return (
    <p ref={ref} className={`${styles.text} ${className ?? ''}`}>
      {words.map((word, i) => (
        <span key={i} className={styles.word} style={{ '--i': i } as CSSProperties}>
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}
