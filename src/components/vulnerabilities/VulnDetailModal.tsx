'use client';

import React from 'react';
import Link from 'next/link';
import { VulnerabilityItem } from '../../types/vulnerability';
import { Modal } from '../ui/Modal';
import { Badge, BadgeVariant } from '../ui/Badge';

interface VulnDetailModalProps {
  item: VulnerabilityItem | null;
  onClose: () => void;
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

function safeHttpUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? parsed.toString() : null;
  } catch {
    return null;
  }
}

export const VulnDetailModal: React.FC<VulnDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const safePrimaryUrl = safeHttpUrl(item.url);
  const safeReferences = item.references
    .map((r) => safeHttpUrl(r))
    .filter((r): r is string => Boolean(r));

  const publishedDate = new Date(item.published_at);
  const formattedDateTime = Number.isNaN(publishedDate.getTime())
    ? item.published_at
    : publishedDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });

  const epssPct =
    item.epss_score !== null ? `${(item.epss_score * 100).toFixed(2)}%` : 'N/A';
  const epssPercentile =
    item.epss_percentile !== null
      ? `${(item.epss_percentile * 100).toFixed(1)}th percentile`
      : null;

  return (
    <Modal
      isOpen={Boolean(item)}
      onClose={onClose}
      title={item.id}
      subtitle={`Added ${formattedDateTime} (${item.relative_time})`}
      maxWidth="780px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Top Badges Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Badge variant={getSeverityVariant(item.severity)}>
            {item.severity}
            {item.cvss_score !== null ? ` • CVSS ${item.cvss_score.toFixed(1)}` : ''}
          </Badge>
          {item.cve_id && item.ghsa_id && (
            <Badge variant="neutral">{item.ghsa_id}</Badge>
          )}
          {item.sources.map((src) => (
            <Badge key={src} sourceName={src}>
              {src}
            </Badge>
          ))}
          {item.cwes.map((cwe) => (
            <Badge key={cwe} variant="neutral">
              {cwe}
            </Badge>
          ))}
        </div>

        {/* CISA KEV Active Exploitation Alert */}
        {item.is_kev && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              background: 'rgba(213, 94, 0, 0.14)',
              border: '1px solid var(--danger)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: 'var(--danger)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              CISA KNOWN EXPLOITED VULNERABILITY (KEV)
              {item.ransomware_use ? ' • KNOWN RANSOMWARE CAMPAIGN USE' : ''}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-bright)' }}>
              Confirmed active exploitation in the wild by CISA.
              {item.kev_due_date ? ` Federal BOD 22-01 remediation due date: ${item.kev_due_date}.` : ''}
            </div>
          </div>
        )}

        {/* Title & Description */}
        <div>
          <h4
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--text-heading)',
              lineHeight: 1.35,
              marginBottom: '10px'
            }}
          >
            {item.title}
          </h4>
          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: 1.65,
              color: 'var(--text)',
              margin: 0
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Telemetry & Package Metadata Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '12px'
          }}
        >
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '6px',
              background: 'var(--surface-deep)',
              border: '1px solid var(--border)'
            }}
          >
            <div
              className="font-mono"
              style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: '4px' }}
            >
              AFFECTED PACKAGE / PRODUCT
            </div>
            <div className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-bright)', fontWeight: 600 }}>
              {item.vendor_product || item.ecosystem || 'Unspecified'}
            </div>
            {item.affected_versions && (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--warning)', marginTop: '4px' }}>
                Affected: {item.affected_versions}
              </div>
            )}
            {item.patched_versions && (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--success)', marginTop: '2px' }}>
                Patched: {item.patched_versions}
              </div>
            )}
          </div>

          <div
            style={{
              padding: '12px 14px',
              borderRadius: '6px',
              background: 'var(--surface-deep)',
              border: '1px solid var(--border)'
            }}
          >
            <div
              className="font-mono"
              style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: '4px' }}
            >
              FIRST EPSS (30-DAY EXPLOIT PROBABILITY)
            </div>
            <div className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-bright)', fontWeight: 700 }}>
              {epssPct}
            </div>
            {epssPercentile && (
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {epssPercentile}
              </div>
            )}
          </div>

          {item.cvss_vector && (
            <div
              style={{
                padding: '12px 14px',
                borderRadius: '6px',
                background: 'var(--surface-deep)',
                border: '1px solid var(--border)'
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: '4px' }}
              >
                CVSS VECTOR
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--primary)',
                  wordBreak: 'break-all'
                }}
              >
                {item.cvss_vector}
              </div>
            </div>
          )}
        </div>

        {/* Authoritative References */}
        {safeReferences.length > 0 && (
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}
            >
              Authoritative References &amp; Advisories
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: 0,
                margin: 0
              }}
            >
              {safeReferences.map((ref) => (
                <li key={ref}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--primary)',
                      textDecoration: 'underline',
                      wordBreak: 'break-all'
                    }}
                  >
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            borderTop: '1px solid var(--border)',
            paddingTop: '14px'
          }}
        >
          <Link
            href={`/detections/?q=${encodeURIComponent(item.cve_id || item.vendor_product?.split(':')[1]?.trim() || item.id)}`}
            onClick={onClose}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              background: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              color: 'var(--text-bright)',
              fontSize: '0.76rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Search Related Detections &rarr;
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {item.cve_id && (
              <a
                href={`https://nvd.nist.gov/vuln/detail/${encodeURIComponent(item.cve_id)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 14px',
                  borderRadius: '6px',
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border-bright)',
                  color: 'var(--text-bright)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                NIST NVD Record &#8599;
              </a>
            )}
            {safePrimaryUrl && (
              <a
                href={safePrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  background: 'var(--primary)',
                  color: '#060a0f',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                Open Source Record &#8599;
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
