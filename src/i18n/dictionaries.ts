import type { ProjectStatus } from '@/types'
import type { Locale } from './routes'

// Testi dell'interfaccia nelle due lingue.
// I testi dei progetti sono in src/data/projects.ts (campo `en`).
// `en` ha lo stesso tipo di `it`: se manca una traduzione, la build si ferma.

const it = {
  header: {
    navLabel: 'Navigazione principale',
    studio: 'Studio',
    works: 'Lavori',
    contact: 'Contatti',
  },
  footer: {
    navLabel: 'Navigazione footer',
    home: 'Home',
    legalLabel: 'Note legali',
    privacy: 'Privacy',
    cookies: 'Cookie policy',
    cookiePreferences: 'Preferenze cookie',
    credit: 'Sito di Andrea Vannetti',
    vat: 'P.IVA',
  },
  home: {
    metaTitle: 'TecnoChianti — Studio di Architettura',
    metaDescription:
      'Studio di architettura a Radda in Chianti, Toscana. Progettazione integrata, direzione lavori, pratiche edilizie, perizie e stime immobiliari.',
    heroLabel: 'Immagini dei lavori',
    manifestoLabel: 'Manifesto',
    manifesto: ['Diamo forma al futuro', "creando architetture custodi dell'anima dei luoghi"],
    manifestoSub: "Un'architettura che rispetta le proprie origini e guarda al futuro.",
    intro:
      "TecnoChianti è uno studio di architettura con sede a Radda in Chianti. Dal 2013 progettiamo edifici privati e ci occupiamo del recupero e della valorizzazione del patrimonio edilizio esistente, seguendo ogni intervento dal progetto al cantiere.",
    studioLink: 'Lo studio',
    featuredWorks: 'Lavori in evidenza',
    allWorks: 'Tutti i lavori',
    ctaLabel: 'Contatti',
    ctaQuestion: 'Vuoi valorizzare un immobile o hai un cantiere da avviare nel Chianti?',
    ctaText: "Ogni progetto nasce da un'idea. Raccontaci la tua e scopriamone insieme le possibilità.",
    ctaLink: 'Raccontaci la tua idea',
  },
  works: {
    metaTitle: 'Lavori — TecnoChianti',
    metaDescription:
      'Progetti di architettura, recupero e urbanistica realizzati da TecnoChianti a Radda in Chianti e in Toscana.',
    title: 'Lavori',
    count: (n: number) => `${n} progetti`,
    inProgress: 'In corso',
    comingSoon: 'Dettagli a breve',
    introLead: 'Un percorso tra architettura, luoghi e trasformazione.',
    introText:
      "Ogni progetto è una risposta attenta al proprio contesto, che unisce il carattere dell'esistente a una visione architettonica contemporanea.",
    // Invito al contatto in fondo alla pagina
    ctaQuestion: 'Ogni progetto inizia da una conversazione.',
    ctaText:
      'Hai un immobile da restaurare, un edificio da trasformare o un nuovo progetto in mente? Raccontaci la tua idea: saremo felici di esplorarne le possibilità e di aiutarti a realizzarla.',
  },
  project: {
    location: 'Luogo',
    year: 'Anno',
    status: 'Stato',
    intervention: 'Tipologia di intervento',
    category: 'Categoria',
    statusLabels: { 'concluso': 'Concluso', 'in-corso': 'In corso' } as Record<ProjectStatus, string>,
    galleryLabel: 'Galleria immagini',
    back: '← Tutti i lavori',
  },
  studio: {
    metaTitle: 'Studio — TecnoChianti',
    metaDescription:
      'TecnoChianti è uno studio di architettura con sede a Radda in Chianti. Progettazione architettonica, strutturale e impiantistica tra le province di Siena, Firenze e Arezzo.',
    title: 'Studio',
    introLabel: 'Chi siamo',
    paragraphs: [
      'TecnoChianti nasce nel 2013 come raggruppamento di professionisti in grado di assicurare una copertura qualificata alla propria committenza, anche grazie alla collaborazione consolidata con partner esterni. Lo studio può così offrire servizi di progettazione architettonica e strutturale per interventi di ogni livello di complessità, oltre che di progettazione impiantistica, con una particolare attenzione al tema della sostenibilità ambientale e della progettazione di edifici a basso consumo energetico.',
      "Dalle prime fasi della progettazione fino al cantiere, TecnoChianti offre un approccio integrato, che garantisce continuità, precisione e cura in ogni fase del progetto.",
      "Con sede operativa a Radda in Chianti e attivo principalmente tra le province di Siena, Firenze e Arezzo, lo studio estende la propria operatività all'intero territorio regionale e a più ampio raggio.",
      "Il forte legame con il territorio orienta un'architettura attenta al paesaggio, al carattere dei luoghi e alle qualità specifiche di ogni contesto.",
      "Che si tratti di immobili storici, edifici rurali tradizionali o architetture residenziali contemporanee, TecnoChianti cerca un dialogo attento tra l'esistente e il nuovo, rispettando l'identità di ogni luogo e cogliendone le potenzialità per il futuro.",
    ],
    // Testo fornito dal cliente
    statement:
      'Progettiamo edifici privati e curiamo il recupero e la valorizzazione del patrimonio edilizio esistente in contesti di pregio paesaggistico.',
    videoLabel: 'Il territorio',
    team: 'Il team',
    teamIntro: 'Un team multidisciplinare che unisce visione architettonica, competenza tecnica ed esperienza pratica.',
    roles: { architect: 'Architetto', industrialExpert: 'Perito Industriale' },
    services: 'Cosa facciamo',
    // Elenco fornito dal cliente
    serviceList: [
      {
        name: 'Progettazione integrata',
        description:
          "Progettazione architettonica e strutturale, coordinata con gli impianti e le discipline specialistiche, dall'idea iniziale alla conclusione dei lavori.",
      },
      {
        name: 'Direzione lavori',
        description:
          'Coordinamento e controllo del cantiere, per garantire la fedeltà al progetto, la qualità tecnica e la continuità durante tutta la costruzione.',
      },
      {
        name: 'Pratiche edilizie',
        description:
          'Preparazione e gestione dei titoli abilitativi, dei permessi di costruire e della documentazione richiesta dagli enti.',
      },
      {
        name: 'Sanatorie edilizie',
        description:
          'Verifiche tecniche e procedure per la regolarizzazione degli immobili esistenti, sotto il profilo edilizio e urbanistico.',
      },
      {
        name: 'Pratiche amministrative',
        description:
          "Gestione della documentazione tecnica e amministrativa necessaria in tutte le fasi dell'intervento immobiliare.",
      },
      {
        name: 'Perizie e stime immobiliari',
        description:
          'Valutazioni e stime professionali, per dare una base tecnica solida alle decisioni che riguardano un immobile.',
      },
      {
        name: 'Assistenza tecnica alla compravendita immobiliare',
        description:
          "Assistenza tecnica e consulenza nell'acquisto e nella vendita di immobili, con verifiche sullo stato dell'edificio, controlli di conformità e due diligence.",
      },
    ],
  },
  contact: {
    metaTitle: 'Contatti — TecnoChianti',
    metaDescription: 'Contatta TecnoChianti, studio di architettura a Radda in Chianti (SI).',
    title: 'Parliamo del tuo progetto',
    intro:
      'Che tu stia pensando al restauro di un immobile storico, alla trasformazione di un edificio esistente o a un nuovo progetto, saremo lieti di ascoltarti.',
    address: 'Indirizzo',
    phone: 'Telefono',
    email: 'Email',
    // Paese sotto l'indirizzo: vuoto in italiano
    country: '',
    writeUs: 'Hai un immobile da valorizzare o un progetto in mente? Raccontaci la tua idea',
  },
  notFound: {
    metaTitle: 'Pagina non trovata — TecnoChianti',
    title: 'Pagina non trovata',
    text: "L'indirizzo che hai cercato non esiste o è stato spostato.",
    home: 'Torna alla home',
    works: 'Guarda i lavori',
    // Scritta nell'altra lingua (qui in inglese): compare solo nel 404 globale, che non conosce la lingua
    otherLanguage: 'Page not found — Back to home',
  },
  form: {
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'Email',
    message: 'Messaggio',
    honeypot: 'Sito web',
    privacyBefore: "Ho letto l'",
    privacyLink: 'informativa privacy',
    privacyAfter: ' e acconsento al trattamento dei dati per ricevere una risposta.',
    submit: 'Invia messaggio',
    sending: 'Invio in corso…',
    success: 'Messaggio inviato. Vi risponderemo al più presto.',
    errorRequired: 'Compila tutti i campi.',
    errorNameLength: 'Nome o cognome troppo lunghi.',
    errorEmail: "Controlla l'indirizzo email.",
    errorMessageLength: (max: number) => `Il messaggio può contenere al massimo ${max} caratteri.`,
    errorPrivacy: "Per inviare il messaggio è necessario accettare l'informativa privacy.",
    errorSend:
      'Non è stato possibile inviare il messaggio. Riprova più tardi o contattaci per telefono o email.',
  },
  cookieBanner: {
    label: 'Preferenze cookie',
    text: 'Usiamo cookie di analisi (Google Analytics) solo con il tuo consenso, per capire come viene usato il sito. Puoi cambiare scelta in ogni momento dal footer.',
    policyLink: 'Cookie policy',
    reject: 'Rifiuta',
    accept: 'Accetta',
  },
}

