export type ProjectStatus = 'concluso' | 'in-corso'

export interface Project {
  slug: string
  title: string
  // Blocco dati della scheda: solo questi cinque campi, in quest'ordine
  // Luogo · Anno · Stato · Tipologia di intervento · Categoria
  location: string
  year: string
  status: ProjectStatus
  intervention: string
  category: string
  // Sottotitolo della scheda (non visibile nella griglia Lavori)
  abstract: string
  paragraphs: string[]
  // Nomi file dentro public/progetti/<slug>/
  cover: string
  photos: string[]
  // Descrizione di ogni foto per l'attributo alt (chi usa lettori di schermo, motori di ricerca).
  // Chiave = nome file; se manca si usa il titolo del progetto
  photoAlts: Record<string, string>
  // Testi in inglese. Luogo, anno, stato e foto sono gli stessi
  en: ProjectTranslation
  featured?: boolean
  // Lavoro senza scheda di dettaglio: card non cliccabile, in hover "Dettagli a breve"
  comingSoon?: boolean
}

// Testi di un progetto in un'altra lingua
export interface ProjectTranslation {
  // Solo se il titolo cambia rispetto all'italiano
  title?: string
  intervention: string
  category: string
  abstract: string
  paragraphs: string[]
  photoAlts: Record<string, string>
}
