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
    photoAlts: {
      '01.webp': "Il fabbricato agricolo in pietra prima dell'intervento, visto dall'alto",
      '03.webp': "Copertura in legno con telo traspirante durante il cantiere",
      '04.webp': "Interno con pareti e solaio in pannelli di legno X-LAM durante il cantiere",
      '05.webp': "Ambiente interno in legno X-LAM con finestre sul paesaggio",
      '06.webp': "Struttura in X-LAM con membrana protettiva e primo rivestimento in pietra",
      '07.webp': "Posa del rivestimento in pietra faccia a vista accanto a una porta finestra",
      '08.webp': "Il fabbricato tra i ponteggi durante la posa del rivestimento in pietra",
      '11.webp': "L'abitazione in pietra con il giardino e il terrazzo pavimentato",
      '12.webp': "Terrazzo pavimentato con pergola in ferro e vista sulle colline",
      '13.webp': "L'abitazione con la pergola e il terrazzo esterno",
      '14.webp': "Soggiorno con cucina a vista e solaio in legno chiaro",
      '15.webp': "Il cantiere visto dall'alto, con la nuova copertura in posa",
    },
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
    photoAlts: {
      '01.webp': "Sala affrescata della Villa con pavimento in cotto",
      '02.webp': "Sala degustazione nella cantina con volta in mattoni",
      '03.webp': "Ambiente restaurato con arco e grandi vetrate sul giardino",
      '04.webp': "Il complesso di Palazzo al Bosco visto dall'alto, tra giardini e colline",
      '05.webp': "La Villa e gli edifici del complesso visti dall'alto, con il viale di cipressi",
      '06.webp': "La piscina nel giardino della Villa",
      '07.webp': "Salone affrescato della Villa con porta finestra ad arco",
      '08.webp': "Scalone con balaustra visto dall'alto",
    },
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
    photoAlts: {
      '02.webp': "Soffitto con travi in legno a padiglione e piccola finestra",
      '03.webp': "Rifacimento della copertura con nuovi pannelli isolanti",
      '04.webp': "Stanza con pavimento in cotto durante il restauro",
      '05.webp': "Muratura in pietra e nuove aperture durante il cantiere",
      '06.webp': "Ambiente in pietra con travi metalliche di rinforzo del solaio",
      '07.webp': "Nuova orditura in legno della copertura tra i cipressi",
      '08.webp': "Fabbricato in pietra durante il restauro",
      '09.webp': "Copertura della Villa in rifacimento, con le statue del tetto sullo sfondo",
      '10.webp': "Scala in pietra in corso di restauro tra i ponteggi",
    },
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
    photoAlts: {
      '01.webp': "Render della cantina vista dall'alto, con il tetto giardino tra vigneti e cipressi",
      '02.webp': "Render del fronte d'ingresso in pietra della cantina",
      '03.webp': "Render della cantina inserita nel declivio e coperta dal tetto giardino",
      '04.webp': "Render della barricaia e della zona degustazione",
      '05.webp': "Render della sala di vinificazione illuminata da un lucernario",
      '06.webp': "La tenuta vista dall'alto, tra vigneti e boschi",
      '07.webp': "Il cantiere della cantina visto dall'alto",
    },
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
    photoAlts: {
      '01.webp': "Camera con divisorio a listelli in legno",
      '02.webp': "Cucina con isola e sgabelli",
      '03.webp': "Bagno con doccia in vetro e mobile lavabo blu",
      '04.webp': "Soggiorno con divano e zona pranzo, con la cucina sullo sfondo",
      '05.webp': "Zona pranzo e soggiorno con mensole a parete",
      '06.webp': "Camera matrimoniale con carta da parati decorata",
    },
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
    photoAlts: {
      '01.webp': "Il complesso immobiliare visto dall'alto, tra boschi e vigneti",
    },
    comingSoon: true,
  },
]

// Foto della hero in Home (dissolvenza in sequenza).
// L'alt si prende dalla scheda del progetto; la foto di 'home' non ha scheda e lo indica qui.
export const heroPhotos: Array<{ slug: string; file: string; alt?: string }> = [
  // Render della Cantina Le Prata (Materiali/Home), sempre per primo
  { slug: 'home', file: '01.webp', alt: "Render della Cantina Le Prata vista dall'alto, tra vigneti e cipressi" },
  { slug: 'palazzo-al-bosco', file: '05.webp' },
  { slug: 'beretuzzo', file: '11.webp' },
  { slug: 'palazzo-al-bosco', file: '07.webp' },
  { slug: 'beretuzzo', file: '12.webp' },
]

export function photoSrc(slug: string, file: string): string {
  return `/progetti/${slug}/${file}`
}

export function photoAlt(project: Project, file: string): string {
  return project.photoAlts[file] ?? project.title
}

export const heroSlides = heroPhotos.map(photo => {
  const project = projects.find(p => p.slug === photo.slug)
  return {
    src: photoSrc(photo.slug, photo.file),
    alt: photo.alt ?? (project ? photoAlt(project, photo.file) : ''),
  }
})

export const featuredProjects = projects.filter(p => p.featured)
