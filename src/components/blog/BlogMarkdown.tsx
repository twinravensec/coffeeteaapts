'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogCodeBlock } from './BlogCodeBlock';

interface BlogMarkdownProps {
  content: string;
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  return '';
}

function slugifyHeading(node: React.ReactNode): string {
  return extractText(node)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

export const BlogMarkdown: React.FC<BlogMarkdownProps> = ({ content }) => {
  return (
    <div
      className="markdown-content"
      style={{
        color: 'var(--text)',
        fontSize: '0.92rem',
        lineHeight: 1.75
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2
              id={slugifyHeading(children)}
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginTop: '36px',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2
              id={slugifyHeading(children)}
              style={{
                fontSize: '1.28rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginTop: '36px',
                marginBottom: '14px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border)',
                letterSpacing: '-0.015em'
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={slugifyHeading(children)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                marginTop: '26px',
                marginBottom: '10px'
              }}
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              id={slugifyHeading(children)}
              className="font-mono"
              style={{
                fontSize: '0.84rem',
                fontWeight: 700,
                color: 'var(--primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginTop: '20px',
                marginBottom: '8px'
              }}
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p style={{ marginBottom: '16px', color: 'var(--text)', lineHeight: 1.75 }}>
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong style={{ color: 'var(--text-bright)', fontWeight: 700 }}>
              {children}
            </strong>
          ),
          a: ({ href, children }) => {
            const isExternal = Boolean(href && /^https?:\/\//i.test(href));
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  color: 'var(--primary)',
                  borderBottom: '1px dashed var(--primary-dim)',
                  paddingBottom: '1px',
                  fontWeight: 500
                }}
              >
                {children}
              </a>
            );
          },
          ul: ({ children }) => (
            <ul
              style={{
                paddingLeft: '22px',
                marginBottom: '18px',
                color: 'var(--text)'
              }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              style={{
                paddingLeft: '22px',
                marginBottom: '18px',
                color: 'var(--text)'
              }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: '8px', lineHeight: 1.7 }}>{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote
              style={{
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '0 8px 8px 0',
                padding: '14px 18px',
                margin: '20px 0',
                color: 'var(--text-bright)',
                fontSize: '0.88rem'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {children}
              </div>
            </blockquote>
          ),
          pre: ({ children }) => {
            const firstChild = React.Children.toArray(children)[0];
            if (
              React.isValidElement<{ className?: string; children?: React.ReactNode }>(
                firstChild
              )
            ) {
              const rawLang = firstChild.props.className || '';
              const rawCode = extractText(firstChild.props.children);
              return <BlogCodeBlock language={rawLang} code={rawCode} />;
            }
            return <BlogCodeBlock code={extractText(children)} />;
          },
          code: ({ className, children, ...props }) => (
            <code
              className={`font-mono ${className || ''}`.trim()}
              style={{
                backgroundColor: 'var(--surface-raised)',
                color: 'var(--primary)',
                border: '1px solid var(--border)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}
              {...props}
            >
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div
              style={{
                overflowX: 'auto',
                margin: '20px 0',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                backgroundColor: 'var(--surface-deep)'
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '0.83rem'
                }}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead style={{ backgroundColor: 'var(--surface-raised)' }}>{children}</thead>
          ),
          th: ({ children }) => (
            <th
              className="font-mono"
              style={{
                padding: '10px 14px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--text-bright)',
                borderBottom: '1px solid var(--border)',
                whiteSpace: 'nowrap'
              }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              style={{
                padding: '10px 14px',
                color: 'var(--text)',
                borderBottom: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                verticalAlign: 'top'
              }}
            >
              {children}
            </td>
          ),
          hr: () => (
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid var(--border)',
                margin: '32px 0'
              }}
            />
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ''}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                margin: '18px 0',
                display: 'block'
              }}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
