'use client';

import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.coralSquare} />
          <span>Why Endustry Plant</span>
        </div>

        <div className={styles.headerRow}>
          <h2 className={styles.heading}>
            The honest market comparison.{' '}
            <span className={styles.headingMuted}>Why scaleups choose our studio.</span>
          </h2>
        </div>

        <div className={styles.compGrid}>
          {/* ─── FREELANCERS ─── */}
          <div className={styles.compCard}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardType}>Freelancer Collectives</h3>
              <span className={styles.badgeRisk}>High Hidden Risk</span>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Unpredictable timelines & dropped calls</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Generic WordPress themes with 30+ plugins</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Zero documentation or architectural roadmap</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Disappearing after final invoice payment</span>
              </div>
            </div>
          </div>

          {/* ─── TRADITIONAL AGENCIES ─── */}
          <div className={styles.compCard}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardType}>Traditional Agencies</h3>
              <span className={styles.badgeRisk}>Bloated Retainers</span>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Endless hourly billing and scoping delays</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Pitched by founders, coded by junior interns</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Days of bureaucracy for minor copy changes</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span>Expensive monthly retainers for minimal work</span>
              </div>
            </div>
          </div>

          {/* ─── ENDUSTRY PLANT ─── */}
          <div className={styles.compCardHero}>
            <div className={styles.heroPill}>OUR STUDIO ADVANTAGE</div>

            <div className={styles.cardTop}>
              <h3 className={styles.cardTypeHero}>Endustry Plant</h3>
              <span className={styles.badgeHero}>Guaranteed Sprints</span>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span>Fixed sprint pricing with zero surprise costs</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span>Direct WhatsApp channel with technical founders</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span>100% bespoke Next.js & React code (zero bloat)</span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span>30-Day free SLA warranty included post-launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
