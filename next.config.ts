import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // Pagina 404 unica per tutto il sito (app/global-not-found.tsx): serve perché
    // ci sono due root layout, uno per l'italiano e uno per l'inglese
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      new URL('https://picsum.photos/**'),
    ],
  },
}

export default nextConfig
