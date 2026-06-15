'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProblemSolution.module.css';

function AnimatedCounter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    let startTime: number | null = null;
    let animId: number;
    let started = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        animId = requestAnimationFrame(animate);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    
    obs.observe(el);
    
    return () => {
      obs.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

const STATS = [
  { target: 90, suffix: '%', desc: "of digital products fail because they focus on code instead of compounding distribution systems." },
  { target: 78, suffix: '%', desc: "of agencies sell billable hours instead of tangible, revenue-generating outcomes." },
  { target: 10, suffix: 'x', desc: "more time is wasted on manual workflows that should be fully autonomous AI agents." }
];

export default function ProblemSolution() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        
        <div className={styles.header}>
          <h2 className={styles.heading}>
            THE INDUSTRY IS <em>BROKEN</em>
          </h2>
        </div>

        <div className={styles.statsContainer}>
          {STATS.map((stat, i) => (
            <div key={i} className={styles.statRow}>
              <div className={styles.statNumberWrap}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={stat.target} />
                </div>
                <div className={styles.statSuffix}>{stat.suffix}</div>
              </div>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.solutionBlock}>
          <p className={styles.solutionIntro}>THE ENDUSTRY PLANT APPROACH</p>
          <p className={styles.solutionLine}>
            Instead of Code <span>→</span> <strong>We Build Infrastructure.</strong>
          </p>
          <p className={styles.solutionLine}>
            Instead of Hours <span>→</span> <strong>We Build Systems.</strong>
          </p>
          <p className={styles.solutionLine}>
            Instead of Manual Work <span>→</span> <strong>We Build Autonomous Agents.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
