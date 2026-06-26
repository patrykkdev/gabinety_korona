import { useState } from 'react';
import { CONTACT } from '../data/content.js';
import Reveal from './Reveal.jsx';
import styles from './Contact.module.css';

const EMPTY = { name: '', phone: '', email: '', service: CONTACT.services[0], message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu podłącz wysyłkę do backendu / usługi mailowej.
    setSent(true);
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>Kontakt</p>
          <h2 className={styles.heading}>Umów wizytę</h2>
        </Reveal>

        <Reveal className={styles.grid}>
          <div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Adres</p>
              <p className={styles.infoValue}>
                {CONTACT.address.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < CONTACT.address.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Telefon</p>
              {CONTACT.phones.map((phone) => (
                <p key={phone.number} className={styles.phone}>
                  {phone.number} <span className={styles.tag}>· {phone.tag}</span>
                </p>
              ))}
            </div>

            <div className={styles.infoBlockLast}>
              <p className={styles.infoLabel}>Email</p>
              <p className={styles.phone}>{CONTACT.email}</p>
            </div>

            <div className={styles.noteWrap}>
              <p className={styles.note}>{CONTACT.note}</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <Field label="Imię i nazwisko">
                <input
                  type="text"
                  placeholder="np. Anna Nowak"
                  value={form.name}
                  onChange={update('name')}
                  className={styles.input}
                />
              </Field>
              <Field label="Telefon">
                <input
                  type="tel"
                  placeholder="+48 000 000 000"
                  value={form.phone}
                  onChange={update('phone')}
                  className={styles.input}
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                placeholder="email@domena.pl"
                value={form.email}
                onChange={update('email')}
                className={styles.input}
              />
            </Field>

            <Field label="Usługa">
              <select value={form.service} onChange={update('service')} className={styles.input}>
                {CONTACT.services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </Field>

            <Field label="Wiadomość">
              <textarea
                rows="4"
                placeholder="Jak możemy pomóc?"
                value={form.message}
                onChange={update('message')}
                className={`${styles.input} ${styles.textarea}`}
              />
            </Field>

            <button type="submit" className={styles.submit}>
              {sent ? 'Dziękujemy — odezwiemy się wkrótce' : 'Wyślij wiadomość'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}
