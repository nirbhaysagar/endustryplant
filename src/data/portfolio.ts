export interface ProjectMetric {
  val: string;
  lbl: string;
  ctx: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  categoryKey: 'ecommerce' | 'saas' | 'website';
  categoryLabel: string;
  metaTags: string[];
  bottleneck?: string;
  strategicMove?: string;
  primaryMetric: ProjectMetric;
  metrics?: ProjectMetric[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'orbit',
    title: 'Orbit',
    desc: 'Real-time telemetry and developer analytics dashboard engineered for sub-50ms query latency.',
    image: '/portfolio/orbit.png',
    link: 'https://orbit.forion.dev/',
    categoryKey: 'saas',
    categoryLabel: 'SaaS · Growth',
    metaTags: ['SaaS Dashboard', 'Telemetry Engine', 'Self-Serve Funnel', 'Developer Analytics', 'Docs SEO'],
    bottleneck: 'High bounce rate from broad developer traffic; low conversion from homepage to active workspace setup.',
    strategicMove: 'Dark-mode motion screencasts on X/LinkedIn showing 10-second latency-tracing setup + self-serve onboarding.',
    primaryMetric: {
      val: '$18 CAC',
      lbl: 'Cost / Verified Dev',
      ctx: 'Down from $42 prior to UI motion screencasts',
    },
    metrics: [
      { val: '$18 CAC', lbl: 'Cost / Verified Dev', ctx: 'Down from $42 prior to UI motion screencasts' },
      { val: '16.5%', lbl: 'Trial Activation Rate', ctx: 'Direct self-serve workspace activation' },
      { val: '3,400', lbl: 'Monthly Active Developers', ctx: 'Organic dev community growth' },
    ],
  },
  {
    id: 'islandrangoli',
    title: 'Island Rangoli',
    desc: 'Culture-led D2C home decor storefront with structured collection silos and sub-second load times.',
    image: '/portfolio/islandrangoli.png',
    link: 'https://islandrangoli.com/',
    categoryKey: 'ecommerce',
    categoryLabel: 'eCommerce · D2C',
    metaTags: ['Shopify Plus', 'Meta Advantage+', 'Instagram Reels', 'Product Schema', 'Festive SEO'],
    bottleneck: 'Seasonal revenue drop outside Diwali; high customer acquisition costs on generic home-decor keywords.',
    strategicMove: 'Engineered festive collection siloing with Meta dynamic creative video ads targeting wedding & housewarming gifting.',
    primaryMetric: {
      val: '3.4x',
      lbl: 'Blended ROAS',
      ctx: 'Scaled monthly ad spend to ₹3.8L sustained',
    },
    metrics: [
      { val: '3.4x', lbl: 'Blended ROAS', ctx: 'Scaled monthly ad spend to ₹3.8L sustained' },
      { val: '₹3.8L', lbl: 'Monthly Ad Spend', ctx: 'Profitable customer acquisition' },
      { val: '+185%', lbl: 'YoY Organic Revenue', ctx: 'From festive keyword authority hubs' },
    ],
  },
  {
    id: 'crunchyfashion',
    title: 'Crunchy Fashion',
    desc: 'High-speed D2C jewelry storefront with faceted collection search and automated WhatsApp cart recovery.',
    image: '/portfolio/crunchyfashion.png',
    link: 'https://www.crunchyfashion.com/',
    categoryKey: 'ecommerce',
    categoryLabel: 'eCommerce · Retail',
    metaTags: ['Meta DPA', 'Advantage+ Shopping', 'OOTD Styling Reels', 'Faceted Nav SEO', 'Fast CDN'],
    bottleneck: 'High cart abandonment on mobile web; catalog sprawl with thousands of unindexed seasonal SKUs.',
    strategicMove: 'Automated dynamic product ad (DPA) retargeting engine paired with faceted navigation SEO architecture.',
    primaryMetric: {
      val: '4.1x',
      lbl: 'Retargeting ROAS',
      ctx: 'Automated multi-product DPA engine',
    },
    metrics: [
      { val: '4.1x', lbl: 'Retargeting ROAS', ctx: 'Automated multi-product DPA engine' },
      { val: '62%', lbl: 'Mobile Checkout Completion', ctx: 'Streamlined 1-step checkout flow' },
      { val: '120k+', lbl: 'Monthly Organic Visits', ctx: 'Indexed jewelry collection pages' },
    ],
  },
  {
    id: 'forion',
    title: 'Forion',
    desc: 'Enterprise developer portal and interactive sandbox engineered in Next.js 16 with sub-second page loads.',
    image: '/portfolio/forion.png',
    link: 'https://forion.ai/',
    categoryKey: 'saas',
    categoryLabel: 'Enterprise AI',
    metaTags: ['Enterprise AI', 'Programmatic Docs SEO', 'SSR Performance', 'Topic Clusters', 'Next.js'],
    bottleneck: 'Enterprise decision-makers struggled to understand multi-agent architecture and immediate business ROI.',
    strategicMove: 'Built interactive interactive ROI calculator, sub-second SSR documentation, and programmatic topic clusters.',
    primaryMetric: {
      val: 'Top 3',
      lbl: 'Target Google Placement',
      ctx: 'For specialized enterprise AI automation queries',
    },
    metrics: [
      { val: 'Top 3', lbl: 'Target Google Placement', ctx: 'For specialized enterprise AI automation queries' },
      { val: '0.8s', lbl: 'LCP Page Speed', ctx: 'Sub-second edge rendering globally' },
      { val: '48%', lbl: 'Enterprise Lead Qualification', ctx: 'Via interactive solution configurator' },
    ],
  },
  {
    id: 'chockriti',
    title: 'Chockriti',
    desc: 'Artisanal luxury chocolate store with corporate gifting landing pages and temperature-controlled shipping info.',
    image: '/portfolio/chockriti.png',
    link: 'https://www.chockriti.com/',
    categoryKey: 'ecommerce',
    categoryLabel: 'Luxury eCommerce',
    metaTags: ['Brand Cinema', 'Instagram Stories', 'Executive Gifting Catalog', 'Gifting Schema', 'Editorial PR'],
    bottleneck: 'High product price point required premium educational storytelling before customer trust was established.',
    strategicMove: 'Cinematic brand video storytelling campaigns combined with dedicated corporate & festive gifting landing pages.',
    primaryMetric: {
      val: '3.9x',
      lbl: 'Gifting ROAS',
      ctx: 'During festive executive gifting campaigns',
    },
    metrics: [
      { val: '3.9x', lbl: 'Gifting ROAS', ctx: 'During festive executive gifting campaigns' },
      { val: '₹4,200', lbl: 'Average Order Value (AOV)', ctx: 'Up from ₹1,800 retail baseline' },
      { val: '35+', lbl: 'Corporate Gifting Retainers', ctx: 'Direct B2B concierge sales' },
    ],
  },
  {
    id: 'allindiantensile',
    title: 'All Indian Tensile',
    desc: 'Industrial tensile structure portal with automated B2B RFQ quotation funnel and technical specs catalog.',
    image: '/portfolio/allindiantensile.png',
    link: 'https://allindiantensile.com/',
    categoryKey: 'website',
    categoryLabel: 'Industrial · B2B',
    metaTags: ['Google Search Exact', 'Negative Keyword Pruning', 'Technical RFQ Funnel', 'Tensile Schema'],
    bottleneck: 'Junk consumer leads for low-ticket canopies eating up engineering sales hours with zero commercial margin.',
    strategicMove: 'Rebranded architecture, exact-match negative keyword pruning, and commercial architectural RFQ funnel.',
    primaryMetric: {
      val: '₹480 CPL',
      lbl: 'Cost / Qualified Lead',
      ctx: 'Reduced from ₹1,200 baseline',
    },
    metrics: [
      { val: '₹480 CPL', lbl: 'Cost / Qualified Lead', ctx: 'Reduced from ₹1,200 baseline' },
      { val: '82%', lbl: 'Commercial RFQ Intent', ctx: 'Filters out residential consumer inquiries' },
      { val: '₹2.4Cr', lbl: 'Commercial Pipeline Generated', ctx: 'In closed architectural contracts' },
    ],
  },
  {
    id: 'triptrekholiday',
    title: 'Trip Trek Holiday',
    desc: 'Custom travel booking platform with day-by-day itineraries and direct WhatsApp trip reservations.',
    image: '/portfolio/triptrekholiday.png',
    link: 'https://triptrekholiday.com/',
    categoryKey: 'website',
    categoryLabel: 'Travel & Tours',
    metaTags: ['Destination Silos', 'Itinerary Content Hubs', 'Breadcrumb Schema', 'WhatsApp Booking'],
    bottleneck: 'Heavy dependence on OTA commissions; package details were disorganized and lacked verified trust markers.',
    strategicMove: 'Built high-converting destination landing pages with day-by-day itineraries and direct WhatsApp booking inquiry.',
    primaryMetric: {
      val: '45+ /mo',
      lbl: 'Direct Trip Inquiries',
      ctx: 'Direct from organic Google search',
    },
    metrics: [
      { val: '45+ /mo', lbl: 'Direct Trip Inquiries', ctx: 'Direct from organic Google search' },
      { val: 'Zero', lbl: 'OTA Commissions Paid', ctx: '100% direct client booking relationship' },
      { val: '3.2m', lbl: 'Average On-Page Dwell Time', ctx: 'Deep engagement with custom itineraries' },
    ],
  },
  {
    id: 'luxurydelhispa',
    title: 'Luxury Delhi Spa',
    desc: 'High-ticket wellness booking portal with instant VIP concierge slot confirmation on WhatsApp.',
    image: '/portfolio/luxurydelhispa.png',
    link: 'https://luxurydelhispa.in/',
    categoryKey: 'website',
    categoryLabel: 'Hospitality & Wellness',
    metaTags: ['Meta Click-to-WhatsApp', 'Geo-Fencing', 'Instant Concierge', 'Google Local 3-Pack', 'Local Citations'],
    bottleneck: 'Generic directory listings attracting price-sensitive callers instead of high-ticket spa clientele.',
    strategicMove: 'Geo-fenced South Delhi Meta ads directing into an instant VIP WhatsApp concierge booking flow.',
    primaryMetric: {
      val: '₹180',
      lbl: 'Cost / Verified Chat',
      ctx: 'Direct South Delhi affluent geo-radius',
    },
    metrics: [
      { val: '₹180', lbl: 'Cost / Verified Chat', ctx: 'Direct South Delhi affluent geo-radius' },
      { val: '14 mins', lbl: 'Average Chat-to-Booking', ctx: 'Automated slot availability confirmation' },
      { val: '#1 Rank', lbl: 'Google Local 3-Pack', ctx: 'Across primary South Delhi luxury queries' },
    ],
  },
  {
    id: 'memorymiles',
    title: 'Memory Miles',
    desc: 'Immigration & visa eligibility portal with an automated 2-step pre-screening questionnaire.',
    image: '/portfolio/memorymiles.png',
    link: 'https://www.memorymiles.net/',
    categoryKey: 'website',
    categoryLabel: 'Immigration & Travel',
    metaTags: ['Google Search Ads', 'Pre-Screening Forms', 'CRM Pipeline Routing', 'Visa Content Hubs', 'FAQ Schema'],
    bottleneck: 'Applicants dropping out due to confusing documentation guidelines; sales reps overwhelmed by unqualified inquiries.',
    strategicMove: 'Two-step visa pre-screening eligibility tool feeding directly into lead triage CRM pipeline.',
    primaryMetric: {
      val: '₹580',
      lbl: 'Cost / Qualified Lead',
      ctx: 'Down from ₹950 baseline (-38%)',
    },
    metrics: [
      { val: '₹580', lbl: 'Cost / Qualified Lead', ctx: 'Down from ₹950 baseline (-38%)' },
      { val: '74%', lbl: 'Pre-Screening Accuracy', ctx: 'Eliminates ineligible applications upfront' },
      { val: '+140%', lbl: 'Monthly Visa Closures', ctx: 'Faster turnaround through structured docs' },
    ],
  },
  {
    id: 'santaindia',
    title: 'Santa India',
    desc: 'High-authority digital brand hub engineered in Next.js with perfect 100 Google Lighthouse performance.',
    image: '/portfolio/santaindia.png',
    link: 'https://santaindia.com/',
    categoryKey: 'website',
    categoryLabel: 'Brand Entity',
    metaTags: ['Entity SEO', 'Organization Schema', 'Crawl Optimization', 'Next.js', 'Core Web Vitals'],
    bottleneck: 'Fragmented brand presence online with competitors bidding on identical branded search terms.',
    strategicMove: 'Knowledge Graph entity structuring, unified brand authority hub, and sub-second page performance.',
    primaryMetric: {
      val: '#1',
      lbl: 'Brand SERP Monopoly',
      ctx: 'Dominating all primary brand queries',
    },
    metrics: [
      { val: '#1', lbl: 'Brand SERP Monopoly', ctx: 'Dominating all primary brand queries' },
      { val: '100', lbl: 'Google Lighthouse Score', ctx: 'Zero-JS static server rendering' },
    ],
  },
  {
    id: 'agnettrace',
    title: 'AgentTrace',
    desc: 'Real-time WebSocket telemetry dashboard for monitoring LLM token costs and execution latency.',
    image: '/portfolio/agnettrace.png',
    link: 'https://agnettrace.vercel.app',
    categoryKey: 'saas',
    categoryLabel: 'Developer Tooling',
    metaTags: ['AI Tracing', 'SaaS Platform', 'Telemetry Dashboard', 'Real-time WebSockets', 'TypeScript'],
    bottleneck: 'AI development teams needed instant observability into token usage, latency spikes, and agent execution steps.',
    strategicMove: 'Engineered lightweight WebSocket telemetry SDK and ultra-fast visual waterfall debugging dashboard.',
    primaryMetric: {
      val: '<40ms',
      lbl: 'Telemetry Overhead',
      ctx: 'Zero impact on production agent latency',
    },
    metrics: [
      { val: '<40ms', lbl: 'Telemetry Overhead', ctx: 'Zero impact on production agent latency' },
      { val: '100%', lbl: 'Trace Visibility', ctx: 'Full step-by-step agent inspection' },
    ],
  },
  {
    id: 'luxova',
    title: 'Luxova',
    desc: 'Curated luxury lifestyle store with limited-edition drop landing pages and 1-click UPI checkout.',
    image: '/portfolio/luxova.png',
    link: 'https://luxova.in/',
    categoryKey: 'ecommerce',
    categoryLabel: 'Luxury D2C',
    metaTags: ['Meta Dynamic Ads', 'Google Shopping', 'Drop Strategy', 'Collection Clusters', 'Core Web Vitals'],
    bottleneck: 'Limited organic reach and high dependency on discounts for initial customer acquisition.',
    strategicMove: 'Curated limited-edition drop landing pages paired with luxury product schema and VIP retargeting.',
    primaryMetric: {
      val: '3.8x',
      lbl: 'Blended ROAS',
      ctx: 'Targeting premium lifestyle buyers',
    },
    metrics: [
      { val: '3.8x', lbl: 'Blended ROAS', ctx: 'Targeting premium lifestyle buyers' },
      { val: '₹3,600', lbl: 'Average Order Value', ctx: 'High margin direct sales' },
    ],
  },
  {
    id: 'yonkx',
    title: 'Yonkx',
    desc: 'Custom headless storefront architecture with sub-second mobile page loads and streamlined checkout.',
    image: '/portfolio/yonkx.png',
    link: 'https://yonkx.com/',
    categoryKey: 'ecommerce',
    categoryLabel: 'eCommerce Archive',
    metaTags: ['Shopify Custom', 'Mobile-First UI', 'Fast Checkout', 'D2C Retail', 'Archive History'],
    bottleneck: 'Legacy storefront experienced sluggish mobile rendering and high bounce rates on product pages.',
    strategicMove: 'Optimized asset pipeline, instant add-to-cart drawer, and structured collection navigation.',
    primaryMetric: {
      val: '0.9s',
      lbl: 'Mobile Load Time',
      ctx: 'Down from 4.2s legacy speed',
    },
    metrics: [
      { val: '0.9s', lbl: 'Mobile Load Time', ctx: 'Down from 4.2s legacy speed' },
      { val: '35%', lbl: 'Mobile Conversion Lift', ctx: 'Following headless checkout deployment' },
    ],
  },
];
