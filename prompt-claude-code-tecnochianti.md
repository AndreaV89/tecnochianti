Voglio che tu mi aiuti a costruire il sito portfolio per TecnoChianti, uno studio tecnico di architettura/ingegneria. Trovi tutte le informazioni di contesto (cliente, contenuti, direzione design, decisioni già prese) nel file `tecnochianti-brief.md` allegato: leggilo per intero prima di iniziare.

## Cosa voglio in questa prima fase

Non scrivere subito tutto il sito. Procediamo per step:

1. **Inizializza il progetto Next.js** con TypeScript, App Router, e organizza fin da subito una struttura di cartelle pulita per componenti riutilizzabili (header, footer, card progetto). Crea anche la repo su GitHub e collegala al progetto locale con il primo commit.

2. **Imposta il sistema tipografico e il design system** come da brief: Fraunces (variable, pesi 200-300 per i titoli/display) e Work Sans (400/500 per corpo testo e label), caricati tramite `next/font/google`. Definisci design token CSS per i due font, i pesi, e la palette colori (carta, grigio chiaro, grigio medio, antracite, terracotta) come variabili CSS globali.

3. **Costruisci la Home** per prima, seguendo la struttura descritta nel brief: header, hero con transizione tra più foto (dissolvenza lenta, nessun controllo visibile), frase-manifesto, sezione lavori in evidenza, footer. Usa immagini segnaposto per ora.

4. Fermati dopo la Home e fammi vedere il risultato prima di proseguire.

## Qualità del design
Questo è un sito vetrina per professionisti che devono trasmettere autorevolezza e gusto. Usa tutto ciò che è in tuo potere per realizzare un design di alto livello: cura maniacale dei dettagli tipografici (spaziature, proporzioni, ritmo verticale), whitespace generoso, transizioni fluide, ottimizzazione immagini con `next/image`. Il risultato deve sembrare il sito di uno studio di architettura internazionale, non un template generico.

## Vincoli tecnici
- Next.js + TypeScript, App Router, SSG dove possibile
- Deploy su Vercel — tienine conto nella configurazione
- Usa `next/image` per tutte le immagini
- Usa `next/font` per i Google Font
- Componenti piccoli e riutilizzabili, niente librerie pesanti se non strettamente necessarie
- Segui scrupolosamente le indicazioni di interazione descritte nel brief (anteprime progetto B/N a riposo, dissolvenza al colore in hover) anche se le implementeremo nelle pagine successive — tienile a mente nell'architettura dei componenti

Se qualcosa nel brief non è abbastanza specifico per procedere, chiedimi prima di assumere.
