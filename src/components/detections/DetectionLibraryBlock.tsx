'use client';

import React, { useState, useEffect } from 'react';
import { PublicDetector } from '../../types/detector';
import { getDetectors } from '../../services/api';
import { DetectionCard } from './DetectionCard';
import { DetectionFilterBar } from './DetectionFilterBar';
import { DetectionDetailModal } from './DetectionDetailModal';
import { Badge } from '../ui/Badge';

const TRACKED_LIBRARIES = [
  { id: 'Sigma', name: 'Sigma (YAML)', badgeKey: 'sigma' },
  { id: 'Splunk', name: 'Splunk (SPL)', badgeKey: 'splunk' },
  { id: 'Elastic', name: 'Elastic (EQL & ES|QL)', badgeKey: 'elastic' },
  { id: 'Google Chronicle (YARA-L)', name: 'Google Chronicle (YARA-L 2.0)', badgeKey: 'chronicle' },
  { id: 'CrowdStrike', name: 'CrowdStrike Falcon (FQL)', badgeKey: 'crowdstrike' }
];

const PAGE_SIZE = 10;

export const DetectionLibraryBlock: React.FC = () => {
  const [detectors, setDetectors] = useState<PublicDetector[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [library, setLibrary] = useState('none');
  const [severity, setSeverity] = useState('all');
  const [platform, setPlatform] = useState('all');
  const [tactic, setTactic] = useState('all');
  const [selectedDetector, setSelectedDetector] = useState<PublicDetector | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const isInitialEmptyState =
    library === 'none' &&
    severity === 'all' &&
    platform === 'all' &&
    tactic === 'all' &&
    !searchQuery.trim();

  useEffect(() => {
    let isMounted = true;
    setCurrentPage(1);

    if (isInitialEmptyState) {
      setDetectors([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    getDetectors({ searchQuery, library, severity, platform, tactic }).then((items) => {
      if (isMounted) {
        setDetectors(items);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [searchQuery, library, severity, platform, tactic, isInitialEmptyState]);

  const handleResetFilters = () => {
    setLibrary('none');
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

  return (
    <section id="detections" style={{ padding: '36px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Block Header */}
        <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
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
                DETECTION-AS-CODE REGISTRY
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
                SHOWING 10 RULES
              </span>
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
              Public Detection Rule Library
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px', marginBottom: '8px' }}>
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
                    onClick={() => setLibrary(isActive ? 'none' : lib.id)}
                    title={`Filter by ${lib.name}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      outline: 'none',
                      opacity: library === 'none' || library === 'all' || isActive ? 1 : 0.45,
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

          {/* Quick link to full catalog */}
          <a
            href="/detections"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              background: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              color: 'var(--text-bright)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-bright)';
            }}
          >
            <span>Open Full Catalog</span>
            <span>&rarr;</span>
          </a>
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

        {/* Detections Grid */}
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
            QUERYING DETECTION REGISTRY...
          </div>
        ) : isInitialEmptyState ? (
          <div
            className="card"
            style={{
              padding: '52px 24px',
              textAlign: 'center',
              background: 'var(--surface)',
              border: '1px dashed var(--border)',
              borderRadius: '8px',
              color: 'var(--text-muted)'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '0.98rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: 'var(--text-bright)',
                marginBottom: '8px',
                textTransform: 'uppercase'
              }}
            >
              SELECT A DETECTION LIBRARY OR FILTER TO EXPLORE
            </div>
            <div
              style={{
                fontSize: '0.82rem',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.5,
                color: 'var(--text-muted)'
              }}
            >
              Choose a library (Sigma, Splunk, Elastic, Google Chronicle, CrowdStrike), select a severity, platform, or tactic, or enter a search term above to explore detection rules.
            </div>
          </div>
        ) : detectors.length === 0 ? (
          <div
            className="card"
            style={{
              padding: '36px 20px',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.85rem'
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
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '16px'
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

            {/* Pagination & Catalog Banner */}
            <div
              style={{
                marginTop: '24px',
                padding: '14px 18px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div className="font-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Showing <strong style={{ color: 'var(--text-bright)' }}>{(currentPage - 1) * PAGE_SIZE + 1} - {Math.min(currentPage * PAGE_SIZE, detectors.length)}</strong> of <strong style={{ color: 'var(--text-bright)' }}>{detectors.length}</strong> rules
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  style={{
                    padding: '5px 12px',
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

                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-bright)', padding: '0 4px' }}>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  style={{
                    padding: '5px 12px',
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

                <a
                  href={`/detections?library=${encodeURIComponent(library !== 'none' ? library : 'all')}${severity !== 'all' ? `&severity=${encodeURIComponent(severity)}` : ''}${platform !== 'all' ? `&platform=${encodeURIComponent(platform)}` : ''}${tactic !== 'all' ? `&tactic=${encodeURIComponent(tactic)}` : ''}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`}
                  style={{
                    marginLeft: '8px',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: 'var(--primary)',
                    color: '#080b12',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Open in Full Catalog Page</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        <DetectionDetailModal
          detector={selectedDetector}
          onClose={() => setSelectedDetector(null)}
        />
      </div>
    </section>
  );
};
