import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VULNS_FILE = path.resolve(__dirname, '../src/data/vulnerabilities.ts');

const CISA_KEV_URL =
  'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';
const GHSA_API_URL =
  'https://api.github.com/advisories?type=reviewed&sort=published&direction=desc&per_page=60';
const NVD_API_BASE = 'https://services.nvd.nist.gov/rest/json/cves/2.0';
const EPSS_API_BASE = 'https://api.first.org/data/v1/epss';

const COMMON_HEADERS = {
  'User-Agent': 'CoffeeTeaAPTs/1.0 (+https://coffeeteaapts.com)'
};

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

function normalizeSeverity(rawSev, cvssScore) {
  if (rawSev) {
    const upper = String(rawSev).trim().toUpperCase();
    if (upper === 'CRITICAL') return 'CRITICAL';
    if (upper === 'HIGH') return 'HIGH';
    if (upper === 'MEDIUM' || upper === 'MODERATE') return 'MEDIUM';
    if (upper === 'LOW') return 'LOW';
  }
  if (typeof cvssScore === 'number' && !Number.isNaN(cvssScore)) {
    if (cvssScore >= 9.0) return 'CRITICAL';
    if (cvssScore >= 7.0) return 'HIGH';
    if (cvssScore >= 4.0) return 'MEDIUM';
    if (cvssScore > 0) return 'LOW';
  }
  return 'UNKNOWN';
}

function normalizeEcosystemLabel(eco) {
  if (!eco) return null;
  const lower = String(eco).toLowerCase();
  const map = {
    npm: 'npm',
    pip: 'PyPI',
    pypi: 'PyPI',
    go: 'Go',
    golang: 'Go',
    maven: 'Maven',
    rust: 'Cargo (Rust)',
    cargo: 'Cargo (Rust)',
    nuget: 'NuGet',
    composer: 'Packagist (PHP)',
    rubygems: 'RubyGems',
    actions: 'GitHub Actions',
    pub: 'Pub (Dart)',
    erlang: 'Hex (Erlang)',
    swift: 'SwiftURL'
  };
  return map[lower] || String(eco);
}

