'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  category: string;
  categoryKey: 'all' | 'ecommerce' | 'mobile' | 'web' | 'ai';
  title: string;
  client: string;
  urlMock: string;
  metric: string;
  metricLabel: string;
  desc: string;
  tags: string[];
  mockupType: 'store' | 'mobile' | 'ai' | 'dashboard';
  accentColor: string;
  previewImage?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'lumen',
    category: 'AUTONOMOUS AI',
    categoryKey: 'ai',
    title: 'Lumen Memory Engine & Real-Time Context Layer',
    client: 'Lumen Labs · Silicon Valley & Delhi NCR',
    urlMock: 'lumen.ai/engine/vector-context',
    metric: '<65ms',
    metricLabel: 'Vector Context Retrieval Latency',
    desc: 'Engineered a high-throughput semantic memory layer connecting proprietary enterprise databases to live LLM inference pipelines with sub-100ms retrieval.',
    tags: ['Python FastAPI', 'pgvector', 'OpenAI', 'Vercel AI SDK', 'Next.js 16'],
    mockupType: 'ai',
    accentColor: '#6366F1',
    previewImage: '/service_automation.png',
  },
  {
    id: 'aura',
    category: 'D2C ECOMMERCE',
    categoryKey: 'ecommerce',
    title: 'Aura Luxury Apparel Headless Storefront & UPI Checkout',
    client: 'Aura Luxury · Mumbai',
    urlMock: 'auraluxury.in/collections/curated',
    metric: '+240%',
    metricLabel: 'Mobile Checkout Conversion Rate',
    desc: 'Redesigned and engineered a headless Next.js storefront integrated with Razorpay 1-click checkout and automated WhatsApp abandoned cart recovery. Dropped load time from 4.8s to 0.7s.',
    tags: ['Next.js 16', 'Shopify Plus API', 'Razorpay UPI', 'Tailwind 4'],
    mockupType: 'store',
    accentColor: '#FF4B3E',
    previewImage: '/service_ecommerce.png',
  },
  {
    id: 'quickbite',
    category: 'MOBILE APP',
    categoryKey: 'mobile',
    title: 'QuickBite Hyperlocal Food & Grocery Delivery Platform',
    client: 'QuickBite Express · Delhi NCR',
    urlMock: 'quickbite.app/tracking/live-dispatch',
    metric: '18,000+',
    metricLabel: 'Daily Active Orders Processed',
    desc: 'Built a cross-platform React Native app featuring real-time rider GPS tracking, automated UPI payments, and sub-second order dispatching during peak surge hours.',
    tags: ['React Native', 'Firebase Realtime', 'Google Maps SDK', 'Cashfree UPI'],
    mockupType: 'mobile',
    accentColor: '#10B981',
    previewImage: '/service_mobile_apps.png',
  },
  {
    id: 'proptech',
    category: 'AUTONOMOUS AI',
    categoryKey: 'ai',
    title: 'PropTech WhatsApp Inbound Sales & Lead Qualification Engine',
    client: 'PropTech Capital · Bengaluru',
    urlMock: 'proptech.ai/whatsapp-lead-funnel',
    metric: '35 hrs',
    metricLabel: 'Saved Per Sales Agent / Week',
    desc: 'Replaced manual calling processes with an autonomous WhatsApp LLM agent that pre-qualifies high-intent real estate buyers, schedules site visits, and syncs directly to HubSpot CRM.',
    tags: ['OpenAI GPT-4o', 'WhatsApp Cloud API', 'Supabase Vector', 'HubSpot API'],
    mockupType: 'ai',
    accentColor: '#F59E0B',
    previewImage: '/service_automation.png',
  },
  {
    id: 'shippulse',
    category: 'WEB PLATFORM',
    categoryKey: 'web',
    title: 'ShipPulse Enterprise Fleet Dispatch & GST Invoicing Portal',
    client: 'ShipPulse Logistics · Gurugram',
    urlMock: 'shippulse.in/portal/fleet-dispatch',
    metric: '₹12Cr+',
    metricLabel: 'Quarterly GMV Processed',
    desc: 'Engineered a high-concurrency internal web application managing 400+ commercial vehicles, driver telematics, route planning, and automated GST-compliant e-way invoicing.',
    tags: ['React 19', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge', 'Docker'],
    mockupType: 'dashboard',
    accentColor: '#3B82F6',
    previewImage: '/service_web_apps.png',
  },
  {
    id: 'clientsync',
    category: 'WEB PLATFORM',
    categoryKey: 'web',
    title: 'ClientSync Agency Milestone & Escrow Operations OS',
    client: 'ClientSync · New Delhi',
    urlMock: 'clientsync.io/escrow/milestones',
    metric: '100%',
    metricLabel: 'On-Time Milestone Settlement Rate',
    desc: 'The operational backbone for modern digital agencies: automates client onboarding, deliverable sprint contracts, live staging previews, and automated milestone billing reconciliation.',
    tags: ['Next.js 16', 'TypeScript', 'Supabase Auth', 'Stripe & Razorpay'],
    mockupType: 'dashboard',
    accentColor: '#EC4899',
    previewImage: '/service_websites.png',
  },
];

