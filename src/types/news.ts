export type NewsSource = 
  | 'The Hacker News' 
  | 'BleepingComputer' 
  | 'CISA Cybersecurity Advisories' 
  | 'SANS Internet Storm Center'
  | 'CrowdStrike Blog'
  | 'Huntress Blog'
  | 'Cisco Talos Intelligence'
  | 'Wired Security'
  | 'Ars Technica Security'
  | 'Microsoft Threat Intelligence'
  | 'SentinelOne Blog'
  | string;

export interface NewsItem {
  id: string;
  title: string;
  source: NewsSource;
  url: string;
  published_at: string;
  relative_time: string;
  summary: string;
  cves: string[];
  mitre_tags: string[];
  category: string;
  is_breaking?: boolean;
}
