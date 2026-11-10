'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '../../types/blog';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

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
        <div
          className="markdown-content"
          style={{
            color: 'var(--text-bright)',
            fontSize: '14px',
            lineHeight: 1.7
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginTop: '32px',
                    marginBottom: '14px',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '8px'
                  }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginTop: '24px',
                    marginBottom: '10px'
                  }}
                >
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p style={{ marginBottom: '16px', color: 'var(--text)' }}>
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul style={{ paddingLeft: '24px', marginBottom: '16px', color: 'var(--text)' }}>
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li style={{ marginBottom: '6px' }}>{children}</li>
              ),
              code: ({ className, children, ...props }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code
                      className="font-mono"
                      style={{
                        backgroundColor: 'var(--surface-raised)',
                        color: 'var(--accent-cyan)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <pre
                    className="font-mono"
                    style={{
                      backgroundColor: 'var(--surface-deep)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '16px',
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: 'var(--text-bright)',
                      overflowX: 'auto',
                      margin: '18px 0'
                    }}
                  >
                    <code>{children}</code>
                  </pre>
                );
              },
              hr: () => (
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '28px 0' }} />
              )
            }}
          >
            {post.content_markdown}
          </ReactMarkdown>
        </div>

        {/* Footer info */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Author Contact: <span style={{ color: 'var(--primary)' }}>{post.author.handle}</span>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '8px 18px',
              borderRadius: '6px',
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border-bright)',
              color: 'var(--text-bright)',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            Close Reader
          </button>
        </div>
      </div>
    </Modal>
  );
};
