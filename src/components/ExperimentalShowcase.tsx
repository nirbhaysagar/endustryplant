'use client';

import React, { useRef, useCallback } from 'react';

interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'orbit',
    number: '01',
    name: 'ORBIT',
    category: 'Memory OS',
    description: 'A persistent memory layer that gives agents continuity across sessions. Orbit learns and retrieves context with sub-100ms latency.',
    image: 'https://picsum.photos/seed/orbit/600/400?grayscale',
  },
  {
    id: 'clientsync',
    number: '02',
    name: 'CLIENTSYNC',
    category: 'Infrastructure',
    description: 'The operational backbone for modern agencies. Automates client onboarding, deliverable tracking, and billing reconciliation.',
    image: 'https://picsum.photos/seed/sync/600/400?grayscale',
  },
  {
    id: 'lumen',
    number: '03',
    name: 'LUMEN',
    category: 'Context Engine',
    description: 'Real-time context injection. Lumen bridges proprietary knowledge bases with live LLM inference pipelines effortlessly.',
    image: 'https://picsum.photos/seed/lumen/600/400?grayscale',
  },
];

export default function ExperimentalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const depth = 1 + i * 0.15;
      const rx = -dy * 8 * depth;
      const ry = dx * 8 * depth;
      card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  }, []);

  return (
    <>
      <style>{`
        .showcase-section {
          background: #ffffff;
          padding: 140px 40px;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .showcase-label {
          font-family: var(--font-mono);
          font-size: 14px;
          letter-spacing: 0.1em;
          color: #111;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid #111;
          padding: 6px 16px;
          border-radius: 20px;
        }

        .showcase-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(50px, 8vw, 120px);
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1;
          letter-spacing: -0.04em;
          text-align: center;
          margin-bottom: 80px;
          text-transform: uppercase;
        }

        .showcase-title span {
          background-color: #bbfac2;
          padding: 0 20px;
          display: inline-block;
          margin-bottom: -10px;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          width: 100%;
          max-width: 1600px;
          perspective: 1200px;
        }

        .showcase-card {
          background: #f4f4f0;
          border: 1px solid rgba(0,0,0,0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .showcase-card:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .card-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          margin-bottom: 30px;
          background: #e0e0e0;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: multiply;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 16px;
          padding: 0 10px;
        }

        .card-number {
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1;
        }

        .card-category {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
        }

        .card-name {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 16px;
          padding: 0 10px;
          letter-spacing: -0.02em;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 15px;
          color: #333;
          line-height: 1.5;
          padding: 0 10px 20px;
          flex: 1;
        }

        @media (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .showcase-card {
            transform: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="showcase-section"
        id="showcase"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="showcase-label">LABORATORY</div>
        <h2 className="showcase-title">
          <span>Experimental</span><br />
          <span>Showcase</span>
        </h2>

        <div className="showcase-grid">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className="showcase-card"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <div className="card-img-wrap">
                <img src={proj.image} alt={proj.name} className="card-img" />
              </div>
              <div className="card-header">
                <span className="card-number">{proj.number}</span>
                <span className="card-category">{proj.category}</span>
              </div>
              <h3 className="card-name">{proj.name}</h3>
              <p className="card-desc">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