const FILTERS = [
  { key: 'all', label: 'All Projects', count: 6 },
  { key: 'ecommerce', label: 'eCommerce & D2C', count: 1 },
  { key: 'mobile', label: 'Mobile Apps', count: 1 },
  { key: 'web', label: 'Web Platforms', count: 2 },
  { key: 'ai', label: 'Autonomous AI', count: 2 },
] as const;

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'mobile' | 'web' | 'ai'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <>
      <style>{`
        .work-section {
          padding: 120px 0 130px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border);
          scroll-margin-top: 80px;
        }

        .work-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .work-label {
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

        .work-headerRow {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .work-headline {
          font-size: clamp(34px, 4.4vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0A0A0A;
          max-width: 750px;
        }

        .headlineMuted {
          color: #94A3B8;
          font-weight: 700;
        }

        .work-subtext {
          font-size: 15px;
          color: #64748B;
          max-width: 440px;
          line-height: 1.6;
        }

        /* ─── FILTER TABS ───────────────────────────────────── */
        .filterBar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 44px;
          flex-wrap: wrap;
          padding-bottom: 20px;
          border-bottom: 1px solid #F1F5F9;
        }

        .filterBtn {
          background: #F8F9FA;
          border: 1px solid var(--border);
          padding: 8px 16px;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .filterBtn:hover {
          background: #FFFFFF;
          color: #0A0A0A;
          border-color: #0A0A0A;
        }

        .filterBtnActive {
          background: #0A0A0A;
          color: #FFFFFF;
          border-color: #0A0A0A;
        }

        .filterBtnActive:hover {
          background: #0A0A0A;
          color: #FFFFFF;
        }

        .filterCount {
          font-family: var(--font-mono);
          font-size: 10px;
          background: rgba(255, 255, 255, 0.2);
          padding: 1px 6px;
          border-radius: 9999px;
        }

        .filterBtn:not(.filterBtnActive) .filterCount {
          background: #E2E8F0;
          color: #334155;
        }

        /* ─── 2-COLUMN PORTFOLIO CARDS GRID ─────────────────── */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        .portfolioCard {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .portfolioCard:hover {
          transform: translateY(-5px);
          border-color: #0A0A0A;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        /* ─── CARD MOCKUP PREVIEW HEADER ─────────────────────── */
        .mockupHeader {
          background: #0D0E15;
          padding: 24px 24px 20px;
          border-bottom: 1px solid #1E2230;
          position: relative;
        }

        .browserChrome {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .browserDots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }
        .dotRed { background: #FF5F56; }
        .dotYellow { background: #FFBD2E; }
        .dotGreen { background: #27C93F; }

        .browserUrl {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #94A3B8;
          background: #181B26;
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid #282D3F;
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mockupBody {
          background: #141622;
          border: 1px solid #24293D;
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .mockupLeft {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mockupHeroStat {
          font-family: var(--font-mono);
          font-size: 26px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }

        .mockupHeroLabel {
          font-size: 12px;
          color: #94A3B8;
          font-weight: 500;
        }

        .mockupBadge {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ─── CARD CONTENT BODY ──────────────────────────────── */
        .cardBody {
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 18px;
        }

        .cardMetaRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cardCategory {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: #FF4B3E;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .cardStatus {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          color: #15803D;
          background: #DCFCE7;
          padding: 3px 8px;
          border-radius: 9999px;
        }

        .statusDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16A34A;
        }

        .cardTitle {
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0A0A0A;
          line-height: 1.3;
        }

        .cardClient {
          font-size: 13px;
          color: #64748B;
          font-weight: 500;
          margin-top: 4px;
        }

        .cardDesc {
          font-size: 14px;
          line-height: 1.65;
          color: #475569;
          flex-grow: 1;
        }

        /* ─── METRIC OUTCOME BOX ────────────────────────────── */
        .outcomeBox {
          background: #F8F9FA;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .outcomeVal {
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 800;
          color: #0A0A0A;
        }

        .outcomeLabel {
          font-size: 13px;
          font-weight: 700;
          color: #16A34A;
        }

        /* ─── TAGS & ACTIONS ─────────────────────────────────── */
        .tagsAndAction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
          margin-top: auto;
          flex-wrap: wrap;
        }

        .cardTags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          max-width: 400px;
        }

        .cardTag {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: #334155;
          background: #F1F5F9;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .cardActionBtn {
          font-size: 13px;
          font-weight: 700;
          color: #0A0A0A;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cardActionBtn:hover {
          color: #FF4B3E;
          transform: translateX(2px);
        }

        /* ─── BOTTOM PORTFOLIO CTA BANNER ────────────────────── */
        .portfolioCtaBanner {
          background: #0A0A0E;
          color: #FFFFFF;
          border-radius: 20px;
          padding: 36px 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .ctaLeft {
          max-width: 720px;
        }

        .ctaTitle {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .ctaSub {
          font-size: 14.5px;
          color: #94A3B8;
          line-height: 1.5;
        }

        .ctaBtn {
          background: #FF4B3E;
          color: #FFFFFF;
          padding: 13px 28px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ctaBtn:hover {
          background: #E03E32;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(255, 75, 62, 0.3);
        }

        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .portfolioCtaBanner {
            padding: 28px 24px;
          }
          .cardBody {
            padding: 20px;
          }
          .mockupHeader {
            padding: 16px;
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-inner">
          {/* SECTION LABEL */}
          <div className="work-label">
            <span className="coralSquare" />
            <span>Selected Portfolio</span>
          </div>

          {/* HEADER ROW */}
          <div className="work-headerRow">
            <h2 className="work-headline">
              Products engineered for momentum.{' '}
              <span className="headlineMuted">Bespoke code, verified ROI.</span>
            </h2>
            <p className="work-subtext">
              A sample of high-speed web apps, mobile products, and autonomous AI systems delivered for category leaders across India and global markets.
            </p>
          </div>

          {/* FILTER BAR */}
          <div className="filterBar">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  className={`filterBtn ${isActive ? 'filterBtnActive' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  <span>{f.label}</span>
                  <span className="filterCount">
                    {f.key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.categoryKey === f.key).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2-COLUMN PROJECT CARDS GRID */}
          <div className="work-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="portfolioCard">
                {/* MOCKUP PREVIEW HEADER */}
                <div className="mockupHeader">
                  <div className="browserChrome">
                    <div className="browserDots">
                      <span className="dot dotRed" />
                      <span className="dot dotYellow" />
                      <span className="dot dotGreen" />
                    </div>
                    <div className="browserUrl">https://{p.urlMock}</div>
                  </div>

                  <div className="mockupBody">
                    <div className="mockupLeft">
                      <span className="mockupHeroStat">{p.metric}</span>
                      <span className="mockupHeroLabel">{p.metricLabel}</span>
                    </div>

                    <span
                      className="mockupBadge"
                      style={{
                        background: `${p.accentColor}18`,
                        color: p.accentColor,
                        border: `1px solid ${p.accentColor}40`,
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="cardBody">
                  <div className="cardMetaRow">
                    <span className="cardCategory">{p.category}</span>
                    <span className="cardStatus">
                      <span className="statusDot" />
                      SHIPPED IN PRODUCTION
                    </span>
                  </div>

                  <div>
                    <h3 className="cardTitle">{p.title}</h3>
                    <div className="cardClient">{p.client}</div>
                  </div>

                  {/* OUTCOME BOX */}
                  <div className="outcomeBox">
                    <span className="outcomeVal">{p.metric}</span>
                    <span className="outcomeLabel">✓ {p.metricLabel}</span>
                  </div>

                  <p className="cardDesc">{p.desc}</p>

                  {/* TAGS & CTA */}
                  <div className="tagsAndAction">
                    <div className="cardTags">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="cardTag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?project=${encodeURIComponent(p.title)}`}
                      className="cardActionBtn"
                    >
                      <span>Book Sprint</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM PORTFOLIO CTA BANNER */}
          <div className="portfolioCtaBanner">
            <div className="ctaLeft">
              <h3 className="ctaTitle">Ready to build your next digital flagship?</h3>
              <p className="ctaSub">
                We engineer and ship full products in 4–6 week fixed-milestone sprints. Direct communication with lead technical founders, 100% code ownership handed over.
              </p>
            </div>

            <Link href="/contact" className="ctaBtn">
              Start a Project ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
