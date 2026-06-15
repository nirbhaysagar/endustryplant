'use client';

import styles from './Capabilities.module.css';

const SERVICES = [
  {
    num: '1',
    category: 'AI AGENTS',
    title: 'Autonomous System Development',
    desc: 'Building autonomous systems that perform complex work — customer acquisition, research synthesis, content pipelines, and operational tasks — without human intervention.',
    img: 'https://picsum.photos/seed/agents/600/400?grayscale',
    status: '( ACTIVE - )'
  },
  {
    num: '2',
    category: 'MVP DEV',
    title: 'Rapid Prototype Engineering',
    desc: 'Idea → Product → Market. We compress months of development into weeks by building only what validates the riskiest assumptions first.',
    img: 'https://picsum.photos/seed/mvp/600/400?grayscale',
    status: '( ACTIVE - )'
  },
  {
    num: '3',
    category: 'AUTOMATION',
    title: 'Workflow Orchestration',
    desc: 'Remove repetitive operations from your stack entirely. Every manual step becomes a trigger. Every trigger becomes a compounding workflow.',
    img: 'https://picsum.photos/seed/auto/600/400?grayscale',
    status: '( ONGOING - )'
  },
  {
    num: '4',
    category: 'GROWTH',
    title: 'Systematic Growth Engines',
    desc: 'Acquire customers automatically. Growth infrastructure that compounds — SEO engines, AI content systems, distribution networks.',
    img: 'https://picsum.photos/seed/growth/600/400?grayscale',
    status: '( ACTIVE - )'
  },
];

export default function Capabilities() {
  return (
    <section className={styles.sectionWrapper} id="capabilities">
      <div className={styles.outerContainer}>
        


        {/* 2x2 Grid */}
        <div className={styles.grid}>
          {SERVICES.map((srv, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardInner}>
                
                {/* Front */}
                <div className={styles.cardFront}>
                  <div className={styles.frontCategory}>({srv.category})</div>
                  <div className={styles.frontNumber}>{srv.num}</div>
                  <div className={styles.frontTitle}>{srv.title}</div>
                  <div className={styles.arrowBtn}>→</div>
                </div>

                {/* Back (Hover state) */}
                <div className={styles.cardBack}>
                  <div className={styles.backCategory}>({srv.category})</div>
                  <img src={srv.img} alt={srv.title} className={styles.backImg} />
                  <div className={styles.backContent}>
                    <div className={styles.backDesc}>{srv.desc}</div>
                    <div className={styles.backBottom}>
                      <div className={styles.backPill}>{srv.status}</div>
                      <div className={styles.arrowBtnWhite}>→</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
