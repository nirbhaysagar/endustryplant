'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? styles.scrolledNav : styles.navContainer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoIcon}>✱</span>
          <span className={styles.logoTitle}>Endustry Plant</span>
          <span className={styles.logoSup}>®</span>
        </Link>

        <div className={styles.centerLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/#about" className={styles.navLink}>Studio</Link>
          <Link href="/#work" className={styles.navLink}>
            Work <span className={styles.badgeWork}>14</span>
          </Link>
          <Link href="/#services" className={styles.navLink}>Services</Link>
          <Link href="/#process" className={styles.navLink}>Process</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className={styles.rightActions}>
          <Link href="/contact" className={styles.bookBtn}>
            <span className={styles.avatarCircle}>EP</span>
            <span>Book A Call ↗</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/#about" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Studio</Link>
          <Link href="/#work" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Work</Link>
          <Link href="/#services" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/#process" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Process</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)} style={{ color: '#FF4B3E' }}>
            Book A Call ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
