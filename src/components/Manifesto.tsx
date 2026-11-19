'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Manifesto.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  link: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Endustry Plant delivered our D2C eCommerce store in exactly 4 weeks. Their focus on mobile speed and Razorpay 1-click checkout increased our checkout conversions by 240% in month one. Invaluable partners.',
    name: 'Vikramaditya Singhania',
    role: 'Founder',
    company: 'Aura Lifestyle · Mumbai',
    metric: '+240% Checkout Conversion',
    link: 'https://aurafit.store',
  },
  {
    quote:
      'We spoke to 4 different agencies across Delhi and Bengaluru. Endustry Plant was the only one that spoke in terms of architectural latency and business metrics instead of selling billable hours. Delivered ahead of schedule.',
    name: 'Dr. Ananya Roy',
    role: 'Co-Founder',
    company: 'MedSync Healthtech · Bengaluru',
    metric: 'Launched 2 Weeks Early',
    link: 'https://medsync-telehealth.vercel.app',
  },
  {
    quote:
      'Their WhatsApp AI lead qualification bot manages hundreds of inbound queries daily for our logistics fleet. We saved over 35 staff hours a week. Very responsive team on WhatsApp.',
    name: 'Rohit Kulkarni',
    role: 'VP Operations',
    company: 'ShipPulse Express · Delhi NCR',
    metric: 'Saved 35+ Staff Hours / Wk',
    link: 'https://shippulse.io',
  },
];

const FAQS = [
  {
    q: 'How does Endustry Plant differ from traditional agencies or freelancers?',
    a: 'Traditional agencies outsource your project to junior developers and bill for endless hourly meetings. Freelancers often disappear mid-project without documentation. Endustry Plant is a boutique engineering and design studio run by senior technical founders Nirbhay Sagar and Aditya Kumar. You work directly with the developers writing your code, with fixed timelines and milestone guarantees.',
  },
  {
    q: 'What is your typical project timeline and delivery pace?',
    a: 'Most web application sprints and custom eCommerce platforms ship within 3 to 6 weeks. High-converting landing pages and portfolio websites launch in 7 to 10 days. We deploy to private staging links at the end of each week so you can test functionality in real time.',
  },
  {
    q: 'Do you natively support Indian payment gateways and logistics providers?',
    a: 'Yes. We have deep production experience integrating Razorpay, Cashfree, PayU, PhonePe PG, WhatsApp Business Cloud API, Shiprocket, and Delhivery. Everything is engineered specifically for Indian consumers and compliance.',
  },
  {
    q: 'What happens after our product goes live? What if we find bugs?',
    a: 'Every project includes a 30-day free post-launch warranty. If any bugs or discrepancies arise post-launch, our engineering team resolves them immediately at zero additional cost.',
  },
  {
    q: 'How fast can we kick off a new project?',
    a: 'Once we finalize project scope and milestone agreement, our sprint kickoff begins within 3 to 5 business days. You will be added to a dedicated WhatsApp channel directly with technical founders Nirbhay Sagar and Aditya Kumar.',
  },
];

export default function Manifesto() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className={styles.manifestoSection} id="faq">
      <div className={styles.manifestoInner}>
        <div className={styles.sectionLabel}>
          <span className={styles.coralSquare} />
          <span>CLIENT REVIEWS</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Tested in production by Indian founders.{' '}
          <span className={styles.headlineMuted}>Real brands, verified commercial results.</span>
        </h2>

        <div className={styles.testGrid}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={styles.testCard}>
              <span className={styles.testMetric}>✓ {t.metric}</span>
              <p className={styles.testQuote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testAuthorRow}>
                <div>
                  <div className={styles.testAuthorName}>{t.name}</div>
                  <div className={styles.testAuthorCompany}>{t.role}, {t.company}</div>
                </div>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.testSiteLink}
                >
                  Live Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <div className={styles.faqWrap}>
          <div className={styles.faqHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.coralSquare} />
              <span>CLEAR ANSWERS</span>
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`${styles.faqCard} ${openFaq === i ? styles.faqCardOpen : ''}`}>
                <button
                  type="button"
                  className={styles.faqBtn}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className={styles.faqAnswer}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ─── FINAL CTA BANNER ────────────────────────────── */}
        <div className={styles.ctaBox}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10B981', letterSpacing: '0.05em' }}>
              AVAILABLE FOR NEW SPRINT PROJECTS
            </span>
          </div>

          <h3 className={styles.ctaBoxTitle}>Ready to Build With High-Leverage Code?</h3>
          <p className={styles.ctaBoxSub}>
            Schedule a 15-minute scoping call with lead founders Nirbhay & Aditya.
            We will review your requirements and provide a fixed-price proposal within 24 hours.
          </p>

          <div className={styles.ctaBtnGroup}>
            <Link href="/contact" className={styles.ctaWhiteBtn}>
              Start a Project →
            </Link>
            <a
              href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWaGreen}
            >
              Chat on WhatsApp (+91 73021 64841)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
