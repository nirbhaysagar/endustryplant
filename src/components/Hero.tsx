'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroHeadline from './HeroHeadline';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={styles.hero} />;

  return (
    <section className={styles.hero} id="hero">
      
      {/* Decorative Hand-drawn Sketches */}
      <svg className={styles.sketch} style={{ top: '15%', right: '10%', transform: 'rotate(15deg)' }} width="130" height="110" viewBox="0 0 130 110">
        <path d="M30 50 C30 35 45 30 50 50 C55 70 70 65 70 50 C70 35 55 30 50 50 C45 70 30 65 30 50 Z" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 35 L50 50 L63 45" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="5" y="95" fontFamily="var(--font-hand)" fontSize="15" fill="#1A1A1A">continuous integration</text>
      </svg>

      <svg className={styles.sketch} style={{ top: '45%', left: '8%', transform: 'rotate(-10deg)' }} width="130" height="110" viewBox="0 0 130 110">
        <path d="M40 70 L60 40 L80 70 Z" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 50 L110 50" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M20 20 L20 45 M15 35 L20 45 L25 35" stroke="#39FF85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M100 45 L100 20 M95 30 L100 20 L105 30" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="5" y="95" fontFamily="var(--font-hand)" fontSize="15" fill="#1A1A1A">compounding leverage</text>
      </svg>

      <svg className={styles.sketch} style={{ bottom: '15%', right: '8%', transform: 'rotate(5deg)' }} width="130" height="110" viewBox="0 0 130 110">
        <circle cx="20" cy="20" r="6" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="50" r="6" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <circle cx="80" cy="30" r="6" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <circle cx="30" cy="70" r="6" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M26 20 L44 45 M56 50 L74 34 M36 65 L46 54 M24 25 L28 65 M50 56 L80 34" stroke="#1A1A1A" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
        <text x="10" y="95" fontFamily="var(--font-hand)" fontSize="15" fill="#1A1A1A">database schema v1.0</text>
      </svg>

      <div className={styles.content}>
        
        <HeroHeadline />

        <p className={styles.subtext}>
          from bespoke code and ecommerce stores to mobile platforms
          and autonomous workflows — we build systems that yield compounding leverage
        </p>

        <Link href="/#showcase" className={styles.ctaButton}>
          See it in action <span className={styles.arrow}>→</span>
        </Link>

        {/* Hand drawn Annotation */}
        <div className={styles.annotationWrap}>
          <svg width="30" height="24" viewBox="0 0 30 24" style={{ marginRight: '8px' }}>
            <path d="M25 20 Q15 10 5 5 M15 5 L5 5 L5 15" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <span>Manufactured for global scale</span>
        </div>

      </div>
      
    </section>
  );
}
