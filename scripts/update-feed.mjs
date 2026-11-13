import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NEWS_FILE = path.resolve(__dirname, '../src/data/news.ts');
const STATS_FILE = path.resolve(__dirname, '../src/data/stats.ts');

const FEEDS = [
  {
    source: 'CISA Cybersecurity Advisories',
    url: 'https://www.cisa.gov/cybersecurity-advisories/all.xml',
    category: 'Advisory'
  },
  {
    source: 'The Hacker News',
    url: 'https://feeds.feedburner.com/TheHackersNews',
    category: 'Threat Intel'
  },
  {
    source: 'BleepingComputer',
    url: 'https://www.bleepingcomputer.com/feed/',
    category: 'Vulnerability'
  },
  {
    source: 'SANS Internet Storm Center',
    url: 'https://isc.sans.edu/rssfeed_full.xml',
    category: 'Threat Intel'
  }
];

const MITRE_PATTERNS = [
  { pattern: /\b(zero-?day|rce|remote code execution|exploit|vulnerability|flaw|overflow|injection)\b/i, tech: 'T1190' },
  { pattern: /\b(phish|spearphish|malicious email|attachment|aitm)\b/i, tech: 'T1566' },
  { pattern: /\b(powershell|script|cmd\.exe|batch|wscript|cscript)\b/i, tech: 'T1059.001' },
  { pattern: /\b(kerberos|kerberoast|spn|ntlm|credential|dump|mimikatz|password|stealer)\b/i, tech: 'T1558' },
  { pattern: /\b(ransomware|encrypt|extort|lockbit|blackcat|ransom)\b/i, tech: 'T1486' },
  { pattern: /\b(privilege escalation|uac|bypass|elevation)\b/i, tech: 'T1548' },
  { pattern: /\b(lateral movement|psexec|wmi|remote service|smb|rdp)\b/i, tech: 'T1021' },
  { pattern: /\b(c2|command and control|implant|beacon|backdoor|trojan)\b/i, tech: 'T1071' },
  { pattern: /\b(evasion|tamper|disable|rootkit|unhook|edr|silence)\b/i, tech: 'T1562.001' },
  { pattern: /\b(persistence|scheduled task|cron|registry run|service)\b/i, tech: 'T1053' },
  { pattern: /\b(cloud|aws|azure|gcp|s3|iam|token|service account)\b/i, tech: 'T1078.004' }
];

const CVE_REGEX = /CVE-\d{4}-\d{4,7}/gi;

