'use client';

import Link from 'next/link';
import styles from './ManufacturingProcess.module.css';

interface Step {
  num: string;
  stage: string;
  timeframe: string;
  title: string;
  summary: string;
  visualHeader: string;
  visualNodes: string[];
  visualHighlight: string;
  tags: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    stage: 'SCOPE',
    timeframe: 'Days 1–5',
    title: 'Discovery & System Blueprint',
    summary:
      'We audit business goals, map user journeys, and define schema architecture. You get a fixed-cost milestone contract before a single line of code is written.',
    visualHeader: 'Architecture Spec',
    visualNodes: ['User Flow', 'Edge CDN', 'Postgres DB'],
    visualHighlight: '✓ Fixed Contract Signed',
    tags: ['System Architecture', 'Fixed Milestone', 'Zero Scope Creep'],
  },
  {
    num: '02',
    stage: 'DESIGN',
    timeframe: 'Days 6–14',
    title: 'Clickable UI/UX Prototype',
    summary:
      'We design high-converting, responsive interfaces in Figma. You receive a clickable prototype to test the full user journey on mobile and desktop before engineering begins.',
    visualHeader: 'Figma Design System',
    visualNodes: ['8pt Grid', 'Auto-Layout', 'Interactive Flow'],
    visualHighlight: '✓ 100% Clickable Preview',
    tags: ['Figma Prototype', 'Mobile-First', 'Conversion UX'],
  },
  {
    num: '03',
    stage: 'BUILD',
    timeframe: 'Days 15–28',
    title: 'Full-Stack Code Sprints',
    summary:
      'Senior developers build your product in Next.js 16 and React Native. You get private access to live staging links with weekly video walkthroughs.',
    visualHeader: 'Production Repository',
    visualNodes: ['Next.js 16', 'TypeScript', 'Clean APIs'],
    visualHighlight: '✓ Weekly Staging Demos',
    tags: ['Clean Modular Code', 'Live Staging URL', 'Direct WhatsApp'],
  },
  {
    num: '04',
    stage: 'LAUNCH',
    timeframe: 'Day 29+',
    title: 'Production Launch & Warranty',
    summary:
      'Zero-downtime DNS cutover, full Git repository transfer, and 30 days of included post-launch SLA bug fixing at zero additional charge.',
    visualHeader: 'Live Deployment',
    visualNodes: ['Custom Domain', 'SSL & CDN', '100% IP Handover'],
    visualHighlight: '✓ 30-Day Free Bug Warranty',
    tags: ['Zero-Downtime DNS', '100% Code Ownership', '30-Day SLA'],
  },
];

export default function ManufacturingProcess() {
  return (
    <section className={styles.procSection} id="process">
      <div className={styles.procInner}>
        <div className={styles.procLabel}>
          <span className={styles.coralSquare} />
          <span>The Delivery Pipeline</span>
        </div>

        <div className={styles.procHeaderRow}>
          <h2 className={styles.procHeadline}>
            Predictable 4-step engineering sprint.{' '}
            <span className={styles.headlineMuted}>From technical blueprint to production launch.</span>
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {STEPS.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.cardTop}>
                <span className={styles.stepNum}>{s.num}</span>
                <span className={styles.stepBadge}>{s.timeframe}</span>
              </div>

              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepSummary}>{s.summary}</p>

              {/* STAGE VISUAL ARTIFACT PREVIEW */}
              <div className={styles.stageVisual}>
                <div className={styles.visualHeader}>
                  <span>Stage Artifact</span>
                  <span>{s.stage}</span>
                </div>
                <div className={styles.visualBody}>
                  <div className={styles.visualNodeRow}>
                    {s.visualNodes.map((node, i) => (
                      <span key={i} className={styles.visualNodeRow}>
                        <span className={styles.visualNode}>{node}</span>
                        {i < s.visualNodes.length - 1 && <span className={styles.visualArrow}>→</span>}
                      </span>
                    ))}
                  </div>
                  <div className={styles.visualHighlight}>{s.visualHighlight}</div>
                </div>
              </div>

              <div className={styles.tagsRow}>
                {s.tags.map((t, idx) => (
                  <span key={idx} className={styles.stepTag}>
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM GUARANTEE BANNER */}
        <div className={styles.procBanner}>
          <div className={styles.bannerLeft}>
            <span className={styles.bannerStar}>✱</span>
            <p className={styles.bannerText}>
              <strong>Guaranteed Milestone Delivery:</strong> Weekly live staging links, direct WhatsApp channel with lead founders Nirbhay &amp; Aditya, and 100% intellectual property transfer upon launch.
            </p>
          </div>

          <Link href="/contact" className={styles.bannerBtn}>
            Book a Project Sprint ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
