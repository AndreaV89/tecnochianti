// Contatti dello studio: unico punto da modificare.
// I campi lasciati vuoti ('') non compaiono sul sito.

export interface Phone {
  // Formato leggibile, mostrato sul sito
  display: string
  // Formato per il link tel:
  href: string
}

export interface Contacts {
  address: {
    street: string
    postalCode: string
    city: string
    province: string
  }
  phone: Phone
  // Email generale dello studio
  email: string
}

export const contacts: Contacts = {
  address: {
    street: 'Via Guido Rossa 19',
    postalCode: '53017',
    city: 'Radda in Chianti',
    province: 'SI',
  },
  phone: { display: '+39 0577 738486', href: '+390577738486' },
  email: 'info@tecnochianti.it',
}
