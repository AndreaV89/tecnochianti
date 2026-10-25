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
  featured?: boolean
  // Lavoro senza scheda di dettaglio: card non cliccabile, in hover "Dettagli a breve"
  comingSoon?: boolean
}
