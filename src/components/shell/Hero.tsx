'use client';

import React from 'react';
import { MuninnStats } from '../../types/stats';

interface HeroProps {
  stats: MuninnStats;
}

export const Hero: React.FC<HeroProps> = ({ stats }) => {
  const cardStyle: React.CSSProperties = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
  };

  return (
    <section
      style={{
        padding: '28px 0 20px 0',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-deep)'
      }}
    >
      <div className="container">
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px'
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px'
              }}
            >
              TWIN RAVEN DAC • PUBLIC GATEWAY
            </div>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              Coffee, Tea &amp; APTs
            </h1>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--primary)',
                fontWeight: 600,
                marginTop: '4px',
                letterSpacing: '0.01em'
              }}
            >
              Brewing detections, spilling threat intel tea, and tracking APTs.
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginTop: '4px',
                maxWidth: '780px'
              }}
            >
              Your morning review.
            </p>
          </div>

          {/* Quick Action Jump Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <a
              href="#news"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '6px',
                background: 'var(--surface)',
                border: '1px solid var(--border-bright)',
                color: 'var(--text-bright)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <span>Feed</span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&darr;</span>
            </a>
            <a
              href="#detections"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '6px',
                background: 'var(--primary)',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>Detection Library</span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&darr;</span>
            </a>
            <a
              href="#blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '6px',
                background: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <span>Muninn Blog</span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&darr;</span>
            </a>
          </div>
        </div>

        {/* Overview KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}
        >
          {/* Card 1: Monitored OSINT Feeds */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}
              >
                Monitored OSINT Feeds
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--warning)', fontWeight: 600 }}>
                STREAMING
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-bright)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              {stats.monitored_feeds}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              CISA KEV, HackerNews, BleepingComputer, Unit 42
            </div>
          </div>

          {/* Card 2: Detection Rules */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}
              >
                Detection Rules
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: 600 }}>
                VERIFIED
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-bright)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              {stats.total_detectors}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Open Detection-as-Code logic rules
            </div>
          </div>

          {/* Card 3: Supported Platforms */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}
              >
                Supported Platforms
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--success)', fontWeight: 600 }}>
                MULTI-CLOUD
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-bright)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              {stats.active_sources}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Windows, Linux, CloudTrail, Okta, Zeek
            </div>
          </div>

          {/* Card 4: ATT&CK Tactics Covered */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}
              >
                ATT&amp;CK Tactics Covered
              </div>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: 600 }}>
                v18 ENTERPRISE
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-bright)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}
            >
              {stats.tactics_covered}/14
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {stats.mitre_coverage_percent}% coverage across enterprise tactics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
