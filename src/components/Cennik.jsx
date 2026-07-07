import { useState } from 'react';
import { CENNIK } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Cennik.module.css';

const TABS = ['stom', 'kosm'];

export default function Cennik() {
  const [active, setActive] = useState('stom');
  const current = CENNIK[active];

  return (
    <section id="cennik" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>Cennik</p>
          <h2 className={styles.heading}>Ile kosztują zabiegi</h2>
        </Reveal>

        <Reveal className={styles.tabs}>
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
              onClick={() => setActive(key)}
            >
              {CENNIK[key].label}
            </button>
          ))}
        </Reveal>

        <Reveal>
          <ul className={styles.list}>
            {current.items.map((item) => (
              <li key={item.title} className={styles.row}>
                <span className={styles.title}>
                  {item.title}
                  {item.oldPrice && <span className={styles.promoBadge}>Promocja</span>}
                </span>
                <span className={styles.leader} aria-hidden="true" />
                <span className={styles.priceGroup}>
                  {item.oldPrice && <span className={styles.oldPrice}>{item.oldPrice}</span>}
                  <span
                    className={
                      !item.price
                        ? styles.pricePlaceholder
                        : item.oldPrice
                          ? `${styles.price} ${styles.promoPrice}`
                          : styles.price
                    }
                  >
                    {item.price || 'wycena indywidualna'}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className={styles.note}>{current.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
