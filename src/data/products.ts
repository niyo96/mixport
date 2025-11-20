import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    slug: 'pioneer-ddj-flx10',
    name: 'Pioneer DDJ-FLX10',
    category: 'DJ-Controller',
    shortDescription: 'Professioneller 4-Kanal DJ-Controller für rekordbox und Serato DJ Pro.',
    longDescription: 'Du planst eine Party, Hochzeit oder ein Event und brauchst professionelles DJ-Equipment? Ich biete hier einen Pioneer DDJ-FLX10 4-Kanal-Profi-DJ-Controller zur Miete an.',
    priceInfo: 'ab 100€ / Tag',
    priceTiers: [
      { duration: '1 Tag (24h)', price: 100 },
      { duration: '2 Tage', price: 150 },
      { duration: '3 Tage', price: 200 },
      { duration: '1 Woche (7 Tage)', price: 350 },
    ],
    rentalConditions: {
      deposit: 750,
      paymentMethods: ['PayPal', 'Apple Pay', 'Google Pay', 'Kreditkarte (Visa, Mastercard, Amex)'],
      requirements: [
        'Mindestalter 18 Jahre',
        'Fester Wohnsitz in Deutschland',
        'Gültiger Personalausweis (wird bei Abholung dokumentiert)',
        'Abschluss eines schriftlichen Mietvertrages bei Übergabe',
      ],
    },
    technicalData: {
      'Software': 'rekordbox, Serato DJ Pro',
      'Kanäle': '4',
      'Jog-Wheel': '206 mm mit On-Jog-Display',
      'Effekte': 'Beat FX, Sound Color FX',
      'Anschlüsse': '2x USB-C, XLR, Cinch, Klinke',
    },
    benefits: [
      'Track-Separation für Mashups',
      'Erweiterte DMX-Lichtsteuerung',
      'MAGVEL FADER für präzises Scratchen',
      'Umfassende Anschlussmöglichkeiten',
    ],
    imageUrl: '/assets/images/ddj-flx10/pc-cgi_top.png',
  }
];
