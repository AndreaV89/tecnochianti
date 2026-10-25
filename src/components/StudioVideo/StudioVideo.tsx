'use client'

import { useEffect, useRef } from 'react'
import styles from './StudioVideo.module.css'

interface Props {
  src: string
  poster: string
}

// Video decorativo senza audio, in loop e senza controlli.
// Non usa l'attributo autoPlay: parte da JavaScript solo se l'utente non ha chiesto
// di ridurre le animazioni (in quel caso resta visibile il poster).
export default function StudioVideo({ src, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // React non sempre scrive l'attributo muted nell'HTML: lo impostiamo qui,
    // altrimenti il browser blocca l'avvio automatico
    video.muted = true
    // play() fallisce se il browser blocca comunque l'avvio (es. risparmio energetico):
    // in quel caso resta il poster, nessun errore da mostrare
    video.play().catch(() => {})
  }, [])

  return (
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
  )
}
