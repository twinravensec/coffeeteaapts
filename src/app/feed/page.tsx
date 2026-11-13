'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/shell/Header';
import { Footer } from '../../components/shell/Footer';
import { NewsItem } from '../../types/news';
import { getNewsFeed } from '../../services/api';
import { NewsCard } from '../../components/news/NewsCard';
import { NewsFilterBar } from '../../components/news/NewsFilterBar';
import { NewsDetailModal } from '../../components/news/NewsDetailModal';

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

export default function FeedCatalogPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [activeSource, setActiveSource] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [readIds, setReadIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize filters from URL parameters on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlSource = params.get('source');
      const urlQuery = params.get('q');
      const urlPage = params.get('page');
      if (urlSource && SOURCES.includes(urlSource)) setActiveSource(urlSource);
      if (urlQuery) setSearchQuery(urlQuery);
      if (urlPage && !isNaN(Number(urlPage))) setCurrentPage(Math.max(1, parseInt(urlPage, 10)));
    }
  }, []);

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setActiveSource('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '36px 0' }}>
        <div className="container">
          {/* Page Header */}
          <div
            style={{
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border)',
              marginBottom: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
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
                OSINT THREAT STREAM &bull; REAL-TIME FEED
              </span>
              <span className="pulse-indicator" />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}
                >
                  Threat Intelligence Feeds
                </h1>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginTop: '6px',
                    maxWidth: '820px',
                    lineHeight: 1.5
                  }}
                >
                  Real-time OSINT aggregation across 11 authoritative security telemetry sources, threat research blogs, and CISA advisories. Auto-refreshed every 4 hours.
                </p>
              </div>

              {/* Source Quick Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-bright)'
                  }}
                >
                  11 MONITORED FEEDS
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--primary)'
                  }}
                >
                  10 ITEMS / PAGE
                </span>
                {readIds.length > 0 && (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.72rem',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      background: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {readIds.length} READ
                  </span>
                )}
              </div>
            </div>
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

          {/* Top Pagination Status Bar */}
          {!loading && visibleNews.length > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                margin: '18px 0 16px 0',
                padding: '8px 12px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '6px'
              }}
            >
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                SHOWING{' '}
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {(currentPage - 1) * PAGE_SIZE + 1}
                </span>
                -
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {Math.min(currentPage * PAGE_SIZE, visibleNews.length)}
                </span>{' '}
                OF{' '}
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {visibleNews.length}
                </span>{' '}
                ADVISORIES
                {activeSource !== 'All' && (
                  <span> &bull; SOURCE: {activeSource.toUpperCase()}</span>
                )}
              </div>

              {/* Top Mini Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
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
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-bright)' }}>
                  {currentPage} / {totalPages}
                </span>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
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

          {/* News Cards Grid */}
          {loading ? (
            <div
              className="font-mono"
              style={{
                padding: '56px 0',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.8rem'
              }}
            >
              QUERYING OSINT THREAT FEEDS...
            </div>
          ) : visibleNews.length === 0 ? (
            <div
              className="card"
              style={{
                padding: '48px 24px',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.86rem'
              }}
            >
              <div>No advisories matched your filter criteria.</div>
              <button
                onClick={handleResetFilters}
                style={{
                  marginTop: '12px',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-bright)',
                  cursor: 'pointer'
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '16px',
                marginBottom: '32px'
              }}
            >
              {displayedNews.map((item) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  onSelect={(selected) => {
                    handleMarkAsRead(selected.id);
                    setSelectedNews(selected);
                  }}
                />
              ))}
            </div>
          )}

          {/* Bottom Full Pagination Controls */}
          {!loading && visibleNews.length > 0 && totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                padding: '16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
            >
              {/* Prev Button */}
              <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{
                  padding: '6px 14px',
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
                &larr; Previous
              </button>

              {/* Page Number Buttons */}
              {getPageNumbers(currentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span
                      key={"ellipsis-" + idx}
                      className="font-mono"
                      style={{
                        padding: '0 6px',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem'
                      }}
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
                      height: '32px',
                      padding: '0 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 700 : 500,
                      background: isActive ? 'var(--primary)' : 'var(--surface-raised)',
                      color: isActive ? '#080b12' : 'var(--text-bright)',
                      border: "1px solid " + (isActive ? 'var(--primary)' : 'var(--border)'),
                      cursor: 'pointer'
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                disabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  padding: '6px 14px',
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
          )}

          {/* News Detail Modal */}
          <NewsDetailModal
            item={selectedNews}
            onClose={() => setSelectedNews(null)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
