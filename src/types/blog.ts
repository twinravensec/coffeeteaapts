export interface BlogAuthor {
  name: string;
  role: string;
  handle: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: BlogAuthor;
  published_at: string;
  reading_time: string;
  category: 'Adversary Tradecraft' | 'Detection Engineering' | 'Threat Hunting' | 'Architecture';
  tags: string[];
  mitre_techniques: string[];
  content_markdown: string;
  is_featured?: boolean;
  status: 'published' | 'draft';
}
