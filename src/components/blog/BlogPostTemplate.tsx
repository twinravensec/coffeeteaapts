'use client';

import React, { useState } from 'react';
import { BlogPost } from '../../types/blog';
import { Header } from '../shell/Header';
import { Footer } from '../shell/Footer';
import { Badge } from '../ui/Badge';
import { BlogMarkdown } from './BlogMarkdown';
import { BlogCard } from './BlogCard';

interface BlogPostTemplateProps {
  post: BlogPost | null;
  relatedPosts?: BlogPost[];
}

export function formatPublicationDate(dateStr: string): string {
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const localSafeDate = new Date(Number(year), Number(month) - 1, Number(day));
    return localSafeDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? dateStr : parsed.toLocaleDateString();
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  post,
  relatedPosts = []
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyPermalink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, padding: '48px 0 60px 0' }}>
          <div className="container">
            <div
              className="card"
              style={{
                maxWidth: '720px',
                margin: '0 auto',
                padding: '48px 32px',
                textAlign: 'center',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--warning)',
                  letterSpacing: '0.08em',
                  marginBottom: '10px'
                }}
              >
                POST NOT FOUND
              </div>
              <h1 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-heading)' }}>
                Requested Post Unavailable
              </h1>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                The requested post could not be found.
              </p>
              <a
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-bright)',
                  color: 'var(--text-bright)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                &larr; Return to Muninn Blog
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '32px 0 64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Top Navigation Bar: Breadcrumbs & Back Link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <nav
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap'
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
                <a
                  href="/blog"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-bright)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Muninn Blog
                </a>
                <span>/</span>
                <span
                  style={{
                    color: 'var(--text-bright)',
                    fontWeight: 600,
                    maxWidth: '420px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {post.title}
                </span>
              </nav>

              <a
                href="/blog"
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>&larr;</span>
                <span>ALL POSTS</span>
              </a>
            </div>

            {/* Template / Draft Status Banner */}
            {post.status !== 'published' && (
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--warning)',
                  borderRadius: '0 8px 8px 0',
                  padding: '12px 18px',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--text)' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--warning)',
                      letterSpacing: '0.06em',
                      marginRight: '10px'
                    }}
                  >
                    {post.status === 'template' ? 'TEMPLATE PREVIEW' : 'DRAFT PREVIEW'}
                  </span>
                  Unlisted from public feed &mdash; copy <code>content/blog/_template.md</code> and set{' '}
                  <code>status: published</code> to publish.
                </div>
                <Badge variant="high">{post.status.toUpperCase()}</Badge>
              </div>
            )}

            {/* Single Unified Continuous Article Container */}
            <div
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* 1. Header Block */}
              <header
                style={{
                  padding: '28px 36px',
                  backgroundColor: 'var(--surface-deep)',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                {/* Date • Author • ID */}
                <div
                  className="font-mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    flexWrap: 'wrap',
                    fontSize: '0.73rem',
                    color: 'var(--text-muted)',
                    marginBottom: '12px'
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    {formatPublicationDate(post.date)}
                  </span>
                  <span>&bull;</span>
                  <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                    {post.author}
                  </span>
                  <span>&bull;</span>
                  <span>ID: {post.id}</span>
                </div>

                {/* Title */}
                <h1
                  style={{
                    fontSize: '1.9rem',
                    lineHeight: 1.25,
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.02em',
                    marginBottom: post.summary ? '14px' : '0'
                  }}
                >
                  {post.title}
                </h1>

                {/* Summary */}
                {post.summary && (
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: 'var(--text)',
                      margin: 0
                    }}
                  >
                    {post.summary}
                  </p>
                )}

                {/* Dedicated Sources Bar/List */}
                {post.link_to_sources.length > 0 && (
                  <div
                    style={{
                      marginTop: '20px',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '12px 16px'
                    }}
                  >
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}
                    >
                      SOURCES
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      {post.link_to_sources.map((src, idx) => (
                        <li
                          key={`${src.url}-${idx}`}
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '8px',
                            flexWrap: 'wrap',
                            fontSize: '0.82rem'
                          }}
                        >
                          {src.title && (
                            <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                              {src.title}:
                            </span>
                          )}
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono"
                            style={{
                              fontSize: '0.76rem',
                              color: 'var(--primary)',
                              wordBreak: 'break-all',
                              borderBottom: '1px dashed var(--primary-dim)'
                            }}
                          >
                            {src.url} &#8599;
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </header>

              {/* 2. Continuous Body: Main Write-Up + Dynamic ## Header 2 Sections */}
              <div style={{ padding: '32px 36px' }}>
                <BlogMarkdown content={post.content_markdown} />
              </div>

              {/* 3. Footer Bar */}
              <footer
                style={{
                  padding: '16px 36px',
                  backgroundColor: 'var(--surface-deep)',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}
                >
                  <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                    {post.author}
                  </span>{' '}
                  &bull; {formatPublicationDate(post.date)} &bull; {post.id}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleCopyPermalink}
                    className="font-mono"
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      backgroundColor: copiedLink ? 'var(--success)' : 'var(--surface-raised)',
                      border: `1px solid ${copiedLink ? 'var(--success)' : 'var(--border-bright)'}`,
                      color: copiedLink ? '#060a0f' : 'var(--text-bright)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedLink ? 'LINK COPIED!' : 'COPY LINK'}
                  </button>

                  <a
                    href="/blog"
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-bright)',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    &larr; Back to Muninn Blog
                  </a>
                </div>
              </footer>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section style={{ marginTop: '36px' }}>
                <div style={{ marginBottom: '14px' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em'
                    }}
                  >
                    MORE POSTS
                  </span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {relatedPosts.map((rel) => (
                    <BlogCard key={rel.id} post={rel} />
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};
