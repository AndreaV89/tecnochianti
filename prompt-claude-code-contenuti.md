Ora inseriamo nel sito i contenuti reali dei progetti. Prima di iniziare leggi `tecnochianti-brief.md` e `tecnochianti-contenuti-progetti.md`, che trovi nella cartella del progetto. Non cambiare il design già realizzato: questa fase riguarda solo i contenuti.

## Step 1 — Foto

Le foto originali sono in `/Users/andreavannetti/Library/Mobile Documents/com~apple~CloudDocs/Lavoro/02_Clienti/TecnoChianti/tecnochianti.it/Materiali`, con una sottocartella per progetto. Quella cartella è fuori dal progetto e non va modificata in nessun modo: leggi soltanto.

1. Elenca le sottocartelle e abbinale agli slug presenti in `tecnochianti-contenuti-progetti.md` (`beretuzzo`, `palazzo-al-bosco`, `complesso-gaiole`, `cantina-le-prata`). Mostrami l'abbinamento e aspetta la mia conferma prima di procedere.
2. Scrivi uno script in `scripts/` basato su `sharp` che, per ogni foto:
   - salta i file che non sono immagini (Thumbs.db e simili)
   - applica la rotazione indicata nei dati EXIF
   - ridimensiona a massimo 2400 px sul lato lungo, senza ingrandire le foto più piccole
   - converte in WebP con qualità 80
   - rimuove tutti i metadati (GPS compreso)
   - salva in `public/progetti/<slug>/` con nomi progressivi (`01.webp`, `02.webp`…)

   Il percorso della cartella sorgente va passato come argomento, così posso rilanciare lo script in futuro se arrivano nuove foto.

3. Alla fine mostrami, per ogni progetto, il numero di foto e il peso totale prima e dopo.

## Step 2 — Pagina di scelta foto (temporanea)

Crea una pagina `/anteprima-foto`, esclusa dalla navigazione e con `noindex`, che mostra tutte le foto di ogni progetto in una griglia con il nome del file sotto. Mi serve per scegliere la copertina di ogni progetto e le foto della hero della Home. Per ora usa `01.webp` come copertina di ogni progetto e la `01.webp` di ciascun progetto per la hero: le cambierò io dopo aver visto le foto.

## Step 3 — Contenuti dei progetti

Inserisci i 4 progetti usando i testi di `tecnochianti-contenuti-progetti.md` così come sono, senza riscriverli. Organizza i dati in un unico file tipizzato (per esempio `src/data/progetti.ts`) con, per ogni progetto: slug, nome, categoria, stato, luogo, intervento, anno, abstract, paragrafi, dati della scheda, copertina e lista delle foto. Copertina e foto della hero devono essere modificabili cambiando solo un nome file in questo file.

I campi segnati **[DA CONFERMARE]** non devono mai comparire sul sito:

- se un dato manca (per esempio l'anno o il luogo della Cantina Le Prata), lascia il campo vuoto e non mostrare quella riga nella scheda
- per i nomi provvisori usa quello indicato nel file (per esempio "Complesso a Gaiole in Chianti")
- Gaiole va mostrato come progetto in corso; per Cantina Le Prata lascia lo stato vuoto

Nella pagina Lavori rispetta quanto previsto dal brief: griglia con solo foto in bianco e nero, nome e categoria, passaggio al colore in hover e scheda di dettaglio a colori. Nella scheda di dettaglio usa tutte le foto del progetto.

## Step 4 — Contatti

Inserisci i contatti in un unico file di configurazione (per esempio `src/data/contatti.ts`), così da poterli modificare in un solo punto. Mostra nel footer indirizzo, telefono fisso e le tre email. I cellulari salvali nel file ma non mostrarli finché il cliente non conferma.

## Come procedere

- Usa le skill e gli strumenti che hai a disposizione per mantenere il livello di qualità del design già realizzato.
- Fermati alla fine dello Step 1 per la conferma dell'abbinamento cartelle-slug, e alla fine dello Step 4 per farmi vedere il risultato in locale.
- Fai un commit separato per ogni step.
- Se qualcosa non è chiaro, chiedimi prima di assumere.
