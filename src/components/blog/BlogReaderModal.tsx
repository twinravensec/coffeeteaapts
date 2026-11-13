'use client';

import React from 'react';
import { BlogPost } from '../../types/blog';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { BlogMarkdown } from './BlogMarkdown';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <Modal
      isOpen={!!post}
      onClose={onClose}
      title={post.title}
      subtitle={`By ${post.author.name} (${post.author.role}) • ${post.reading_time} • Published ${new Date(post.published_at).toLocaleDateString()}`}
      maxWidth="880px"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Meta Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '16px'
          }}
        >
          <Badge variant="info">{post.category}</Badge>
          {post.mitre_techniques.map((t) => (
            <Badge key={t} variant="technique">
              {t}
            </Badge>
          ))}
          {post.tags.map((tag) => (
            <Badge key={tag} variant="neutral">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Executive Summary callout */}
        <div
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderLeft: '4px solid var(--primary)',
            padding: '16px 20px',
            borderRadius: '0 8px 8px 0',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-bright)',
            marginBottom: '32px'
          }}
        >
          <strong style={{ color: 'var(--primary)' }}>Executive Summary: </strong>
          {post.summary}
        </div>

        {/* Markdown Rendered Body */}
        <BlogMarkdown content={post.content_markdown} />

        {/* Footer info */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Author Contact: <span style={{ color: 'var(--primary)' }}>{post.author.handle}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={`/blog/${post.slug}/`}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--primary)',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Open Full Page &rarr;
            </a>
            <button
              onClick={onClose}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border-bright)',
                color: 'var(--text-bright)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Close Reader
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
