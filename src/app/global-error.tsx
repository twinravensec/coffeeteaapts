'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" data-theme="colorblind">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d1117',
          color: '#f0f6fc',
          fontFamily: 'Inter, sans-serif',
          padding: '24px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.85rem',
            color: '#E69F00',
            letterSpacing: '0.1em',
            marginBottom: '12px'
          }}
        >
          GLOBAL EXCEPTION INTERCEPTED
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: '#f0f6fc' }}>
          Application Core Error
        </h1>
        <p style={{ maxWidth: '460px', color: '#8b949e', marginBottom: '24px', fontSize: '0.95rem' }}>
          A root level error boundary was triggered. Telemetry logging in progress.
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: '#E69F00',
            color: '#000000',
            padding: '10px 20px',
            borderRadius: '6px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            fontSize: '0.85rem',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          RELOAD ROOT APPLICATION
        </button>
      </body>
    </html>
  );
}
