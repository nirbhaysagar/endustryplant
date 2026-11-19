'use client';

import Link from 'next/link';

interface Project {
  id: string;
  category: string;
  title: string;
  client: string;
  metric: string;
  metricLabel: string;
  desc: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    category: 'D2C ECOMMERCE',
    title: 'High-Speed Storefront & WhatsApp Checkout Recovery',
    client: 'Aura Luxury Apparel · Mumbai',
    metric: '+240%',
    metricLabel: 'Mobile Checkout Conversion',
    desc: 'Redesigned and engineered a headless Next.js storefront integrated with Razorpay 1-click checkout and automated WhatsApp recovery. Dropped load time from 4.8s to 0.7s.',
    tags: ['Next.js 16', 'Shopify Plus', 'Razorpay', 'WhatsApp API'],
  },
  {
    id: 'p2',
    category: 'MOBILE APP',
    title: 'On-Demand Hyperlocal Food & Grocery Delivery App',
    client: 'QuickBite Express · Delhi NCR',
    metric: '18,000+',
    metricLabel: 'Daily Active Orders',
    desc: 'Built a cross-platform React Native app featuring real-time rider GPS tracking, automated UPI payments, and sub-second order dispatching during peak surge hours.',
    tags: ['React Native', 'Firebase', 'Google Maps SDK', 'Cashfree UPI'],
  },
  {
    id: 'p3',
    category: 'AI WORKFLOW AUTOMATION',
    title: 'Autonomous Inbound Sales & Lead Qualification Engine',
    client: 'PropTech Capital · Bengaluru',
    metric: '35 hrs',
    metricLabel: 'Saved Per Week / Agent',
    desc: 'Replaced manual calling processes with an autonomous WhatsApp LLM agent that pre-qualifies high-intent real estate buyers, schedules site visits, and syncs directly to CRM.',
    tags: ['OpenAI GPT-4o', 'Python FastAPI', 'Supabase Vector', 'HubSpot API'],
  },
  {
    id: 'p4',
    category: 'SAAS WEB APPLICATION',
    title: 'Enterprise Fleet Dispatch & GST Billing Portal',
    client: 'ShipPulse Logistics · Gurugram',
    metric: '₹12Cr+',
    metricLabel: 'Quarterly GMV Processed',
    desc: 'Engineered a high-concurrency internal web application managing 400+ commercial vehicles, driver telematics, route planning, and automated GST-compliant e-way invoicing.',
    tags: ['React 19', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge'],
  },
];

export default function Library() {
  return (
    <>
      <style>{`
        .work-section {
          padding: 100px 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border);
        }

        .work-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .work-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #4F46E5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .work-title {
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0F172A;
          line-height: 1.15;
        }

        .work-subtext {
          font-size: 16px;
          color: #475569;
          max-width: 500px;
          line-height: 1.7;
        }

        /* ─── PROJECTS GRID ─────────────────────────────────── */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .project-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
          background: #FFFFFF;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-cat {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #4F46E5;
          letter-spacing: 0.05em;
        }

        .project-live {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #15803D;
          background: rgba(34, 197, 94, 0.12);
          padding: 3px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
        }

        .project-title {
          font-size: 20px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.35;
        }

        .project-client {
          font-size: 13px;
          color: #64748B;
          margin-top: 4px;
        }

        .metric-banner {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .metric-val {
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 800;
          color: #0F172A;
        }

        .metric-caption {
          font-size: 13px;
          color: #15803D;
          font-weight: 700;
        }

        .project-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.7;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .project-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #E2E8F0;
          color: #334155;
        }

        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 24px;
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-inner">
          <div className="work-header">
            <div>
              <div className="work-label">PORTFOLIO &amp; CASE STUDIES</div>
              <h2 className="work-title">Featured Work &amp; Results</h2>
            </div>
            <p className="work-subtext">
              A sample of digital products engineered and shipped for growing companies.
              Every project is measured by real business outcomes.
            </p>
          </div>

          <div className="work-grid">
            {PROJECTS.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-top">
                  <span className="project-cat">{p.category}</span>
                  <span className="project-live">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                    SHIPPED IN PRODUCTION
                  </span>
                </div>

                <div>
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-client">{p.client}</div>
                </div>

                <div className="metric-banner">
                  <span className="metric-val">{p.metric}</span>
                  <span className="metric-caption">{p.metricLabel}</span>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
