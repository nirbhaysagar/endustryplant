'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Capabilities.module.css';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    category: 'WEBSITES & LANDING ENGINES',
    title: 'Website Building',
    desc: 'Bespoke marketing & product engines engineered to convert. Sub-second load times, SEO architecture, custom design, and zero bloated plugins.',
    image: '/service_websites.png',
    deliverables: [
      'Sub-second Core Web Vitals (< 0.8s)',
      'Custom animations & interactive elements',
      'Integrated WhatsApp & lead capture forms',
      '100% custom code with Next.js 16',
    ],
  },
  {
    id: 'ecommerce',
    category: 'ECOMMERCE ARCHITECTURES',
    title: 'eCommerce Store Building',
    desc: 'High-performance stores built on Shopify Plus and custom headless stacks. Complete end-to-end design, custom integration, launch, and speed optimization.',
    image: '/service_ecommerce.png',
    deliverables: [
      'Razorpay & Cashfree 1-click UPI checkout',
      'Automated WhatsApp cart abandonment recovery',
      'Shiprocket & Delhivery courier sync',
      'Mobile conversion rate optimization',
    ],
  },
  {
    id: 'mobile',
    category: 'MOBILE APPLICATIONS',
    title: 'Mobile Apps (iOS & Android)',
    desc: 'Product-level native and cross-platform mobile development using Flutter and React Native. Built for scale, smooth 60fps animations, and rapid app approval.',
    image: '/service_mobile_apps.png',
    deliverables: [
      'Cross-platform iOS & Android releases',
      'One-click UPI & in-app purchases',
      'Native push notifications & device APIs',
      'App Store & Play Store publishing handled',
    ],
  },
  {
    id: 'webapp',
    category: 'FULL-STACK SOFTWARE',
    title: 'End-to-End Web Applications',
    desc: 'Full-stack applications engineered from scratch. High concurrency, secure database design, role-based access control, and real-time dashboards.',
    image: '/service_web_apps.png',
    deliverables: [
      'Supabase & PostgreSQL database architecture',
      'Role-based authentication & permissions',
      'Real-time analytics & reporting dashboards',
      'Automated GST invoicing & billing flows',
    ],
  },
  {
    id: 'automation',
    category: 'AI AUTOMATION',
    title: 'AI Workflow Automation',
    desc: 'Eliminate repetitive manual operations. We build custom AI agents and deterministic pipelines that handle lead qualification, customer support, and document extraction.',
    image: '/service_automation.png',
    deliverables: [
      'WhatsApp AI sales & booking agent',
      'Automated invoice & document data extraction',
      'CRM integration (HubSpot, Zoho, Sheets)',
      '24/7 autonomous operations without human delay',
    ],
  },
];

export default function Capabilities() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.inner}>
        {/* SECTION LABEL */}
        <div className={styles.label}>
          <span className={styles.coralSquare} />
          <span>Services</span>
        </div>

        {/* HEADER ROW */}
        <div className={styles.headerRow}>
          <div className={styles.titleRow}>
            <h2 className={styles.heading}>Our</h2>
            <div className={styles.sticker}>✦</div>
            <h2 className={styles.heading}>Services</h2>
          </div>

          <p className={styles.subtext}>
            We craft high-impact digital experiences through strategic design,
            seamless coding, and creative engineering.
          </p>
        </div>

        {/* 5 SERVICE CARDS */}
        <div className={styles.grid}>
          {SERVICES.map((srv) => (
            <div key={srv.id} className={styles.serviceCard}>
              <div className={styles.imageWrap}>
                <img src={srv.image} alt={srv.title} />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardCategory}>{srv.category}</div>
                <h3 className={styles.cardTitle}>{srv.title}</h3>
                <p className={styles.cardDesc}>{srv.desc}</p>

                <div className={styles.deliverablesList}>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className={styles.deliverableRow}>
                      <span className={styles.checkMark}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(srv.title)}`}
                  className={styles.cardAction}
                >
                  <span>Inquire about this service</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
