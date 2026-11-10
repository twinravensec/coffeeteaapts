'use client';

import React from 'react';

interface UpcomingItem {
  title: string;
  topic: string;
  eta: string;
  author: string;
}

const UPCOMING: UpcomingItem[] = [
  {
    title: "Defeating BYOVD Rootkits: Automated Analysis of Known Vulnerable Driver Hashes",
    topic: "Kernel Security",
    eta: "Peer Review",
    author: "Twin Raven Security"
  },
  {
    title: "Heuristic Behavioral Hunting for Shadow Admin Escalations in Azure Entra ID",
    topic: "Identity Defense",
    eta: "In Drafting",
    author: "Raven Defense Lab"
  }
];

export const UpcomingResearchCard: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '28px',
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '20px 24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: 'var(--warning)',
              letterSpacing: '0.06em'
            }}
          >
            RESEARCH PIPELINE &bull; UPCOMING PUBLICATIONS
          </span>
        </div>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
          PEER REVIEW IN PROGRESS
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '14px'
        }}
      >
        {UPCOMING.map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: 'var(--surface-deep)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '14px 16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '6px'
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.68rem', color: 'var(--warning)', fontWeight: 600 }}
              >
                {item.topic}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  color: 'var(--warning)',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}
              >
                {item.eta}
              </span>
            </div>
            <h4
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-bright)',
                lineHeight: 1.4,
                marginBottom: '6px'
              }}
            >
              {item.title}
            </h4>
            <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              RESEARCHER: {item.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
