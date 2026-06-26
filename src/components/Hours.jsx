import { HOURS } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Hours.module.css';

export default function Hours() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.grid}>
          <div>
            <p className={styles.eyebrow}>Godziny</p>
            <h2 className={styles.heading}>Kiedy nas odwiedzić</h2>
            <div className={styles.card}>
              <p className={styles.cardLabel}>Kosmetologia</p>
              <p className={styles.cardText}>
                Zabiegi kosmetologiczne umawiamy telefonicznie, w dogodnych terminach.
              </p>
              <p className={styles.cardPhone}>+48 789 456 123</p>
            </div>
          </div>

          <div className={styles.table}>
            {HOURS.map((row) => (
              <div
                key={row.day}
                className={`${styles.row} ${row.closed ? styles.closed : ''}`}
              >
                <span className={styles.day}>{row.day}</span>
                <span className={styles.time}>{row.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
