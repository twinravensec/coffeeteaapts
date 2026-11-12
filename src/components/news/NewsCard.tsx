'use client';

import React from 'react';
import { NewsItem } from '../../types/news';
import { Badge } from '../ui/Badge';

interface NewsCardProps {
  item: NewsItem;
  onSelect: (item: NewsItem) => void;
  onMarkAsRead?: (id: string) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, onSelect }) => {
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
      onClick={() => onSelect(item)}
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
        {/* Source & Relative Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <Badge sourceName={item.source}>{item.source}</Badge>
          <span
            className="font-mono"
            style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
          >
            {item.relative_time}
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
          {item.title}
        </h3>

        {/* Summary Snippet */}
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
          {item.summary}
        </p>
      </div>

      {/* CVE & MITRE tags footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border)',
          paddingTop: '10px',
          marginTop: 'auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
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
          {item.cves.length === 0 && item.mitre_tags.length === 0 && (
            <span
              className="font-mono"
              style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
            >
              CATEGORY: {item.category.toUpperCase()}
            </span>
          )}
        </div>

        <span
          className="font-mono"
          style={{
            fontSize: '0.7rem',
            color: 'var(--primary)',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            paddingLeft: '8px'
          }}
        >
          DETAILS &rarr;
        </span>
      </div>
    </div>
  );
};
