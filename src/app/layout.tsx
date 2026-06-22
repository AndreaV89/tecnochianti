import type { Metadata } from 'next'
import { Fraunces, Work_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TecnoChianti — Architettura e Ingegneria',
  description:
    'Studio tecnico di architettura e ingegneria a Radda in Chianti, Toscana. Progettazione, direzione lavori, computi metrici, pratiche edilizie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
