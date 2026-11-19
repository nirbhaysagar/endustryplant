'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

const CLIENT_STACKS = [
  'Razorpay',
  'Next.js 16',
  'Shopify Plus',
  'React Native',
  'Supabase',
  'OpenAI',
  'Cashfree',
];

export default function Hero() {
  return (
    <>
      <div className={styles.heroOuter}>
        <section className={styles.heroCard} id="hero">
          <div className={styles.heroGlow} />

          {/* MAIN HEADLINE */}
          <div className={styles.heroBody}>
            <div className={styles.eyebrow}>
              <span className={styles.coralSquare} />
              <span>Next-Gen Design &amp; Product Agency</span>
            </div>

            <h1 className={styles.headline}>
              Next-Gen<br />
              Design Agency for<br />
              Growing Brands.
            </h1>
          </div>

          {/* BOTTOM BAR INSIDE HERO */}
          <div className={styles.bottomRow}>
            <div className={styles.pillarsLeft}>
              <span className={styles.pillarItem}>+ Define</span>
              <span className={styles.pillarItem}>+ Design</span>
              <span className={styles.pillarItem}>+ Development</span>
              <span className={styles.pillarItem}>+ AI Automation</span>
            </div>

            <div className={styles.actionsRight}>
              <p className={styles.servicesPitch}>
                High-Speed Websites, Mobile &amp; Web Apps<br />
                Engineered for Startups and Giants
              </p>

              <div className={styles.btnGroup}>
                <Link href="/#work" className={styles.coralBtn}>
                  View Projects ↗
                </Link>
                <Link href="/contact" className={styles.whiteBtn}>
                  Reach Out ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LOGO STRIP / SOCIAL PROOF (DIRECTLY BELOW HERO CARD) */}
      <div className={styles.logoStrip}>
        <div className={styles.logoStripLeft}>
          <span className={styles.starIcon}>✱</span>
          <span className={styles.stripText}>
            We&apos;ve delivered 50+ enterprise &amp; high-growth products
          </span>
        </div>

        <div className={styles.logoRow}>
          {CLIENT_STACKS.map((stack, idx) => (
            <span key={idx} className={styles.clientLogo}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
