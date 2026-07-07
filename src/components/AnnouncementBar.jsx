import { ANNOUNCEMENT } from '../data/content.js';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>
        <strong className={styles.label}>{ANNOUNCEMENT.label}</strong> {ANNOUNCEMENT.text}{' '}
        <a href={ANNOUNCEMENT.href} className={styles.cta}>
          {ANNOUNCEMENT.cta} →
        </a>
      </p>
    </div>
  );
}
