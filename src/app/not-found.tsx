'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg)',
        color: 'var(--text-bright)',
        padding: '24px',
        textAlign: 'center'
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: '0.85rem',
          color: 'var(--primary)',
          letterSpacing: '0.1em',
          marginBottom: '12px'
        }}
      >
        HTTP 404 // ROUTE NOT FOUND
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-heading)' }}>
        Adversary Telemetry Not Located
      </h1>
      <p style={{ maxWidth: '460px', color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
        The requested tactical intel item or detection logic does not exist or has been relocated.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: 'var(--primary)',
          color: '#000000',
          padding: '10px 20px',
          borderRadius: '6px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 700,
          fontSize: '0.85rem',
          textDecoration: 'none'
        }}
      >
        RETURN TO PORTAL
      </Link>
    </div>
  );
}
