import { HIGHLIGHTS } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Highlights.module.css';

export default function Highlights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>W skrócie</p>
          <h2 className={styles.heading}>
            Wszystko, czego potrzebuje Twój <em className={styles.serif}>uśmiech i skóra</em>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {HIGHLIGHTS.map((item, i) => (
            <Reveal as="article" key={item.title} className={styles.card} delay={i * 60}>
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
