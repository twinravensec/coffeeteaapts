import { PublicDetector } from '../types/detector';
import { NewsItem } from '../types/news';
import { BlogPost } from '../types/blog';
import { MuninnStats } from '../types/stats';
import { VulnerabilityItem } from '../types/vulnerability';

import { DETECTORS } from '../data/detectors';
import { NEWS_FEED } from '../data/news';
import { BLOG_POSTS } from '../data/blog';
import { PLATFORM_STATS } from '../data/stats';
import { VULNERABILITIES } from '../data/vulnerabilities';

export interface DetectorFilterOptions {
  searchQuery?: string;
  library?: string;
  severity?: string;
  platform?: string;
  tactic?: string;
}

export type NewsDateFilter = 'today' | 'yesterday' | 'all';

export interface NewsFilterOptions {
  source?: string;
  searchQuery?: string;
  dateFilter?: NewsDateFilter;
  limit?: number;
}

/**
 * Fetch public detection rules with multi-criteria filtering across:
 * library, severity, platform, MITRE tactic, and keyword search.
 */
export async function getDetectors(options?: DetectorFilterOptions): Promise<PublicDetector[]> {
  await new Promise(r => setTimeout(r, 10));

  if (!options) return [];

  const hasLibrary = options.library && options.library !== 'none' && options.library !== 'all';
  const hasSeverity = options.severity && options.severity !== 'all';
  const hasPlatform = options.platform && options.platform !== 'all';
  const hasTactic = options.tactic && options.tactic !== 'all';
  const hasSearch = !!(options.searchQuery && options.searchQuery.trim() !== '');

  // If on home page with library set to 'none' and no other filter or search active, return empty list for the clean prompt card
  if (options.library === 'none' && !hasSeverity && !hasPlatform && !hasTactic && !hasSearch) {
    return [];
  }

  let results = [...DETECTORS];

  // 1. Detection Library Filter
  if (hasLibrary) {
    results = results.filter(d => d.library.toLowerCase() === options.library?.toLowerCase());
  }

  // 2. Severity Filter
  if (hasSeverity) {
    results = results.filter(d => d.severity.toLowerCase() === options.severity?.toLowerCase());
  }

  // 3. Platform Filter (Intelligent semantic matching for Windows, Cloud, Identity, Linux, Network, Kubernetes)
  if (hasPlatform && options.platform) {
    const p = options.platform.toLowerCase();
    results = results.filter(d => {
      const plat = (d.platform || '').toLowerCase();
      const logSrc = (d.log_source || '').toLowerCase();
      if (p === 'windows') {
        return plat.includes('windows') || logSrc.includes('windows') || logSrc.includes('sysmon') || logSrc.includes('wineventlog');
      }
      if (p === 'cloud') {
        const cloudKeys = ['cloud', 'aws', 'azure', 'gcp', 's3', 'o365', 'google cloud', 'ec2', 'cloudaudit', 'cloudtrail', 'gsuite', 'workspace'];
        return cloudKeys.some(k => plat.includes(k) || logSrc.includes(k));
      }
      if (p === 'identity') {
        const idKeys = ['identity', 'okta', 'azure active directory', 'active directory', 'iam', 'saml', 'aad', 'user'];
        return idKeys.some(k => plat.includes(k) || logSrc.includes(k));
      }
      if (p === 'linux') {
        return plat.includes('linux') || logSrc.includes('linux') || logSrc.includes('auditd') || logSrc.includes('syslog');
      }
      if (p === 'network') {
        const netKeys = ['network', 'proxy', 'dns', 'firewall', 'zeek', 'suricata', 'netflow', 'pcap'];
        return netKeys.some(k => plat.includes(k) || logSrc.includes(k));
      }
      if (p === 'kubernetes' || p === 'containers') {
        const k8sKeys = ['kubernetes', 'k8s', 'docker', 'container', 'eks', 'gke'];
        return k8sKeys.some(k => plat.includes(k) || logSrc.includes(k));
      }
      return plat.includes(p) || logSrc.includes(p);
    });
  }

  // 4. MITRE Tactic Filter (Supports multi-tactic strings and tag matching)
  if (hasTactic && options.tactic) {
    const t = options.tactic.toLowerCase();
    results = results.filter(d => {
      const tacticStr = (d.threat?.tactic || '').toLowerCase();
      const tags = (d.threat?.tags || []).map(tag => String(tag).toLowerCase());
      return tacticStr.includes(t) || tags.some(tag => tag.includes(t));
    });
  }

  // 5. Keyword Search Filter
  if (hasSearch && options.searchQuery) {
    const q = options.searchQuery.toLowerCase().trim();
    results = results.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q) ||
      (d.author && d.author.toLowerCase().includes(q)) ||
      d.library.toLowerCase().includes(q) ||
      (d.platform && d.platform.toLowerCase().includes(q)) ||
      (d.log_source && d.log_source.toLowerCase().includes(q)) ||
      (d.threat?.tactic && d.threat.tactic.toLowerCase().includes(q)) ||
      (d.threat?.techniques && d.threat.techniques.some(tech => tech.toLowerCase().includes(q))) ||
      (d.threat?.tags && d.threat.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  return results;
}

export async function getDetectorById(id: string): Promise<PublicDetector | null> {
  await new Promise(r => setTimeout(r, 10));
  return DETECTORS.find(d => d.id === id) || null;
}

function startOfLocalDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

/**
 * Fetch OSINT threat news items with optional date, source, and keyword filtering.
 */
export async function getNewsFeed(options?: NewsFilterOptions): Promise<NewsItem[]> {
  await new Promise(r => setTimeout(r, 10));

  let results = [...NEWS_FEED].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  if (!options) return results;

  if (options.dateFilter && options.dateFilter !== 'all') {
    const validTimestamps = results
      .map(n => new Date(n.published_at).getTime())
      .filter(t => !Number.isNaN(t));

    const latestMs = validTimestamps.length > 0 ? Math.max(...validTimestamps) : Date.now();
    const now = new Date();
    // Use real-time clock when feeds are fresh (<=48h); anchor to latest snapshot day when offline/stale
    const referenceDate =
      now.getTime() - latestMs <= 48 * 3600 * 1000 ? now : new Date(latestMs);

    const todayStart = startOfLocalDay(referenceDate);
    const yesterdayStart = todayStart - 86400000;

    results = results.filter(n => {
      const pubDate = new Date(n.published_at);
      if (Number.isNaN(pubDate.getTime())) return false;
      const itemDayStart = startOfLocalDay(pubDate);
      if (options.dateFilter === 'today') {
        return itemDayStart >= todayStart;
      }
      if (options.dateFilter === 'yesterday') {
        return itemDayStart >= yesterdayStart && itemDayStart < todayStart;
      }
      return true;
    });
  }

  if (options.source && options.source !== 'All') {
    results = results.filter(n => n.source === options.source);
  }

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const q = options.searchQuery.toLowerCase().trim();
    results = results.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.cves.some(cve => cve.toLowerCase().includes(q)) ||
      n.mitre_tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (options.limit && options.limit > 0) {
    results = results.slice(0, options.limit);
  }

  return results;
}

export interface BlogFilterOptions {
  searchQuery?: string;
}

/**
 * Fetch published blog posts sorted newest-first with optional keyword filtering.
 */
export async function getBlogPosts(options?: BlogFilterOptions): Promise<BlogPost[]> {
  await new Promise(r => setTimeout(r, 10));
  let results = BLOG_POSTS
    .filter(p => p.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!options) return results;

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const q = options.searchQuery.toLowerCase().trim();
    results = results.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q)
    );
  }

  return results;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await new Promise(r => setTimeout(r, 10));
  return BLOG_POSTS.find(p => p.slug === slug) || null;
}

