// Centralna treść strony — łatwa do edycji bez dotykania komponentów.

const base = import.meta.env.BASE_URL;

export const IMAGES = {
  heroPortrait: `${base}widok_gabinetu.jpg`,
  team1: `${base}pani_stomatolog.jpg`,
  team2: `${base}pani_kosmetolog.jpg`,
  galleryReception: `${base}widok_gabinetu.jpg`,
  galleryTreatment: `${base}lekarki.jpg`,
  galleryDetails: `${base}pani_kosmetolog.jpg`,
};

export const ANNOUNCEMENT = {
  label: 'Promocja:',
  text: 'niższe ceny na wybrane zabiegi stomatologiczne i kosmetologiczne.',
  cta: 'Zobacz cennik',
  href: '#cennik',
};

export const NAV_LINKS = [
  { label: 'Oferta', href: '#oferta' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Zespół', href: '#zespol' },
  { label: 'Wnętrza', href: '#wnetrza' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const VALUES = [
  {
    title: 'Precyzja',
    desc: 'Diagnostyka i leczenie oparte na mikroskopie, cyfrowym skanowaniu i sprawdzonych protokołach.',
  },
  {
    title: 'Spokój',
    desc: 'Kameralny gabinet, pełna prywatność i wizyty prowadzone bez pośpiechu.',
  },
  {
    title: 'Jakość',
    desc: 'Materiały i preparaty wyłącznie od renomowanych, certyfikowanych producentów.',
  },
];

export const TEAM = [
  {
    role: 'Stomatologia',
    name: 'lek. dent. Magdalena Kremblewska',
    bio: 'Specjalistka z wieloletnim stażem, pasjonatka nowoczesnej endodoncji i stomatologii estetycznej. Prowadzi leczenie spokojnie i w pełnym dialogu z pacjentem.',
    img: IMAGES.team1,
    flip: false,
  },
  {
    role: 'Kosmetologia',
    name: 'mgr Agnieszka Pawełkiewicz',
    bio: 'Ekspertka w dziedzinie zaawansowanej kosmetologii pielęgnacyjnej oraz terapii przeciwstarzeniowych. Dobiera zabiegi indywidualnie, z myślą o naturalnym efekcie.',
    img: IMAGES.team2,
    flip: true,
  },
];

export const OFFER = {
  stom: {
    label: 'Stomatologia',
    items: [
      { title: 'Profilaktyka i higienizacja', desc: 'Skaling, piaskowanie, indywidualny plan higieny' },
      { title: 'Stomatologia zachowawcza', desc: 'Estetyczne wypełnienia i odbudowa zębów' },
      { title: 'Endodoncja pod mikroskopem', desc: 'Precyzyjne leczenie kanałowe' },
      { title: 'Protetyka i implantologia', desc: 'Trwałe uzupełnienie braków' },
      { title: 'Stomatologia dziecięca', desc: 'Opieka w przyjaznej atmosferze' },
    ],
    aside: {
      title: 'Sprawdź ceny zabiegów',
      desc: 'Aktualny cennik stomatologiczny, wraz z bieżącymi promocjami, znajdziesz w sekcji Cennik.',
      cta: 'Zobacz cennik',
      icon: '→',
      href: '#cennik',
    },
  },
  kosm: {
    label: 'Kosmetologia',
    items: [
      { title: 'Konsultacja i diagnostyka skóry', desc: 'Indywidualny plan pielęgnacji' },
      { title: 'Peelingi medyczne', desc: 'Odnowa i rozświetlenie cery' },
      { title: 'Mezoterapia igłowa', desc: 'Głębokie nawilżenie i rewitalizacja' },
      { title: 'Terapie przeciwstarzeniowe', desc: 'Zabiegi anti-aging' },
      { title: 'Modelowanie sylwetki', desc: 'Zabiegi na ciało' },
    ],
    aside: {
      title: 'Konsultacja indywidualna',
      desc: 'Ceny zabiegów ustalamy indywidualnie po konsultacji wstępnej i ocenie potrzeb.',
      cta: 'Umów konsultację',
      icon: '→',
      href: '#kontakt',
    },
  },
};

// Przykładowe ceny — podmień na własne. Pole `oldPrice` włącza znacznik promocji.
export const CENNIK = {
  stom: {
    label: 'Stomatologia',
    items: [
      { title: 'Przegląd i konsultacja', price: '100 zł', oldPrice: '150 zł' },
      { title: 'Skaling i piaskowanie', price: '250 zł' },
      { title: 'Wypełnienie ubytku', price: '220 zł', oldPrice: '350 zł' },
      { title: 'Leczenie kanałowe (endodoncja)', price: 'od 600 zł' },
      { title: 'Korona protetyczna', price: 'od 900 zł' },
      { title: 'Wybielanie zębów', price: '400 zł' },
    ],
    note: 'Ostateczna cena zależy od zakresu zabiegu i jest ustalana podczas konsultacji.',
  },
  kosm: {
    label: 'Kosmetologia',
    items: [
      { title: 'Konsultacja kosmetologiczna', price: '100 zł' },
      { title: 'Peeling medyczny', price: '250 zł', oldPrice: '320 zł' },
      { title: 'Mezoterapia igłowa', price: '350 zł' },
      { title: 'Terapia przeciwstarzeniowa', price: 'od 450 zł' },
      { title: 'Modelowanie sylwetki', price: '300 zł', oldPrice: '400 zł' },
    ],
    note: 'Ceny zabiegów kosmetologicznych ustalamy indywidualnie po konsultacji.',
  },
};

export const GALLERY = [
  { src: IMAGES.galleryReception, alt: 'Recepcja', large: true },
  { src: IMAGES.galleryTreatment, alt: 'Gabinet zabiegowy', large: false },
  { src: IMAGES.galleryDetails, alt: 'Detale wnętrza', large: false },
];

export const CONTACT = {
  address: ['ul. Koronowska 42', '85-405 Bydgoszcz'],
  phones: [
    { number: '+48 52 123 45 67', tag: 'Stomatologia' },
    { number: '+48 789 456 123', tag: 'Kosmetologia' },
  ],
  email: 'recepcja@gabinetykorona.pl',
  note: 'Bezpłatny parking dla pacjentów bezpośrednio przy budynku.',
  services: ['Stomatologia', 'Kosmetologia', 'Inne / pytanie ogólne'],
};

export const FOOTER_COLUMNS = [
  {
    title: 'Oferta',
    links: ['Stomatologia zachowawcza', 'Endodoncja', 'Protetyka', 'Kosmetologia twarzy'],
  },
  {
    title: 'Klinika',
    links: ['O nas', 'Zespół', 'Wnętrza', 'Kontakt'],
  },
  {
    title: 'Informacje',
    links: ['RODO', 'Polityka prywatności', 'Regulamin', 'Dojazd'],
  },
];
