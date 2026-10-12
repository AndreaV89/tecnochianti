// Contatti dello studio: unico punto da modificare.

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
  // Non mostrati sul sito finché il cliente non conferma (e a chi corrispondono)
  mobiles: Phone[]
  emails: string[]
}

export const contacts: Contacts = {
  address: {
    street: 'Via Guido Rossa 19',
    postalCode: '53017',
    city: 'Radda in Chianti',
    province: 'SI',
  },
  phone: { display: '+39 0577 738486', href: '+390577738486' },
  mobiles: [
    { display: '+39 335 7637389', href: '+393357637389' },
    { display: '+39 349 3929314', href: '+393493929314' },
    { display: '+39 333 1107207', href: '+393331107207' },
  ],
  emails: [
    'c.matassini@tecnochianti.it',
    'e.bove@tecnochianti.it',
    'arch.riccardopanichi@gmail.com',
  ],
}
