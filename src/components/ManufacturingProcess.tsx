'use client';

import Link from 'next/link';
import styles from './ManufacturingProcess.module.css';

interface Step {
  num: string;
  stage: string;
  title: string;
  summary: string;
  tags: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    stage: 'SCOPE',
    title: 'Discovery & Scope',
    summary: 'System architecture blueprint, wireframe user flows, and a fixed milestone contract before a single line of code is written.',
    tags: ['Architecture Map', 'Fixed Milestone'],
  },
  {
    num: '02',
    stage: 'DESIGN',
    title: 'UI/UX Prototype',
    summary: 'Clickable high-fidelity Figma prototype to validate user experience, interactions, and design before development begins.',
    tags: ['Figma System', 'Clickable Flow'],
  },
  {
    num: '03',
    stage: 'BUILD',
    title: 'Full-Stack Sprints',
    summary: 'Senior developers build your product in modular Next.js & React Native. Weekly staging previews with direct code visibility.',
    tags: ['Live Staging URL', 'API Integrations'],
  },
  {
    num: '04',
    stage: 'LAUNCH',
    title: 'Launch & Warranty',
    summary: 'Zero-downtime production release, 100% Git repository transfer, and 30 days of post-launch SLA bug fixing support.',
    tags: ['Production Edge', '100% IP Transfer'],
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
              <div className={styles.cardTop}>
                <span className={styles.stepNum}>{s.num}</span>
                <span className={styles.stepBadge}>{s.stage}</span>
              </div>

              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepSummary}>{s.summary}</p>

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
              <strong>Guaranteed Milestone Delivery:</strong> Weekly live staging demos, direct WhatsApp communication with lead founders Nirbhay &amp; Aditya, and zero hidden scope surprises.
            </p>
          </div>

          <Link href="/contact" className={styles.bannerBtn}>
            Book a Sprint ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
