'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/shell/Header';
import { Footer } from '../../components/shell/Footer';
import { PublicDetector } from '../../types/detector';
import { getDetectors } from '../../services/api';
import { DetectionCard } from '../../components/detections/DetectionCard';
import { DetectionFilterBar } from '../../components/detections/DetectionFilterBar';
import { DetectionDetailModal } from '../../components/detections/DetectionDetailModal';
import { Badge } from '../../components/ui/Badge';

const TRACKED_LIBRARIES = [
  { id: 'Sigma', name: 'Sigma (YAML)', badgeKey: 'sigma' },
  { id: 'Splunk', name: 'Splunk (SPL)', badgeKey: 'splunk' },
  { id: 'Elastic', name: 'Elastic (EQL & ES|QL)', badgeKey: 'elastic' },
  { id: 'Google Chronicle (YARA-L)', name: 'Google Chronicle (YARA-L 2.0)', badgeKey: 'chronicle' },
  { id: 'CrowdStrike', name: 'CrowdStrike Falcon (FQL)', badgeKey: 'crowdstrike' }
];

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

export default function DetectionsCatalogPage() {
  const [detectors, setDetectors] = useState<PublicDetector[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [library, setLibrary] = useState('all');
  const [severity, setSeverity] = useState('all');
  const [platform, setPlatform] = useState('all');
  const [tactic, setTactic] = useState('all');
  const [selectedDetector, setSelectedDetector] = useState<PublicDetector | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize from URL search query on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLib = params.get('library');
      const urlQuery = params.get('q');
      const urlSev = params.get('severity');
      const urlPlat = params.get('platform');
      const urlTac = params.get('tactic');
      if (urlLib) setLibrary(urlLib);
      if (urlQuery) setSearchQuery(urlQuery);
      if (urlSev) setSeverity(urlSev);
      if (urlPlat) setPlatform(urlPlat);
      if (urlTac) setTactic(urlTac);
    }
  }, []);

  // Fetch detections when any filter criteria changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setCurrentPage(1);

    getDetectors({ searchQuery, library, severity, platform, tactic }).then((items) => {
      if (isMounted) {
        setDetectors(items);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [searchQuery, library, severity, platform, tactic]);

  const handleResetFilters = () => {
    setLibrary('all');
    setSeverity('all');
    setPlatform('all');
    setTactic('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(detectors.length / PAGE_SIZE));
  const displayedDetectors = detectors.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 180, behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

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
            <a
              href="/"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-bright)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Home
            </a>
            <span>/</span>
            <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>
              Detection Catalog
            </span>
          </nav>

          {/* Page Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
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
                COMPLETE DETECTION REGISTRY
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
                10 RULES PER PAGE
              </span>
            </div>

            <h1
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                letterSpacing: '-0.02em',
                marginBottom: '6px'
              }}
            >
              Detection Rules Catalog
            </h1>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.5, marginBottom: '8px' }}>
              Community detections against the following libraries:
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}
            >
              {TRACKED_LIBRARIES.map((lib) => {
                const isActive = library.toLowerCase() === lib.id.toLowerCase();
                return (
                  <button
                    key={lib.id}
                    type="button"
                    onClick={() => setLibrary(isActive ? 'all' : lib.id)}
                    title={`Filter by ${lib.name}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      outline: 'none',
                      opacity: library === 'all' || isActive ? 1 : 0.45,
                      boxShadow: isActive ? '0 0 0 2px var(--primary)' : 'none',
                      borderRadius: '4px',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Badge libraryName={lib.badgeKey}>{lib.name}</Badge>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Toolbar */}
          <DetectionFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            library={library}
            onLibraryChange={setLibrary}
            severity={severity}
            onSeverityChange={setSeverity}
            platform={platform}
            onPlatformChange={setPlatform}
            tactic={tactic}
            onTacticChange={setTactic}
            onReset={handleResetFilters}
            totalCount={detectors.length}
          />

          {/* Top Pagination Summary & Quick Jump */}
          {!loading && detectors.length > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px',
                padding: '8px 14px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '6px'
              }}
            >
              <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Showing{' '}
                <strong style={{ color: 'var(--text-bright)' }}>
                  {(currentPage - 1) * PAGE_SIZE + 1} -{' '}
                  {Math.min(currentPage * PAGE_SIZE, detectors.length)}
                </strong>{' '}
                of <strong style={{ color: 'var(--text-bright)' }}>{detectors.length}</strong> rules
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

          {/* Detections Grid */}
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
              QUERYING DETECTION REGISTRY...
            </div>
          ) : detectors.length === 0 ? (
            <div
              className="card"
              style={{
                padding: '48px 24px',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.86rem'
              }}
            >
              <div>No detection rules matched your search and filter criteria.</div>
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
              {displayedDetectors.map((detector) => (
                <DetectionCard
                  key={detector.id}
                  detector={detector}
                  onSelect={setSelectedDetector}
                />
              ))}
            </div>
          )}

          {/* Bottom Full Pagination Controls */}
          {!loading && detectors.length > 0 && totalPages > 1 && (
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
                      border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
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

          {/* Modal */}
          <DetectionDetailModal
            detector={selectedDetector}
            onClose={() => setSelectedDetector(null)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
