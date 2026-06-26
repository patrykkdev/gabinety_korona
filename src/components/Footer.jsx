import { FOOTER_COLUMNS } from '../data/content.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <span className={styles.mark} aria-hidden="true" />
              <span className={styles.wordmark}>Gabinety Korona</span>
            </div>
            <p className={styles.tagline}>
              Kameralna klinika stomatologii i kosmetologii w Bydgoszczy.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((link) => (
                <a key={link} href="#" className={styles.colLink}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.fine}>© 2024 Gabinety Korona. Wszelkie prawa zastrzeżone.</p>
          <p className={styles.fine}>Bydgoszcz, Polska</p>
        </div>
      </div>
    </footer>
  );
}
