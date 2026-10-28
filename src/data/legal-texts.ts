import type { LegalSection } from '@/components/LegalPage/LegalPage'
import { contacts } from '@/data/contacts'

// Testi da far verificare a un consulente privacy prima della pubblicazione definitiva.
// Dati dei fornitori verificati il 28/10/2026 sulle loro informative (Vercel, Resend, Google).
// Periodi di conservazione decisi con il cliente; quelli di Google Analytics devono coincidere
// con Amministrazione → Conservazione dei dati in GA (oggi: eventi 2 mesi, utente 14 mesi).
// "Ultimo aggiornamento" si compila al lancio.

const { street, postalCode, city, province } = contacts.address
const controller = `Carlo Matassini, ${street}, ${postalCode} ${city} (${province})`

export const privacySections: LegalSection[] = [
  {
    title: 'Titolare del trattamento',
    paragraphs: [
      `Il titolare del trattamento dei dati personali è ${controller}. Per qualsiasi richiesta relativa ai dati personali è possibile contattare il titolare al numero ${contacts.phone.display} o all'indirizzo email ${contacts.email}.`,
    ],
  },
  {
    title: 'Dati raccolti',
    paragraphs: [
      "Dati di navigazione: i sistemi che fanno funzionare il sito raccolgono, durante il normale utilizzo, alcuni dati tecnici (ad esempio indirizzo IP, tipo di browser, pagine visitate e orario della richiesta). Sono usati solo per garantire il funzionamento e la sicurezza del sito. Caratteri tipografici, immagini e video sono ospitati direttamente sul sito: la navigazione non comporta richieste a servizi esterni come Google Fonts, mappe o piattaforme video.",
      "Dati statistici: solo con il consenso dell'utente, il sito utilizza Google Analytics per raccogliere informazioni aggregate sull'uso delle pagine. I dettagli sono descritti nella Cookie policy.",
      "Dati forniti volontariamente: chi contatta lo studio per telefono, email o tramite il modulo della pagina Contatti comunica i propri dati (nome, cognome, indirizzo email) e le informazioni contenute nella richiesta. I messaggi inviati con il modulo sono recapitati agli indirizzi email dello studio e dei suoi professionisti e non vengono conservati sul sito; il servizio di invio ne mantiene una copia tecnica per un periodo limitato.",
    ],
  },
  {
    title: 'Finalità e base giuridica',
    paragraphs: [
      "I dati di navigazione sono trattati per il legittimo interesse del titolare al corretto funzionamento e alla sicurezza del sito (art. 6, par. 1, lett. f del GDPR). I dati statistici sono trattati solo sulla base del consenso, revocabile in ogni momento (art. 6, par. 1, lett. a). I dati forniti volontariamente sono trattati per rispondere alle richieste e per eventuali attività precontrattuali e contrattuali (art. 6, par. 1, lett. b).",
    ],
  },
  {
    title: 'Modalità e durata del trattamento',
    paragraphs: [
      "I dati sono trattati con strumenti informatici e con misure adeguate a garantirne la sicurezza. Le richieste ricevute tramite il modulo o per email sono conservate per il tempo necessario a gestirle e comunque non oltre 24 mesi, salvo che diano origine a un incarico o che la legge imponga una conservazione più lunga. Google Analytics conserva i dati dettagliati sulle visite per 2 mesi e quelli associati al singolo utente per 14 mesi; poi restano solo statistiche aggregate.",
    ],
  },
  {
    title: 'Destinatari dei dati',
    paragraphs: [
      "I dati possono essere trattati da fornitori che svolgono servizi per conto del titolare, nominati responsabili del trattamento: Vercel Inc. (Covina, California, USA), che ospita il sito; Plus Five Five, Inc. (Resend, San Francisco, USA), per l'invio dei messaggi del modulo contatti; solo in caso di consenso, Google Ireland Limited per il servizio Google Analytics. I dati non sono diffusi.",
    ],
  },
  {
    title: "Trasferimento fuori dall'Unione Europea",
    paragraphs: [
      "Vercel, Resend e Google possono trattare i dati anche negli Stati Uniti. Il trasferimento avviene sulla base della decisione di adeguatezza della Commissione Europea del 10 luglio 2023 sull'EU-U.S. Data Privacy Framework, a cui queste società aderiscono, e, dove previsto, delle clausole contrattuali standard approvate dalla Commissione.",
    ],
  },
  {
    title: "Diritti dell'interessato",
    paragraphs: [
      "L'interessato può chiedere in ogni momento l'accesso ai propri dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità e opporsi al trattamento, nei casi previsti dagli articoli 15-22 del Regolamento UE 2016/679 (GDPR). Il consenso può essere revocato in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente.",
      "Resta salvo il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
    ],
  },
  {
    title: 'Aggiornamenti',
    paragraphs: [
      'Questa informativa può essere aggiornata nel tempo. Ultimo aggiornamento: [data da completare].',
    ],
  },
]

export const cookieSections: LegalSection[] = [
  {
    title: 'Cosa sono i cookie',
    paragraphs: [
      "I cookie sono piccoli file di testo che i siti visitati salvano nel browser. Strumenti simili, come il localStorage del browser, permettono di memorizzare informazioni nello stesso modo. In questa pagina sono indicati tutti insieme come \"cookie\".",
    ],
  },
  {
    title: 'Cookie tecnici',
    paragraphs: [
      "Il sito salva nel browser la scelta fatta nel banner sui cookie (voce \"tc-cookie-consent\" nel localStorage), così da non riproporre il banner a ogni visita. Questa informazione è necessaria al funzionamento del sito e non richiede consenso.",
    ],
  },
  {
    title: 'Cookie di analisi',
    paragraphs: [
      "Solo con il consenso dell'utente, il sito usa Google Analytics 4, fornito da Google Ireland Limited, per raccogliere statistiche aggregate sull'uso delle pagine. Google Analytics imposta i cookie _ga e _ga_R40M882CDR, con durata di 2 anni. Google Analytics 4 non registra né conserva gli indirizzi IP. Il sito usa la modalità di consenso di Google (Consent Mode): senza consenso lo script di Google Analytics non viene caricato e non viene salvato alcun cookie di analisi. Se il consenso viene revocato, i cookie di Google Analytics già salvati vengono cancellati.",
      "Per maggiori informazioni: informativa privacy di Google (policies.google.com/privacy) e modalità di utilizzo dei dati da parte di Google (policies.google.com/technologies/partner-sites).",
    ],
  },
  {
    title: 'Come gestire il consenso',
    paragraphs: [
      'Al primo accesso un banner permette di accettare o rifiutare i cookie di analisi. La scelta può essere cambiata in qualsiasi momento con il link "Preferenze cookie" nel footer di ogni pagina.',
      "È anche possibile cancellare o bloccare i cookie dalle impostazioni del proprio browser.",
    ],
  },
  {
    title: 'Titolare del trattamento',
    paragraphs: [
      `Il titolare del trattamento è ${controller}. Per maggiori informazioni sul trattamento dei dati personali si rimanda all'informativa Privacy.`,
    ],
  },
  {
    title: 'Aggiornamenti',
    paragraphs: [
      'Questa cookie policy può essere aggiornata nel tempo. Ultimo aggiornamento: [data da completare].',
    ],
  },
]
