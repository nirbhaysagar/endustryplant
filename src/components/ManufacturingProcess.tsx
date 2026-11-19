'use client';

import styles from './ManufacturingProcess.module.css';

interface Step {
  num: string;
  timeframe: string;
  title: string;
  summary: string;
  deliverable: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    timeframe: 'Days 1–5',
    title: 'Discovery & System Blueprint',
    summary:
      'We audit your technical requirements, map database schemas, and define user journeys. You receive a fixed-price sprint contract before a single line of code is written.',
    deliverable: 'Architecture Blueprint & Fixed Milestone Spec',
  },
  {
    num: '02',
    timeframe: 'Days 6–14',
    title: 'Clickable UI/UX Prototype',
    summary:
      'We design high-converting, mobile-first interfaces in Figma. You receive an interactive prototype to click through the complete user experience before development begins.',
    deliverable: 'Interactive Figma Prototype & Design System',
  },
  {
    num: '03',
    timeframe: 'Days 15–28',
    title: 'Full-Stack Code Sprints',
    summary:
      'Senior developers build your product in modular Next.js and React Native. You receive private staging access with weekly video walkthroughs and live testing.',
    deliverable: 'Clean Modular Codebase & Staging URL',
  },
  {
    num: '04',
    timeframe: 'Day 29+',
    title: 'Production Launch & Warranty',
    summary:
      'Zero-downtime DNS deployment, 100% Git repository ownership transfer, and 30 days of included SLA bug warranty to guarantee complete peace of mind.',
    deliverable: 'Live Production Release & 30-Day SLA',
  },
];

export default function ManufacturingProcess() {
  return (
    <section className={styles.procSection} id="process">
      <div className={styles.procInner}>
        <div className={styles.procLabel}>
          <span className={styles.coralSquare} />
          <span>The Process</span>
        </div>

        <div className={styles.procHeaderRow}>
          <h2 className={styles.procHeadline}>
            Predictable 4-step delivery pipeline.{' '}
            <span className={styles.headlineMuted}>From blueprint to production launch.</span>
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {STEPS.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.cardHeader}>
                <span className={styles.stepNum}>{s.num}</span>
                <span className={styles.stepTime}>{s.timeframe}</span>
              </div>

              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepSummary}>{s.summary}</p>

              <div className={styles.deliverableNote}>
                <span className={styles.deliverableLabel}>Deliverable:</span>
                <span>{s.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
