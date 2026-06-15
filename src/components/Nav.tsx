'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        
        <div className={styles.logoGroup}>
          <div className={styles.logoBox}>EP</div>
          <span className={styles.logoText}>ENDUSTRY PLANT</span>
        </div>

        <div className={styles.centerLinks}>
          <a href="/#capabilities">Services</a>
          <a href="/#process">Process</a>
          <a href="/#showcase">Lab</a>
          <a href="/#library">Index</a>
        </div>

        <div className={styles.rightGroup}>
          <a href="/contact" className={styles.contactBtn}>Start a Project</a>
        </div>

      </div>
    </nav>
  );
}
