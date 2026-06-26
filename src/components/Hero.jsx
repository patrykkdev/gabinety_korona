import { IMAGES, HERO_META } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Hero.module.css';

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
            <div className={styles.meta}>
              {HERO_META.map((item) => (
                <div key={item.label}>
                  <p className={styles.metaLabel}>{item.label}</p>
                  <p className={styles.metaValue}>{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.figure} delay={120}>
            <div className={styles.frameWrap}>
              <div className={styles.frame} aria-hidden="true" />
              <div className={styles.imageBox}>
                <img src={IMAGES.heroPortrait} alt="Lekarka dentystka" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
