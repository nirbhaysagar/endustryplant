'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  link: string;
  metric: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Endustry Plant scaled our festive eCommerce storefront to a 3.4x ROAS on ₹3.8L monthly ad spend. Their collection siloing, product schema, and direct Shopify checkout speed transformed our peak festive season sales.',
    name: 'Aditi Verma',
    role: 'Founder',
    company: 'Island Rangoli · New Delhi',
    link: 'https://islandrangoli.com',
    metric: '3.4x Blended ROAS',
  },
  {
    quote:
      'Our catalog with thousands of SKUs used to suffer severe mobile cart abandonment. Endustry Plant engineered an automated dynamic catalog ad engine and streamlined our 1-click checkout flow. Mobile conversion lifted immediately.',
    name: 'Pratik Agrawal',
    role: 'Managing Director',
    company: 'Crunchy Fashion · Delhi NCR',
    link: 'https://www.crunchyfashion.com',
    metric: '4.1x Retargeting ROAS',
  },
  {
    quote:
      'Before working with Endustry Plant, our engineering team was overwhelmed by low-ticket residential queries. Their commercial architectural RFQ funnel filtered out consumer noise and generated over ₹2.4Cr in high-ticket pipeline.',
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    company: 'All Indian Tensile · Pan-India',
    link: 'https://allindiantensile.in',
    metric: '₹480 CPL (Down from ₹1,200)',
  },
];

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What is your typical project pricing and payment structure?',
    a: 'We work on transparent, fixed milestone budgets — never unpredictable hourly billing. Custom websites typically range from ₹45,000 to ₹1.5L; full-stack apps and mobile products range from ₹1.5L to ₹5L; and AI automation workflows range from ₹50,000 to ₹2L depending on complexity. Payments are divided into 3 milestones: 40% kickoff, 30% upon clickable prototype approval, and 30% upon final launch and code handover. We provide full GST invoices.',
  },
  {
    q: 'Do we own 100% of the source code, design files, and intellectual property?',
    a: 'Yes, absolutely. You retain 100% ownership of all IP from day one. Upon final launch, we transfer the full Git repository, environment configurations, and Figma design assets directly to your team.',
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
    <>
      <style>{`
        .manifesto-section {
          padding: 120px 0 130px;
          background: #F8F9FA;
          border-bottom: 1px solid var(--border);
          scroll-margin-top: 80px;
        }

        .manifesto-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: #0A0A0A;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }

        .coralSquare {
          width: 7px;
          height: 7px;
          background: #FF4B3E;
          display: inline-block;
          border-radius: 1px;
        }

        .section-title {
          font-size: clamp(34px, 4.4vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0A0A0A;
          margin-bottom: 50px;
          max-width: 800px;
        }

        .headlineMuted {
          color: #94A3B8;
          font-weight: 700;
        }

        /* ─── TESTIMONIALS ─────────────────────────────────── */
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 90px;
        }

        .test-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .test-card:hover {
          transform: translateY(-4px);
          border-color: #0A0A0A;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
        }

        .test-metric {
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          color: #15803D;
          background: #DCFCE7;
          padding: 4px 10px;
          border-radius: 9999px;
          width: fit-content;
        }

        .test-quote {
          font-size: 14px;
          color: #334155;
          line-height: 1.7;
          font-style: italic;
        }

        .test-author-name {
          font-size: 15px;
          font-weight: 800;
          color: #0A0A0A;
        }

        .test-author-company {
          font-size: 12px;
          color: #64748B;
          margin-top: 2px;
        }

        .test-author-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
        }

        .test-site-link {
          font-size: 12px;
          font-weight: 700;
          color: #FF4B3E;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }

        .test-site-link:hover {
          transform: translateX(2px);
        }

        /* ─── FAQ ACCORDION ─────────────────────────────────── */
        .faq-wrap {
          max-width: 860px;
          margin: 0 auto 90px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .faq-card.open {
          border-color: #CBD5E1;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04);
        }

        .faq-btn {
          width: 100%;
          text-align: left;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          color: #0F172A;
          font-size: 16px;
          font-weight: 700;
        }

        .faq-icon {
          color: #64748B;
          font-size: 18px;
          font-weight: 600;
        }

        .faq-answer {
          padding: 0 24px 20px;
          color: #475569;
          font-size: 14px;
          line-height: 1.8;
        }

        /* ─── FINAL CTA BANNER ──────────────────────────────── */
        .cta-box {
          background: #0F172A;
          color: #FFFFFF;
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
        }

        .cta-box-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.03em;
        }

        .cta-box-sub {
          font-size: 16px;
          color: #94A3B8;
          max-width: 580px;
          line-height: 1.7;
        }

        .cta-btn-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 10px;
        }

        .cta-white-btn {
          background: #FFFFFF;
          color: #0F172A;
          padding: 14px 32px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .cta-white-btn:hover {
          background: #F1F5F9;
          transform: translateY(-2px);
        }

        .cta-wa-green {
          background: #25D366;
          color: #062E12;
          padding: 14px 28px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .cta-wa-green:hover {
          background: #20BA5A;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .test-grid {
            grid-template-columns: 1fr;
          }
          .cta-box {
            padding: 40px 24px;
          }
        }
      `}</style>

      <section className="manifesto-section" id="faq">
        <div className="manifesto-inner">
          <div className="section-label">
            <span className="coralSquare" />
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="section-title">
            Tested in production by Indian founders.{' '}
            <span className="headlineMuted">Real brands, verified commercial results.</span>
          </h2>

          <div className="test-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="test-card">
                <span className="test-metric">✓ {t.metric}</span>
                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="test-author-row">
                  <div>
                    <div className="test-author-name">{t.name}</div>
                    <div className="test-author-company">{t.role}, {t.company}</div>
                  </div>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="test-site-link"
                  >
                    Live Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ─── FAQ ─────────────────────────────────────────── */}
          <div className="faq-wrap">
            <div className="faq-header">
              <div className="section-label">
                <span className="coralSquare" />
                <span>CLEAR ANSWERS</span>
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#0A0A0A', letterSpacing: '-0.02em' }}>
                Frequently Asked Questions
              </h3>
            </div>

            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-card ${openFaq === i ? 'open' : ''}`}>
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <div className="faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* ─── FINAL CTA BANNER ────────────────────────────── */}
          <div className="cta-box">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10B981', letterSpacing: '0.05em' }}>
                AVAILABLE FOR NEW SPRINT PROJECTS
              </span>
            </div>

            <h3 className="cta-box-title">Ready to Build With High-Leverage Code?</h3>
            <p className="cta-box-sub">
              Schedule a 15-minute scoping call with lead founders Nirbhay &amp; Aditya.
              We will review your requirements and provide a fixed-price proposal within 24 hours.
            </p>

            <div className="cta-btn-group">
              <Link href="/contact" className="cta-white-btn">
                Start a Project →
              </Link>
              <a
                href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20project%20with%20Endustry%20Plant."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-wa-green"
              >
                Chat on WhatsApp (+91 73021 64841)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
