import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Team from './components/Team.jsx';
import Offer from './components/Offer.jsx';
import Hours from './components/Hours.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const THEME = {
  accent: 'teal',
  shape: 'organic',
  texture: true,
};

export default function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <div className={styles.app} data-accent={THEME.accent} data-shape={THEME.shape}>
      {THEME.texture && <div className={styles.grain} aria-hidden="true" />}

      <Navbar mode={mode} onToggleMode={toggleMode} />
      <main>
        <Hero />
        <Philosophy />
        <Team />
        <Offer />
        <Hours />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
