'use server'

import { Resend } from 'resend'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/routes'

// Configurazione in .env.local (sviluppo) e nelle variabili d'ambiente di Vercel:
//   RESEND_API_KEY      chiave API di Resend
//   CONTACT_FROM        mittente, es. "TecnoChianti · Contatti <contatti@tecnochianti.it>"
//                       (finché il dominio non è verificato: "onboarding@resend.dev")
//   CONTACT_RECIPIENTS  destinatari separati da virgola
// I destinatari restano sul server: non compaiono mai nel codice del sito.

export interface ContactFormValues {
  firstName: string
  lastName: string
  email: string
  message: string
}

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message: string
  // Dopo l'invio React svuota il form: in caso di errore restituiamo i valori
  // inseriti, così il form li ripropone e l'utente non deve riscrivere tutto
  values?: ContactFormValues
}

const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getField(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Lingua della pagina da cui arriva il messaggio (campo nascosto del form)
  const locale: Locale = getField(formData, 'locale') === 'en' ? 'en' : 'it'
  const t = getDictionary(locale).form

  // Campo nascosto "website": le persone non lo vedono, i bot lo compilano.
  // Rispondiamo come se fosse andato tutto bene, così il bot non riprova.
  if (getField(formData, 'website')) {
    return { status: 'success', message: t.success }
  }

  const firstName = getField(formData, 'firstName')
  const lastName = getField(formData, 'lastName')
  const email = getField(formData, 'email')
  const message = getField(formData, 'message')
  const privacyAccepted = formData.get('privacy') === 'on'
  const values: ContactFormValues = { firstName, lastName, email, message }

  if (!firstName || !lastName || !email || !message) {
    return { status: 'error', message: t.errorRequired, values }
  }
  if (firstName.length > MAX_NAME_LENGTH || lastName.length > MAX_NAME_LENGTH) {
    return { status: 'error', message: t.errorNameLength, values }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: t.errorEmail, values }
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { status: 'error', message: t.errorMessageLength(MAX_MESSAGE_LENGTH), values }
  }
  if (!privacyAccepted) {
    return { status: 'error', message: t.errorPrivacy, values }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM
  const recipients = (process.env.CONTACT_RECIPIENTS ?? '')
    .split(',')
    .map(address => address.trim())
    .filter(Boolean)

  // Messaggio di errore con i contatti diretti, usato sia per configurazione mancante
  // sia per errori di invio
  const fallbackError: ContactFormState = {
    status: 'error',
    message: t.errorSend,
  }

  if (!apiKey || !from || recipients.length === 0) {
    console.error('Form contatti: variabili RESEND_API_KEY, CONTACT_FROM o CONTACT_RECIPIENTS mancanti')
    return { ...fallbackError, values }
  }

  const resend = new Resend(apiKey)
  // Email solo testo: quello che scrive l'utente non viene mai interpretato come HTML
  const { error } = await resend.emails.send({
    from,
    to: recipients,
    replyTo: email,
    subject: `Messaggio dal sito da ${firstName} ${lastName}`,
    text: [
      `Nome: ${firstName} ${lastName}`,
      `Email: ${email}`,
      // L'email allo studio è sempre in italiano: si indica solo la lingua del sito usata
      `Lingua del sito: ${locale === 'en' ? 'inglese' : 'italiano'}`,
      '',
      message,
      '',
      '—',
      'Inviato dal form contatti di tecnochianti.it. Per rispondere usa "Rispondi".',
    ].join('\n'),
  })

  if (error) {
    console.error('Form contatti: invio non riuscito', error)
    return { ...fallbackError, values }
  }

  return { status: 'success', message: t.success }
}
