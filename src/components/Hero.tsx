'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

interface ShowcaseItem {
  id: string;
  name: string;
  tabLabel: string;
  image: string;
  tag: string;
  desc: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'web',
    tabLabel: 'Websites',
    name: 'Custom High-Conversion Websites',
    image: '/service_websites.png',
    tag: 'NEXT.JS 16 · ZERO TEMPLATES',
    desc: 'Sub-second speed, bespoke UI design, and seamless lead capture engineered for Indian scaleups.',
  },
  {
    id: 'ecommerce',
    tabLabel: 'eCommerce',
    name: 'Shopify Plus & Headless Stores',
    image: '/service_ecommerce.png',
    tag: 'RAZORPAY 1-CLICK · FAST CHECKOUT',
    desc: 'High-speed mobile checkout, WhatsApp automated cart recovery, and live courier tracking integration.',
  },
  {
    id: 'mobile',
    tabLabel: 'Mobile Apps',
    name: 'Native iOS & Android Apps',
    image: '/service_mobile_apps.png',
    tag: 'FLUTTER / REACT NATIVE',
    desc: 'Fluid 60fps mobile interfaces, one-click UPI payments, and App Store submission handled end-to-end.',
  },
  {
    id: 'automation',
    tabLabel: 'AI Automation',
    name: 'Autonomous AI Workflows',
    image: '/service_automation.png',
    tag: 'WHATSAPP BOT · LLM PIPELINES',
    desc: 'Automating lead qualification, invoice parsing, and internal CRM sync with custom OpenAI & Claude agents.',
  },
];

export default function Hero() {
  const [activeItem, setActiveItem] = useState(SHOWCASE_ITEMS[0]);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        {/* LEFT COLUMN: Crystal Clear Agency Proposition */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} />
            <span>Digital Product Studio · New Delhi (Global Clients)</span>
          </div>

          <h1 className={styles.h1}>
            We build websites, apps &amp; digital products that{' '}
            <span className={styles.h1Highlight}>grow your business.</span>
          </h1>

          <p className={styles.subtext}>
            Endustry Plant is a full-service digital agency based in Delhi. We design and
            engineer custom websites, high-converting eCommerce stores, mobile apps, and
            automated AI workflows. Fixed sprint pricing. Guaranteed timelines. 100% custom code.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Get a Free Quote <span>→</span>
            </Link>

            <a
              href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsApp}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.766.784 2.8.784h.005c3.179 0 5.766-2.587 5.767-5.767.001-3.18-2.585-5.769-5.776-5.769zm8.441 5.769c-.002 4.673-3.8 8.473-8.472 8.473-1.42 0-2.812-.355-4.048-1.026l-4.952 1.299 1.323-4.827c-.742-1.288-1.134-2.753-1.133-4.25.002-4.674 3.801-8.474 8.474-8.474 4.672 0 8.47 3.801 8.472 8.474z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className={styles.trustList}>
            <div className={styles.trustItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>100% Custom Code (No WordPress)</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Fixed Milestone Pricing</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>30-Day Free Post-Launch Warranty</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Real Visual Artwork Showcase */}
        <div className={styles.showcaseCard}>
          <div className={styles.showcaseTabs}>
            {SHOWCASE_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`${styles.showcaseTabBtn} ${activeItem.id === item.id ? styles.showcaseTabActive : ''}`}
                onClick={() => setActiveItem(item)}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          <div className={styles.imageFrame}>
            <img src={activeItem.image} alt={activeItem.name} />
          </div>

          <div>
            <div className={styles.showcaseMeta}>
              <div className={styles.showcaseTitle}>{activeItem.name}</div>
              <span className={styles.showcaseTag}>{activeItem.tag}</span>
            </div>
            <p className={styles.showcaseDesc} style={{ marginTop: '6px' }}>
              {activeItem.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
