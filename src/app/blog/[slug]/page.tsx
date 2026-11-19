import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found | Endustry Plant' };
  }

  const url = `https://endustryplant.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Endustry Plant`,
    description: post.excerpt,
    keywords: [
      post.category,
      'Next.js 16',
      'Endustry Plant',
      'Indian digital agency',
      'Nirbhay Sagar',
      'Aditya Kumar',
    ],
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Endustry Plant',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Endustry Plant',
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author],
      images: [
        {
          url: `https://endustryplant.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://endustryplant.com${post.image}`],
      creator: '@endustryplant',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: `https://endustryplant.com${post.image}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      url: 'https://endustryplant.com/#about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Endustry Plant',
      url: 'https://endustryplant.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://endustryplant.com/hero_image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://endustryplant.com/blog/${post.slug}`,
    },
  };

  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } : null;

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '110px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}

        <style>{`
          .article-wrap {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 24px 100px;
          }

          .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: var(--font-mono);
            font-size: 11.5px;
            color: var(--text-muted);
            margin-bottom: 24px;
          }

          .breadcrumb a:hover {
            color: var(--coral);
          }

          .post-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: var(--font-mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--coral);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 16px;
          }

          .post-h1 {
            font-size: clamp(32px, 4.2vw, 52px);
            font-weight: 800;
            letter-spacing: -0.03em;
            color: var(--text-primary);
            line-height: 1.18;
            margin-bottom: 24px;
          }

          .post-lead {
            font-size: 19px;
            line-height: 1.65;
            color: var(--text-secondary);
            margin-bottom: 32px;
            border-left: 3px solid var(--coral);
            padding-left: 18px;
          }

          .author-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 16px;
          }

          .author-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .author-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: var(--coral);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 15px;
          }

          .author-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .author-name {
            font-size: 14.5px;
            font-weight: 700;
            color: var(--text-primary);
          }

          .author-sub {
            font-size: 12.5px;
            color: var(--text-muted);
          }

          .hero-img-box {
            width: 100%;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--border);
            margin-bottom: 48px;
            background: #0E1017;
          }

          .hero-img {
            width: 100%;
            height: auto;
            display: block;
          }

          /* ─── TABLE OF CONTENTS ─────────────────────────────── */
          .toc-box {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px 28px;
            margin-bottom: 48px;
          }

          .toc-title {
            font-family: var(--font-mono);
            font-size: 11.5px;
            font-weight: 700;
            color: var(--text-primary);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 12px;
          }

          .toc-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .toc-link {
            font-size: 14px;
            color: var(--text-secondary);
            transition: color 0.15s ease;
          }

          .toc-link:hover {
            color: var(--coral);
          }

          /* ─── ARTICLE PROSE ─────────────────────────────────── */
          .prose-section {
            margin-bottom: 44px;
          }

          .prose-h2 {
            font-size: clamp(24px, 2.5vw, 32px);
            font-weight: 800;
            letter-spacing: -0.025em;
            color: var(--text-primary);
            margin-bottom: 16px;
            padding-top: 16px;
          }

          .prose-p {
            font-size: 16.5px;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 18px;
          }

          /* ─── CODE BLOCK ────────────────────────────────────── */
          .code-box {
            background: #0B0D14;
            border: 1px solid #1E2230;
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            overflow-x: auto;
          }

          .code-box pre {
            font-family: var(--font-mono);
            font-size: 13px;
            line-height: 1.6;
            color: #E2E8F0;
            margin: 0;
          }

          /* ─── COMPARISON TABLE ──────────────────────────────── */
          .comp-table {
            width: 100%;
            border-collapse: collapse;
            margin: 28px 0;
            background: var(--bg-card);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
          }

          .comp-table th {
            background: var(--bg-subtle);
            padding: 14px 18px;
            text-align: left;
            font-family: var(--font-mono);
            font-size: 11.5px;
            font-weight: 700;
            color: var(--text-primary);
            text-transform: uppercase;
            border-bottom: 1px solid var(--border);
          }

          .comp-table td {
            padding: 14px 18px;
            font-size: 14px;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border);
          }

          .comp-table tr:last-child td {
            border-bottom: none;
          }

          /* ─── CALLOUT BLOCK ─────────────────────────────────── */
          .callout-box {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-left: 4px solid var(--coral);
            border-radius: 12px;
            padding: 24px;
            margin: 32px 0;
          }

          .callout-title {
            font-size: 16px;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 6px;
          }

          .callout-text {
            font-size: 14.5px;
            line-height: 1.65;
            color: var(--text-secondary);
          }

          /* ─── FAQ ACCORDION IN ARTICLE ──────────────────────── */
          .article-faqs {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 18px;
            padding: 32px 36px;
            margin: 50px 0;
          }

          .faq-headline {
            font-size: 24px;
            font-weight: 800;
            color: var(--text-primary);
            letter-spacing: -0.02em;
            margin-bottom: 24px;
          }

          .faq-item {
            border-bottom: 1px solid var(--border);
            padding: 18px 0;
          }

          .faq-item:last-child {
            border-bottom: none;
          }

          .faq-q {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .faq-a {
            font-size: 14.5px;
            line-height: 1.7;
            color: var(--text-secondary);
          }

          /* ─── BOTTOM SPRINT BANNER ──────────────────────────── */
          .article-cta {
            background: #0A0A0E;
            color: #FFFFFF;
            border-radius: 20px;
            padding: 38px 44px;
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;
          }

          .cta-btn {
            background: var(--coral);
            color: #FFFFFF;
            padding: 12px 26px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 700;
            white-space: nowrap;
            transition: all 0.2s ease;
          }

          .cta-btn:hover {
            background: var(--coral-hover);
            transform: translateY(-2px);
          }
        `}</style>

        <article className="article-wrap">
          {/* BREADCRUMB */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Engineering Journal</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{post.category}</span>
          </nav>

          <div className="post-tag">
            <span style={{ width: 7, height: 7, background: 'var(--coral)', display: 'inline-block', borderRadius: 1 }} />
            <span>{post.category}</span>
          </div>

          <h1 className="post-h1">{post.title}</h1>

          <p className="post-lead">{post.excerpt}</p>

          {/* AUTHOR BAR */}
          <div className="author-bar">
            <div className="author-left">
              <div className="author-avatar">{post.author.charAt(0)}</div>
              <div className="author-info">
                <span className="author-name">{post.author}</span>
                <span className="author-sub">{post.authorRole} · {post.date} · {post.readTime}</span>
              </div>
            </div>

            <Link href="/contact" style={{ fontSize: 13, fontWeight: 700, color: 'var(--coral)' }}>
              Book Founder Scoping Call ↗
            </Link>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-img-box">
            <img src={post.image} alt={post.title} className="hero-img" />
          </div>

          {/* TABLE OF CONTENTS */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="toc-box">
              <div className="toc-title">Table of Contents</div>
              <div className="toc-list">
                {post.tableOfContents.map((toc) => (
                  <a key={toc.id} href={`#${toc.id}`} className="toc-link">
                    {toc.title}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* INTRO */}
          <div className="prose-section">
            {post.content.intro.map((p, idx) => (
              <p key={idx} className="prose-p">
                {p}
              </p>
            ))}
          </div>

          {/* SECTIONS */}
          {post.content.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="prose-section">
              <h2 className="prose-h2">{sec.title}</h2>
              {sec.body.map((p, idx) => (
                <p key={idx} className="prose-p">
                  {p}
                </p>
              ))}

              {sec.codeBlock && (
                <div className="code-box">
                  <pre>
                    <code>{sec.codeBlock.code}</code>
                  </pre>
                </div>
              )}

              {sec.table && (
                <table className="comp-table">
                  <thead>
                    <tr>
                      {sec.table.headers.map((h, idx) => (
                        <th key={idx}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {sec.callout && (
                <div className="callout-box">
                  <div className="callout-title">{sec.callout.title}</div>
                  <div className="callout-text">{sec.callout.text}</div>
                </div>
              )}
            </section>
          ))}

          {/* CONCLUSION & INTERNAL LINKS */}
          <div className="prose-section">
            <h2 className="prose-h2">Architectural Takeaway</h2>
            {post.content.conclusion.map((p, idx) => (
              <p key={idx} className="prose-p">
                {p}
              </p>
            ))}
          </div>

          {/* FAQS FOR AEO */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="article-faqs">
              <h3 className="faq-headline">Frequently Asked Technical Questions</h3>
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h4 className="faq-q">{faq.q}</h4>
                  <p className="faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          )}

          {/* BOTTOM SPRINT BANNER */}
          <div className="article-cta">
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
                Ready to engineer your digital flagship?
              </h3>
              <p style={{ fontSize: 14, color: '#94A3B8' }}>
                We ship full products in 4–6 week fixed sprints with zero billable hour traps.
              </p>
            </div>
            <Link href="/contact" className="cta-btn">
              Start a Project ↗
            </Link>
          </div>
        </article>
      </main>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
