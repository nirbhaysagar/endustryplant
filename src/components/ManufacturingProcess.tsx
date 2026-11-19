'use client';

import Link from 'next/link';

interface Step {
  num: string;
  duration: string;
  title: string;
  summary: string;
  tags: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    duration: 'DAYS 1 – 5',
    title: 'Discovery & Scope',
    summary: 'System architecture, wireframe user flows, and a fixed milestone contract before a single line of code is written.',
    tags: ['Architecture Map', 'Fixed Budget'],
  },
  {
    num: '02',
    duration: 'DAYS 6 – 14',
    title: 'UI/UX Prototype',
    summary: 'Clickable high-fidelity Figma prototype to click through and validate the complete customer journey before development.',
    tags: ['Figma System', 'Clickable Flow'],
  },
  {
    num: '03',
    duration: 'DAYS 15 – 28',
    title: 'Full-Stack Sprints',
    summary: 'Senior engineers build your product using Next.js & React Native. Weekly staging previews with continuous GitHub commits.',
    tags: ['Live Staging URL', 'API Integrations'],
  },
  {
    num: '04',
    duration: 'DAY 29+',
    title: 'Launch & Warranty',
    summary: 'Zero-downtime production release, 100% Git repository transfer, and 30 days of free post-launch SLA bug fixing.',
    tags: ['Production Edge', '100% IP Transfer'],
  },
];

export default function ManufacturingProcess() {
  return (
    <>
      <style>{`
        .proc-section {
          padding: 110px 0 130px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border);
        }

        .proc-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .proc-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: #0A0A0A;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }

        .coralSquare {
          width: 7px;
          height: 7px;
          background: #FF4B3E;
          display: inline-block;
          border-radius: 1px;
        }

        .proc-headerRow {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }

        .proc-headline {
          font-size: clamp(34px, 4.4vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0A0A0A;
          max-width: 800px;
        }

        .headlineMuted {
          color: #94A3B8;
          font-weight: 700;
        }

        /* ─── 4-COLUMN CARD GRID ────────────────────────────── */
        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }

        .stepCard {
          background: #F8F9FA;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .stepCard:hover {
          background: #FFFFFF;
          border-color: #0A0A0A;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }

        .cardTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stepNum {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 800;
          color: #FF4B3E;
          letter-spacing: -0.02em;
        }

        .stepDuration {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #64748B;
          background: #FFFFFF;
          border: 1px solid var(--border);
          padding: 3px 8px;
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }

        .stepTitle {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0A0A0A;
          line-height: 1.25;
        }

        .stepSummary {
          font-size: 13.5px;
          line-height: 1.65;
          color: #475569;
          flex-grow: 1;
        }

        .tagsRow {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #E2E8F0;
        }

        .stepTag {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: #334155;
          background: #FFFFFF;
          border: 1px solid var(--border);
          padding: 3px 8px;
          border-radius: 6px;
        }

        /* ─── BOTTOM GUARANTEE BANNER ───────────────────────── */
        .procBanner {
          background: #0A0A0E;
          color: #FFFFFF;
          border-radius: 20px;
          padding: 28px 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .bannerLeft {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 780px;
        }

        .bannerStar {
          font-size: 22px;
          color: #FF4B3E;
          line-height: 1;
        }

        .bannerText {
          font-size: 14px;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .bannerBtn {
          background: #FF4B3E;
          color: #FFFFFF;
          padding: 10px 22px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .bannerBtn:hover {
          background: #E03E32;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .stepsGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stepsGrid {
            grid-template-columns: 1fr;
          }
          .procBanner {
            padding: 24px 20px;
          }
        }
      `}</style>

      <section className="proc-section" id="process">
        <div className="proc-inner">
          <div className="proc-label">
            <span className="coralSquare" />
            <span>The Process</span>
          </div>

          <div className="proc-headerRow">
            <h2 className="proc-headline">
              Predictable 4-step delivery pipeline.{' '}
              <span className="headlineMuted">From blueprint to production launch.</span>
            </h2>
          </div>

          <div className="stepsGrid">
            {STEPS.map((s) => (
              <div key={s.num} className="stepCard">
                <div className="cardTop">
                  <span className="stepNum">{s.num}</span>
                  <span className="stepDuration">{s.duration}</span>
                </div>

                <h3 className="stepTitle">{s.title}</h3>
                <p className="stepSummary">{s.summary}</p>

                <div className="tagsRow">
                  {s.tags.map((t, idx) => (
                    <span key={idx} className="stepTag">
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM GUARANTEE BANNER */}
          <div className="procBanner">
            <div className="bannerLeft">
              <span className="bannerStar">✱</span>
              <p className="bannerText">
                <strong>Guaranteed Milestone Delivery:</strong> Weekly live staging demos, direct WhatsApp communication with lead founders Nirbhay &amp; Aditya, and zero hidden scope surprises.
              </p>
            </div>

            <Link href="/contact" className="bannerBtn">
              Book a Sprint ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
