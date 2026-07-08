import { useState, useEffect } from 'react';
import styles from './App.module.css';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Philosophy from './components/Philosophy.jsx';
import Team from './components/Team.jsx';
import Offer from './components/Offer.jsx';
import Cennik from './components/Cennik.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
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

      <AnnouncementBar />
      <Navbar mode={mode} onToggleMode={toggleMode} />
      <main>
        <Hero />
        <Highlights />
        <Philosophy />
        <Team />
        <Offer />
        <Cennik />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
