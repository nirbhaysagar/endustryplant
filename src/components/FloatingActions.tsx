'use client';

import React, { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(currentTheme);

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {}
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style>{`
        .floating-action-bar {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* SCROLL TO TOP */
        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
        }

        .scroll-top-btn.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .scroll-top-btn:hover {
          background: var(--brand-black);
          color: var(--bg);
          border-color: var(--brand-black);
          transform: translateY(-2px);
        }

        /* THEME TOGGLE */
        .theme-toggle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-toggle-btn:hover {
          border-color: var(--coral);
          color: var(--coral);
          transform: translateY(-2px);
        }

        /* WHATSAPP FLOAT */
        .wa-float-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 9999px;
          background: #25D366;
          color: #062E12;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wa-float-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(37, 211, 102, 0.55);
          background: #20BA5A;
        }

        .wa-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #062E12;
          animation: wa-pulse 1.8s infinite;
        }

        @keyframes wa-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        @media (max-width: 640px) {
          .floating-action-bar {
            bottom: 16px;
            right: 16px;
            gap: 8px;
          }
          .wa-float-text {
            display: none;
          }
          .wa-float-btn {
            padding: 12px;
          }
          .scroll-top-btn,
          .theme-toggle-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <aside className="floating-action-bar" aria-label="Quick Actions">
        {/* SCROLL TO TOP BUTTON */}
        <button
          type="button"
          className={`scroll-top-btn ${showTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>

        {/* DARK / LIGHT THEME TOGGLE */}
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            /* Sun Icon */
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* WHATSAPP FOUNDER CHAT */}
        <a
          href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float-btn"
          title="Direct WhatsApp with Founder Nirbhay Sagar (+91 73021 64841)"
          aria-label="Direct WhatsApp with Founder"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.766.784 2.8.784h.005c3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.769-5.776-5.769zm8.441 5.769c-.002 4.673-3.8 8.473-8.472 8.473-1.42 0-2.812-.355-4.048-1.026l-4.952 1.299 1.323-4.827c-.742-1.288-1.134-2.753-1.133-4.25.002-4.674 3.801-8.474 8.474-8.474 4.672 0 8.47 3.801 8.472 8.474z"/>
          </svg>
          <span className="wa-float-text">Chat on WhatsApp</span>
          <span className="wa-live-dot" />
        </a>
      </aside>
    </>
  );
}
