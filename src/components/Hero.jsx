import { IMAGES } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Hero.module.css';

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className={styles.eyebrow}>Stomatologia &amp; kosmetologia — Bydgoszcz</p>
            <h1 className={styles.title}>
              Gabinety <em className={styles.titleAccent}>Korona</em>
            </h1>
            <p className={styles.lead}>
              Kameralna klinika w sercu Bydgoszczy. Łączymy precyzję medyczną z troską o
              komfort — tak, by każda wizyta była spokojna i bez pośpiechu.
            </p>
            <div className={styles.actions}>
              <a href="#kontakt" className={styles.primary}>
                Umów wizytę <span className={styles.arrow}>→</span>
              </a>
              <a href="#oferta" className={styles.ghost}>
                Zobacz ofertę
              </a>
            </div>
          </Reveal>

          <Reveal className={styles.figure} delay={120}>
            <div className={styles.frameWrap}>
              <div className={styles.frame} aria-hidden="true" />
              <div className={styles.imageBox}>
                <img src={IMAGES.galleryReception} alt="Wnętrze gabinetu" />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>

              <div className={`${styles.card} ${styles.cardTop}`}>
                <span className={styles.cardIcon}>
                  <ShieldIcon />
                </span>
                <div>
                  <p className={styles.cardValue}>Od 2009 roku</p>
                  <p className={styles.cardLabel}>zaufanie pacjentów</p>
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardBottom}`}>
                <span className={styles.cardIcon}>
                  <PinIcon />
                </span>
                <div>
                  <p className={styles.cardValue}>ul. Koronowska 42</p>
                  <p className={styles.cardLabel}>Bydgoszcz</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
