# TecnoChianti — tecnochianti.it

Sito portfolio di uno studio di architettura con sede a Radda in Chianti (SI).
Questo file è il contesto del progetto: leggilo all'inizio di ogni sessione e tienilo aggiornato quando cambia una decisione o lo stato del lavoro.

## Cliente

Tre professionisti con P.IVA distinte (non è uno studio associato in senso legale):
- Arch. Vincenzo Bove
- P.I. Carlo Matassini
- Arch. Riccardo Panichi (referente principale per il sito)

Lo studio va presentato come **"Studio di Architettura"**, mai "architettura e ingegneria".
TecnoChianti nasce nel maggio 2013 come evoluzione di una società professionale fondata nel 1990. Sul sito si racconta solo la nascita nel 2013 (testo del cliente); il 1990 non compare.

## Stack e repo

- Next.js 16 con App Router e SSG, TypeScript in modalità strict
- Stile: CSS Modules più custom properties globali in `globals.css`, nessun framework CSS
- `next/font/google` per i font, `next/image` per le immagini
- Hosting su Vercel. Dominio registrato su Register.it: i record DNS puntano a Vercel, i record MX dell'email non vanno toccati.
- **Branch**: si lavora su `develop`. Mai push diretto su `main` senza mia richiesta esplicita.
- In Next.js 16 `middleware.ts` si chiama `proxy.ts`. Prima di usare API che potrebbero essere cambiate, consulta la documentazione in `node_modules/next/dist/docs/`.

## Design

Direzione "architettura tipografica": minimal, tipografia protagonista, sfondo chiaro, pochissimo colore, tono formale e affermato. Riferimenti forniti dal cliente: spaziottantatre.com, studiobenaim.com, agnesemazzei.it.

**Tipografia** (solo due famiglie, scelte dal cliente sul modello di bottega17.com)
- Saira per titoli, testi display e nomi dei progetti (`--font-display`). Alternativa gratuita a Klavika.
- Hanken Grotesk per corpo testo e label (`--font-text`). Alternativa gratuita ad Atlas Grotesk.
- Solo due pesi: regular 400 (`--weight-regular`) e semibold 600 (`--weight-medium`). Niente pesi sottili né corsivi.

**Palette**
- Carta `#F7F5F1` (sfondo)
- Grigio chiaro `#E8E6E0`
- Grigio medio `#A6A39A` (testi secondari)
- Antracite `#2B2A27` (titoli, testi brevi, grassetti nei testi lunghi)
- Grigio testo `#77746C` (testi lunghi: descrizioni dei progetti, Studio, introduzione della Home)
- Terracotta `#B8623C`: solo micro-accenti, mai su superfici ampie. Unica eccezione voluta: lo sfondo dell'invito al contatto in fondo alla Home, in un tono più scuro e meno acceso, Terracotta scuro `#A0583A` (`--color-terracotta-scuro`), con testo color carta e freccia antracite

**Componenti e interazioni già implementati**
- Logo in SVG (`src/components/Logo/Logo.tsx`, copia per usi esterni in `public/logo.svg`): TECNO in Saira ExtraLight, CHIANTI in Saira SemiBold, sotto STUDIO DI ARCHITETTURA in Hanken Grotesk spaziato alla stessa larghezza. Lettere convertite in tracciati, colore da `currentColor`. Resta in italiano anche sulle pagine inglesi. Si rigenera con `scripts/make_logo.py` (istruzioni nel file). Header: 260px desktop, 170px mobile; su mobile l'header è su due righe (logo e selettore lingua sopra, menu sotto).
- Header trasparente con testo bianco sopra l'hero; durante lo scroll diventa backdrop-blur su sfondo carta. Prop `alwaysDark` per le pagine senza hero.
- Hero della Home: crossfade CSS di 1500 ms, cambio immagine ogni 6000 ms, nessun controllo visibile.
- Manifesto: `clamp(2.25rem, 5.5vw, 4.75rem)`, mai sotto i 36 px.
- Griglia Lavori: foto in bianco e nero con solo nome e categoria. `cursor: default` a riposo; in hover passaggio al colore (450-600 ms) e `cursor: pointer`. Scheda di dettaglio a colori. Su mobile il colore compare solo nel dettaglio. Focus da tastiera con un outline sottile.

## Struttura

