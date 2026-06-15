'use client';

import React, { useState } from 'react';

interface Step {
  id: string;
  index: string;
  name: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: 'research',
    index: '01',
    name: 'DISCOVERY & ARCHITECTURE',
    description: 'We tear down your existing operations to the studs. Identifying every manual workflow, broken loop, and point of friction to design a systematic architecture for scale.',
  },
  {
    id: 'prototype',
    index: '02',
    name: 'RAPID PROTOTYPING',
    description: 'Weeks, not months. We build functional v1 infrastructure to validate the riskiest assumptions in live environments, ensuring the foundation is structurally sound.',
  },
  {
    id: 'automate',
    index: '03',
    name: 'SYSTEM AUTOMATION',
    description: 'Manual tasks are eradicated. We integrate AI agents and deterministic workflows that handle repetitive operations autonomously with zero latency.',
  },
  {
    id: 'deploy',
    index: '04',
    name: 'DEPLOY & COMPOUND',
    description: 'Your new infrastructure goes live. We establish compounding feedback loops where your systems get smarter and more efficient with every execution.',
  },
];

const PROCESS_IMAGES = [
  '/anime_workspace.jpg',
  '/anime_hands.jpg',
  '/anime_workspace.jpg',
  '/anime_hands.jpg',
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <style>{`
        .process-section {
          background: #f4f4f0;
          padding: 160px 40px;
          min-height: 100vh;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .process-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 40px;
          margin-bottom: 80px;
        }

        .process-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 6vw, 100px);
          font-weight: 800;
          color: #0a0a0a;
          line-height: 0.9;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          margin: 0;
        }

        .process-label {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          color: #0a0a0a;
          border: 1px solid #0a0a0a;
          padding: 8px 16px;
          border-radius: 20px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .process-image-pane {
          position: relative;
          background: #e6e4df;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/5;
        }

        .process-image-pane img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1.2);
          transition: opacity 0.4s ease;
        }

        .process-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .step-item {
          padding: 40px 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          cursor: pointer;
          transition: padding-left 0.3s ease;
        }

        .step-item.active {
          padding-left: 40px;
          border-bottom: 2px solid #0a0a0a;
        }

        .step-index {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #aaa;
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .step-item.active .step-index {
          color: #0a0a0a;
        }

        .step-name {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 700;
          color: #0a0a0a;
          line-height: 1.1;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .step-item:not(.active) .step-name {
          color: #666;
        }

        .step-desc {
          margin-top: 20px;
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          display: none;
        }

        .step-item.active .step-desc {
          display: block;
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
          .process-image-pane {
            display: none;
          }
          .process-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>

      <section className="process-section" id="process">
        <div className="process-inner">
          <div className="process-header">
            <h2 className="process-title">THE FACTORY LINE</h2>
            <div className="process-label">Standard Operating Procedure</div>
          </div>

          <div className="process-grid">
            <div className="process-list">
              {STEPS.map((step, i) => (
                <div
                  key={step.id}
                  className={`step-item ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="step-index">{step.index}</div>
                  <h3 className="step-name">{step.name}</h3>
                  <div className="step-desc">{step.description}</div>
                </div>
              ))}
            </div>

             <div className="process-image-pane">
               <img 
                 src={PROCESS_IMAGES[activeStep]} 
                 alt="Process visualization" 
                 key={activeStep} 
               />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
