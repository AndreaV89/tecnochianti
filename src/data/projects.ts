import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'villa-in-chianti',
    title: 'Villa in Chianti',
    category: 'Residenziale',
    year: 2023,
    imageSrc: 'https://picsum.photos/seed/proj101/1920/1080',
    imageAlt: 'Villa residenziale in Chianti',
    featured: true,
    client: 'Privato',
    surface: '320 m²',
    role: 'Progettazione e direzione lavori',
    description: 'Nuova costruzione residenziale immersa nel paesaggio viticolo del Chianti. Il progetto interpreta il rapporto tra edificio e territorio attraverso volumi semplici, materiali locali e ampie aperture verso il paesaggio.',
    gallery: [
      { src: 'https://picsum.photos/seed/proj101g1/1200/800', alt: 'Vista esterna villa' },
      { src: 'https://picsum.photos/seed/proj101g2/1200/800', alt: 'Interno soggiorno' },
      { src: 'https://picsum.photos/seed/proj101g3/1200/800', alt: 'Dettaglio facciata' },
    ],
  },
  {
    id: 'albergo-diffuso',
    title: 'Albergo Diffuso',
    category: 'Ricettiva',
    year: 2022,
    imageSrc: 'https://picsum.photos/seed/proj202/1920/1080',
    imageAlt: 'Progetto albergo diffuso in Toscana',
    featured: true,
    client: 'Società immobiliare',
    surface: '1.200 m²',
    role: 'Progettazione architettonica e strutturale',
    description: 'Recupero e riqualificazione di un nucleo rurale per destinazione ricettiva diffusa. Cinque unità abitative indipendenti connesse da percorsi paesaggistici, con spazi comuni integrati nel costruito esistente.',
    gallery: [
      { src: 'https://picsum.photos/seed/proj202g1/1200/800', alt: 'Veduta del complesso' },
      { src: 'https://picsum.photos/seed/proj202g2/1200/800', alt: 'Corte interna' },
    ],
  },
  {
    id: 'ex-frantoio',
    title: 'Ex Frantoio',
    category: 'Recupero',
    year: 2021,
    imageSrc: 'https://picsum.photos/seed/proj303/1920/1080',
    imageAlt: 'Recupero di un ex frantoio',
    featured: true,
    client: 'Privato',
    surface: '480 m²',
    role: 'Progettazione, DL e pratiche edilizie',
    description: 'Recupero funzionale di un ex frantoio ottocentesco per destinazione residenziale. L\'intervento conserva la struttura muraria originale e gli elementi caratteristici dell\'edificio industriale, integrando impianti contemporanei nel rispetto della preesistenza.',
    gallery: [
      { src: 'https://picsum.photos/seed/proj303g1/1200/800', alt: 'Esterno ex frantoio' },
      { src: 'https://picsum.photos/seed/proj303g2/1200/800', alt: 'Spazio interno recuperato' },
      { src: 'https://picsum.photos/seed/proj303g3/1200/800', alt: 'Dettaglio struttura' },
    ],
  },
  {
    id: 'casa-colombaia',
    title: 'Casa Colombaia',
    category: 'Residenziale',
    year: 2020,
    imageSrc: 'https://picsum.photos/seed/proj404/1920/1080',
    imageAlt: 'Ristrutturazione casa colombaia',
    client: 'Privato',
    surface: '210 m²',
    role: 'Ristrutturazione e direzione lavori',
    description: 'Ristrutturazione integrale di una colombaia storica convertita in abitazione unifamiliare. Recupero dei caratteri tipologici originali con inserimento di nuovi sistemi impiantistici ad alta efficienza.',
    gallery: [
      { src: 'https://picsum.photos/seed/proj404g1/1200/800', alt: 'Vista colombaia restaurata' },
    ],
  },
  {
    id: 'piano-attuativo-radda',
    title: 'Piano Attuativo Radda',
    category: 'Urbanistica',
    year: 2019,
    imageSrc: 'https://picsum.photos/seed/proj505/1920/1080',
    imageAlt: 'Piano attuativo Radda in Chianti',
    client: 'Comune di Radda in Chianti',
    surface: '—',
    role: 'Progettazione urbanistica',
    description: 'Redazione del piano attuativo per l\'espansione residenziale di un comparto nel comune di Radda in Chianti. Il piano definisce lotti, viabilità, standard urbanistici e norme morfologiche per i nuovi interventi.',
  },
  {
    id: 'hotel-borgo',
    title: 'Hotel Borgo',
    category: 'Ricettiva',
    year: 2024,
    imageSrc: 'https://picsum.photos/seed/proj606/1920/1080',
    imageAlt: 'Progetto hotel borgo in Toscana',
    inProgress: true,
    client: 'Gruppo alberghiero',
    surface: '2.800 m²',
    role: 'Progettazione e coordinamento',
    description: 'Progetto in corso per la realizzazione di un hotel di charme all\'interno di un borgo storico. L\'intervento prevede il recupero dell\'intero complesso con destinazione ricettiva di alto livello.',
  },
  {
    id: 'lottizzazione-gaiole',
    title: 'Lottizzazione Gaiole',
    category: 'Urbanistica',
    year: 2024,
    imageSrc: 'https://picsum.photos/seed/proj707/1920/1080',
    imageAlt: 'Lottizzazione a Gaiole in Chianti',
    inProgress: true,
    client: 'Privato',
    surface: '—',
    role: 'Progettazione urbanistica e pratiche',
    description: 'Piano di lottizzazione residenziale a Gaiole in Chianti. Iter in corso per approvazione comunale.',
  },
]

export const featuredProjects = projects.filter(p => p.featured)

// Foto della hero in Home (dissolvenza in sequenza).
// Per cambiarle modificare il nome file: vedi /anteprima-foto
export const heroPhotos: Array<{ slug: string; file: string }> = [
  { slug: 'beretuzzo', file: '01.webp' },
  { slug: 'palazzo-al-bosco', file: '01.webp' },
  { slug: 'complesso-gaiole', file: '01.webp' },
  { slug: 'cantina-le-prata', file: '01.webp' },
]

export const heroSlides = heroPhotos.map(photo => ({
  src: `/progetti/${photo.slug}/${photo.file}`,
  alt: '',
}))
