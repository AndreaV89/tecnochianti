import type { Project } from '@/types'

// Testi da tecnochianti-contenuti-progetti.md.
// Dati della scheda: luogo, anno, stato, tipologia di intervento, categoria (confermati dal cliente).
// L'ordine nella pagina Lavori è per anno, dal più recente: l'ordine qui sotto non conta.
// Copertina, foto e hero: si cambiano modificando il nome file (vedi /anteprima-foto).
// L'ordine di `photos` è l'ordine della galleria; le foto escluse restano in public/ ma non compaiono.

export const projects: Project[] = [
  {
    slug: 'beretuzzo',
    title: 'Beretuzzo',
    location: 'Radda in Chianti',
    year: '2021',
    status: 'concluso',
    intervention: 'Demolizione e ricostruzione',
    category: 'Residenziale',
    abstract:
      "Un antico annesso agricolo in pietra trasformato in abitazione ad alta efficienza energetica, senza alterarne l'aspetto.",
    paragraphs: [
      'Il fabbricato, a circa un chilometro e mezzo dal centro storico di Radda in Chianti, fa parte di un nucleo edilizio di antica origine. Nato come magazzino a doppia altezza, ha pianta pressoché rettangolare, muratura portante in pietra a faccia vista e copertura tradizionale in legno, coppi e tegole.',
      "Le analisi strutturali e geologiche hanno reso necessaria una ristrutturazione complessiva. L'obiettivo è stato recuperare l'annesso come abitazione mantenendone forma e aspetto: all'interno della muratura in pietra è stata realizzata una nuova struttura portante in legno lamellare XLAM, con isolamenti ad alte prestazioni e impianti alloggiati in micro cavedi.",
      'La casa è progettata per un fabbisogno energetico minimo: pompa di calore con fan coil, ventilazione meccanica controllata e impianto fotovoltaico con accumulo, senza fonti fossili. Pavimenti in cotto fatto a mano, infissi in legno e alluminio a triplo vetro e un manto di copertura in parte recuperato dalla demolizione legano le soluzioni tecniche alla tradizione costruttiva del luogo.',
    ],
    cover: '11.webp',
    photos: [
      '11.webp', '13.webp', '12.webp', '14.webp', '15.webp', '01.webp', '16.webp', '03.webp',
      '06.webp', '07.webp', '08.webp', '04.webp', '05.webp',
    ],
    featured: true,
  },
  {
    slug: 'palazzo-al-bosco',
    title: 'Palazzo al Bosco',
    location: 'San Casciano in Val di Pesa',
    year: '2021',
    status: 'concluso',
    intervention: 'Restauro',
    category: 'Residenziale',
    abstract:
      'Il restauro di una villa storica rimasta invariata dal 1830, tra recupero dei decori e adeguamento degli impianti.',
    paragraphs: [
      "La villa domina l'abitato di Chiesanuova dalla sommità di una collina tra le valli della Pesa e della Greve, circondata da oliveti e boschi di lecci e pini marittimi. Il corpo principale, lungo circa 37 metri e profondo meno di 11, riprende l'impianto dei palazzi urbani; due ali laterali gli danno la forma a ferro di cavallo, rimasta invariata dal Catasto del 1830.",
      "Il restauro ha interessato la villa, la casa colonica, la foresteria, i giardini e la piscina. Nella villa gli interventi edilizi sono stati minimi: il lavoro si è concentrato sull'adeguamento degli impianti, con fan coil e riscaldamento a pavimento, e sul recupero dei decori nei saloni e nelle camere affrescate.",
      "L'ex tinaia è diventata una galleria d'arte, collegata alla villa attraverso la cantina, oggi sala degustazione, e dotata di un piccolo ascensore in ferro e vetro. La limonaia ospita ora un ambiente relax, con un appartamento per gli ospiti al piano superiore. Colonica e foresteria sono state consolidate e aggiornate negli impianti senza alterarne facciate e distribuzione; il giardino è stato interamente riqualificato.",
    ],
    cover: '06.webp',
    photos: [
      '05.webp', '04.webp', '06.webp', '07.webp', '01.webp', '02.webp', '03.webp', '08.webp',
    ],
    featured: true,
  },
  {
    slug: 'complesso-gaiole',
    title: 'Complesso immobiliare a Gaiole in Chianti',
    location: 'Gaiole in Chianti',
    year: '2025',
    status: 'in-corso',
    intervention: 'Restauro',
    category: 'Residenziale',
    abstract:
      'Il restauro di una villa sottoposta a vincolo monumentale, tra consolidamento strutturale e rinnovo dell\'accoglienza turistica.',
    paragraphs: [
      'Il complesso, nel comune di Gaiole in Chianti, comprende la villa con giardino, le ex cantine, un fabbricato secondario, un piccolo annesso agricolo e una cappella raggiunta da un viale di cipressi, tra vigneti, oliveti e bosco. Villa e giardino sono sottoposti a vincolo monumentale dal 2009: ogni intervento è condotto in accordo con la Soprintendenza.',
      "Dopo il consolidamento della copertura e delle fondazioni perimetrali con micropali, il lavoro si è concentrato sui solai interni. I pavimenti vengono smontati, le travi in legno rinforzate dall'alto con profili metallici e una soletta collaborante, quindi il pavimento originale viene ricollocato; dove non è di pregio, è sostituito con cotto fatto a mano dello stesso tipo.",
      "Il restauro degli interni unisce conservazione e il giusto grado di innovazione, migliorando l'uso turistico ricettivo con camere, bagni e spazi comuni rinnovati. Completano l'intervento la ristrutturazione del fabbricato secondario e dell'ex annesso, una nuova piscina a sfioro e la revisione dei giardini.",
    ],
    cover: '07.webp',
    photos: [
      '07.webp', '09.webp', '03.webp', '06.webp', '04.webp', '05.webp', '10.webp', '08.webp',
      '02.webp',
    ],
    featured: true,
  },
  {
    slug: 'cantina-le-prata',
    title: 'Cantina Le Prata',
    location: 'Montalcino',
    year: '2024',
    status: 'in-corso',
    intervention: 'Nuova costruzione',
    category: 'Cantina aziendale',
    abstract: 'Una cantina interrata che segue il declivio della collina e scompare sotto un tetto giardino.',
    paragraphs: [
      'Il progetto rinnova e amplia il centro aziendale per adeguarlo alla produzione, trasformazione e commercializzazione del vino. Il principio guida è la tutela del paesaggio: limitare i movimenti di terra, preservare la vegetazione esistente e mantenere gli assetti colturali tra vigneto, viale alberato e bosco.',
      "La cantina si inserisce nel declivio naturale e ne segue la pendenza, collocata interamente entro terra sotto un tetto giardino che la sottrae alla vista dall'alto. Una fascia vegetale perimetrale accompagna la transizione verso il bosco e fa da filtro tra costruito e paesaggio naturale.",
      "L'unica parte fuori terra è la facciata a nord-ovest, un muro in pietra a faccia vista con una rientranza in corten che segna l'ingresso. All'interno, su un unico livello alto quattro metri, gli ambienti seguono il processo produttivo: vinificazione in tini di cemento e acciaio, imbottigliamento, stoccaggio, servizi e locali tecnici.",
    ],
    cover: '06.webp',
    photos: [
      '06.webp', '03.webp', '05.webp', '07.webp', '02.webp',
    ],
  },
]

// Foto della hero in Home (dissolvenza in sequenza).
export const heroPhotos: Array<{ slug: string; file: string }> = [
  { slug: 'palazzo-al-bosco', file: '05.webp' },
  { slug: 'beretuzzo', file: '11.webp' },
  { slug: 'palazzo-al-bosco', file: '07.webp' },
  { slug: 'beretuzzo', file: '12.webp' },
]

export function photoSrc(slug: string, file: string): string {
  return `/progetti/${slug}/${file}`
}

export const heroSlides = heroPhotos.map(photo => ({
  src: photoSrc(photo.slug, photo.file),
  alt: '',
}))

export const featuredProjects = projects.filter(p => p.featured)