export type Dictionary = typeof it

// Traduzione inglese
const en: Dictionary = {
  header: {
    navLabel: 'Main navigation',
    studio: 'Studio',
    works: 'Works',
    contact: 'Contact',
  },
  footer: {
    navLabel: 'Footer navigation',
    home: 'Home',
    legalLabel: 'Legal notes',
    privacy: 'Privacy',
    cookies: 'Cookie policy',
    cookiePreferences: 'Cookie preferences',
    credit: 'Website by Andrea Vannetti',
    vat: 'VAT ID',
  },
  home: {
    metaTitle: 'TecnoChianti — Architecture Studio',
    metaDescription:
      'Architectural practice in Radda in Chianti, Tuscany. Integrated architectural design, construction management, planning and building permissions, property appraisals and valuations.',
    heroLabel: 'Images of our works',
    manifestoLabel: 'Manifesto',
    manifesto: ['Shaping the future', 'while preserving the soul of places'],
    manifestoSub: 'Architecture that respects its origins and embraces the future.',
    intro:
      'TecnoChianti is an architectural practice based in Radda in Chianti, Tuscany. Founded in 2013, the practice works across private architecture, restoration and the sensitive transformation of existing buildings. With a deep respect for the character, history and identity of each place, we guide every project from the initial concept through to its realisation on site, combining architectural vision with technical expertise and a thoughtful approach to the built environment.',
    studioLink: 'The studio',
    featuredWorks: 'Featured works',
    allWorks: 'All works',
    ctaLabel: 'Contact',
    ctaQuestion: 'Considering the transformation of a property or planning a new project in Chianti or elsewhere in Tuscany?',
    ctaText: 'Every project begins with an idea. Tell us yours and let us explore its possibilities together.',
    ctaLink: 'Tell us about your idea',
  },
  works: {
    metaTitle: 'Works — TecnoChianti',
    metaDescription:
      'Architecture, restoration and renovation projects by TecnoChianti in Radda in Chianti and across Tuscany.',
    title: 'Works',
    count: (n: number) => `${n} projects`,
    inProgress: 'In progress',
    comingSoon: 'Details coming soon',
    introLead: 'An exploration of architecture, place and transformation.',
    introText:
      'Each project reflects a considered response to its setting, combining the character of the existing environment with a contemporary architectural vision.',
    ctaQuestion: 'Every project begins with a conversation.',
    ctaText:
      'Do you have a property to restore, a building to transform or a new project in mind? Share your vision with us. We would be delighted to explore its possibilities and help bring it to life.',
  },
  project: {
    location: 'Location',
    year: 'Year',
    status: 'Status',
    intervention: 'Type of work',
    category: 'Category',
    statusLabels: { 'concluso': 'Completed', 'in-corso': 'In progress' },
    galleryLabel: 'Image gallery',
    back: '← All works',
  },
  studio: {
    metaTitle: 'Studio — TecnoChianti',
    metaDescription:
      'TecnoChianti is an architecture studio based in Radda in Chianti, offering architectural, structural and building services design across the provinces of Siena, Florence and Arezzo.',
    title: 'Studio',
    introLabel: 'About us',
    paragraphs: [
      "Founded in 2013, TecnoChianti is an architectural practice bringing together a multidisciplinary team of professionals and a trusted network of specialist collaborators. The studio provides comprehensive architectural and structural design services, supported by expertise in mechanical, electrical and plumbing systems. Its approach combines design quality, technical rigour and a considered understanding of each project's context, with particular attention to environmental sustainability, energy efficiency and the responsible use of resources.",
      'From the earliest stages of design through to construction, TecnoChianti offers an integrated approach, ensuring continuity, precision and care throughout the development of every project.',
      'Based in Radda in Chianti, at the heart of the Tuscan countryside, the studio operates primarily across the provinces of Siena, Florence and Arezzo, with projects and professional collaborations extending throughout Tuscany and beyond.',
      'Its strong connection to the territory informs an architectural approach attentive to landscape, local character and the distinctive qualities of each setting.',
      'Whether working with historic properties, traditional rural buildings or contemporary residential architecture, TecnoChianti seeks to establish a thoughtful dialogue between the existing and the new, respecting the identity of each place while exploring its potential for the future.',
    ],
    statement:
      'The studio specialises in the design of private residences and the restoration, renovation and enhancement of existing buildings, particularly within landscapes of significant architectural and environmental value.',
    videoLabel: 'The landscape',
    team: 'The team',
    teamIntro: 'A multidisciplinary team combining architectural vision, technical knowledge and practical experience.',
    roles: { architect: 'Architect', industrialExpert: 'Industrial Technical Expert' },
    services: 'What we do',
    serviceList: [
      {
        name: 'Integrated Architectural Design',
        description:
          'Architectural and structural design, coordinated with building systems and specialist disciplines, from initial concept to project completion.',
      },
      {
        name: 'Construction Management & Site Supervision',
        description:
          'Coordination and supervision of construction works, ensuring design integrity, technical quality and continuity throughout the building process.',
      },
      {
        name: 'Planning & Building Permissions',
        description:
          'Preparation and management of planning applications, building permits and statutory documentation.',
      },
      {
        name: 'Building Compliance & Regularisation',
        description:
          'Technical assessments and procedures for the verification and regularisation of existing buildings, including building compliance and planning matters.',
      },
      {
        name: 'Administrative & Technical Procedures',
        description:
          'Management of the technical and administrative documentation required throughout the property development process.',
      },
      {
        name: 'Property Appraisals & Valuations',
        description:
          'Professional assessments and valuations, providing a sound technical basis for property-related decisions.',
      },
      {
        name: 'Real Estate Technical Consultancy',
        description:
          'Technical assistance and professional guidance for property acquisitions and sales, including building assessments, compliance checks and due diligence.',
      },
    ],
  },
  contact: {
    metaTitle: 'Contact — TecnoChianti',
    metaDescription: 'Contact TecnoChianti, architecture studio in Radda in Chianti (Siena).',
    title: "Let's begin a conversation",
    intro:
      'Whether you are considering the restoration of a historic property, the transformation of an existing building or the development of a new architectural project, we would be pleased to hear from you.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    country: 'Italy',
    writeUs: 'Do you have a property to enhance or a project in mind? Tell us about your idea',
  },
  notFound: {
    metaTitle: 'Page not found — TecnoChianti',
    title: 'Page not found',
    text: 'The address you are looking for does not exist or has been moved.',
    home: 'Back to home',
    works: 'See our works',
    otherLanguage: 'Pagina non trovata — Torna alla home',
  },
  form: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    message: 'Message',
    honeypot: 'Website',
    privacyBefore: 'I have read the ',
    privacyLink: 'privacy policy (in Italian)',
    privacyAfter: ' and consent to the processing of my data in order to receive a reply.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. We will get back to you as soon as possible.',
    errorRequired: 'Please fill in all fields.',
    errorNameLength: 'First or last name is too long.',
    errorEmail: 'Please check your email address.',
    errorMessageLength: (max: number) => `The message can contain up to ${max} characters.`,
    errorPrivacy: 'To send the message you need to accept the privacy policy.',
    errorSend:
      'The message could not be sent. Please try again later or contact us by phone or email.',
  },
  cookieBanner: {
    label: 'Cookie preferences',
    text: 'We use analytics cookies (Google Analytics) only with your consent, to understand how the site is used. You can change your choice at any time from the footer.',
    policyLink: 'Cookie policy',
    reject: 'Reject',
    accept: 'Accept',
  },
}

const dictionaries: Record<Locale, Dictionary> = { it, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
