import { GALLERY } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="wnetrza" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>Wnętrza</p>
          <h2 className={styles.heading}>
            Miejsce zaprojektowane dla <em className={styles.serif}>spokoju</em>
          </h2>
        </Reveal>

        <Reveal className={styles.grid}>
          {GALLERY.map((image) => (
            <figure
              key={image.alt}
              className={`${styles.tile} ${image.large ? styles.large : ''}`}
            >
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
