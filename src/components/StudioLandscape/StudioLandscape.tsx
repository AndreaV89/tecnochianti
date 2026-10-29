'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { RIDGES } from './ridges'
import styles from './StudioLandscape.module.css'

interface Props {
  src: string
  poster: string
  label: string
  // Contenuto che scorre sopra il paesaggio (la presentazione dello studio)
  children: ReactNode
}

// Fasi dell'animazione: ogni elemento del disegno si anima mentre l'avanzamento dello scroll
// (da 0 a 1) va da `from` a `to`. I numeri stanno negli attributi data-*, letti da update()
function phase(from: number, to: number) {
  return { 'data-from': from, 'data-to': to }
}

// Ritardo con cui ogni crinale inizia a disegnarsi, dal più lontano al più vicino
const RIDGE_PHASES: [number, number][] = [[0.08, 0.45], [0.15, 0.5], [0.12, 0.5], [0.2, 0.55]]

// Video del territorio che, scorrendo, diventa un disegno di progetto: il video sfuma nel primo
// fotogramma (in bianco e nero), la foto sbiadisce verso il colore carta e i crinali delle
// colline si disegnano come linee; poi le linee restano tenui sullo sfondo sotto i testi.
// Le linee sono tracciate sul primo fotogramma (vedi ridges.ts). Il JavaScript scrive --p (usato dal
// CSS per video e velo) e imposta direttamente tratto e opacità del disegno: Safari non ridisegna
// in modo affidabile le linee SVG se il valore arriva da un calcolo CSS.
// Senza JavaScript o con "riduci movimento" resta il video come prima.
export default function StudioLandscape({ src, poster, label, children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const video = videoRef.current
    const svg = svgRef.current
    if (!root || !video || !svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // React non sempre scrive l'attributo muted nell'HTML: senza, il browser blocca l'avvio automatico
    video.muted = true
    let playing = false
    const parts = Array.from(svg.querySelectorAll<SVGElement>('[data-from]'))

    // Spessore delle linee costante sullo schermo: il disegno è ingrandito come il video (cover),
    // quindi 1 px dello schermo vale 1/scala unità del disegno
    const setStrokeUnit = () => {
      const scale = Math.max(svg.clientWidth / 1920, svg.clientHeight / 1080) || 1
      svg.style.setProperty('--unit', (1 / scale).toFixed(4))
    }

    let frame = 0
    const update = () => {
      frame = 0
      // L'effetto si completa scorrendo per il 90% dell'altezza dello schermo
      const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.9), 0), 1)
      root.style.setProperty('--p', progress.toFixed(4))
      for (const part of parts) {
        const from = Number(part.dataset.from)
        const to = Number(part.dataset.to)
        const t = Math.min(Math.max((progress - from) / (to - from), 0), 1)
        // Linee: tratto lungo 1 (pathLength) che scorre da nascosto (1) a disegnato (0)
        if (part.tagName === 'path') part.style.strokeDashoffset = String(1 - t)
        else part.style.opacity = String(t)
      }

      // Quando il video è coperto lo mettiamo in pausa, per non consumare batteria.
      // play() fallisce se il browser blocca l'avvio: resta il poster, nessun errore da mostrare
      const shouldPlay = progress < 0.3
      if (shouldPlay && !playing) video.play().catch(() => {})
      if (!shouldPlay && playing) video.pause()
      playing = shouldPlay
    }
    // Un solo calcolo per fotogramma, anche se lo scroll genera molti eventi
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onResize = () => {
      setStrokeUnit()
      onScroll()
    }

    setStrokeUnit()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={rootRef} className={styles.root}>
      <section className={styles.stage} aria-label={label}>
        {/* eslint-disable-next-line @next/next/no-img-element -- stessa immagine del poster, già scaricata dal video */}
        <img className={styles.still} src={poster} alt="" aria-hidden="true" />
        <video
          ref={videoRef}
          className={styles.video}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className={styles.wash} />

        {/* Stessa inquadratura del video (slice = object-fit: cover), così le linee combaciano */}
        <svg
          ref={svgRef}
          className={styles.drawing}
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {RIDGES.map((d, i) => (
            <path key={i} d={d} pathLength={1} className={styles.line} {...phase(...RIDGE_PHASES[i])} />
          ))}

          {/* Elementi "da progetto": linea di terra, quote verticali con le stanghette, riferimenti */}
          <path d="M0 990 L1920 990" pathLength={1} className={styles.line} {...phase(0.35, 0.6)} />
          <path
            d="M1504 489 L1504 990 M500 568 L500 990"
            pathLength={1}
            className={`${styles.line} ${styles.thin}`}
            {...phase(0.45, 0.7)}
          />
          <g className={styles.fade} {...phase(0.5, 0.7)}>
            <path d="M0 489 L1920 489" className={styles.dashed} />
            <path d="M1490 489 L1518 489 M1490 990 L1518 990 M486 568 L514 568 M486 990 L514 990" className={styles.thin} />
          </g>
          <g className={`${styles.fade} ${styles.accent}`} {...phase(0.55, 0.75)}>
            <circle cx="1504" cy="489" r="7" />
            <circle cx="500" cy="568" r="7" />
            <circle cx="1550" cy="564" r="7" />
          </g>
        </svg>
      </section>

      <div className={styles.content}>{children}</div>
    </div>
  )
}
