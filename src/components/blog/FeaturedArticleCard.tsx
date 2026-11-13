'use client';

import React from 'react';
import { BlogPost } from '../../types/blog';
import { Badge } from '../ui/Badge';
import { formatPublicationDate } from './BlogPostTemplate';

interface FeaturedArticleCardProps {
  post: BlogPost;
  onRead?: (post: BlogPost) => void;
}

export const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ post, onRead }) => {
  const href = `/blog/${post.slug}/`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onRead) {
      e.preventDefault();
      onRead(post);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '24px 28px',
        background: 'var(--surface)',
        border: '1px solid var(--border-bright)',
        borderRadius: '8px',
        marginBottom: '24px',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-bright)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '10px',
          flexWrap: 'wrap'
        }}
      >
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
        <Badge variant="info">{post.category}</Badge>
        <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          {post.reading_time} &bull; {formatPublicationDate(post.published_at)}
        </span>
      </div>

      <h3
        style={{
          fontSize: '1.25rem',
          lineHeight: 1.35,
          fontWeight: 800,
          color: 'var(--text-heading)',
          marginBottom: '10px'
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: '0.85rem',
          lineHeight: 1.6,
          color: 'var(--text)',
          marginBottom: '18px',
          maxWidth: '920px'
        }}
      >
        {post.summary}
      </p>

      {/* Author and Read CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: '1px solid var(--border)',
          paddingTop: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '4px',
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--primary)'
            }}
          >
            {post.author.name[0]}
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-bright)' }}>
              {post.author.name}{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>
                ({post.author.role})
              </span>
            </div>
          </div>
        </div>

        <span
          style={{
            padding: '6px 14px',
            borderRadius: '4px',
            backgroundColor: 'var(--surface-raised)',
            border: '1px solid var(--border-bright)',
            color: 'var(--text-bright)',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>Read Paper</span>
          <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>&rarr;</span>
        </span>
      </div>
    </a>
  );
};
