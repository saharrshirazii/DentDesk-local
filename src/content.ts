// All copy and placeholder numbers live here so they are easy to change.
// Numbers are placeholders ("XX") until real figures are approved.

export const nav = [
  { label: 'Lösningar', href: '#losningar' },
  { label: 'Så fungerar det', href: '#funktioner' },
  { label: 'Säkerhet', href: '#sakerhet' },
  { label: 'Vanliga frågor', href: '#faq' },
]

export const hero = {
  eyebrow: 'För tandvårdskliniker',
  title: 'Ekonomin klar, så att du kan fokusera på patienterna',
  text: 'DentDesk tar hand om bokföring, avstämning och rapporter för din klinik. Det fungerar bredvid ditt journalsystem, utan dubbelregistrering.',
  primary: 'Boka demo',
  secondary: 'Se hur det fungerar',
}

export const stats = [
  { value: 'XX 000', label: 'kliniker i Norden' },
  { value: 'XX %', label: 'mindre tid på administration' },
  { value: 'XX %', label: 'nöjda kunder' },
]

export const features = [
  {
    id: 'bokforing',
    title: 'Bokföring som förstår tandvård',
    text: 'Tandvårdsstöd, högkostnadsskydd och momsfri vård hanteras som standard. Du får verifikationer och underlag som följer bokföringslagen.',
    points: [
      'Dagsavslut med kort, Swish och kontant',
      'Avstämning mot Försäkringskassan',
      'Underlag som sparas och går att spåra',
    ],
    art: 'ledger' as const,
  },
  {
    id: 'integration',
    title: 'Fungerar bredvid ditt journalsystem',
    text: 'Vi hämtar det som behövs, som bokningar, utförda åtgärder och betalningar, med läsbehörighet. Ingen behöver skriva in samma sak två gånger.',
    points: [
      'Skrivskyddad åtkomst och minimal data',
      'Så få steg som möjligt för kliniken',
      'Ett system mindre att granska och underhålla',
    ],
    art: 'sync' as const,
  },
  {
    id: 'rapporter',
    title: 'Rapporter du faktiskt använder',
    text: 'Se intäkter per behandlare, underlag för procentlön och status på fakturor. Allt på ett ställe och uppdaterat varje dag.',
    points: [
      'Intäkter per behandlare',
      'Underlag för procentlön',
      'Status på patientfakturor',
    ],
    art: 'report' as const,
  },
]

// Placeholder quotes and names until real customer testimonials are approved.
export const testimonials = {
  eyebrow: 'Vad kliniker säger',
  title: 'Därför väljer kliniker DentDesk',
  items: [
    {
      quote: 'Platshållare: Dagsavslutet gick från en timme till några minuter. Ersätts med ett godkänt kundcitat.',
      name: 'Namn Efternamn',
      role: 'Klinikägare',
      clinic: 'Tandklinik XX',
      result: 'XX %',
      resultLabel: 'mindre tid på dagsavslut',
    },
    {
      quote: 'Platshållare: Det var enkelt att komma igång utan att ändra rutinerna på kliniken.',
      name: 'Namn Efternamn',
      role: 'Praktikchef',
      clinic: 'Tandklinik XX',
    },
    {
      quote: 'Platshållare: Underlaget för procentlön stämmer äntligen varje månad.',
      name: 'Namn Efternamn',
      role: 'Tandläkare',
      clinic: 'Tandklinik XX',
      result: 'XX',
      resultLabel: 'timmar sparade per månad',
    },
    {
      quote: 'Platshållare: Avstämningen mot Försäkringskassan behöver vi inte tänka på längre.',
      name: 'Namn Efternamn',
      role: 'Ekonomiansvarig',
      clinic: 'Tandklinik XX',
    },
    {
      quote: 'Platshållare: Jag ser direkt vilka fakturor som är betalda och vilka som väntar.',
      name: 'Namn Efternamn',
      role: 'Receptionist',
      clinic: 'Tandklinik XX',
    },
    {
      quote: 'Platshållare: Vi slipper skriva in samma sak två gånger, och det märks i vardagen.',
      name: 'Namn Efternamn',
      role: 'Klinikägare',
      clinic: 'Tandklinik XX',
      result: 'XX %',
      resultLabel: 'färre manuella moment',
    },
  ] as {
    quote: string
    name: string
    role: string
    clinic: string
    result?: string
    resultLabel?: string
  }[],
}

export const solutions = [
  {
    title: 'Ekonomi',
    text: 'Bokföring, dagsavslut och avstämning anpassad för tandvård.',
    status: 'Först ut',
    art: 'coins' as const,
  },
  {
    title: 'Rapporter',
    text: 'Intäkter per behandlare och underlag för procentlön.',
    status: 'Först ut',
    art: 'chart' as const,
  },
  {
    title: 'Fakturering',
    text: 'Fakturering av patientens del med tydlig uppföljning.',
    status: 'På väg',
    art: 'invoice' as const,
  },
  {
    title: 'Marknadsföring',
    text: 'Enkla verktyg för att nå fler patienter.',
    status: 'Senare',
    art: 'megaphone' as const,
  },
]

export const security = [
  {
    title: 'Data i EU',
    text: 'All data lagras inom EU.',
  },
  {
    title: 'Skrivskyddad åtkomst',
    text: 'Vi läser bara det som behövs och undviker namn och personnummer.',
  },
  {
    title: 'Personuppgiftsbiträdesavtal',
    text: 'Avtal med alla underleverantörer och tydlig dokumentation av dataflöden.',
  },
]

export const faq = [
  {
    q: 'Vilka journalsystem fungerar DentDesk med?',
    a: 'Vi bygger integrationer mot de vanligaste journalsystemen i Norden. Kontakta oss så berättar vi vad som gäller för ditt system.',
  },
  {
    q: 'Behöver min klinik installera något?',
    a: 'Vi prioriterar anslutningar som inte kräver arbete från kliniken. Vad som behövs beror på ditt journalsystem.',
  },
  {
    q: 'Hur hanteras patientdata?',
    a: 'Vi använder skrivskyddad åtkomst och hämtar så lite data som möjligt. Data lagras inom EU och vi har personuppgiftsbiträdesavtal med våra underleverantörer.',
  },
  {
    q: 'Vad kostar det?',
    a: 'Pris: XX kr per månad. Detta är en platshållare tills prissättningen är beslutad.',
  },
  {
    q: 'Kan ni ta hand om bokföringen åt oss?',
    a: 'Ja, i den första fasen kan bokföringen utföras av en etablerad partner medan vårt eget system byggs. Hör av dig så går vi igenom vad som passar din klinik.',
  },
]

export const closing = {
  title: 'Redo att göra ekonomin enklare?',
  text: 'Boka en kort demo så visar vi hur DentDesk kan fungera på din klinik.',
  primary: 'Boka demo',
  secondary: 'Kontakta oss',
}

export const footer = {
  description:
    'DentDesk bygger ekonomi- och administrationsverktyg för tandvårdskliniker.',
  contact: [
    { label: 'E-post', value: 'info@dentdesk.se' },
    { label: 'Telefon', value: '+46 XX XXX XX XX' },
    { label: 'Adress', value: 'Gatuadress XX, XXX XX Stad' },
  ],
  columns: [
    {
      title: 'Produkt',
      links: ['Ekonomi', 'Rapporter', 'Fakturering'],
    },
    {
      title: 'Företag',
      links: ['Om oss', 'Säkerhet', 'Kontakt'],
    },
    {
      title: 'Resurser',
      links: ['Vanliga frågor', 'Integritetspolicy', 'Cookies'],
    },
  ],
}
