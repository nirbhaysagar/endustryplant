import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: 'About & Leadership — Nirbhay Sagar & Aditya Kumar | Endustry Plant',
  description:
    'Meet technical founders Nirbhay Sagar and Aditya Kumar. Endustry Plant is a boutique digital engineering studio in New Delhi delivering high-speed Next.js web applications, mobile apps, and headless storefronts.',
  alternates: {
    canonical: 'https://endustryplant.com/about',
  },
  openGraph: {
    title: 'About the Studio & Leadership | Endustry Plant',
    description:
      'Two technical founders in New Delhi writing production code directly. No junior outsourcing, no agency fluff. 100% custom code and fixed sprint delivery.',
    url: 'https://endustryplant.com/about',
    images: ['https://endustryplant.com/hero_image.png'],
  },
};

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
      name: 'About & Leadership',
      item: 'https://endustryplant.com/about',
    },
  ],
};

const leadershipSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Endustry Plant',
    url: 'https://endustryplant.com',
    founder: [
      {
        '@type': 'Person',
        name: 'Nirbhay Sagar',
        jobTitle: 'Founder & Head of Engineering',
        sameAs: ['https://github.com/nirbhaysagar'],
        description: 'Full-stack systems architect specializing in Next.js, headless commerce, and distributed cloud applications.',
      },
      {
        '@type': 'Person',
        name: 'Aditya Kumar',
        jobTitle: 'Co-Founder & Lead Systems Architect',
        description: 'Systems engineer specializing in high-concurrency databases, React Native mobile apps, and edge infrastructure.',
      },
    ],
  },
};

const PRINCIPLES = [
  {
    num: '01',
    title: 'Zero Agency Middlemen',
    desc: 'You work and communicate directly with the founders writing your code. No account managers, no junior interns, and no telephone games.',
  },
  {
    num: '02',
    title: '100% Bespoke Codebase',
    desc: 'Zero bloated WordPress themes or 40-plugin security traps. Every line of code is engineered in modular Next.js, React, and TypeScript.',
  },
  {
    num: '03',
    title: 'Fixed Sprint Contracts',
    desc: 'Transparent milestone pricing agreed upfront. We deliver on guaranteed 4–6 week timelines with weekly live staging demonstrations.',
  },
  {
    num: '04',
    title: 'Complete IP Ownership',
    desc: 'You retain 100% intellectual property ownership. We hand over the entire Git repository, Figma design system, and credentials with zero vendor lock-in.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
        <script
          type="application/ld+json"
          id="about-breadcrumb-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          id="about-leadership-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipSchema) }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--coral)', fontWeight: 700 }}>About & Leadership</span>
          </nav>

          {/* PAGE HERO */}
          <div style={{ maxWidth: '860px', marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              <span style={{ width: '7px', height: '7px', background: 'var(--coral)', borderRadius: '1px' }} />
              <span>STUDIO & LEADERSHIP</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '24px' }}>
              Two Senior Engineers.<br />
              Zero Agency Middlemen.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Founded in New Delhi by <strong>Nirbhay Sagar</strong> and <strong>Aditya Kumar</strong>, Endustry Plant was built as the antidote to traditional agency bloat. We partner directly with category-leading brands and scaleups across India, the UAE, and North America to design and code production-grade digital systems.
            </p>
          </div>

          {/* LEADERSHIP CARDS (TRIGGERING ANTHROPIC-LIKE LEADERSHIP SERP) */}
          <section aria-labelledby="leadership-heading" style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>LEADERSHIP</span>
                <h2 id="leadership-heading" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '6px' }}>
                  Meet the Technical Founders
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '420px' }}>
                Every project sprint is architected, coded, and deployed directly by Nirbhay and Aditya.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {/* NIRBHAY SAGAR */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'var(--card-shadow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF4B3E 0%, #0A0A0E 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    NS
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Nirbhay Sagar</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Founder & Head of Engineering
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Full-stack engineer and systems architect specializing in sub-second Next.js edge rendering, headless Shopify Plus platforms, and native Razorpay/Cashfree payment flows. Leads technical roadmaps and milestone sprints.
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <a href="https://github.com/nirbhaysagar" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>GitHub: @nirbhaysagar ↗</span>
                  </a>
                  <a href="https://wa.me/917302164841" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: '#10B981', textDecoration: 'none' }}>
                    Direct WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* ADITYA KUMAR */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'var(--card-shadow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #10B981 0%, #0A0A0E 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    AK
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Aditya Kumar</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Co-Founder & Systems Architect
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Systems engineer specializing in high-concurrency database architecture, PostgreSQL schema design, cross-platform React Native performance, and real-time webhook telemetry pipelines.
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <a href="https://github.com/adityakumar" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>GitHub: @adityakumar ↗</span>
                  </a>
                  <a href="https://wa.me/919548691732" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: '#10B981', textDecoration: 'none' }}>
                    Direct WhatsApp ↗
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* STUDIO PRINCIPLES */}
          <section aria-labelledby="principles-heading" style={{ marginBottom: '80px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>ENGINEERING ETHOS</span>
            <h2 id="principles-heading" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '6px', marginBottom: '36px' }}>
              How We Deliver Quality at Scale
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {PRINCIPLES.map((p) => (
                <div key={p.num} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 800, color: 'var(--coral)' }}>{p.num}</span>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-primary)' }}>{p.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* STUDIO SPECS & CALL TO ACTION */}
          <div style={{ background: '#0A0A0E', color: '#FFFFFF', borderRadius: '24px', padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap', border: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10B981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ● NEW DELHI STUDIO · AVAILABLE FOR SPRINT COMMISSIONS
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '12px 0 8px' }}>
                Have a product to build or storefront to scale?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                Book a 15-minute scoping call directly with Nirbhay & Aditya. We review your requirements and provide a fixed-price sprint proposal within 24 hours.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--coral)', color: '#FFFFFF', padding: '12px 24px', borderRadius: '9999px', fontSize: '13.5px', fontWeight: 700, textDecoration: 'none' }}>
                Book Scoping Sprint ↗
              </Link>
              <a href="https://wa.me/917302164841" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#062E12', padding: '12px 20px', borderRadius: '9999px', fontSize: '13.5px', fontWeight: 700, textDecoration: 'none' }}>
                WhatsApp Direct ↗
              </a>
            </div>
          </div>
        </div>
      </main>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
