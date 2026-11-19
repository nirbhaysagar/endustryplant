'use client';

import React, { useEffect, useState } from 'react';
import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside className={styles.floatingActionBar} aria-label="Quick Actions">
      {/* SCROLL TO TOP BUTTON */}
      <button
        type="button"
        className={`${styles.scrollTopBtn} ${showTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        title="Scroll back to top"
        aria-label="Scroll back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* PROPER CIRCULAR WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waIconBtn}
        title="Chat directly on WhatsApp (+91 73021 64841)"
        aria-label="Chat with Endustry Plant founders on WhatsApp"
      >
        <svg className={styles.waIcon} viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.766.784 2.8.784h.005c3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.769-5.776-5.769zm8.441 5.769c-.002 4.673-3.8 8.473-8.472 8.473-1.42 0-2.812-.355-4.048-1.026l-4.952 1.299 1.323-4.827c-.742-1.288-1.134-2.753-1.133-4.25.002-4.674 3.801-8.474 8.474-8.474 4.672 0 8.47 3.801 8.472 8.474z"/>
        </svg>
        <span className={styles.waPing} />
      </a>
    </aside>
  );
}
