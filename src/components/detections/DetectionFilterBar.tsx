'use client';

import React from 'react';

interface DetectionFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  library: string;
  onLibraryChange: (lib: string) => void;
  severity: string;
  onSeverityChange: (s: string) => void;
  platform: string;
  onPlatformChange: (p: string) => void;
  tactic: string;
  onTacticChange: (t: string) => void;
  onReset?: () => void;
  totalCount: number;
}

const LIBRARIES = [
  { id: 'none', label: 'Select Library...' },
  { id: 'all', label: 'All Libraries' },
  { id: 'Sigma', label: 'Sigma' },
  { id: 'Splunk', label: 'Splunk (SPL)' },
  { id: 'Elastic', label: 'Elastic (EQL)' },
  { id: 'Google Chronicle (YARA-L)', label: 'Google Chronicle (YARA-L)' },
  { id: 'CrowdStrike', label: 'CrowdStrike' }
];

const SEVERITIES = ['all', 'critical', 'high', 'medium', 'low'];
const PLATFORMS = ['all', 'Windows', 'Cloud', 'Identity', 'Linux', 'Network', 'Kubernetes'];
const TACTICS = [
  'all',
  'Initial Access',
  'Execution',
  'Persistence',
  'Privilege Escalation',
  'Defense Evasion',
  'Credential Access',
  'Discovery',
  'Lateral Movement',
  'Collection',
  'Command and Control',
  'Exfiltration',
  'Impact'
];

export const DetectionFilterBar: React.FC<DetectionFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  library,
  onLibraryChange,
  severity,
  onSeverityChange,
  platform,
  onPlatformChange,
  tactic,
  onTacticChange,
  onReset,
  totalCount
}) => {
  const hasActiveFilters =
    (library !== 'none' && library !== 'all') ||
    severity !== 'all' ||
    platform !== 'all' ||
    tactic !== 'all' ||
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
      {/* Search Input */}
      <div style={{ flex: '1 1 240px' }}>
        <input
          type="search"
          placeholder="Filter rules by keyword, author, technique ID (e.g. T1558)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: '100%',
            fontSize: '0.78rem',
            padding: '6px 10px',
            background: 'var(--surface-raised)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            color: 'var(--text-bright)'
          }}
        />
      </div>

      {/* Select Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {/* Detection Library Selector */}
        <select
          value={library}
          onChange={(e) => onLibraryChange(e.target.value)}
          style={{
            minWidth: '150px',
            fontSize: '0.78rem',
            padding: '6px 10px',
            background: 'var(--surface-raised)',
            borderColor: library !== 'none' && library !== 'all' ? 'var(--primary)' : 'var(--border)',
            color: library !== 'none' ? 'var(--text-bright)' : 'var(--text-muted)',
            fontWeight: library !== 'none' && library !== 'all' ? 700 : 500,
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          title="Filter by Detection Library / Engine"
        >
          {LIBRARIES.map((lib) => (
            <option key={lib.id} value={lib.id}>
              {lib.label}
            </option>
          ))}
        </select>

        {/* Severity Selector */}
        <select
          value={severity}
          onChange={(e) => onSeverityChange(e.target.value)}
          style={{
            minWidth: '120px',
            fontSize: '0.78rem',
            padding: '6px 10px',
            background: 'var(--surface-raised)',
            borderColor: severity !== 'all' ? 'var(--primary)' : 'var(--border)',
            color: severity !== 'all' ? 'var(--text-bright)' : 'var(--text-muted)',
            fontWeight: severity !== 'all' ? 700 : 500,
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Severities</option>
          {SEVERITIES.filter((s) => s !== 'all').map((s) => (
            <option key={s} value={s}>
              {s.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Platform Selector */}
        <select
          value={platform}
          onChange={(e) => onPlatformChange(e.target.value)}
          style={{
            minWidth: '120px',
            fontSize: '0.78rem',
            padding: '6px 10px',
            background: 'var(--surface-raised)',
            borderColor: platform !== 'all' ? 'var(--primary)' : 'var(--border)',
            color: platform !== 'all' ? 'var(--text-bright)' : 'var(--text-muted)',
            fontWeight: platform !== 'all' ? 700 : 500,
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Platforms</option>
          {PLATFORMS.filter((p) => p !== 'all').map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Tactic Selector */}
        <select
          value={tactic}
          onChange={(e) => onTacticChange(e.target.value)}
          style={{
            minWidth: '140px',
            fontSize: '0.78rem',
            padding: '6px 10px',
            background: 'var(--surface-raised)',
            borderColor: tactic !== 'all' ? 'var(--primary)' : 'var(--border)',
            color: tactic !== 'all' ? 'var(--text-bright)' : 'var(--text-muted)',
            fontWeight: tactic !== 'all' ? 700 : 500,
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Tactics</option>
          {TACTICS.filter((t) => t !== 'all').map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Reset Filters Button */}
        {hasActiveFilters && onReset && (
          <button
            onClick={onReset}
            style={{
              padding: '6px 10px',
              borderRadius: '4px',
              fontSize: '0.72rem',
              fontWeight: 600,
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--text-bright)';
              e.currentTarget.style.borderColor = 'var(--border-bright)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
            title="Reset active filters"
          >
            Reset
          </button>
        )}

        <span
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            paddingLeft: '4px',
            whiteSpace: 'nowrap'
          }}
        >
          {totalCount} {totalCount === 1 ? 'rule' : 'rules'}
        </span>
      </div>
    </div>
  );
};
