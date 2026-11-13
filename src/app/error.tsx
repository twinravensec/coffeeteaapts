'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly
  }, [error]);

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
        SYSTEM ERROR // EXECUTION HALTED
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-heading)' }}>
        An Unexpected Error Occurred
      </h1>
      <p style={{ maxWidth: '460px', color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
        A client-side boundary exception was intercepted during component execution.
      </p>
      <button
        onClick={() => reset()}
        style={{
          backgroundColor: 'var(--primary)',
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
        RETRY OPERATION
      </button>
    </div>
  );
}
