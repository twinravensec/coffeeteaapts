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
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

function normalizeDate(raw) {
  if (!raw) return new Date().toISOString().split('T')[0];
  if (raw instanceof Date) return raw.toISOString().split('T')[0];
  return String(raw).trim();
}

function normalizeSources(raw) {
  if (!raw) return [];
  const items = Array.isArray(raw) ? raw : [raw];
  const result = [];

  for (const item of items) {
    if (!item) continue;
    if (typeof item === 'string') {
      const url = item.trim();
      if (url) result.push({ url });
    } else if (typeof item === 'object') {
      const url = String(item.url || item.href || item.link || '').trim();
      const title = String(item.title || item.label || item.name || '').trim();
      if (url) {
        result.push(title ? { title, url } : { url });
      }
    }
  }

  return result;
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md');

const posts = [];

for (const file of files) {
  const filePath = path.join(CONTENT_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const isTemplateFile = file === '_template.md' || file.startsWith('_');

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
    const defaultSlug = isTemplateFile
      ? file.replace(/^_+/, '').replace(/\.md$/, '')
      : file.replace(/\.md$/, '');

    let status = 'published';
    if (isTemplateFile || data.status === 'template') {
      status = 'template';
    } else if (data.status === 'draft') {
      status = 'draft';
    }

    const authorStr =
      typeof data.author === 'object' && data.author !== null
        ? String(data.author.name || 'Twin Raven')
        : String(data.author || 'Twin Raven');

    const rawSources = data._link_to_sources ?? data.link_to_sources ?? data.sources;

    const post = {
      id: String(data.id || `blog-${defaultSlug}`),
      slug: String(data.slug || defaultSlug),
      title: String(data.title || 'Untitled Post'),
      author: authorStr,
      date: normalizeDate(data.date ?? data.published_at),
      summary: String(data.summary || ''),
      link_to_sources: normalizeSources(rawSources),
      content_markdown: bodyContent,
      status
    };

    posts.push(post);
    console.log(`[+] Processed: "${post.title}" (${post.slug}) [${post.status}]`);
  } catch (err) {
    console.error(`[-] Error parsing frontmatter in ${file}:`, err.message);
  }
}

// Sort by date descending
posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');
const publishedCount = posts.filter(p => p.status === 'published').length;
console.log(`[*] Successfully compiled ${posts.length} total blog entries (${publishedCount} published) into ${OUTPUT_FILE}`);
