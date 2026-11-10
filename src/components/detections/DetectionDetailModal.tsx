'use client';

import React, { useState } from 'react';
import { PublicDetector } from '../../types/detector';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

interface DetectionDetailModalProps {
  detector: PublicDetector | null;
  onClose: () => void;
}

export const DetectionDetailModal: React.FC<DetectionDetailModalProps> = ({
  detector,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'logic' | 'raw'>('logic');

  if (!detector) return null;

  const handleCopy = () => {
    const textToCopy = activeTab === 'logic' ? detector.logic.query : detector.raw_content;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageLabel = () => {
    switch (detector.logic.language.toLowerCase()) {
      case 'sigma':
        return 'SIGMA YAML';
      case 'spl':
        return 'SPLUNK SPL';
      case 'eql':
        return 'ELASTIC EQL';
      case 'yara-l':
        return 'YARA-L 2.0';
      case 'fql':
        return 'CROWDSTRIKE FQL';
      default:
        return detector.logic.language.toUpperCase();
    }
  };

  return (
    <Modal
      isOpen={!!detector}
      onClose={onClose}
      title={detector.name}
      subtitle={`ID: ${detector.id} • Version ${detector.version} • Author: ${detector.author}`}
      maxWidth="860px"
    >
      <div>
        {/* Badges bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '18px'
          }}
        >
          <Badge libraryName={detector.library}>{detector.library.toUpperCase()}</Badge>
          <Badge variant={detector.severity}>{detector.severity}</Badge>
          <Badge variant="platform">{detector.platform}</Badge>
          <Badge variant="neutral">STATUS: {detector.status}</Badge>
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '4px' }}
          >
            CONFIDENCE: {detector.confidence}%
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-bright)',
            marginBottom: '22px'
          }}
        >
          {detector.description}
        </div>

        {/* Metadata Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            backgroundColor: 'var(--surface-raised)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px'
          }}
        >
          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              LIBRARY &amp; ENGINE
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-bright)', marginTop: '2px' }}>
              {detector.library}
            </div>
            {detector.library_repo_url && (
              <a
                href={detector.library_repo_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '11px', color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginTop: '3px' }}
              >
                Upstream Repository &rarr;
              </a>
            )}
          </div>

          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              LOG SOURCE
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-bright)', marginTop: '2px' }}>
              {detector.log_source}
            </div>
          </div>

          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              TACTIC
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-bright)', marginTop: '2px' }}>
              {detector.threat.tactic}
            </div>
          </div>

          <div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              MITRE TECHNIQUES
            </div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
              {detector.threat.techniques.map((tech) => (
                <Badge key={tech} variant="technique">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Code View Header & Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => setActiveTab('logic')}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'JetBrains Mono, monospace',
                backgroundColor: activeTab === 'logic' ? 'var(--surface-raised)' : 'transparent',
                color: activeTab === 'logic' ? 'var(--primary)' : 'var(--text-muted)',
                border: `1px solid ${activeTab === 'logic' ? 'var(--border-bright)' : 'transparent'}`
              }}
            >
              {getLanguageLabel()}
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'JetBrains Mono, monospace',
                backgroundColor: activeTab === 'raw' ? 'var(--surface-raised)' : 'transparent',
                color: activeTab === 'raw' ? 'var(--primary)' : 'var(--text-muted)',
                border: `1px solid ${activeTab === 'raw' ? 'var(--border-bright)' : 'transparent'}`
              }}
            >
              RAW {detector.raw_format ? detector.raw_format.toUpperCase() : 'MANIFEST'}
            </button>
          </div>

          <button
            onClick={handleCopy}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              backgroundColor: copied ? 'var(--accent-emerald)' : 'var(--surface-raised)',
              border: '1px solid var(--border-bright)',
              color: copied ? '#080b12' : 'var(--text-bright)',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            {copied ? 'COPIED TO CLIPBOARD!' : 'COPY LOGIC'}
          </button>
        </div>

        {/* Code Box */}
        <pre
          className="font-mono"
          style={{
            backgroundColor: 'var(--surface-deep)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '16px',
            fontSize: '12px',
            lineHeight: 1.5,
            color: 'var(--accent-cyan)',
            overflowX: 'auto',
            maxHeight: '340px'
          }}
        >
          {activeTab === 'logic' ? detector.logic.query : detector.raw_content}
        </pre>
      </div>
    </Modal>
  );
};
