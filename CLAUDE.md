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

**Tipografia** (solo due famiglie)
- Fraunces per titoli, testi display e nomi dei progetti, pesi 200-300. Mai pesi così bassi sotto i 20-24 px.
- Work Sans per corpo testo e label, pesi 400 e 500.

**Palette**
- Carta `#F7F5F1` (sfondo)
- Grigio chiaro `#E8E6E0`
- Grigio medio `#A6A39A` (testi secondari)
- Antracite `#2B2A27` (testi principali)
- Terracotta `#B8623C`: solo micro-accenti, mai su superfici ampie

**Componenti e interazioni già implementati**
- Header trasparente con testo bianco sopra l'hero; durante lo scroll diventa backdrop-blur su sfondo carta. Prop `alwaysDark` per le pagine senza hero.
- Hero della Home: crossfade CSS di 1500 ms, cambio immagine ogni 6000 ms, nessun controllo visibile.
- Manifesto: `clamp(2.25rem, 5.5vw, 4.75rem)`, mai sotto i 36 px.
- Griglia Lavori: foto in bianco e nero con solo nome e categoria. `cursor: default` a riposo; in hover passaggio al colore (450-600 ms) e `cursor: pointer`. Scheda di dettaglio a colori. Su mobile il colore compare solo nel dettaglio. Focus da tastiera con un outline sottile.

## Struttura

- **Home**: hero, manifesto con breve testo introduttivo (bozza in attesa di approvazione del cliente) e link a Studio, tre lavori in evidenza, invito al contatto ("Hai un progetto? Parliamone" → Contatti).
- **Footer** (tutte le pagine), a due fasce: sopra marchio a sinistra con la frase descrittiva del cliente, indirizzo, telefono e menu a destra; sotto dati legali dei professionisti, © e link Privacy, Cookie policy, Preferenze cookie.
- **Lavori**: un'unica griglia a due colonne, ordinata per anno dal più recente, con contatore dei progetti. I lavori in corso sono segnalati con "In corso" accanto alla categoria nella card.
- **Lavori/[slug]**: hero a colori (75svh), blocco dati, descrizione, galleria, link per tornare indietro. Generata con `generateStaticParams`.
- **Studio**: testo di presentazione in colonna stretta (58ch), margini asimmetrici, nessuna pull quote, video del territorio a tutta larghezza (muto, in loop, fermo con prefers-reduced-motion), elenco dei tre professionisti (NOME COGNOME in maiuscolo, professione in minuscolo, nessuna foto), lista tipografica dei 5 servizi indicati dal cliente (senza descrizioni).
- **Contatti**: recapiti a sinistra, form a destra (nome, cognome, email, messaggio, consenso privacy). Invio con Server Action + Resend verso info@ e le email dei tre professionisti, `replyTo` sull'email di chi scrive, campo trappola antispam. Se al cliente non piace la pagina, il form va in fondo alla pagina Studio.
- **Privacy** e **Cookie policy**.

Il blocco dati della scheda progetto contiene **solo** questi cinque campi, in questo ordine:
LUOGO · ANNO · STATO · TIPOLOGIA DI INTERVENTO · CATEGORIA.
Niente superfici, impianti, vincoli o altri dati tecnici nel blocco dati. Sottotitolo (`abstract`) e testo descrittivo sono quelli forniti dal cliente, senza riscriverli (solo refusi evidenti corretti); i grassetti del cliente si scrivono tra `**...**`.

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
- Approvazione del testo introduttivo della Home (bozza in `src/app/page.tsx`)

## Modo di lavorare

- Commit separati per ogni blocco di modifiche.
- Se qualcosa non è chiaro, chiedi prima di assumere.
- Quando una decisione o lo stato del lavoro cambiano, aggiorna questo file.
