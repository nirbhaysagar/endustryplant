'use client';

import styles from './Hero.module.css';

export default function HeroHeadline() {
  return (
    <h1 className={styles.headline}>
      <span className={styles.headlineSpan}>When intelligence reaches out</span><br />
      <span className={styles.headlineSpan}>to instinct, the future takes shape</span>
    </h1>
  );
}
