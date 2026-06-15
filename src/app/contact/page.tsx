'use client';

import { useState } from 'react';
import GrainOverlay from '@/components/GrainOverlay';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';



const SERVICE_OPTIONS = [
  { label: 'Website Building', value: 'website' },
  { label: 'eCommerce Store', value: 'ecommerce' },
  { label: 'AI Automation', value: 'automation' },
  { label: 'End-to-End Web App', value: 'webapp' },
  { label: 'Mobile App', value: 'mobile' }
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');

  const handleServiceToggle = (val: string) => {
    setSelectedServices(prev =>
      prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    // Generate an on-brand random reference code
    const rand = Math.floor(1000 + Math.random() * 9000);
    setRefNo(`EP-2026-${rand}`);
    setSubmitted(true);
  };

  return (
    <>
      <GrainOverlay />
      <Nav />
      
      <style>{`
        .contact-layout {
          background: #f4f4f0;
          color: #0a0a0a;
          min-height: 100vh;
          padding: 160px 40px 100px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .contact-inner {
          width: 100%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
        }

        .info-col {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .contact-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #0a0a0a;
          margin: 0;
        }

        .contact-title span {
          background-color: rgba(187, 250, 194, 0.7);
          padding: 4px 16px;
          display: inline-block;
          margin-top: 4px;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .info-val {
          font-family: var(--font-mono);
          font-size: 18px;
          color: #0a0a0a;
          text-transform: uppercase;
        }

        .form-col {
          background: #e6e4df;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
        }

        .form-title {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .field-group {
          margin-bottom: 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .text-input {
          border: none;
          border-bottom: 2px solid #0a0a0a;
          background: transparent;
          padding: 12px 0;
          font-family: var(--font-mono);
          font-size: 16px;
          width: 100%;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .text-input:focus {
          border-color: #39FF85;
        }

        .selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .btn-select {
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 30px;
          padding: 12px 20px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: #0a0a0a;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
        }

        .btn-select:hover {
          border-color: #0a0a0a;
        }

        .btn-select.active {
          background: #0a0a0a;
          color: #ffffff;
          border-color: #0a0a0a;
        }

        .submit-btn {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          background: #000000;
          padding: 16px 32px;
          border-radius: 40px;
          width: 100%;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: transform 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }

        .success-box {
          background: #0a0a0a;
          color: #39FF85;
          padding: 40px;
          border-radius: 12px;
          font-family: var(--font-mono);
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(57,255,133,0.2);
        }

        .success-header {
          font-size: 18px;
          font-weight: bold;
          border-bottom: 1px solid rgba(57,255,133,0.2);
          padding-bottom: 16px;
        }

        .success-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .form-col {
            padding: 30px;
          }
        }

        @media (max-width: 600px) {
          .selector-grid {
            grid-template-columns: 1fr;
          }
          .contact-layout {
            padding: 120px 20px 60px;
          }
        }
      `}</style>

      <main className="contact-layout">
        <div className="contact-inner">
          
          {/* Info Column */}
          <div className="info-col">
            <h1 className="contact-title">
              Let's build<br />
              <span>leveraged</span><br />
              systems
            </h1>
            
            <div className="info-details">
              <div className="info-item">
                <div className="info-label">E-Mail</div>
                <div className="info-val" style={{ textTransform: 'none' }}>endustryplant.com@gmail.com</div>
              </div>
              <div className="info-item">
                <div className="info-label">Base Location</div>
                <div className="info-val">New Delhi, India (Global)</div>
              </div>
              <div className="info-item">
                <div className="info-label">Contact Numbers</div>
                <div className="info-val" style={{ fontSize: '15px', textTransform: 'none', lineHeight: '1.5' }}>
                  +91 73021 64841 (Nirbhay Sagar)<br />
                  +91 95486 91732 (Aditya Kumar)
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-col">
            {submitted ? (
              <div className="success-box">
                <div className="success-header">[ TRANSMISSION SUCCESSFUL ]</div>
                <div className="success-details">
                  <div>REF_NO: {refNo}</div>
                  <div>STATUS: LOGGED_IN_PIPELINE</div>
                  <div>TARGET: SYSTEM_ENGINEERS</div>
                  <div style={{ marginTop: '10px', color: '#ffffff' }}>
                    Thank you. We have received your project details. A systems architect from our Delhi lab will contact you within 24 hours.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-title">Start a Project</div>
                
                <div className="field-group">
                  <div className="field-label">What should we call you? *</div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                    className="text-input"
                  />
                </div>

                <div className="field-group">
                  <div className="field-label">Where should we reach you? *</div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email@company.com"
                    className="text-input"
                  />
                </div>

                <div className="field-group">
                  <div className="field-label">Company / Product Name</div>
                  <input
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="e.g. Acme Corp"
                    className="text-input"
                  />
                </div>

                <div className="field-group">
                  <div className="field-label">What are we building?</div>
                  <div className="selector-grid">
                    {SERVICE_OPTIONS.map(opt => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => handleServiceToggle(opt.value)}
                        className={`btn-select ${selectedServices.includes(opt.value) ? 'active' : ''}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field-group">
                  <div className="field-label">Tell us about the project</div>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    placeholder="Describe your vision, timelines, or systems complexity..."
                    className="text-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Brief →
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <TerminalFooter />
    </>
  );
}
