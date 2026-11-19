'use client';

import { useState } from 'react';

interface ProcessStep {
  id: string;
  index: string;
  title: string;
  duration: string;
  desc: string;
  image: string;
  deliverables: string[];
}

const STEPS: ProcessStep[] = [
  {
    id: 's1',
    index: '01',
    title: 'Discovery & Technical Blueprint',
    duration: 'Days 1 – 5',
    desc: 'We unpack your business goals, target audience, and system requirements. We deliver a detailed wireframe map and fixed-price sprint contract before a single line of code is written.',
    image: '/process_discovery.png',
    deliverables: [
      'Comprehensive product scope & feature roadmap',
      'Information architecture & wireframe flows',
      'Milestone payment agreement & fixed delivery date',
    ],
  },
  {
    id: 's2',
    index: '02',
    title: 'UI/UX Design & Clickable Prototype',
    duration: 'Days 6 – 14',
    desc: 'We design pixel-perfect, high-converting interfaces in Figma. You receive a clickable, interactive prototype to experience the full customer journey before development begins.',
    image: '/process_prototyping.png',
    deliverables: [
      'Complete desktop & mobile design system in Figma',
      'Clickable interactive user experience prototype',
      'Copywriting & conversion funnel optimization',
    ],
  },
  {
    id: 's3',
    index: '03',
    title: 'Full-Stack Engineering & Sprints',
    duration: 'Days 15 – 28',
    desc: 'Our senior developers write clean, modular Next.js / React Native code. You receive private access to a live staging link with weekly video demos to track progress in real time.',
    image: '/process_automation.png',
    deliverables: [
      'Production-grade codebase with zero template bloat',
      'Razorpay, WhatsApp, & database API integrations',
      'Weekly staging review link & async Slack/WhatsApp updates',
    ],
  },
  {
    id: 's4',
    index: '04',
    title: 'Launch, Code Handover & 30-Day Support',
    duration: 'Day 29+',
    desc: 'We launch your product to production, connect custom domains, transfer 100% of the Git repository, and provide 30 days of free post-launch bug fixing and performance monitoring.',
    image: '/process_deploy.png',
    deliverables: [
      'Production deployment on Vercel / AWS / Cloudflare',
      '100% Git repository & environment handover',
      '30-Day free SLA warranty & post-launch technical support',
    ],
  },
];

export default function ManufacturingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = STEPS[activeIdx];

  return (
    <>
      <style>{`
        .proc-section {
          padding: 100px 0;
          background: #F8FAFC;
          border-bottom: 1px solid var(--border);
        }

        .proc-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .proc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .proc-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #4F46E5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .proc-title {
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0F172A;
          line-height: 1.15;
        }

        .proc-subtext {
          font-size: 16px;
          color: #475569;
          max-width: 500px;
          line-height: 1.7;
        }

        /* ─── 2-COL PROCESS LAYOUT ──────────────────────────── */
        .proc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .proc-steps-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step-item {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .step-item:hover {
          border-color: #CBD5E1;
        }

        .step-item.active {
          border-color: #4F46E5;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.08);
          background: #FFFFFF;
        }

        .step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-index {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          color: #64748B;
        }

        .step-item.active .step-index {
          color: #4F46E5;
        }

        .step-duration {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #15803D;
          background: rgba(34, 197, 94, 0.12);
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .step-name {
          font-size: 18px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.01em;
        }

        .step-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.6;
        }

        /* ─── VISUAL PANE ───────────────────────────────────── */
        .proc-visual-pane {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .proc-image-box {
          width: 100%;
          aspect-ratio: 16/11;
          border-radius: 14px;
          overflow: hidden;
          background: #0F172A;
        }

        .proc-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .del-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
        }

        .del-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #334155;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .proc-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="proc-section" id="process">
        <div className="proc-inner">
          <div className="proc-header">
            <div>
              <div className="proc-label">HOW WE WORK</div>
              <h2 className="proc-title">Our Transparent 4-Step Process</h2>
            </div>
            <p className="proc-subtext">
              Predictable, transparent sprints. You always know what is being built,
              who is building it, and exactly when it will be delivered.
            </p>
          </div>

          <div className="proc-grid">
            <div className="proc-steps-list">
              {STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className={`step-item ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="step-top">
                    <span className="step-index">PHASE {step.index}</span>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                  <h3 className="step-name">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="proc-visual-pane">
              <div className="proc-image-box">
                <img src={activeStep.image} alt={activeStep.title} />
              </div>

              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: '600', marginBottom: '8px' }}>
                  PHASE {activeStep.index} DELIVERABLES INCLUDED
                </div>
                <div className="del-list">
                  {activeStep.deliverables.map((item, i) => (
                    <div key={i} className="del-row">
                      <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
