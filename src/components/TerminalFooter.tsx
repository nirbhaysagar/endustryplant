'use client';

export default function TerminalFooter() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .footer-section {
          background: #0a0a0a;
          color: #ffffff;
          padding: 100px 40px 40px;
          display: flex;
          flex-direction: column;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 60px;
        }

        .footer-cta {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(60px, 10vw, 160px);
          font-weight: 800;
          line-height: 0.8;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-cta:hover {
          color: #888;
        }

        .footer-cta span {
          display: block;
        }

        .footer-links {
          display: flex;
          gap: 60px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .col-title {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 16px;
        }

        .footer-link {
          font-family: var(--font-body);
          font-size: 16px;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #888;
          text-decoration: underline;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
        }

        .back-to-top {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .back-to-top:hover {
          color: #888;
        }

        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            gap: 60px;
          }
          .footer-links {
            width: 100%;
            justify-content: space-between;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer-section" id="contact">
        <div className="footer-inner">
          
          <div className="footer-top">
            <a href="mailto:hello@endustryplant.com" className="footer-cta">
              <span>Let's</span>
              <span>Build</span>
            </a>

            <div className="footer-links">
              <div className="footer-col">
                <div className="col-title">Navigation</div>
                <a href="/#hero" className="footer-link">Home</a>
                <a href="/#process" className="footer-link">Process</a>
                <a href="/#capabilities" className="footer-link">Services</a>
                <a href="/#library" className="footer-link">Index</a>
              </div>
              <div className="footer-col">
                <div className="col-title">Socials</div>
                <a href="#" className="footer-link">Twitter / X</a>
                <a href="#" className="footer-link">LinkedIn</a>
                <a href="#" className="footer-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 ENDUSTRY PLANT LLC. ALL RIGHTS RESERVED.</div>
            <button onClick={handleScrollTop} className="back-to-top">
              ↑ Back to top
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}
