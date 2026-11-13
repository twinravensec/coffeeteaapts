'use client';

import React from 'react';
import { BlogPost } from '../../types/blog';
import { Modal } from '../ui/Modal';
import { BlogMarkdown } from './BlogMarkdown';
import { formatPublicationDate } from './BlogPostTemplate';

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
      subtitle={`${formatPublicationDate(post.date)} • ${post.author} • ID: ${post.id}`}
      maxWidth="880px"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {post.summary && (
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.65,
              color: 'var(--text-bright)',
              marginBottom: '20px'
            }}
          >
            {post.summary}
          </p>
        )}

        {post.link_to_sources.length > 0 && (
          <div
            style={{
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '12px 16px',
              marginBottom: '24px'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--primary)',
                letterSpacing: '0.06em',
                marginBottom: '6px'
              }}
            >
              SOURCES
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {post.link_to_sources.map((src, idx) => (
                <li key={`${src.url}-${idx}`} style={{ fontSize: '0.8rem' }}>
                  {src.title && <strong style={{ color: 'var(--text-bright)', marginRight: '6px' }}>{src.title}:</strong>}
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: 'var(--primary)' }}
                  >
                    {src.url} &#8599;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
          <BlogMarkdown content={post.content_markdown} />
        </div>

        <div
          style={{
            marginTop: '36px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {post.author} &bull; {formatPublicationDate(post.date)}
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
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
