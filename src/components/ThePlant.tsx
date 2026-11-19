'use client';

import Link from 'next/link';
import styles from './ThePlant.module.css';

const STUDIO_CARDS = [
  {
    image: '/anime_terminal.jpg',
    tag: 'ARCHITECTURE',
    title: 'Systems & Database Design',
  },
  {
    image: '/anime_writing.png',
    tag: 'DESIGN',
    title: 'UI/UX & Conversion Flows',
  },
  {
    image: '/anime_hands.jpg',
    tag: 'ENGINEERING',
    title: 'Full-Stack Next.js & Mobile',
  },
  {
    image: '/hero_image.png',
    tag: 'PRODUCTION',
    title: 'Deployment & SLA Support',
  },
];

const METRICS = [
  {
    num: '13+',
    title: 'Live Products',
    desc: 'Shipped websites, mobile apps, and eCommerce stores for Indian & global brands.',
  },
  {
    num: '100%',
    title: 'Custom Code',
    desc: 'Zero bloated templates or WordPress plugins. Engineered in Next.js, React, and TypeScript.',
  },
  {
    num: '4–6 Wk',
    title: 'Average Launch',
    desc: 'Rapid milestone sprints with weekly live staging demos and zero scope surprises.',
  },
  {
    num: '30 Days',
    title: 'Free SLA Warranty',
    desc: 'Complete peace of mind. Any bugs or regressions post-launch are fixed immediately.',
  },
];

export default function ThePlant() {
  return (
    <section id="about" className={styles.studioSection}>
      <div className={styles.inner}>
        {/* SECTION LABEL */}
        <div className={styles.label}>
          <span className={styles.coralSquare} />
          <span>The Studio</span>
        </div>

        {/* HEADLINE + LINK */}
        <div className={styles.headerRow}>
          <h2 className={styles.headline}>
            Two senior engineers. Zero agency middlemen.{' '}
            <span className={styles.headlineMuted}>We design, build, and ship your product directly.</span>
          </h2>

          <Link href="/contact" className={styles.aboutLink}>
            → START A SPRINT
          </Link>
        </div>

        {/* 4 ARTISTIC PORTRAIT CARDS */}
        <div className={styles.photoGrid}>
          {STUDIO_CARDS.map((card, idx) => (
            <div key={idx} className={styles.photoCard}>
              <img src={card.image} alt={card.title} />
              <div className={styles.photoCardOverlay}>
                <span className={styles.photoTag}>{card.tag}</span>
                <span className={styles.photoTitle}>{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BY THE NUMBERS */}
        <div className={styles.numbersSection}>
          <div className={styles.label}>
            <span className={styles.coralSquare} />
            <span>By The Numbers</span>
          </div>

          <div className={styles.numbersGrid}>
            {METRICS.map((m, idx) => (
              <div key={idx} className={styles.numberCol}>
                <div className={styles.bigNum}>{m.num}</div>
                <div className={styles.numTitle}>{m.title}</div>
                <p className={styles.numDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
