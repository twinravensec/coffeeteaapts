export type DetectionSeverity = 'critical' | 'high' | 'medium' | 'low';
export type DetectionStatus = 'production' | 'hunting' | 'testing' | 'experimental' | 'draft';
export type DetectionLibrary = 
  | 'Sigma' 
  | 'Splunk' 
  | 'Elastic' 
  | 'Google Chronicle (YARA-L)' 
  | 'CrowdStrike';

export interface ThreatMapping {
  framework: string;
  tactic: string;
  techniques: string[];
  tags: string[];
}

export interface DetectionLogic {
  language: 'sigma' | 'spl' | 'eql' | 'yara-l' | 'fql' | string;
  query: string;
}

export interface PublicDetector {
  id: string;
  name: string;
  library: DetectionLibrary;
  library_repo_url?: string;
  description: string;
  author: string;
  version: string;
  severity: DetectionSeverity;
  confidence: number;
  status: DetectionStatus;
  log_source: string;
  platform: string;
  threat: ThreatMapping;
  logic: DetectionLogic;
  raw_content: string;
  raw_format?: 'yaml' | 'toml' | 'yara' | 'json' | 'fql' | 'raw';
  created_at: string;
  modified_at: string;
}
