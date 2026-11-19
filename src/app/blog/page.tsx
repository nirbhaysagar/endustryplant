'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogs';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

const CATEGORIES = [
  { key: 'all', label: 'All Articles', count: 10 },
  { key: 'headless', label: 'Headless Commerce', count: 2 },
  { key: 'ai', label: 'AI & Automation', count: 2 },
  { key: 'engineering', label: 'Engineering', count: 2 },
  { key: 'growth', label: 'Growth & SEO', count: 2 },
  { key: 'strategy', label: 'Strategy & Pricing', count: 2 },
] as const;

export default function BlogIndex() {
  const [activeCat, setActiveCat] = useState<string>('all');

  const filteredPosts = activeCat === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.categoryKey === activeCat);

  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <>
      <Nav />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '110px' }}>
        <style>{`
          .blog-hero {
            padding: 60px 24px 40px;
            max-width: 1280px;
            margin: 0 auto;
          }

          .blog-tag {
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

          .blog-title {
            font-size: clamp(36px, 5vw, 64px);
            font-weight: 800;
            letter-spacing: -0.035em;
            color: var(--text-primary);
            line-height: 1.1;
            margin-bottom: 20px;
          }

          .blog-sub {
            font-size: 17px;
            color: var(--text-secondary);
            max-width: 680px;
            line-height: 1.65;
            margin-bottom: 40px;
          }

          /* ─── FEATURED HERO CARD ────────────────────────────── */
          .featured-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 24px;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            margin-bottom: 60px;
            transition: all 0.25s ease;
            box-shadow: var(--card-shadow);
          }

          .featured-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--card-shadow-hover);
            border-color: var(--brand-black);
          }

          .featured-content {
            padding: 44px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 16px;
          }

          .featured-badge {
            font-family: var(--font-mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--coral);
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }

          .featured-heading {
            font-size: clamp(24px, 2.5vw, 36px);
            font-weight: 800;
            letter-spacing: -0.025em;
            color: var(--text-primary);
            line-height: 1.25;
          }

          .featured-excerpt {
            font-size: 15px;
            line-height: 1.65;
            color: var(--text-secondary);
          }

          .featured-meta {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 13px;
            color: var(--text-muted);
            margin-top: 8px;
          }

          .featured-img-wrap {
            position: relative;
            background: #0E1017;
            overflow: hidden;
            min-height: 320px;
          }

          .featured-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .featured-card:hover .featured-img {
            transform: scale(1.03);
          }

          /* ─── CATEGORIES BAR ───────────────────────────────── */
          .cat-bar {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 40px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border);
          }

          .cat-btn {
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 8px 16px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          .cat-btn:hover {
            border-color: var(--brand-black);
            color: var(--text-primary);
          }

          .cat-btn-active {
            background: var(--text-primary);
            color: var(--bg);
            border-color: var(--text-primary);
          }

          .cat-btn-active:hover {
            background: var(--text-primary);
            color: var(--bg);
          }

          /* ─── POSTS GRID ───────────────────────────────────── */
          .posts-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 80px;
          }

          .post-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 18px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: var(--card-shadow);
          }

          .post-card:hover {
            transform: translateY(-4px);
            border-color: var(--brand-black);
            box-shadow: var(--card-shadow-hover);
          }

          .post-img-box {
            position: relative;
            width: 100%;
            height: 200px;
            background: #0E1017;
            overflow: hidden;
          }

          .post-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.35s ease;
          }

          .post-card:hover .post-img {
            transform: scale(1.04);
          }

          .post-body {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 12px;
          }

          .post-meta-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: var(--font-mono);
            font-size: 11px;
            color: var(--text-muted);
          }

          .post-cat {
            color: var(--coral);
            font-weight: 700;
            text-transform: uppercase;
          }

          .post-title {
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.02em;
            color: var(--text-primary);
            line-height: 1.3;
          }

          .post-excerpt {
            font-size: 13.5px;
            line-height: 1.6;
            color: var(--text-secondary);
            flex-grow: 1;
          }

          .post-footer {
            padding-top: 14px;
            border-top: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12.5px;
            color: var(--text-muted);
          }

          .read-link {
            font-weight: 700;
            color: var(--text-primary);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: color 0.15s ease;
          }

          .post-card:hover .read-link {
            color: var(--coral);
          }

          @media (max-width: 1024px) {
            .posts-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .featured-card {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .posts-grid {
              grid-template-columns: 1fr;
            }
            .featured-content {
              padding: 24px;
            }
          }
        `}</style>

        <div className="blog-hero">
          <div className="blog-tag">
            <span style={{ width: 7, height: 7, background: 'var(--coral)', display: 'inline-block', borderRadius: 1 }} />
            <span>Endustry Engineering Journal</span>
          </div>

          <h1 className="blog-title">
            Essays on Code, Systems & Digital Commerce
          </h1>

          <p className="blog-sub">
            Real architectural blueprints, Indian market benchmarks, and zero-bullshit engineering breakdowns written directly by technical founders Nirbhay Sagar & Aditya Kumar.
          </p>

          {/* ─── FEATURED ARTICLE ────────────────────────────── */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="featured-card">
              <div className="featured-content">
                <span className="featured-badge">Featured Architectural Blueprint</span>
                <h2 className="featured-heading">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <div className="featured-meta">
                  <span>By {featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="featured-img-wrap">
                <img src={featured.image} alt={featured.title} className="featured-img" />
              </div>
            </Link>
          )}

          {/* ─── CATEGORY FILTER ─────────────────────────────── */}
          <div className="cat-bar">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`cat-btn ${activeCat === c.key ? 'cat-btn-active' : ''}`}
                onClick={() => setActiveCat(c.key)}
              >
                <span>{c.label}</span>
                <span style={{ opacity: 0.6, fontSize: 10 }}>({c.count})</span>
              </button>
            ))}
          </div>

          {/* ─── ARTICLES GRID ───────────────────────────────── */}
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div className="post-img-box">
                  <img src={post.image} alt={post.title} className="post-img" loading="lazy" />
                </div>
                <div className="post-body">
                  <div className="post-meta-top">
                    <span className="post-cat">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span>{post.date}</span>
                    <span className="read-link">Read Blueprint ↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
