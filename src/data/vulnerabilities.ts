import { VulnerabilityItem } from "../types/vulnerability";

export const VULNERABILITIES: VulnerabilityItem[] = [
  {
    "id": "CVE-2026-114516",
    "cve_id": "CVE-2026-114516",
    "ghsa_id": "GHSA-mc8w-wjhw-45x5",
    "title": "Etherpad: Pre-auth arbitrary file read",
    "description": "An unauthenticated path‑traversal / arbitrary file read vulnerability in Etherpad's /static/* handler allows any remote, unauthenticated user to read any file on the server's filesystem (e.g. GET /static/plugins/ep_etherpad-lite/static/..%5C..%5C..%5C..%5C..%5C..%5C..%5Cetc/passwd returns /etc/passwd) available to the user running the etherpad software. Because the endpoint is mounted before the authen...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: ep_etherpad-lite",
    "affected_versions": ">= 1.8.14, < 3.3.3",
    "patched_versions": "3.3.3",
    "cwes": [
      "CWE-22",
      "CWE-200",
      "CWE-306"
    ],
    "published_at": "2026-11-20T00:23:45.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-mc8w-wjhw-45x5",
    "references": [
      "https://github.com/ether/etherpad/security/advisories/GHSA-mc8w-wjhw-45x5",
      "https://github.com/ether/etherpad/pull/8081",
      "https://github.com/ether/etherpad/commit/9c8d16d50e2fdfd9693ab35c43280410cb4db2fc",
      "https://github.com/advisories/GHSA-mc8w-wjhw-45x5"
    ]
  },
  {
    "id": "CVE-2026-103033",
    "cve_id": "CVE-2026-103033",
    "ghsa_id": "GHSA-gfwj-45pc-w6r5",
    "title": "ALTCHA: Nil-map panic (pre-verification DoS) in v1 parseServerSignature on malformed VerificationData",
    "description": "`parseServerSignature` in the v1 module only initializes `ServerSignatureVerificationData.Extra` inside the `if err == nil` branch after `url.ParseQuery(parsedPayload.VerificationData)`. Go's `url.ParseQuery` returns the successfully-parsed pairs together with a non-nil error when the query string contains a malformed percent-escape. A subsequent loop unconditionally writes unknown keys into `Extra`, r...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/altcha-org/altcha-lib-go/v2",
    "affected_versions": ">= 2.0.0, < 2.1.0",
    "patched_versions": "2.1.0",
    "cwes": [
      "CWE-248",
      "CWE-476"
    ],
    "published_at": "2026-11-20T00:21:19.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-gfwj-45pc-w6r5",
    "references": [
      "https://github.com/altcha-org/altcha-lib-go/security/advisories/GHSA-gfwj-45pc-w6r5",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-103033",
      "https://github.com/altcha-org/altcha-lib-go/commit/2c4fc27a7b2d5b89f7175676445efcacc564c27c",
      "https://github.com/altcha-org/altcha-lib-go/releases/tag/v2.1.0",
      "https://github.com/advisories/GHSA-gfwj-45pc-w6r5"
    ]
  },
  {
    "id": "CVE-2026-103025",
    "cve_id": "CVE-2026-103025",
    "ghsa_id": "GHSA-7hvw-3c2q-45qg",
    "title": "bep/imagemeta: Unbounded memory allocation decoding PNG `zTXt` \"Raw profile type iptc\" chunks",
    "description": "A crafted PNG can make `imagemeta.Decode` allocate memory far in excess of the input file's size, leading to memory exhaustion. Two separate paths in the `zTXt` \"Raw profile type iptc\" branch are affected: the declared chunk length drives an allocation directly, and the embedded zlib stream is decompressed without an output bound. A 42-byte file allocated 256 MB, and a 127 KB file allocated 460 MB. Deni...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/bep/imagemeta",
    "affected_versions": "< 0.17.3",
    "patched_versions": "0.17.3",
    "cwes": [
      "CWE-409",
      "CWE-789"
    ],
    "published_at": "2026-11-20T00:20:52.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-7hvw-3c2q-45qg",
    "references": [
      "https://github.com/bep/imagemeta/security/advisories/GHSA-7hvw-3c2q-45qg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-103025",
      "https://github.com/bep/imagemeta/pull/69",
      "https://github.com/bep/imagemeta/commit/2289fdf83fcd238d86f72e65c588da687c998437",
      "https://github.com/bep/imagemeta/releases/tag/v0.17.3"
    ]
  },
  {
    "id": "CVE-2026-102945",
    "cve_id": "CVE-2026-102945",
    "ghsa_id": "GHSA-v6w5-38cf-pcv8",
    "title": "Aether Project amf: panic on an unrecovered NGAP goroutine",
    "description": "HandlePathSwitchRequest guards the UESecurityCapabilities IE for presence but never for length, and the extensible APER type silently yields an empty bit string, so six unguarded index-zero reads panic on an unrecovered goroutine and terminate the AMF. The AMF is the control-plane entry point for a 5G core, so terminating it drops mobility management for every subscriber. Confirmed at HEAD daed5a2 (pres...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/omec-project/amf",
    "affected_versions": "< 1.7.1-0.20260725031321-d28042aaaea0",
    "patched_versions": "1.7.1-0.20260725031321-d28042aaaea0",
    "cwes": [
      "CWE-125",
      "CWE-248",
      "CWE-1284"
    ],
    "published_at": "2026-11-20T00:20:38.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-v6w5-38cf-pcv8",
    "references": [
      "https://github.com/omec-project/amf/security/advisories/GHSA-v6w5-38cf-pcv8",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-102945",
      "https://github.com/omec-project/amf/pull/767",
      "https://github.com/omec-project/amf/commit/d28042aaaea0221c5ea93c3e069a1dd5e7436f4c",
      "https://github.com/omec-project/amf/releases/tag/v3.1.6"
    ]
  },
  {
    "id": "CVE-2026-63012",
    "cve_id": "CVE-2026-63012",
    "ghsa_id": "GHSA-wgvx-x5g3-9v29",
    "title": "baserCMS administrative API authorization bypass through session fallback",
    "description": "An authorization bypass occurs against the API endpoint `/baser/api/admin/` by abusing the session authentication fallback. The mail settings are used here as an example. Admin side: https://github.com/baserproject/basercms/blob/master/plugins/baser-core/config/permission.php#L100 With `auth => false`, it is not accessible with operator privileges. API side: https://github.com/baserproject/...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): baserproject/baser-core",
    "affected_versions": "<= 5.2.3",
    "patched_versions": "5.3.0",
    "cwes": [
      "CWE-290"
    ],
    "published_at": "2026-11-20T00:18:35.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-wgvx-x5g3-9v29",
    "references": [
      "https://github.com/baserproject/basercms/security/advisories/GHSA-wgvx-x5g3-9v29",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63012",
      "https://github.com/baserproject/basercms/commit/2d7f74d3d5d584b9478c210016b81a1b7c30e9fb",
      "https://github.com/baserproject/basercms/commit/464227b8770704076ee6eddd4bd464c184786eca",
      "https://github.com/baserproject/basercms/releases/tag/5.3.0"
    ]
  },
  {
    "id": "CVE-2026-62955",
    "cve_id": "CVE-2026-62955",
    "ghsa_id": "GHSA-2pj4-v76f-wjvx",
    "title": "baserCMS: Path Traversal Bypass via realpath() in BcThemeFileService (CVE-2026-30940 Patch Bypass)",
    "description": "The security patch introduced in baserCMS 5.2.3 to address CVE-2026-30940 / [GHSA-c5c6-37vq-pjcq](https://github.com/baserproject/basercms/security/advisories/GHSA-c5c6-37vq-pjcq) is **incomplete**. The patch added a `realpath()`-based directory traversal check in `BcThemeFileService::getFullpath()`, but the check is **entirely skipped** when `realpath($baseDir)` returns `false` — which occurs whenever...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): baserproject/baser-core",
    "affected_versions": "< 5.3.0",
    "patched_versions": "5.3.0",
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-20T00:17:47.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-2pj4-v76f-wjvx",
    "references": [
      "https://github.com/baserproject/basercms/security/advisories/GHSA-2pj4-v76f-wjvx",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-62955",
      "https://github.com/baserproject/basercms/commit/464227b8770704076ee6eddd4bd464c184786eca",
      "https://github.com/baserproject/basercms/commit/c650017acf5dfbfd15eb2f3eda07967bcb002be2",
      "https://github.com/baserproject/bc-theme-file/commit/a8f90096f13eca576a87cb25aa02e8f54642af7e"
    ]
  },
  {
    "id": "CVE-2026-77382",
    "cve_id": "CVE-2026-77382",
    "ghsa_id": "GHSA-25rm-9wvm-m38v",
    "title": "falcon-rust: Discrete-Gaussian sampler runs at 2^-33 precision, far below Falcon's requirement (reference KAT vectors no longer pass)",
    "description": "**Reporter:** Connor Webber **Package:** `falcon-rust` (crates.io), repository `github.com/aszepieniec/falcon-rust` **Affected:** v0.1.3 and the current `master` (HEAD `cfa1b35`). Regression introduced in commit `bf2cf00`. **Component:** discrete-Gaussian sampler, `src/samplerz.rs` (`approx_exp`, `ber_exp`, `sampler_z`) **Status:** Confirmed by source review and by empirical measurement of the crate's own compiled...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): falcon-rust",
    "affected_versions": "<= 0.1.3",
    "patched_versions": "0.2.0",
    "cwes": [
      "CWE-1240"
    ],
    "published_at": "2026-11-20T00:17:04.000Z",
    "relative_time": "11h ago",
    "url": "https://github.com/advisories/GHSA-25rm-9wvm-m38v",
    "references": [
      "https://github.com/aszepieniec/falcon-rust/security/advisories/GHSA-25rm-9wvm-m38v",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77382",
      "https://github.com/aszepieniec/falcon-rust/commit/930d766256f9d67ec9b6d437557286cf47f042ca",
      "https://github.com/aszepieniec/falcon-rust/commit/bf2cf000e63a9803f7ab1a34f629a5a0e9c49cf6",
      "https://github.com/aszepieniec/falcon-rust/releases/tag/v0.2.0"
    ]
  },
  {
    "id": "CVE-2026-77378",
    "cve_id": "CVE-2026-77378",
    "ghsa_id": "GHSA-r7h9-qx4h-77j5",
    "title": "Bolt ListFormatHelper SQL injection",
    "description": "SQL Injection in ListFormatHelper allows authenticated users with the upload permission to execute arbitrary SQL queries and exfiltrate sensitive database contents through the /async/select-options endpoint when general/caching/list_format is enabled. This has been patched in Bolt 6.1.4.",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:N/I:H/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): bolt/core",
    "affected_versions": "< 6.1.4",
    "patched_versions": "6.1.4",
    "cwes": [
      "CWE-89"
    ],
    "published_at": "2026-11-20T00:15:55.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-r7h9-qx4h-77j5",
    "references": [
      "https://github.com/bolt/core/security/advisories/GHSA-r7h9-qx4h-77j5",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77378",
      "https://github.com/Vondry/bolt-cms/pull/2",
      "https://github.com/bolt/core/commit/2818347a7ebd399a036f35ada750f0b151464489",
      "https://github.com/bolt/core/releases/tag/6.1.4"
    ]
  },
  {
    "id": "CVE-2026-77380",
    "cve_id": "CVE-2026-77380",
    "ghsa_id": "GHSA-3xjf-9q55-vxw4",
    "title": "Bolt: Prevent SSRF due to unchecked followed redirects",
    "description": "The `/bolt/async/upload-url` and `/bolt/async/embed` endpoints validated only the **submitted** URL before fetching it server-side, but the fetch then **followed redirects to destinations that were never re-validated**. This allowed an authenticated user to bypass the SSRF guard (`UrlSafetyChecker`) and make the server issue requests to internal/cloud-metadata addresses. This issue has been ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): bolt/core",
    "affected_versions": "< 6.1.5",
    "patched_versions": "6.1.5",
    "cwes": [
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:15:44.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-3xjf-9q55-vxw4",
    "references": [
      "https://github.com/bolt/core/security/advisories/GHSA-3xjf-9q55-vxw4",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77380",
      "https://github.com/Vondry/bolt-cms/pull/4",
      "https://github.com/bolt/core/commit/41d7aaf73f7b75c70819208cde513da70f0d2055",
      "https://github.com/bolt/core/releases/tag/6.1.5"
    ]
  },
  {
    "id": "CVE-2026-77379",
    "cve_id": "CVE-2026-77379",
    "ghsa_id": "GHSA-6358-jg5p-hmjj",
    "title": "Bolt: Information disclosure through unfiltered public relation API endpoint",
    "description": "A missing access-control filter in the public Relation API allowed unauthenticated users to discover metadata about unpublished, draft, and viewless content through REST and GraphQL endpoints. This has been patched in Bolt 6.1.4.",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): bolt/core",
    "affected_versions": "< 6.1.4",
    "patched_versions": "6.1.4",
    "cwes": [
      "CWE-402"
    ],
    "published_at": "2026-11-20T00:15:23.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-6358-jg5p-hmjj",
    "references": [
      "https://github.com/bolt/core/security/advisories/GHSA-6358-jg5p-hmjj",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77379",
      "https://github.com/Vondry/bolt-cms/pull/1",
      "https://github.com/bolt/core/commit/577b2232209c9285143a2f505ca306416b38f3f9",
      "https://github.com/bolt/core/releases/tag/6.1.4"
    ]
  },
  {
    "id": "CVE-2026-77377",
    "cve_id": "CVE-2026-77377",
    "ghsa_id": "GHSA-2535-j2pq-qq4r",
    "title": "Bolt: Server-Side Request Forgery (SSRF) in URL-upload and embed endpoints",
    "description": "Two authenticated backend endpoints fetched a user-supplied URL server-side with no protection against internal targets. This has been patched in Bolt 6.1.4.",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): bolt/core",
    "affected_versions": "< 6.1.4",
    "patched_versions": "6.1.4",
    "cwes": [
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:14:42.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-2535-j2pq-qq4r",
    "references": [
      "https://github.com/bolt/core/security/advisories/GHSA-2535-j2pq-qq4r",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77377",
      "https://github.com/Vondry/bolt-cms/pull/3",
      "https://github.com/bolt/core/commit/4be8861fb5dd3706db363598631026d683bbf4b7",
      "https://github.com/bolt/core/commit/c5686bfacc4461cb141b38cc5ff00d7bd224f5f2"
    ]
  },
  {
    "id": "CVE-2026-77376",
    "cve_id": "CVE-2026-77376",
    "ghsa_id": "GHSA-xr6g-7g83-j865",
    "title": "Bolt: Open redirect enables post-authentication redirection to arbitrary domains",
    "description": "Open redirect vulnerabilities in LoginFormAuthenticator allow attackers to redirect users to attacker-controlled domains after login success or login failure, enabling phishing attacks and potential token theft. This has been patched in Bolt 6.1.4.",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): bolt/core",
    "affected_versions": "< 6.1.4",
    "patched_versions": "6.1.4",
    "cwes": [
      "CWE-601"
    ],
    "published_at": "2026-11-20T00:14:31.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-xr6g-7g83-j865",
    "references": [
      "https://github.com/bolt/core/security/advisories/GHSA-xr6g-7g83-j865",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77376",
      "https://github.com/bolt/core/commit/db37ed5d7563f19e57597671598e284c9b34456c",
      "https://github.com/bolt/core/releases/tag/6.1.4",
      "https://github.com/advisories/GHSA-xr6g-7g83-j865"
    ]
  },
  {
    "id": "CVE-2026-77369",
    "cve_id": "CVE-2026-77369",
    "ghsa_id": "GHSA-wj7x-58c2-5793",
    "title": "Daptin: Broken Access Control (IDOR) in the generic YJS collaboration endpoint",
    "description": "Daptin registers a generic WebSocket endpoint, `GET /yjs/:documentName`, for real-time collaborative document editing (YJS/CRDT). Unlike its purpose-built sibling route, this generic endpoint performs no per-resource authorization check - it only verifies that *some* user session exists. Because the document store parses `:documentName` as `typename.referenceId.columnName` and fetches that row's real c...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.6,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/daptin/daptin",
    "affected_versions": ">= 0.11.4, < 0.12.30",
    "patched_versions": "0.12.30",
    "cwes": [
      "CWE-639",
      "CWE-862",
      "CWE-863"
    ],
    "published_at": "2026-11-20T00:14:14.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-wj7x-58c2-5793",
    "references": [
      "https://github.com/daptin/daptin/security/advisories/GHSA-wj7x-58c2-5793",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77369",
      "https://github.com/daptin/daptin/commit/a1a3c48f88ce30632a57d3fe6a971033b23bd394",
      "https://github.com/daptin/daptin/releases/tag/v0.12.30",
      "https://github.com/advisories/GHSA-wj7x-58c2-5793"
    ]
  },
  {
    "id": "CVE-2026-77367",
    "cve_id": "CVE-2026-77367",
    "ghsa_id": "GHSA-hq2p-f2vj-v3cm",
    "title": "Daptin: Unauthenticated SQL Injection via the `sort` query parameter on every entity list endpoint",
    "description": "An unauthenticated attacker can inject arbitrary SQL through the `sort` query parameter accepted by Daptin's generic entity list endpoint (`GET /api/<entity>`), which every table in a Daptin instance exposes. The parameter is concatenated into raw SQL identifiers with no validation that the referenced column exists, unlike a sibling code path in the same file that received exactly this validation as th...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/daptin/daptin",
    "affected_versions": "<= 0.12.29",
    "patched_versions": "0.12.30",
    "cwes": [
      "CWE-20",
      "CWE-89"
    ],
    "published_at": "2026-11-20T00:13:19.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-hq2p-f2vj-v3cm",
    "references": [
      "https://github.com/daptin/daptin/security/advisories/GHSA-hq2p-f2vj-v3cm",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77367",
      "https://github.com/daptin/daptin/commit/b0bcc1318832b9055781f032853ef9d2264652cf",
      "https://github.com/daptin/daptin/releases/tag/v0.12.30",
      "https://github.com/advisories/GHSA-hq2p-f2vj-v3cm"
    ]
  },
  {
    "id": "CVE-2026-77359",
    "cve_id": "CVE-2026-77359",
    "ghsa_id": "GHSA-9x8x-crjq-g64h",
    "title": "Jupyter MCP Server: Browser DNS rebinding can hijack the Jupyter backend through management routes",
    "description": "Standalone `streamable-http` mode in `datalayer/jupyter-mcp-server` rejects forged `Host` and `Origin` headers on `/mcp`, but custom management routes mounted on the same application do not get the same browser-origin protection. A malicious website can keep an attacker origin while its hostname resolves to `127.0.0.1` or a private target address, then send `PUT /api/connect` to replace the MCP server's active Jup...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:H/SC:H/SI:H/SA:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: jupyter-mcp-server",
    "affected_versions": "<= 1.0.2",
    "patched_versions": "1.0.3",
    "cwes": [
      "CWE-350"
    ],
    "published_at": "2026-11-20T00:12:51.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-9x8x-crjq-g64h",
    "references": [
      "https://github.com/datalayer/jupyter-mcp-server/security/advisories/GHSA-9x8x-crjq-g64h",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77359",
      "https://github.com/datalayer/jupyter-mcp-server/pull/262",
      "https://github.com/datalayer/jupyter-mcp-server/commit/c2e98fca2df1bbd608451ec416aaa38a4",
      "https://github.com/datalayer/jupyter-mcp-server/releases/tag/v1.0.3"
    ]
  },
  {
    "id": "CVE-2026-77318",
    "cve_id": "CVE-2026-77318",
    "ghsa_id": "GHSA-24pw-rf5p-mgp7",
    "title": "Jupyter MCP Server: Unauthenticated management routes can hijack the Jupyter backend in standalone HTTP mode",
    "description": "Standalone `streamable-http` mode in `datalayer/jupyter-mcp-server` requires `MCP_TOKEN` for `/mcp`, but the custom management routes mounted on the same application do not enforce that token. An unauthenticated network caller can invoke `PUT /api/connect`, choose the Jupyter backend URL and token fields, reset the server context, and make the MCP server start a kernel client against attacker-controlled infrastruc...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:L/VI:H/VA:L/SC:H/SI:H/SA:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: jupyter-mcp-server",
    "affected_versions": "<= 1.0.2",
    "patched_versions": "1.0.3",
    "cwes": [
      "CWE-306"
    ],
    "published_at": "2026-11-20T00:12:14.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-24pw-rf5p-mgp7",
    "references": [
      "https://github.com/datalayer/jupyter-mcp-server/security/advisories/GHSA-24pw-rf5p-mgp7",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77318",
      "https://github.com/datalayer/jupyter-mcp-server/pull/262",
      "https://github.com/datalayer/jupyter-mcp-server/commit/c2e98fca2df1bbd608451ec416aaa38a4d246fc5",
      "https://github.com/datalayer/jupyter-mcp-server/releases/tag/v1.0.3"
    ]
  },
  {
    "id": "CVE-2026-77316",
    "cve_id": "CVE-2026-77316",
    "ghsa_id": "GHSA-6pm8-6f34-9v3g",
    "title": "Flyto2 Core: SSRF guard bypass via DNS rebinding (validate_url_ssrf resolves-then-connects without pinning)",
    "description": "[MEDIUM] SSRF guard bypass via DNS rebinding — validate_url_ssrf resolves-then-connects without pinning - **CWE:** CWE-918 (SSRF) / CWE-367 (TOCTOU). - **CVSS v3.1:** `AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N` = **6.8 Medium** (AC:H — needs attacker-controlled DNS with a low/zero TTL and to flip the answer between the guard's lookup and the connection's lookup; S:C — reaches internal/metadata services the guard is me...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: flyto-core",
    "affected_versions": "<= 2.26.7",
    "patched_versions": "2.26.8",
    "cwes": [
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:11:24.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-6pm8-6f34-9v3g",
    "references": [
      "https://github.com/flytohub/flyto-core/security/advisories/GHSA-6pm8-6f34-9v3g",
      "https://github.com/flytohub/flyto-core/commit/bf748df864d348004cf45d830bc59f62c5c4a58a",
      "https://github.com/flytohub/flyto-core/releases/tag/v2.26.8",
      "https://github.com/advisories/GHSA-6pm8-6f34-9v3g"
    ]
  },
  {
    "id": "CVE-2026-77315",
    "cve_id": "CVE-2026-77315",
    "ghsa_id": "GHSA-2mr3-rxrq-238c",
    "title": "Flyto2 Core: http.paginate follows server-supplied next-page URLs (Link header / cursor) without SSRF revalidation",
    "description": "`http.paginate` validates only the initial `base_url`, then follows server-supplied pagination targets (RFC 5988 `Link: rel=\"next\"` headers, cursor/offset URLs) in a loop **without revalidating each follow-up URL**. An attacker's first-page response can point `next` at an internal address, causing a second-order SSRF whose internal body is aggregated into the returned items. Root Cause `src/core/modu...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: flyto-core",
    "affected_versions": "<= 2.26.7",
    "patched_versions": "2.26.8",
    "cwes": [
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:10:14.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-2mr3-rxrq-238c",
    "references": [
      "https://github.com/flytohub/flyto-core/security/advisories/GHSA-2mr3-rxrq-238c",
      "https://github.com/flytohub/flyto-core/commit/bbb6f1cfec22fee1ea0e6ecf1129d7103c85e09f",
      "https://github.com/flytohub/flyto-core/releases/tag/v2.26.8",
      "https://github.com/advisories/GHSA-2mr3-rxrq-238c"
    ]
  },
  {
    "id": "CVE-2026-77313",
    "cve_id": "CVE-2026-77313",
    "ghsa_id": "GHSA-pfg2-w999-497v",
    "title": "Flyto2 Core: SSRF guard validates the resolved IP but connects by hostname, allowing DNS-rebinding TOCTOU",
    "description": "`validate_url_ssrf` resolves the hostname, checks the IP against private ranges, then **discards the IP and returns the hostname URL string**. aiohttp performs a fresh, independent DNS resolution at connect time. An attacker controlling DNS for a hostname (TTL 0, alternating public IP and internal IP) passes validation on the first lookup and connects to the internal IP on the second — a classic check-t...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: flyto-core",
    "affected_versions": "<= 2.26.7",
    "patched_versions": "2.26.8",
    "cwes": [
      "CWE-367",
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:09:23.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-pfg2-w999-497v",
    "references": [
      "https://github.com/flytohub/flyto-core/security/advisories/GHSA-pfg2-w999-497v",
      "https://github.com/flytohub/flyto-core/commit/bf748df864d348004cf45d830bc59f62c5c4a58a",
      "https://github.com/flytohub/flyto-core/releases/tag/v2.26.8",
      "https://github.com/advisories/GHSA-pfg2-w999-497v"
    ]
  },
  {
    "id": "CVE-2026-77312",
    "cve_id": "CVE-2026-77312",
    "ghsa_id": "GHSA-p34x-fmph-9fjx",
    "title": "Flyto2 Core: Arbitrary file write via unguarded data.*/file.* modules (incomplete fix of CVE-2026-67429)",
    "description": "[CRITICAL] Arbitrary file write via unguarded `data.*` / `file.*` write modules — incomplete fix of GHSA-2956 - **CWE:** CWE-22 (Path Traversal) / CWE-73 (External Control of File Name or Path); impact reaches CWE-94 (code execution via file overwrite). - **CVSS v3.1:** `AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H` = **9.3 Critical** (S:C because a write escapes the intended sandbox confinement into the host filesystem ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 10,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:N/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: flyto-core",
    "affected_versions": "<= 2.26.7",
    "patched_versions": "2.26.8",
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-20T00:09:02.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-p34x-fmph-9fjx",
    "references": [
      "https://github.com/flytohub/flyto-core/security/advisories/GHSA-p34x-fmph-9fjx",
      "https://github.com/flytohub/flyto-core/commit/bbb6f1cfec22fee1ea0e6ecf1129d7103c85e09f",
      "https://github.com/flytohub/flyto-core/releases/tag/v2.26.8",
      "https://github.com/advisories/GHSA-p34x-fmph-9fjx"
    ]
  },
  {
    "id": "CVE-2026-59988",
    "cve_id": "CVE-2026-59988",
    "ghsa_id": "GHSA-86mf-q4h5-69gp",
    "title": "django-docutils unsafe Docutils defaults allow local file disclosure, SSRF, and stored XSS",
    "description": "django-docutils before `0.30.0` rendered reStructuredText through Docutils without protected web-safe defaults. Public rendering paths, including `publish_doctree`, `publish_html_from_source`, `publish_html_from_doctree`, `publish_parts_from_doctree`, the `{% rst %}` template tag, the `rst` template filter, `DocutilsTemplates`, and `DocutilsView`, could process attacker-controlled RST with Docutils dire...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: django-docutils",
    "affected_versions": "< 0.30.0",
    "patched_versions": "0.30.0",
    "cwes": [
      "CWE-22",
      "CWE-79",
      "CWE-200",
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:08:12.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-86mf-q4h5-69gp",
    "references": [
      "https://github.com/tony/django-docutils/security/advisories/GHSA-86mf-q4h5-69gp",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-59988",
      "https://github.com/tony/django-docutils/pull/457",
      "https://github.com/tony/django-docutils/commit/274caaf14c2368fafeb45f178094a34ba538f067",
      "https://github.com/tony/django-docutils/commit/57fd751a10ce2969e4ca2bde6a9094fa2e2ba0dd"
    ]
  },
  {
    "id": "CVE-2026-63415",
    "cve_id": "CVE-2026-63415",
    "ghsa_id": "GHSA-c3cj-3p6p-j822",
    "title": "Jane: $ref resolution performs SSRF + LFI (path traversal) at code-generation time (jane-php)",
    "description": "jane-php resolves external `$ref` targets at code-generation time via `file_get_contents($ref)` (jane-php/json-schema-runtime/Reference.php::doResolve) with no scheme/path restriction. An attacker-controlled OpenAPI document can therefore cause: `$ref: 'http://attacker/x'` -> SSRF (HTTP GET at gen time; response inlined = RFI); `$ref: '/abs/file'` -> LFI; `$ref: '../secret.yaml'` -> path-traversal LFI ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:A/VC:H/VI:L/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.00348,
    "epss_percentile": 0.29077,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): jane-php/open-api-3",
    "affected_versions": "< 7.12.0",
    "patched_versions": "7.12.0",
    "cwes": [
      "CWE-22",
      "CWE-98",
      "CWE-611",
      "CWE-918"
    ],
    "published_at": "2026-11-20T00:07:32.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-c3cj-3p6p-j822",
    "references": [
      "https://github.com/janephp/janephp/security/advisories/GHSA-c3cj-3p6p-j822",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63415",
      "https://github.com/janephp/janephp/pull/961",
      "https://github.com/janephp/janephp/commit/75f2bbf79ca2f2eeb13080a2cebded1263396b49",
      "https://github.com/janephp/janephp/releases/tag/v7.12.0"
    ]
  },
  {
    "id": "CVE-2026-63344",
    "cve_id": "CVE-2026-63344",
    "ghsa_id": "GHSA-p32v-8v8j-j534",
    "title": "Refitter allows arbitrary code execution through unescaped OpenAPI content-type values",
    "description": "Refitter emits the spec's content-type key (content map key in requestBody/responses) verbatim into a Refit `[Headers(\"Accept: <ct>\", \"Content-Type: <ct>\")]` attribute string without escaping `\"`. A crafted value survives Refitter's default OpenAPI validation, breaks out of the attribute and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and r...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
    "epss_score": 0.0035,
    "epss_percentile": 0.28708,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "NuGet",
    "vendor_product": "NuGet: Refitter",
    "affected_versions": "< 2.1.2",
    "patched_versions": "2.1.2",
    "cwes": [
      "CWE-94",
      "CWE-116"
    ],
    "published_at": "2026-11-20T00:06:52.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-p32v-8v8j-j534",
    "references": [
      "https://github.com/christianhelle/refitter/security/advisories/GHSA-p32v-8v8j-j534",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63344",
      "https://github.com/christianhelle/refitter/pull/1178",
      "https://github.com/christianhelle/refitter/commit/ab4d8e439d6f0ee82ad49ee15323978d70fe5a67",
      "https://github.com/christianhelle/refitter/releases/tag/2.1.2"
    ]
  },
  {
    "id": "CVE-2026-63346",
    "cve_id": "CVE-2026-63346",
    "ghsa_id": "GHSA-58x9-vjvp-6mx8",
    "title": "Refitter allows code execution through unescaped OpenAPI header parameter names",
    "description": "Refitter emits the spec's header parameter name (parameters[].name with in: header) verbatim into a Refit `[Header(\"<name>\")]` attribute string without escaping `\"`. A crafted value survives Refitter's default OpenAPI validation, breaks out of the attribute and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and reopens so the file stays valid....",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
    "epss_score": 0.0035,
    "epss_percentile": 0.28709,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "NuGet",
    "vendor_product": "NuGet: Refitter",
    "affected_versions": "< 2.1.2",
    "patched_versions": "2.1.2",
    "cwes": [
      "CWE-94",
      "CWE-116"
    ],
    "published_at": "2026-11-20T00:06:28.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-58x9-vjvp-6mx8",
    "references": [
      "https://github.com/christianhelle/refitter/security/advisories/GHSA-58x9-vjvp-6mx8",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63346",
      "https://github.com/christianhelle/refitter/pull/1178",
      "https://github.com/christianhelle/refitter/commit/63a19b03699a9c267d6fab5f758ec26484db83a1",
      "https://github.com/christianhelle/refitter/releases/tag/2.1.2"
    ]
  },
  {
    "id": "CVE-2026-63345",
    "cve_id": "CVE-2026-63345",
    "ghsa_id": "GHSA-3fhm-p725-h3g3",
    "title": "Refitter allows arbitrary code execution through unescaped OpenAPI paths",
    "description": "Refitter emits each OpenAPI path (the paths-object key) verbatim into a Refit `[Get(\"<path>\")]` attribute string, without escaping `\"` or restricting characters. A crafted single-line, /-prefixed path survives Refitter's default OpenAPI validation yet closes the attribute string and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and reopens a ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N",
    "epss_score": 0.0035,
    "epss_percentile": 0.28708,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "NuGet",
    "vendor_product": "NuGet: Refitter",
    "affected_versions": "< 2.1.2",
    "patched_versions": "2.1.2",
    "cwes": [
      "CWE-94",
      "CWE-1116"
    ],
    "published_at": "2026-11-20T00:06:04.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-3fhm-p725-h3g3",
    "references": [
      "https://github.com/christianhelle/refitter/security/advisories/GHSA-3fhm-p725-h3g3",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63345",
      "https://github.com/christianhelle/refitter/pull/1178",
      "https://github.com/christianhelle/refitter/commit/793d2632899c2022511dfc15e30725ef69073973",
      "https://github.com/christianhelle/refitter/releases/tag/2.1.2"
    ]
  },
  {
    "id": "CVE-2026-58208",
    "cve_id": "CVE-2026-58208",
    "ghsa_id": "GHSA-p957-7v2w-g93g",
    "title": "NATS Server: MQTT-over-WebSocket Path Can Crash WebSocket-Only JetStream Servers Before MQTT Is Enabled",
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server can accept client connections over WebSocket and can also support MQTT over WebSocket when MQTT is configured. Problem Description A WebSocket listener could route requests for the MQTT-over-WebSocket path into MQTT handling even when MQ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:N/I:N/A:H",
    "epss_score": 0.006,
    "epss_percentile": 0.49548,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/nats-io/nats-server/v2",
    "affected_versions": "< 2.12.12",
    "patched_versions": "2.12.12",
    "cwes": [
      "CWE-248"
    ],
    "published_at": "2026-11-20T00:05:17.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-p957-7v2w-g93g",
    "references": [
      "https://github.com/nats-io/nats-server/security/advisories/GHSA-p957-7v2w-g93g",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-58208",
      "https://github.com/nats-io/nats-server/commit/73b3dd9a5ea0fa7bf08b702338676355b29b5fb4",
      "https://github.com/nats-io/nats-server/commit/837536b98b3a9280b993282155ff2bdd3ca38c30",
      "https://github.com/nats-io/nats-server/releases/tag/v2.12.12"
    ]
  },
  {
    "id": "CVE-2026-58210",
    "cve_id": "CVE-2026-58210",
    "ghsa_id": "GHSA-r72h-j7qq-v6qg",
    "title": "NATS Server allows unauthenticated memory exhaustion through incomplete MQTT CONNECT packets",
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server supports MQTT clients, including authentication and parsing of MQTT `CONNECT` packets. Problem Description An unauthenticated MQTT client could cause the server to retain large incomplete MQTT `CONNECT` packets before authentication comp...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00742,
    "epss_percentile": 0.54529,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/nats-io/nats-server/v2",
    "affected_versions": "< 2.12.12",
    "patched_versions": "2.12.12",
    "cwes": [
      "CWE-400"
    ],
    "published_at": "2026-11-20T00:04:46.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-r72h-j7qq-v6qg",
    "references": [
      "https://github.com/nats-io/nats-server/security/advisories/GHSA-r72h-j7qq-v6qg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-58210",
      "https://github.com/nats-io/nats-server/commit/bce9ef39469e610aeddb819194ceb7f7edfc0861",
      "https://github.com/nats-io/nats-server/commit/e016e47bbf70304945f2ae9dc397e4862adefaf5",
      "https://github.com/nats-io/nats-server/releases/tag/v2.12.12"
    ]
  },
  {
    "id": "CVE-2026-58209",
    "cve_id": "CVE-2026-58209",
    "ghsa_id": "GHSA-7qmq-8cc4-hxwg",
    "title": "NATS Server MQTT retained messages and QoS replay bypass subscription deny rules",
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server MQTT support includes retained messages and QoS1+ durable delivery. NATS subscription permissions can allow broad wildcard subscriptions while denying more sensitive subjects. Problem Description MQTT retained message delivery and QoS1+ ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00342,
    "epss_percentile": 0.27507,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/nats-io/nats-server/v2",
    "affected_versions": "< 2.12.12",
    "patched_versions": "2.12.12",
    "cwes": [
      "CWE-863"
    ],
    "published_at": "2026-11-20T00:04:27.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-7qmq-8cc4-hxwg",
    "references": [
      "https://github.com/nats-io/nats-server/security/advisories/GHSA-7qmq-8cc4-hxwg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-58209",
      "https://github.com/nats-io/nats-server/commit/181b1f51f40b9954c57e9d478e051fb257679356",
      "https://github.com/nats-io/nats-server/commit/1c429b6fdc5afd4188cc5faf1127f6334896cd87",
      "https://github.com/nats-io/nats-server/releases/tag/v2.12.12"
    ]
  },
  {
    "id": "CVE-2026-62337",
    "cve_id": "CVE-2026-62337",
    "ghsa_id": "GHSA-x26x-7f4v-cqx7",
    "title": "snark-verifier: Halo 2 aggregation circuit mishandles point-at-infinity proof elements",
    "description": "The Halo 2 aggregation circuit could mishandle proof elements encoded as the point at infinity. When an assigned proof point appeared in an MSM term with constant scalar one, the Halo 2 loader used a scalar-one shortcut that passed the assigned point directly into the EC sum helper. The EC sum implementation used by that path assumed its inputs were non-identity points, while assigned proof points coul...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.00301,
    "epss_percentile": 0.22894,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): snark-verifier",
    "affected_versions": "< 0.2.5",
    "patched_versions": "0.2.6",
    "cwes": [
      "CWE-20"
    ],
    "published_at": "2026-11-20T00:01:59.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-x26x-7f4v-cqx7",
    "references": [
      "https://github.com/axiom-crypto/snark-verifier/security/advisories/GHSA-x26x-7f4v-cqx7",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-62337",
      "https://github.com/axiom-crypto/halo2-lib/commit/f53be0939e2accf0dd7672b1a4abe80af73dadf3",
      "https://github.com/axiom-crypto/snark-verifier/commit/364e82654c746b063aff528d8cb660890908278a",
      "https://github.com/axiom-crypto/snark-verifier/commit/bbfcc721d714bea0d44a27c8fc6c4736e73ca853"
    ]
  },
  {
    "id": "CVE-2026-128135",
    "cve_id": "CVE-2026-128135",
    "ghsa_id": "GHSA-wr3g-j6qj-xpgh",
    "title": "NLTK: ZIP package extraction follows in-root hardlinks and overwrites files outside the NLTK data root",
    "description": "NLTK ships a security wrapper, `nltk.pathsec.ZipFile`, that is meant to confine archive extraction to trusted data roots and to block link-based escapes. When `nltk.download()` installs a package, the extraction write opens each member's target path without checking whether that path is a hardlink to a file located outside the data root. A local actor who can write inside a shared or predictable NLTK da...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.9.4, <= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-59",
      "CWE-73"
    ],
    "published_at": "2026-11-19T23:59:15.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-wr3g-j6qj-xpgh",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-wr3g-j6qj-xpgh",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128135",
      "https://github.com/nltk/nltk/pull/3753",
      "https://github.com/nltk/nltk/commit/0e9898b7615b4ab3b023e868212316a489ece4f0",
      "https://github.com/nltk/nltk/commit/cf12a5e6a439fe1d722acd53d4309911faaaaf78"
    ]
  },
  {
    "id": "CVE-2026-128136",
    "cve_id": "CVE-2026-128136",
    "ghsa_id": "GHSA-c59x-vh6j-3w8v",
    "title": "NLTK: AllowlistUnpickler does not deny numpy submodule-local file-I/O sinks",
    "description": "`nltk.picklesec.allowlisted_pickle_load` keyed its denylist of dangerous globals by export name, so numpy's file-I/O callables that live in submodules and are not re-exported under `__module__ == \"numpy\"` were never matched. Under the broad `allowed_modules=(\"numpy\", \"scipy\", \"sklearn\")` allowance that `TransitionParser.parse(depgraphs, modelFile)` granted for model files, a crafted protocol 4 pickle c...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.10.0, < 3.10.4",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-502"
    ],
    "published_at": "2026-11-19T23:58:53.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-c59x-vh6j-3w8v",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-c59x-vh6j-3w8v",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128136",
      "https://github.com/nltk/nltk/pull/3757",
      "https://github.com/nltk/nltk/commit/a44a7af69bca87e92d9c4a701fcbbe4512e8d450",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-128137",
    "cve_id": "CVE-2026-128137",
    "ghsa_id": "GHSA-g58v-j9g9-5gfg",
    "title": "NLTK corpus-reader view methods bypass the scoped root sandbox via intermediate-directory symlinks",
    "description": "> **affected**: PyPI `nltk` `>= 3.9.4` — `CorpusReader.abspaths()`/`abspath()` and the `PlaintextCorpusReader` / `SyntaxCorpusReader` view methods > **dynamically reproduced**: `nltk` `3.9.4` (8/9, scoped-escape checks), `3.10.3` (wheel, 9/9 checks) and `master` `6818767b9` (9/9 checks) --- _Source references (`file:line`) are to commit `303f6e2b` (release tag `v3.10.3`). Line numbers in the released `nltk` wheel ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.9.4, < 3.10.4",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-59"
    ],
    "published_at": "2026-11-19T23:56:30.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-g58v-j9g9-5gfg",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-g58v-j9g9-5gfg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128137",
      "https://github.com/nltk/nltk/pull/3761",
      "https://github.com/nltk/nltk/commit/9f7cf06b4af4ca5c65381ed0abc17e989dc54400",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-128138",
    "cve_id": "CVE-2026-128138",
    "ghsa_id": "GHSA-x8q7-6c7m-52gw",
    "title": "NLTK incomplete fix: additional JVM/JAR sandbox bypass through unvalidated launcher tokens in java() command arguments",
    "description": "NLTK 3.10.3 contains security hardening intended to close JVM argument-injection and untrusted JAR/classpath execution paths in `nltk.internals.java()`, including the issue published as GHSA-m4rf-3fr8-xwx3. The patched `options` channel correctly rejects Java argument-file references such as `@/path/to/args` and launcher modes such as `-jar`. However, an additional argument channel remains: the caller-p...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.10.3, < 3.10.4",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-77",
      "CWE-88"
    ],
    "published_at": "2026-11-19T23:55:54.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-x8q7-6c7m-52gw",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-x8q7-6c7m-52gw",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128138",
      "https://github.com/nltk/nltk/pull/3771",
      "https://github.com/nltk/nltk/commit/b36212795a522d2b7b176cf0e0d9d8da489ba6e6",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-128139",
    "cve_id": "CVE-2026-128139",
    "ghsa_id": "GHSA-j8g8-j4j7-8j54",
    "title": "NLTK: XMLCorpusView comment and CDATA parsing permits quadratic CPU denial of service",
    "description": "> **affected**: PyPI `nltk` `>= 3.6` — `nltk.corpus.reader.xmldocs.XMLCorpusView` streaming read (and the `nps_chat` / `framenet` readers built on it) > **dynamically reproduced**: `3.6` (6/6 checks), `3.9.2` (6/6), `3.10.3` (6/6) and `develop` `6818767b9` (6/6) --- _Source references (`nltk/corpus/reader/xmldocs.py:NNN`) are to commit `6818767b99c24659107eb2be9bccd32a3d4bf045` (`develop`, `v3.10.3-15-g6818767b9`)...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.6, <= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-19T23:54:59.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-j8g8-j4j7-8j54",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-j8g8-j4j7-8j54",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128139",
      "https://github.com/nltk/nltk/commit/9cacbb95d97eaac7debb30d6e7decbe74d2c635f",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4",
      "https://github.com/advisories/GHSA-j8g8-j4j7-8j54"
    ]
  },
  {
    "id": "CVE-2026-128140",
    "cve_id": "CVE-2026-128140",
    "ghsa_id": "GHSA-pcm8-fqjx-rvx8",
    "title": "NLTK: Downloader cyclic collection indices cause an infinite closure walk",
    "description": "> **affected**: PyPI `nltk` `>= 3.6.7` — `nltk.downloader` index parsing (`Downloader._update_index`) > **dynamically reproduced**: `nltk` `3.6.7` (4/4 checks), `3.9.2` (4/4), `3.10.3` (4/4), and `develop` `6818767b9` (4/4) --- _Source references (`nltk/downloader.py:NNN`) are to commit `6818767b9` (`develop`, `v3.10.3-15-g6818767b9`). The `v3.10.3` tag and the released `3.10.3` wheel carry the identical code at t...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.6.7, < 3.10.4",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-835"
    ],
    "published_at": "2026-11-19T23:54:33.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-pcm8-fqjx-rvx8",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-pcm8-fqjx-rvx8",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-128140",
      "https://github.com/nltk/nltk/pull/3767",
      "https://github.com/nltk/nltk/commit/b77d329db934711e053520588b22b4ac73539fa2",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129221",
    "cve_id": "CVE-2026-129221",
    "ghsa_id": "GHSA-9ffx-rrgx-mhgx",
    "title": "NLTK: ARFF_Formatter Injects Weka ARFF Schema Directives via Attacker-Controlled Class Labels",
    "description": "`nltk.classify.weka.ARFF_Formatter` writes class labels directly into the Weka ARFF `@ATTRIBUTE '-label-' {...}` declaration without any ARFF quoting or escaping. An attacker who can contribute class labels to a training dataset can include ARFF metacharacters such as `}`, newlines, `@ATTRIBUTE`, and `@DATA` to break out of the nominal label list and inject attacker‑controlled ARFF schem...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-74"
    ],
    "published_at": "2026-11-19T23:54:17.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-9ffx-rrgx-mhgx",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-9ffx-rrgx-mhgx",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129221",
      "https://github.com/nltk/nltk/pull/3768",
      "https://github.com/nltk/nltk/commit/56031eabc1ac6e5a109cb78bb18d10e0b7589594",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129222",
    "cve_id": "CVE-2026-129222",
    "ghsa_id": "GHSA-rh8m-wqhc-qmrf",
    "title": "Natural Language Toolkit (NLTK): Uncontrolled recursion (crash DoS) in DependencyGraph.tree()/triples()",
    "description": "DependencyGraph.tree()/triples() walk the parsed dependency structure using plain, unbounded Python recursion — one stack frame per edge in the graph — and never use the class's own cycle detector. A crafted dependency-parse file with a few thousand chained tokens (an entirely ordinary-looking long sentence) crashes the process with an unhandled RecursionError the moment .tree() or .triples() is called...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:53:41.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-rh8m-wqhc-qmrf",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-rh8m-wqhc-qmrf",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129222",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/a74682757cee8c11128ad277d2f2bd0b8e1884ff",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129223",
    "cve_id": "CVE-2026-129223",
    "ghsa_id": "GHSA-8846-p9w9-5frf",
    "title": "Natural Language Toolkit (NLTK): Uncontrolled recursion (crash DoS) in Synset.tree()/acyclic_tree() via WordNet relation traversal",
    "description": "The recursive traversal engines behind WordNetCorpusReader's Synset.tree() and Synset.acyclic_tree() have no maximum call-depth safeguard and default to unlimited depth. They guard against literal cycles, but not against a long, genuinely acyclic relation chain — which exhausts the Python call stack the same way as the sibling DependencyGraph finding I reported separately. Real-world exploitability req...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:53:18.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-8846-p9w9-5frf",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-8846-p9w9-5frf",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129223",
      "https://github.com/nltk/nltk/commit/0e474a7d73c95b42aa2c792f364e4f9bf4096c56",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4",
      "https://github.com/advisories/GHSA-8846-p9w9-5frf"
    ]
  },
  {
    "id": "CVE-2026-129224",
    "cve_id": "CVE-2026-129224",
    "ghsa_id": "GHSA-3h95-x772-4765",
    "title": "NLTK: Uncontrolled recursion in CCG lexicon parser causes denial of service via deeply nested category input",
    "description": "Root Cause The CCG lexicon parser recurses on nested parenthesised categories without any depth bound. `matchBrackets` (`nltk/ccg/lexicon.py:154`) calls itself once per nested `(`, and `augParseCategory` (`nltk/ccg/lexicon.py:228,242`) recurses once per bracketed sub-category. Neither function tracks recursion depth nor checks `sys.getrecursionlimit()`, and the public entry point `fromstring` (`nltk/ccg/lexicon...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:52:54.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-3h95-x772-4765",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-3h95-x772-4765",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129224",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/30e93eb7b69021293e019042fe0cedb99c95b054",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129225",
    "cve_id": "CVE-2026-129225",
    "ghsa_id": "GHSA-xfcv-m889-fmqg",
    "title": "NLTK: Uncontrolled recursion in DependencyGraph traversal causes denial of service via deep dependency chains",
    "description": "Root Cause The dependency-graph traversal helpers recurse over dependency links without any depth bound or visited set. `DependencyGraph._tree` (`nltk/parse/dependencygraph.py:404`) recurses once per dependency link, `triples` (`nltk/parse/dependencygraph.py:432`) is a recursive generator, and `get_cycle_path` (`nltk/parse/dependencygraph.py:520`) recurses over dependencies. The neighbouring `contains_cycle` me...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:52:20.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-xfcv-m889-fmqg",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-xfcv-m889-fmqg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129225",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/a74682757cee8c11128ad277d2f2bd0b8e1884ff",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129226",
    "cve_id": "CVE-2026-129226",
    "ghsa_id": "GHSA-w3pv-xfw4-ghr7",
    "title": "NLTK: Uncontrolled recursion in semantic-logic type parser causes denial of service via nested type strings",
    "description": "Root Cause The semantic-logic type parser `read_type` (`nltk/sem/logic.py:866`) recurses on both halves of every `<a,b>` complex type (`nltk/sem/logic.py:882-884`) with no depth or length bound — only an `isinstance` assertion and a parenthesis-balance assertion. The `LogicParser.MAX_PARSE_DEPTH` guard (`nltk/sem/logic.py:107,294`) protects the expression parser but never runs on the `read_type` path, which is ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:51:48.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-w3pv-xfw4-ghr7",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-w3pv-xfw4-ghr7",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129226",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/2f4f0d47e2c452c89cabc2a5f761332d51066ea8",
      "https://github.com/nltk/nltk/commit/a8036c5e7f820ac09c96b969d6e7f19bfa6e6aeb"
    ]
  },
  {
    "id": "CVE-2026-129227",
    "cve_id": "CVE-2026-129227",
    "ghsa_id": "GHSA-63wh-5r5m-wxr7",
    "title": "NLTK: Uncontrolled recursion in Tree.fromlist causes denial of service via deeply nested list input",
    "description": "Root Cause `Tree.fromlist` (`nltk/tree/tree.py:767`) converts a nested list into a `Tree` by recursing once per nesting level (`nltk/tree/tree.py:780`) with no depth bound — its only validation is `type(l) == list and len(l) > 0`. The sibling constructor `Tree.fromstring` was hardened with a `MAX_TREE_DEPTH` cap (`nltk/tree/tree.py:31,695`) that rejects adversarially deep input with a bounded `ValueError`, but ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:51:08.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-63wh-5r5m-wxr7",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-63wh-5r5m-wxr7",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129227",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/ae4c5c900a81608026a43bd4ed17ff048c447c8c",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129228",
    "cve_id": "CVE-2026-129228",
    "ghsa_id": "GHSA-f2h2-f4fc-p978",
    "title": "NLTK: Uncontrolled recursion in Toolbox settings helpers causes denial of service via deeply nested input",
    "description": "Root Cause The Toolbox settings-tree helpers recurse over the parsed element tree without any depth bound. `_to_settings_string` (`nltk/toolbox.py:418`), `remove_blanks` (`nltk/toolbox.py:432`), `add_default_fields` (`nltk/toolbox.py:451`), `_sort_fields` (`nltk/toolbox.py:484`), and `add_blank_lines` (`nltk/toolbox.py:502,516`) each recurse once per element level with no depth counter or explicit stack. The pr...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:50:37.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-f2h2-f4fc-p978",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-f2h2-f4fc-p978",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129228",
      "https://github.com/nltk/nltk/pull/3885",
      "https://github.com/nltk/nltk/commit/0b6975377d0334af604d32c9d83b26b46e1d437c",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129229",
    "cve_id": "CVE-2026-129229",
    "ghsa_id": "GHSA-32p6-cwhc-8r78",
    "title": "NLTK: Compile-time regex DoS in NLTK search/tokenizer sinks: quadratic regex-engine compile bypasses the match-only timeout",
    "description": "NLTK exposes a compile-time regular-expression denial of service in its regex-search helpers. When an application passes untrusted text as the search pattern to `TokenSearcher.findall()` / `Text.findall()`, or as the tokenizer pattern to `RegexpTokenizer`, the pattern is handed to the third-party `regex` engine, whose compilation cost is roughly quadratic in the number of capturing groups. A short patte...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.10.0, <= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-400",
      "CWE-1333"
    ],
    "published_at": "2026-11-19T23:50:03.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-32p6-cwhc-8r78",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-32p6-cwhc-8r78",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129229",
      "https://github.com/nltk/nltk/pull/3895",
      "https://github.com/nltk/nltk/commit/002bcf714ef8cb8baf94436f4be73e5516914412",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129230",
    "cve_id": "CVE-2026-129230",
    "ghsa_id": "GHSA-53pg-5qp8-mhvr",
    "title": "NLTK: Uncontrolled recursion in WordNet Synset hypernym walkers (max_depth/min_depth/hypernym_paths/hypernym_distances) causes DoS",
    "description": "Four hypernym-walking methods on the WordNet `Synset` class in `nltk/corpus/reader/wordnet.py` (`max_depth`, `min_depth`, `hypernym_paths`, and `hypernym_distances`) traverse the hypernym pointer graph by direct recursion with no visited-node set and no depth cap. WordNet `data.<pos>` file content is untrusted corpus input in NLTK, the same trust boundary the project already treats as attacker-controlle...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-400",
      "CWE-674"
    ],
    "published_at": "2026-11-19T23:49:16.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-53pg-5qp8-mhvr",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-53pg-5qp8-mhvr",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129230",
      "https://github.com/nltk/nltk/pull/3895",
      "https://github.com/nltk/nltk/commit/34adf1ee425b5c817d2a88c674bac68672e3ab26",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129231",
    "cve_id": "CVE-2026-129231",
    "ghsa_id": "GHSA-q4c8-9gwf-255x",
    "title": "NLTK: Quadratic-time DoS in SeekableUnicodeStreamReader.readline on an unterminated corpus line via per-iteration full-buffer rescan",
    "description": "`SeekableUnicodeStreamReader.readline` in `nltk/data.py` assembles a line by repeatedly reading a block, appending it to a growing `chars` buffer, and recomputing `chars.splitlines(True)` over the entire buffer on every loop iteration. The read block size doubles only until it caps at 8000 characters, so for a single unterminated line of N characters the loop runs about N/8000 iterations and iteration k...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-19T23:48:39.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-q4c8-9gwf-255x",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-q4c8-9gwf-255x",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129231",
      "https://github.com/nltk/nltk/pull/3895",
      "https://github.com/nltk/nltk/commit/002bcf714ef8cb8baf94436f4be73e5516914412",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129232",
    "cve_id": "CVE-2026-129232",
    "ghsa_id": "GHSA-cj8f-5fp3-6m88",
    "title": "NLTK: Quadratic CPU exhaustion in NLTK XMLCorpusView.read_block via deeply nested XML corpus tags",
    "description": "NLTK's `XMLCorpusView.read_block` rebuilds the full root-to-node context path with `\"/\".join(context)` on every start tag while it is still searching for a matching element. Because the context stack grows with XML nesting depth and the join is repeated once per start tag, a single corpus file containing deeply nested tags forces O(n^2) pure-Python work, where n is the number of nested elements. Any app...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-19T23:48:18.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-cj8f-5fp3-6m88",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-cj8f-5fp3-6m88",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129232",
      "https://github.com/nltk/nltk/pull/3895",
      "https://github.com/nltk/nltk/commit/002bcf714ef8cb8baf94436f4be73e5516914412",
      "https://github.com/nltk/nltk/releases/tag/v3.10.4"
    ]
  },
  {
    "id": "CVE-2026-129233",
    "cve_id": "CVE-2026-129233",
    "ghsa_id": "GHSA-w674-vqhw-g3pg",
    "title": "NLTK: StreamBackedCorpusView constructor os.stat leaks out-of-root file existence, size, and mtime bypassing pathsec ENFORCE",
    "description": "`StreamBackedCorpusView`, a public API in `nltk/corpus/reader/util.py`, applies the pathsec sandbox to the file content it reads but not to the file metadata it probes in its constructor. When the view is created with a plain string fileid, `__init__` calls `os.stat(self._fileid).st_size` with no pathsec validation, so an application that passes an attacker influenced path to the constructor discloses w...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": ">= 3.10.0, <= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-200",
      "CWE-538"
    ],
    "published_at": "2026-11-19T23:47:58.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-w674-vqhw-g3pg",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-w674-vqhw-g3pg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129233",
      "https://github.com/nltk/nltk/pull/3888",
      "https://github.com/nltk/nltk/commit/2c563b13f9dce7c15eefd4b03463e1b69b64f1f3",
      "https://github.com/nltk/nltk/commit/68434c0427f8d296f3adfddb518525038d1f7bfa"
    ]
  },
  {
    "id": "CVE-2026-129234",
    "cve_id": "CVE-2026-129234",
    "ghsa_id": "GHSA-cc5r-64rf-75hg",
    "title": "NLTK: Untrusted search path in prover9/mace4 config allows local code execution via relative binary_location",
    "description": "`Prover9Parent.config_prover9(binary_location=...)` (and `Mace`, which inherits it) accepts a relative `binary_location` and passes it as `path_to_bin` to `find_binary`, which disables the CWD-relative rejection guard. Unlike the boxer/senna/malt/repp siblings, prover9/mace apply no `os.path.isabs()` filter, so the resolved relative program path (e.g. `./prover9`) is executed from the current working di...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.3,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:H/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: nltk",
    "affected_versions": "<= 3.10.3",
    "patched_versions": "3.10.4",
    "cwes": [
      "CWE-426",
      "CWE-427"
    ],
    "published_at": "2026-11-19T23:46:54.000Z",
    "relative_time": "12h ago",
    "url": "https://github.com/advisories/GHSA-cc5r-64rf-75hg",
    "references": [
      "https://github.com/nltk/nltk/security/advisories/GHSA-cc5r-64rf-75hg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129234",
      "https://github.com/nltk/nltk/pull/3887",
      "https://github.com/nltk/nltk/commit/4ca190b744ec72500c4c8a8259aece7792a46877",
      "https://github.com/nltk/nltk/commit/992884a02f6fb5180a992ed12d20103b4b5cb8a0"
    ]
  },
  {
    "id": "CVE-2026-129304",
    "cve_id": "CVE-2026-129304",
    "ghsa_id": "GHSA-gm9r-hvc9-96gv",
    "title": "Guard Core: Unvalidated X-Forwarded-For-derived string used as a Redis key component and interpolated into a KEYS glob pattern",
    "description": "`_extract_from_forwarded_header()` (`guard_core/utils.py:172-181` in 3.12.0; `:179` on master `08780f1`) returns the selected `X-Forwarded-For` entry **without any `ipaddress` validation**. When that entry is attacker-controlled, an arbitrary string becomes `client_ip` and flows into `BehaviorTracker` (`guard_core/handlers/behavior_handler.py:83-102`), which interpolates it verbatim into both a Redis k...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:N/I:L/A:L",
    "epss_score": 0.00244,
    "epss_percentile": 0.15751,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: guard-core",
    "affected_versions": ">= 1.0.0, < 3.13.0",
    "patched_versions": "3.13.0",
    "cwes": [
      "CWE-20"
    ],
    "published_at": "2026-11-19T22:50:33.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-gm9r-hvc9-96gv",
    "references": [
      "https://github.com/Guard-Core/guard-core/security/advisories/GHSA-gm9r-hvc9-96gv",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129304",
      "https://github.com/Guard-Core/guard-core/pull/68",
      "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "https://github.com/Guard-Core/guard-core/releases/tag/3.13.0"
    ]
  },
  {
    "id": "CVE-2026-129303",
    "cve_id": "CVE-2026-129303",
    "ghsa_id": "GHSA-w7wg-6q7v-44f2",
    "title": "Guard Core: Whitespace-collapse preprocessing permanently disables the CRLF-anchored http-splitting and command-injection detectors in the default detection mode",
    "description": "In the default \"enhanced\" detection mode, `ContentPreprocessor.preprocess()` collapses all whitespace (`re.sub(r\"\\s+\", \" \", content)`, `guard_core/detection_engine/preprocessor.py:137` on master `08780f1`; `:384` in the 3.12.0 sdist) **before** pattern matching. This erases every `\\r` and `\\n` from the scanned value, rendering two built-in detectors structurally unmatchable regardless of input: - http_...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "LOW",
    "cvss_score": 3.7,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:L/A:N",
    "epss_score": 0.00324,
    "epss_percentile": 0.25825,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: guard-core",
    "affected_versions": ">= 1.0.0, < 3.13.0",
    "patched_versions": "3.13.0",
    "cwes": [
      "CWE-693"
    ],
    "published_at": "2026-11-19T22:50:13.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-w7wg-6q7v-44f2",
    "references": [
      "https://github.com/Guard-Core/guard-core/security/advisories/GHSA-w7wg-6q7v-44f2",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129303",
      "https://github.com/Guard-Core/guard-core/pull/68",
      "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "https://github.com/Guard-Core/guard-core/releases/tag/3.13.0"
    ]
  },
  {
    "id": "CVE-2026-129302",
    "cve_id": "CVE-2026-129302",
    "ghsa_id": "GHSA-r7hm-rjvg-xx7j",
    "title": "Guard Core: Quadratic ReDoS in built-in detection pattern freezes the event loop with a single request",
    "description": "A polynomial (quadratic) regular-expression denial of service in guard-core's built-in penetration-detection patterns allows any unauthenticated remote client to freeze **every** endpoint of an application for seconds per request, using only the default configuration. The triggering request completes without any detection match — no ban counter increments, no rate-limit violation is recorded — so it ca...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.0035,
    "epss_percentile": 0.2915,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: guard-core",
    "affected_versions": ">= 3.5.0, <= 3.12.0",
    "patched_versions": "3.13.0",
    "cwes": [
      "CWE-400",
      "CWE-1333"
    ],
    "published_at": "2026-11-19T22:49:33.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-r7hm-rjvg-xx7j",
    "references": [
      "https://github.com/Guard-Core/guard-core/security/advisories/GHSA-r7hm-rjvg-xx7j",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129302",
      "https://github.com/Guard-Core/guard-core/pull/68",
      "https://github.com/Guard-Core/guard-core/commit/c07239fa1c5aa93e3f179440e79dad652977d3e4",
      "https://github.com/Guard-Core/guard-core/releases/tag/3.13.0"
    ]
  },
  {
    "id": "CVE-2026-130007",
    "cve_id": "CVE-2026-130007",
    "ghsa_id": "GHSA-m932-63jc-4jqq",
    "title": "k8s-mcp-server: Missing authentication on default SSE/HTTP transport allows unauthenticated Kubernetes tool execution",
    "description": "When k8s-mcp-server runs in its default SSE transport mode, the MCP `tools/call` endpoint is dispatched with no authentication, session token, or Origin check. Any client that can reach the listening port can enumerate and invoke the server's Kubernetes tools (including destructive/write tools) without credentials, executing with the server's configured cluster privileges. Affected Commit be87a6dd72b...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:N/SC:H/SI:H/SA:H",
    "epss_score": 0.0037,
    "epss_percentile": 0.31603,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/reza-gholizade/k8s-mcp-server",
    "affected_versions": "< 1.1.0",
    "patched_versions": "1.1.0",
    "cwes": [
      "CWE-306"
    ],
    "published_at": "2026-11-19T22:48:33.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-m932-63jc-4jqq",
    "references": [
      "https://github.com/reza-gholizade/k8s-mcp-server/security/advisories/GHSA-m932-63jc-4jqq",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-130007",
      "https://github.com/reza-gholizade/k8s-mcp-server/issues/131",
      "https://github.com/reza-gholizade/k8s-mcp-server/pull/134",
      "https://github.com/reza-gholizade/k8s-mcp-server/commit/817d81005369837e0c034962785851ca4dec9a76"
    ]
  },
  {
    "id": "CVE-2026-83816",
    "cve_id": "CVE-2026-83816",
    "ghsa_id": "GHSA-3mgh-93r5-r7jf",
    "title": "CodeWhale: exec_shell parallel-readonly classifier auto-approves fd/rg/git grep exec flags enabling silent RCE",
    "description": "Maintainer resolution The CodeWhale maintainers validated this report. CodeWhale 0.8.67 and earlier are affected. Version 0.9.0 contains the fix in commit 208421b9d23d81cea3311a1eeb2a2ea81d637686. Users should upgrade to 0.9.0 or later. The original reporter analysis is preserved below. The interactive Agent profile of DeepSeek-TUI (CodeWhale) is explicitly documented to gate **every** shell command...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00737,
    "epss_percentile": 0.55114,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): codewhale-tui",
    "affected_versions": "<= 0.8.67",
    "patched_versions": "0.9.0",
    "cwes": [
      "CWE-78",
      "CWE-863"
    ],
    "published_at": "2026-11-19T22:48:14.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-3mgh-93r5-r7jf",
    "references": [
      "https://github.com/codewhale-hq/Codewhale/security/advisories/GHSA-3mgh-93r5-r7jf",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-83816",
      "https://github.com/codewhale-hq/Codewhale/commit/208421b9d23d81cea3311a1eeb2a2ea81d637686",
      "https://github.com/codewhale-hq/Codewhale/releases/tag/v0.9.0",
      "https://github.com/advisories/GHSA-3mgh-93r5-r7jf"
    ]
  },
  {
    "id": "CVE-2026-83817",
    "cve_id": "CVE-2026-83817",
    "ghsa_id": "GHSA-8hp3-xxrg-v9c8",
    "title": "CodeWhale: Automation auto_approve defaults to true, bypassing the task-path hardening fix for silent recurring agent execution",
    "description": "Maintainer resolution The CodeWhale maintainers validated this report. CodeWhale 0.8.67 and earlier are affected. Version 0.9.0 contains the fix in commit 208421b9d23d81cea3311a1eeb2a2ea81d637686. Users should upgrade to 0.9.0 or later. The original reporter analysis is preserved below. CVE-2026-45374 (GHSA-72w5-pf8h-xfp4) hardened the task path so auto-approval must be opted into explicitly: `add_t...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:H",
    "epss_score": 0.0069,
    "epss_percentile": 0.53526,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): codewhale-tui",
    "affected_versions": "<= 0.8.67",
    "patched_versions": "0.9.0",
    "cwes": [
      "CWE-862",
      "CWE-1188"
    ],
    "published_at": "2026-11-19T22:47:33.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-8hp3-xxrg-v9c8",
    "references": [
      "https://github.com/codewhale-hq/Codewhale/security/advisories/GHSA-8hp3-xxrg-v9c8",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-83817",
      "https://github.com/codewhale-hq/Codewhale/commit/208421b9d23d81cea3311a1eeb2a2ea81d637686",
      "https://github.com/codewhale-hq/Codewhale/releases/tag/v0.9.0",
      "https://github.com/advisories/GHSA-8hp3-xxrg-v9c8"
    ]
  },
  {
    "id": "CVE-2026-129307",
    "cve_id": "CVE-2026-129307",
    "ghsa_id": "GHSA-m4g8-47f9-h588",
    "title": "eml_parser: Algorithmic-complexity DoS (O(n^4) regex backtracking) in Received-header parsing",
    "description": "`eml_parser.routing.parserouting()` dynamically builds a regex from up to four greedy `.*` groups (`from (?P<from>.*)by (?P<by>.*)with (?P<with>.*)for (?P<for>.*)`) terminated by an escaped literal of the date extracted from a **normalized** copy of the `Received` header. Because the date literal comes from the normalized text but is searched in the original line, a crafted header can make the trailing...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": 0.00291,
    "epss_percentile": 0.22012,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: eml-parser",
    "affected_versions": "<= 3.0.3",
    "patched_versions": "3.0.4",
    "cwes": [
      "CWE-407",
      "CWE-1333"
    ],
    "published_at": "2026-11-19T22:47:08.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-m4g8-47f9-h588",
    "references": [
      "https://github.com/GOVCERT-LU/eml_parser/security/advisories/GHSA-m4g8-47f9-h588",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129307",
      "https://github.com/GOVCERT-LU/eml_parser/commit/54ea6e9f54fecda3059283ccdb6a6fd99e7ce92f",
      "https://github.com/GOVCERT-LU/eml_parser/releases/tag/v3.0.4",
      "https://github.com/advisories/GHSA-m4g8-47f9-h588"
    ]
  },
  {
    "id": "CVE-2026-95839",
    "cve_id": "CVE-2026-95839",
    "ghsa_id": "GHSA-vwhp-8p66-mq4f",
    "title": "containerd image-triggered daemon crash via malformed digest in subject-annotated descriptor",
    "description": "A bug in containerd's image manifest processing causes an unrecovered panic when a child descriptor contains the `io.containerd.manifest.subject` annotation and a malformed digest. Pulling or importing such an image through the transfer service (including default CRI `PullImage` requests) crashes the containerd daemon. In Kubernetes environments, `kubelet` retries failed image pulls with backoff, allowi...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N",
    "epss_score": 0.00398,
    "epss_percentile": 0.34585,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/containerd/containerd/v2",
    "affected_versions": ">= 2.2.0, < 2.2.10",
    "patched_versions": "2.2.10",
    "cwes": [
      "CWE-248"
    ],
    "published_at": "2026-11-19T22:46:24.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-vwhp-8p66-mq4f",
    "references": [
      "https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-95839",
      "https://github.com/containerd/containerd/commit/20a3b31390653d7a83fdaeb0c318b01a263c9d9a",
      "https://github.com/containerd/containerd/commit/2181d7baa2a303ea2082e5c0f1a7697787b61ef2",
      "https://github.com/containerd/containerd/commit/2455fec2f7bfa63adb1f993c63ba0cea9cdedb8c"
    ]
  },
  {
    "id": "CVE-2026-115563",
    "cve_id": "CVE-2026-115563",
    "ghsa_id": "GHSA-qx49-fqc8-xw99",
    "title": "Model Context Protocol Python SDK: OAuth client could send credentials to an authorization server chosen by the MCP server",
    "description": "In affected versions, the SDK's OAuth client support (`mcp.client.auth`) let the MCP server a client connected to decide where the client's OAuth credentials were sent: - the authorization server metadata `issuer` was not validated on every discovery path, and - stored or pre-provisioned client credentials were not bound to the authorization server they belong to. A malicious or compromised MCP server ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.00321,
    "epss_percentile": 0.25542,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: mcp",
    "affected_versions": ">= 2.0.0a1, < 2.2.0",
    "patched_versions": "2.2.0",
    "cwes": [
      "CWE-345",
      "CWE-522"
    ],
    "published_at": "2026-11-19T22:45:40.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-qx49-fqc8-xw99",
    "references": [
      "https://github.com/modelcontextprotocol/python-sdk/security/advisories/GHSA-qx49-fqc8-xw99",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-115563",
      "https://github.com/modelcontextprotocol/python-sdk/pull/3398",
      "https://github.com/modelcontextprotocol/python-sdk/pull/3431",
      "https://github.com/modelcontextprotocol/python-sdk/pull/3435"
    ]
  },
  {
    "id": "CVE-2026-97698",
    "cve_id": "CVE-2026-97698",
    "ghsa_id": "GHSA-phmp-hrw4-r36r",
    "title": "Mistune: Quadratic-time DoS in parse_link_href via unbounded parenthesis scan on empty-label links",
    "description": "Resolution **Fixed in Mistune 3.3.4.** Upgrade to 3.3.4 or later. - Affected versions: `< 3.3.4` - First patched version: `3.3.4` - Fix: https://github.com/lepture/mistune/compare/v3.3.3...v3.3.4 The reported payload was reproduced against the 3.3.3 release tag and verified to scale approximately linearly against the 3.3.4 release tag. Original report The following report describes the issue before the fix. ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00719,
    "epss_percentile": 0.54585,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: mistune",
    "affected_versions": "< 3.3.4",
    "patched_versions": "3.3.4",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-19T22:44:42.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-phmp-hrw4-r36r",
    "references": [
      "https://github.com/lepture/mistune/security/advisories/GHSA-phmp-hrw4-r36r",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-97698",
      "https://github.com/lepture/mistune/commit/b4dd3284e52ec741ed9a227db29ade9017828e90",
      "https://github.com/lepture/mistune/releases/tag/v3.3.4",
      "https://github.com/advisories/GHSA-phmp-hrw4-r36r"
    ]
  },
  {
    "id": "CVE-2026-97699",
    "cve_id": "CVE-2026-97699",
    "ghsa_id": "GHSA-ww7q-mxrj-5ffg",
    "title": "Mistune: Quadratic-time DoS in inline image parsing (precedence_scan) bypasses not-is-image guards",
    "description": "Resolution **Fixed in Mistune 3.3.4.** Upgrade to 3.3.4 or later. - Affected versions: `< 3.3.4` - First patched version: `3.3.4` - Fix: https://github.com/lepture/mistune/compare/v3.3.3...v3.3.4 The reported payload was reproduced against the 3.3.3 release tag and verified to scale approximately linearly against the 3.3.4 release tag. Original report The following report describes the issue before the fix. ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00668,
    "epss_percentile": 0.52649,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: mistune",
    "affected_versions": "< 3.3.4",
    "patched_versions": "3.3.4",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-19T22:44:00.000Z",
    "relative_time": "13h ago",
    "url": "https://github.com/advisories/GHSA-ww7q-mxrj-5ffg",
    "references": [
      "https://github.com/lepture/mistune/security/advisories/GHSA-ww7q-mxrj-5ffg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-97699",
      "https://github.com/lepture/mistune/commit/b4dd3284e52ec741ed9a227db29ade9017828e90",
      "https://github.com/lepture/mistune/releases/tag/v3.3.4",
      "https://github.com/advisories/GHSA-ww7q-mxrj-5ffg"
    ]
  },
  {
    "id": "CVE-2024-10441",
    "cve_id": "CVE-2024-10441",
    "ghsa_id": null,
    "title": "Synology DiskStation Manager (DSM) Improper Encoding or Escaping of Output Vulnerability",
    "description": "Synology DSM contains an improper encoding or escaping of output vulnerability in the system plugin daemon in Synology BeeStation OS (BSM) that could allow a remote attacker to execute arbitrary code via unspecified vectors.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.0215,
    "epss_percentile": 0.82512,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-21",
    "ecosystem": "Synology",
    "vendor_product": "Synology DiskStation Manager (DSM)",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-116"
    ],
    "published_at": "2026-11-18T12:00:00.000Z",
    "relative_time": "2d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2024-10441",
    "references": [
      "https://www.synology.com/zh-tw/security/advisory/Synology_SA_24_20",
      "https://nvd.nist.gov/vuln/detail/CVE-2024-10441"
    ]
  },
  {
    "id": "CVE-2026-40217",
    "cve_id": "CVE-2026-40217",
    "ghsa_id": null,
    "title": "BerriAI LiteLLM Unprotected Alternate Channel Vulnerability",
    "description": "BerriAI LiteLLM contains an unprotected alternate channel vulnerability that could allow remote attackers to execute arbitrary code via bytecode rewriting at the /guardrails/test_custom_code URI.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.61911,
    "epss_percentile": 0.99193,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-12-02",
    "ecosystem": "BerriAI",
    "vendor_product": "BerriAI LiteLLM",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-420"
    ],
    "published_at": "2026-11-18T12:00:00.000Z",
    "relative_time": "2d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-40217",
    "references": [
      "https://github.com/BerriAI/litellm/security/advisories/GHSA-wxxx-gvqv-xp7p",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-40217"
    ]
  },
  {
    "id": "CVE-2026-90817",
    "cve_id": "CVE-2026-90817",
    "ghsa_id": null,
    "title": "Vanderbilt University Research Electronic Data Capture (REDCap) Code Injection Vulnerability",
    "description": "Vanderbilt University Research Electronic Data Capture (REDCap) contains a code injection vulnerability which could allow an unauthenticated attacker to execute arbitrary code on the server. An attacker could exploit this via crafted HTTP requests that access an unintended controller route from a public survey context and supply a crafted file-path or stream parameter during data import processing. Exploitation re...",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.25187,
    "epss_percentile": 0.97974,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-21",
    "ecosystem": "Vanderbilt University",
    "vendor_product": "Vanderbilt University Research Electronic Data Capture (REDCap)",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-73",
      "CWE-94"
    ],
    "published_at": "2026-11-18T12:00:00.000Z",
    "relative_time": "2d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-90817",
    "references": [
      "https://projectredcap.org/resources/community",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-90817"
    ]
  },
  {
    "id": "CVE-2026-90436",
    "cve_id": "CVE-2026-90436",
    "ghsa_id": null,
    "title": "Apache Axis Unsafe Reflection Vulnerability",
    "description": "Apache Axis contains an unsafe reflection vulnerability that could allow an unauthenticated remote attacker to execute arbitrary code via a crafted SOAP fault message that causes Axis to load and instantiate an attacker-specified class when a suitable class is available on the application classpath. The impacted product(s) could be end-of-life (EoL) and/or end-of-service (EoS). Users are advised to discontinue use...",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.01773,
    "epss_percentile": 0.7866,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-21",
    "ecosystem": "Apache",
    "vendor_product": "Apache Axis",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-470"
    ],
    "published_at": "2026-11-18T12:00:00.000Z",
    "relative_time": "2d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-90436",
    "references": [
      "https://lists.apache.org/thread/8slf0j9gz35z56t0glt5h0ncwlbn4bdz",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-90436"
    ]
  },
  {
    "id": "CVE-2026-115731",
    "cve_id": "CVE-2026-115731",
    "ghsa_id": null,
    "title": "Perforce Puppet Enterprise Deserialization of Untrusted Data Vulnerability",
    "description": "Perforce Puppet Enterprise contains a deserialization of untrusted data vulnerability in Puppet’s report-processing code that allows a client with any CA-signed agent certificate to execute arbitrary code on the Puppet Server as the service user by submitting a report containing a crafted rich-data type through a PUT request. If the certificate authority automatically signs requests without strong verification, an...",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00691,
    "epss_percentile": 0.53604,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-12-01",
    "ecosystem": "Perforce",
    "vendor_product": "Perforce Puppet Enterprise",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-502",
      "CWE-94"
    ],
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "3d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-115731",
    "references": [
      "https://portal.perforce.com/s/cve/a91Qi000003IaHpIAK/report-deserialization-code-execution",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-115731"
    ]
  },
  {
    "id": "CVE-2026-129525",
    "cve_id": "CVE-2026-129525",
    "ghsa_id": null,
    "title": "Several endpoints that work on both issues and pull requests did not check which of the two the addressed item is.",
    "description": "Several endpoints that work on both issues and pull requests did not check which of the two the addressed item is. A user who can read a repository's issues but not its pull requests could read pull request data through the issue sub-resources of the API (timeline, attachments, labels, subscriptions, tracked times and reactions), and list pull requests through the repository's issue search and milestone pages; the...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:N",
    "epss_score": 0.00215,
    "epss_percentile": 0.12082,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-16T03:17:19.700Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129525",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/39839",
      "https://github.com/go-gitea/gitea/pull/39847",
      "https://github.com/go-gitea/gitea/pull/39885",
      "https://github.com/go-gitea/gitea/pull/39938"
    ]
  },
  {
    "id": "CVE-2026-129341",
    "cve_id": "CVE-2026-129341",
    "ghsa_id": null,
    "title": "The web endpoint that removes an attachment skipped the permission check when the request came from the user who...",
    "description": "The web endpoint that removes an attachment skipped the permission check when the request came from the user who had uploaded the attachment, and it was reachable with read access to issues or pull requests. A user who had uploaded a release asset could still delete it after losing write access to the repository. The endpoint now only deletes attachments that the user uploaded and that are not yet linked to an iss...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:L",
    "epss_score": 0.00238,
    "epss_percentile": 0.15002,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-863"
    ],
    "published_at": "2026-11-16T03:17:19.570Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129341",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40120",
      "https://github.com/go-gitea/gitea/pull/40268",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-jr33-w6w7-86vj"
    ]
  },
  {
    "id": "CVE-2026-129337",
    "cve_id": "CVE-2026-129337",
    "ghsa_id": null,
    "title": "Git over HTTP lowers the required permission for pushes to read access, so that the AGit flow works, and relies ...",
    "description": "Git over HTTP lowers the required permission for pushes to read access, so that the AGit flow works, and relies on the repository's server-side hooks to enforce write access. A repository that is still being created by a migration, fork or template generation has no hooks yet, so a user with read access to it could push branches and tags during that window, or after a failed migration that left the repository in t...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:N/I:H/A:N",
    "epss_score": 0.00208,
    "epss_percentile": 0.11015,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-16T03:17:19.433Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129337",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40120",
      "https://github.com/go-gitea/gitea/pull/40268",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-8cjj-9p56-j54f"
    ]
  },
  {
    "id": "CVE-2026-128365",
    "cve_id": "CVE-2026-128365",
    "ghsa_id": null,
    "title": "Removing a team's review request looked up a review by the negated team ID, which for the team with ID 2 is the ...",
    "description": "Removing a team's review request looked up a review by the negated team ID, which for the team with ID 2 is the ID of the built-in Actions user, and marked the review it found as official. In the organization that owns that team, a user who can change the review requests of a pull request could make an approval left by the Actions user count toward the approvals required by branch protection. Merging still require...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "LOW",
    "cvss_score": 3.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:N/I:L/A:N",
    "epss_score": 0.00185,
    "epss_percentile": 0.08191,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-863"
    ],
    "published_at": "2026-11-16T03:17:19.293Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128365",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40120",
      "https://github.com/go-gitea/gitea/pull/40268",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-74jf-6hjp-549c"
    ]
  },
  {
    "id": "CVE-2026-128359",
    "cve_id": "CVE-2026-128359",
    "ghsa_id": null,
    "title": "When Gitea acts as an OAuth2 or OpenID Connect provider, the token endpoint did not check the state of the user.",
    "description": "When Gitea acts as an OAuth2 or OpenID Connect provider, the token endpoint did not check the state of the user. After an administrator deactivated an account or prohibited its sign-in, existing refresh tokens and unused authorization codes of that user could still be exchanged for new tokens, so applications that sign users in through Gitea kept them signed in. The token endpoint now refuses users who may not sig...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:N",
    "epss_score": 0.00177,
    "epss_percentile": 0.0741,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-613"
    ],
    "published_at": "2026-11-16T03:17:19.150Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128359",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-jrjr-q3rq-f899"
    ]
  },
  {
    "id": "CVE-2026-127958",
    "cve_id": "CVE-2026-127958",
    "ghsa_id": null,
    "title": "A pull request review created through the API as a draft (`event` set to `PENDING` or left empty) was added to t...",
    "description": "A pull request review created through the API as a draft (`event` set to `PENDING` or left empty) was added to the pull request timeline and announced through notifications and activity feeds like a submitted review. Its body and line comments were therefore visible to everyone who can read the pull request, including anonymous visitors of a public repository, before the reviewer submitted it. Pending reviews no l...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00244,
    "epss_percentile": 0.1582,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-200"
    ],
    "published_at": "2026-11-16T03:17:19.010Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-127958",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40260",
      "https://github.com/go-gitea/gitea/pull/40272",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-859w-9wv7-c5x9"
    ]
  },
  {
    "id": "CVE-2026-126338",
    "cve_id": "CVE-2026-126338",
    "ghsa_id": null,
    "title": "Replying to a code review comment accepted a review ID that belongs to a different pull request, through the web...",
    "description": "Replying to a code review comment accepted a review ID that belongs to a different pull request, through the web form, the API and incoming mail replies. A signed-in user could reply on a pull request they can access with the ID of a review in a repository they cannot read, and the new comment was attached to that review and received the diff context of the commented lines. Replies are now only accepted for a revi...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "LOW",
    "cvss_score": 3.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00257,
    "epss_percentile": 0.17586,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-639"
    ],
    "published_at": "2026-11-16T03:17:18.863Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-126338",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-wgx7-537g-xfrg"
    ]
  },
  {
    "id": "CVE-2026-125617",
    "cve_id": "CVE-2026-125617",
    "ghsa_id": null,
    "title": "`GET /api/v1/users/{username}/orgs/{org}/permissions` only checked that the organization is visible to the calle...",
    "description": "`GET /api/v1/users/{username}/orgs/{org}/permissions` only checked that the organization is visible to the caller and then returned the named user's role in it. Any signed-in user could learn whether another user is an owner, admin or member of a public or limited organization, including for members who conceal their membership. The roles are now only returned to the user themselves, to members of the organization...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00217,
    "epss_percentile": 0.12349,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-200"
    ],
    "published_at": "2026-11-16T03:17:18.720Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125617",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40042",
      "https://github.com/go-gitea/gitea/pull/40365",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-7mr2-v9gc-4467"
    ]
  },
  {
    "id": "CVE-2026-123642",
    "cve_id": "CVE-2026-123642",
    "ghsa_id": null,
    "title": "The AGit flow (pushing to `refs/for/...`) did not check the pusher's access to pull requests again when it creat...",
    "description": "The AGit flow (pushing to `refs/for/...`) did not check the pusher's access to pull requests again when it created the pull request. A user or deploy key with read access to the code only, or with write access to the wiki over SSH, could open pull requests in a repository where they have no access to pull requests. Creating a pull request through AGit now requires read access to the pull requests of the repository...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N",
    "epss_score": 0.00196,
    "epss_percentile": 0.0941,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-16T03:17:18.587Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123642",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-9827-6wh6-634q"
    ]
  },
  {
    "id": "CVE-2026-123638",
    "cve_id": "CVE-2026-123638",
    "ghsa_id": null,
    "title": "The \"Protected file patterns\" setting of a branch protection rule was checked against file names as git prints t...",
    "description": "The \"Protected file patterns\" setting of a branch protection rule was checked against file names as git prints them, and git quotes names that contain a double quote, a backslash or a control character. Such names never matched a pattern, so a user with write access could add or change files under a protected pattern by direct push or through a pull request merge, and could move a protected file out of the pattern...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:H",
    "epss_score": 0.00364,
    "epss_percentile": 0.30865,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-693"
    ],
    "published_at": "2026-11-16T03:17:18.453Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123638",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40362",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-w87g-xmrp-86v2"
    ]
  },
  {
    "id": "CVE-2026-123065",
    "cve_id": "CVE-2026-123065",
    "ghsa_id": null,
    "title": "When a release was edited, the files of the attachments to remove were deleted by the identifiers submitted in t...",
    "description": "When a release was edited, the files of the attachments to remove were deleted by the identifiers submitted in the form rather than by the attachments verified to belong to the release. A user with write access to the releases of any repository, including their own, could submit a crafted identifier that resolves to the stored file of another attachment and delete it, provided they know that attachment's UUID. The...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.7,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:N/I:H/A:N",
    "epss_score": 0.00278,
    "epss_percentile": 0.2062,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22",
      "CWE-639"
    ],
    "published_at": "2026-11-16T03:17:18.323Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123065",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40120",
      "https://github.com/go-gitea/gitea/pull/40268",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-4p89-xcq8-xfhm"
    ]
  },
  {
    "id": "CVE-2026-123009",
    "cve_id": "CVE-2026-123009",
    "ghsa_id": null,
    "title": "When a file is edited in a fork through the web editor, Gitea can first copy a branch from the base repository i...",
    "description": "When a file is edited in a fork through the web editor, Gitea can first copy a branch from the base repository into the fork. That copy did not check whether the user may read the base repository's code. A user who had forked a repository and later lost access to it, for example after it was made private or they were removed as a collaborator, could keep copying its current branches into their fork and read them. ...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00273,
    "epss_percentile": 0.19976,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-284",
      "CWE-863"
    ],
    "published_at": "2026-11-16T03:17:18.190Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123009",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-9vh6-6hgj-j5m5"
    ]
  },
  {
    "id": "CVE-2026-123002",
    "cve_id": "CVE-2026-123002",
    "ghsa_id": null,
    "title": "Gitea accepted an unlimited number of wrong TOTP passcodes during sign-in, in the password reset flow and for Ba...",
    "description": "Gitea accepted an unlimited number of wrong TOTP passcodes during sign-in, in the password reset flow and for Basic authentication with the `X-Gitea-OTP` header. An attacker who already knows an account's password could guess the six-digit passcode by trying codes at a high rate and sign in despite two-factor authentication. After five failed passcodes, further attempts for the account are now refused for 15 minutes.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00314,
    "epss_percentile": 0.24832,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-307"
    ],
    "published_at": "2026-11-16T03:17:18.050Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123002",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/39993",
      "https://github.com/go-gitea/gitea/pull/40374",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-5mx6-8rwm-52wf"
    ]
  },
  {
    "id": "CVE-2026-120991",
    "cve_id": "CVE-2026-120991",
    "ghsa_id": null,
    "title": "When a container blob upload was rejected, for example because it exceeded a package size quota, the cleanup rem...",
    "description": "When a container blob upload was rejected, for example because it exceeded a package size quota, the cleanup removed the blob from storage even if the same content already existed and was used by other packages. On an instance with a package quota configured, a user who can upload container images and has the exact content of another owner's package file or image layer could make it undownloadable. The cleanup now...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00305,
    "epss_percentile": 0.23747,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-460"
    ],
    "published_at": "2026-11-16T03:17:17.907Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-120991",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40120",
      "https://github.com/go-gitea/gitea/pull/40268",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-q8pg-ggp9-rm9m"
    ]
  },
  {
    "id": "CVE-2026-120729",
    "cve_id": "CVE-2026-120729",
    "ghsa_id": null,
    "title": "The popup shown when hovering an issue reference loaded its data from the path of the hovered link and inserted ...",
    "description": "The popup shown when hovering an issue reference loaded its data from the path of the hovered link and inserted part of the response as HTML. A user who can post a comment or other rendered content could add a link that is displayed as an ordinary issue reference but points to a file in a repository they control, so that the popup inserted that file's content into the page of anyone hovering the link and ran scrip...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": 0.0021,
    "epss_percentile": 0.11294,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T03:17:17.773Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-120729",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40207",
      "https://github.com/go-gitea/gitea/pull/40225",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-wmr3-xg9x-vc55"
    ]
  },
  {
    "id": "CVE-2026-120725",
    "cve_id": "CVE-2026-120725",
    "ghsa_id": null,
    "title": "With `REQUIRE_SIGNIN_VIEW = true`, the Git LFS endpoints still answered unauthenticated requests for repositorie...",
    "description": "With `REQUIRE_SIGNIN_VIEW = true`, the Git LFS endpoints still answered unauthenticated requests for repositories that are not private. An anonymous client who knows the path of such a repository and the SHA-256 of an LFS object could download the object, and could use the batch endpoint to test whether an object exists. The Git LFS endpoints now require authentication when sign-in is required to view the instance.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "LOW",
    "cvss_score": 3.7,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00265,
    "epss_percentile": 0.18662,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-306"
    ],
    "published_at": "2026-11-16T03:17:17.633Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-120725",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-8pmc-9g44-v9gw"
    ]
  },
  {
    "id": "CVE-2026-118535",
    "cve_id": "CVE-2026-118535",
    "ghsa_id": null,
    "title": "A repository registered by its owner as a source of scoped workflows kept that registration when it was transfer...",
    "description": "A repository registered by its owner as a source of scoped workflows kept that registration when it was transferred to another owner. The new owner could then change the workflows in the transferred repository, and they kept running in the previous owner's repositories with access to their Actions secrets and job tokens. A transfer now removes the owner-level registrations of the repository, and registrations whos...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:L",
    "epss_score": 0.00152,
    "epss_percentile": 0.04459,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-863"
    ],
    "published_at": "2026-11-16T03:17:17.500Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118535",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40131",
      "https://github.com/go-gitea/gitea/pull/40281",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-q3q9-39vr-q35j"
    ]
  },
  {
    "id": "CVE-2026-118389",
    "cve_id": "CVE-2026-118389",
    "ghsa_id": null,
    "title": "The RubyGems package registry accepted gems whose platform, dependency names or dependency version requirements ...",
    "description": "The RubyGems package registry accepted gems whose platform, dependency names or dependency version requirements contain newline characters. Because the compact index served to clients is line-based, a user who can publish a gem to an owner's registry could forge index entries, such as packages that do not exist or additional versions of an existing gem with dependencies of their choice. Clients that resolve gems f...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00352,
    "epss_percentile": 0.29465,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-74"
    ],
    "published_at": "2026-11-16T03:17:17.350Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-118389",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/39782",
      "https://github.com/go-gitea/gitea/pull/39900",
      "https://github.com/go-gitea/gitea/releases/tag/v28.3.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-49c9-hm8q-6rvq"
    ]
  },
  {
    "id": "CVE-2026-125423",
    "cve_id": "CVE-2026-125423",
    "ghsa_id": null,
    "title": "A repository created with auto-init accepted pushes before its initialization had finished, and the initial comm...",
    "description": "A repository created with auto-init accepted pushes before its initialization had finished, and the initial commit was built in a checkout of whatever the repository already contained. A user who is allowed to create repositories could push a crafted tree during that window so that writing the README followed a symbolic link and overwrote a server-side git hook, which runs commands as the Gitea system user. The in...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00294,
    "epss_percentile": 0.22467,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-59",
      "CWE-362"
    ],
    "published_at": "2026-11-16T02:16:54.590Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125423",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40376",
      "https://github.com/go-gitea/gitea/pull/40383",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-6m4f-m9vc-7946"
    ]
  },
  {
    "id": "CVE-2026-123006",
    "cve_id": "CVE-2026-123006",
    "ghsa_id": null,
    "title": "The repository search used by the dashboard (`GET /repo/search`) returned the internal commit status object of e...",
    "description": "The repository search used by the dashboard (`GET /repo/search`) returned the internal commit status object of each repository. Since 28.0.0 that object included the repository owner's full user record, so any signed-in user could read the password hash, salt and email address of the owner of any repository they can see that has a commit status. The response now contains only the state and target URL of the commit...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.0026,
    "epss_percentile": 0.1793,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-200"
    ],
    "published_at": "2026-11-16T02:16:53.803Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123006",
    "references": [
      "https://blog.gitea.com/release-of-28.4.0/",
      "https://github.com/go-gitea/gitea/pull/40377",
      "https://github.com/go-gitea/gitea/pull/40384",
      "https://github.com/go-gitea/gitea/releases/tag/v28.4.0",
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-frjx-8pcw-8c9q"
    ]
  },
  {
    "id": "CVE-2026-129091",
    "cve_id": "CVE-2026-129091",
    "ghsa_id": null,
    "title": "Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerab...",
    "description": "Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in Mikado-Themes GrandPrix Core grandprix-core allows PHP Local File Inclusion.This issue affects GrandPrix Core: from n/a through 1.0.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00438,
    "epss_percentile": 0.3883,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-98"
    ],
    "published_at": "2026-11-16T00:17:16.730Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129091",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/grandprix-core/vulnerability/wordpress-grandprix-core-plugin-1-0-local-file-inclusion-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125830",
    "cve_id": "CVE-2026-125830",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Belingo be...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Belingo belingoGeo belingogeo allows Reflected XSS.This issue affects belingoGeo: from n/a through 1.13.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.0876,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:16.580Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125830",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/belingogeo/vulnerability/wordpress-belingogeo-plugin-1-13-3-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125826",
    "cve_id": "CVE-2026-125826",
    "ghsa_id": null,
    "title": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Blubrry Podcasti...",
    "description": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Blubrry Podcasting PowerPress Podcasting powerpress allows Path Traversal.This issue affects PowerPress Podcasting: from n/a through 11.18.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:N/A:L",
    "epss_score": 0.00365,
    "epss_percentile": 0.30959,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-16T00:17:16.430Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125826",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/powerpress/vulnerability/wordpress-powerpress-podcasting-plugin-11-18-3-arbitrary-file-deletion-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125823",
    "cve_id": "CVE-2026-125823",
    "ghsa_id": null,
    "title": "Allocation of Resources Without Limits or Throttling vulnerability in Jegstudio Gutenverse gutenverse allows HTT...",
    "description": "Allocation of Resources Without Limits or Throttling vulnerability in Jegstudio Gutenverse gutenverse allows HTTP DoS.This issue affects Gutenverse: from n/a through 4.2.2.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00359,
    "epss_percentile": 0.30334,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-770"
    ],
    "published_at": "2026-11-16T00:17:16.273Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125823",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/gutenverse/vulnerability/wordpress-gutenverse-plugin-4-2-2-denial-of-service-attack-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125822",
    "cve_id": "CVE-2026-125822",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Nickboss W...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Nickboss WordPress File Upload wp-file-upload allows Stored XSS.This issue affects WordPress File Upload: from n/a through 5.2.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08763,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:16.123Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125822",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wp-file-upload/vulnerability/wordpress-wordpress-file-upload-plugin-5-2-3-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125818",
    "cve_id": "CVE-2026-125818",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in AdvancedCo...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in AdvancedCoding wpDiscuz wpdiscuz allows Stored XSS.This issue affects wpDiscuz: from n/a through 7.6.75.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08761,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:15.850Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125818",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wpdiscuz/vulnerability/wordpress-wpdiscuz-plugin-7-6-75-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125817",
    "cve_id": "CVE-2026-125817",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Themeisle ...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Themeisle Feedzy feedzy-rss-feeds allows Stored XSS.This issue affects Feedzy: from n/a through 5.2.15.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08762,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:15.703Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125817",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/feedzy-rss-feeds/vulnerability/wordpress-feedzy-plugin-5-2-15-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125804",
    "cve_id": "CVE-2026-125804",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Meow Apps ...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Meow Apps AI Engine ai-engine allows Stored XSS.This issue affects AI Engine: from n/a through 3.9.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08762,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:15.557Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125804",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/ai-engine/vulnerability/wordpress-ai-engine-plugin-3-9-3-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125798",
    "cve_id": "CVE-2026-125798",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Zaytech Sm...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Zaytech Smart Online Order for Clover clover-online-orders allows DOM-Based XSS.This issue affects Smart Online Order for Clover: from n/a through 1.6.6.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08761,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:15.413Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125798",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/clover-online-orders/vulnerability/wordpress-smart-online-order-for-clover-plugin-1-6-6-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125796",
    "cve_id": "CVE-2026-125796",
    "ghsa_id": null,
    "title": "Missing Authorization vulnerability in Ahmad JS Help Desk js-support-ticket allows Exploiting Incorrectly Config...",
    "description": "Missing Authorization vulnerability in Ahmad JS Help Desk js-support-ticket allows Exploiting Incorrectly Configured Access Control Security Levels.This issue affects JS Help Desk: from n/a through 5.0.5.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
    "epss_score": 0.00207,
    "epss_percentile": 0.10944,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-16T00:17:15.270Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125796",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/js-support-ticket/vulnerability/wordpress-js-help-desk-plugin-5-0-5-broken-access-control-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125760",
    "cve_id": "CVE-2026-125760",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Bit Apps B...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Bit Apps Bit Assist bit-assist allows DOM-Based XSS.This issue affects Bit Assist: from n/a through 1.8.4.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.0876,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-16T00:17:15.073Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125760",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/bit-assist/vulnerability/wordpress-bit-assist-plugin-1-8-4-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-129490",
    "cve_id": "CVE-2026-129490",
    "ghsa_id": null,
    "title": "littlefs through 2.11.3, when built with LFS_MIGRATE, contains a type confusion vulnerability in lfs_dir_travers...",
    "description": "littlefs through 2.11.3, when built with LFS_MIGRATE, contains a type confusion vulnerability in lfs_dir_traverse() that treats a stack lfs_diskoff struct as an lfs_attr array. Attackers can supply a crafted littlefs v1 image whose metadata is read as LFS_FROM_USERATTRS during migration, causing out-of-bounds stack reads and process crashes.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00165,
    "epss_percentile": 0.05843,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-843"
    ],
    "published_at": "2026-11-15T21:16:56.620Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129490",
    "references": [
      "https://github.com/littlefs-project/littlefs/blob/v2.11.3/lfs.c#L1056-L1063",
      "https://github.com/littlefs-project/littlefs/issues/1213",
      "https://github.com/sigdevel/pocs/blob/main/res/littlefs/1/1_lfs_dir_traverse_lfs_c_1059.img",
      "https://www.vulncheck.com/advisories/littlefs-through-2.11.3-type-confusion-in-lfs-dir-traverse-via-lfs-migrate",
      "http://www.openwall.com/lists/oss-security/2026/11/16/6"
    ]
  },
  {
    "id": "CVE-2026-129485",
    "cve_id": "CVE-2026-129485",
    "ghsa_id": null,
    "title": "Kroki before 0.36.0 contains a server-side request forgery vulnerability in the BlockDiag family of engines that...",
    "description": "Kroki before 0.36.0 contains a server-side request forgery vulnerability in the BlockDiag family of engines that allows unauthenticated attackers to make server requests via node icon and background attributes. Attackers can send crafted diagrams to POST /blockdiag/svg or sibling endpoints to query internal services or cloud metadata and read local image files from the server.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:N/A:N",
    "epss_score": 0.00314,
    "epss_percentile": 0.24888,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-918"
    ],
    "published_at": "2026-11-15T21:16:56.473Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129485",
    "references": [
      "https://github.com/yuzutech/kroki/blob/v0.35.0/server/src/main/java/io/kroki/server/service/Blockdiag.java#L64-L85",
      "https://github.com/yuzutech/kroki/commit/becd3b4a86754cb08d0fe54f65e92a6cab542409",
      "https://github.com/yuzutech/kroki/releases/tag/v0.36.0",
      "https://github.com/yuzutech/kroki/security/advisories/GHSA-jwh8-j584-79hp",
      "https://www.vulncheck.com/advisories/kroki-before-0.36.0-ssrf-via-blockdiag-icon-and-background-attributes"
    ]
  },
  {
    "id": "CVE-2026-129484",
    "cve_id": "CVE-2026-129484",
    "ghsa_id": null,
    "title": "Kroki before 0.36.0 contains a reflected cross-site scripting vulnerability that allows unauthenticated attacker...",
    "description": "Kroki before 0.36.0 contains a reflected cross-site scripting vulnerability that allows unauthenticated attackers to inject scripts via unvalidated svg-color-dark-scheme and svg-color-light-scheme options. Attackers can craft a GET /goat/svg URL whose option value closes the SVG style element, executing JavaScript in the Kroki origin when victims open it.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": 0.00211,
    "epss_percentile": 0.11416,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T21:16:56.327Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129484",
    "references": [
      "https://github.com/yuzutech/kroki/blob/v0.35.0/server/src/main/java/io/kroki/server/service/Goat.java#L61-L71",
      "https://github.com/yuzutech/kroki/commit/a0a1435cc38eb7b258c555a883b7687424ad6784",
      "https://github.com/yuzutech/kroki/releases/tag/v0.36.0",
      "https://github.com/yuzutech/kroki/security/advisories/GHSA-xp94-px2v-f7f2",
      "https://www.vulncheck.com/advisories/kroki-before-0.36.0-reflected-xss-via-goat-svg-color-scheme-options"
    ]
  },
  {
    "id": "CVE-2025-71470",
    "cve_id": "CVE-2025-71470",
    "ghsa_id": null,
    "title": "MicroQuickJS (mquickjs) before commit 99eed3f contains an out-of-bounds read vulnerability because JS_Call() rai...",
    "description": "MicroQuickJS (mquickjs) before commit 99eed3f contains an out-of-bounds read vulnerability because JS_Call() raises exceptions during frame setup without updating ctx->sp and ctx->fp. Attackers can supply JavaScript that calls a non-function value, causing build_backtrace() to walk stale frame pointers and crash the engine for denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00121,
    "epss_percentile": 0.01995,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-125"
    ],
    "published_at": "2026-11-15T21:16:56.167Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-71470",
    "references": [
      "https://github.com/bellard/mquickjs/commit/99eed3f94cb66ea7e02fd3472ca7374dee31bb89",
      "https://github.com/bellard/mquickjs/issues/24",
      "https://github.com/sigdevel/pocs/blob/main/res/mquickjs/1/mquickjs_c_3981",
      "https://www.vulncheck.com/advisories/microquickjs-before-commit-99eed3f-out-of-bounds-read-in-build-backtrace",
      "http://www.openwall.com/lists/oss-security/2026/11/16/9"
    ]
  },
  {
    "id": "CVE-2025-71469",
    "cve_id": "CVE-2025-71469",
    "ghsa_id": null,
    "title": "GPAC before 26.02.0 contains a type confusion vulnerability in ctxload_process() that passes non-object descript...",
    "description": "GPAC before 26.02.0 contains a type confusion vulnerability in ctxload_process() that passes non-object descriptors to ODS_SetupOD() without checking the descriptor tag. Attackers can supply a crafted XMT file with a URL-bearing descriptor that crashes MP4Box or other GPAC-based applications in gf_scene_ns_connect_object(), causing denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00165,
    "epss_percentile": 0.05847,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-843"
    ],
    "published_at": "2026-11-15T21:16:56.000Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-71469",
    "references": [
      "https://github.com/gpac/gpac/blob/v2.4.0/src/filters/load_bt_xmt.c#L649-L656",
      "https://github.com/gpac/gpac/commit/62714f27c64a3d1eb7e880f9eed2d38673cb43ce",
      "https://github.com/gpac/gpac/issues/3271",
      "https://github.com/sigdevel/pocs/blob/main/res/gpac/MP4Box/30/30_compositor_scene_ns_c_479_in_gf_scene_ns_connect_object",
      "https://www.vulncheck.com/advisories/gpac-before-26.02.0-type-confusion-dos-via-xmt-bt-scene-loader"
    ]
  },
  {
    "id": "CVE-2025-71468",
    "cve_id": "CVE-2025-71468",
    "ghsa_id": null,
    "title": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in gf_dash_group_get_audio_channels() in s...",
    "description": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in gf_dash_group_get_audio_channels() in src/media_tools/dash_client.c that allows attackers to crash applications via crafted DASH manifests. Attackers can supply an MPD whose AudioChannelConfiguration element omits schemeIdUri or value, crashing MP4Box or GPAC DASH clients and causing denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00121,
    "epss_percentile": 0.01995,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-476"
    ],
    "published_at": "2026-11-15T21:16:55.840Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-71468",
    "references": [
      "https://github.com/gpac/gpac/blob/v2.4.0/src/media_tools/dash_client.c#L10160-L10165",
      "https://github.com/gpac/gpac/commit/62714f27c64a3d1eb7e880f9eed2d38673cb43ce",
      "https://github.com/gpac/gpac/issues/3269",
      "https://github.com/gpac/gpac/issues/3270",
      "https://www.vulncheck.com/advisories/gpac-before-26.02.0-null-pointer-dereference-via-gf-dash-group-get-audio-channels"
    ]
  },
  {
    "id": "CVE-2025-71467",
    "cve_id": "CVE-2025-71467",
    "ghsa_id": null,
    "title": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in gf_node_get_field_by_name() in src/scen...",
    "description": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in gf_node_get_field_by_name() in src/scenegraph/base_scenegraph.c that lets attackers crash applications. Attackers can supply a crafted XMT scene referencing a never-created node to crash MP4Box or GPAC scene loader applications, causing denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00121,
    "epss_percentile": 0.01995,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-476"
    ],
    "published_at": "2026-11-15T21:16:55.677Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-71467",
    "references": [
      "https://github.com/gpac/gpac/blob/v2.4.0/src/scenegraph/base_scenegraph.c#L2083-L2087",
      "https://github.com/gpac/gpac/commit/62714f27c64a3d1eb7e880f9eed2d38673cb43ce",
      "https://github.com/gpac/gpac/issues/3268",
      "https://github.com/sigdevel/pocs/blob/main/res/gpac/MP4Box/27/27_gf_node_get_field_by_name_scenegraph_base_scenegraph_c_2088",
      "https://www.vulncheck.com/advisories/gpac-before-26.02.0-null-pointer-dereference-via-gf-node-get-field-by-name"
    ]
  },
  {
    "id": "CVE-2025-71466",
    "cve_id": "CVE-2025-71466",
    "ghsa_id": null,
    "title": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in m2tsdmx_update_sdt() in src/filters/dmx...",
    "description": "GPAC before 26.02.0 contains a NULL pointer dereference vulnerability in m2tsdmx_update_sdt() in src/filters/dmx_m2ts.c that allows attackers to crash the MPEG-2 TS demuxer. Attackers can supply a crafted .ts file with an invalid service descriptor leaving service or provider names NULL to crash MP4Box and cause denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00121,
    "epss_percentile": 0.01996,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-476"
    ],
    "published_at": "2026-11-15T21:16:55.503Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-71466",
    "references": [
      "https://github.com/gpac/gpac/blob/v2.4.0/src/filters/dmx_m2ts.c#L185-L189",
      "https://github.com/gpac/gpac/commit/62714f27c64a3d1eb7e880f9eed2d38673cb43ce",
      "https://github.com/gpac/gpac/issues/3267",
      "https://github.com/sigdevel/pocs/blob/main/res/gpac/MP4Box/26/26_m2tsdmx_update_sdt_filters_dmx_m2ts_c_218",
      "https://www.vulncheck.com/advisories/gpac-before-26.02.0-null-pointer-dereference-via-m2tsdmx-update-sdt"
    ]
  },
  {
    "id": "CVE-2026-128893",
    "cve_id": "CVE-2026-128893",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Marcin Wis...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Marcin Wise Chat wise-chat allows Reflected XSS.This issue affects Wise Chat: from n/a through 3.4.5.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03923,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T20:16:47.467Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-128893",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wise-chat/vulnerability/wordpress-wise-chat-plugin-3-4-5-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125799",
    "cve_id": "CVE-2026-125799",
    "ghsa_id": null,
    "title": "Insertion of Sensitive Information into Externally-Accessible File or Directory vulnerability in Looks Awesome F...",
    "description": "Insertion of Sensitive Information into Externally-Accessible File or Directory vulnerability in Looks Awesome Flow-Flow Social Stream flow-flow-social-streams allows Retrieve Embedded Sensitive Data.This issue affects Flow-Flow Social Stream: from n/a through 5.0.5.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.00245,
    "epss_percentile": 0.15922,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-538"
    ],
    "published_at": "2026-11-15T20:16:47.317Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125799",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/flow-flow-social-streams/vulnerability/wordpress-flow-flow-social-stream-plugin-5-0-5-sensitive-data-exposure-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125795",
    "cve_id": "CVE-2026-125795",
    "ghsa_id": null,
    "title": "Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerab...",
    "description": "Improper Control of Filename for Include/Require Statement in PHP Program ('PHP Remote File Inclusion') vulnerability in Estatik Estatik estatik allows PHP Local File Inclusion.This issue affects Estatik: from n/a through 4.3.6.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.0044,
    "epss_percentile": 0.38945,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-98"
    ],
    "published_at": "2026-11-15T20:16:47.163Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125795",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/estatik/vulnerability/wordpress-estatik-plugin-4-3-6-local-file-inclusion-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125793",
    "cve_id": "CVE-2026-125793",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in flexmls Fl...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in flexmls Flexmls® IDX flexmls-idx allows Reflected XSS.This issue affects Flexmls® IDX: from n/a through 4.1.2.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03927,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T20:16:47.027Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125793",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/flexmls-idx/vulnerability/wordpress-flexmls-idx-plugin-4-1-2-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125771",
    "cve_id": "CVE-2026-125771",
    "ghsa_id": null,
    "title": "Incorrect Privilege Assignment vulnerability in AtlasAiDev MCP Server for WordPress ai-workflow-automation-ai-ag...",
    "description": "Incorrect Privilege Assignment vulnerability in AtlasAiDev MCP Server for WordPress ai-workflow-automation-ai-agent-hub allows Privilege Escalation.This issue affects MCP Server for WordPress: from n/a through 2.0.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00257,
    "epss_percentile": 0.1754,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-266"
    ],
    "published_at": "2026-11-15T20:16:46.890Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125771",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/ai-workflow-automation-ai-agent-hub/vulnerability/wordpress-mcp-server-for-wordpress-plugin-2-0-3-privilege-escalation-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125765",
    "cve_id": "CVE-2026-125765",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in ShortPixel...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in ShortPixel ShortPixel Adaptive Images shortpixel-adaptive-images allows Stored XSS.This issue affects ShortPixel Adaptive Images: from n/a through 3.11.6.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03919,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T20:16:46.743Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125765",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/shortpixel-adaptive-images/vulnerability/wordpress-shortpixel-adaptive-images-plugin-3-11-6-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125733",
    "cve_id": "CVE-2026-125733",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in DevItems S...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in DevItems ShopLentor woolentor-addons allows Reflected XSS.This issue affects ShopLentor: from n/a through 3.5.7.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03925,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T20:16:46.600Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125733",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/woolentor-addons/vulnerability/wordpress-shoplentor-plugin-3-5-7-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125447",
    "cve_id": "CVE-2026-125447",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Kaliforms ...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Kaliforms Kali Forms kali-forms allows Reflected XSS.This issue affects Kali Forms: from n/a through 2.4.31.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.0392,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T20:16:45.760Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125447",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/kali-forms/vulnerability/wordpress-kali-forms-plugin-2-4-31-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-129483",
    "cve_id": "CVE-2026-129483",
    "ghsa_id": null,
    "title": "Cyrus SASL through 2.1.28 contains an authentication bypass vulnerability in the SRP server mechanism because sr...",
    "description": "Cyrus SASL through 2.1.28 contains an authentication bypass vulnerability in the SRP server mechanism because srp_server_mech_step2 does not reject client public values A that are multiples of N. Unauthenticated network clients can send A equal to N to force a zero shared secret, authenticating as any existing user without the password and learning session keys.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.0038,
    "epss_percentile": 0.3271,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-287"
    ],
    "published_at": "2026-11-15T19:17:27.530Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129483",
    "references": [
      "https://gist.github.com/afldl/18d15d3f5a1df99411e35000c7de80db",
      "https://github.com/cyrusimap/cyrus-sasl/blob/cyrus-sasl-2.1.28/plugins/srp.c#L2046-L2050",
      "https://github.com/cyrusimap/cyrus-sasl/commit/fb3724f43dc50247ff2bf02135457d6d77031654",
      "https://github.com/cyrusimap/cyrus-sasl/issues/896",
      "https://seclists.org/oss-sec/2026/q4/122"
    ]
  },
  {
    "id": "CVE-2026-129482",
    "cve_id": "CVE-2026-129482",
    "ghsa_id": null,
    "title": "OkHttp through 5.5.1 contains an improper certificate validation vulnerability in CertificatePinner that skips p...",
    "description": "OkHttp through 5.5.1 contains an improper certificate validation vulnerability in CertificatePinner that skips pin checks because Pin.matchesHostname does not normalize trailing-dot hostnames. Network attackers with a CA-trusted certificate not matching configured pins can intercept or modify TLS traffic when applications request the trailing-dot form of pinned hosts.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",
    "epss_score": 0.00131,
    "epss_percentile": 0.02816,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-295"
    ],
    "published_at": "2026-11-15T19:17:27.377Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129482",
    "references": [
      "https://github.com/lysine-dev/okhttp/blob/parent-5.5.1/okhttp/src/commonJvmAndroid/kotlin/okhttp3/CertificatePinner.kt#L293-L314",
      "https://github.com/lysine-dev/okhttp/commit/30aa589761a9b4f5fe84c00e21e5ab44b22bd7c1",
      "https://github.com/lysine-dev/okhttp/issues/9724",
      "https://github.com/lysine-dev/okhttp/pull/9734",
      "https://www.vulncheck.com/advisories/okhttp-through-5.5.1-certificate-pinning-bypass-via-trailing-dot-hostname"
    ]
  },
  {
    "id": "CVE-2026-129480",
    "cve_id": "CVE-2026-129480",
    "ghsa_id": null,
    "title": "Assimp through 6.0.6 contains a heap out-of-bounds read vulnerability in MD2Importer::InternReadFile that allows...",
    "description": "Assimp through 6.0.6 contains a heap out-of-bounds read vulnerability in MD2Importer::InternReadFile that allows attackers to read past the file buffer via an unvalidated stored frameSize header field. Attackers can supply a crafted .md2 file loaded with a non-zero keyframe selected to crash the application or leak adjacent heap memory into the imported mesh.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:L/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:H",
    "epss_score": 0.00115,
    "epss_percentile": 0.01583,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-125"
    ],
    "published_at": "2026-11-15T19:17:27.227Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129480",
    "references": [
      "https://github.com/assimp/assimp/blob/v6.0.6/code/AssetLib/MD2/MD2Loader.cpp#L262-L276",
      "https://github.com/assimp/assimp/issues/6932",
      "https://github.com/assimp/assimp/pull/7028",
      "https://www.vulncheck.com/advisories/assimp-through-6.0.6-heap-out-of-bounds-read-via-md2-importer-framesize",
      "https://github.com/assimp/assimp/issues/6932"
    ]
  },
  {
    "id": "CVE-2026-129479",
    "cve_id": "CVE-2026-129479",
    "ghsa_id": null,
    "title": "Assimp through 6.0.6 contains an integer overflow vulnerability in OgreBinarySerializer::ReadSubMesh that allows...",
    "description": "Assimp through 6.0.6 contains an integer overflow vulnerability in OgreBinarySerializer::ReadSubMesh that allows attackers to crash applications by supplying crafted Ogre binary .mesh files. Attackers can set a large index count so the 32-bit buffer size wraps, causing a segmentation fault in aiMesh::~aiMesh() during scene teardown.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00121,
    "epss_percentile": 0.01991,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-190"
    ],
    "published_at": "2026-11-15T19:17:27.077Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129479",
    "references": [
      "https://github.com/assimp/assimp/blob/v6.0.6/code/AssetLib/Ogre/OgreBinarySerializer.cpp#L362-L374",
      "https://github.com/assimp/assimp/issues/6930",
      "https://github.com/assimp/assimp/pull/7026",
      "https://www.vulncheck.com/advisories/assimp-through-6.0.6-integer-overflow-via-ogrebinaryserializer-readsubmesh"
    ]
  },
  {
    "id": "CVE-2026-129478",
    "cve_id": "CVE-2026-129478",
    "ghsa_id": null,
    "title": "Assimp through 6.0.6 contains a heap out-of-bounds read vulnerability in glTFCommon::Util::ParseDataURI caused b...",
    "description": "Assimp through 6.0.6 contains a heap out-of-bounds read vulnerability in glTFCommon::Util::ParseDataURI caused by storing the data offset in a signed char. Attackers can supply a crafted glTF file with a raw data URI whose segment starts beyond byte 127 to crash applications or leak adjacent heap memory.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:L/I:N/A:H",
    "epss_score": 0.0012,
    "epss_percentile": 0.01903,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-125"
    ],
    "published_at": "2026-11-15T19:17:26.920Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129478",
    "references": [
      "https://github.com/assimp/assimp/blob/v6.0.6/code/AssetLib/glTFCommon/glTFCommon.cpp#L86-L105",
      "https://github.com/assimp/assimp/issues/6927",
      "https://github.com/assimp/assimp/pull/7029",
      "https://www.vulncheck.com/advisories/assimp-through-6.0.6-heap-out-of-bounds-read-via-gltf-parsedatauri",
      "https://github.com/assimp/assimp/issues/6927"
    ]
  },
  {
    "id": "CVE-2026-129477",
    "cve_id": "CVE-2026-129477",
    "ghsa_id": null,
    "title": "Assimp through 6.0.6 contains a path traversal vulnerability in the glTF and glTF2 importers that allows attacke...",
    "description": "Assimp through 6.0.6 contains a path traversal vulnerability in the glTF and glTF2 importers that allows attackers to read local files via crafted buffers[].uri values. Attackers can supply glTF models with '..' segments or absolute paths in buffer URIs to load files like /etc/passwd into imported mesh vertex data.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N",
    "epss_score": 0.00146,
    "epss_percentile": 0.03889,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-15T19:17:26.777Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129477",
    "references": [
      "https://github.com/assimp/assimp/blob/v6.0.6/code/AssetLib/glTF2/glTF2Asset.inl#L608-L612",
      "https://github.com/assimp/assimp/issues/6933",
      "https://github.com/assimp/assimp/pull/7027",
      "https://www.vulncheck.com/advisories/assimp-through-6.0.6-path-traversal-via-gltf-external-buffer-uris",
      "https://github.com/assimp/assimp/issues/6933"
    ]
  },
  {
    "id": "CVE-2026-129453",
    "cve_id": "CVE-2026-129453",
    "ghsa_id": null,
    "title": "A vulnerability was found in DrayTek Vigor2960 1.5.1.6.",
    "description": "A vulnerability was found in DrayTek Vigor2960 1.5.1.6. This issue affects the function check_file_exist of the file /cgi-bin/mainfunction.cgi of the component File Existence Check. Performing a manipulation of the argument upload_name results in heap-based buffer overflow. The attack may be initiated remotely. The exploit has been made public and could be used. Upgrading to version 1.5.1.7 is capable of addressin...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H",
    "epss_score": 0.00466,
    "epss_percentile": 0.41121,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-119",
      "CWE-122"
    ],
    "published_at": "2026-11-15T19:17:26.583Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129453",
    "references": [
      "https://fw.draytek.com.tw/Vigor2960/Firmware/v1.5.1.7/Vigor2960_v1.5.1.7.zip",
      "https://github.com/yikesoftware/DrayTek_Vigor2960_Security_Analysis/tree/main/cases/DRV2960-0020-authenticated-check-file-exist-direct-cgi-core",
      "https://vuldb.com/cve/CVE-2026-129453",
      "https://vuldb.com/submit/1044963",
      "https://vuldb.com/vuln/437464"
    ]
  },
  {
    "id": "CVE-2026-125857",
    "cve_id": "CVE-2026-125857",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Sarah Gile...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Sarah Giles Dynamic User Directory dynamic-user-directory allows Stored XSS.This issue affects Dynamic User Directory: from n/a through 2.4.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0013,
    "epss_percentile": 0.02754,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:26.287Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125857",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/dynamic-user-directory/vulnerability/wordpress-dynamic-user-directory-plugin-2-4-cross-site-scripting-xss-vulnerability-2?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125832",
    "cve_id": "CVE-2026-125832",
    "ghsa_id": null,
    "title": "Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Passionate...",
    "description": "Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') vulnerability in Passionate Programmer Peter WP Data Access wp-data-access allows SQL Injection.This issue affects WP Data Access: from n/a through 5.5.92.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:N/A:L",
    "epss_score": 0.00215,
    "epss_percentile": 0.12091,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-89"
    ],
    "published_at": "2026-11-15T19:17:26.137Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125832",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wp-data-access/vulnerability/wordpress-wp-data-access-plugin-5-5-92-sql-injection-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125828",
    "cve_id": "CVE-2026-125828",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Liquid Web...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Liquid Web / StellarWP BookIt bookit allows Stored XSS.This issue affects BookIt: from n/a through 2.6.0.7.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.0876,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.990Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125828",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/bookit/vulnerability/wordpress-bookit-plugin-2-6-0-7-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125813",
    "cve_id": "CVE-2026-125813",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Ays Pro Su...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Ays Pro Survey Maker survey-maker allows Reflected XSS.This issue affects Survey Maker: from n/a through 5.2.4.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03923,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.847Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125813",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/survey-maker/vulnerability/wordpress-survey-maker-plugin-5-2-4-3-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125805",
    "cve_id": "CVE-2026-125805",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in AyeCode Lt...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in AyeCode Ltd GeoDirectory geodirectory allows Stored XSS.This issue affects GeoDirectory: from n/a through 2.8.204.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0013,
    "epss_percentile": 0.02756,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.703Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125805",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/geodirectory/vulnerability/wordpress-geodirectory-plugin-2-8-204-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125791",
    "cve_id": "CVE-2026-125791",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in iWorks Orp...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in iWorks Orphans sierotki allows Stored XSS.This issue affects Orphans: from n/a through 3.4.6.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08759,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.563Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125791",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/sierotki/vulnerability/wordpress-orphans-plugin-3-4-6-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125790",
    "cve_id": "CVE-2026-125790",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in e4jvikwp V...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in e4jvikwp VikBooking Hotel Booking Engine & PMS vikbooking allows Stored XSS.This issue affects VikBooking Hotel Booking Engine & PMS: from n/a through 1.8.20.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08759,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.423Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125790",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/vikbooking/vulnerability/wordpress-vikbooking-hotel-booking-engine-pms-plugin-1-8-20-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125789",
    "cve_id": "CVE-2026-125789",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in e4jvikwp V...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in e4jvikwp VikBooking Hotel Booking Engine & PMS vikbooking allows Stored XSS.This issue affects VikBooking Hotel Booking Engine & PMS: from n/a through 1.8.20.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08757,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:25.277Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125789",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/vikbooking/vulnerability/wordpress-vikbooking-hotel-booking-engine-pms-plugin-1-8-20-cross-site-scripting-xss-vulnerability-2?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125780",
    "cve_id": "CVE-2026-125780",
    "ghsa_id": null,
    "title": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Acowebs Woocomme...",
    "description": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Acowebs Woocommerce Custom Product Addons Pro woo-custom-product-addons-pro allows Path Traversal.This issue affects Woocommerce Custom Product Addons Pro: from n/a through 5.9.0.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00468,
    "epss_percentile": 0.41254,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-15T19:17:25.130Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125780",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/woo-custom-product-addons-pro/vulnerability/wordpress-woocommerce-custom-product-addons-pro-plugin-5-9-0-arbitrary-file-deletion-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125775",
    "cve_id": "CVE-2026-125775",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in CRM Perks ...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in CRM Perks CRM Perks Forms crm-perks-forms allows Reflected XSS.This issue affects CRM Perks Forms: from n/a through 1.1.8.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03926,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:24.977Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125775",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/crm-perks-forms/vulnerability/wordpress-crm-perks-forms-plugin-1-1-8-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125769",
    "cve_id": "CVE-2026-125769",
    "ghsa_id": null,
    "title": "Incorrect Privilege Assignment vulnerability in Nasir Ahmed Advanced Form Integration advanced-form-integration ...",
    "description": "Incorrect Privilege Assignment vulnerability in Nasir Ahmed Advanced Form Integration advanced-form-integration allows Privilege Escalation.This issue affects Advanced Form Integration: from n/a through 2.11.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00349,
    "epss_percentile": 0.29182,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-266"
    ],
    "published_at": "2026-11-15T19:17:24.813Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125769",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/advanced-form-integration/vulnerability/wordpress-advanced-form-integration-plugin-2-11-3-privilege-escalation-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125764",
    "cve_id": "CVE-2026-125764",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in E2Pdf.com ...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in E2Pdf.com e2pdf e2pdf allows Stored XSS.This issue affects e2pdf: from n/a through 1.32.65.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00149,
    "epss_percentile": 0.04177,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:24.647Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125764",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/e2pdf/vulnerability/wordpress-e2pdf-plugin-1-32-65-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125449",
    "cve_id": "CVE-2026-125449",
    "ghsa_id": null,
    "title": "Deserialization of Untrusted Data vulnerability in Mamunur Rashid Testimonial Slider testimonial-slider-and-show...",
    "description": "Deserialization of Untrusted Data vulnerability in Mamunur Rashid Testimonial Slider testimonial-slider-and-showcase allows Object Injection.This issue affects Testimonial Slider: from n/a through 3.0.2.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00294,
    "epss_percentile": 0.22361,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-502"
    ],
    "published_at": "2026-11-15T19:17:24.497Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125449",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/testimonial-slider-and-showcase/vulnerability/wordpress-testimonial-slider-plugin-3-0-2-php-object-injection-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-125443",
    "cve_id": "CVE-2026-125443",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Denishua W...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Denishua WPJAM Basic wpjam-basic allows DOM-Based XSS.This issue affects WPJAM Basic: from n/a through 7.1.2.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08758,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:24.340Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-125443",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wpjam-basic/vulnerability/wordpress-wpjam-basic-plugin-7-1-2-cross-site-scripting-xss-vulnerability-2?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-124995",
    "cve_id": "CVE-2026-124995",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Michal Jaw...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Michal Jaworski Track, Analyze & Optimize by WP Tao wp-tao allows Stored XSS.This issue affects Track, Analyze & Optimize by WP Tao: from n/a through 1.3.1.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.03925,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:24.187Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124995",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/wp-tao/vulnerability/wordpress-track-analyze-optimize-by-wp-tao-plugin-1-3-1-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-124755",
    "cve_id": "CVE-2026-124755",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Justin Kru...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Justin Kruit Advanced Custom Fields: Font Awesome Field advanced-custom-fields-font-awesome allows Stored XSS.This issue affects Advanced Custom Fields: Font Awesome Field: from n/a through 6.1.4.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00173,
    "epss_percentile": 0.06895,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:24.037Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124755",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/advanced-custom-fields-font-awesome/vulnerability/wordpress-advanced-custom-fields-font-awesome-field-plugin-6-1-4-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-124270",
    "cve_id": "CVE-2026-124270",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Basix NEX-...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Basix NEX-Forms nex-forms-express-wp-form-builder allows Reflected XSS.This issue affects NEX-Forms: from n/a through 9.3.3.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08763,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:21.687Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124270",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/nex-forms-express-wp-form-builder/vulnerability/wordpress-nex-forms-plugin-9-3-3-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-124259",
    "cve_id": "CVE-2026-124259",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Franky Eve...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Franky Events Made Easy events-made-easy allows Reflected XSS.This issue affects Events Made Easy: from n/a through 3.3.5.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.0019,
    "epss_percentile": 0.08764,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:21.543Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124259",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/events-made-easy/vulnerability/wordpress-events-made-easy-plugin-3-3-5-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-124254",
    "cve_id": "CVE-2026-124254",
    "ghsa_id": null,
    "title": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Exactly WW...",
    "description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') vulnerability in Exactly WWW LLC EWWW Image Optimizer ewww-image-optimizer allows Stored XSS.This issue affects EWWW Image Optimizer: from n/a through 8.9.1.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:L",
    "epss_score": 0.00146,
    "epss_percentile": 0.0392,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-15T19:17:21.387Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124254",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/ewww-image-optimizer/vulnerability/wordpress-ewww-image-optimizer-plugin-8-9-1-cross-site-scripting-xss-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-122662",
    "cve_id": "CVE-2026-122662",
    "ghsa_id": null,
    "title": "Deserialization of Untrusted Data vulnerability in Barn2 Plugins Document Library Pro document-library-pro allow...",
    "description": "Deserialization of Untrusted Data vulnerability in Barn2 Plugins Document Library Pro document-library-pro allows Object Injection.This issue affects Document Library Pro: from n/a before 4.2.2.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00313,
    "epss_percentile": 0.2476,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-502"
    ],
    "published_at": "2026-11-15T19:17:20.507Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-122662",
    "references": [
      "https://patchstack.com/database/wordpress/plugin/document-library-pro/vulnerability/wordpress-document-library-pro-plugin-4-2-2-php-object-injection-vulnerability?_s_id=cve"
    ]
  },
  {
    "id": "CVE-2026-129469",
    "cve_id": "CVE-2026-129469",
    "ghsa_id": null,
    "title": "Course-tencent-cloud before 2.0.2 contains an insecure direct object reference vulnerability that allows unauthe...",
    "description": "Course-tencent-cloud before 2.0.2 contains an insecure direct object reference vulnerability that allows unauthenticated attackers to view other users' refund previews by supplying an order sn to /api/refund/confirm. Attackers can compute valid sn values from Sqids-encoded sequential order ids using the default key to disclose ordered items, prices, refund amounts, fees and deadlines.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00256,
    "epss_percentile": 0.17449,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-639"
    ],
    "published_at": "2026-11-15T18:17:00.280Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129469",
    "references": [
      "https://github.com/xiaochong0302/course-tencent-cloud/blob/v2.0.1/app/Http/Api/Controllers/RefundController.php#L24-L33",
      "https://github.com/xiaochong0302/course-tencent-cloud/blob/v2.0.1/app/Http/Home/Controllers/RefundController.php#L49-L64",
      "https://github.com/xiaochong0302/course-tencent-cloud/commit/8e8bcb4e13795006e16d51158790ce3120c8164a",
      "https://github.com/xiaochong0302/course-tencent-cloud/issues/38",
      "https://hackmd.io/@hieund/course-tencent-cloud-refund-confirm-missing-owner-check-idor"
    ]
  },
  {
    "id": "CVE-2026-129468",
    "cve_id": "CVE-2026-129468",
    "ghsa_id": null,
    "title": "Netcccyun dnsmgr 2.18 before 2.22 contains a missing authorization vulnerability in POST /cloudflare/get_domain_...",
    "description": "Netcccyun dnsmgr 2.18 before 2.22 contains a missing authorization vulnerability in POST /cloudflare/get_domain_default_line that allows restricted users to access domains outside their permissions. Restricted sub-users or single-domain logins can iterate the domain_id parameter to enumerate panel domain ids and read each domain's DNS line list and default line.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00199,
    "epss_percentile": 0.0989,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-15T18:17:00.110Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129468",
    "references": [
      "https://github.com/netcccyun/dnsmgr/blob/b42dbcf88bccca287e9e9af53e87ba399a5ae295/app/controller/Cloudflare.php#L381-L398",
      "https://github.com/netcccyun/dnsmgr/commit/175468c6423c04a6b46e56663c37f090bef5381f",
      "https://github.com/netcccyun/dnsmgr/issues/580",
      "https://hackmd.io/@hieund/dnsmgr-cloudflare-default-line-missing-authz-cross-tenant-idor",
      "https://www.vulncheck.com/advisories/netcccyun-dnsmgr-2.18-before-2.22-missing-authorization-via-get-domain-default-line"
    ]
  },
  {
    "id": "CVE-2026-129467",
    "cve_id": "CVE-2026-129467",
    "ghsa_id": null,
    "title": "GeoPulse 1.5.0 through 2.3.0 contains an insecure direct object reference vulnerability in GET /api/v1/places/ge...",
    "description": "GeoPulse 1.5.0 through 2.3.0 contains an insecure direct object reference vulnerability in GET /api/v1/places/geocoding/{id} that allows authenticated users to read other users' private locations. Attackers can enumerate sequential reverse_geocoding_location ids to retrieve other users' custom place names, city, country, coordinates and bounding boxes from their history.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    "epss_score": 0.00218,
    "epss_percentile": 0.12395,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-639"
    ],
    "published_at": "2026-11-15T18:16:59.920Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129467",
    "references": [
      "https://github.com/tess1o/geopulse/blob/v2.3.0/backend/src/main/java/org/github/tess1o/geopulse/streaming/service/PlaceDetailsService.java#L272-L301",
      "https://github.com/tess1o/geopulse/commit/b994ec588b75357a6da743b0389fcae3c4fa4925",
      "https://github.com/tess1o/geopulse/issues/672",
      "https://github.com/tess1o/geopulse/pull/673",
      "https://hackmd.io/@hieund/geopulse-geocoding-place-details-cross-user-idor"
    ]
  },
  {
    "id": "CVE-2026-129452",
    "cve_id": "CVE-2026-129452",
    "ghsa_id": null,
    "title": "A vulnerability has been found in DrayTek Vigor2960 1.5.1.6.",
    "description": "A vulnerability has been found in DrayTek Vigor2960 1.5.1.6. This vulnerability affects the function set_table of the file /cgi-bin/mainfunction.cgi. Such manipulation of the argument jsondata leads to command injection. The attack can be launched remotely. The exploit has been disclosed to the public and may be used. Upgrading to version 1.5.1.7 is able to resolve this issue. It is suggested to upgrade the affect...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:H/I:H/A:H",
    "epss_score": 0.02154,
    "epss_percentile": 0.82548,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-74",
      "CWE-77"
    ],
    "published_at": "2026-11-15T18:16:59.703Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129452",
    "references": [
      "https://fw.draytek.com.tw/Vigor2960/Firmware/v1.5.1.7/Vigor2960_v1.5.1.7.zip",
      "https://github.com/yikesoftware/DrayTek_Vigor2960_Security_Analysis/tree/main/cases/DRV2960-0019-authenticated-set-table-config-field-command-injection",
      "https://vuldb.com/cve/CVE-2026-129452",
      "https://vuldb.com/submit/1044962",
      "https://vuldb.com/vuln/437463"
    ]
  },
  {
    "id": "CVE-2026-129451",
    "cve_id": "CVE-2026-129451",
    "ghsa_id": null,
    "title": "A flaw has been found in DrayTek Vigor2960 up to 1.5.1.6.",
    "description": "A flaw has been found in DrayTek Vigor2960 up to 1.5.1.6. This affects the function app_guest_export of the file /cgi-bin/mainfunction.cgi. This manipulation of the argument filename causes path traversal. The attack can be initiated remotely. The exploit has been published and may be used. Upgrading to version 1.5.1.7 is able to mitigate this issue. The affected component should be upgraded. The vendor recommends...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H",
    "epss_score": 0.00529,
    "epss_percentile": 0.45528,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-15T18:16:58.600Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129451",
    "references": [
      "https://fw.draytek.com.tw/Vigor2960/Firmware/v1.5.1.7/Vigor2960_v1.5.1.7.zip",
      "https://github.com/yikesoftware/DrayTek_Vigor2960_Security_Analysis/tree/main/cases/DRV2960-0017-authenticated-app-guest-export-path-traversal-write-delete",
      "https://vuldb.com/cve/CVE-2026-129451",
      "https://vuldb.com/submit/1044961",
      "https://vuldb.com/vuln/437462"
    ]
  },
  {
    "id": "CVE-2026-129450",
    "cve_id": "CVE-2026-129450",
    "ghsa_id": null,
    "title": "A vulnerability was detected in DrayTek Vigor2960 1.5.1.6.",
    "description": "A vulnerability was detected in DrayTek Vigor2960 1.5.1.6. Affected by this issue is the function sub_1E084 of the file /cgi-bin/mainfunction.cgi?action=doWebBackup. The manipulation of the argument option results in path traversal. It is possible to launch the attack remotely. The exploit is now public and may be used. Upgrading to version 1.5.1.7 can resolve this issue. You should upgrade the affected component....",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H",
    "epss_score": 0.00529,
    "epss_percentile": 0.45528,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-15T17:17:20.913Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129450",
    "references": [
      "https://fw.draytek.com.tw/Vigor2960/Firmware/v1.5.1.7/Vigor2960_v1.5.1.7.zip",
      "https://github.com/yikesoftware/DrayTek_Vigor2960_Security_Analysis/tree/main/cases/DRV2960-0016-authenticated-dowebbackup-path-traversal-clobber",
      "https://vuldb.com/cve/CVE-2026-129450",
      "https://vuldb.com/submit/1044958",
      "https://vuldb.com/vuln/437461"
    ]
  },
  {
    "id": "CVE-2026-114713",
    "cve_id": "CVE-2026-114713",
    "ghsa_id": null,
    "title": "UnrealIRCd Improper Neutralization of Delimiters Vulnerability",
    "description": "UnrealIRCd UnrealIRCd contains an improper neutralization of delimiters vulnerability that allows any user on a network with two or more linked servers to inject server-to-server commands that are executed with server authority.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00467,
    "epss_percentile": 0.412,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-16",
    "ecosystem": "UnrealIRCd",
    "vendor_product": "UnrealIRCd UnrealIRCd",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-140"
    ],
    "published_at": "2026-11-13T12:00:00.000Z",
    "relative_time": "7d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-114713",
    "references": [
      "https://forums.unrealircd.org/viewtopic.php?t=9487",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-114713"
    ]
  },
  {
    "id": "CVE-2026-123039",
    "cve_id": "CVE-2026-123039",
    "ghsa_id": null,
    "title": "Check Point Multiple Products Incorrect Permission Assignment for Critical Resource Vulnerability",
    "description": "Check Point Firewall, Multi-Domain Security Management Server, Scalable Platforms, Security Gateway, and Security Management Server contain an incorrect permissions assignment for critical resources vulnerability when the Gaia OS DynamicCLI daemon runs as root and listens on a world-writable local socket without authenticating connecting processes. An authenticated local user can send a command to the socket and h...",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.01938,
    "epss_percentile": 0.80567,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-16",
    "ecosystem": "Check Point",
    "vendor_product": "Check Point Multiple Products",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-732",
      "CWE-862"
    ],
    "published_at": "2026-11-13T12:00:00.000Z",
    "relative_time": "7d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123039",
    "references": [
      "https://support.checkpoint.com/results/sk/sk1000362",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-123039"
    ]
  },
  {
    "id": "CVE-2026-124194",
    "cve_id": "CVE-2026-124194",
    "ghsa_id": null,
    "title": "Microsoft Office Outlook Missing User Interaction for Potentially Unsafe Action Vulnerability",
    "description": "Microsoft Office Outlook contains a missing user interaction for potentially unsafe action vulnerability that allows an unauthorized attacker to perform spoofing over a network.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.0162,
    "epss_percentile": 0.76594,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-24",
    "ecosystem": "Microsoft",
    "vendor_product": "Microsoft Office",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-356"
    ],
    "published_at": "2026-11-10T12:00:00.000Z",
    "relative_time": "10d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124194",
    "references": [
      "https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2026-124194",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-124194"
    ]
  },
  {
    "id": "CVE-2026-111793",
    "cve_id": "CVE-2026-111793",
    "ghsa_id": null,
    "title": "Openwave Messaging Limited Webtop Media Transcoder Incorrect Resource Transfer Between Spheres Vulnerability",
    "description": "Openwave Messaging Limited Webtop Media Transcoder contains an incorrect resource transfer between spheres vulnerability that may allow an authenticated user to process and convert unintended document types if bypassing the Webmail experience.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00638,
    "epss_percentile": 0.51364,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-24",
    "ecosystem": "Openwave Messaging Limited",
    "vendor_product": "Openwave Messaging Limited Webtop Media Transcoder",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-669"
    ],
    "published_at": "2026-11-10T12:00:00.000Z",
    "relative_time": "10d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111793",
    "references": [
      "https://github.com/GISOpenwave/security-advisories-public/blob/main/CAN-2026-2032674.md",
      "https://jvn.jp/en/vu/JVNVU93403064/",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-111793"
    ]
  },
  {
    "id": "CVE-2026-20320",
    "cve_id": "CVE-2026-20320",
    "ghsa_id": null,
    "title": "Cisco BroadWorks Improper Restriction of XML External Entity Reference Vulnerability",
    "description": "Cisco BroadWorks contains an improper restriction of XML external entity reference vulnerability that could allow an unauthenticated, remote attacker to read sensitive configuration information on an affected system.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00976,
    "epss_percentile": 0.62836,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-24",
    "ecosystem": "Cisco",
    "vendor_product": "Cisco BroadWorks",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-611"
    ],
    "published_at": "2026-11-10T12:00:00.000Z",
    "relative_time": "10d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-20320",
    "references": [
      "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-bworks-xxe-uwUd7CEt",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-20320"
    ]
  }
];
