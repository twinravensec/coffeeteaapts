import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.resolve(__dirname, '../content/blog');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/compiledBlog.json');

console.log('[*] Compiling Markdown blog posts from:', CONTENT_DIR);

if (!fs.existsSync(CONTENT_DIR)) {
  console.error('[-] Error: Content directory does not exist:', CONTENT_DIR);
  process.exit(1);
}

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md');

const posts = [];

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');

  // Match frontmatter between --- and ---
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    console.warn(`[!] Skipping ${file}: No valid YAML frontmatter found.`);
    continue;
  }

  const frontmatterStr = match[1];
  const bodyContent = match[2].trim();

  try {
    const data = yaml.load(frontmatterStr) || {};

    const wordCount = bodyContent.split(/\s+/).filter(Boolean).length;
    const autoReadingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    const post = {
      id: data.id || `post-${file.replace(/\.md$/, '')}`,
      slug: data.slug || file.replace(/\.md$/, ''),
      title: data.title || 'Untitled Post',
      summary: data.summary || '',
      author: typeof data.author === 'object' ? {
        name: data.author.name || 'Staff Researcher',
        role: data.author.role || 'Detection Engineer',
        handle: data.author.handle || '@twinraven'
      } : {
        name: data.author || 'Staff Researcher',
        role: 'Detection Engineer',
        handle: '@twinraven'
      },
      published_at: data.published_at ? String(data.published_at) : new Date().toISOString().split('T')[0],
      reading_time: data.reading_time || autoReadingTime,
      category: data.category || 'Detection Engineering',
      tags: Array.isArray(data.tags) ? data.tags : [],
      mitre_techniques: Array.isArray(data.mitre_techniques) ? data.mitre_techniques : [],
      content_markdown: bodyContent,
      is_featured: Boolean(data.is_featured),
      status: data.status === 'draft' ? 'draft' : 'published'
    };

    posts.push(post);
    console.log(`[+] Processed: "${post.title}" (${post.slug})`);
  } catch (err) {
    console.error(`[-] Error parsing frontmatter in ${file}:`, err.message);
  }
}

// Sort by published_at descending
posts.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');
console.log(`[*] Successfully compiled ${posts.length} blog posts into ${OUTPUT_FILE}`);
