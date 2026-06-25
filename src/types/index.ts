export interface Project {
  id: string
  title: string
  category: string
  year: number
  imageSrc: string
  imageAlt: string
  inProgress?: boolean
  featured?: boolean
  // campi scheda dettaglio
  client?: string
  surface?: string
  role?: string
  description?: string
  gallery?: Array<{ src: string; alt: string }>
}
