'use client';

import React from 'react';
import { BlogPost } from '../../types/blog';
import { formatPublicationDate } from './BlogPostTemplate';

interface BlogCardProps {
  post: BlogPost;
  onRead?: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
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
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        gap: '14px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-bright)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      <div>
        {/* Date & ID */}
        <div
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            marginBottom: '8px'
          }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
            {formatPublicationDate(post.date)}
          </span>
          <span>{post.id}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.02rem',
            lineHeight: 1.35,
            fontWeight: 700,
            color: 'var(--text-heading)',
            marginBottom: '8px'
          }}
        >
          {post.title}
        </h3>

        {/* Summary */}
        <p
          style={{
            fontSize: '0.83rem',
            lineHeight: 1.55,
            color: 'var(--text)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {post.summary}
        </p>
      </div>

      {/* Author Footer */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-bright)' }}>
          {post.author}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}
        >
          READ &rarr;
        </span>
      </div>
    </a>
  );
};
