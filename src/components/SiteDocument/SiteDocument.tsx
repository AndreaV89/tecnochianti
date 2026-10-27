import type { ReactNode } from 'react'
import { Fraunces, Work_Sans } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent/CookieConsent'
import type { Locale } from '@/i18n/routes'
import '@/app/globals.css'

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

interface Props {
  locale: Locale
  children: ReactNode
}

// <html> e <body> comuni ai due root layout, app/(it)/layout.tsx e app/en/layout.tsx.
// Due root layout separati servono ad avere <html lang="it"> o <html lang="en"> già nell'HTML statico.
export default function SiteDocument({ locale, children }: Props) {
  return (
    <html lang={locale} className={`${fraunces.variable} ${workSans.variable}`}>
      <body>
        {children}
        <CookieConsent locale={locale} />
      </body>
    </html>
  )
}
