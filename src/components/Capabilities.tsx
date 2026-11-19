'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Capabilities.module.css';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tech: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'websites',
    title: 'Website Building & Landing Pages',
    category: 'Next.js 16 · Core Web Vitals',
    image: '/service_websites.png',
    tech: 'Bespoke UI · Sub-Second Speed',
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Store Building',
    category: 'Shopify Plus · Headless Stacks',
    image: '/service_ecommerce.png',
    tech: 'Razorpay 1-Click · WhatsApp Recovery',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    category: 'iOS & Android Native Performance',
    image: '/service_mobile_apps.png',
    tech: 'Flutter / React Native · 60fps',
  },
  {
    id: 'webapp',
    title: 'End-to-End Web Applications',
    category: 'Full-Stack SaaS & Internal Portals',
    image: '/service_web_apps.png',
    tech: 'Postgres · Supabase · High Concurrency',
  },
  {
    id: 'automation',
    title: 'AI Workflow Automation',
    category: 'Autonomous Agents & LLM Pipelines',
    image: '/service_automation.png',
    tech: 'WhatsApp Bot · Document Extraction',
  },
];

export default function Capabilities() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeService = hoveredIdx !== null ? SERVICES[hoveredIdx] : null;

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.inner}>
        {/* ─── TOP SUBTITLES ROW (MATCHED TO REFERENCE) ─────── */}
        <div className={styles.topRow}>
          <div>
            <div className={styles.sectionLabel}>
              <span className={styles.coralSquare} />
              <span>Capabilities</span>
            </div>
            <p className={styles.topLeft}>
              We help ambitious brands grow through high-speed code, creative
              direction, and conversion-first digital systems designed for leverage.
            </p>
          </div>

          <p className={styles.topRight}>
            Explore the core services that shape every product we engineer and ship.
          </p>
        </div>

        {/* ─── BIG TYPOGRAPHIC STACKED LIST ─────────────────── */}
        <div className={styles.servicesList}>
          {SERVICES.map((srv, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <Link
                key={srv.id}
                href={`/contact?service=${encodeURIComponent(srv.title)}`}
                className={`${styles.serviceRow} ${isHovered ? styles.serviceRowActive : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className={styles.serviceRowInner}>
                  <h3 className={styles.serviceTitle}>{srv.title}</h3>

                  <div className={styles.serviceMeta}>
                    <span className={styles.serviceTag}>{srv.category}</span>
                    <span className={styles.serviceArrow}>↗</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ─── FLOATING IMAGE PREVIEW (CURSOR FOLLOWER) ──────── */}
        {activeService && (
          <div
            className={`${styles.floatingImageCard} ${hoveredIdx !== null ? styles.floatingImageVisible : ''}`}
            style={{
              left: `${cursorPos.x + 24}px`,
              top: `${cursorPos.y - 120}px`,
            }}
          >
            <img src={activeService.image} alt={activeService.title} />
            <div className={styles.floatingImageBadge}>
              {activeService.tech}
            </div>
          </div>
        )}

        {/* ─── BOTTOM CTA ───────────────────────────────────── */}
        <div className={styles.bottomCtaRow}>
          <Link href="/contact" className={styles.exploreAllBtn}>
            Book a Project Sprint ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
