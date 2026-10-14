'use client'

import { openConsentBanner } from '@/lib/consent'

interface Props {
  className?: string
}

// Riapre il banner cookie (usato nel footer, che è un componente server)
export default function CookiePreferencesButton({ className }: Props) {
  return (
    <button type="button" className={className} onClick={openConsentBanner}>
      Preferenze cookie
    </button>
  )
}
