'use client';

import styles from './Hero.module.css';

export default function HeroHeadline() {
  return (
    <h1 className={styles.headline}>
      We build <span className={styles.headlineEm}>high-performance websites</span>,<br />
      <span className={styles.headlineEm}>applications</span>, and <span className={styles.headlineEm}>AI automations</span>
    </h1>
  );
}
