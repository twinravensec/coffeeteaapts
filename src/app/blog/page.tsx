'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/shell/Header';
import { Footer } from '../../components/shell/Footer';
import { BlogPost } from '../../types/blog';
import { getBlogPosts } from '../../services/api';
import { FeaturedArticleCard } from '../../components/blog/FeaturedArticleCard';
import { BlogCard } from '../../components/blog/BlogCard';

export default function BlogCatalogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allPublishedCount, setAllPublishedCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getBlogPosts().then((items) => setAllPublishedCount(items.length));
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getBlogPosts({ searchQuery }).then((items) => {
      if (isMounted) {
        setPosts(items);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  const hasActiveSearch = searchQuery.trim() !== '';
  const latestPost = !hasActiveSearch && posts.length > 0 ? posts[0] : null;
  const gridPosts = latestPost ? posts.slice(1) : posts;

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
                WRITE-UPS &amp; RESEARCH
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
                {allPublishedCount} {allPublishedCount === 1 ? 'POST' : 'POSTS'}
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
              Security write-ups, threat research, and detection engineering notes.
            </p>
          </div>

          {/* Search Toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              padding: '12px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}
          >
            <input
              type="search"
              placeholder="Search posts by title, summary, author, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                fontSize: '0.8rem',
                padding: '7px 12px',
                background: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                color: 'var(--text-bright)'
              }}
            />
            {hasActiveSearch && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                Clear
              </button>
            )}
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
              LOADING MUNINN BLOG...
            </div>
          ) : posts.length === 0 ? (
            hasActiveSearch ? (
              <div
                className="card"
                style={{
                  padding: '36px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                No posts matched your search query.
              </div>
            ) : null
          ) : (
            <>
              {latestPost && <FeaturedArticleCard post={latestPost} />}

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
