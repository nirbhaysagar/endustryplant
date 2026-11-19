'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TerminalFooter.module.css';

export default function TerminalFooter() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <div className={styles.footerLogoBox}>EP</div>
              <span className={styles.footerLogoText}>ENDUSTRY PLANT</span>
            </Link>
            <p className={styles.footerTagline}>
              Senior-led digital product studio based in New Delhi.
              We design and engineer bespoke websites, eCommerce stores, mobile apps, and automated workflows.
            </p>

            <div className={styles.footerContactsList}>
              <div className={styles.footerContactRow}>
                <span>📍</span>
                <span>New Delhi, India (Serving Global Clients)</span>
              </div>
              <div className={styles.footerContactRow}>
                <span>📞</span>
                <span>+91 73021 64841 (Nirbhay Sagar) · +91 95486 91732 (Aditya Kumar)</span>
              </div>
              <div className={styles.footerContactRow}>
                <span>✉️</span>
                <span>endustryplant.com@gmail.com</span>
              </div>
            </div>
          </div>

          <div className={styles.footerLinksGrid}>
            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Services</div>
              <Link href="/#services" className={styles.footerLink}>Websites</Link>
              <Link href="/#services" className={styles.footerLink}>eCommerce</Link>
              <Link href="/#services" className={styles.footerLink}>Mobile Apps</Link>
              <Link href="/#services" className={styles.footerLink}>Web Applications</Link>
              <Link href="/#services" className={styles.footerLink}>AI Automation</Link>
            </div>

            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Company</div>
              <Link href="/#why-us" className={styles.footerLink}>About Us</Link>
              <Link href="/#work" className={styles.footerLink}>Portfolio (14)</Link>
              <Link href="/#process" className={styles.footerLink}>Process</Link>
              <Link href="/blog" className={styles.footerLink}>Engineering Journal</Link>
              <Link href="/#faq" className={styles.footerLink}>Pricing &amp; FAQ</Link>
              <Link href="/contact" className={styles.footerLink} style={{ color: '#FF4B3E' }}>Start a Project ↗</Link>
            </div>

            <div className={styles.footerCol}>
              <div className={styles.footerColTitle}>Direct &amp; Legal</div>
              <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
              <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
              <a
                href="https://wa.me/917302164841"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                style={{ color: '#25D366' }}
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div>© 2026 ENDUSTRY PLANT LLC. REGISTERED IN DELHI, INDIA. ALL RIGHTS RESERVED.</div>
          <button onClick={handleScrollTop} className={styles.backToTopBtn} aria-label="Scroll back to top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
