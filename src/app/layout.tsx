import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#07070A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://endustryplant.com'),
  title: {
    default: 'Endustry Plant — Product Engineering Studio for India’s Ambitious Brands',
    template: '%s | Endustry Plant',
  },
  description:
    'High-speed Next.js websites, mobile apps, Shopify Plus headless stores, and autonomous AI systems. Founded in New Delhi by Nirbhay Sagar & Aditya Kumar. Fixed milestone sprints, zero billable hour traps.',
  keywords: [
    'Next.js development agency Delhi',
    'Shopify Plus headless developers India',
    'React Native mobile app engineering',
    'Autonomous AI agents Delhi NCR',
    'Endustry Plant',
    'Nirbhay Sagar',
    'Aditya Kumar',
    'Razorpay 1-click checkout developers',
    'Bespoke digital product studio India',
  ],
  authors: [
    { name: 'Nirbhay Sagar', url: 'https://endustryplant.com' },
    { name: 'Aditya Kumar', url: 'https://endustryplant.com' },
  ],
  creator: 'Endustry Plant',
  publisher: 'Endustry Plant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://endustryplant.com',
  },
  openGraph: {
    title: 'Endustry Plant — Product Engineering Studio for India’s Ambitious Brands',
    description:
      'High-speed Next.js websites, mobile apps, Shopify Plus headless storefronts, and autonomous AI systems. Engineered with modern full-stack code.',
    url: 'https://endustryplant.com',
    siteName: 'Endustry Plant',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://endustryplant.com/hero_image.png',
        width: 1200,
        height: 630,
        alt: 'Endustry Plant Product Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endustry Plant — Digital Product Engineering Studio',
    description:
      'Bespoke Next.js web applications, mobile apps, and autonomous AI systems engineered for Indian scaleups.',
    creator: '@endustryplant',
    images: ['https://endustryplant.com/hero_image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Endustry Plant',
  alternateName: 'Endustry Plant Product Studio',
  url: 'https://endustryplant.com',
  logo: 'https://endustryplant.com/hero_image.png',
  image: 'https://endustryplant.com/hero_image.png',
  description:
    'Endustry Plant is a product engineering and design studio in New Delhi, India. We engineer high-speed Next.js web platforms, cross-platform mobile apps, headless Shopify stores, and autonomous AI agents.',
  telephone: '+91 73021 64841',
  email: 'endustryplant.com@gmail.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hauz Khas & Connaught Place Studio',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6139,
    longitude: 77.209,
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Nirbhay Sagar',
      jobTitle: 'Founder & Head of Engineering',
      sameAs: ['https://github.com/nirbhaysagar'],
    },
    {
      '@type': 'Person',
      name: 'Aditya Kumar',
      jobTitle: 'Co-Founder & Lead Systems Architect',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://endustryplant-portfolio.vercel.app',
    'https://github.com/nirbhaysagar/endustryplant',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Product Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js 16 Website & Web Application Engineering',
          description: 'Sub-second LCP edge-rendered Next.js web platforms with zero client bloat.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headless eCommerce & 1-Click UPI Checkout',
          description: 'Shopify Plus headless storefronts with native Razorpay and Cashfree UPI integrations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cross-Platform React Native Mobile App Development',
          description: '60fps iOS and Android applications with real-time GPS tracking and instant UPI checkout.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autonomous AI & WhatsApp Sales Agents',
          description: 'Production-ready LLM workflow automation with zero-hallucination vector RAG.',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is your typical project pricing and payment structure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on transparent, fixed milestone sprint budgets — never unpredictable hourly billing. Custom websites typically range from ₹45,000 to ₹1.5L; full-stack apps and mobile products range from ₹1.5L to ₹5L; and AI automation workflows range from ₹50,000 to ₹2L depending on complexity. Payments are structured in 3 clear milestones with 100% IP code handover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we own 100% of the source code, design files, and intellectual property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You retain 100% ownership of all IP from day one. Upon final launch, we transfer the full Git repository, environment secrets, and Figma design assets directly to your team with zero vendor lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you natively support Indian payment gateways and logistics providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have deep production experience integrating Razorpay, Cashfree, PayU, PhonePe PG, WhatsApp Business Cloud API, Shiprocket, and Delhivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can Endustry Plant deliver a full digital product?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our standard production sprint runs 4 to 6 weeks from technical discovery blueprint to production launch, including QA and 30 days of post-launch SLA bug warranty.',
      },
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Endustry Plant',
  alternateName: ['Endustry Plant Studio', 'EndustryPlant'],
  url: 'https://endustryplant.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://endustryplant.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Site Navigation Sitelinks',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'Work',
      description: '13 verified digital products, mobile apps, and eCommerce storefronts.',
      url: 'https://endustryplant.com/work',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Services',
      description: 'Custom Next.js platforms, Shopify Plus, React Native, and WhatsApp CRM.',
      url: 'https://endustryplant.com/services',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'About & Leadership',
      description: 'Engineering studio founded in New Delhi by Nirbhay Sagar & Aditya Kumar.',
      url: 'https://endustryplant.com/about',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Engineering Journal',
      description: 'In-depth production case studies, speed benchmarks, and architecture teardowns.',
      url: 'https://endustryplant.com/blog',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'Contact Studio',
      description: 'Book a 4-week fixed-price sprint or message technical founders on WhatsApp.',
      url: 'https://endustryplant.com/contact',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ANTI-FLASH THEME SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s?s:(d?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />

        {/* LINKED DATA JSON-LD SCHEMAS FOR GOOGLE SITELINKS, AEO & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
