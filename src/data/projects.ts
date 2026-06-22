import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'villa-in-chianti',
    title: 'Villa in Chianti',
    category: 'Residenziale',
    year: 2023,
    imageSrc: 'https://picsum.photos/seed/proj101/800/1067',
    imageAlt: 'Villa residenziale in Chianti',
    featured: true,
  },
  {
    id: 'albergo-diffuso',
    title: 'Albergo Diffuso',
    category: 'Ricettiva',
    year: 2022,
    imageSrc: 'https://picsum.photos/seed/proj202/800/1067',
    imageAlt: 'Progetto albergo diffuso in Toscana',
    featured: true,
  },
  {
    id: 'ex-frantoio',
    title: 'Ex Frantoio',
    category: 'Recupero',
    year: 2021,
    imageSrc: 'https://picsum.photos/seed/proj303/800/1067',
    imageAlt: 'Recupero di un ex frantoio',
    featured: true,
  },
  {
    id: 'casa-colombaia',
    title: 'Casa Colombaia',
    category: 'Residenziale',
    year: 2020,
    imageSrc: 'https://picsum.photos/seed/proj404/800/1067',
    imageAlt: 'Ristrutturazione casa colombaia',
  },
  {
    id: 'piano-attuativo-radda',
    title: 'Piano Attuativo Radda',
    category: 'Urbanistica',
    year: 2019,
    imageSrc: 'https://picsum.photos/seed/proj505/800/1067',
    imageAlt: 'Piano attuativo Radda in Chianti',
  },
  {
    id: 'hotel-borgo',
    title: 'Hotel Borgo',
    category: 'Ricettiva',
    year: 2024,
    imageSrc: 'https://picsum.photos/seed/proj606/800/1067',
    imageAlt: 'Progetto hotel borgo in Toscana',
    inProgress: true,
  },
  {
    id: 'lottizzazione-gaiole',
    title: 'Lottizzazione Gaiole',
    category: 'Urbanistica',
    year: 2024,
    imageSrc: 'https://picsum.photos/seed/proj707/800/1067',
    imageAlt: 'Lottizzazione a Gaiole in Chianti',
    inProgress: true,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
