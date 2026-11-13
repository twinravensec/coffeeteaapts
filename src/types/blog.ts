export interface BlogSource {
  title?: string;
  url: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  link_to_sources: BlogSource[];
  content_markdown: string;
  status: 'published' | 'draft' | 'template';
}
