'use client';

import Link from 'next/link';

export default function TerminalFooter() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .footer-section {
          background: #0A0F1D;
          color: #F8FAFC;
          padding: 80px 24px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .footer-logo-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #FFFFFF;
          color: #0A0F1D;
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-text {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }

        .footer-tagline {
          font-size: 14px;
          color: #94A3B8;
          max-width: 440px;
          line-height: 1.7;
        }

        .footer-contacts-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #CBD5E1;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .footer-link {
          font-size: 14px;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #FFFFFF;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 12px;
          color: #64748B;
          flex-wrap: wrap;
          gap: 16px;
        }

        .back-to-top-btn {
          color: #94A3B8;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }

        .back-to-top-btn:hover {
          color: #FFFFFF;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <div className="footer-logo-box">EP</div>
                <span className="footer-logo-text">ENDUSTRY PLANT</span>
              </Link>
              <p className="footer-tagline">
                Senior-led digital product studio based in New Delhi.
                We design and engineer bespoke websites, eCommerce stores, mobile apps, and automated workflows.
              </p>

              <div className="footer-contacts-list">
                <div className="footer-contact-row">
                  <span>📍</span>
                  <span>New Delhi, India (Serving Global Clients)</span>
                </div>
                <div className="footer-contact-row">
                  <span>📞</span>
                  <span>+91 73021 64841 (Nirbhay Sagar) · +91 95486 91732 (Aditya Kumar)</span>
                </div>
                <div className="footer-contact-row">
                  <span>✉️</span>
                  <span>endustryplant.com@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <div className="footer-col-title">Services</div>
                <Link href="/#services" className="footer-link">Websites</Link>
                <Link href="/#services" className="footer-link">eCommerce</Link>
                <Link href="/#services" className="footer-link">Mobile Apps</Link>
                <Link href="/#services" className="footer-link">Web Applications</Link>
                <Link href="/#services" className="footer-link">AI Automation</Link>
              </div>

              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                <Link href="/#why-us" className="footer-link">About Us</Link>
                <Link href="/#work" className="footer-link">Portfolio</Link>
                <Link href="/#process" className="footer-link">Process</Link>
                <Link href="/blog" className="footer-link">Engineering Journal</Link>
                <Link href="/#faq" className="footer-link">Pricing &amp; FAQ</Link>
                <Link href="/contact" className="footer-link" style={{ color: '#FF4B3E' }}>Start a Project ↗</Link>
              </div>

              <div className="footer-col">
                <div className="footer-col-title">Direct &amp; Legal</div>
                <Link href="/terms" className="footer-link">Terms of Service</Link>
                <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                <a
                  href="https://wa.me/917302164841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: '#25D366' }}
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 ENDUSTRY PLANT LLC. REGISTERED IN DELHI, INDIA. ALL RIGHTS RESERVED.</div>
            <button onClick={handleScrollTop} className="back-to-top-btn">
              ↑ Back to top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
