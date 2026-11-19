'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';

const FILTERS = [
  { key: 'all', label: 'All Work', count: 14 },
  { key: 'ecommerce', label: 'eCommerce & D2C', count: 5 },
  { key: 'saas', label: 'SaaS & AI Platforms', count: 3 },
  { key: 'website', label: 'Websites & Portals', count: 6 },
] as const;

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'saas' | 'website'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <>
      <style>{`
        .work-section {
          padding: 110px 0 130px;
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
          margin-bottom: 40px;
          flex-wrap: wrap;
          padding-bottom: 16px;
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
          gap: 28px;
          margin-bottom: 56px;
        }

        .portfolioCard {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .portfolioCard:hover {
          transform: translateY(-4px);
          border-color: #0A0A0A;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
        }

        /* ─── CARD SCREENSHOT PREVIEW ────────────────────────── */
        .browserMockup {
          background: #0E1017;
          border-bottom: 1px solid #1E2230;
          position: relative;
          overflow: hidden;
        }

        .browserTopBar {
          padding: 11px 16px;
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
          gap: 5px;
        }

        .bDot {
          width: 8px;
          height: 8px;
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
          padding: 3px 10px;
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
          height: 260px;
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
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolioCard:hover .screenshotImg {
          transform: scale(1.025);
        }

        /* ─── SIMPLIFIED CARD BODY ───────────────────────────── */
        .cardBody {
          padding: 24px 24px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 12px;
        }

        .cardTopRow {
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
          color: #0A0A0A;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .outcomeBadge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: #15803D;
          background: #DCFCE7;
          padding: 3px 9px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .cardTitle {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #0A0A0A;
          line-height: 1.25;
        }

        .titleLink {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s ease;
        }

        .titleLink:hover {
          color: #FF4B3E;
        }

        .cardDesc {
          font-size: 14px;
          line-height: 1.6;
          color: #475569;
          flex-grow: 1;
        }

        .cardFooter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
          margin-top: 4px;
        }

        .siteLink {
          font-size: 13px;
          font-weight: 700;
          color: #0A0A0A;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.15s ease;
        }

        .siteLink:hover {
          color: #FF4B3E;
          transform: translateX(2px);
        }

        .bookSprintLink {
          font-size: 12.5px;
          font-weight: 700;
          color: #475569;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .bookSprintLink:hover {
          color: #0A0A0A;
        }

        /* ─── BOTTOM CTA BANNER ──────────────────────────────── */
        .workCtaBanner {
          background: #0A0A0E;
          color: #FFFFFF;
          border-radius: 20px;
          padding: 36px 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 20px;
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
            padding: 18px;
          }
          .screenshotWrapper {
            height: 210px;
          }
        }
      `}</style>

      <section className="work-section" id="work">
        <div className="work-inner">
          {/* SECTION LABEL */}
          <div className="work-label">
            <span className="coralSquare" />
            <span>Selected Portfolio ({PORTFOLIO_PROJECTS.length})</span>
          </div>

          {/* HEADER ROW */}
          <div className="work-headerRow">
            <h2 className="work-headline">
              Work that had to do something.{' '}
              <span className="headlineMuted">Bespoke code, verified commercial ROI.</span>
            </h2>
            <p className="work-subtext">
              Real production products engineered for category leaders across India and global markets.
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

                  {/* SIMPLIFIED CARD BODY */}
                  <div className="cardBody">
                    <div className="cardTopRow">
                      <span className="cardCategory">{p.categoryLabel}</span>
                      <span className="outcomeBadge">
                        ✓ {p.primaryMetric.val} · {p.primaryMetric.lbl}
                      </span>
                    </div>

                    <h3 className="cardTitle">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="titleLink"
                      >
                        <span>{p.title}</span>
                        <span>↗</span>
                      </a>
                    </h3>

                    <p className="cardDesc">{p.desc}</p>

                    <div className="cardFooter">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="siteLink"
                      >
                        Visit Website ↗
                      </a>

                      <Link
                        href={`/contact?project=${encodeURIComponent(p.title)}`}
                        className="bookSprintLink"
                      >
                        Book Sprint ↗
                      </Link>
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
