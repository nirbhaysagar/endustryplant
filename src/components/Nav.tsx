'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoBox}>EP</div>
          <div className={styles.logoInfo}>
            <span className={styles.logoText}>ENDUSTRY PLANT</span>
            <span className={styles.logoSub}>Digital Agency · New Delhi</span>
          </div>
        </Link>

        <div className={styles.centerLinks}>
          <Link href="/#services" className={styles.link}>Services</Link>
          <Link href="/#work" className={styles.link}>Work</Link>
          <Link href="/#process" className={styles.link}>Process</Link>
          <Link href="/#why-us" className={styles.link}>Why Us</Link>
          <Link href="/#faq" className={styles.link}>Pricing & FAQ</Link>
        </div>

        <div className={styles.rightGroup}>
          <a
            href="https://wa.me/917302164841?text=Hi%20Endustry%20Plant,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.766.784 2.8.784h.005c3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.769-5.776-5.769zm8.441 5.769c-.002 4.673-3.8 8.473-8.472 8.473-1.42 0-2.812-.355-4.048-1.026l-4.952 1.299 1.323-4.827c-.742-1.288-1.134-2.753-1.133-4.25.002-4.674 3.801-8.474 8.474-8.474 4.672 0 8.47 3.801 8.472 8.474z"/>
            </svg>
            WhatsApp
          </a>

          <Link href="/contact" className={styles.ctaBtn}>
            Start a Project
            <span style={{ fontSize: '15px' }}>→</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/#services" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/#work" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/#process" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Process</Link>
          <Link href="/#why-us" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href="/#faq" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Pricing & FAQ</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMenuOpen(false)} style={{ color: '#4F46E5' }}>Start a Project →</Link>
          <a
            href="https://wa.me/917302164841?text=Hi%20Endustry%20Plant,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
            style={{ width: 'fit-content', marginTop: '4px' }}
          >
            Chat on WhatsApp (+91 73021 64841)
          </a>
        </div>
      )}
    </nav>
  );
}
