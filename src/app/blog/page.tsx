'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/shell/Header';
import { Footer } from '../../components/shell/Footer';
import { BlogPost, BlogCategory } from '../../types/blog';
import { getBlogPosts } from '../../services/api';
import { FeaturedArticleCard } from '../../components/blog/FeaturedArticleCard';
import { BlogCard } from '../../components/blog/BlogCard';

const CATEGORIES: ('all' | BlogCategory)[] = [
  'all',
  'Adversary Tradecraft',
  'Detection Engineering',
  'Threat Hunting',
  'Architecture'
];

export default function BlogCatalogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allPublishedCount, setAllPublishedCount] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getBlogPosts().then((items) => setAllPublishedCount(items.length));
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getBlogPosts({ category, searchQuery }).then((items) => {
      if (isMounted) {
        setPosts(items);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [category, searchQuery]);

  const hasActiveFilters = category !== 'all' || searchQuery.trim() !== '';
  const showHeroFeatured = !hasActiveFilters && posts.length > 0;
  const featuredPost = showHeroFeatured
    ? posts.find((p) => p.is_featured) || posts[0]
    : null;
  const gridPosts = featuredPost
    ? posts.filter((p) => p.id !== featuredPost.id)
    : posts;

  const handleReset = () => {
    setCategory('all');
    setSearchQuery('');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '32px 0 60px 0' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '16px'
            }}
          >
            <a
              href="/"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-bright)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Home
            </a>
            <span>/</span>
            <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
              Muninn Blog
            </span>
          </nav>

          {/* Page Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                PUBLICATIONS &amp; RESEARCH
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.68rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)'
                }}
              >
                {allPublishedCount} {allPublishedCount === 1 ? 'PUBLICATION' : 'PUBLICATIONS'}
              </span>
            </div>

            <h1
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                letterSpacing: '-0.02em',
                marginBottom: '6px'
              }}
            >
              Muninn Blog
            </h1>
            <p
              style={{
                fontSize: '0.86rem',
                color: 'var(--text-muted)',
                maxWidth: '820px',
                lineHeight: 1.5
              }}
            >
              Technical research papers covering adversary tradecraft, telemetry blind spots, and multi-platform detection engineering mechanics.
            </p>
          </div>

          {/* Filter & Search Toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '24px',
              padding: '12px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}
          >
            {/* Search Input */}
            <div style={{ flex: '1 1 260px' }}>
              <input
                type="search"
                placeholder="Filter publications by keyword, tag, author, or MITRE ID (e.g. T1558)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  fontSize: '0.78rem',
                  padding: '6px 10px',
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  color: 'var(--text-bright)'
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {CATEGORIES.map((cat) => {
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className="font-mono"
                    style={{
                      padding: '5px 10px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: isActive ? 700 : 600,
                      background: isActive ? 'var(--primary)' : 'var(--surface-raised)',
                      color: isActive ? '#060a0f' : 'var(--text-muted)',
                      border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    {cat === 'all' ? 'ALL TOPICS' : cat.toUpperCase()}
                  </button>
                );
              })}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Content Area */}
          {loading ? (
            <div
              className="font-mono"
              style={{
                padding: '56px 0',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.78rem'
              }}
            >
              LOADING MUNINN PUBLICATIONS...
            </div>
          ) : posts.length === 0 ? (
            hasActiveFilters ? (
              <div
                className="card"
                style={{
                  padding: '36px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                No publications matched your current filter criteria.
              </div>
            ) : null
          ) : (
            <>
              {featuredPost && <FeaturedArticleCard post={featuredPost} />}

              {gridPosts.length > 0 && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {gridPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
