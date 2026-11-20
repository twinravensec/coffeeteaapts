'use client';

import React from 'react';
import { VulnerabilityItem } from '../../types/vulnerability';
import { Badge, BadgeVariant } from '../ui/Badge';

interface VulnCardProps {
  item: VulnerabilityItem;
  onSelect: (item: VulnerabilityItem) => void;
}

function getSeverityVariant(sev: VulnerabilityItem['severity']): BadgeVariant {
  switch (sev) {
    case 'CRITICAL':
      return 'critical';
    case 'HIGH':
      return 'high';
    case 'MEDIUM':
      return 'medium';
    case 'LOW':
      return 'low';
    default:
      return 'neutral';
  }
}

export function formatAddedTimestamp(isoStr: string): string {
  const d = new Date(isoStr);
  if (Number.isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export const VulnCard: React.FC<VulnCardProps> = ({ item, onSelect }) => {
  const sevVariant = getSeverityVariant(item.severity);
  const epssPct =
    item.epss_score !== null ? `${(item.epss_score * 100).toFixed(1)}%` : null;

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
        border: item.is_kev
          ? '1px solid var(--danger)'
          : '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onClick={() => onSelect(item)}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = item.is_kev
          ? 'var(--danger)'
          : 'var(--border-bright)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = item.is_kev
          ? 'var(--danger)'
          : 'var(--border)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      <div>
        {/* Top Row: ID + Severity + Added Timestamp */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <Badge variant="cve">{item.id}</Badge>
            <Badge variant={sevVariant}>
              {item.severity}
              {item.cvss_score !== null ? ` ${item.cvss_score.toFixed(1)}` : ''}
            </Badge>
            {item.is_kev && <Badge variant="critical">KEV EXPLOITED</Badge>}
          </div>

          <span
            className="font-mono"
            title={`Published / Added: ${item.published_at}`}
            style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap'
            }}
          >
            Added {formatAddedTimestamp(item.published_at)} &bull; {item.relative_time}
          </span>
        </div>

        {/* Ecosystem / Package / Vendor Tag */}
        {item.vendor_product && (
          <div
            className="font-mono"
            style={{
              fontSize: '0.7rem',
              color: 'var(--primary)',
              fontWeight: 600,
              marginBottom: '6px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {item.vendor_product}
            {item.patched_versions ? (
              <span style={{ color: 'var(--success)', marginLeft: '8px' }}>
                &bull; Fixed in {item.patched_versions}
              </span>
            ) : null}
          </div>
        )}

        {/* Title */}
        <h3
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.35,
            fontWeight: 700,
            color: 'var(--text-heading)',
            marginBottom: '8px'
          }}
        >
          {item.title}
        </h3>

        {/* Description Snippet */}
        <p
          style={{
            fontSize: '0.81rem',
            lineHeight: 1.5,
            color: 'var(--text)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Footer: Sources, EPSS, CWEs & Details CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border)',
          paddingTop: '10px',
          marginTop: 'auto',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
          {item.sources.map((src) => (
            <Badge key={src} sourceName={src}>
              {src === 'GitHub Advisory (GHSA)' ? 'GHSA / OSV' : src}
            </Badge>
          ))}
          {epssPct && (
            <Badge variant={item.epss_score && item.epss_score >= 0.1 ? 'high' : 'neutral'}>
              EPSS {epssPct}
            </Badge>
          )}
          {item.cwes.slice(0, 2).map((cwe) => (
            <Badge key={cwe} variant="neutral">
              {cwe}
            </Badge>
          ))}
        </div>

        <span
          className="font-mono"
          style={{
            fontSize: '0.7rem',
            color: 'var(--primary)',
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}
        >
          DETAILS &rarr;
        </span>
      </div>
    </div>
  );
};
