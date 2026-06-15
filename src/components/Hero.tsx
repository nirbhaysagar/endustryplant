'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={styles.hero} />;

  return (
    <section className={styles.hero} id="hero">
      
      {/* Background and center image */}
      <div className={styles.backgroundLayer}>
        <img src="/hero_image.png" alt="Cybernetic hands reaching for crystal" className={styles.centerImage} />
        <div className={styles.vignette}></div>
      </div>

      <div className={styles.content}>
        
        <h1 className={styles.headline}>
          <span className={styles.headlineSpan}>When intelligence reaches out</span><br/>
          <span className={styles.headlineSpan}>to instinct, the future takes shape</span>
        </h1>

        <p className={styles.subtext}>
          <span className={styles.subtextSpan}>an unlikely alliance - where human intuition</span><br/>
          <span className={styles.subtextSpan}>and algorithmic precision move as one</span>
        </p>

        <Link href="/#showcase" className={styles.ctaButton}>
          See it in action <span className={styles.arrow}>→</span>
        </Link>

      </div>
      
    </section>
  );
}
