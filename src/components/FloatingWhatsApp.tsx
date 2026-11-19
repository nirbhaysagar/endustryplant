'use client';

export default function FloatingWhatsApp() {
  return (
    <>
      <style>{`
        .wa-float-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 9999px;
          background: #25D366;
          color: #062E12;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4), 0 0 20px rgba(37, 211, 102, 0.2);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wa-float-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 15px 40px rgba(37, 211, 102, 0.6);
          background: #20BA5A;
        }

        .wa-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #062E12;
          animation: wa-pulse 1.8s infinite;
        }

        @keyframes wa-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        @media (max-width: 640px) {
          .wa-float-text {
            display: none;
          }
          .wa-float-btn {
            padding: 14px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>

      <a
        href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        title="Direct WhatsApp with Founder Nirbhay Sagar"
        aria-label="Direct WhatsApp with Founder"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.766.784 2.8.784h.005c3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.769-5.776-5.769zm8.441 5.769c-.002 4.673-3.8 8.473-8.472 8.473-1.42 0-2.812-.355-4.048-1.026l-4.952 1.299 1.323-4.827c-.742-1.288-1.134-2.753-1.133-4.25.002-4.674 3.801-8.474 8.474-8.474 4.672 0 8.47 3.801 8.472 8.474z"/>
        </svg>
        <span className="wa-float-text">Chat on WhatsApp</span>
        <span className="wa-live-dot" />
      </a>
    </>
  );
}
