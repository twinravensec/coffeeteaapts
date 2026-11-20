'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hero } from '../components/shell/Hero';
import { Footer } from '../components/shell/Footer';
import { NewsCard } from '../components/news/NewsCard';
import { NewsDetailModal } from '../components/news/NewsDetailModal';
import { VulnCard } from '../components/vulnerabilities/VulnCard';
import { VulnDetailModal } from '../components/vulnerabilities/VulnDetailModal';
import { FeaturedArticleCard } from '../components/blog/FeaturedArticleCard';
import {
  getMuninnStats,
  getNewsFeed,
  getVulnerabilities,
  getBlogPosts
} from '../services/api';
import { MuninnStats } from '../types/stats';
import { NewsItem } from '../types/news';
import { VulnerabilityItem } from '../types/vulnerability';
import { BlogPost } from '../types/blog';

export default function Home() {
  const [stats, setStats] = useState<MuninnStats>({
    total_detectors: 1505,
    active_sources: 11,
    monitored_feeds: 11,
    mitre_coverage_percent: 88,
    tactics_covered: 14,
    last_sync: 'Just now'
  });

  const [topNews, setTopNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const [topVulns, setTopVulns] = useState<VulnerabilityItem[]>([]);
  const [vulnsLoading, setVulnsLoading] = useState(true);
  const [selectedVuln, setSelectedVuln] = useState<VulnerabilityItem | null>(null);

  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
  const [blogLoading, setBlogLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getMuninnStats().then((s) => {
      if (isMounted) setStats(s);
    });

    getNewsFeed({ limit: 3 }).then((items) => {
      if (isMounted) {
        setTopNews(items.slice(0, 3));
        setNewsLoading(false);
      }
    });

    getVulnerabilities({ limit: 3 }).then((items) => {
      if (isMounted) {
        setTopVulns(items.slice(0, 3));
        setVulnsLoading(false);
      }
    });

    getBlogPosts().then((posts) => {
      if (isMounted) {
        setLatestPost(posts[0] || null);
        setBlogLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>
        <Hero stats={stats} />

        {/* Section 1: Free Intel (Top 3 Recent News Articles) */}
        <section
          id="free-intel"
          style={{ padding: '36px 0', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    OSINT THREAT STREAM &bull; TOP 3 RECENT
                  </span>
                  <span className="pulse-indicator" />
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}
                >
                  Free Intel
                </h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0 }}>
                  Top 3 most recent threat advisories, zero-day disclosures, and OSINT reports.
                </p>
              </div>

              <Link
                href="/news/"
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-bright)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'border-color 0.15s, color 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-bright)';
                }}
              >
                <span>View All News</span>
                <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&rarr;</span>
              </Link>
            </div>

            {newsLoading ? (
              <div
                className="font-mono"
                style={{
                  padding: '36px 0',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem'
                }}
              >
                CONNECTING TO INTEL STREAM...
              </div>
            ) : topNews.length === 0 ? (
              <div
                className="card"
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                No threat intelligence articles currently available.
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '16px'
                }}
              >
                {topNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    item={item}
                    onSelect={setSelectedNews}
                  />
                ))}
              </div>
            )}

            <NewsDetailModal
              item={selectedNews}
              onClose={() => setSelectedNews(null)}
            />
          </div>
        </section>

        {/* Section 2: Newly Added Vulnerabilities */}
        <section
          id="vulnerabilities"
          style={{ padding: '36px 0', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    NIST NVD &bull; CISA KEV &bull; GHSA / OSV
                  </span>
                  <span className="pulse-indicator" />
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}
                >
                  Newly Added Vulnerabilities
                </h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0 }}>
                  Latest open-source advisories and CVE disclosures added across authoritative databases.
                </p>
              </div>

              <Link
                href="/vulnerabilities/"
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-bright)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'border-color 0.15s, color 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-bright)';
                }}
              >
                <span>Open Vulnerability Monitor</span>
                <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&rarr;</span>
              </Link>
            </div>

            {vulnsLoading ? (
              <div
                className="font-mono"
                style={{
                  padding: '36px 0',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem'
                }}
              >
                QUERYING VULNERABILITY DATABASES...
              </div>
            ) : topVulns.length === 0 ? (
              <div
                className="card"
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                No vulnerability records currently loaded.
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '16px'
                }}
              >
                {topVulns.map((item) => (
                  <VulnCard
                    key={item.id}
                    item={item}
                    onSelect={setSelectedVuln}
                  />
                ))}
              </div>
            )}

            <VulnDetailModal
              item={selectedVuln}
              onClose={() => setSelectedVuln(null)}
            />
          </div>
        </section>

        {/* Section 3: Blog (Most Recent Blog Posted) */}
        <section id="blog" style={{ padding: '36px 0 20px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    WRITE-UPS &amp; RESEARCH &bull; MOST RECENT POST
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    letterSpacing: '-0.02em',
                    margin: 0
                  }}
                >
                  Muninn Blog
                </h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0 }}>
                  Latest adversary tradecraft analysis and detection engineering dispatch.
                </p>
              </div>

              <Link
                href="/blog/"
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-bright)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'border-color 0.15s, color 0.15s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-bright)';
                }}
              >
                <span>Open Muninn Blog</span>
                <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>&rarr;</span>
              </Link>
            </div>

            {blogLoading ? (
              <div
                className="font-mono"
                style={{
                  padding: '32px 0',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem'
                }}
              >
                LOADING LATEST BLOG POST...
              </div>
            ) : latestPost ? (
              <FeaturedArticleCard post={latestPost} />
            ) : (
              <div
                className="card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
              >
                <div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}
                  >
                    AWAITING FIRST PUBLISHED DISPATCH
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                    No published blog posts yet. Once a post is published, the most recent entry will automatically appear here.
                  </div>
                </div>
                <Link
                  href="/blog/"
                  className="font-mono"
                  style={{
                    padding: '6px 14px',
                    borderRadius: '4px',
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border)',
                    color: 'var(--primary)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  VIEW BLOG &rarr;
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
