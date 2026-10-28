import type { ReactNode } from 'react'
import { Saira, Hanken_Grotesk } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import type { Locale } from '@/i18n/routes'
import '@/app/globals.css'

// Font scelti dal cliente (stile bottega17.com): Saira per titoli e testi display,
// Hanken Grotesk per il corpo testo. Sono alternative gratuite a Klavika e Atlas Grotesk.
const saira = Saira({
  subsets: ['latin'],
  variable: '--font-saira',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  weight: ['400', '600'],
  display: 'swap',
})

interface Props {
  locale: Locale
  children: ReactNode
}

// <html> e <body> comuni ai due root layout, app/(it)/layout.tsx e app/en/layout.tsx.
// Due root layout separati servono ad avere <html lang="it"> o <html lang="en"> già nell'HTML statico.
export default function SiteDocument({ locale, children }: Props) {
  return (
    // data-scroll-behavior: Next disattiva lo scroll fluido durante i cambi pagina,
    // così la nuova pagina compare già in cima invece di scorrere
    <html
      lang={locale}
      className={`${saira.variable} ${hankenGrotesk.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <CookieConsent locale={locale} />
      </body>
    </html>
  )
}
