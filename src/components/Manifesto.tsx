'use client';

export default function Manifesto() {
  return (
    <>
      <style>{`
        .manifesto-section {
          background: #e6e4df;
          padding: 200px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .manifesto-inner {
          max-width: 1400px;
          width: 100%;
        }

        .manifesto-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 6vw, 90px);
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1.1;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          margin: 0;
        }

        .manifesto-text span {
          display: block;
          margin-bottom: 20px;
        }

        .manifesto-text span.highlight {
          color: #fff;
          -webkit-text-stroke: 2px #0a0a0a;
          text-stroke: 2px #0a0a0a;
        }

        .manifesto-footer {
          margin-top: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px solid #0a0a0a;
          padding-top: 40px;
        }

        .mf-label {
          font-family: var(--font-mono);
          font-size: 14px;
          color: #0a0a0a;
          text-transform: uppercase;
        }

        .mf-stamp {
          width: 80px;
          height: 80px;
          border: 2px solid #0a0a0a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: bold;
          text-align: center;
          transform: rotate(-15deg);
        }

        @media (max-width: 768px) {
          .manifesto-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }
        }
      `}</style>

      <section className="manifesto-section" id="manifesto">
        <div className="manifesto-inner">
          
          <h2 className="manifesto-text">
            <span>We are a full-service digital agency.</span>
            <span className="highlight">From Delhi to the world.</span>
            <span>Building a billion-dollar brand.</span>
          </h2>

          <div className="manifesto-footer">
            <div className="mf-label">Endustry Plant — Manifesto v1.0</div>
            <div className="mf-stamp">EP<br/>2026</div>
          </div>

        </div>
      </section>
    </>
  );
}
