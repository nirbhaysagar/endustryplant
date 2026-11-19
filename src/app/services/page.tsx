import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: 'Services — Next.js, Headless Shopify, Mobile Apps & WhatsApp Systems | Endustry Plant',
  description:
    'Explore Endustry Plant’s 5 core digital engineering capabilities: high-speed Next.js 16 web platforms, headless Shopify Plus stores, React Native mobile apps, and WhatsApp CRM pipelines.',
  alternates: {
    canonical: 'https://endustryplant.com/services',
  },
  openGraph: {
    title: 'Product Engineering Services | Endustry Plant',
    description:
      'Fixed-price milestone sprints for fast-growing brands. Next.js 16 web applications, Shopify Plus headless commerce, React Native, and WhatsApp systems.',
    url: 'https://endustryplant.com/services',
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
      name: 'Services',
      item: 'https://endustryplant.com/services',
    },
  ],
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Product Engineering Services',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Endustry Plant',
    url: 'https://endustryplant.com',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Next.js 16 Web Applications & Platforms',
          description: 'Sub-second LCP edge-rendered web platforms with zero bloated templates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shopify Plus & Headless D2C Storefronts',
          description: 'Custom eCommerce stores with 1-click Razorpay UPI checkout and WhatsApp cart recovery.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'iOS & Android Mobile Applications',
          description: 'Cross-platform React Native mobile applications with 60fps native performance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Stack SaaS & Enterprise Portals',
          description: 'Scalable multi-tenant web applications with PostgreSQL and real-time APIs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WhatsApp Business API & CRM Workflows',
          description: 'Official WhatsApp Cloud API lead capture, automated notifications, and CRM sync.',
        },
      },
    ],
  },
};

const SERVICES_DETAILED = [
  {
    id: 'nextjs',
    title: 'Custom Next.js 16 Web Applications & Platforms',
    timeline: '3–5 Week Sprint',
    description:
      'We engineer production Next.js 16 platforms with sub-second page loads, server components, and 99+ Core Web Vitals. Built completely custom from Figma designs with zero template bloat.',
    deliverables: [
      'App Router & React Server Components (RSC)',
      'Sub-second Largest Contentful Paint (LCP < 0.8s)',
      'Clean TypeScript codebase with automated CI/CD',
      'Vercel Edge or AWS deployment with zero-downtime DNS',
    ],
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Supabase'],
  },
  {
    id: 'ecommerce',
    title: 'Shopify Plus & Headless D2C Storefronts',
    timeline: '3–4 Week Sprint',
    description:
      'High-converting eCommerce platforms designed to maximize mobile checkout conversion. We integrate native 1-click Razorpay/Cashfree UPI checkouts and automated WhatsApp cart recovery.',
    deliverables: [
      'Shopify Storefront API or bespoke headless cart',
      'Razorpay & Cashfree 1-click UPI checkout integration',
      'Sub-second catalog search and faceted collection filtering',
      'Automated WhatsApp abandoned cart notifications',
    ],
    tech: ['Shopify Plus', 'Razorpay', 'Next.js', 'WhatsApp Cloud API', 'Cashfree'],
  },
  {
    id: 'mobile',
    title: 'iOS & Android Mobile Applications',
    timeline: '4–6 Week Sprint',
    description:
      'High-performance cross-platform mobile apps built with React Native and Flutter. We engineer clean native UI, smooth 60fps animations, real-time geolocation, and offline-first data caching.',
    deliverables: [
      'Single codebase compiling to native iOS and Android',
      'Offline-first local SQLite cache & biometric authentication',
      'Real-time push notifications & background sync',
      'Full App Store & Google Play Store submission management',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'PostgreSQL', 'FastAPI'],
  },
  {
    id: 'saas',
    title: 'Full-Stack SaaS & Internal Enterprise Portals',
    timeline: '4–6 Week Sprint',
    description:
      'Custom web applications and internal operational portals engineered for high concurrency. Complete with role-based access control (RBAC), multi-tenant databases, and automated billing.',
    deliverables: [
      'Multi-tenant PostgreSQL schema design with row-level security',
      'Role-based access control (Admin, Manager, Customer)',
      'Stripe & Razorpay recurring subscription billing engine',
      'Audit logging, CSV export engines, and webhook integrations',
    ],
    tech: ['PostgreSQL', 'Supabase', 'Next.js 16', 'Stripe', 'Docker'],
  },
  {
    id: 'whatsapp-crm',
    title: 'WhatsApp Business API & CRM Workflows',
    timeline: '2–3 Week Sprint',
    description:
      'Automate high-intent inbound customer inquiries directly into your CRM. We connect the official Meta WhatsApp Cloud API to qualify leads, trigger notifications, and sync contacts in real time.',
    deliverables: [
      'Official Meta WhatsApp Business Cloud API webhooks',
      'Instant lead qualification and calendar booking flows',
      'Bi-directional sync with HubSpot, Zoho, or PostgreSQL',
      'Automated delivery tracking & payment confirmation alerts',
    ],
    tech: ['WhatsApp Cloud API', 'FastAPI', 'PostgreSQL', 'Webhooks', 'Meta Graph API'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
        <script
          type="application/ld+json"
          id="services-breadcrumb-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          id="services-catalog-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--coral)', fontWeight: 700 }}>Services</span>
          </nav>

          {/* PAGE HERO */}
          <div style={{ maxWidth: '840px', marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              <span style={{ width: '7px', height: '7px', background: 'var(--coral)', borderRadius: '1px' }} />
              <span>CORE CAPABILITIES</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '24px' }}>
              Engineering Capabilities Built for Commercial ROI.
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We partner with category leaders to design, build, and deploy production digital products. Every project is scoped with fixed pricing, weekly live demos, and a 30-day post-launch SLA warranty.
            </p>
          </div>

          {/* SERVICES LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '80px' }}>
            {SERVICES_DETAILED.map((s, idx) => (
              <div
                key={s.id}
                id={s.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '24px',
                  padding: '40px 36px',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '40px',
                  boxShadow: 'var(--card-shadow)',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 800, color: 'var(--coral)' }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', background: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                      {s.timeline}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.25 }}>
                    {s.title}
                  </h2>

                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                    {s.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.tech.map((t, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)', background: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '6px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Included Sprint Deliverables
                  </span>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {s.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${encodeURIComponent(s.title)}`}
                    style={{
                      marginTop: '8px',
                      background: 'var(--brand-black)',
                      color: 'var(--bg)',
                      padding: '10px 20px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Book This Sprint ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SPRINT PRICING & GUARANTEE */}
          <div style={{ background: '#0A0A0E', color: '#FFFFFF', borderRadius: '24px', padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap', border: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#10B981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ● TRANSPARENT SPRINT CONTRACTS
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '12px 0 8px' }}>
                Need a tailored digital engineering sprint?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                Every project begins with a 15-minute scoping call with lead founders Nirbhay & Aditya. We provide a fixed-price contract within 24 hours with zero hidden costs.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--coral)', color: '#FFFFFF', padding: '12px 24px', borderRadius: '9999px', fontSize: '13.5px', fontWeight: 700, textDecoration: 'none' }}>
                Start a Sprint ↗
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