- **Home**: hero, manifesto con breve testo introduttivo (bozza in attesa di approvazione del cliente) e link a Studio, tre lavori in evidenza, invito al contatto (etichetta "Contatti", domanda "Vuoi valorizzare un immobile o hai un cantiere da avviare nel Chianti?" e link "Raccontaci la tua idea" → Contatti).
- **Footer** (tutte le pagine), a due fasce: sopra logo a sinistra, indirizzo, telefono, email e menu a destra; sotto dati legali dei professionisti, © e link Privacy, Cookie policy, Preferenze cookie. Nessuna frase descrittiva (spostata nella pagina Studio).
- **Lavori**: un'unica griglia a due colonne, ordinata per anno dal più recente, con contatore dei progetti. I lavori in corso sono segnalati con "In corso" accanto alla categoria nella card.
- **Lavori/[slug]**: hero a colori (75svh), blocco dati, descrizione, galleria, link per tornare indietro. Generata con `generateStaticParams`.
- **Studio**: si apre sul video del territorio a tutto schermo (muto, in loop). Scorrendo il video sfuma nel primo fotogramma in bianco e nero, la foto sbiadisce verso il carta e i crinali delle colline si disegnano come linee di progetto, con linea di terra, quote e riferimenti terracotta (`StudioLandscape`; crinali tracciati sul primo fotogramma in `ridges.ts`: se cambia il video vanno ritracciati). Le linee restano tenui sullo sfondo mentre sopra scorre la presentazione: titolo "Studio" (h1) e poi su due colonne: a sinistra il testo di presentazione del cliente (primo paragrafo grande, che scorrendo si "riempie" di colore parola per parola con `ScrollFillText`, ispirato a architetti-template.vercel.app; secondo paragrafo in corpo normale grigio), a destra in Saira con trattino terracotta sopra la frase "Progettiamo edifici privati e curiamo il recupero e la valorizzazione del patrimonio edilizio esistente in contesti di pregio paesaggistico" (compare con `Reveal`). Con prefers-reduced-motion o senza JavaScript resta il video statico (poster) senza animazioni. Poi elenco dei tre professionisti (NOME COGNOME in maiuscolo, professione in minuscolo, nessuna foto) e lista tipografica dei 7 servizi indicati dal cliente (senza descrizioni).
- **Contatti**: recapiti a sinistra, form a destra (nome, cognome, email, messaggio, consenso privacy). Invio con Server Action (`src/lib/contact-action.ts`) + Resend verso info@ e le email dei tre professionisti, `replyTo` sull'email di chi scrive, campo trappola antispam. Se al cliente non piace la pagina, il form va in fondo alla pagina Studio.
- **Privacy** e **Cookie policy**.
- **404**: "404" grande in grigio chiaro, titolo, breve testo e link a Home e Lavori (`src/views/NotFound/`). Gli indirizzi inesistenti usano `src/app/global-not-found.tsx` (in italiano con una riga in inglese; attivato con `experimental.globalNotFound` in `next.config.ts`, necessario perché ci sono due root layout); i `notFound()` dentro le pagine usano `not-found.tsx` di ciascuna lingua.

Il blocco dati della scheda progetto contiene **solo** questi cinque campi, in questo ordine:
LUOGO · ANNO · STATO · TIPOLOGIA DI INTERVENTO · CATEGORIA.
Niente superfici, impianti, vincoli o altri dati tecnici nel blocco dati. Sottotitolo (`abstract`) e testo descrittivo sono quelli forniti dal cliente, senza riscriverli (solo refusi evidenti corretti); i grassetti del cliente si scrivono tra `**...**`.

## Lingue

