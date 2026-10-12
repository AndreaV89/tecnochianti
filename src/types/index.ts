export type ProjectStatus = 'concluso' | 'in-corso'

export interface ProjectDetail {
  label: string
  // Valore vuoto = dato non ancora confermato: la riga non viene mostrata
  value: string
}

export interface Project {
  slug: string
  title: string
  category: string
  // undefined = stato non confermato (il progetto compare tra i conclusi)
  status?: ProjectStatus
  location: string
  intervention: string
  year: string
  // Sottotitolo della scheda (non visibile nella griglia Lavori)
  abstract: string
  paragraphs: string[]
  // Blocco informativo a due colonne della scheda
  details: ProjectDetail[]
  // Nomi file dentro public/progetti/<slug>/
  cover: string
  photos: string[]
  featured?: boolean
}
