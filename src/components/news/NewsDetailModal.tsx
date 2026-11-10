'use client';

import React from 'react';
import { NewsItem } from '../../types/news';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

interface NewsDetailModalProps {
  item: NewsItem | null;
  onClose: () => void;
  onMarkAsRead?: (id: string) => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ item, onClose, onMarkAsRead }) => {
  if (!item) return null;

  return (
    <Modal
      isOpen={!!item}
      onClose={onClose}
      title={item.source}
      subtitle={`Published ${item.relative_time} • ${new Date(item.published_at).toUTCString()}`}
      maxWidth="720px"
    >
      <div>
        <h2
          style={{
            fontSize: '20px',
            lineHeight: 1.35,
            fontWeight: 700,
            color: 'var(--text-heading)',
            marginBottom: '16px'
          }}
        >
          {item.title}
        </h2>

        {/* Badges bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}
        >
          <Badge variant="neutral">{item.category}</Badge>
          {item.is_breaking && <Badge variant="critical">CRITICAL ADVISORY</Badge>}
          {item.cves.map((cve) => (
            <Badge key={cve} variant="cve">
              {cve}
            </Badge>
          ))}
          {item.mitre_tags.map((tag) => (
            <Badge key={tag} variant="technique">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Article Summary */}
        <div
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'var(--text-bright)',
            backgroundColor: 'var(--surface-raised)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}
        >
          {item.summary}
        </div>

        {/* Action button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px'
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-deep)',
              color: 'var(--text)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Dismiss
          </button>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (onMarkAsRead) {
                onMarkAsRead(item.id);
              }
              onClose();
            }}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              backgroundColor: 'var(--primary)',
              color: '#080b12',
              fontSize: '13px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            View Official Advisory &rarr;
          </a>
        </div>
      </div>
    </Modal>
  );
};
