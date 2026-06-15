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

function AutomationSvg() {
  return (
    <svg viewBox="0 0 400 500" className="vis-svg" fill="none" stroke="#0a0a0a" strokeWidth="1.5">
      <defs>
        <pattern id="grid-auto" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.08)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-auto)" stroke="none" />
      
      {/* Workflow Pipeline */}
      <path d="M 50 100 L 350 100 L 350 400 L 50 400 Z" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M 50 100 L 350 100 L 350 400 L 50 400 Z" stroke="#39FF85" strokeWidth="2" className="flow-line" />

      {/* Automation Nodes */}
      <g transform="translate(50, 100)">
        <circle r="25" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <circle r="15" fill="none" stroke="#39FF85" strokeWidth="2" className="pulse-node" />
        <text y="5" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0a0a0a">IN</text>
        <text y="45" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle" stroke="none" fill="#666">TRIGGER</text>
      </g>

      <g transform="translate(350, 100)">
        <circle r="25" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <text y="5" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0a0a0a">WORK</text>
        <text y="45" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle" stroke="none" fill="#666">AI_AGENT</text>
      </g>

      <g transform="translate(350, 400)">
        <circle r="25" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <circle r="15" fill="none" stroke="#39FF85" strokeWidth="2" className="pulse-node" />
        <text y="5" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none" fill="#0a0a0a">SYNC</text>
        <text y="45" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle" stroke="none" fill="#666">PIPELINE</text>
      </g>

      <g transform="translate(50, 400)">
        <circle r="25" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <text y="5" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" text-anchor="middle" stroke="none" fill="#0a0a0a">OUT</text>
        <text y="45" fontFamily="var(--font-mono)" fontSize="10" text-anchor="middle" stroke="none" fill="#666">SYSTEM</text>
      </g>

      {/* Interlocking Gears in Center */}
      <g transform="translate(200, 250)">
        {/* Large Gear */}
        <g className="gear-spin">
          <circle r="50" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
          <circle r="20" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="-8"
              y="-60"
              width="16"
              height="15"
              rx="2"
              fill="#f4f4f0"
              stroke="#0a0a0a"
              strokeWidth="2"
              transform={`rotate(${i * 30})`}
            />
          ))}
          <circle r="12" fill="#e6e4df" stroke="#0a0a0a" strokeWidth="2" />
        </g>

        {/* Small Gear */}
        <g transform="translate(75, 75)" className="gear-spin-reverse" style={{ transformOrigin: '75px 75px' }}>
          <circle cx="75" cy="75" r="30" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
          <circle cx="75" cy="75" r="10" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="69"
              y="35"
              width="12"
              height="12"
              rx="2"
              fill="#f4f4f0"
              stroke="#0a0a0a"
              strokeWidth="2"
              transform={`rotate(${i * 45}, 75, 75)`}
            />
          ))}
          <circle cx="75" cy="75" r="6" fill="#e6e4df" stroke="#0a0a0a" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}

function DeploySvg() {
  return (
    <svg viewBox="0 0 400 500" className="vis-svg" fill="none" stroke="#0a0a0a" strokeWidth="1.5">
      <defs>
        <pattern id="grid-deploy" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.08)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-deploy)" stroke="none" />

      {/* Axis lines */}
      <line x1="50" y1="400" x2="350" y2="400" stroke="#0a0a0a" strokeWidth="2" />
      <line x1="50" y1="100" x2="50" y2="400" stroke="#0a0a0a" strokeWidth="2" />

      {/* Grid lines inside */}
      <line x1="50" y1="300" x2="350" y2="300" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />

      {/* Exponential curve */}
      <path
        d="M 50 380 Q 180 370 240 220 T 330 80"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 50 380 Q 180 370 240 220 T 330 80"
        stroke="#39FF85"
        strokeWidth="2.5"
        fill="none"
        className="flow-line"
      />

      {/* Growing nodes */}
      <g transform="translate(130, 360)">
        <circle r="6" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <text y="-12" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle" stroke="none" fill="#666">v1.0</text>
      </g>

      <g transform="translate(240, 220)">
        <circle r="7" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="2" />
        <circle r="12" fill="none" stroke="#39FF85" strokeWidth="1.5" className="pulse-node" />
        <text y="-15" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle" stroke="none" fill="#666">v1.2</text>
      </g>

      <g transform="translate(330, 80)">
        <circle r="8" fill="#39FF85" stroke="#0a0a0a" strokeWidth="2" />
        <circle r="16" fill="none" stroke="#39FF85" strokeWidth="2" className="pulse-node" />
        <text x="25" y="4" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold" stroke="none" fill="#0a0a0a">LIVE [COMPOUND]</text>
      </g>

      {/* Feedback loops */}
      <circle cx="330" cy="80" r="40" stroke="rgba(57,255,133,0.15)" strokeWidth="1" strokeDasharray="3,3" />
      <circle cx="330" cy="80" r="70" stroke="rgba(57,255,133,0.1)" strokeWidth="1" strokeDasharray="4,4" />

      {/* Console logs */}
      <g transform="translate(65, 435)">
        <rect x="-5" y="-12" width="280" height="40" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" rx="4" />
        <text fontFamily="var(--font-mono)" fontSize="9" stroke="none" fill="#666">
          SYS.STATUS: COMPOUNDING_ACTIVE
        </text>
        <text y="18" fontFamily="var(--font-mono)" fontSize="9" stroke="none" fill="#39FF85">
          &gt; FEEDBACK LOOP CYCLE #8,942 COMPLETE
        </text>
      </g>
    </svg>
  );
}

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

        .vis-svg {
          width: 100%;
          height: 100%;
          padding: 30px;
          display: block;
        }

        .gear-spin {
          animation: gearSpin 20s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .gear-spin-reverse {
          animation: gearSpinReverse 15s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes gearSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gearSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .flow-line {
          stroke-dasharray: 8, 12;
          animation: flowLine 2s linear infinite;
        }

        @keyframes flowLine {
          to { stroke-dashoffset: -40; }
        }

        .pulse-node {
          animation: pulseNode 2.5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes pulseNode {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.8; fill: #39FF85; }
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
               {activeStep === 0 && (
                 <img 
                   src="/anime_workspace.jpg" 
                   alt="Discovery & Architecture" 
                   key={0} 
                 />
               )}
               {activeStep === 1 && (
                 <img 
                   src="/anime_hands.jpg" 
                   alt="Rapid Prototyping" 
                   key={1} 
                 />
               )}
               {activeStep === 2 && <AutomationSvg />}
               {activeStep === 3 && <DeploySvg />}
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
