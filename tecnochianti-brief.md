# TecnoChianti — Brief di progetto

## Cliente
Studio tecnico di architettura/ingegneria con sede a Radda in Chianti (Toscana).
Tre professionisti con P.IVA distinte (non uno studio associato in senso legale):

- **Vincenzo Bove** — Architetto
- **Carlo Matassini** — Perito Industriale
- **Riccardo Panichi** — Architetto

Lo studio nasce nel maggio 2013 come evoluzione di una precedente società professionale fondata nel 1990.

## Attività
Progettazione architettonica, urbanistica, strutturale, impiantistica, direzione lavori, computi metrici, stime immobiliari, gestione iter burocratici, pratiche edilizie.

## Stack tecnico
- Framework: **Next.js** (con static generation — SSG)
- Hosting: **Vercel**
- Dominio: **tecnochianti.it**

## Direzione design
**"Architettura tipografica"** — minimal, tipografia protagonista, sfondo chiaro, pochissimo colore. Ispirata a studi come David Chipperfield / Kengo Kuma.

Riferimenti diretti forniti dal cliente:
- spaziottantatre.com
- studiobenaim.com
- agnesemazzei.it

**Tono complessivo: formale / affermato** (non giovane/dinamico).

### Tipografia
- **Serif (titoli/display)**: Fraunces, pesi bassi (200–300), riservata a titoli grandi, frasi-manifesto, nomi progetto. A corpi piccoli (sotto i 20–24px) evitare pesi così bassi: perdono leggibilità.
- **Sans (corpo testo/label)**: Work Sans o Inter, peso 400 per il corpo, 500 per elementi che devono avere più presenza (es. nome nell'elenco professionisti).
- Solo due famiglie, 2–3 pesi totali in tutto il sito.

### Palette (quasi monocromatica)
- Carta (bianco caldo, non bianco puro): `#F7F5F1`
- Grigio chiaro: `#E8E6E0`
- Grigio medio (testi secondari): `#A6A39A`
- Antracite (titoli/testo primario): `#2B2A27`
- Terracotta (accento, solo micro-dettagli come hover su link, mai su superfici larghe): `#B8623C`

## Struttura del sito
3 pagine principali + schede progetto individuali:

### 1. Home
- Hero con transizione tra più foto (non immagine statica singola): dissolvenza lenta e silenziosa, nessun controllo visibile (no frecce, no dots, no contatore), coerente con il tono sobrio del sito
- Frase-manifesto breve sotto l'hero (non un paragrafo)
- Selezione di lavori in evidenza

### 2. Lavori
- 4–5 progetti conclusi + un paio in corso
- Griglia di anteprime **non cliccabili nello stile visivo**: foto in bianco e nero, nome progetto, categoria (es. RESIDENZIALE, RICETTIVA) — nessun altro elemento visibile nella griglia
- Ogni progetto ha una pagina di dettaglio propria

#### Interazione anteprime → dettaglio
- A riposo: card in bianco e nero, nessun segnale UI esplicito (niente bordi, niente overlay "vedi progetto", niente cursore speciale)
- Hover (desktop): dissolvenza dal bianco e nero al colore, 450–600ms, easing morbido; il cursore diventa pointer solo in questo momento
- Click: si entra nella scheda di dettaglio, dove l'immagine è già a colori (coerenza con l'hover)
- Mobile (no hover): la card resta in bianco e nero fino al tap; il colore appare direttamente nella scheda di dettaglio
- Accessibilità: focus state via tastiera con outline sottile (non un effetto colore) sulla card

#### Scheda progetto (dettaglio)
- Immagine hero a piena larghezza, a colori
- Blocco informativo discreto: cliente, anno, superficie, ruolo — impaginato come lista a due colonne, non una tabella vera

### 3. Studio (Chi siamo)
- Niente foto dei professionisti
- Testo introduttivo del gruppo (testo fornito dal cliente, da adattare):
  - Colonna di testo stretta, 60–65 caratteri per riga (circa 500–600px), non a piena larghezza
  - Margini ampi e asimmetrici intorno alla colonna
  - 2–3 paragrafi brevi, interlinea 1.6–1.8, corpo 17–18px
  - Eventualmente una frase chiave isolata in corpo molto più grande (anche corsivo) per spezzare il ritmo di lettura
