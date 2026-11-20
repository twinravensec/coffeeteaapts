'use client';

import React from 'react';
import { NewsDateFilter } from '../../services/api';

interface VulnFilterBarProps {
  sources: string[];
  activeSource: string;
  onSelectSource: (src: string) => void;
  dateFilter: NewsDateFilter;
  onDateFilterChange: (d: NewsDateFilter) => void;
  severity: string;
  onSeverityChange: (sev: string) => void;
  kevOnly: boolean;
  onKevOnlyChange: (kev: boolean) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onReset: () => void;
  totalCount: number;
}

const DATE_OPTIONS: { id: NewsDateFilter; label: string }[] = [
  { id: 'today', label: 'Today' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: 'all', label: 'All' }
];

const SEVERITIES = [
  { id: 'all', label: 'All Severities' },
  { id: 'CRITICAL', label: 'Critical' },
  { id: 'HIGH', label: 'High' },
  { id: 'MEDIUM', label: 'Medium' },
  { id: 'LOW', label: 'Low' }
];

export const VulnFilterBar: React.FC<VulnFilterBarProps> = ({
  sources,
  activeSource,
  onSelectSource,
  dateFilter,
  onDateFilterChange,
  severity,
  onSeverityChange,
  kevOnly,
  onKevOnlyChange,
  searchQuery,
  onSearchChange,
  onReset,
  totalCount
}) => {
  const hasActiveFilter =
    activeSource !== 'All' ||
    dateFilter !== 'all' ||
    severity !== 'all' ||
    kevOnly ||
    searchQuery.trim() !== '';

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', flex: 1 }}>
        {/* Date Added Selection */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            ADDED:
          </span>
          <div
            role="group"
            aria-label="Filter vulnerabilities by date added"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--surface-deep)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '2px',
              gap: '2px'
            }}
          >
            {DATE_OPTIONS.map((opt) => {
              const isActive = dateFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onDateFilterChange(opt.id)}
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: isActive ? 700 : 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? '#060a0f' : 'var(--text-muted)',
                    letterSpacing: '0.03em'
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Authoritative Source Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <label
            htmlFor="vuln-source-filter"
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            DB:
          </label>
          <select
            id="vuln-source-filter"
            value={activeSource}
            onChange={(e) => onSelectSource(e.target.value)}
            style={{
              fontSize: '0.76rem',
              padding: '6px 10px',
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
                {src === 'All' ? 'All Databases (3)' : src}
              </option>
            ))}
          </select>
        </div>

        {/* Severity Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <label
            htmlFor="vuln-severity-filter"
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            SEVERITY:
          </label>
          <select
            id="vuln-severity-filter"
            value={severity}
            onChange={(e) => onSeverityChange(e.target.value)}
            style={{
              fontSize: '0.76rem',
              padding: '6px 10px',
              fontWeight: 600,
              background: 'var(--surface-raised)',
              color: 'var(--text-heading)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {SEVERITIES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* CISA KEV Quick Toggle */}
        <button
          type="button"
          onClick={() => onKevOnlyChange(!kevOnly)}
          className="font-mono"
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '6px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            letterSpacing: '0.04em',
            background: kevOnly ? 'rgba(213, 94, 0, 0.22)' : 'var(--surface-raised)',
            color: kevOnly ? 'var(--danger)' : 'var(--text-muted)',
            border: kevOnly ? '1px solid var(--danger)' : '1px solid var(--border)'
          }}
        >
          {kevOnly ? '✓ CISA KEV ONLY' : 'CISA KEV ONLY'}
        </button>

        {/* Search Input */}
        <input
          type="search"
          placeholder="Search CVE, GHSA, package, vendor, or CWE..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            minWidth: '210px',
            maxWidth: '320px',
            flex: '1 1 210px',
            fontSize: '0.78rem',
            padding: '6px 12px',
            background: 'var(--surface-raised)',
            color: 'var(--text-bright)',
            border: '1px solid var(--border)',
            borderRadius: '4px'
          }}
        />
      </div>

      {/* Counter & Reset */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {hasActiveFilter && (
          <button
            type="button"
            onClick={onReset}
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              padding: '4px 9px',
              borderRadius: '4px',
              background: 'transparent',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            RESET
          </button>
        )}
        <span
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap'
          }}
        >
          {totalCount} {totalCount === 1 ? 'record' : 'records'}
        </span>
      </div>
    </div>
  );
};