/**
 * Fetch platform overview statistics.
 */
export async function getMuninnStats(): Promise<MuninnStats> {
  await new Promise(r => setTimeout(r, 10));
  return {
    ...PLATFORM_STATS,
    total_detectors: DETECTORS.length
  };
}

export interface VulnFilterOptions {
  dateFilter?: NewsDateFilter;
  source?: string;
  severity?: string;
  kevOnly?: boolean;
  searchQuery?: string;
  limit?: number;
}

/**
 * Fetch authoritative vulnerability records (NIST NVD, CISA KEV, GitHub Advisory DB / OSV, FIRST EPSS)
 * sorted newest-first by date added/published.
 */
export async function getVulnerabilities(options?: VulnFilterOptions): Promise<VulnerabilityItem[]> {
  await new Promise(r => setTimeout(r, 10));

  let results = [...VULNERABILITIES].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  if (!options) return results;

  if (options.dateFilter && options.dateFilter !== 'all') {
    const validTimestamps = results
      .map(v => new Date(v.published_at).getTime())
      .filter(t => !Number.isNaN(t));

    const latestMs = validTimestamps.length > 0 ? Math.max(...validTimestamps) : Date.now();
    const now = new Date();
    const referenceDate =
      now.getTime() - latestMs <= 48 * 3600 * 1000 ? now : new Date(latestMs);

    const todayStart = startOfLocalDay(referenceDate);
    const yesterdayStart = todayStart - 86400000;

    results = results.filter(v => {
      const pubDate = new Date(v.published_at);
      if (Number.isNaN(pubDate.getTime())) return false;
      const itemDayStart = startOfLocalDay(pubDate);
      if (options.dateFilter === 'today') {
        return itemDayStart >= todayStart;
      }
      if (options.dateFilter === 'yesterday') {
        return itemDayStart >= yesterdayStart && itemDayStart < todayStart;
      }
      return true;
    });
  }

  if (options.source && options.source !== 'All') {
    results = results.filter(
      v => v.source === options.source || v.sources.includes(options.source as VulnerabilityItem['source'])
    );
  }

  if (options.severity && options.severity !== 'all') {
    const sev = options.severity.toUpperCase();
    results = results.filter(v => v.severity === sev);
  }

  if (options.kevOnly) {
    results = results.filter(v => v.is_kev);
  }

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const q = options.searchQuery.toLowerCase().trim();
    results = results.filter(v =>
      v.id.toLowerCase().includes(q) ||
      (v.cve_id && v.cve_id.toLowerCase().includes(q)) ||
      (v.ghsa_id && v.ghsa_id.toLowerCase().includes(q)) ||
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      (v.ecosystem && v.ecosystem.toLowerCase().includes(q)) ||
      (v.vendor_product && v.vendor_product.toLowerCase().includes(q)) ||
      v.cwes.some(c => c.toLowerCase().includes(q))
    );
  }

  if (options.limit && options.limit > 0) {
    results = results.slice(0, options.limit);
  }

  return results;
}

