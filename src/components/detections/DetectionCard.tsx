'use client';

import React from 'react';
import { PublicDetector } from '../../types/detector';
import { Badge } from '../ui/Badge';

interface DetectionCardProps {
  detector: PublicDetector;
  onSelect: (detector: PublicDetector) => void;
}

export const DetectionCard: React.FC<DetectionCardProps> = ({ detector, onSelect }) => {
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
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onClick={() => onSelect(detector)}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-bright)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      <div>
        {/* Header: Library + Severity + Platform + Version */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
            flexWrap: 'wrap',
            gap: '6px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <Badge libraryName={detector.library}>{detector.library.toUpperCase()}</Badge>
            <Badge variant={detector.severity}>{detector.severity}</Badge>
            <Badge variant="platform">{detector.platform}</Badge>
          </div>
          <span
            className="font-mono"
            style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
          >
            v{detector.version}
          </span>
        </div>

        {/* Rule Title */}
        <h3
          style={{
            fontSize: '0.98rem',
            lineHeight: 1.35,
            fontWeight: 700,
            color: 'var(--text-heading)',
            marginBottom: '8px'
          }}
        >
          {detector.name}
        </h3>

        {/* Description snippet */}
        <p
          style={{
            fontSize: '0.82rem',
            lineHeight: 1.5,
            color: 'var(--text)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {detector.description}
        </p>
      </div>

      <div>
        {/* Source & Confidence */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            marginBottom: '10px'
          }}
        >
          <span className="font-mono" style={{ color: 'var(--text-muted)' }}>
            SOURCE: <span style={{ color: 'var(--text-bright)' }}>{detector.log_source}</span>
          </span>
          <span className="font-mono" style={{ color: 'var(--text-muted)' }}>
            CONF: <span style={{ color: 'var(--success)' }}>{detector.confidence}%</span>
          </span>
        </div>

        {/* Technique tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border)',
            paddingTop: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
            <span
              className="font-mono"
              style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginRight: '2px' }}
            >
              {detector.threat.tactic}:
            </span>
            {detector.threat.techniques.map((tech) => (
              <Badge key={tech} variant="technique">
                {tech}
              </Badge>
            ))}
          </div>

          <span
            className="font-mono"
            style={{
              fontSize: '0.7rem',
              color: 'var(--primary)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              paddingLeft: '8px'
            }}
          >
            INSPECT &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
