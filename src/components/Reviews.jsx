import { REVIEWS, REVIEWS_SUMMARY } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Reviews.module.css';

function Stars({ rating }) {
  return (
    <span className={styles.stars} aria-label={`Ocena ${rating} na 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Opinie</p>
            <h2 className={styles.heading}>
              Zaufali nam <em className={styles.serif}>pacjenci</em>
            </h2>
          </div>

          <a
            href={REVIEWS_SUMMARY.href}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.summary}
          >
            <span className={styles.summaryRating}>{REVIEWS_SUMMARY.rating.toFixed(1)}</span>
            <span className={styles.summaryBody}>
              <Stars rating={Math.round(REVIEWS_SUMMARY.rating)} />
              <span className={styles.summaryText}>
                {REVIEWS_SUMMARY.count} opinii w Google →
              </span>
            </span>
          </a>
        </Reveal>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <Reveal as="article" key={review.name} className={styles.card} delay={i * 60}>
              <Stars rating={review.rating} />
              <p className={styles.text}>„{review.text}"</p>
              <div className={styles.footer}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.tag}>{review.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
