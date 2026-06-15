'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={`${styles.heroContent} ${mounted ? styles.visible : ''}`}>
        
        {/* Giant Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineRow}>WE</span>
          <span className={styles.headlineRow}>MANUFACTURE</span>
          <span className={styles.headlineRow}>DIGITAL</span>
          <span className={styles.headlineRow}>COMPANIES</span>
        </h1>

        {/* Polaroid 1 */}
        <div className={`${styles.polaroid} ${styles.polaroid1}`}>
          <img src="https://picsum.photos/seed/agency1/400/400?grayscale" alt="Agency team" />
        </div>

        {/* Polaroid 2 */}
        <div className={`${styles.polaroid} ${styles.polaroid2}`}>
          <img src="https://picsum.photos/seed/agency2/400/400?grayscale" alt="Agency work" />
        </div>

        {/* Side Text Block */}
        <div className={styles.sideBlock}>
          <p className={styles.sideText}>
            In a world overloaded with noise, agencies don&apos;t win by chasing attention—they earn it by building compounding infrastructure.
          </p>
          <a
            href="#capabilities"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('capabilities');
            }}
            className={styles.sideLink}
          >
            WHAT WE DO
          </a>
        </div>

      </div>
    </section>
  );
}
