'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroSlideshow.module.css'

const slides = [
  {
    src: 'https://picsum.photos/seed/arch11/1920/1080',
    alt: '',
  },
  {
    src: 'https://picsum.photos/seed/arch22/1920/1080',
    alt: '',
  },
  {
    src: 'https://picsum.photos/seed/arch33/1920/1080',
    alt: '',
  },
]

const INTERVAL_MS = 6000

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

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
