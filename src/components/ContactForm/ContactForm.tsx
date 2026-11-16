'use client'

import { useActionState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { unstable_isUnrecognizedActionError } from 'next/navigation'
import {
  sendContactMessage,
  type ContactFormState,
  type ContactFormValues,
} from '@/lib/contact-action'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './ContactForm.module.css'

const initialState: ContactFormState = { status: 'idle', message: '' }

interface Props {
  locale: Locale
}

function readValues(formData: FormData): ContactFormValues {
  const read = (name: string): string => {
    const value = formData.get(name)
    return typeof value === 'string' ? value : ''
  }
  return {
    firstName: read('firstName'),
    lastName: read('lastName'),
    email: read('email'),
    message: read('message'),
  }
}

export default function ContactForm({ locale }: Props) {
  const t = getDictionary(locale).form

  // Errori imprevisti (sito aggiornato mentre la pagina era aperta, connessione caduta):
  // senza questo try/catch la pagina andrebbe in crash e il testo scritto si perderebbe.
  // Così invece compare il solito messaggio di errore e i campi restano compilati.
  async function submit(previousState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    try {
      return await sendContactMessage(previousState, formData)
    } catch (error) {
      console.error('Form contatti: errore imprevisto', error)
      return {
        status: 'error',
        message: unstable_isUnrecognizedActionError(error) ? t.errorOutdated : t.errorSend,
        values: readValues(formData),
      }
    }
  }

  const [state, formAction, pending] = useActionState(submit, initialState)
  const values = state.values

  // Momento in cui il form è comparso, per il filtro antispam sul tempo di compilazione.
  // Si imposta nel browser e non al render: la pagina è statica e conterrebbe l'ora della build.
  // Il valore si scrive direttamente nel campo nascosto: in un campo hidden resta anche
  // quando React svuota il form dopo un invio con errore.
  const startedAtRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now())
    }
  }, [])

  if (state.status === 'success') {
    return (
      <p className={styles.success} role="status">
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className={styles.form}>
      {/* Lingua della pagina: la Server Action risponde con i messaggi nella stessa lingua */}
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="startedAt" ref={startedAtRef} />

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>{t.firstName}</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={100}
            defaultValue={values?.firstName}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>{t.lastName}</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            maxLength={100}
            defaultValue={values?.lastName}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>{t.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>{t.message}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          defaultValue={values?.message}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      {/* Campo trappola per i bot: nascosto alle persone e ai lettori di schermo */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">{t.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className={styles.privacy}>
        <input type="checkbox" name="privacy" required className={styles.checkbox} />
        <span>
          {t.privacyBefore}
          <Link href={routePath(locale, 'privacy')} className={styles.privacyLink}>{t.privacyLink}</Link>
          {t.privacyAfter}
        </span>
      </label>

      {state.status === 'error' && (
        <p className={styles.error} role="alert">{state.message}</p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? t.sending : t.submit}
      </button>
    </form>
  )
}
