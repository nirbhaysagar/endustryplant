'use client';

import styles from './Capabilities.module.css';

const SERVICES = [
  {
    num: '1',
    category: 'WEBSITES',
    title: 'Website Building',
    desc: 'Custom, built-for-purpose websites designed to capture leverage and convert traffic. No generic templates. Real, bespoke code engineered for your business.',
    img: '/service_websites.png',
    status: '( ACTIVE - )'
  },
  {
    num: '2',
    category: 'ECOMMERCE',
    title: 'eCommerce Store Building',
    desc: 'High-performance stores built on Shopify and custom headless stacks. Complete end-to-end design, custom integration, launch, and speed optimization.',
    img: '/service_ecommerce.png',
    status: '( ACTIVE - )'
  },
  {
    num: '3',
    category: 'AUTOMATION',
    title: 'AI Automation',
    desc: 'Automating business operations using AI. Deep integration of custom workflows, processing pipelines, and tools that eliminate repetitive manual work.',
    img: '/service_automation.png',
    status: '( ACTIVE - )'
  },
  {
    num: '4',
    category: 'WEB APPS',
    title: 'End-to-End Web Apps',
    desc: 'Full-stack applications engineered from scratch. Something you need built securely, scaled rapidly, and handed over running in perfect operational condition.',
    img: '/service_web_apps.png',
    status: '( ACTIVE - )'
  },
  {
    num: '5',
    category: 'MOBILE APPS',
    title: 'Mobile Apps',
    desc: 'Product-level native and cross-platform mobile development for iOS and Android. High-performance, App Store-ready products built for scale.',
    img: '/service_mobile_apps.png',
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
