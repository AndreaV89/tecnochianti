'use client'

import { openConsentBanner } from '@/lib/consent'

interface Props {
  className?: string
  label: string
}

// Riapre il banner cookie (usato nel footer, che è un componente server)
export default function CookiePreferencesButton({ className, label }: Props) {
  return (
    <button type="button" className={className} onClick={openConsentBanner}>
      {label}
    </button>
  )
}
