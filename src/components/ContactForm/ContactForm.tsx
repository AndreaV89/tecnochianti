'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { sendContactMessage, type ContactFormState } from '@/lib/contact-action'
import { getDictionary } from '@/i18n/dictionaries'
import { routePath, type Locale } from '@/i18n/routes'
import styles from './ContactForm.module.css'

const initialState: ContactFormState = { status: 'idle', message: '' }

interface Props {
  locale: Locale
}

export default function ContactForm({ locale }: Props) {
  const t = getDictionary(locale).form
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
      {/* Lingua della pagina: la Server Action risponde con i messaggi nella stessa lingua */}
      <input type="hidden" name="locale" value={locale} />

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
