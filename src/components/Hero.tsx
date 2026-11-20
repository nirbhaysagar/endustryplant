'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

interface MarqueeItem {
  name: string;
  sub?: string;
  icon: React.ReactNode;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    name: 'Google',
    sub: 'Cloud & V8',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    sub: 'Azure & TS',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24">
        <path fill="#F25022" d="M1 1h10v10H1z"/>
        <path fill="#7FBA00" d="M13 1h10v10H13z"/>
        <path fill="#00A4EF" d="M1 13h10v10H1z"/>
        <path fill="#FFB900" d="M13 13h10v10H13z"/>
      </svg>
    ),
  },
  {
    name: 'Shopify Plus',
    sub: 'Headless D2C',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#95BF47">
        <path d="M15.33 3.56c-.03-.23-.22-.39-.45-.37-.22.02-2.14.21-3.26.47-.28-.79-.83-1.63-1.85-1.66h-.14c-.93 0-1.81.65-2.31 1.74-.83 1.83-.24 4.31.28 5.62l-4.55 1.39c-.4.12-.53.64-.26.96l4.47 5.23L4.93 21.6c-.19.34.07.76.46.74l10.9-1.02c.3-.03.55-.26.58-.56l1.35-14.73c.02-.27-.14-.52-.39-.58l-2.5-.89zm-3.86 1.75c.34-.1.74-.18 1.17-.23-.21.84-.71 1.84-1.37 2.45-.37-.62-.48-1.57.2-2.22zm-.96 3.12c.57-.45 1.05-1.28 1.25-2.05.77.16 1.62.43 2.37.76l-3.62 1.29z"/>
      </svg>
    ),
  },
  {
    name: 'Razorpay',
    sub: '1-Click Pay',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#0284C7" d="M22.4 1.8l-8.3 12.2H8.3L16.6 1.8h5.8z"/>
        <path fill="#0C2340" d="M11.9 14.8l-5.6 7.4H.5l8.3-11 3.1 3.6z"/>
      </svg>
    ),
  },
  {
    name: 'Next.js 16',
    sub: 'Turbopack',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.83 18.23l-7.2-9.4v9.4H8.7V5.77h1.93l7.2 9.4V5.77h1.93v12.46h-1.93z"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    sub: 'Global Billings',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.97 8.64c0-.98-.82-1.42-2.11-1.42-1.74 0-3.95.66-5.59 1.67V3.53C8.07 2.76 10.38 2.3 12.44 2.3c4.76 0 7.82 2.36 7.82 6.54 0 6.08-8.35 5.51-8.35 8.35 0 1.15.98 1.54 2.42 1.54 2.11 0 4.57-.89 6.27-2.02v5.39c-1.92.93-4.38 1.4-6.84 1.4-4.88 0-8.15-2.4-8.15-6.65 0-6.4 8.38-5.75 8.38-8.21z"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    sub: 'Infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M7.78 12.63c-.11-.2-.25-.33-.42-.4-.17-.07-.4-.11-.69-.11h-.97v1.89h.89c.35 0 .63-.05.82-.16.19-.11.32-.26.4-.46.07-.2.11-.45.11-.76h-.14zm7.9-3.21c.21-.19.46-.35.75-.48.29-.13.6-.2.93-.2.43 0 .81.1 1.14.3.33.2.59.48.78.84.19.36.28.78.28 1.26v5.27h-1.57v-1.12c-.28.43-.65.77-1.11 1.02-.46.25-.97.37-1.53.37-.58 0-1.1-.14-1.56-.42-.46-.28-.82-.67-1.08-1.17-.26-.5-.39-1.07-.39-1.71 0-.66.13-1.24.39-1.74.26-.5.62-.89 1.08-1.17.46-.28.98-.42 1.56-.42.54 0 1.04.12 1.5.36.46.24.84.58 1.14 1.02V11.1c0-.42-.12-.76-.36-1.02-.24-.26-.58-.39-1.02-.39-.33 0-.65.08-.96.24-.31.16-.58.38-.81.66l-1.12-1.17zm6.75 8.16C18.23 20.3 12.7 21.6 6.9 19.8c-.8-.25-1.5-.6-2.2-1-.3-.2-.3-.5 0-.7.3-.2.6-.2.9 0 4.9 2.5 10.6 1.8 15.6-.7.4-.2.8.1.8.5.1.2 0 .5-.2.7z"/>
      </svg>
    ),
  },
  {
    name: 'React Native',
    sub: 'iOS & Android',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(30 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(90 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(150 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    sub: 'Postgres DB',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#3ECF8E">
        <path d="M13.4 1.2c-.6-.7-1.7-.5-2.1.3L1.5 15.4c-.4.7.1 1.6.9 1.6h8.8l-1.9 5.8c-.3.9.8 1.5 1.4.8l11.8-13.9c.4-.7-.1-1.6-.9-1.6H12.8l2.6-5.8c.2-.4.1-.8-.1-1.1z"/>
      </svg>
    ),
  },
  {
    name: 'Aura Lifestyle',
    sub: '+240% Conv',
    icon: <span style={{ color: '#FF4B3E', fontWeight: 800 }}>✱</span>,
  },
  {
    name: 'MedSync Telehealth',
    sub: 'Bengaluru',
    icon: <span style={{ color: '#10B981', fontWeight: 800 }}>✚</span>,
  },
  {
    name: 'QuickBite Express',
    sub: '18k Orders/Day',
    icon: <span style={{ color: '#F59E0B', fontWeight: 800 }}>⚡</span>,
  },
  {
    name: 'ShipPulse Logistics',
    sub: '₹12Cr+ GMV',
    icon: <span style={{ color: '#3B82F6', fontWeight: 800 }}>▲</span>,
  },
];

const PROOF_CARDS = [
  {
    id: 'speed',
    posClass: styles.cardTopLeft,
    icon: '⚡',
    badge: '0.68s LCP Speed',
    title: 'Sub-Second Edge Loads',
    sub: 'Next.js 16 · Turbopack · 100% Core Web Vitals',
  },
  {
    id: 'conv',
    posClass: styles.cardTopRight,
    icon: '📈',
    badge: '+240% Checkout Conv',
    title: 'Aura Lifestyle D2C',
    sub: 'Shopify Plus · Razorpay 1-Click UPI',
  },
  {
    id: 'stack',
    posClass: styles.cardMidLeft,
    icon: '🛠️',
    badge: '100% Bespoke Code',
    title: 'Zero Template Bloat',
    sub: 'React Native · Supabase · TypeScript',
  },
  {
    id: 'leads',
    posClass: styles.cardMidRight,
    icon: '📍',
    badge: '45+ Inquiries /mo',
    title: 'Trip Trek Holiday',
    sub: 'Destination Silos · WhatsApp Booking',
  },
  {
    id: 'ip',
    posClass: styles.cardBottomLeft,
    icon: '🔒',
    badge: '100% IP Handover',
    title: 'Full Git Repo Transfer',
    sub: 'Zero Vendor Lock-In · Clean Architecture',
  },
  {
    id: 'sla',
    posClass: styles.cardBottomRight,
    icon: '🛡️',
    badge: '30-Day Production SLA',
    title: 'Bug Fixing Warranty',
    sub: 'Included With Every Sprint Launch',
  },
];

export default function Hero() {
  return (
    <>
      <div className={styles.heroOuter}>
        <section className={styles.heroCard} id="hero">
          {/* PERPLEXITY × CARBON ATMOSPHERIC RAYS & RADIAL SPEED STREAKS */}
          <div className={styles.atmosphericRays} />
          <div className={styles.speedStreaks} />

          {/* UMI-INSPIRED 2.5D FLOATING PROOF ARTIFACTS (DESKTOP ORBIT) */}
          <div className={styles.orbitContainer} aria-hidden="true">
            {PROOF_CARDS.map((card) => (
              <div key={card.id} className={`${styles.floatingCard} ${card.posClass}`}>
                <div className={styles.cardIconBox}>{card.icon}</div>
                <div className={styles.cardDetails}>
                  <span className={styles.cardBadge}>{card.badge}</span>
                  <strong className={styles.cardTitle}>{card.title}</strong>
                  <span className={styles.cardSub}>{card.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER STAGE EDITORIAL MONOLITH */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.coralSquare} />
              <span>Senior Digital Product Studio · New Delhi</span>
            </div>

            <h1 className={styles.headline}>
              Engineering Studio<br />
              for India’s High-Growth<br />
              Digital Brands.
            </h1>

            <p className={styles.subheadline}>
              We architect, design, and code high-speed Next.js web applications,
              Shopify Plus headless storefronts, and cross-platform mobile products.
              Fixed milestone sprints with zero agency middlemen.
            </p>

            <div className={styles.btnGroup}>
              <Link href="/work" className={styles.coralBtn}>
                View Work (13) ↗
              </Link>
              <Link href="/contact" className={styles.whiteBtn}>
                Book A Call ↗
              </Link>
            </div>

            {/* MOBILE PROOF RAIL (CLEAN HORIZONTAL CAROUSEL ON SMALL SCREENS) */}
            <div className={styles.mobileProofRail}>
              {PROOF_CARDS.map((card) => (
                <div key={card.id} className={styles.mobileProofCard}>
                  <div className={styles.cardIconBox}>{card.icon}</div>
                  <div className={styles.cardDetails}>
                    <span className={styles.cardBadge}>{card.badge}</span>
                    <strong className={styles.cardTitle}>{card.title}</strong>
                    <span className={styles.cardSub}>{card.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* INFINITE MOVING ICONS & BRANDS MARQUEE (BELOW HERO) */}
      <div className={styles.logoStrip}>
        <div className={styles.marqueeHeader}>
          <span className={styles.starIcon}>✱</span>
          <span className={styles.stripText}>
            Work With Trusted Platforms & High-Growth Brands
          </span>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <div key={idx} className={styles.logoItem}>
                <span className={styles.logoIconWrap}>{item.icon}</span>
                <span>{item.name}</span>
                {item.sub && <span className={styles.logoSubLabel}>({item.sub})</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
