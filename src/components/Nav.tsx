'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoBox}>EP</div>
          <span className={styles.logoText}>ENDUSTRY PLANT</span>
        </Link>

        <div className={styles.centerLinks}>
          <Link href="/#capabilities">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#showcase">Lab</Link>
          <Link href="/#library">Index</Link>
        </div>

        <div className={styles.rightGroup}>
          <Link href="/contact" className={styles.contactBtn}>Start a Project</Link>
        </div>

      </div>
    </nav>
  );
}
