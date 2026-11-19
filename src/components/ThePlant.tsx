'use client';

import styles from './ThePlant.module.css';

const TECH_ECOSYSTEM = [
  { name: 'Next.js 16', icon: '⚡' },
  { name: 'React 19', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Shopify Plus', icon: '🛍️' },
  { name: 'Flutter & React Native', icon: '📱' },
  { name: 'Razorpay & UPI', icon: '💳' },
  { name: 'Cashfree PG', icon: '🏦' },
  { name: 'WhatsApp Cloud API', icon: '💬' },
  { name: 'Shiprocket Logistics', icon: '📦' },
  { name: 'Supabase Postgres', icon: '🗄️' },
];

export default function ThePlant() {
  return (
    <section id="why-us" className={styles.thePlant}>
      {/* ─── ECOSYSTEM TICKER ───────────────────────────────── */}
      <div className={styles.tickerSection}>
        <div className={styles.tickerLabel}>
          Modern Engineering Stacks &amp; Indian Ecosystem Integrations
        </div>
        <div className={styles.tickerGrid}>
          {TECH_ECOSYSTEM.map((tech, i) => (
            <div key={i} className={styles.tickerPill}>
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4 KEY PERFORMANCE METRICS ─────────────────────── */}
      <div className={styles.metricsRow}>
        <div className={styles.metricCard}>
          <div className={styles.metricVal}>50+</div>
          <div className={styles.metricLabel}>Projects Shipped</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricVal}>4–6 Wks</div>
          <div className={styles.metricLabel}>Average Sprint Delivery</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricVal}>₹45Cr+</div>
          <div className={styles.metricLabel}>Client GMV Processed</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricVal}>100%</div>
          <div className={styles.metricLabel}>Code &amp; IP Ownership</div>
        </div>
      </div>

      {/* ─── ABOUT / WHO WE ARE ─────────────────────────────── */}
      <div className={styles.inner}>
        <div>
          <div className={styles.eyebrow}>WHO WE ARE</div>
          <h2 className={styles.title}>
            A Full-Service Digital Studio Built for Indian Founders.
          </h2>
          <p className={styles.desc}>
            Indian business owners usually face two bad options: pay exorbitant enterprise agency
            fees for bloated WordPress templates, or hire unreliable freelancers who stop answering
            calls when things get tough.
          </p>
          <p className={styles.desc}>
            We built Endustry Plant to be the exact partner we wished existed: fixed milestone pricing,
            senior developers who understand marketing funnels and business metrics, and reliable delivery
            every single time.
          </p>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarTitle}>01. Fixed Sprints, Zero Surprises</div>
              <div className={styles.pillarDesc}>
                Clear scope, milestone-based payments via Razorpay / NEFT, and guaranteed deadlines.
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarTitle}>02. Senior Engineers Only</div>
              <div className={styles.pillarDesc}>
                Direct access to technical founders Nirbhay &amp; Aditya — no junior account managers.
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarTitle}>03. 100% Custom Code</div>
              <div className={styles.pillarDesc}>
                Built cleanly with Next.js, React, and TypeScript. No slow page builders or fragile plugins.
              </div>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarTitle}>04. 30-Day Free Warranty</div>
              <div className={styles.pillarDesc}>
                We stand behind our work. Any bug fixes post-launch are resolved promptly at zero cost.
              </div>
            </div>
          </div>
        </div>

        {/* ─── STUDIO VERIFICATION CARD ───────────────────────── */}
        <div className={styles.studioCard}>
          <div className={styles.studioCardHeader}>
            <span style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A' }}>
              Studio Credentials
            </span>
            <span className={styles.badgeVerified}>
              ✓ Verified Agency
            </span>
          </div>

          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Headquarters</span>
              <span className={styles.detailVal}>New Delhi, India (Serving Global Clients)</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Direct Founder Lines</span>
              <span className={styles.detailVal}>
                Nirbhay Sagar (+91 73021 64841)<br />
                Aditya Kumar (+91 95486 91732)
              </span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Response SLA</span>
              <span className={styles.detailVal} style={{ color: '#15803D' }}>
                Under 15 Minutes on WhatsApp
              </span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>GST &amp; Invoicing</span>
              <span className={styles.detailVal}>Full GST Invoicing &amp; Milestones Handled</span>
            </div>
          </div>

          <div className={styles.founderNote}>
            &ldquo;We don&apos;t just build websites; we build the digital infrastructure that brings you leads, sales, and automated efficiency.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