- Italiano alla radice (`/`, `/studio`, `/lavori`, `/contatti`), inglese sotto `/en` con URL tradotti (`/en`, `/en/studio`, `/en/works`, `/en/contact`). Gli slug dei progetti sono uguali nelle due lingue.
- Due root layout: `src/app/(it)/layout.tsx` e `src/app/en/layout.tsx` (servono per avere `<html lang>` corretto nell'HTML statico). Passare da una lingua all'altra ricarica la pagina: è normale.
- Le route sono file brevi che passano `locale` a una vista condivisa in `src/views/` (Home, Studio, Works, Project, Contact). Le modifiche di contenuto e layout si fanno nelle viste, non nelle route.
- Percorsi delle pagine nelle due lingue, selettore IT/EN e `hreflang`: `src/i18n/routes.ts`.
- Testi dell'interfaccia: `src/i18n/dictionaries.ts` (`en` ha lo stesso tipo di `it`: se manca una traduzione la build si ferma).
- Testi dei progetti in inglese: campo `en` di ogni progetto in `src/data/projects.ts`.
- Privacy e cookie policy esistono solo in italiano: dalla versione inglese i link portano alle pagine italiane. Da tradurre quando ci sono i testi definitivi.
- Nessun redirect automatico in base alla lingua del browser.
- L'email del form allo studio è sempre in italiano, con l'indicazione della lingua del sito usata.

## Contenuti

- Progetti: `src/data/projects.ts` è l'unica fonte. Testi, dati, copertina e foto si modificano solo lì.
- Ogni foto usata (copertina, galleria, hero) ha una descrizione in `photoAlts` per l'attributo alt. Quando si aggiunge una foto, va aggiunta anche la sua descrizione.
- Ogni foto usata (copertina, galleria, hero) ha una descrizione in `photoAlts` per l'attributo alt. Quando si aggiunge una foto, va aggiunta anche la sua descrizione.
- Contatti ed email: si modificano solo in `src/data/contacts.ts`.
- Dati legali dei professionisti (P.IVA, albo): si modificano solo in `src/data/legal.ts`.
- Foto originali, da non modificare mai: `"/Users/andreavannetti/Library/Mobile Documents/com~apple~CloudDocs/Lavoro/02_Clienti/TecnoChianti/tecnochianti.it/Materiali"`, una sottocartella per progetto più `Home/` per le immagini della hero.
- Le foto per il sito si generano con lo script in `scripts/` (rotazione EXIF, massimo 2400 px, WebP qualità 80, metadati rimossi) e finiscono in `public/progetti/<slug>/` con nomi `01.webp`, `02.webp`…
- I video si generano con `scripts/optimize-video.mjs` (ffmpeg-static, H.264 max 1920 px, senza audio, più poster WebP) e finiscono in `public/video/`.

## Regole sui contenuti

- Non inventare dati: anni, luoghi, servizi e testi arrivano solo dal cliente. Se un dato manca, nascondi il campo invece di mostrare un segnaposto.
- Contatti pubblici: solo l'indirizzo (Via Guido Rossa 19, 53017 Radda in Chianti, SI) e il telefono fisso (+39 0577 738486). Niente email personali, cellulari, fax o orari.
- Footer: per ogni professionista nome, titolo, P.IVA e iscrizione all'albo. Il codice fiscale non va mai pubblicato.
- Titolare del trattamento: Carlo Matassini.
- Google Analytics 4 si carica solo dopo il consenso nel banner cookie (Consent Mode v2). L'ID viene da `NEXT_PUBLIC_GA_ID`; se manca, GA non si carica.
- Email pubblica: solo info@tecnochianti.it. Niente profili social (il cliente non li vuole).

## Stato attuale

- www.tecnochianti.it è online ma mostra la pagina "in costruzione": `src/proxy.ts` riscrive ogni richiesta verso `src/app/in-costruzione/page.tsx`.
- Il lavoro si verifica con le preview di Vercel.

## Prima del lancio

- [ ] Ricevere dal cliente i contenuti mancanti (vedi sotto)
- [ ] Eliminare `src/proxy.ts` per riattivare il sito completo
- [ ] Eliminare la pagina temporanea `/anteprima-foto`
- [ ] Togliere `picsum.photos` da `remotePatterns` e qualsiasi immagine segnaposto rimasta
- [x] Verificare il dominio tecnochianti.it su Resend (record DKIM `resend._domainkey`, CNAME `rsend` e `send`, DMARC `_dmarc` su Register.it; MX e SPF principali non toccati)
- [x] Impostare su Vercel `RESEND_API_KEY`, `CONTACT_FROM` e `CONTACT_RECIPIENTS` (vedi `.env.example`) e provare il form. In Preview `CONTACT_RECIPIENTS` contiene solo la mia email: i test non arrivano al cliente
- [ ] Dopo il lancio, provare il form in produzione (deve arrivare a info@ e ai tre professionisti)
- [x] Impostare `NEXT_PUBLIC_GA_ID` su Vercel (Production e Preview) e verificare il banner cookie
- [ ] Sostituire i testi segnaposto di privacy e cookie policy
- [ ] Merge di `develop` in `main`

## In attesa dal cliente

- Anno del Complesso immobiliare a Radda (ora vuoto: la card è ultima nella griglia)
- Approvazione del testo introduttivo della Home (bozza in `src/i18n/dictionaries.ts`, `home.intro`)
- Approvazione delle traduzioni inglesi (bozze in `src/i18n/dictionaries.ts` e nel campo `en` di `src/data/projects.ts`)

## Modo di lavorare

- Commit separati per ogni blocco di modifiche.
- Se qualcosa non è chiaro, chiedi prima di assumere.
- Quando una decisione o lo stato del lavoro cambiano, aggiorna questo file.