function cleanText(html) {
  if (!html) return '';
  return html
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatRelativeTime(date) {
  const diffSec = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
  if (diffSec < 3600) {
    const mins = Math.max(1, Math.floor(diffSec / 60));
    return `${mins}m ago`;
  }
  if (diffSec < 86400) {
    const hours = Math.floor(diffSec / 3600);
    return `${hours}h ago`;
  }
  const days = Math.floor(diffSec / 86400);
  return `${days}d ago`;
}

function extractCVEs(text) {
  const matches = text.match(CVE_REGEX) || [];
  return Array.from(new Set(matches.map(c => c.toUpperCase())));
}

function extractMitreTechniques(text) {
  const techniques = new Set();
  for (const { pattern, tech } of MITRE_PATTERNS) {
    if (pattern.test(text)) {
      techniques.add(tech);
    }
  }
  return Array.from(techniques);
}

function determineCategory(source, title, summary, defaultCategory) {
  const text = `${title} ${summary}`.toLowerCase();
  if (source.includes('CISA') || text.includes('advisory')) return 'Advisory';
  if (text.includes('ransomware') || text.includes('extort')) return 'Ransomware';
  if (text.includes('apt') || text.includes('espionage') || text.includes('state-sponsored') || text.includes('threat actor')) return 'APT';
  if (text.includes('vulnerability') || text.includes('zero-day') || text.includes('flaw') || text.includes('cve-')) return 'Vulnerability';
  return defaultCategory || 'Threat Intel';
}

function parseFeedItems(xmlText, sourceConfig) {
  const items = [];
  const itemMatches = xmlText.match(/<item[\s\S]*?<\/item>/gi) || [];

  for (const block of itemMatches) {
    const titleMatch = block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = block.match(/<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
    const pubDateMatch = block.match(/<(?:pubDate|dc:date)>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/(?:pubDate|dc:date)>/i);
    const descMatch = block.match(/<(?:description|summary|content:encoded)>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/(?:description|summary|content:encoded)>/i);

    if (!titleMatch || !linkMatch) continue;

    const title = cleanText(titleMatch[1]);
    const url = cleanText(linkMatch[1]);
    let summary = cleanText(descMatch ? descMatch[1] : '');

    // Skip consumer AI/chatbot noise to keep feed focused on pure cyber defense
    if (/\b(gemini|chatgpt|copilot|claude|openai|anthropic|ai agent|ai model|artificial intelligence|\bai\b)\b/i.test(title)) {
      continue;
    }

    if (summary.length > 320) {
      summary = summary.slice(0, 317) + '...';
    }

    const dateStr = pubDateMatch ? cleanText(pubDateMatch[1]) : null;
    const pubDate = dateStr ? new Date(dateStr) : new Date();
    const validDate = isNaN(pubDate.getTime()) ? new Date() : pubDate;

    const fullText = `${title} ${summary}`;
    const cves = extractCVEs(fullText);
    const mitre_tags = extractMitreTechniques(fullText);
    const category = determineCategory(sourceConfig.source, title, summary, sourceConfig.category);
    const is_breaking = fullText.toLowerCase().includes('zero-day') ||
      fullText.toLowerCase().includes('critical') ||
      fullText.toLowerCase().includes('actively exploited') ||
      category === 'Advisory';

    const id = crypto.createHash('md5').update(url || title).digest('hex');

    items.push({
      id,
      title,
      source: sourceConfig.source,
      url,
      published_at: validDate.toISOString(),
      relative_time: formatRelativeTime(validDate),
      summary,
      cves,
      mitre_tags,
      category,
      is_breaking
    });
  }

  return items;
}

async function updateThreatFeeds() {
  console.log('[*] Fetching live OSINT threat feeds...');
  const allFetchedItems = [];

  for (const feed of FEEDS) {
    try {
      console.log(`[>] Querying ${feed.source}...`);
      const res = await fetch(feed.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; CoffeeTeaAPTs/1.0; +https://coffeeteaapts.com)'
        },
        signal: AbortSignal.timeout(15000)
      });

      if (!res.ok) {
        console.warn(`[!] Feed returned HTTP ${res.status}: ${feed.source}`);
        continue;
      }

      const xml = await res.text();
      const items = parseFeedItems(xml, feed);
      console.log(`[+] Parsed ${items.length} items from ${feed.source}`);
      allFetchedItems.push(...items);
    } catch (err) {
      console.error(`[-] Failed fetching ${feed.source}:`, err.message);
    }
  }

  if (allFetchedItems.length === 0) {
    console.log('[!] No new items fetched, preserving existing news feed.');
    return;
  }

  // Load existing news to retain historical items
  let existingItems = [];
  if (fs.existsSync(NEWS_FILE)) {
    try {
      const currentContent = fs.readFileSync(NEWS_FILE, 'utf-8');
      const jsonMatch = currentContent.match(/export const NEWS_FEED: NewsItem\[\] = (\[[\s\S]*?\]);/);
      if (jsonMatch) {
        existingItems = JSON.parse(jsonMatch[1]);
      }
    } catch (e) {
      console.warn('[!] Could not parse existing news items, using fresh list.');
    }
  }

  // Deduplicate by URL and ID, applying strict filter
  const itemMap = new Map();
  for (const item of [...allFetchedItems, ...existingItems]) {
    if (/\b(gemini|chatgpt|copilot|claude|openai|anthropic|ai agent|ai model|artificial intelligence|\bai\b)\b/i.test(item.title)) {
      continue;
    }
    const key = item.url || item.id;
    if (!itemMap.has(key)) {
      itemMap.set(key, item);
    }
  }

  // Sort descending by published_at
  const merged = Array.from(itemMap.values())
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 35); // Keep the top 35 freshest threat advisories

  // Recalculate relative times at compile time
  for (const item of merged) {
    item.relative_time = formatRelativeTime(new Date(item.published_at));
  }

  const outputCode = `import { NewsItem } from "../types/news";\n\nexport const NEWS_FEED: NewsItem[] = ${JSON.stringify(merged, null, 2)};\n`;

  fs.writeFileSync(NEWS_FILE, outputCode, 'utf-8');
  console.log(`[+] Successfully wrote ${merged.length} threat feed items to ${NEWS_FILE}`);

  // Update stats.ts last_sync
  if (fs.existsSync(STATS_FILE)) {
    let statsContent = fs.readFileSync(STATS_FILE, 'utf-8');
    const nowIso = new Date().toISOString();
    statsContent = statsContent.replace(/"last_sync": "[^"]*"/, `"last_sync": "${nowIso}"`);
    fs.writeFileSync(STATS_FILE, statsContent, 'utf-8');
    console.log(`[+] Updated stats.ts last_sync to ${nowIso}`);
  }
}

updateThreatFeeds().catch(err => {
  console.error('[-] Fatal error running update-feed:', err);
  process.exit(1);
});
