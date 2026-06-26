import { VALUES } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Philosophy.module.css';

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.grid}>
          <div>
            <p className={styles.eyebrow}>Filozofia</p>
            <h2 className={styles.heading}>
              Dobra medycyna nie musi <em className={styles.accent}>onieśmielać</em>.
            </h2>
            <div className={styles.quoteWrap}>
              <p className={styles.quote}>
                „Chcemy, żeby wizyta u nas była najmniej stresującym punktem Twojego dnia."
              </p>
            </div>
          </div>

          <div className={styles.values}>
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={i < VALUES.length - 1 ? styles.row : styles.rowLast}
              >
                <h3 className={styles.rowTitle}>{value.title}</h3>
                <p className={styles.rowDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
