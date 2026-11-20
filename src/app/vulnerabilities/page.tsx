'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Footer } from '../../components/shell/Footer';
import { VulnerabilityItem } from '../../types/vulnerability';
import { getVulnerabilities, NewsDateFilter } from '../../services/api';
import { VulnCard } from '../../components/vulnerabilities/VulnCard';
import { VulnFilterBar } from '../../components/vulnerabilities/VulnFilterBar';
import { VulnDetailModal } from '../../components/vulnerabilities/VulnDetailModal';
import { Badge } from '../../components/ui/Badge';

const SOURCES = [
  'All',
  'CISA KEV',
  'NIST NVD',
  'GitHub Advisory (GHSA)'
];

const PAGE_SIZE = 12;

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

export default function VulnerabilitiesPage() {
  const [vulns, setVulns] = useState<VulnerabilityItem[]>([]);
  const [activeSource, setActiveSource] = useState('All');
  const [dateFilter, setDateFilter] = useState<NewsDateFilter>('all');
  const [severity, setSeverity] = useState('all');
  const [kevOnly, setKevOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVuln, setSelectedVuln] = useState<VulnerabilityItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlSource = params.get('source');
      const urlDate = params.get('date');
      const urlSev = params.get('severity');
      const urlKev = params.get('kev');
      const urlQuery = params.get('q');
      if (urlSource && SOURCES.includes(urlSource)) setActiveSource(urlSource);
      if (urlDate === 'today' || urlDate === 'yesterday' || urlDate === 'all') {
        setDateFilter(urlDate);
      }
      if (urlSev) setSeverity(urlSev.toUpperCase());
      if (urlKev === '1' || urlKev === 'true') setKevOnly(true);
      if (urlQuery) setSearchQuery(urlQuery);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setCurrentPage(1);

    getVulnerabilities({
      source: activeSource,
      dateFilter,
      severity,
      kevOnly,
      searchQuery
    }).then((items) => {
      if (isMounted) {
        setVulns(items);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [activeSource, dateFilter, severity, kevOnly, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(vulns.length / PAGE_SIZE));
  const displayedVulns = vulns.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setActiveSource('All');
    setDateFilter('all');
    setSeverity('all');
    setKevOnly(false);
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, padding: '32px 0 60px 0' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '16px'
            }}
          >
            <Link
              href="/"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-bright)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
              Vulnerabilities
            </span>
          </nav>

          {/* Page Header */}
          <div
            style={{
              paddingBottom: '22px',
              borderBottom: '1px solid var(--border)',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                AUTHORITATIVE VULNERABILITY TELEMETRY &bull; AUTO-SYNCED
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
                  Open-Source &amp; CVE Vulnerability Monitor
                </h1>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginTop: '6px',
                    maxWidth: '840px',
                    lineHeight: 1.5
                  }}
                >
                  Tracks newly added vulnerabilities directly from authoritative primary databases with zero third-party intermediaries: NIST NVD 2.0, CISA Known Exploited Vulnerabilities (KEV), GitHub Reviewed Advisories (GHSA / OSV), and FIRST EPSS exploit scoring.
                </p>
              </div>

              {/* Source-of-Truth Quick Filter Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {(['CISA KEV', 'NIST NVD', 'GitHub Advisory (GHSA)'] as const).map((src) => {
                  const isActive = activeSource === src;
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveSource(isActive ? 'All' : src)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        opacity: activeSource === 'All' || isActive ? 1 : 0.45,
                        boxShadow: isActive ? '0 0 0 2px var(--primary)' : 'none',
                        borderRadius: '4px'
                      }}
                      title={`Filter by ${src}`}
                    >
                      <Badge sourceName={src}>
                        {src === 'GitHub Advisory (GHSA)' ? 'GHSA / OSV' : src}
                      </Badge>
                    </button>
                  );
                })}
                <Badge variant="neutral">FIRST EPSS</Badge>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <VulnFilterBar
            sources={SOURCES}
            activeSource={activeSource}
            onSelectSource={setActiveSource}
            dateFilter={dateFilter}
            onDateFilterChange={setDateFilter}
            severity={severity}
            onSeverityChange={setSeverity}
            kevOnly={kevOnly}
            onKevOnlyChange={setKevOnly}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onReset={handleResetFilters}
            totalCount={vulns.length}
          />

          {/* Top Pagination Bar */}
          {!loading && vulns.length > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                margin: '0 0 16px 0',
                padding: '8px 14px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '6px'
              }}
            >
              <div className="font-mono" style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                SHOWING{' '}
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {(currentPage - 1) * PAGE_SIZE + 1}
                </span>
                -
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {Math.min(currentPage * PAGE_SIZE, vulns.length)}
                </span>{' '}
                OF{' '}
                <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
                  {vulns.length}
                </span>{' '}
                VULNERABILITIES
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
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
                  type="button"
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

          {/* Vulnerability Cards Grid */}
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
              QUERYING AUTHORITATIVE VULNERABILITY DATABASES...
            </div>
          ) : vulns.length === 0 ? (
            <div
              className="card"
              style={{
                padding: '48px 24px',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.86rem'
              }}
            >
              <div>No vulnerabilities matched your current filter criteria.</div>
              <button
                type="button"
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
              {displayedVulns.map((item) => (
                <VulnCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedVuln}
                />
              ))}
            </div>
          )}

          {/* Bottom Full Pagination */}
          {!loading && vulns.length > 0 && totalPages > 1 && (
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
              <button
                type="button"
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

              {getPageNumbers(currentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
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
                    type="button"
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
                type="button"
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

          {/* Detail Modal */}
          <VulnDetailModal
            item={selectedVuln}
            onClose={() => setSelectedVuln(null)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
