'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

const SERVICE_OPTIONS = [
  { label: 'Website Building', value: 'website' },
  { label: 'eCommerce Store', value: 'ecommerce' },
  { label: 'Mobile App (iOS/Android)', value: 'mobile' },
  { label: 'Full-Stack Web App', value: 'webapp' },
  { label: 'AI Workflow Automation', value: 'automation' },
];

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
    <>
      <style>{`
        .contact-layout {
          background: var(--bg);
          min-height: 100vh;
          padding: 80px 24px 100px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          color: var(--text-primary);
        }

        :global([data-theme='dark']) .contact-title,
        :global([data-theme='dark']) .form-title,
        :global([data-theme='dark']) .direct-val {
          color: #FFFFFF !important;
        }

        :global([data-theme='dark']) .contact-subtext,
        :global([data-theme='dark']) .form-subtitle,
        :global([data-theme='dark']) .field-label {
          color: #94A3B8 !important;
        }

        :global([data-theme='dark']) .direct-card,
        :global([data-theme='dark']) .form-card {
          background: #11131C !important;
          border-color: #1E2230 !important;
        }

        :global([data-theme='dark']) .text-input,
        :global([data-theme='dark']) .btn-select {
          background: #161925 !important;
          border-color: #262C3E !important;
          color: #FFFFFF !important;
        }

        :global([data-theme='dark']) .btn-select.active {
          background: #FFFFFF !important;
          color: #0A0A0A !important;
          border-color: #FFFFFF !important;
        }

        :global([data-theme='dark']) .direct-icon {
          background: #161925 !important;
          border-color: #262C3E !important;
        }

        .contact-inner {
          width: 100%;
          max-width: 1220px;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: start;
        }

        .info-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: #EEF2FF;
          border: 1px solid #C7D2FE;
          color: #4338CA;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          width: fit-content;
        }

        .contact-title {
          font-size: clamp(34px, 4vw, 50px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0F172A;
        }

        .contact-subtext {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
        }

        .direct-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .direct-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .direct-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .direct-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #64748B;
          text-transform: uppercase;
        }

        .direct-val {
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
        }

        .wa-instant-banner {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* ── RIGHT FORM CARD ── */
        .form-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.05);
        }

        .form-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
          color: #0F172A;
        }

        .form-subtitle {
          font-size: 14px;
          color: #64748B;
          margin-bottom: 28px;
        }

        .field-group {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .input-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .text-input {
          width: 100%;
          border: 1px solid var(--border);
          background: #F8FAFC;
          border-radius: 12px;
          padding: 13px 16px;
          font-size: 15px;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
        }

        .text-input:focus {
          background: #FFFFFF;
          border-color: #4F46E5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .btn-select {
          border: 1px solid var(--border);
          background: #F8FAFC;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #475569;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .btn-select:hover {
          border-color: #CBD5E1;
          color: #0F172A;
        }

        .btn-select.active {
          background: #0F172A;
          border-color: #0F172A;
          color: #FFFFFF;
          font-weight: 600;
        }

        .submit-btn {
          width: 100%;
          background: #0F172A;
          color: #FFFFFF;
          padding: 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 10px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
        }

        .submit-btn:hover {
          background: #1E293B;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.25);
        }

        .success-box {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 960px) {
          .contact-inner {
            grid-template-columns: 1fr;
          }
          .input-row-2 {
            grid-template-columns: 1fr;
          }
          .selector-grid {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 24px;
          }
        }
      `}</style>

      <main className="contact-layout">
        <div className="contact-inner">
          {/* ── LEFT INFO ── */}
          <div className="info-col">
            <div className="contact-badge">● DIRECT FOUNDER CONSULTATION</div>
            <h1 className="contact-title">
              Let&apos;s Build Something Great Together.
            </h1>
            <p className="contact-subtext">
              Share your project vision, timeline, and goals. Technical founders
              Nirbhay Sagar & Aditya Kumar will review your scope and provide a
              transparent, fixed-price proposal within 24 hours.
            </p>

            <div className="direct-card">
              <div className="direct-item">
                <div className="direct-icon">📍</div>
                <div>
                  <div className="direct-label">Studio Base</div>
                  <div className="direct-val">New Delhi, India (Global Timezones)</div>
                </div>
              </div>

              <div className="direct-item">
                <div className="direct-icon">📞</div>
                <div>
                  <div className="direct-label">Lead Engineering Phones</div>
                  <div className="direct-val">
                    +91 73021 64841 (Nirbhay Sagar)<br />
                    +91 95486 91732 (Aditya Kumar)
                  </div>
                </div>
              </div>

              <div className="direct-item">
                <div className="direct-icon">✉️</div>
                <div>
                  <div className="direct-label">Direct Inbox</div>
                  <div className="direct-val">endustryplant.com@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="wa-instant-banner">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>💬</span>
                <span style={{ fontWeight: '700', color: '#15803D' }}>Prefer an Immediate Conversation?</span>
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0' }}>
                Text us directly on WhatsApp to discuss your scope and get instant feedback.
              </p>
              <a
                href="https://wa.me/917302164841?text=Hi%20Nirbhay,%20I'd%20like%20to%20discuss%20a%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#15803D',
                  fontWeight: '700',
                  fontSize: '13px',
                }}
              >
                Chat on WhatsApp (+91 73021 64841) →
              </a>
            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <div className="form-card">
            {submitted ? (
              <div className="success-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px' }}>✅</span>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: '#15803D' }}>
                    Project Brief Received!
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4F46E5', fontWeight: '600' }}>
                  REFERENCE TICKET: {refNo}
                </div>
                <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.7' }}>
                  Thank you, <strong>{name}</strong>. Your project brief has been received.
                  Founder Nirbhay Sagar will review your requirements and follow up via WhatsApp / Email within 24 hours.
                </p>
                <a
                  href={`https://wa.me/917302164841?text=Hi%20Nirbhay,%20I%20just%20submitted%20brief%20${refNo}%20on%20your%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#15803D',
                    fontSize: '14px',
                    fontWeight: '700',
                    marginTop: '8px',
                  }}
                >
                  Follow up immediately on WhatsApp with Ticket #{refNo} →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="form-title">Start a Project Sprint</h2>
                <p className="form-subtitle">
                  Fill in your project scope below for a 1-day turnaround proposal.
                </p>

                <div className="field-group">
                  <label className="field-label">What do you want to build?</label>
                  <div className="selector-grid">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => handleServiceToggle(opt.value)}
                        className={`btn-select ${selectedServices.includes(opt.value) ? 'active' : ''}`}
                      >
                        {selectedServices.includes(opt.value) ? '✓ ' : '+ '}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="input-row-2">
                  <div className="field-group">
                    <label className="field-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-input"
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-input"
                    />
                  </div>
                </div>

                <div className="input-row-2">
                  <div className="field-group">
                    <label className="field-label">Company / Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Lifestyle"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="text-input"
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-input"
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Estimated Budget</label>
                  <div className="selector-grid">
                    {['₹45K – ₹1L', '₹1L – ₹2.5L', '₹2.5L – ₹5L', '₹5L+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`btn-select ${budget === b ? 'active' : ''}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Project Details</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you're building, target launch dates, or key features..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="text-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {errorMsg && (
                  <div style={{ color: '#EF4444', fontSize: '13px', marginBottom: '16px' }}>
                    {errorMsg}
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
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
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FFFFFF' }} />}>
        <ContactContent />
      </Suspense>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
