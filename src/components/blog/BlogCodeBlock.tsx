'use client';

import React, { useState } from 'react';
import { Badge } from '../ui/Badge';

interface BlogCodeBlockProps {
  language?: string;
  code: string;
}

interface LanguageMeta {
  label: string;
  libraryKey?: string;
  isDetection: boolean;
}

function resolveLanguageMeta(rawLang?: string): LanguageMeta {
  const lang = (rawLang || '').trim().toLowerCase().replace(/^language-/, '');

  switch (lang) {
    case 'sigma':
      return { label: 'SIGMA YAML', libraryKey: 'sigma', isDetection: true };
    case 'spl':
    case 'splunk':
      return { label: 'SPLUNK SPL', libraryKey: 'splunk', isDetection: true };
    case 'eql':
    case 'elastic':
      return { label: 'ELASTIC EQL', libraryKey: 'elastic', isDetection: true };
    case 'esql':
    case 'es|ql':
      return { label: 'ELASTIC ES|QL', libraryKey: 'elastic', isDetection: true };
    case 'yaral':
    case 'yara-l':
    case 'chronicle':
      return { label: 'YARA-L 2.0', libraryKey: 'chronicle', isDetection: true };
    case 'fql':
    case 'crowdstrike':
    case 'falcon':
      return { label: 'CROWDSTRIKE FQL', libraryKey: 'crowdstrike', isDetection: true };
    case 'powershell':
    case 'pwsh':
    case 'ps1':
      return { label: 'POWERSHELL', isDetection: false };
    case 'bash':
    case 'sh':
    case 'shell':
    case 'zsh':
      return { label: 'SHELL / BASH', isDetection: false };
    case 'python':
    case 'py':
      return { label: 'PYTHON', isDetection: false };
    case 'yaml':
    case 'yml':
      return { label: 'YAML', isDetection: false };
    case 'json':
      return { label: 'JSON', isDetection: false };
    case 'sql':
      return { label: 'SQL', isDetection: false };
    case 'kql':
      return { label: 'KUSTO KQL', isDetection: true };
    case '':
      return { label: 'CODE SNIPPET', isDetection: false };
    default:
      return { label: lang.toUpperCase(), isDetection: false };
  }
}

export const BlogCodeBlock: React.FC<BlogCodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const cleanCode = code.replace(/\n$/, '');
  const meta = resolveLanguageMeta(language);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-deep)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '18px 0',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Tactical Language & Copy Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          padding: '8px 14px',
          backgroundColor: 'var(--surface-raised)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {meta.libraryKey ? (
            <Badge libraryName={meta.libraryKey}>{meta.label}</Badge>
          ) : (
            <Badge variant="platform">{meta.label}</Badge>
          )}
          {meta.isDetection && (
            <span
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em'
              }}
            >
              DETECTION QUERY
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="font-mono"
          style={{
            padding: '4px 10px',
            borderRadius: '4px',
            backgroundColor: copied ? 'var(--success)' : 'var(--surface)',
            border: `1px solid ${copied ? 'var(--success)' : 'var(--border-bright)'}`,
            color: copied ? '#060a0f' : 'var(--text-bright)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer'
          }}
        >
          {copied ? 'COPIED TO CLIPBOARD!' : meta.isDetection ? 'COPY LOGIC' : 'COPY CODE'}
        </button>
      </div>

      {/* Scrollable Code Body */}
      <pre
        className="font-mono"
        style={{
          margin: 0,
          padding: '16px 18px',
          fontSize: '12.5px',
          lineHeight: 1.6,
          color: 'var(--text-bright)',
          backgroundColor: 'var(--surface-deep)',
          overflowX: 'auto'
        }}
      >
        <code>{cleanCode}</code>
      </pre>
    </div>
  );
};
