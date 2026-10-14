// Dati legali dei professionisti, mostrati nel footer.
// Il codice fiscale non va pubblicato sul sito.

export interface ProfessionalLegal {
  // Titolo abbreviato, es. 'Arch.'
  title: string
  name: string
  vatNumber: string
  // Iscrizione all'albo / ordine professionale
  register: string
}

export const professionalsLegal: ProfessionalLegal[] = [
  {
    title: 'Arch.',
    name: 'Vincenzo Bove',
    vatNumber: '04361740659',
    register: 'Ordine degli Architetti di Siena n. 632',
  },
  {
    title: 'P.I.',
    name: 'Carlo Matassini',
    vatNumber: '01290380524',
    register: 'Albo dei Periti Industriali di Siena n. 381',
  },
  {
    title: 'Arch.',
    name: 'Riccardo Panichi',
    vatNumber: '02450690512',
    register: 'Ordine degli Architetti di Arezzo n. 1297',
  },
]
