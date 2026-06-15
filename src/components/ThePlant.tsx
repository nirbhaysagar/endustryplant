'use client';

import { useEffect, useRef } from 'react';
import styles from './ThePlant.module.css';

const PHOTOS = [
  { x: '10%', y: '10%', rotate: '-8deg', src: 'https://picsum.photos/seed/plant1/300/400?grayscale', zIndex: 1 },
  { x: '45%', y: '5%', rotate: '2deg', src: 'https://picsum.photos/seed/plant2/400/500?grayscale', zIndex: 2 },
  { x: '25%', y: '40%', rotate: '-5deg', src: 'https://picsum.photos/seed/plant3/300/400?grayscale', zIndex: 3 },
  { x: '65%', y: '35%', rotate: '7deg', src: 'https://picsum.photos/seed/plant4/350/450?grayscale', zIndex: 4 },
  { x: '45%', y: '50%', rotate: '-2deg', src: 'https://picsum.photos/seed/plant5/350/350?grayscale', zIndex: 5 },
];

export default function ThePlant() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (!items) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = el.getAttribute('data-final-transform') || 'none';
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach(item => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="plant" className={styles.plant} ref={sectionRef}>
      <div className={styles.inner}>

        {/* The White Browser Window */}
        <div className={styles.windowContainer}>
          {/* Top Bar */}
          <div className={styles.windowTopBar}>
            <div className={styles.macDot} />
            <div className={styles.macDot} />
            <div className={styles.macDot} />
            <div className={styles.urlBar}>endustryplant.com</div>
          </div>

          <div className={styles.scrapbookContent}>
            
            {/* Handwriting Header */}
            <h2 className={styles.mainTitle}>IT&apos;S A PLEASURE TO MEET YOU!</h2>

            {/* Collage Cluster */}
            <div className={styles.cluster}>
              
              {/* Polaroids */}
              {PHOTOS.map((p, i) => (
                <div
                  key={i}
                  className={styles.photoWrap}
                  style={{
                    left: p.x,
                    top: p.y,
                    transform: `rotate(${p.rotate})`,
                    zIndex: p.zIndex,
                  }}
                >
                  <div className={styles.photo}>
                    <img src={p.src} alt="Scrapbook memory" />
                  </div>
                </div>
              ))}

              {/* Red Paperclip */}
              <svg className={styles.paperclip} style={{ left: '5%', top: '25%', transform: 'rotate(-15deg)' }} viewBox="0 0 40 100" width="40" height="100">
                <path d="M20 10 C10 10 5 15 5 25 L5 75 C5 85 10 90 20 90 C30 90 35 85 35 75 L35 30 C35 24 32 20 28 20 C24 20 20 24 20 30 L20 70 C20 74 22 76 24 76 C26 76 28 74 28 70 L28 35" stroke="#E63946" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Gold Paperclip */}
              <svg className={styles.paperclip} style={{ right: '15%', top: '45%', transform: 'rotate(70deg)' }} viewBox="0 0 40 100" width="40" height="100">
                <path d="M20 10 C10 10 5 15 5 25 L5 75 C5 85 10 90 20 90 C30 90 35 85 35 75 L35 30 C35 24 32 20 28 20 C24 20 20 24 20 30 L20 70 C20 74 22 76 24 76 C26 76 28 74 28 70 L28 35" stroke="#F4A261" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Hand drawn annotations */}
              <div className={styles.scribbleText} style={{ top: '-5%', left: '35%' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" style={{position:'absolute', left:-20, top:20}}>
                  <path d="M5 5 Q20 20 35 35 M20 35 L35 35 L35 20" stroke="#1a108a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                FOUNDED, 2026, INTERNET
              </div>

              <div className={styles.scribbleText} style={{ bottom: '-15%', left: '10%' }}>
                LOCATION:<br/>
                <span style={{textDecoration: 'line-through'}}>UNITED KINGDOM</span>, GLOBAL
              </div>

              {/* Cherries Doodle */}
              <svg className={styles.doodle} style={{ right: '-15%', bottom: '-5%', transform: 'rotate(-10deg)' }} viewBox="0 0 100 100" width="100" height="100">
                <path d="M50 20 Q70 10 90 30" stroke="#1a108a" strokeWidth="2" fill="none" />
                <path d="M50 20 Q60 50 40 70" stroke="#1a108a" strokeWidth="2" fill="none" />
                <path d="M50 20 Q70 60 80 80" stroke="#1a108a" strokeWidth="2" fill="none" />
                <circle cx="40" cy="70" r="12" stroke="#1a108a" strokeWidth="2" fill="none" />
                <circle cx="80" cy="80" r="12" stroke="#1a108a" strokeWidth="2" fill="none" />
              </svg>
              
              <svg className={styles.doodle} style={{ right: '-5%', bottom: '-25%', transform: 'rotate(15deg)' }} viewBox="0 0 100 100" width="80" height="80">
                <path d="M50 20 Q60 50 40 70" stroke="#1a108a" strokeWidth="2" fill="none" />
                <path d="M50 20 Q70 60 80 80" stroke="#1a108a" strokeWidth="2" fill="none" />
                <circle cx="40" cy="70" r="10" stroke="#1a108a" strokeWidth="2" fill="none" />
                <circle cx="80" cy="80" r="10" stroke="#1a108a" strokeWidth="2" fill="none" />
              </svg>

              {/* Scribble ball */}
              <svg className={styles.doodle} style={{ right: '-10%', top: '25%' }} viewBox="0 0 60 60" width="60" height="60">
                <path d="M30 10 Q50 15 45 35 Q40 55 20 45 Q5 35 15 20 Q25 5 40 10 Q55 15 50 30 Q45 45 30 40 Q15 35 20 25 Q25 15 35 20" stroke="#1a108a" strokeWidth="1.5" fill="none" />
              </svg>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
