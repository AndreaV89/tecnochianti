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
  },
  home: {
    metaTitle: 'TecnoChianti — Studio di Architettura',
    metaDescription:
      'Studio di architettura a Radda in Chianti, Toscana. Progettazione integrata, direzione lavori, pratiche edilizie, perizie e stime immobiliari.',
    heroLabel: 'Immagini dei lavori',
    manifestoLabel: 'Manifesto',
    manifesto: ['Diamo forma al futuro', "creando architetture custodi dell'anima dei luoghi"],
    // Bozza da far approvare al cliente
    intro:
      "TecnoChianti è uno studio di architettura con sede a Radda in Chianti. Dal 2013 progettiamo edifici privati e ci occupiamo del recupero e della valorizzazione del patrimonio edilizio esistente, seguendo ogni intervento dal progetto al cantiere.",
    studioLink: 'Lo studio',
    featuredWorks: 'Lavori in evidenza',
    allWorks: 'Tutti i lavori',
    ctaLabel: 'Contatti',
    ctaQuestion: 'Vuoi valorizzare un immobile o hai un cantiere da avviare nel Chianti?',
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
      "Con sede operativa a Radda in Chianti e attivo principalmente tra le province di Siena, Firenze e Arezzo, lo studio estende la propria operatività all'intero territorio regionale e a più ampio raggio.",
    ],
    // Testo fornito dal cliente
    statement:
      'Progettiamo edifici privati e curiamo il recupero e la valorizzazione del patrimonio edilizio esistente in contesti di pregio paesaggistico.',
    videoLabel: 'Il territorio',
    team: 'Il team',
    roles: { architect: 'Architetto', industrialExpert: 'Perito Industriale' },
    services: 'Cosa facciamo',
    // Elenco fornito dal cliente
    serviceList: [
      'Progettazione integrata',
      'Direzione lavori',
      'Pratiche edilizie',
      'Sanatorie edilizie',
      'Pratiche amministrative',
      'Perizie e stime immobiliari',
      'Assistenza tecnica alla compravendita immobiliare',
    ],
  },
  contact: {
    metaTitle: 'Contatti — TecnoChianti',
    metaDescription: 'Contatta TecnoChianti, studio di architettura a Radda in Chianti (SI).',
    title: 'Contattaci',
    address: 'Indirizzo',
    phone: 'Telefono',
    email: 'Email',
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

// Bozza di traduzione da far approvare al cliente
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
  },
  home: {
    metaTitle: 'TecnoChianti — Architecture Studio',
    metaDescription:
      'Architecture studio in Radda in Chianti, Tuscany. Integrated design, site supervision, building permits, property surveys and valuations.',
    heroLabel: 'Images of our works',
    manifestoLabel: 'Manifesto',
    manifesto: ['Shaping the future', 'with architecture that guards the spirit of place'],
    intro:
      'TecnoChianti is an architecture studio based in Radda in Chianti. Since 2013 we have been designing private buildings and restoring and enhancing existing ones, following every project from the first design to the building site.',
    studioLink: 'The studio',
    featuredWorks: 'Featured works',
    allWorks: 'All works',
    ctaLabel: 'Contact',
    ctaQuestion: 'Looking to enhance a property or start a building project in Chianti?',
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
      'TecnoChianti was founded in 2013 as a group of professionals able to provide their clients with qualified support, also thanks to long-standing collaborations with external partners. The studio offers architectural and structural design for projects of every level of complexity, as well as building services design, with particular attention to environmental sustainability and to the design of low-energy buildings.',
      'Based in Radda in Chianti and working mainly across the provinces of Siena, Florence and Arezzo, the studio operates throughout Tuscany and beyond.',
    ],
    statement:
      'We design private buildings and take care of the restoration and enhancement of existing buildings in settings of great landscape value.',
    videoLabel: 'The landscape',
    team: 'The team',
    roles: { architect: 'Architect', industrialExpert: 'Industrial Technician' },
    services: 'What we do',
    serviceList: [
      'Integrated design',
      'Site supervision',
      'Building permits',
      'Building regularizations',
      'Administrative procedures',
      'Property surveys and valuations',
      'Technical assistance in property sales and purchases',
    ],
  },
  contact: {
    metaTitle: 'Contact — TecnoChianti',
    metaDescription: 'Contact TecnoChianti, architecture studio in Radda in Chianti (Siena).',
    title: 'Contact us',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    writeUs: 'Do you have a property to enhance or a project in mind? Tell us your idea',
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
