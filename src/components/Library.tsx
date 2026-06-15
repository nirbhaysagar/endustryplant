'use client';

interface Blueprint {
  id: string;
  category: string;
  title: string;
  date: string;
  status: string;
}

const BLUEPRINTS: Blueprint[] = [
  { id: 'bp-01', category: 'RESEARCH', title: 'The Fallacy of Billable Hours', date: '2026.01', status: 'PUBLISHED' },
  { id: 'bp-02', category: 'ARCHITECTURE', title: 'Zero-Latency Client Onboarding', date: '2026.02', status: 'DRAFT' },
  { id: 'bp-03', category: 'SYSTEMS', title: 'Autonomous Content Supply Chains', date: '2026.03', status: 'PUBLISHED' },
  { id: 'bp-04', category: 'OPS', title: 'Decentralized Agency Operations', date: '2026.04', status: 'ARCHIVED' },
  { id: 'bp-05', category: 'THESIS', title: 'Why Code is a Liability', date: '2026.05', status: 'PUBLISHED' },
];

export default function Library() {
  return (
    <>
      <style>{`
        .library-section {
          background: #ffffff;
          padding: 160px 40px;
          min-height: 100vh;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .library-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .library-header {
          margin-bottom: 80px;
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .library-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(60px, 8vw, 120px);
          font-weight: 800;
          color: #0a0a0a;
          line-height: 0.9;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          margin: 0;
          flex: 1;
        }

        .library-label {
          font-family: var(--font-mono);
          font-size: 14px;
          text-transform: uppercase;
          color: #0a0a0a;
          max-width: 300px;
          line-height: 1.5;
        }

        .library-table {
          width: 100%;
          border-top: 2px solid #0a0a0a;
        }

        .library-row {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr 1fr;
          align-items: center;
          padding: 40px 0;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
          transition: background 0.3s ease, padding 0.3s ease;
          position: relative;
        }

        .library-row:hover {
          background: #f4f4f0;
          padding-left: 20px;
          padding-right: 20px;
        }

        .row-category {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #666;
        }

        .row-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 3vw, 48px);
          font-weight: 600;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .row-date {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #666;
        }

        .row-status {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #111;
          border: 1px solid #111;
          padding: 4px 12px;
          border-radius: 20px;
          justify-self: end;
        }

        .library-row:hover .row-title {
          text-decoration: line-through;
          color: #888;
        }

        @media (max-width: 1024px) {
          .library-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 30px 0;
          }
          .row-status {
            justify-self: start;
          }
          .library-header {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="library-section" id="library">
        <div className="library-inner">
          <div className="library-header">
            <h2 className="library-title">Index</h2>
            <div className="library-label">Internal documentation, blueprints, and operational thesis.</div>
          </div>

          <div className="library-table">
            {BLUEPRINTS.map((bp) => (
              <div key={bp.id} className="library-row">
                <div className="row-category">{bp.category}</div>
                <div className="row-title">{bp.title}</div>
                <div className="row-date">{bp.date}</div>
                <div className="row-status">{bp.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
