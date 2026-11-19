'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: 'light' | 'dark' }>;
      if (customEvent.detail && customEvent.detail.theme) {
        setTheme(customEvent.detail.theme);
      } else {
        const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        setTheme(t);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('themechange', handleThemeEvent);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('themechange', handleThemeEvent);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: nextTheme } }));
  };

  const navClass = scrolled
    ? styles.scrolledNav
    : isHome
    ? `${styles.navContainer} ${styles.heroNav}`
    : styles.pageNav;

  return (
    <header className={navClass}>
      <div className={styles.inner}>
        {/* LOGO */}
        <Link href="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoIcon}>✱</span>
          <span className={styles.logoTitle}>Endustry Plant</span>
          <span className={styles.logoSup}>®</span>
        </Link>

        {/* DESKTOP CENTER NAVIGATION LINKS */}
        <nav className={styles.centerLinks} aria-label="Main Navigation">
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/#about" className={styles.navLink}>Studio</Link>
          <Link href="/#services" className={styles.navLink}>Services</Link>
          <Link href="/#process" className={styles.navLink}>Process</Link>
          <Link href="/#work" className={styles.navLink}>
            Work <span className={styles.badgeWork}>14</span>
          </Link>
          <Link href="/#why-us" className={styles.navLink}>Why Us</Link>
          <Link href="/#faq" className={styles.navLink}>FAQ</Link>
          <Link href="/blog" className={styles.navLink}>Journal</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* RIGHT ACTIONS: THEME TOGGLE + BOOK SPRINT */}
        <div className={styles.rightActions}>
          {/* THEME TOGGLE BUTTON */}
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              /* Sun Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* BOOK A CALL */}
          <Link href="/contact" className={styles.bookBtn}>
            <span className={styles.avatarCircle}>EP</span>
            <span>Book A Call ↗</span>
          </Link>

          {/* HAMBURGER TOGGLE */}
          <button
            type="button"
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

      {/* MOBILE MENU ACCORDION */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Home</span> <span>→</span>
          </Link>
          <Link href="/#about" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Studio</span> <span>→</span>
          </Link>
          <Link href="/#services" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Services</span> <span>→</span>
          </Link>
          <Link href="/#process" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Process</span> <span>→</span>
          </Link>
          <Link href="/#work" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Work (14 Projects)</span> <span className={styles.badgeWork}>14</span>
          </Link>
          <Link href="/#why-us" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Why Us</span> <span>→</span>
          </Link>
          <Link href="/#faq" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>FAQ &amp; Pricing</span> <span>→</span>
          </Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Engineering Journal (10 Posts)</span> <span>→</span>
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            <span>Contact Studio</span> <span>→</span>
          </Link>

          <div className={styles.mobileActionsRow}>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            <Link
              href="/contact"
              className={styles.bookBtn}
              onClick={() => setMobileOpen(false)}
            >
              <span className={styles.avatarCircle}>EP</span>
              <span>Book A Call ↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
