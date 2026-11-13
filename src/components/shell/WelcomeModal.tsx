'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';

export const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('cta_muninn_welcome_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    } catch {
      // LocalStorage access may be restricted in private/sandboxed browsing
    }

    const handleManualOpen = () => setIsOpen(true);
    window.addEventListener('open-muninn-welcome', handleManualOpen);
    return () => {
      window.removeEventListener('open-muninn-welcome', handleManualOpen);
    };
  }, []);

  const handleClose = () => {
    try {
      localStorage.setItem('cta_muninn_welcome_dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Coffee, Tea & APTs"
      subtitle="Muninn Operations Hub"
      maxWidth="580px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Status Callout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            backgroundColor: 'var(--surface-deep)',
            border: '1px solid var(--border)',
            borderRadius: '6px'
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--primary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 700
            }}
          >
            DISPATCH // SINGLE POINT ACCESS
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)'
            }}
          >
            STATUS: ACTIVE
          </span>
        </div>

        {/* Message Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            lineHeight: 1.65,
            fontSize: '14px',
            color: 'var(--text-body)'
          }}
        >
          <p style={{ margin: 0 }}>
            This portal was built for <strong style={{ color: 'var(--text-heading)' }}>Muninn</strong> as a single point of access to daily intelligence items, threat advisories, and detection engineering logic.
          </p>

          <p style={{ margin: 0 }}>
            The blog is more of notes and comments for myself &mdash; tracking adversary tradecraft, technical observations, and engineering thoughts.
          </p>

          <div
            style={{
              padding: '14px 16px',
              backgroundColor: 'var(--surface-raised)',
              borderLeft: '3px solid var(--primary)',
              borderRadius: '0 6px 6px 0'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600
              }}
            >
              Feedback & Inquiries
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-bright)' }}>
              If you have nice feedback or constructive thoughts, feel free to reach out:{' '}
              <a
                href="mailto:twinravensec@gmail.com"
                style={{
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  wordBreak: 'break-all'
                }}
              >
                twinravensec@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: '12px',
            borderTop: '1px solid var(--border)'
          }}
        >
          <button
            onClick={handleClose}
            style={{
              backgroundColor: 'var(--primary)',
              color: '#000000',
              fontWeight: 700,
              fontSize: '12.5px',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.04em',
              padding: '9px 20px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.15s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            ENTER PORTAL
          </button>
        </div>
      </div>
    </Modal>
  );
};
