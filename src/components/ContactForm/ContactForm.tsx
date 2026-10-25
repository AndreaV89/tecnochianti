'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { sendContactMessage, type ContactFormState } from '@/app/contatti/actions'
import styles from './ContactForm.module.css'

const initialState: ContactFormState = { status: 'idle', message: '' }

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState)
  const values = state.values

  if (state.status === 'success') {
    return (
      <p className={styles.success} role="status">
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>Nome</label>
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
          <label htmlFor="lastName" className={styles.label}>Cognome</label>
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
        <label htmlFor="email" className={styles.label}>Email</label>
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
        <label htmlFor="message" className={styles.label}>Messaggio</label>
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
        <label htmlFor="website">Sito web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className={styles.privacy}>
        <input type="checkbox" name="privacy" required className={styles.checkbox} />
        <span>
          Ho letto l&apos;<Link href="/privacy" className={styles.privacyLink}>informativa privacy</Link> e
          acconsento al trattamento dei dati per ricevere una risposta.
        </span>
      </label>

      {state.status === 'error' && (
        <p className={styles.error} role="alert">{state.message}</p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? 'Invio in corso…' : 'Invia messaggio'}
      </button>
    </form>
  )
}
