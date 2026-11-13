export interface BlogAuthor {
  name: string;
  role: string;
  handle: string;
}

export type BlogCategory =
  | 'Adversary Tradecraft'
  | 'Detection Engineering'
  | 'Threat Hunting'
  | 'Architecture';

export type BlogTlp = 'TLP:CLEAR' | 'TLP:GREEN' | 'TLP:AMBER';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: BlogAuthor;
  published_at: string;
  reading_time: string;
  category: BlogCategory;
  tags: string[];
  mitre_techniques: string[];
  platforms?: string[];
  tlp?: BlogTlp;
  content_markdown: string;
  is_featured?: boolean;
  status: 'published' | 'draft' | 'template';
}
