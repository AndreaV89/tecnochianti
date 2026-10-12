'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroSlideshow.module.css'

export interface HeroSlide {
  src: string
  alt: string
}

interface Props {
  slides: HeroSlide[]
}

const INTERVAL_MS = 6000

export default function HeroSlideshow({ slides }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className={styles.hero} aria-hidden="true" role="presentation">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      <div className={styles.overlay} />
    </div>
  )
}
