import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Library from '@/components/Library';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: 'Work — 13 Verified Digital Products, Mobile Apps & Storefronts | Endustry Plant',
  description:
    'Explore 13 live production products engineered by Endustry Plant for Indian and global brands: high-speed Next.js platforms, Shopify Plus storefronts, and React Native mobile apps.',
  alternates: {
    canonical: 'https://endustryplant.com/work',
  },
  openGraph: {
    title: 'Work & Production Case Studies | Endustry Plant',
    description:
      '13 verified digital products with measurable business ROI. Sub-second Next.js edge performance, 1-click checkout, and clean full-stack architecture.',
    url: 'https://endustryplant.com/work',
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
      name: 'Work',
      item: 'https://endustryplant.com/work',
    },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Endustry Plant Production Portfolio',
  description: '13 live web applications, mobile apps, and eCommerce platforms engineered in Next.js, React Native, and Shopify Plus.',
  url: 'https://endustryplant.com/work',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Endustry Plant',
    url: 'https://endustryplant.com',
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
        <script
          type="application/ld+json"
          id="work-breadcrumb-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          id="work-collection-schema"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 0' }}>
          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '16px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--coral)', fontWeight: 700 }}>Work (13 Projects)</span>
          </nav>
        </div>

        {/* FULL PORTFOLIO COMPONENT */}
        <Library />
      </main>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
