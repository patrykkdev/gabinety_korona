import { TEAM } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Team.module.css';

export default function Team() {
  return (
    <section id="zespol" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>Zespół</p>
          <h2 className={styles.heading}>
            Ludzie, którym <em className={styles.serif}>zaufasz</em>
          </h2>
          <p className={styles.introText}>
            Doświadczenie, ciągłe kształcenie i autentyczna uważność na pacjenta.
          </p>
        </Reveal>

        {TEAM.map((member) => (
          <Reveal
            key={member.name}
            className={`${styles.member} ${member.flip ? styles.flip : ''}`}
          >
            <div className={styles.photo}>
              <img src={member.img} alt={member.name} />
            </div>
            <div className={styles.body}>
              <p className={styles.role}>{member.role}</p>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.bio}>{member.bio}</p>
              <a href="#oferta" className={styles.link}>
                Poznaj specjalizację <span className={styles.arrow}>→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
