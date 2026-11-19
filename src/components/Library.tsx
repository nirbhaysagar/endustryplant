'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
import styles from './Library.module.css';

const FILTERS = [
  { key: 'all', label: 'All Work', count: 13 },
  { key: 'ecommerce', label: 'eCommerce & D2C', count: 5 },
  { key: 'saas', label: 'SaaS & Platforms', count: 3 },
  { key: 'website', label: 'Websites & Portals', count: 5 },
] as const;

export default function Library() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'saas' | 'website'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <section className={styles.workSection} id="work">
      <div className={styles.workInner}>
        {/* SECTION LABEL */}
        <div className={styles.workLabel}>
          <span className={styles.coralSquare} />
          <span>Selected Portfolio ({PORTFOLIO_PROJECTS.length})</span>
        </div>

        {/* HEADER ROW */}
        <div className={styles.workHeaderRow}>
          <h2 className={styles.workHeadline}>
            Work that had to perform.{' '}
            <span className={styles.headlineMuted}>Custom engineering, verified commercial ROI.</span>
          </h2>
          <p className={styles.workSubtext}>
            Production products engineered for category leaders across India and global markets.
          </p>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className={styles.filterBar}>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            const count = f.key === 'all'
              ? PORTFOLIO_PROJECTS.length
              : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === f.key).length;

            return (
              <button
                key={f.key}
                type="button"
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                <span>{f.label}</span>
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* 2-COLUMN PROJECT CARDS GRID */}
        <div className={styles.workGrid}>
          {filteredProjects.map((p) => {
            const displayUrl = p.link.replace(/^https?:\/\//, '').replace(/\/$/, '');

            return (
              <div key={p.id} className={styles.portfolioCard}>
                {/* BROWSER MOCKUP SCREENSHOT */}
                <div className={styles.browserMockup}>
                  <div className={styles.browserTopBar}>
                    <div className={styles.browserDots}>
                      <span className={`${styles.bDot} ${styles.bDotRed}`} />
                      <span className={`${styles.bDot} ${styles.bDotYellow}`} />
                      <span className={`${styles.bDot} ${styles.bDotGreen}`} />
                    </div>

                    <div className={styles.browserUrl}>https://{displayUrl}</div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.browserExtLink}
                      title={`Open ${p.title} in new tab`}
                    >
                      ↗
                    </a>
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.screenshotWrapper}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} Live Interface Screenshot`}
                      className={styles.screenshotImg}
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* SIMPLIFIED CARD BODY */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.cardCategory}>{p.categoryLabel}</span>
                    <span className={styles.outcomeBadge}>
                      ✓ {p.primaryMetric.val} · {p.primaryMetric.lbl}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.titleLink}
                    >
                      <span>{p.title}</span>
                      <span>↗</span>
                    </a>
                  </h3>

                  <p className={styles.cardDesc}>{p.desc}</p>

                  <div className={styles.cardFooter}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.siteLink}
                    >
                      Visit Website ↗
                    </a>

                    <Link
                      href={`/contact?project=${encodeURIComponent(p.title)}`}
                      className={styles.bookSprintLink}
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
        <div className={styles.workCtaBanner}>
          <div className={styles.ctaLeft}>
            <h3 className={styles.ctaTitle}>Have a product to build or storefront to scale?</h3>
            <p className={styles.ctaSub}>
              We engineer and ship full-scale products in 4–6 week fixed-milestone sprints. Direct communication with technical founders Nirbhay &amp; Aditya, with 100% IP code handover.
            </p>
          </div>

          <Link href="/contact" className={styles.ctaBtn}>
            Start a Project Sprint ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
