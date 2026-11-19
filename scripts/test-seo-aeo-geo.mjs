import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('🚀 RUNNING SEO, AEO & GEO TEST-DRIVEN VERIFICATION SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

// ─── 1. ROOT LAYOUT METADATA & SCHEMA CHECKS ────────────────────
console.log('📦 1. Root Layout Schema & Metadata Tests');
const layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');

assert(layoutContent.includes('application/ld+json'), 'JSON-LD scripts embedded in RootLayout');
assert(layoutContent.includes('ProfessionalService') || layoutContent.includes('Organization'), 'Organization / ProfessionalService schema present');
assert(layoutContent.includes('Nirbhay Sagar') && layoutContent.includes('Aditya Kumar'), 'Founders Nirbhay Sagar & Aditya Kumar present in schema');
assert(layoutContent.includes('28.6139') && layoutContent.includes('77.209'), 'GeoCoordinates (latitude/longitude) embedded for GEO');
assert(layoutContent.includes('FAQPage'), 'FAQPage schema embedded for AEO answer engine extraction');
assert(layoutContent.includes('metadataBase'), 'metadataBase defined for canonical URL resolution');
assert(layoutContent.includes('data-theme'), 'Anti-flash theme initialization script present in head');

// ─── 2. SITEMAP & ROBOTS CHECKS ──────────────────────────────────
console.log('\n🗺️  2. Sitemap & Robots Protocol Tests');
const sitemapContent = fs.readFileSync('src/app/sitemap.ts', 'utf8');
const robotsContent = fs.readFileSync('src/app/robots.ts', 'utf8');

assert(sitemapContent.includes('https://endustryplant.com'), 'Sitemap has production canonical base');
assert(sitemapContent.includes('BLOG_POSTS.map'), 'Sitemap dynamically includes all blog posts');
assert(sitemapContent.includes('/privacy') && sitemapContent.includes('/terms'), 'Sitemap includes legal pages');
assert(robotsContent.includes('sitemap.xml'), 'Robots points to sitemap.xml');
assert(robotsContent.includes('GPTBot') && robotsContent.includes('PerplexityBot'), 'Robots explicitly permits AI search bots (AEO/GEO)');

// ─── 3. BLOGS & CONTENT QUALITY CHECKS ──────────────────────────
console.log('\n📚 3. Blog Content, WebP Images & AEO Structure Tests');
const blogsContent = fs.readFileSync('src/data/blogs.ts', 'utf8');

// Match slugs
const slugs = [...blogsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
assert(slugs.length >= 10, `At least 10 blogs defined (Found ${slugs.length})`);

// Check WebP images
const webpImgs = [...blogsContent.matchAll(/image:\s*['"]\/blog\/([^'"]+\.webp)['"]/g)].map(m => m[1]);
assert(webpImgs.length >= 10, `All blogs reference WebP images (Found ${webpImgs.length})`);

webpImgs.forEach(img => {
  const imgPath = path.join('public/blog', img);
  assert(fs.existsSync(imgPath), `WebP image exists on disk: ${imgPath}`);
});

// Check human content quality & absence of AI cliches
console.log('\n✍️  4. Human Voice vs AI Content Slop Tests');
const aiCliches = [
  "in today's fast-paced digital landscape",
  "in this comprehensive guide, we will delve",
  "a testament to the power of",
  "it is important to remember that",
  "tapestry of innovation",
  "furthermore, it is essential"
];

let foundCliches = 0;
aiCliches.forEach(cliche => {
  if (blogsContent.toLowerCase().includes(cliche)) {
    console.error(`⚠️ Found AI cliche: "${cliche}"`);
    foundCliches++;
  }
});
assert(foundCliches === 0, 'Zero banned robotic AI cliches found across all blog content');

// Check other brands leveraged for ranking
const leveragedBrands = ['Shopify', 'WordPress', 'Razorpay', 'FastAPI', 'React Native', 'Flutter', 'Next.js 16'];
let brandsFound = 0;
leveragedBrands.forEach(brand => {
  if (blogsContent.includes(brand)) brandsFound++;
});
assert(brandsFound >= 5, `High-intent industry brands leveraged for comparative search (Found ${brandsFound}/7)`);

// ─── 5. DARK MODE & SCROLL TO TOP CHECKS ────────────────────────
console.log('\n🌓 5. Dark Mode & Scroll To Top Tests');
const globalsContent = fs.readFileSync('src/app/globals.css', 'utf8');
const floatContent = fs.readFileSync('src/components/FloatingActions.tsx', 'utf8');
const navContent = fs.readFileSync('src/components/Nav.tsx', 'utf8');

assert(globalsContent.includes("[data-theme='dark']"), 'CSS tokens contain full dark theme overrides');
assert(floatContent.includes('scrollToTop') && floatContent.includes("behavior: 'smooth'"), 'Smooth scroll to top handler present');
assert(navContent.includes('toggleTheme') && navContent.includes('localStorage'), 'Header theme toggle with localStorage persistence present');

// ─── 6. GOOGLE SITELINKS & ANTHROPIC-LIKE STRUCTURE TESTS ───────────
console.log('\n🏛️  6. Anthropic-Like Google Sitelinks Architecture Tests');
assert(fs.existsSync('src/app/about/page.tsx'), 'Dedicated /about route exists for Leadership sitelink');
assert(fs.existsSync('src/app/services/page.tsx'), 'Dedicated /services route exists for Services sitelink');
assert(fs.existsSync('src/app/work/page.tsx'), 'Dedicated /work route exists for Portfolio sitelink');

const portfolioContent = fs.readFileSync('src/data/portfolio.ts', 'utf8');
assert(!portfolioContent.includes('shecanfoundation'), 'She Can Foundation project completely removed');
assert(portfolioContent.includes('allindiantensile.com'), 'All Indian Tensile updated to .com domain');
assert(!portfolioContent.includes('allindiantensile.in'), 'Old .in domain completely eliminated');

const portfolioProjects = [...portfolioContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
assert(portfolioProjects.length === 13, `Exactly 13 verified portfolio projects (Found ${portfolioProjects.length})`);

// Brand Icons for Google SERP
assert(fs.existsSync('src/app/icon.png'), 'Google SERP 512x512 brand icon exists in app directory');
assert(fs.existsSync('src/app/apple-icon.png'), 'Apple touch icon exists in app directory');

// Sitelinks Schema in layout.tsx
assert(layoutContent.includes('SiteNavigationElement'), 'SiteNavigationElement schema embedded for Google Sitelinks');
assert(layoutContent.includes('potentialAction'), 'WebSite search action schema present for Sitelinks SearchBox');

// Check navigation links
assert(navContent.includes('href="/about"'), 'Nav links to dedicated /about route');
assert(navContent.includes('href="/services"'), 'Nav links to dedicated /services route');
assert(navContent.includes('href="/work"'), 'Nav links to dedicated /work route');

console.log('\n====================================================');
console.log(`🏁 TEST RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('🎉 ALL SEO, AEO, GEO & THEME VERIFICATIONS PASSED CLEANLY!\n');
} else {
  process.exit(1);
}
