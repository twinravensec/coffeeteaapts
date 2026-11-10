'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../components/shell/Header';
import { Hero } from '../components/shell/Hero';
import { Footer } from '../components/shell/Footer';
import { NewsFeedBlock } from '../components/news/NewsFeedBlock';
import { DetectionLibraryBlock } from '../components/detections/DetectionLibraryBlock';
import { BlogBlock } from '../components/blog/BlogBlock';
import { getMuninnStats } from '../services/api';
import { MuninnStats } from '../types/stats';

export default function Home() {
  const [stats, setStats] = useState<MuninnStats>({
    total_detectors: 148,
    active_sources: 10,
    monitored_feeds: 4,
    mitre_coverage_percent: 64.2,
    tactics_covered: 14,
    last_sync: "Just now"
  });

  useEffect(() => {
    getMuninnStats().then(setStats);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero stats={stats} />
        <NewsFeedBlock />
        <DetectionLibraryBlock />
        <BlogBlock />
      </main>
      <Footer />
    </div>
  );
}
