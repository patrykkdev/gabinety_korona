// Centralna treść strony — łatwa do edycji bez dotykania komponentów.
// Zdjęcia: w realnym wdrożeniu podmień na lokalne pliki w /src/assets.

export const IMAGES = {
  heroPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC-CSCB3BwAB2LRQoA5UuRCYx4yW_Raegor_E-BgIXDzph84be6WXhTfZmIKhFBwp2gJJd44_CZW6rN2CTgbQ8BRNyBbysWx44Sd1aC8EvvraTxeQ4VEc5pGaPvwHNpf9TO0k2hlhfzo2wBcleJ8jQrN5-kbNkplw8-Q_RFIVVadghzfJ9yyExr0_yphjqpMHy9VYhj0xJo9fSeZ0Fds1w30bJxQwNVjx3Z9ecHo1upjIucojdSVxeI57l7qy7uZsZra4-BUBV5RLs',
  team1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDxnSN0kBEhTLhsZVdIrxroxlsNI71k2xoNtKi6Zl6GV63Zf0a5Jy8lhHx4z9eMGDN_M99WSXVtEQGLepTj-7B6rVzHOgq1BJ_Uw74pfRbd9057LrCnMW4-V24eWx8Wq5wG5I59gAVuRaKScCdFrjpo4ZNDBI_3uauDycwDCPPo-iFRUxcVuVQ4s9-CwhJHd7tHgqaSpGQIoSe0LxLvaCpBseFtknqsdSffEAYUJ3ZlE9TfmWRs-P22pVn3_N98MFgvhsBb9LA_Hhw',
  team2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCeUQr1f7X0uQfcYFbLAPExWvlJHmRUrjyfWDaBdcNcHdFPRMd6jDRkU8u4V5P2nyXtN4J1GRGHFVXY6sWj7ulzx79mqvSnfxDGjfTq7Sz4k1c8PAcR0ROIv6_POyU5D2CXNrsjKSmZFYfR_N4Y5sJaDhC1AX7fmvVcP2HpKKrpy4mJGtMgX14Wr30f6_4JtaKTOHUz0f3YeMISyHCGIYH49QCEgntp2JMbIdITOqkZlkQZ-w9NlQfZbIbNrBRYKl-kjOORIHk3jmw',
  galleryReception:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQDjYRO4y6hKGpe1gW6mdlbJAHrhmWUtxxjPRZA5TzxNwKqKYhczOKJXgb0T-vA0tcYdGfBvOqRv3PITtTeVxGx-oyKyGjQMDR4L7xb0CDtvqAbjU1bzMBlbzb4MTKLSf4SxUQJVzxRae0Ts23ETKTvfQUmAjszWpVsGaiPm3JAlq3rp4RiXV2gXv9s_lmClMpa5ABxYRCoJcQSSMJGsc-TiHaWxJGK3sACSnT1d5gOlHpZYN0KOLsF8pbiXW6L-8fRkuF8PLR5M',
  galleryTreatment:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQkQJCYSIzvoup27iCzLgECtB55_aH3mYAJhlLvk0FXv4LCSS8Ta6rLIhuWSLxwEFzDdC16bmDdgVqHoxjm29NqHaveZHGjqXXxTz_HtHfyiVrT-8seCuvuYPkMhJGbkfqchytx4clojRK_OcSkP4FGk5dytPJHiGlLNxOOnfZlwrQ-eMsbM2p9RBt_6dY3XIQ5FI8WmfGPg6ULTVoQ6ON0-hZfeiBR4yXn17MmNUKs1JdjvOa46jxHQapZR-DuEUlOLmfCl7TBAE',
  galleryDetails:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAzrIRvBEJUgPbgLspTWmwmOsrBgp4sfGdvzsVRn-6RD_a9-mtsPrs55TMUa5gF_K49E7hRaTECgcERsz5-JejkAsgP_o5QvxIy7k9vruzSoz1D6JBd7Req3dU46XbrDbI2jaWIRG3O3MAIY8Ju1kisx94ubaISV_flEFUxGiygh3q4sBuh7go2mxhT_D5DpgU1B8zmprszuolOHSoQjYto6fl53wd97888yreqcIUxld80pHDmPiIbMLuW2NbbWZ8mjvj33rcMmC4',
};

export const NAV_LINKS = [
  { label: 'Oferta', href: '#oferta' },
  { label: 'Zespół', href: '#zespol' },
  { label: 'Wnętrza', href: '#wnetrza' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const HERO_META = [
  { label: 'Praktyka', value: 'od 2009 roku' },
  { label: 'Adres', value: 'ul. Koronowska 42' },
  { label: 'Godziny', value: 'Pon–Pt 8:00–20:00' },
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
      title: 'Pełen cennik',
      desc: 'Pobierz szczegółowe zestawienie cen usług stomatologicznych w formacie PDF.',
      cta: 'Pobierz cennik',
      icon: '↓',
      href: '#kontakt',
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

export const HOURS = [
  { day: 'Poniedziałek – Czwartek', time: '08:00 — 20:00', closed: false },
  { day: 'Piątek', time: '08:00 — 16:00', closed: false },
  { day: 'Sobota – Niedziela', time: 'Zamknięte', closed: true },
];

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
