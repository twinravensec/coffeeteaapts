'use client';

import React from 'react';

interface NewsFilterBarProps {
  sources: string[];
  activeSource: string;
  onSelectSource: (source: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  readCount?: number;
  onResetRead?: () => void;
}

export const NewsFilterBar: React.FC<NewsFilterBarProps> = ({
  sources,
  activeSource,
  onSelectSource,
  searchQuery,
  onSearchChange,
  totalCount,
  readCount = 0,
  onResetRead
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px',
        padding: '12px 16px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px'
      }}
    >
      {/* Controls: Feed Dropdown & Keyword Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', flex: 1 }}>
        {/* Feed Select Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label
            htmlFor="feed-source-filter"
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            FEED:
          </label>
          <select
            id="feed-source-filter"
            value={activeSource}
            onChange={(e) => onSelectSource(e.target.value)}
            style={{
              fontSize: '0.78rem',
              padding: '6px 12px',
              fontWeight: 600,
              background: 'var(--surface-raised)',
              color: 'var(--text-heading)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {sources.map((src) => (
              <option key={src} value={src}>
                {src === 'All' ? 'All Feeds (4)' : src}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <input
          type="search"
          placeholder="Filter by CVE, technique, or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            minWidth: '240px',
            maxWidth: '340px',
            flex: '1 1 240px',
            fontSize: '0.78rem',
            padding: '6px 12px',
            background: 'var(--surface-raised)',
            color: 'var(--text-bright)',
            border: '1px solid var(--border)',
            borderRadius: '4px'
          }}
        />
      </div>

      {/* Item Counter & Today Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {readCount > 0 && onResetRead && (
          <button
            onClick={onResetRead}
            title="Restore hidden read articles"
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              padding: '3px 8px',
              borderRadius: '4px',
              background: 'rgba(255, 171, 0, 0.12)',
              color: '#ffab00',
              border: '1px solid rgba(255, 171, 0, 0.35)',
              cursor: 'pointer',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {readCount} READ • RESTORE
          </button>
        )}
        <span
          className="font-mono"
          style={{
            fontSize: '0.68rem',
            padding: '3px 8px',
            borderRadius: '4px',
            background: 'rgba(34, 197, 94, 0.12)',
            color: '#22c55e',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          TODAY
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap'
          }}
        >
          {totalCount} {totalCount === 1 ? 'article' : 'articles'}
        </span>
      </div>
    </div>
  );
};
