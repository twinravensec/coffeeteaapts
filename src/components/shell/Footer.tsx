'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--surface-deep)',
        borderTop: '1px solid var(--border)',
        padding: '36px 0 24px 0',
        marginTop: '60px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '32px'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '480px' }}>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginBottom: '8px'
              }}
            >
              Coffee, Tea <span style={{ color: 'var(--primary)' }}>& APTs</span>
            </div>
            <p
              style={{
                fontSize: '0.78rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '12px'
              }}
            >
              Public threat intelligence briefing, Detection-as-Code registry, and technical adversary research. Built for Muninn as a single operational access point.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--primary)',
                  fontWeight: 600
                }}
              >
                VERSION 1.0.0-PUBLIC
              </div>
              <a
                href="mailto:twinravensec@gmail.com"
                className="font-mono"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'underline'
                }}
              >
                twinravensec@gmail.com
              </a>
            </div>
          </div>

          {/* Detections Col */}
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--text-bright)',
                letterSpacing: '0.06em',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}
            >
              Platform Assets
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="/detections" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Detection Library
                </a>
              </li>
              <li>
                <a href="/feed" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Feed
                </a>
              </li>
              <li>
                <a href="/blog" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Muninn Blog
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new Event('open-muninn-welcome'));
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  Muninn Dispatch Note
                </button>
              </li>
              <li>
                <a href="https://attack.mitre.org" target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  MITRE ATT&amp;CK Framework
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Coffee, Tea & APTs. MITRE ATT&amp;CK&reg; is a registered trademark of The MITRE Corporation.
          </div>
          <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            OFFLINE-FIRST ARCHITECTURE &bull; ZERO EXTERNAL TRACKERS
          </div>
        </div>
      </div>
    </footer>
  );
};
