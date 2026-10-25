import type { Project } from '@/types'

// Testi forniti dal cliente (PDF "Didascalie sito ok"). I grassetti si scrivono tra **...**
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
      "Un annesso agricolo trasformato in abitazione ad alta efficienza energetica",
    paragraphs: [
      "L'intervento ha avuto come obiettivo il recupero della volumetria esistente e la sua trasformazione in abitazione, nel **rispetto delle caratteristiche architettoniche** del fabbricato e del contesto edilizio e paesaggistico circostante.",
      "Il progetto coniuga il rispetto della **tradizione costruttiva** del luogo con l'impiego di **tecnologie contemporanee**, perseguendo elevati standard di sicurezza sismica ed efficienza energetica. Per questo, si è reso necessario un intervento strutturale significativo, mediante la realizzazione di una nuova struttura portante in **pannelli di legno X-LAM**, adeguatamente coibentata e rivestita esternamente in pietra faccia a vista, per preservare l'identità architettonica dell'edificio.",
      "Concepita come casa ad **alta efficienza energetica**, l'abitazione richiede un fabbisogno energetico minimo, soddisfatto da un sistema a pompa di calore abbinato a terminali ventilconvettori (fan coil). Tutti gli usi energetici sono alimentati esclusivamente da energia elettrica, **senza ricorso a combustibili fossili**.",
      "Un sistema di **ventilazione meccanica controllata** (VMC) garantisce infine il ricambio continuo dell'aria e contribuisce al mantenimento di un'elevata qualità dell'aria interna, assicurando elevate condizioni di comfort e benessere abitativo.",
    ],
    cover: '11.webp',
    photos: [
      '11.webp', '13.webp', '12.webp', '14.webp', '01.webp', '15.webp', '03.webp', '06.webp',
      '07.webp', '08.webp', '04.webp', '05.webp',
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
      "Il restauro del complesso immobiliare e la sistemazione degli spazi esterni",
    paragraphs: [
      "Il complesso di Palazzo al Bosco si trova nel Comune di San Casciano in Val di Pesa, sulla sommità di una collina che separa le valli dei torrenti Pesa e Greve, in posizione dominante sull'abitato di Chiesanuova.",
      "Il progetto ha riguardato il restauro della Villa, della casa colonica e della foresteria, così come dei giardini circostanti e della piscina esistente.",
      "Per la **Villa** l'intervento è consistito in un **attento restauro** degli ambienti interni con minimi interventi edilizi consistiti in parziali cambi delle pavimentazioni, rifacimento dei servizi igienici e alcune modifiche ai collegamenti interni tra i vari locali. Fondamentale è stato l'approccio all'adeguamento degli impianti tecnologici con la sostituzione dei vecchi radiatori con un sistema a fan coil e l'integrazione del riscaldamento a pavimento per gli ambienti principali. I grandi saloni e camere affrescate hanno visto uno studio meticoloso dell'esistente per restaurare gli antichi decori ed eliminare le porzioni recenti di valore storico nullo.",
      "L'ex tinaia, ubicata nell'ala ovest della Villa e connessa ad essa da un passaggio interno che passa attraverso la cantina ora adibita a sala degustazione, è stata riqualificata e trasformata in una **galleria d'arte** che si sviluppa su due livelli collegati da una rampa alla quale è stato aggiunto un ascensore in ferro e vetro. Anche in questo caso l'approccio progettuale è stato quello di rispettare il più possibile l'architettura esistente con l'inserimento di impianti di condizionamento a fan coil a cui si è aggiunto un intervento di coibentazione sulla copertura e la sostituzione degli infissi con vetrate ad alta efficienza energetica.",
      "L'ala opposta della villa che ospitava la **limonaia** è stata trasformata in un locale ad uso relax, mentre al piano superiore è stato recuperato e ristrutturato un piccolo appartamento per gli ospiti.",
      "Anche per la **Colonica** e la **Foresteria**, pur trattandosi di fabbricati di minore rilevanza storica, l'approccio progettuale ha mirato a consolidare alcune parti strutturali e ad adeguare gli impianti tecnologici, mantenendo invece inalterati i prospetti e la tipologia distributiva interna.",
      "Infine tutto il giardino esterno è stato oggetto di un complessivo lavoro di riqualificazione degli spazi pavimentati e delle parti a verde.",
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
      "Il restauro del complesso immobiliare e la sistemazione degli spazi esterni",
    paragraphs: [
      "Il complesso immobiliare si compone della Villa, di un fabbricato che ospitava le cantine e gli ambienti di servizio, di un fabbricato secondario, di un annesso agricolo e di una cappellina privata. Completano la proprietà una piscina e i terreni circostanti costituiti da vigneti, oliveti e zone boscate.",
      "Sulla **Villa** e sul suo giardino insiste un vincolo monumentale da parte del Ministero dei beni e delle attività culturali e del turismo, per cui il progetto ha richiesto l'**approvazione da parte della Soprintendenza**. Dopo una prima fase di **consolidamento** delle strutture del tetto e delle fondazioni perimetrali attraverso l'uso della tecnologia a micropali, l'attenzione si è spostata agli ambienti interni dove anche buona parte dei solai intermedi hanno richiesto un intervento per ripristinarne la sicurezza statica attraverso l'inserimento di travi metalliche a rinforzo di quelle in legno. Gli antichi pavimenti sono stati smontati e rimontati e sostituiti con altrettanti fatti a mano e della stessa tipologia solo laddove sono più recenti o di minore pregio. Il restauro interno dei vari locali della villa viene portato avanti in un'ottica di conservazione e introducendo il giusto grado di innovazione necessario a migliorare la fruibilità di tutti gli ambienti. L'attuale uso turistico ricettivo viene così migliorato con il rinnovamento delle camere, dei bagni e soprattutto degli spazi comuni ai vari piani che garantiranno comfort abitativo per gli ospiti nel rispetto delle caratteristiche storiche della villa.",
      "Il **fabbricato secondario** viene ristrutturato mantenendo inalterato l'uso turistico con il rinnovamento delle camere e degli spazi comuni.",
      "La **piscina** esistente è stata demolita ed è in corso di sostituzione con una di dimensioni maggiori e con bordo a sfioro sul lungo lato a valle, con una generale **riqualificazione dei giardini** e delle aree a verde.",
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
    abstract:
      "Una cantina interrata che scompare sotto un tetto giardino",
    paragraphs: [
      "L'area di intervento si inserisce nello straordinario contesto viticolo-collinare di Montalcino, nel cuore della Val d'Orcia.",
      "Il progetto rinnova e amplia il centro aziendale per adeguarlo alla produzione, trasformazione e commercializzazione vinicola.",
      "L'elemento cardine che ha guidato la progettazione è stata la **tutela del paesaggio** attuata attraverso la riduzione dei movimenti di terra, la salvaguardia della vegetazione esistente e la valorizzazione del dialogo tra lo spazio antropico e l'ambiente naturale.",
      "La cantina si inserisce nel declivio naturale e segue l'andamento del terreno, facendo sì che la struttura sia **nascosta sotto al tetto giardino** che ne costituisce il sistema di rivestimento ad eccezione che per il fronte di ingresso rivestito interamente in pietra e – limitatamente alla zona centrale – in lastre di acciaio corten e scandito dalle aperture che danno accesso ai locali interni.",
      "Internamente la scansione degli ambienti segue il processo produttivo delle uve dall'arrivo, dai tini in cemento e acciaio della vinificazione, alla barrique di maturazione e affinamento del vino, alla zona di imbottigliamento al magazzino di stoccaggio, ai locali di servizio per il personale fino alla zona di degustazione e vendita diretta.",
    ],
    cover: '02.webp',
    photos: [
      '01.webp', '02.webp', '03.webp', '04.webp', '05.webp', '06.webp', '07.webp',
    ],
  },
  {
    slug: 'appartamento-radda',
    title: 'Appartamento a Radda',
    location: 'Radda in Chianti',
    year: '2026',
    status: 'in-corso',
    intervention: 'Ristrutturazione',
    category: 'Residenziale',
    abstract:
      "Il progetto di ristrutturazione di un appartamento per renderlo più funzionale e contemporaneo",
    paragraphs: [
      "Situato in zona periferica rispetto al centro di Radda in Chianti, questo progetto di ristrutturazione interna **ridefinisce l'identità dell'appartamento** in chiave contemporanea, superando la tradizionale compartimentazione degli spazi.",
      "Al piano terra, la zona giorno si apre in un unico e luminoso ambiente living con zona pranzo e un pratico angolo lavanderia nascosto. Al piano superiore, la zona notte accoglie la camera matrimoniale – dotata di un letto singolo a scomparsa nascosto da un elegante divisorio a listelli in legno per garantire la giusta privacy –, il bagno e un funzionale ripostiglio. Un intervento che **coniuga estetica moderna** e **ottimizzazione degli spazi**.",
    ],
    cover: '04.webp',
    photos: [
      '01.webp', '02.webp', '03.webp', '04.webp', '05.webp', '06.webp',
    ],
  },
  {
    slug: 'complesso-radda',
    title: 'Complesso immobiliare a Radda in Chianti',
    location: 'Radda in Chianti',
    year: '',
    status: 'in-corso',
    intervention: '',
    category: 'Residenziale',
    // Scheda non ancora pronta: compare solo la card, senza link
    abstract: '',
    paragraphs: [],
    cover: '01.webp',
    photos: [],
    comingSoon: true,
  },
]

// Foto della hero in Home (dissolvenza in sequenza).
export const heroPhotos: Array<{ slug: string; file: string }> = [
  // Render della Cantina Le Prata (Materiali/Home), sempre per primo
  { slug: 'home', file: '01.webp' },
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
