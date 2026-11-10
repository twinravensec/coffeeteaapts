'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types/blog';
import { getBlogPosts } from '../../services/api';
import { FeaturedArticleCard } from './FeaturedArticleCard';
import { BlogCard } from './BlogCard';
import { BlogReaderModal } from './BlogReaderModal';

export const BlogBlock: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
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
        <div style={{ marginBottom: '18px' }}>
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
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
            Muninn Blog
          </h2>
        </div>

        {loading ? (
          <div
            className="font-mono"
            style={{
              padding: '48px 0',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.78rem'
            }}
          >
            LOADING MUNINN BLOG...
          </div>
        ) : posts.length === 0 ? (
          <div
            className="card"
            style={{
              padding: '44px 24px',
              textAlign: 'center',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-muted)'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: 'var(--primary)',
                marginBottom: '8px'
              }}
            >
              COMING SOON
            </div>
            <div style={{ fontSize: '0.82rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              Technical research papers, threat hunting guides, and detection tradecraft deep-dives are currently in drafting.
            </div>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <FeaturedArticleCard post={featuredPost} onRead={setSelectedPost} />
            )}

            {/* Remaining Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '16px'
              }}
            >
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} onRead={setSelectedPost} />
              ))}
            </div>
          </>
        )}

        {/* Reader Modal */}
        <BlogReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
    </section>
  );
};