function truncateText(str, maxLen = 420) {
  if (!str) return '';
  const cleaned = String(str)
    .replace(/#{1,6}\s+(Summary|Impact|Details|Patches|Workarounds|PoC|Description)\b[:\s]*/gi, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen - 3) + '...';
}

function isSafeHttpUrl(raw) {
  if (!raw || typeof raw !== 'string') return false;
  try {
    const parsed = new URL(raw.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

async function fetchCisaKev() {
  const kevLookup = new Map();
  const recentKevItems = [];

  try {
    console.log('[>] Querying CISA Known Exploited Vulnerabilities (KEV) catalog...');
    const res = await fetch(CISA_KEV_URL, {
      headers: COMMON_HEADERS,
      signal: AbortSignal.timeout(15000)
    });
    if (!res.ok) {
      console.warn(`[!] CISA KEV returned HTTP ${res.status}`);
      return { kevLookup, recentKevItems };
    }

    const data = await res.json();
    const vulns = Array.isArray(data.vulnerabilities) ? data.vulnerabilities : [];
    console.log(`[+] Loaded ${vulns.length} total CISA KEV entries`);

    for (const v of vulns) {
      if (!v.cveID) continue;
      kevLookup.set(v.cveID.toUpperCase(), v);
    }

    // Sort descending by dateAdded and keep newest 35 KEV additions
    const sortedRecent = [...vulns]
      .filter((v) => v.cveID && v.dateAdded)
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .slice(0, 35);

    for (const v of sortedRecent) {
      const cveId = v.cveID.toUpperCase();
      const publishedIso = `${v.dateAdded}T12:00:00.000Z`;
      const vendorProduct = [v.vendorProject, v.product].filter(Boolean).join(' ');
      const rawRefs = String(v.notes || '')
        .split(';')
        .map((s) => s.trim())
        .filter((s) => s.startsWith('http'));

      recentKevItems.push({
        id: cveId,
        cve_id: cveId,
        ghsa_id: null,
        title: v.vulnerabilityName || `${vendorProduct} Vulnerability (${cveId})`,
        description: truncateText(v.shortDescription || v.requiredAction || ''),
        source: 'CISA KEV',
        sources: ['CISA KEV'],
        severity: 'HIGH',
        cvss_score: null,
        cvss_vector: null,
        epss_score: null,
        epss_percentile: null,
        is_kev: true,
        ransomware_use:
          String(v.knownRansomwareCampaignUse || '').toLowerCase() === 'known',
        kev_due_date: v.dueDate || null,
        ecosystem: v.vendorProject || null,
        vendor_product: vendorProduct || null,
        affected_versions: null,
        patched_versions: null,
        cwes: Array.isArray(v.cwes) ? v.cwes.slice(0, 4) : [],
        published_at: publishedIso,
        relative_time: formatRelativeTime(new Date(publishedIso)),
        url: `https://nvd.nist.gov/vuln/detail/${cveId}`,
        references: rawRefs.slice(0, 5)
      });
    }
  } catch (err) {
    console.error('[-] Failed fetching CISA KEV:', err.message);
  }

  return { kevLookup, recentKevItems };
}

async function fetchGhsaAdvisories() {
  const items = [];
  try {
    console.log('[>] Querying GitHub Advisory Database (GHSA / OSV CNA)...');
    const res = await fetch(GHSA_API_URL, {
      headers: {
        ...COMMON_HEADERS,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      signal: AbortSignal.timeout(15000)
    });

    if (!res.ok) {
      console.warn(`[!] GitHub Advisory API returned HTTP ${res.status}`);
      return items;
    }

    const advisories = await res.json();
    if (!Array.isArray(advisories)) return items;
    console.log(`[+] Parsed ${advisories.length} reviewed open-source advisories from GHSA`);

    for (const adv of advisories) {
      if (adv.withdrawn_at) continue;
      const cveId = adv.cve_id ? String(adv.cve_id).toUpperCase() : null;
      const ghsaId = adv.ghsa_id || null;
      const primaryId = cveId || ghsaId;
      if (!primaryId) continue;

      const cvssScore =
        typeof adv.cvss?.score === 'number' && adv.cvss.score > 0
          ? adv.cvss.score
          : typeof adv.cvss_severities?.cvss_v3?.score === 'number' && adv.cvss_severities.cvss_v3.score > 0
          ? adv.cvss_severities.cvss_v3.score
          : typeof adv.cvss_severities?.cvss_v4?.score === 'number' && adv.cvss_severities.cvss_v4.score > 0
          ? adv.cvss_severities.cvss_v4.score
          : null;

      const cvssVector =
        adv.cvss?.vector_string ||
        adv.cvss_severities?.cvss_v3?.vector_string ||
        adv.cvss_severities?.cvss_v4?.vector_string ||
        null;

      const firstVuln = Array.isArray(adv.vulnerabilities) ? adv.vulnerabilities[0] : null;
      const eco = normalizeEcosystemLabel(firstVuln?.package?.ecosystem);
      const pkgName = firstVuln?.package?.name || null;
      const vendorProduct = eco && pkgName ? `${eco}: ${pkgName}` : pkgName || eco;

      const cwes = Array.isArray(adv.cwes)
        ? adv.cwes.map((c) => c.cwe_id).filter(Boolean).slice(0, 4)
        : [];

      const pubDate = adv.published_at ? new Date(adv.published_at) : new Date();
      const publishedIso = Number.isNaN(pubDate.getTime())
        ? new Date().toISOString()
        : pubDate.toISOString();

      items.push({
        id: primaryId,
        cve_id: cveId,
        ghsa_id: ghsaId,
        title: adv.summary || `${vendorProduct || primaryId} Security Advisory`,
        description: truncateText(adv.description || adv.summary || ''),
        source: 'GitHub Advisory (GHSA)',
        sources: ['GitHub Advisory (GHSA)'],
        severity: normalizeSeverity(adv.severity, cvssScore),
        cvss_score: cvssScore,
        cvss_vector: cvssVector,
        epss_score:
          typeof adv.epss?.percentage === 'number' ? adv.epss.percentage : null,
        epss_percentile:
          typeof adv.epss?.percentile === 'number' ? adv.epss.percentile : null,
        is_kev: false,
        ransomware_use: false,
        kev_due_date: null,
        ecosystem: eco,
        vendor_product: vendorProduct,
        affected_versions: firstVuln?.vulnerable_version_range || null,
        patched_versions: firstVuln?.first_patched_version || null,
        cwes,
        published_at: publishedIso,
        relative_time: formatRelativeTime(new Date(publishedIso)),
        url: isSafeHttpUrl(adv.html_url)
          ? adv.html_url
          : `https://github.com/advisories/${encodeURIComponent(ghsaId || primaryId)}`,
        references: Array.isArray(adv.references)
          ? adv.references.filter(isSafeHttpUrl).slice(0, 5)
          : []
      });
    }
  } catch (err) {
    console.error('[-] Failed fetching GHSA advisories:', err.message);
  }
  return items;
}

function extractNvdCvss(metrics) {
  if (!metrics) return { score: null, severity: null, vector: null };
  const candidates = [
    ...(metrics.cvssMetricV31 || []),
    ...(metrics.cvssMetricV40 || []),
    ...(metrics.cvssMetricV30 || []),
    ...(metrics.cvssMetricV2 || [])
  ];
  if (candidates.length === 0) return { score: null, severity: null, vector: null };
  const primary = candidates.find((c) => c.type === 'Primary') || candidates[0];
  const data = primary.cvssData || {};
  return {
    score: typeof data.baseScore === 'number' ? data.baseScore : null,
    severity: data.baseSeverity || primary.baseSeverity || null,
    vector: data.vectorString || null
  };
}

function extractNvdVendorProduct(configurations) {
  if (!Array.isArray(configurations)) return null;
  for (const cfg of configurations) {
    for (const node of cfg.nodes || []) {
      for (const match of node.cpeMatch || []) {
        const parts = String(match.criteria || '').split(':');
        if (parts.length >= 5 && parts[3] && parts[4] && parts[3] !== '*') {
          const vendor = parts[3].replace(/_/g, ' ');
          const product = parts[4].replace(/_/g, ' ');
          return `${vendor} ${product}`;
        }
      }
    }
  }
  return null;
}

async function fetchNvdRecent() {
  const items = [];
  try {
    const end = new Date();
    const start = new Date(end.getTime() - 5 * 24 * 3600 * 1000);
    const url = `${NVD_API_BASE}?pubStartDate=${encodeURIComponent(
      start.toISOString()
    )}&pubEndDate=${encodeURIComponent(end.toISOString())}&resultsPerPage=80`;

    console.log('[>] Querying NIST NVD 2.0 API (last 5 days)...');
    const res = await fetch(url, {
      headers: COMMON_HEADERS,
      signal: AbortSignal.timeout(20000)
    });

    if (!res.ok) {
      console.warn(`[!] NIST NVD API returned HTTP ${res.status}`);
      return items;
    }

    const payload = await res.json();
    const vulns = Array.isArray(payload.vulnerabilities) ? payload.vulnerabilities : [];
    console.log(`[+] Parsed ${vulns.length} recent CVE records from NIST NVD`);

    // Process newest first
    const sortedVulns = [...vulns].sort(
      (a, b) =>
        new Date(b.cve?.published || 0).getTime() -
        new Date(a.cve?.published || 0).getTime()
    );

    for (const entry of sortedVulns) {
      const cve = entry.cve;
      if (!cve || !cve.id) continue;
      if (String(cve.vulnStatus || '').toLowerCase().includes('rejected')) continue;

      const cveId = String(cve.id).toUpperCase();
      const enDesc =
        (cve.descriptions || []).find((d) => d.lang === 'en')?.value ||
        cve.descriptions?.[0]?.value ||
        '';

      const { score, severity, vector } = extractNvdCvss(cve.metrics);

      const cwes = [];
      for (const w of cve.weaknesses || []) {
        for (const desc of w.description || []) {
          if (desc.value && desc.value.startsWith('CWE-') && !cwes.includes(desc.value)) {
            cwes.push(desc.value);
          }
        }
      }

      const vendorProduct = extractNvdVendorProduct(cve.configurations);
      const firstSentence = enDesc.split(/(?<=\.)\s+/)[0] || cveId;
      const conciseTitle =
        firstSentence.length > 115 ? firstSentence.slice(0, 112) + '...' : firstSentence;

      const pubDate = cve.published ? new Date(cve.published) : new Date();
      const publishedIso = Number.isNaN(pubDate.getTime())
        ? new Date().toISOString()
        : pubDate.toISOString();

      const refs = (cve.references || [])
        .map((r) => r.url)
        .filter(isSafeHttpUrl)
        .slice(0, 5);

      items.push({
        id: cveId,
        cve_id: cveId,
        ghsa_id: null,
        title: cve.cisaVulnerabilityName || conciseTitle,
        description: truncateText(enDesc),
        source: 'NIST NVD',
        sources: ['NIST NVD'],
        severity: normalizeSeverity(severity, score),
        cvss_score: score,
        cvss_vector: vector,
        epss_score: null,
        epss_percentile: null,
        is_kev: Boolean(cve.cisaExploitAdd),
        ransomware_use: false,
        kev_due_date: cve.cisaActionDue || null,
        ecosystem: null,
        vendor_product: vendorProduct,
        affected_versions: null,
        patched_versions: null,
        cwes: cwes.slice(0, 4),
        published_at: publishedIso,
        relative_time: formatRelativeTime(new Date(publishedIso)),
        url: `https://nvd.nist.gov/vuln/detail/${cveId}`,
        references: refs
      });
    }
  } catch (err) {
    console.error('[-] Failed fetching NIST NVD:', err.message);
  }
  return items;
}

async function enrichWithEpss(items) {
  const cvesToLookup = Array.from(
    new Set(
      items
        .filter((i) => i.cve_id && i.epss_score === null)
        .map((i) => i.cve_id)
    )
  );

  if (cvesToLookup.length === 0) return;

  console.log(`[>] Enriching ${cvesToLookup.length} CVEs via FIRST.org EPSS API...`);
  const epssMap = new Map();
  const chunkSize = 75;

  for (let idx = 0; idx < cvesToLookup.length; idx += chunkSize) {
    const batch = cvesToLookup.slice(idx, idx + chunkSize);
    try {
      const res = await fetch(`${EPSS_API_BASE}?cve=${batch.join(',')}`, {
        headers: COMMON_HEADERS,
        signal: AbortSignal.timeout(12000)
      });
      if (!res.ok) continue;
      const json = await res.json();
      for (const row of json.data || []) {
        if (row.cve) {
          epssMap.set(String(row.cve).toUpperCase(), {
            epss: parseFloat(row.epss),
            percentile: parseFloat(row.percentile)
          });
        }
      }
    } catch (err) {
      console.warn('[!] EPSS batch lookup warning:', err.message);
    }
  }

  for (const item of items) {
    if (item.cve_id && epssMap.has(item.cve_id)) {
      const info = epssMap.get(item.cve_id);
      if (!Number.isNaN(info.epss)) item.epss_score = info.epss;
      if (!Number.isNaN(info.percentile)) item.epss_percentile = info.percentile;
    }
  }
}

function mergeVulnerabilityItems(primary, secondary) {
  const combinedSources = Array.from(new Set([...primary.sources, ...secondary.sources]));
  const cvss_score = primary.cvss_score ?? secondary.cvss_score;
  const severity =
    primary.severity !== 'UNKNOWN'
      ? primary.severity
      : normalizeSeverity(secondary.severity, cvss_score);

  // Keep the most recent published/added timestamp so newly added KEVs surface accurately
  const primaryTime = new Date(primary.published_at).getTime();
  const secondaryTime = new Date(secondary.published_at).getTime();
  const newestIso =
    secondaryTime > primaryTime ? secondary.published_at : primary.published_at;

  return {
    ...primary,
    cve_id: primary.cve_id || secondary.cve_id,
    ghsa_id: primary.ghsa_id || secondary.ghsa_id,
    title:
      primary.source === 'CISA KEV'
        ? primary.title
        : secondary.source === 'CISA KEV'
        ? secondary.title
        : primary.title.length >= secondary.title.length
        ? primary.title
        : secondary.title,
    description:
      primary.description.length >= secondary.description.length
        ? primary.description
        : secondary.description,
    sources: combinedSources,
    severity,
    cvss_score,
    cvss_vector: primary.cvss_vector || secondary.cvss_vector,
    epss_score: primary.epss_score ?? secondary.epss_score,
    epss_percentile: primary.epss_percentile ?? secondary.epss_percentile,
    is_kev: primary.is_kev || secondary.is_kev,
    ransomware_use: primary.ransomware_use || secondary.ransomware_use,
    kev_due_date: primary.kev_due_date || secondary.kev_due_date,
    ecosystem: primary.ecosystem || secondary.ecosystem,
    vendor_product: primary.vendor_product || secondary.vendor_product,
    affected_versions: primary.affected_versions || secondary.affected_versions,
    patched_versions: primary.patched_versions || secondary.patched_versions,
    cwes: Array.from(new Set([...primary.cwes, ...secondary.cwes])).slice(0, 5),
    published_at: newestIso,
    references: Array.from(new Set([...primary.references, ...secondary.references])).slice(0, 6)
  };
}

async function updateVulnerabilities() {
  console.log('[*] Fetching authoritative open-source & national vulnerability databases...');

  const [{ kevLookup, recentKevItems }, ghsaItems, nvdItems] = await Promise.all([
    fetchCisaKev(),
    fetchGhsaAdvisories(),
    fetchNvdRecent()
  ]);

  const allFetched = [...recentKevItems, ...ghsaItems, ...nvdItems];

  if (allFetched.length === 0) {
    console.log('[!] No vulnerability items fetched; preserving existing dataset.');
    return;
  }

  // Load existing items as fallback history
  let existingItems = [];
  if (fs.existsSync(VULNS_FILE)) {
    try {
      const raw = fs.readFileSync(VULNS_FILE, 'utf-8');
      const match = raw.match(
        /export const VULNERABILITIES: VulnerabilityItem\[\] = (\[[\s\S]*\]);/
      );
      if (match) {
        existingItems = JSON.parse(match[1]);
      }
    } catch {
      // ignore parse failure on empty/initial file
    }
  }

  // Deduplicate and cross-merge by CVE ID (or GHSA ID when no CVE exists)
  const itemMap = new Map();
  for (const item of [...allFetched, ...existingItems]) {
    const key = (item.cve_id || item.ghsa_id || item.id).toUpperCase();

    // Cross-reference every CVE against the full CISA KEV catalog
    if (item.cve_id && kevLookup.has(item.cve_id.toUpperCase())) {
      const kevEntry = kevLookup.get(item.cve_id.toUpperCase());
      item.is_kev = true;
      item.ransomware_use =
        item.ransomware_use ||
        String(kevEntry.knownRansomwareCampaignUse || '').toLowerCase() === 'known';
      item.kev_due_date = item.kev_due_date || kevEntry.dueDate || null;
      if (!item.sources.includes('CISA KEV')) {
        item.sources.push('CISA KEV');
      }
      if (!item.vendor_product && (kevEntry.vendorProject || kevEntry.product)) {
        item.vendor_product = [kevEntry.vendorProject, kevEntry.product]
          .filter(Boolean)
          .join(' ');
      }
    }

    if (itemMap.has(key)) {
      itemMap.set(key, mergeVulnerabilityItems(itemMap.get(key), item));
    } else {
      itemMap.set(key, item);
    }
  }

  const merged = Array.from(itemMap.values())
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 150);

  await enrichWithEpss(merged);

  for (const item of merged) {
    // Upgrade CISA KEV items whose CVSS wasn't populated yet if still UNKNOWN
    if (item.is_kev && item.severity === 'UNKNOWN') {
      item.severity = 'HIGH';
    }
    if (item.cvss_score !== null) {
      item.severity = normalizeSeverity(item.severity, item.cvss_score);
    }
    item.relative_time = formatRelativeTime(new Date(item.published_at));
  }

  const output = `import { VulnerabilityItem } from "../types/vulnerability";\n\nexport const VULNERABILITIES: VulnerabilityItem[] = ${JSON.stringify(
    merged,
    null,
    2
  )};\n`;

  fs.writeFileSync(VULNS_FILE, output, 'utf-8');
  console.log(`[+] Successfully wrote ${merged.length} authoritative vulnerabilities to ${VULNS_FILE}`);
}

updateVulnerabilities().catch((err) => {
  console.error('[-] Fatal error running update-vulns:', err);
  process.exit(1);
});
