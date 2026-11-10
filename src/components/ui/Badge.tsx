import React from 'react';

export type BadgeVariant =
  | 'critical'
  | 'high'
  | 'medium'
  | 'low'
  | 'info'
  | 'cve'
  | 'technique'
  | 'platform'
  | 'source'
  | 'neutral'
  | 'library';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  sourceName?: string;
  libraryName?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  sourceName,
  libraryName
}) => {
  const getStyles = () => {
    if (libraryName) {
      const l = libraryName.toLowerCase();
      if (l.includes('sigma')) {
        return { bg: 'rgba(0, 158, 115, 0.14)', border: 'rgba(0, 158, 115, 0.45)', text: 'var(--success)' };
      }
      if (l.includes('splunk')) {
        return { bg: 'rgba(230, 159, 0, 0.14)', border: 'rgba(230, 159, 0, 0.45)', text: 'var(--warning)' };
      }
      if (l.includes('elastic')) {
        return { bg: 'rgba(240, 228, 66, 0.14)', border: 'rgba(240, 228, 66, 0.45)', text: '#f0e442' };
      }
      if (l.includes('chronicle') || l.includes('yara')) {
        return { bg: 'rgba(86, 180, 233, 0.14)', border: 'rgba(86, 180, 233, 0.45)', text: 'var(--primary)' };
      }
      if (l.includes('crowdstrike') || l.includes('falcon')) {
        return { bg: 'rgba(213, 94, 0, 0.14)', border: 'rgba(213, 94, 0, 0.45)', text: 'var(--danger)' };
      }
    }

    if (sourceName) {
      const s = sourceName.toLowerCase();
      if (s.includes('hacker')) {
        return { bg: 'rgba(230, 159, 0, 0.14)', border: 'rgba(230, 159, 0, 0.40)', text: 'var(--warning)' };
      }
      if (s.includes('bleeping')) {
        return { bg: 'rgba(86, 180, 233, 0.14)', border: 'rgba(86, 180, 233, 0.40)', text: 'var(--primary)' };
      }
      if (s.includes('cisa')) {
        return { bg: 'rgba(213, 94, 0, 0.14)', border: 'rgba(213, 94, 0, 0.40)', text: 'var(--danger)' };
      }
      if (s.includes('sans')) {
        return { bg: 'rgba(0, 114, 178, 0.14)', border: 'rgba(0, 114, 178, 0.40)', text: '#56b4e9' };
      }
    }

    switch (variant) {
      case 'critical':
        return { bg: 'rgba(213, 94, 0, 0.15)', border: 'rgba(213, 94, 0, 0.45)', text: 'var(--danger)' };
      case 'high':
        return { bg: 'rgba(230, 159, 0, 0.15)', border: 'rgba(230, 159, 0, 0.45)', text: 'var(--warning)' };
      case 'medium':
        return { bg: 'rgba(230, 159, 0, 0.12)', border: 'rgba(230, 159, 0, 0.35)', text: 'var(--warning)' };
      case 'low':
        return { bg: 'rgba(86, 180, 233, 0.15)', border: 'rgba(86, 180, 233, 0.45)', text: 'var(--primary)' };
      case 'info':
        return { bg: 'rgba(86, 180, 233, 0.12)', border: 'rgba(86, 180, 233, 0.35)', text: 'var(--primary)' };
      case 'cve':
        return { bg: 'rgba(213, 94, 0, 0.14)', border: 'rgba(213, 94, 0, 0.40)', text: 'var(--danger)' };
      case 'technique':
        return { bg: 'rgba(0, 158, 115, 0.14)', border: 'rgba(0, 158, 115, 0.40)', text: 'var(--success)' };
      case 'platform':
        return { bg: 'var(--surface-raised)', border: 'var(--border)', text: 'var(--text-bright)' };
      case 'library':
        return { bg: 'rgba(86, 180, 233, 0.15)', border: 'var(--border-bright)', text: 'var(--primary)' };
      case 'neutral':
      default:
        return { bg: 'var(--surface-raised)', border: 'var(--border)', text: 'var(--text-muted)' };
    }
  };

  const style = getStyles();

  return (
    <span
      className={`font-mono ${className}`}
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        color: style.text,
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        padding: '2px 7px',
        borderRadius: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1.4,
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </span>
  );
};
