'use client';

import React, { useState, useEffect } from 'react';
import { NewsItem } from '../../types/news';
import { getNewsFeed } from '../../services/api';
import { NewsCard } from './NewsCard';
import { NewsFilterBar } from './NewsFilterBar';
import { NewsDetailModal } from './NewsDetailModal';

const SOURCES = [
  'All',
  'The Hacker News',
  'BleepingComputer',
  'CISA Cybersecurity Advisories',
  'SANS Internet Storm Center',
  'CrowdStrike Blog',
  'Huntress Blog',
  'Cisco Talos Intelligence',
  'Wired Security',
  'Ars Technica Security',
  'Microsoft Threat Intelligence',
  'SentinelOne Blog'
];

const READ_STORAGE_KEY = 'cta_read_news_articles';
const PAGE_SIZE = 10;

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export const NewsFeedBlock: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [activeSource, setActiveSource] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [readIds, setReadIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Load persisted read/visited article IDs from browser storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(READ_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setReadIds(parsed);
        }
      }
    } catch {
      // storage unavailable or SSR
    }
  }, []);

  const handleMarkAsRead = (id: string) => {
    setReadIds((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      try {
        localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleResetRead = () => {
    setReadIds([]);
    try {
      localStorage.removeItem(READ_STORAGE_KEY);
    } catch {}
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setCurrentPage(1);
    getNewsFeed({ source: activeSource, searchQuery }).then((items) => {
      if (isMounted) {
        setNews(items);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [activeSource, searchQuery]);

  // Filter out articles the user has visited/read
  const visibleNews = news.filter((item) => !readIds.includes(item.id));
  const totalPages = Math.max(1, Math.ceil(visibleNews.length / PAGE_SIZE));
  const displayedNews = visibleNews.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages >= 1) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const el = document.getElementById('news');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="news" style={{ padding: '36px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Block Header */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              OSINT THREAT STREAM • TODAY
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.68rem',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)'
              }}
            >
              10 ADVISORIES PER PAGE
            </span>
            <span className="pulse-indicator" />
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
            Feed
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Today's OSINT wall: threat advisories, critical zero-days, and vulnerability disclosures across active feeds.
          </p>
        </div>

        {/* Filter Bar */}
        <NewsFilterBar
          sources={SOURCES}
          activeSource={activeSource}
          onSelectSource={setActiveSource}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={visibleNews.length}
          readCount={readIds.length}
          onResetRead={handleResetRead}
        />

        {/* News Grid */}
        {loading ? (
          <div
            className="font-mono"
            style={{
              padding: '48px 0',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.78rem'
            }}
          >
            CONNECTING TO INTEL STREAM...
          </div>
        ) : visibleNews.length === 0 ? (
          <div
            className="card"
            style={{
              padding: '36px 20px',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.85rem'
            }}
          >
            {readIds.length > 0 && news.length > 0 ? (
              <div>
                <p style={{ marginBottom: '14px', color: 'var(--text-bright)', fontSize: '0.92rem' }}>
                  All {news.length} threat intelligence reports matching this view have been read.
                </p>
                <button
                  onClick={handleResetRead}
                  className="font-mono"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.75rem',
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--primary)',
                    cursor: 'pointer',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  RESTORE READ ARTICLES
                </button>
              </div>
            ) : (
              'No threat intelligence reports matched your current filter criteria.'
            )}
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px'
            }}
          >
            {displayedNews.map((item) => (
              <NewsCard
                key={item.id}
                item={item}
                onSelect={setSelectedNews}
                onMarkAsRead={handleMarkAsRead}
              />
            ))}
          </div>
        )}

        {/* Pagination Bar */}
        {!loading && visibleNews.length > 0 && totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '24px',
              padding: '12px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}
          >
            <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Showing{' '}
              <strong style={{ color: 'var(--text-bright)' }}>
                {(currentPage - 1) * PAGE_SIZE + 1} -{' '}
                {Math.min(currentPage * PAGE_SIZE, visibleNews.length)}
              </strong>{' '}
              of <strong style={{ color: 'var(--text-bright)' }}>{visibleNews.length}</strong> reports
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: currentPage <= 1 ? 'transparent' : 'var(--surface-raised)',
                  color: currentPage <= 1 ? 'var(--text-muted)' : 'var(--text-bright)',
                  border: '1px solid var(--border)',
                  cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage <= 1 ? 0.5 : 1
                }}
              >
                &larr; Prev
              </button>

              {getPageNumbers(currentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className="font-mono"
                      style={{ padding: '0 4px', color: 'var(--text-muted)', fontSize: '0.75rem' }}
                    >
                      ...
                    </span>
                  );
                }
                const pageNum = Number(p);
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className="font-mono"
                    style={{
                      minWidth: '32px',
                      height: '30px',
                      padding: '0 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 700 : 500,
                      background: isActive ? 'var(--primary)' : 'var(--surface-raised)',
                      color: isActive ? '#060a0f' : 'var(--text-bright)',
                      border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: currentPage >= totalPages ? 'transparent' : 'var(--surface-raised)',
                  color: currentPage >= totalPages ? 'var(--text-muted)' : 'var(--text-bright)',
                  border: '1px solid var(--border)',
                  cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage >= totalPages ? 0.5 : 1
                }}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        <NewsDetailModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
          onMarkAsRead={handleMarkAsRead}
        />
      </div>
    </section>
  );
};
