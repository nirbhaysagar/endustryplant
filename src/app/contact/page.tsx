'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';
import styles from './Contact.module.css';

const SERVICE_OPTIONS = [
  { label: 'Website Building', value: 'website' },
  { label: 'eCommerce Store', value: 'ecommerce' },
  { label: 'Mobile App (iOS/Android)', value: 'mobile' },
  { label: 'Full-Stack Web App', value: 'webapp' },
  { label: 'AI Workflow Automation', value: 'automation' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://endustryplant.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact Studio',
      item: 'https://endustryplant.com/contact',
    },
  ],
};

function ContactContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('₹75K – ₹1.5L');
  const [details, setDetails] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['website']);
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      if (serviceParam.includes('Mobile')) setSelectedServices(['mobile']);
      else if (serviceParam.includes('AI') || serviceParam.includes('Automation')) setSelectedServices(['automation']);
      else if (serviceParam.includes('eCommerce') || serviceParam.includes('Store')) setSelectedServices(['ecommerce']);
      else if (serviceParam.includes('Web App')) setSelectedServices(['webapp']);
      else setSelectedServices(['website']);
    }
  }, [searchParams]);

  const handleServiceToggle = (val: string) => {
    setSelectedServices((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    setErrorMsg('');

    const rand = Math.floor(1000 + Math.random() * 9000);
    const reference = `EP-IND-${rand}`;
    setRefNo(reference);

    let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      supabaseUrl = supabaseUrl.replace(/\/$/, '');
      if (supabaseUrl.endsWith('/rest/v1')) {
        supabaseUrl = supabaseUrl.slice(0, -8);
      }
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
          method: 'POST',
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            ref_no: reference,
            name,
            email,
            company: company || null,
            phone: phone || null,
            budget,
            services: selectedServices,
            details: details || null,
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Database submission failed: ${errText}`);
        }
        setSubmitted(true);
      } catch (err: any) {
        console.error(err);
        setErrorMsg(err.message || 'Submission failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <main className={styles.contactLayout} suppressHydrationWarning>
      <script
        type="application/ld+json"
        id="contact-breadcrumb-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.contactInner}>
        {/* ── LEFT INFO ── */}
        <div className={styles.infoCol}>
          <div className={styles.contactBadge}>● DIRECT FOUNDER CONSULTATION</div>
          <h1 className={styles.contactTitle}>
            Let&apos;s Build Something Great Together.
          </h1>
          <p className={styles.contactSubtext}>
            Share your project vision, timeline, and goals. Technical founders
            Nirbhay Sagar & Aditya Kumar will review your scope and provide a
            transparent, fixed-price proposal within 24 hours.
          </p>

          <div className={styles.directCard}>
            <div className={styles.directItem}>
              <div className={styles.directIcon}>📍</div>
              <div>
                <div className={styles.directLabel}>Studio Base</div>
                <div className={styles.directVal}>New Delhi, India (Global Timezones)</div>
              </div>
            </div>

            <div className={styles.directItem}>
              <div className={styles.directIcon}>📞</div>
              <div>
                <div className={styles.directLabel}>Lead Engineering Phones</div>
                <div className={styles.directVal}>
                  +91 73021 64841 (Nirbhay Sagar)<br />
                  +91 95486 91732 (Aditya Kumar)
                </div>
              </div>
            </div>

            <div className={styles.directItem}>
              <div className={styles.directIcon}>✉️</div>
              <div>
                <div className={styles.directLabel}>Direct Inbox</div>
                <div className={styles.directVal}>endustryplant.com@gmail.com</div>
              </div>
            </div>
          </div>

          <div className={styles.waInstantBanner}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>💬</span>
              <span className={styles.waBannerTitle}>Prefer an Immediate Conversation?</span>
            </div>
            <p className={styles.waBannerText}>
              Text us directly on WhatsApp to discuss your scope and get instant feedback.
            </p>
            <a
              href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20digital%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBannerLink}
            >
              Chat on WhatsApp (+91 73021 64841) →
            </a>
          </div>
        </div>

        {/* ── RIGHT FORM ── */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '24px' }}>✅</span>
                <span style={{ fontSize: '20px', fontWeight: '800', color: '#16A34A' }}>
                  Project Brief Received!
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--coral)', fontWeight: '700' }}>
                REFERENCE TICKET: {refNo}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Thank you, <strong>{name}</strong>. Your project brief has been received.
                Founder Nirbhay Sagar will review your requirements and follow up via WhatsApp / Email within 24 hours.
              </p>
              <a
                href={`https://wa.me/917302164841?text=Hi%20Nirbhay,%20I%20just%20submitted%20brief%20${refNo}%20on%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#16A34A',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginTop: '8px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Follow up immediately on WhatsApp with Ticket #{refNo} →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className={styles.formTitle}>Start a Project Sprint</h2>
              <p className={styles.formSubtitle}>
                Fill in your project scope below for a 1-day turnaround proposal.
              </p>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>What do you want to build?</label>
                <div className={styles.selectorGrid}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => handleServiceToggle(opt.value)}
                      className={`${styles.btnSelect} ${selectedServices.includes(opt.value) ? styles.active : ''}`}
                    >
                      {selectedServices.includes(opt.value) ? '✓ ' : '+ '}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputRow2}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.textInput}
                  />
                </div>
              </div>

              <div className={styles.inputRow2}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Company / Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Lifestyle"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.textInput}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Estimated Budget</label>
                <div className={styles.selectorGrid}>
                  {['₹45K – ₹1L', '₹1L – ₹2.5L', '₹2.5L – ₹5L', '₹5L+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`${styles.btnSelect} ${budget === b ? styles.active : ''}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Project Details</label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you're building, target launch dates, or key features..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={styles.textInput}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {errorMsg && (
                <div style={{ color: '#EF4444', fontSize: '13px', marginBottom: '16px' }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Submitting...' : 'Send Project Brief →'}
              </button>

              {/* DIRECT WHATSAPP FAST-TRACK */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  Prefer an immediate answer? Skip the brief:
                </p>
                <a
                  href={`https://wa.me/917302164841?text=${encodeURIComponent(
                    `Hi Nirbhay, I'd like to discuss a project with Endustry Plant.\nSelected Service: ${selectedServices.join(', ')}\nBudget: ${budget}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#062E12',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    width: '100%',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>💬 Message Nirbhay Directly on WhatsApp (+91 73021 64841) ↗</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg)' }} />}>
        <ContactContent />
      </Suspense>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
