'use client';

import React from 'react';
import { BlogPost } from '../../types/blog';
import { Badge } from '../ui/Badge';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
  return (
    <div
      className="card"
      style={{
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        gap: '12px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onClick={() => onRead(post)}
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
        {/* Category & Read Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <Badge variant="info">{post.category}</Badge>
          <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            {post.reading_time}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '0.98rem',
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
            fontSize: '0.82rem',
            lineHeight: 1.5,
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

      <div>
        {/* Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flexWrap: 'wrap',
            marginBottom: '10px'
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
                padding: '2px 5px',
                borderRadius: '3px',
                border: '1px solid var(--border)'
              }}
            >
              #{tag}
            </span>
          ))}
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
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-bright)' }}>
            {post.author.name}
          </span>
          <span
            className="font-mono"
            style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}
          >
            READ &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
