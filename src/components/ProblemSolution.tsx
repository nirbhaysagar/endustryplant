'use client';

import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>WHY ENDUSTRY PLANT</div>
          <h2 className={styles.heading}>The Honest Market Comparison</h2>
          <p className={styles.subtext}>
            We built our model specifically to eliminate the delays, hidden costs,
            and poor code quality that frustrate Indian founders.
          </p>
        </div>

        <div className={styles.compGrid}>
          {/* ─── FREELANCERS ─── */}
          <div className={styles.compCardBad}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardType}>Freelancer Collectives</h3>
              <div className={styles.cardSubtitle}>Inexpensive upfront, high hidden risk</div>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Unreliable timelines:</strong> Frequent project abandonment and unreturned WhatsApp calls.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Template bloat:</strong> Heavy reliance on generic WordPress themes with 30+ fragile plugins.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Zero documentation:</strong> Spaghetti code that no other developer can maintain or scale.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Disappearing post-launch:</strong> Bug fixes after final payment become impossible.
                </span>
              </div>
            </div>
          </div>

          {/* ─── TRADITIONAL AGENCIES ─── */}
          <div className={styles.compCardBad}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardType}>Traditional Agencies</h3>
              <div className={styles.cardSubtitle}>Heavy bureaucracy, exorbitant bills</div>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Inflated hourly rates:</strong> Endless billing cycles, scoping fees, and unexpected overages.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Junior handoff:</strong> Pitched by agency partners, but coded by inexperienced interns.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Slow change turnaround:</strong> Days of delay just to get small copy or design edits approved.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCross}>✕</span>
                <span style={{ color: '#475569' }}>
                  <strong>Complex retainers:</strong> Locked into expensive monthly contracts for minimal support.
                </span>
              </div>
            </div>
          </div>

          {/* ─── ENDUSTRY PLANT (HERO) ─── */}
          <div className={styles.compCardHero}>
            <div className={styles.heroTag}>THE ENDUSTRY ADVANTAGE</div>

            <div className={styles.cardHeader}>
              <h3 className={styles.cardType}>Endustry Plant Studio</h3>
              <div className={styles.cardSubtitle}>Modern product engineering, direct founder access</div>
            </div>

            <div className={styles.pointsList}>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span style={{ color: '#0F172A' }}>
                  <strong>Fixed sprint pricing:</strong> Guaranteed milestone budget with zero hidden hourly fees.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span style={{ color: '#0F172A' }}>
                  <strong>Senior developers only:</strong> Direct communication with technical founders Nirbhay &amp; Aditya.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span style={{ color: '#0F172A' }}>
                  <strong>100% Custom Next.js code:</strong> Sub-second speeds, zero templates, and full IP handover.
                </span>
              </div>
              <div className={styles.pointRow}>
                <span className={styles.pointCheck}>✓</span>
                <span style={{ color: '#0F172A' }}>
                  <strong>30-Day free SLA warranty:</strong> Any bugs or adjustments post-launch are fixed immediately.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