- Sotto, separato da un filo sottile, elenco minimal dei tre professionisti:
  - NOME COGNOME (maiuscolo) + professione (minuscolo) sotto ciascuno
  - Spazio verticale ampio tra un nome e l'altro

Dopo l'elenco professionisti, sezione servizi ("cosa facciamo"): lista tipografica minimal coerente con il resto della pagina (non card/icone), pensata per un elenco breve (8-10 voci, senza descrizioni lunghe)

## Informazioni in sospeso (non bloccanti per il design)
- Elenco servizi dettagliato — in attesa dal cliente (collocazione decisa: sezione dedicata nella pagina Studio, dopo l'elenco professionisti)
- Contatti definitivi: email, telefono, indirizzo, social — in attesa dal cliente
- Procedere con segnaposto per questi contenuti fino a conferma del cliente
- Frase-manifesto definitiva — placeholder attuale: "Progettiamo luoghi che durano."
- Foto reali dei progetti — placeholder: picsum.photos

---

## Stato implementazione

### Stack tecnico definitivo
- **Framework:** Next.js 16 + TypeScript strict, App Router, SSG
- **Cartella progetto:** `tecnochianti-web/` (subfolder del repo)
- **Branch sviluppo:** `develop` — mai push diretto su `main`
- **Font:** `next/font/google` — Fraunces (variable, display) + Work Sans (400/500)
- **Stile:** CSS Modules + CSS custom properties globali in `globals.css`. Nessun framework CSS.
- **Immagini:** `next/image` con `remotePatterns` per picsum.photos (placeholder)

### Decisioni design prese in implementazione
- Header: trasparente con testo bianco sull'hero → backdrop-blur + sfondo carta su scroll. Prop `alwaysDark` per pagine senza hero.
- ProjectCard: `cursor: default` a riposo, `cursor: pointer` solo on hover (contemporaneamente al colore)
- Hero crossfade: `transition: opacity 1500ms` (CSS), `setInterval 6000ms`, z-index gestisce sovrapposizione
- Manifesto: `clamp(2.25rem, 5.5vw, 4.75rem)` — minimo 36px anche su mobile (sopra soglia leggibilità Fraunces 200)

### Pagine completate
- ✅ **Home** — hero slideshow, manifesto, 3 lavori in evidenza, footer
  - Footer: 3 colonne (brand+descrizione / nav / social+contatti+legal), padding generoso, elemento visivo di chiusura
- ✅ **Lavori** — griglia 2 colonne, progetti conclusi + sezione "in corso" con divisore, titolo Fraunces 200, contatore progetti. Dati centralizzati in `src/data/projects.ts`.
- ✅ **Studio** — testo intro (colonna 58ch, margini asimmetrici), pull quote Fraunces italic, elenco 3 professionisti, lista 10 servizi tipografica. Tutto con testo placeholder da sostituire con contenuti del cliente.
- ✅ **Lavori/[slug]** — hero a colori (75svh), info grid 2 colonne (cliente/anno/superficie/ruolo), descrizione, galleria opzionale, back link. SSG con generateStaticParams.

## Sessione 2026-07-16 — Sito online, pagina "in costruzione"

Sito pubblicato su **www.tecnochianti.it**, ma contenuti non ancora pronti per il pubblico. Per bloccare l'accesso alle pagine reali fino al lancio definitivo:

- **`src/app/in-costruzione/page.tsx`** — pagina segnaposto coerente col design (logo, divisore terracotta, titolo, sottotitolo, copyright). `robots: noindex`.
- **`src/proxy.ts`** — Next.js 16 ha rinominato `middleware.ts` in `proxy.ts` (stessa funzione, deprecazione da leggere in `node_modules/next/dist/docs/` per progetti su questa versione). Fa `rewrite` di ogni richiesta verso `/in-costruzione` (URL nella barra indirizzi non cambia), escludendo asset statici/favicon.
- **Per riattivare il sito completo:** eliminare `src/proxy.ts`.
- Merge `develop` → `main` fatto ed eseguito push origin/main su esplicita richiesta del cliente per questa occasione (deroga puntuale alla regola "mai push diretto su main").
