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
  featured?: boolean
  // Lavoro senza scheda di dettaglio: card non cliccabile, in hover "Dettagli a breve"
  comingSoon?: boolean
}
