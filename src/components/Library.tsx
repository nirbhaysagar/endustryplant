'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '@/data/portfolio';

const FILTERS = [
  { key: 'all', label: 'All Work', count: 14 },
  { key: 'ecommerce', label: 'eCommerce & D2C', count: 5 },
  { key: 'saas', label: 'SaaS & AI Platforms', count: 3 },
  { key: 'website', label: 'Websites & Portals', count: 6 },
] as const;

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'saas' | 'website'>('all');
  const [expandedDrawers, setExpandedDrawers] = useState<Record<string, boolean>>({});

  const toggleDrawer = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedDrawers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <>
      <style>{`
        .work-section {
          padding: 120px 0 140px;
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
          margin-bottom: 36px;
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
          max-width: 460px;
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
          padding: 9px 18px;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
          font-size: 10.5px;
          background: rgba(255, 255, 255, 0.2);
          padding: 1px 7px;
          border-radius: 9999px;
        }

        .filterBtn:not(.filterBtnActive) .filterCount {
          background: #E2E8F0;
          color: #334155;
        }

        /* ─── 2-COLUMN PROJECT CARDS GRID ───────────────────── */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 60px;
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
          position: relative;
        }

        .portfolioCard:hover {
          transform: translateY(-5px);
          border-color: #0A0A0A;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.09);
        }

        /* ─── CARD SCREENSHOT PREVIEW ────────────────────────── */
        .browserMockup {
          background: #0E1017;
          border-bottom: 1px solid #1E2230;
          position: relative;
          overflow: hidden;
        }

        .browserTopBar {
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-bottom: 1px solid #1A1E2C;
          background: #141722;
        }

        .browserDots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .bDot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .bDotRed { background: #FF5F56; }
        .bDotYellow { background: #FFBD2E; }
        .bDotGreen { background: #27C93F; }

        .browserUrl {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #94A3B8;
          background: #0B0D14;
          padding: 3px 12px;
          border-radius: 6px;
          border: 1px solid #232738;
          max-width: 320px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .browserExtLink {
          color: #94A3B8;
          font-size: 12px;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .browserExtLink:hover {
          color: #FFFFFF;
        }

        .screenshotWrapper {
          position: relative;
          width: 100%;
          height: 280px;
          background: #0A0A0E;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .screenshotImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolioCard:hover .screenshotImg {
          transform: scale(1.03);
        }

        /* ─── CARD BODY CONTENT ──────────────────────────────── */
        .cardBody {
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 16px;
        }

        .cardHeaderRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cardCatBadge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: #FF4B3E;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .cardLiveBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          color: #15803D;
          background: #DCFCE7;
          padding: 3px 9px;
          border-radius: 9999px;
        }

        .liveDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16A34A;
        }

        .cardTitle {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #0A0A0A;
          line-height: 1.25;
        }

        .cardDesc {
          font-size: 14px;
          line-height: 1.65;
          color: #475569;
        }

        /* ─── PRIMARY METRIC HIGHLIGHT BOX ──────────────────── */
        .primaryMetricBox {
          background: #F8F9FA;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .metricLeft {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .metricVal {
          font-family: var(--font-mono);
          font-size: 26px;
          font-weight: 800;
          color: #0A0A0A;
        }

        .metricLbl {
          font-size: 13.5px;
          font-weight: 700;
          color: #16A34A;
        }

        .metricCtx {
          font-size: 12px;
          color: #64748B;
          width: 100%;
          margin-top: -4px;
        }

        /* ─── EXPANDABLE CASE METRICS DRAWER ─────────────────── */
        .drawerToggleBtn {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          padding: 8px 14px;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          width: 100%;
          justify-content: space-between;
        }

        .drawerToggleBtn:hover {
          background: #E2E8F0;
          color: #0A0A0A;
        }

        .drawerContent {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .strategyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .strategyItem {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .strategyLbl {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .strategyTxt {
          font-size: 12.5px;
          line-height: 1.5;
          color: #1E293B;
        }

        .metricsSubgrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #E2E8F0;
        }

        .submetricBox {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .submetricVal {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 800;
          color: #0A0A0A;
        }

        .submetricLbl {
          font-size: 11px;
          font-weight: 600;
          color: #64748B;
        }

        /* ─── TAGS & BOTTOM ACTIONS ─────────────────────────── */
        .cardBottomRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
          margin-top: auto;
          flex-wrap: wrap;
        }

        .tagsWrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          max-width: 380px;
        }

        .tagPill {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: #334155;
          background: #F1F5F9;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .actionsWrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .siteLinkBtn {
          font-size: 13px;
          font-weight: 700;
          color: #0A0A0A;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.15s ease;
        }

        .siteLinkBtn:hover {
          color: #FF4B3E;
        }

        .sprintBtn {
          background: #0A0A0A;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sprintBtn:hover {
          background: #FF4B3E;
          transform: translateY(-1px);
        }

        /* ─── BOTTOM CTA BANNER ──────────────────────────────── */
        .workCtaBanner {
          background: #0A0A0E;
          color: #FFFFFF;
          border-radius: 20px;
          padding: 38px 44px;
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
          .workCtaBanner {
            padding: 28px 24px;
          }
          .cardBody {
            padding: 20px;
          }
          .strategyGrid {
            grid-template-columns: 1fr;
          }
          .metricsSubgrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-inner">
          {/* SECTION LABEL */}
          <div className="work-label">
            <span className="coralSquare" />
            <span>Selected Portfolio ({PORTFOLIO_PROJECTS.length} Shipped Projects)</span>
          </div>

          {/* HEADER ROW */}
          <div className="work-headerRow">
            <h2 className="work-headline">
              Work that had to do something.{' '}
              <span className="headlineMuted">Bespoke code, verified commercial ROI.</span>
            </h2>
            <p className="work-subtext">
              Real production products engineered for category leaders across India and global markets. Filter by sector or click to inspect live metrics.
            </p>
          </div>

          {/* CATEGORY FILTER BAR */}
          <div className="filterBar">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              const count = f.key === 'all'
                ? PORTFOLIO_PROJECTS.length
                : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === f.key).length;

              return (
                <button
                  key={f.key}
                  className={`filterBtn ${isActive ? 'filterBtnActive' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  <span>{f.label}</span>
                  <span className="filterCount">{count}</span>
                </button>
              );
            })}
          </div>

          {/* 2-COLUMN PROJECT CARDS GRID */}
          <div className="work-grid">
            {filteredProjects.map((p) => {
              const isExpanded = !!expandedDrawers[p.id];
              const displayUrl = p.link.replace(/^https?:\/\//, '').replace(/\/$/, '');

              return (
                <div key={p.id} className="portfolioCard">
                  {/* BROWSER MOCKUP SCREENSHOT */}
                  <div className="browserMockup">
                    <div className="browserTopBar">
                      <div className="browserDots">
                        <span className="bDot bDotRed" />
                        <span className="bDot bDotYellow" />
                        <span className="bDot bDotGreen" />
                      </div>

                      <div className="browserUrl">https://{displayUrl}</div>

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="browserExtLink"
                        title={`Open ${p.title} in new tab`}
                      >
                        ↗
                      </a>
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="screenshotWrapper"
                    >
                      <img
                        src={p.image}
                        alt={`${p.title} Live Interface Screenshot`}
                        className="screenshotImg"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  {/* CARD BODY */}
                  <div className="cardBody">
                    <div className="cardHeaderRow">
                      <span className="cardCatBadge">{p.categoryLabel}</span>
                      <span className="cardLiveBadge">
                        <span className="liveDot" />
                        SHIPPED IN PRODUCTION
                      </span>
                    </div>

                    <div>
                      <h3 className="cardTitle">{p.title}</h3>
                      <p className="cardDesc">{p.desc}</p>
                    </div>

                    {/* PRIMARY METRIC BANNER */}
                    <div className="primaryMetricBox">
                      <div className="metricLeft">
                        <span className="metricVal">{p.primaryMetric.val}</span>
                        <span className="metricLbl">✓ {p.primaryMetric.lbl}</span>
                      </div>
                      <div className="metricCtx">{p.primaryMetric.ctx}</div>
                    </div>

                    {/* EXPANDABLE CASE METRICS TOGGLE */}
                    {p.bottleneck && (
                      <button
                        type="button"
                        className="drawerToggleBtn"
                        onClick={(e) => toggleDrawer(p.id, e)}
                        aria-expanded={isExpanded}
                      >
                        <span>📊 Case Strategy &amp; Metrics Breakdown</span>
                        <span>{isExpanded ? '▲ Hide' : '▼ Expand'}</span>
                      </button>
                    )}

                    {/* EXPANDED CONTENT DRAWER */}
                    {isExpanded && p.bottleneck && (
                      <div className="drawerContent">
                        <div className="strategyGrid">
                          <div className="strategyItem">
                            <span className="strategyLbl">Bottleneck</span>
                            <p className="strategyTxt">{p.bottleneck}</p>
                          </div>
                          <div className="strategyItem">
                            <span className="strategyLbl">Strategic Move</span>
                            <p className="strategyTxt">{p.strategicMove}</p>
                          </div>
                        </div>

                        {p.metrics && p.metrics.length > 0 && (
                          <div className="metricsSubgrid">
                            {p.metrics.map((m, idx) => (
                              <div key={idx} className="submetricBox">
                                <span className="submetricVal">{m.val}</span>
                                <span className="submetricLbl">{m.lbl}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAGS & ACTIONS */}
                    <div className="cardBottomRow">
                      <div className="tagsWrap">
                        {p.metaTags.map((t, idx) => (
                          <span key={idx} className="tagPill">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="actionsWrap">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="siteLinkBtn"
                        >
                          Visit Site ↗
                        </a>

                        <Link
                          href={`/contact?project=${encodeURIComponent(p.title)}`}
                          className="sprintBtn"
                        >
                          Book Sprint ↗
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA BANNER */}
          <div className="workCtaBanner">
            <div className="ctaLeft">
              <h3 className="ctaTitle">Have a product to build or storefront to scale?</h3>
              <p className="ctaSub">
                We engineer and ship full-scale products in 4–6 week fixed-milestone sprints. Direct communication with technical founders Nirbhay &amp; Aditya, with 100% IP code handover.
              </p>
            </div>

            <Link href="/contact" className="ctaBtn">
              Start a Project Sprint ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
