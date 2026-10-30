import type { Locale } from '@/i18n/routes'

// Dati legali dei professionisti, mostrati nel footer.
// Il codice fiscale non va pubblicato sul sito.

export interface ProfessionalLegal {
  // Titolo abbreviato, es. 'Arch.'
  title: string
  name: string
  vatNumber: string
  // Iscrizione all'albo / ordine professionale, nelle due lingue
  register: Record<Locale, string>
}

export const professionalsLegal: ProfessionalLegal[] = [
  {
    title: 'Arch.',
    name: 'Vincenzo Bove',
    vatNumber: '04361740659',
    register: { it: 'Ordine degli Architetti di Siena n. 632', en: 'Siena Order of Architects no. 632' },
  },
  {
    title: 'P.I.',
    name: 'Carlo Matassini',
    vatNumber: '01290380524',
    register: { it: 'Albo dei Periti Industriali di Siena n. 381', en: 'Siena Register of Industrial Experts no. 381' },
  },
  {
    title: 'Arch.',
    name: 'Riccardo Panichi',
    vatNumber: '02450690512',
    register: { it: 'Ordine degli Architetti di Arezzo n. 1297', en: 'Arezzo Order of Architects no. 1297' },
  },
]
