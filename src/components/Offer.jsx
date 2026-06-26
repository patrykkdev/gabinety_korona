import { useState } from 'react';
import { OFFER } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Offer.module.css';

const TABS = ['stom', 'kosm'];

export default function Offer() {
  const [active, setActive] = useState('stom');
  const current = OFFER[active];

  return (
    <section id="oferta" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>Oferta</p>
          <h2 className={styles.heading}>Zakres zabiegów</h2>
        </Reveal>

        <Reveal className={styles.tabs}>
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
              onClick={() => setActive(key)}
            >
              {OFFER[key].label}
            </button>
          ))}
        </Reveal>

        <div className={styles.body}>
          <ul className={styles.list}>
            {current.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
                <span className={styles.plus}>+</span>
              </li>
            ))}
          </ul>

          <aside className={styles.aside}>
            <h4 className={styles.asideTitle}>{current.aside.title}</h4>
            <p className={styles.asideDesc}>{current.aside.desc}</p>
            <a href={current.aside.href} className={styles.asideCta}>
              {current.aside.cta} <span>{current.aside.icon}</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
