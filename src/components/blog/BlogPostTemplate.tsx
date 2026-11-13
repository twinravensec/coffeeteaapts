'use client';

import React, { useState } from 'react';
import { BlogPost } from '../../types/blog';
import { Header } from '../shell/Header';
import { Footer } from '../shell/Footer';
import { Badge, BadgeVariant } from '../ui/Badge';
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

function getMitreUrl(techniqueId: string): string {
  const cleanId = techniqueId.trim().toUpperCase().replace(/\./g, '/');
  return `https://attack.mitre.org/techniques/${cleanId}/`;
}

function getTlpVariant(tlp?: string): BadgeVariant {
  if (!tlp) return 'neutral';
  const upper = tlp.toUpperCase();
  if (upper.includes('AMBER')) return 'high';
  if (upper.includes('GREEN')) return 'technique';
  return 'neutral';
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
                PUBLICATION NOT FOUND
              </div>
              <h1 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-heading)' }}>
                Requested Research Article Unavailable
              </h1>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                The requested publication could not be found.
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
          <article style={{ maxWidth: '1020px', margin: '0 auto' }}>
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
                <span>ALL PUBLICATIONS</span>
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
                  padding: '14px 18px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--warning)',
                      letterSpacing: '0.06em',
                      marginBottom: '4px'
                    }}
                  >
                    {post.status === 'template'
                      ? 'TEMPLATE STYLEGUIDE PREVIEW • UNLISTED FROM PUBLIC FEED'
                      : 'DRAFT PREVIEW • UNLISTED FROM PUBLIC FEED'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text)' }}>
                    {post.status === 'template'
                      ? 'Copy content/blog/_template.md to content/blog/<your-slug>.md and set status: published to publish a new paper.'
                      : 'Update status: published in YAML frontmatter when ready to list this publication.'}
                  </div>
                </div>
                <Badge variant="high">{post.status.toUpperCase()}</Badge>
              </div>
            )}

            {/* Tactical Article Header Card */}
            <header
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '28px 32px',
                marginBottom: '20px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Top Badges & Timestamps */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {post.is_featured && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--primary)',
                        color: '#060a0f',
                        letterSpacing: '0.06em'
                      }}
                    >
                      FEATURED RESEARCH
                    </span>
                  )}
                  <Badge variant="info">{post.category}</Badge>
                  {post.tlp && <Badge variant={getTlpVariant(post.tlp)}>{post.tlp}</Badge>}
                </div>

                <span
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}
                >
                  {post.reading_time} &bull; {formatPublicationDate(post.published_at)}
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: '1.85rem',
                  lineHeight: 1.28,
                  fontWeight: 800,
                  color: 'var(--text-heading)',
                  letterSpacing: '-0.02em',
                  marginBottom: '22px'
                }}
              >
                {post.title}
              </h1>

              {/* Metadata Grid (matching DetectionDetailModal) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '14px',
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '16px 18px'
                }}
              >
                {/* Author */}
                <div>
                  <div
                    className="font-mono"
                    style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '6px' }}
                  >
                    RESEARCH AUTHOR
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      className="font-mono"
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border-bright)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        flexShrink: 0
                      }}
                    >
                      {post.author.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                        {post.author.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {post.author.role} ({post.author.handle})
                      </div>
                    </div>
                  </div>
                </div>

                {/* Published & Reading Time */}
                <div>
                  <div
                    className="font-mono"
                    style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '6px' }}
                  >
                    PUBLICATION DATE
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                    {formatPublicationDate(post.published_at)}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--primary)', marginTop: '2px' }}>
                    EST. {post.reading_time.toUpperCase()}
                  </div>
                </div>

                {/* Platforms (if provided) */}
                {post.platforms && post.platforms.length > 0 && (
                  <div>
                    <div
                      className="font-mono"
                      style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '6px' }}
                    >
                      TARGET PLATFORMS
                    </div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {post.platforms.map((plat) => (
                        <Badge key={plat} variant="platform">
                          {plat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* MITRE ATT&CK Techniques */}
                {post.mitre_techniques.length > 0 && (
                  <div>
                    <div
                      className="font-mono"
                      style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '6px' }}
                    >
                      MITRE ATT&amp;CK COVERAGE
                    </div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {post.mitre_techniques.map((tech) => (
                        <a
                          key={tech}
                          href={getMitreUrl(tech)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}
                          title={`View ${tech} on MITRE ATT&CK`}
                        >
                          <Badge variant="technique">{tech}</Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Topic Tags */}
              {post.tags.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexWrap: 'wrap',
                    marginTop: '14px'
                  }}
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono"
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        backgroundColor: 'var(--surface-raised)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        border: '1px solid var(--border)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Executive Summary Callout */}
            {post.summary && (
              <section
                aria-label="Executive Summary"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--primary)',
                  borderRadius: '0 8px 8px 0',
                  padding: '18px 24px',
                  marginBottom: '20px'
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    letterSpacing: '0.06em',
                    marginBottom: '6px'
                  }}
                >
                  EXECUTIVE SUMMARY
                </div>
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'var(--text-bright)',
                    margin: 0
                  }}
                >
                  {post.summary}
                </p>
              </section>
            )}

            {/* Main Markdown Article Body */}
            <div
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '32px 36px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.18)'
              }}
            >
              <BlogMarkdown content={post.content_markdown} />
            </div>

            {/* Article Footer Attribution & Share Bar */}
            <div
              style={{
                marginTop: '20px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                  Published by {post.author.name}{' '}
                  <span style={{ color: 'var(--primary)' }}>({post.author.handle})</span>
                </div>
                <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {post.category.toUpperCase()} &bull; {formatPublicationDate(post.published_at)}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handleCopyPermalink}
                  className="font-mono"
                  style={{
                    padding: '7px 14px',
                    borderRadius: '6px',
                    backgroundColor: copiedLink ? 'var(--success)' : 'var(--surface-raised)',
                    border: `1px solid ${copiedLink ? 'var(--success)' : 'var(--border-bright)'}`,
                    color: copiedLink ? '#060a0f' : 'var(--text-bright)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {copiedLink ? 'PERMALINK COPIED!' : 'COPY ARTICLE LINK'}
                </button>

                <a
                  href="/blog"
                  style={{
                    padding: '7px 16px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--surface-raised)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  &larr; Back to Muninn Blog
                </a>
              </div>
            </div>

            {/* Related Publications */}
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
                    MORE FROM MUNINN RESEARCH
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
