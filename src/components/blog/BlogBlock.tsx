'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types/blog';
import { getBlogPosts } from '../../services/api';
import { FeaturedArticleCard } from './FeaturedArticleCard';
import { BlogCard } from './BlogCard';

export const BlogBlock: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getBlogPosts().then((items) => {
      if (isMounted) {
        setPosts(items);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = posts.find((p) => p.is_featured) || posts[0];
  const regularPosts = posts.filter((p) => p.id !== featuredPost?.id);

  return (
    <section id="blog" style={{ padding: '36px 0 20px 0' }}>
      <div className="container">
        {/* Block Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: posts.length > 0 || loading ? '18px' : '0'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                PUBLICATIONS &amp; RESEARCH
              </span>
            </div>
            <h2
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                letterSpacing: '-0.02em'
              }}
            >
              Muninn Blog
            </h2>
          </div>

          <a
            href="/blog"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              background: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              color: 'var(--text-bright)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-bright)';
            }}
          >
            <span>Open Muninn Blog</span>
            <span>&rarr;</span>
          </a>
        </div>

        {loading ? (
          <div
            className="font-mono"
            style={{
              padding: '32px 0',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.78rem'
            }}
          >
            LOADING MUNINN BLOG...
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Featured Post */}
            {featuredPost && <FeaturedArticleCard post={featuredPost} />}

            {/* Remaining Grid */}
            {regularPosts.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '16px'
                }}
              >
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
};
