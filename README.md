# Gabinety Korona — Vite + React + CSS Modules

Strona kliniki stomatologiczno-kosmetologicznej. Ciemny, redakcyjny styl
(morski akcent + złote detale), typografia Hanken Grotesk + Newsreader.

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski (http://localhost:5173)
npm run build    # build produkcyjny do /dist
npm run preview  # podgląd buildu
```

Wymaga Node 18+.

## Struktura

```
gabinety-korona/
├─ index.html                  # wpięcie fontów Google + #root
├─ vite.config.js              # plugin React + CSS Modules (camelCase)
├─ src/
│  ├─ main.jsx                 # bootstrap React
│  ├─ App.jsx                  # kompozycja sekcji + konfiguracja motywu (THEME)
│  ├─ App.module.css           # tło + warstwa ziarna
│  ├─ styles/
│  │  └─ global.css            # reset + zmienne motywu (design tokens)
│  ├─ data/
│  │  └─ content.js            # cała treść (teksty, zdjęcia, dane sekcji)
│  └─ components/
│     ├─ Reveal.jsx            # animacja wejścia przy scrollu (IntersectionObserver)
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ Philosophy.jsx
│     ├─ Team.jsx
│     ├─ Offer.jsx             # taby Stomatologia / Kosmetologia (useState)
│     ├─ Hours.jsx
│     ├─ Gallery.jsx
│     ├─ Contact.jsx           # kontrolowany formularz (useState)
│     └─ Footer.jsx
└─ (każdy komponent ma własny *.module.css)
```

## Motyw / "tweaki"

W `src/App.jsx` jest obiekt `THEME`:

```js
const THEME = {
  accent: 'teal',     // 'teal' | 'gold' | 'sand'
  shape: 'organic',   // 'organic' | 'straight'  — kształt zdjęć hero/zespołu
  texture: true,      // subtelne ziarno na całej stronie
};
```

`accent` i `shape` ustawiają atrybuty `data-accent` / `data-shape` na korzeniu,
a wartości motywu są zdefiniowane jako zmienne CSS w `src/styles/global.css`.

## Treść i zdjęcia

Wszystkie teksty oraz adresy zdjęć są w `src/data/content.js`.
Zdjęcia są obecnie podlinkowane zewnętrznie (placeholdery z poprzedniej wersji).
Do wdrożenia produkcyjnego wrzuć własne pliki do `src/assets/` i zaimportuj je
w `content.js`, np.:

```js
import heroPortrait from '../assets/hero.jpg';
export const IMAGES = { heroPortrait, /* ... */ };
```

## Formularz

`Contact.jsx` to kontrolowany formularz (stan w `useState`). `handleSubmit`
blokuje przeładowanie strony — podłącz tam wysyłkę do swojego backendu lub
usługi mailowej (np. Formspree, własne API).
