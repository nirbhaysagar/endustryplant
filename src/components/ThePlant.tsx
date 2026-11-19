'use client';

import Link from 'next/link';
import styles from './ThePlant.module.css';

const STUDIO_CARDS = [
  {
    image: '/anime_terminal.jpg',
    tag: 'ARCHITECTURE',
    title: 'Systems & Infrastructure',
  },
  {
    image: '/anime_writing.png',
    tag: 'STRATEGY',
    title: 'Brand & UX Research',
  },
  {
    image: '/anime_hands.jpg',
    tag: 'ENGINEERING',
    title: 'Full-Stack Execution',
  },
  {
    image: '/hero_image.png',
    tag: 'AUTOMATION',
    title: 'Autonomous Pipelines',
  },
];

const METRICS = [
  {
    num: '100%',
    title: 'Custom Code',
    desc: 'Zero bloated WordPress themes. Real engineering built with Next.js, React, and TypeScript.',
  },
  {
    num: '50+',
    title: 'Clients Served',
    desc: 'From startups to category giants across India and globally — each treated with extreme craft.',
  },
  {
    num: '100%',
    title: 'Success Score',
    desc: 'All 5-star delivery milestones. Strict SLA adherence with zero excuses or scope surprises.',
  },
  {
    num: '4–6 Wk',
    title: 'Average Delivery',
    desc: 'High-velocity sprint cycles with weekly live staging demos and continuous GitHub integration.',
  },
];

export default function ThePlant() {
  return (
    <section id="about" className={styles.studioSection}>
      <div className={styles.inner}>
        {/* SECTION LABEL */}
        <div className={styles.label}>
          <span className={styles.coralSquare} />
          <span>Who We Are</span>
        </div>

        {/* HEADLINE + LINK */}
        <div className={styles.headerRow}>
          <h2 className={styles.headline}>
            We build high-leverage digital systems to help category{' '}
            <span className={styles.headlineMuted}>leaders lead their industries.</span>
          </h2>

          <Link href="/contact" className={styles.aboutLink}>
            → ABOUT THE STUDIO
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
