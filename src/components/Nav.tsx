'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#plant', label: 'The Lab' },
  { href: '#process', label: 'Process' },
  { href: '#library', label: 'Library' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoMark}>EP</span>
          <span className={styles.logoText}>ENDUSTRY PLANT</span>
          <span className={styles.logoYear}>EST. 2026</span>
        </button>

        {/* Links */}
        <div className={styles.links}>
          {LINKS.map(link => (
            <button
              key={link.href}
              className={styles.link}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className={styles.cta}
          onClick={() => scrollTo('#contact')}
        >
          Start a Project
        </button>
      </div>
    </nav>
  );
}
