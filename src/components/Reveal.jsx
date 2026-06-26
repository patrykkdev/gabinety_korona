import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Subtelne wejście elementu przy przewijaniu (fade + translate).
 * Działa w prawdziwej przeglądarce dzięki IntersectionObserver.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [styles.reveal, shown ? styles.shown : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
