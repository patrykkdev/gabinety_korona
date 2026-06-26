import { NAV_LINKS } from '../data/content.js';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.wordmark}>Gabinety Korona</span>
        </a>

        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className={styles.cta}>
            Umów wizytę <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
