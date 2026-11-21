import { VulnerabilityItem } from "../types/vulnerability";

export const VULNERABILITIES: VulnerabilityItem[] = [
  {
    "id": "CVE-2026-122247",
    "cve_id": "CVE-2026-122247",
    "ghsa_id": "GHSA-25qc-m4pw-2w8r",
    "title": "Budibase: Unauthenticated global-admin & database creation via tenant-confusion bypass of the one-time init guard (`POST /api/global/users/init`)",
    "description": "On a self-hosted, single-tenant Budibase instance (`multiTenancy:false`), the public bootstrap endpoint `POST /api/global/users/init` remains fully exploitable **after** the instance has been provisioned. Its \"already initialised\" guard (`checkAnyUserExists()`) is evaluated inside a **tenant-scoped** database context derived from an **attacker-controlled `tenantId`** in the request body. Because the tenancy layer ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: @budibase/server",
    "affected_versions": "<= 3.38.1",
    "patched_versions": null,
    "cwes": [
      "CWE-284",
      "CWE-306",
      "CWE-770",
      "CWE-863"
    ],
    "published_at": "2026-11-20T23:50:01.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-25qc-m4pw-2w8r",
    "references": [
      "https://github.com/Budibase/budibase/security/advisories/GHSA-25qc-m4pw-2w8r",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-122247",
      "https://github.com/Budibase/budibase/commit/362a7fe9aea594531ece1cf15be76cc00bfb88b9",
      "https://github.com/Budibase/budibase/releases/tag/v3.50.0",
      "https://github.com/Budibase/budibase/releases/tag/v4.0.0"
    ]
  },
  {
    "id": "CVE-2026-122244",
    "cve_id": "CVE-2026-122244",
    "ghsa_id": "GHSA-r2q3-7m4h-63qg",
    "title": "Budibase: Cross-privilege Stored XSS in the Budibase Builder via broken HTML-escaping in `jsonFormatter.format()` rendered through `{@html}` in the CSP-less Builder origin",
    "description": "A **low-privileged application end-user** (role `BASIC` - **not** a builder or admin, and on a public data-collection form, an unauthenticated visitor) can store an HTML/JavaScript payload in ordinary row data. When a **builder or admin** later opens that table in the Budibase Builder and evaluates any Handlebars binding whose Preview surfaces the value (the Data-section **Formula** column editor, or any binding d...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.7,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:H/I:H/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: @budibase/server",
    "affected_versions": "<= 3.38.1",
    "patched_versions": null,
    "cwes": [
      "CWE-79",
      "CWE-116",
      "CWE-1021"
    ],
    "published_at": "2026-11-20T23:49:47.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-r2q3-7m4h-63qg",
    "references": [
      "https://github.com/Budibase/budibase/security/advisories/GHSA-r2q3-7m4h-63qg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-122244",
      "https://github.com/Budibase/budibase/commit/5f37fb43728639c540cc7233283f1100e9315424",
      "https://github.com/Budibase/budibase/releases/tag/v3.50.0",
      "https://github.com/Budibase/budibase/releases/tag/v4.0.0"
    ]
  },
  {
    "id": "CVE-2026-132276",
    "cve_id": "CVE-2026-132276",
    "ghsa_id": "GHSA-53pm-wgxf-c6qf",
    "title": "wcmatch: Polynomial-time ReDoS when matching untrusted names against multi-star patterns (default flags)",
    "description": "With default flags, a pattern that contains several `*` wildcards takes polynomial time, O(n^k) for k stars, to reject a crafted file name. The pattern is an ordinary developer constant such as `*_*_*_*_*.csv`; only the string being matched comes from the attacker. A 255-byte file name (the maximum on common filesystems) takes 73 s with `fnmatch.fnmatch()` and 86 s with `glob.globmatch()`. The standard library's `...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: wcmatch",
    "affected_versions": "<= 11.1",
    "patched_versions": "11.2",
    "cwes": [
      "CWE-1333"
    ],
    "published_at": "2026-11-20T23:49:18.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-53pm-wgxf-c6qf",
    "references": [
      "https://github.com/facelessuser/wcmatch/security/advisories/GHSA-53pm-wgxf-c6qf",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-132276",
      "https://github.com/facelessuser/wcmatch/commit/83491aadde57780330f993620083e979f645c80c",
      "https://github.com/facelessuser/wcmatch/releases/tag/11.2",
      "https://github.com/advisories/GHSA-53pm-wgxf-c6qf"
    ]
  },
  {
    "id": "CVE-2026-132277",
    "cve_id": "CVE-2026-132277",
    "ghsa_id": "GHSA-q87h-c5m7-659j",
    "title": "Inscriptis: Quadratic memory growth from sibling <table> elements in get_text()",
    "description": "Every sibling `<table>` adds another level of the parent's indentation, so the size of `get_text()` output grows quadratically with the number of tables. In the measurements below, a 240 KB HTML document produces about 1 billion characters and uses about 1 GB of memory. `table_end_handler()` (`model/tag/table_tag.py`) writes the rendered table into the parent element with `HtmlElement.write_verbatim_text()` (`mode...",
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
    "vendor_product": "PyPI: inscriptis",
    "affected_versions": ">= 2.0.0, <= 2.7.5",
    "patched_versions": "2.7.6",
    "cwes": [
      "CWE-400",
      "CWE-407"
    ],
    "published_at": "2026-11-20T23:48:51.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-q87h-c5m7-659j",
    "references": [
      "https://github.com/weblyzard/inscriptis/security/advisories/GHSA-q87h-c5m7-659j",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-132277",
      "https://github.com/weblyzard/inscriptis/commit/dc122894cd671a0227f8fdad60464acddaf40fc8",
      "https://github.com/weblyzard/inscriptis/releases/tag/2.7.6",
      "https://github.com/advisories/GHSA-q87h-c5m7-659j"
    ]
  },
  {
    "id": "CVE-2026-132275",
    "cve_id": "CVE-2026-132275",
    "ghsa_id": "GHSA-555j-qj3j-c8jv",
    "title": "svglib: Exponential resource consumption via nested <use> references in svg2rlg",
    "description": "`svg2rlg()` expands `<use>` references without any limit on the total number of expansions. Only direct cycles are rejected (`CircularRefError`). A group containing N `<use>` elements that point to another such group multiplies the work by N per nesting level, so an SVG of about 1.4 KB makes svglib clone and render over 100,000 nodes, taking tens of seconds of CPU time and hundreds of MiB of memory. Each additiona...",
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
    "vendor_product": "PyPI: svglib",
    "affected_versions": "<= 2.3.0",
    "patched_versions": "2.3.1",
    "cwes": [
      "CWE-400",
      "CWE-776"
    ],
    "published_at": "2026-11-20T23:47:58.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-555j-qj3j-c8jv",
    "references": [
      "https://github.com/deeplook/svglib/security/advisories/GHSA-555j-qj3j-c8jv",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-132275",
      "https://github.com/deeplook/svglib/commit/7380d3c3836940fd75f8e203fff80077b7d5a425",
      "https://github.com/deeplook/svglib/releases/tag/v2.3.1",
      "https://github.com/advisories/GHSA-555j-qj3j-c8jv"
    ]
  },
  {
    "id": "CVE-2026-104884",
    "cve_id": "CVE-2026-104884",
    "ghsa_id": "GHSA-h57j-5f5m-789v",
    "title": "contao/core-bundle: Cross-site scripting in the frontend search results",
    "description": "Commit `23e8cca3136a` hardened the search-result title against insert-tag/XSS by setting `$objTemplate->title = StringUtil::specialchars(StringUtil::stripInsertTags($arrResult[$i]['title']))`. But the legacy HTML5 template does not use that `title` variable - it prints the raw `link` variable, which is assigned without escaping. Affected configuration (important): on 5.7.9 the default search template is the Twig `...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): contao/core-bundle",
    "affected_versions": ">= 4.9.0, < 5.3.50",
    "patched_versions": "5.3.50",
    "cwes": [
      "CWE-79"
    ],
    "published_at": "2026-11-20T23:46:56.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-h57j-5f5m-789v",
    "references": [
      "https://github.com/contao/contao/security/advisories/GHSA-h57j-5f5m-789v",
      "https://github.com/contao/contao/pull/10153",
      "https://github.com/contao/contao/commit/9519c1049462da35054c114d07efdeecaef32d06",
      "https://github.com/contao/contao/commit/a58eb71ef5a7a87da9d90980579dbeb6688448b4",
      "https://github.com/FriendsOfPHP/security-advisories/blob/master/contao/contao/CVE-2026-104884.yaml"
    ]
  },
  {
    "id": "CVE-2026-104883",
    "cve_id": "CVE-2026-104883",
    "ghsa_id": "GHSA-r9qp-pqx5-8369",
    "title": "contao/core-bundle: Non-admin users can self-grant permissions that implicitly make them administrators",
    "description": "Commit `2b83a60f7763` (5.7.3) hardened the template editor: it added `TemplateEditorModuleVoter` + `CheckTemplateEditorSaveListener` so a non-admin cannot self-grant the `tpl_editor` backend module (editable PHP-capable templates permit server-side code execution). That voter supports only the `modules` field and the literal value `tpl_editor`. The equally RCE-capable `theme_import` capability lives in a different...",
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
    "vendor_product": "Packagist (PHP): contao/core-bundle",
    "affected_versions": ">= 5.0.0, < 5.3.50",
    "patched_versions": "5.3.50",
    "cwes": [
      "CWE-94",
      "CWE-266"
    ],
    "published_at": "2026-11-20T23:45:41.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-r9qp-pqx5-8369",
    "references": [
      "https://github.com/contao/contao/security/advisories/GHSA-r9qp-pqx5-8369",
      "https://github.com/contao/contao/pull/10153",
      "https://github.com/contao/contao/commit/211498f28d4c86484b96eb0612c1193105b79e51",
      "https://github.com/contao/contao/commit/a58eb71ef5a7a87da9d90980579dbeb6688448b4",
      "https://github.com/FriendsOfPHP/security-advisories/blob/master/contao/contao/CVE-2026-104883.yaml"
    ]
  },
  {
    "id": "CVE-2026-104882",
    "cve_id": "CVE-2026-104882",
    "ghsa_id": "GHSA-23w9-4pg3-xwm3",
    "title": "contao/core-bundle: Improper access control in the CSV import wizard",
    "description": "Custom backend module \"key\" actions are dispatched in `Backend::getBackendModule()` (Backend.php:322-327) after only the module-level `USER_CAN_ACCESS_MODULE` check - no per-record voter runs. A non-admin editor scoped to certain pages/forms can overwrite the tableitems/listitems/options of arbitrary tl_content / tl_form_field records outside their scope, defeating the per-record access control. Integrity IDOR (bl...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): contao/core-bundle",
    "affected_versions": ">= 5.0.0, < 5.3.50",
    "patched_versions": "5.3.50",
    "cwes": [
      "CWE-639",
      "CWE-862"
    ],
    "published_at": "2026-11-20T23:44:33.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-23w9-4pg3-xwm3",
    "references": [
      "https://github.com/contao/contao/security/advisories/GHSA-23w9-4pg3-xwm3",
      "https://github.com/contao/contao/pull/10153",
      "https://github.com/contao/contao/commit/a58eb71ef5a7a87da9d90980579dbeb6688448b4",
      "https://github.com/contao/contao/commit/eb8088bcd547964657a1411a34842b441393a81c",
      "https://github.com/FriendsOfPHP/security-advisories/blob/master/contao/contao/CVE-2026-104882.yaml"
    ]
  },
  {
    "id": "CVE-2026-104881",
    "cve_id": "CVE-2026-104881",
    "ghsa_id": "GHSA-3r9g-pfhv-3228",
    "title": "contao/newsletter-bundle: Contao newsletter custom actions bypass channel-scoped authorization",
    "description": "Channel access is enforced only by the DataContainer voters (`NewsletterChannelAccessVoter` / `NewsletterRecipientsAccessVoter`, requiring USER_CAN_EDIT_CHANNEL), whose `supportsType()` fires exclusively for Create/Read/Update/DeleteAction subjects dispatched inside DC_Table's create/edit/delete methods. The newsletter custom key-actions are dispatched directly by `Backend::getBackendModule()` (Backend.php:324-327...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): contao/newsletter-bundle",
    "affected_versions": ">= 5.0.0, < 5.3.50",
    "patched_versions": "5.3.50",
    "cwes": [
      "CWE-639",
      "CWE-862"
    ],
    "published_at": "2026-11-20T23:43:26.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-3r9g-pfhv-3228",
    "references": [
      "https://github.com/contao/contao/security/advisories/GHSA-3r9g-pfhv-3228",
      "https://github.com/contao/contao/pull/10153",
      "https://github.com/contao/contao/commit/1471dcaf4fe3d07a415e756dc54ce1f46d2ee879",
      "https://github.com/contao/contao/commit/17fe7a52fc5df47209603708c6136a060f8eea43",
      "https://github.com/contao/contao/commit/a58eb71ef5a7a87da9d90980579dbeb6688448b4"
    ]
  },
  {
    "id": "CVE-2026-77331",
    "cve_id": "CVE-2026-77331",
    "ghsa_id": "GHSA-72jh-722p-rqr3",
    "title": "memtomem-stm: Concurrent LTM recovery can duplicate reconnects or reuse a cancelled transport session",
    "description": "Concurrent surfacing RPC failures can trigger more than one reconnect for the same dirty session, and cancellation during a post-reconnect retry can leave the replacement session reusable despite an interrupted protocol exchange. The private fix introduces monotonic session generations, one shielded shared reconnect flight per dirty generation, and generation-aware cancellation handling across search, access-count...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "LOW",
    "cvss_score": 2,
    "cvss_vector": "CVSS:4.0/AV:L/AC:H/AT:P/PR:L/UI:N/VC:N/VI:L/VA:L/SC:N/SI:N/SA:L",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: memtomem-stm",
    "affected_versions": ">= 0.1.2, <= 0.1.33",
    "patched_versions": "0.1.34",
    "cwes": [
      "CWE-362"
    ],
    "published_at": "2026-11-20T23:38:15.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-72jh-722p-rqr3",
    "references": [
      "https://github.com/memtomem/memtomem-stm/security/advisories/GHSA-72jh-722p-rqr3",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77331",
      "https://github.com/memtomem/memtomem-stm/commit/761db1802df7ce4881ff4c3acee6d674925da498",
      "https://github.com/memtomem/memtomem-stm/releases/tag/v0.1.34",
      "https://github.com/advisories/GHSA-72jh-722p-rqr3"
    ]
  },
  {
    "id": "CVE-2026-77332",
    "cve_id": "CVE-2026-77332",
    "ghsa_id": "GHSA-43hx-xm7w-3mhj",
    "title": "memtomem-stm: Surfaced memory data can escape the Markdown compatibility boundary",
    "description": "Untrusted long-term and working-memory fields can introduce Markdown or HTML-compatible structure into the surfaced-memory envelope. A crafted memory may create misleading structural boundaries or visually conceal content. The private fix serializes every untrusted field as inert single-line data, validates copyable memory identifiers, and pins an explicit untrusted-data preamble. Ordinary natural-language persuas...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "LOW",
    "cvss_score": 2.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:N/VI:L/VA:N/SC:N/SI:L/SA:N",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: memtomem-stm",
    "affected_versions": ">= 0.1.0, <= 0.1.33",
    "patched_versions": "0.1.34",
    "cwes": [
      "CWE-116"
    ],
    "published_at": "2026-11-20T23:37:39.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-43hx-xm7w-3mhj",
    "references": [
      "https://github.com/memtomem/memtomem-stm/security/advisories/GHSA-43hx-xm7w-3mhj",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77332",
      "https://github.com/memtomem/memtomem-stm/commit/3d50ba61cbfafba6db261e35c18eed0c3805b390",
      "https://github.com/memtomem/memtomem-stm/releases/tag/v0.1.34",
      "https://github.com/advisories/GHSA-43hx-xm7w-3mhj"
    ]
  },
  {
    "id": "CVE-2026-77309",
    "cve_id": "CVE-2026-77309",
    "ghsa_id": "GHSA-jrjx-9jjw-747m",
    "title": "AIT-GUI route chain allows unauthenticated Python execution in server process",
    "description": "A security issue exists where unauthenticated callers can instruct the AIT-GUI server to execute arbitrary Python scripts. The attack vector involves obtaining a session cookie through GET /, followed by a malicious POST /script/run request containing an absolute file path that bypasses the configured script directory restrictions. * 2.5.1 This vulnerability allows unauthenticated remote code execution on the AIT-...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": null,
    "epss_percentile": null,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: ait-gui",
    "affected_versions": ">= 1.0.0, <= 2.5.0",
    "patched_versions": "2.5.1",
    "cwes": [
      "CWE-22",
      "CWE-459"
    ],
    "published_at": "2026-11-20T23:36:41.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-jrjx-9jjw-747m",
    "references": [
      "https://github.com/NASA-AMMOS/AIT-GUI/security/advisories/GHSA-jrjx-9jjw-747m",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-77309",
      "https://github.com/NASA-AMMOS/AIT-GUI/commit/beb8fc0813eded89f985d3eb9a73535dd327726d",
      "https://github.com/NASA-AMMOS/AIT-GUI/blob/2.5.1/CHANGELOG.md",
      "https://github.com/NASA-AMMOS/AIT-GUI/releases/tag/2.5.1"
    ]
  },
  {
    "id": "CVE-2026-61725",
    "cve_id": "CVE-2026-61725",
    "ghsa_id": "GHSA-qh76-45cr-8xrc",
    "title": "sevenz-rust2: decompress builds each output path as dest.join(entry.name()) with no traversal guard, allowing a crafted .7z to write files outside the destination (Zip-Slip)",
    "description": "Extracting an attacker-supplied 7z archive can write files outside the destination directory. The 7z header stores each entry's path as a UTF-16 name with nothing constraining it to a relative, in-tree path. The extractor joins that name onto the destination and writes to the result without normalizing it or checking that it stays under the destination root, so an entry named `../../etc/cron.d/x` or an absolute pa...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:L",
    "epss_score": 0.00138,
    "epss_percentile": 0.03148,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): sevenz-rust2",
    "affected_versions": "< 0.21.1",
    "patched_versions": "0.21.1",
    "cwes": [
      "CWE-22",
      "CWE-23"
    ],
    "published_at": "2026-11-20T23:33:14.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-qh76-45cr-8xrc",
    "references": [
      "https://github.com/hasenbanck/sevenz-rust2/security/advisories/GHSA-qh76-45cr-8xrc",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-61725",
      "https://github.com/hasenbanck/sevenz-rust2/commit/ef760b61f3535ac8b93006212aef41bfebc237eb",
      "https://github.com/advisories/GHSA-qh76-45cr-8xrc"
    ]
  },
  {
    "id": "CVE-2026-63341",
    "cve_id": "CVE-2026-63341",
    "ghsa_id": "GHSA-xxqp-5qx8-gj5q",
    "title": "Aedes has Uncaught Exception and Uncontrolled Resource Consumption",
    "description": "A remote Denial of Service (DoS) vulnerability, allows any remote client to cause a complete crash of the Aedes MQTT broker process. This is achieved by sending a specially crafted MQTT message (via PUBLISH or SUBSCRIBE), or by setting a Will message with such a topic, containing a highly recursive topic string (e.g., with thousands of '/' delimiters). The lack of input validation and error handling leads to an un...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00365,
    "epss_percentile": 0.30509,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: aedes",
    "affected_versions": "< 1.1.1",
    "patched_versions": "1.1.1",
    "cwes": [
      "CWE-248",
      "CWE-400"
    ],
    "published_at": "2026-11-20T23:32:35.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-xxqp-5qx8-gj5q",
    "references": [
      "https://github.com/moscajs/aedes/security/advisories/GHSA-xxqp-5qx8-gj5q",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63341",
      "https://github.com/moscajs/aedes/commit/b9024faa4cb416c4c6980760b4d7f55336315f2d",
      "https://github.com/moscajs/aedes/releases/tag/v1.1.1",
      "https://github.com/advisories/GHSA-xxqp-5qx8-gj5q"
    ]
  },
  {
    "id": "CVE-2026-58254",
    "cve_id": "CVE-2026-58254",
    "ghsa_id": "GHSA-p3j5-5hrq-p75h",
    "title": "nats-server Leaf node connections bypass Nats-Trace-Dest permission check",
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server supports leafnode connections between servers and message tracing through NATS headers. Problem Description Message trace destination checks were applied to ordinary client connections but not consistently to messages arriving through leafnode c...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
    "epss_score": 0.00308,
    "epss_percentile": 0.23567,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/nats-io/nats-server/v2",
    "affected_versions": "< 2.12.8",
    "patched_versions": "2.12.8",
    "cwes": [
      "CWE-863"
    ],
    "published_at": "2026-11-20T23:31:59.000Z",
    "relative_time": "1h ago",
    "url": "https://github.com/advisories/GHSA-p3j5-5hrq-p75h",
    "references": [
      "https://github.com/nats-io/nats-server/security/advisories/GHSA-p3j5-5hrq-p75h",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-58254",
      "https://github.com/nats-io/nats-server/commit/cbe845932980b71563efac5cfa4cc751c88936cd",
      "https://github.com/nats-io/nats-server/releases/tag/v2.12.8",
      "https://github.com/nats-io/nats-server/releases/tag/v2.14.3"
    ]
  },
  {
    "id": "CVE-2026-35376",
    "cve_id": "CVE-2026-35376",
    "ghsa_id": "GHSA-9rv8-9hvg-92mq",
    "title": "chcon: recursive relabel not anchored to traversal dirfd (TOCTOU)",
    "description": "`chcon` resolved recursive targets from `fts_accpath` with a fresh path lookup, so traversal and the SELinux get/set were not bound to traversal directory state. A privileged recursive relabel can be redirected to unintended objects under rename/symlink races. Fix opens targets with `openat` against the traversal cwd fd before the SELinux operation. **Fixed in 0.10.0** (PR #12566, commit 7cfc74e47ffab452663be6842d...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.5,
    "cvss_vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:L",
    "epss_score": 0.0011,
    "epss_percentile": 0.01315,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): uu_chcon",
    "affected_versions": "<= 0.9.0",
    "patched_versions": "0.10.0",
    "cwes": [
      "CWE-59",
      "CWE-367"
    ],
    "published_at": "2026-11-20T16:39:34.000Z",
    "relative_time": "8h ago",
    "url": "https://github.com/advisories/GHSA-9rv8-9hvg-92mq",
    "references": [
      "https://github.com/uutils/coreutils/security/advisories/GHSA-9rv8-9hvg-92mq",
      "https://github.com/uutils/coreutils/pull/11402",
      "https://github.com/uutils/coreutils/commit/7cfc74e47ffab452663be6842d788a5164d9688b",
      "https://github.com/advisories/GHSA-9rv8-9hvg-92mq"
    ]
  },
  {
    "id": "CVE-2026-35377",
    "cve_id": "CVE-2026-35377",
    "ghsa_id": "GHSA-xhrc-7f76-vh96",
    "title": " uu_env incorrectly rejects backslashes within single-quoted strings accepted by GNU env",
    "description": "In `env -S`, GNU keeps backslashes literal inside single quotes (except `\\\\` and `\\'`); uutils errors on sequences like `\\a`. This is the backslash-handling issue of the broader `-S`/`--split-string` parsing divergence. ``` env -S\"printf %s '\\''\\\\x'\\''\" GNU prints \\x ; uutils: invalid sequence '\\x' in -S (125) ``` --- _Zellic private finding (zellic-ext/coreutils-private PR #117). Reported in the Zellic *uutils co...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "LOW",
    "cvss_score": 3.3,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": 0.00106,
    "epss_percentile": 0.01134,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): uu_env",
    "affected_versions": "<= 0.9.0",
    "patched_versions": "0.10.0",
    "cwes": [
      "CWE-20"
    ],
    "published_at": "2026-11-20T16:36:31.000Z",
    "relative_time": "8h ago",
    "url": "https://github.com/advisories/GHSA-xhrc-7f76-vh96",
    "references": [
      "https://github.com/uutils/coreutils/security/advisories/GHSA-xhrc-7f76-vh96",
      "https://github.com/uutils/coreutils/pull/11512",
      "https://github.com/uutils/coreutils/commit/9d7a0e849109c82262ac2d65324739aac690200f",
      "https://github.com/advisories/GHSA-xhrc-7f76-vh96"
    ]
  },
  {
    "id": "CVE-2026-35374",
    "cve_id": "CVE-2026-35374",
    "ghsa_id": "GHSA-fjjq-8hw5-cf9f",
    "title": "split: TOCTOU output-open allows truncating a swapped file",
    "description": "`split` checks input/output identity by path before opening the output, then opens with truncation, leaving a race window on mutable path components. GNU opens first and compares the opened output inode against the input before truncating. The race can cause `split` to truncate/write a file different from the one validated — including the input file or another file the process can access. **Fixed in 0.10.0** (PR #...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.3,
    "cvss_vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:N/I:H/A:H",
    "epss_score": 0.00077,
    "epss_percentile": 0.0011,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Cargo (Rust)",
    "vendor_product": "Cargo (Rust): uu_split",
    "affected_versions": "<= 0.9.0",
    "patched_versions": "0.10.0",
    "cwes": [
      "CWE-59",
      "CWE-367"
    ],
    "published_at": "2026-11-20T16:33:27.000Z",
    "relative_time": "8h ago",
    "url": "https://github.com/advisories/GHSA-fjjq-8hw5-cf9f",
    "references": [
      "https://github.com/uutils/coreutils/security/advisories/GHSA-fjjq-8hw5-cf9f",
      "https://github.com/uutils/coreutils/pull/11401",
      "https://github.com/uutils/coreutils/pull/12565",
      "https://github.com/uutils/coreutils/commit/58040feb5c66fce588a7ffac299b3a23bd55cd81",
      "https://github.com/advisories/GHSA-fjjq-8hw5-cf9f"
    ]
  },
  {
    "id": "CVE-2026-104773",
    "cve_id": "CVE-2026-104773",
    "ghsa_id": "GHSA-6499-jgj4-2wpf",
    "title": "CKAN: Session Fixation in Registration View",
    "description": "Web user registration form is vulnerable to session fixation if the site is configured with server-side session storage (CKAN uses cookie-based session storage by default). The attacker would need to either set a cookie on the victim's browser or steal the victim's currently valid session. Session identifiers are now regenerated after registration. This vulnerability has been fixed in CKAN 2.10.11, 2.11.6 and 2.12...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:N",
    "epss_score": 0.00327,
    "epss_percentile": 0.26492,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: ckan",
    "affected_versions": "< 2.10.11",
    "patched_versions": "2.10.11",
    "cwes": [
      "CWE-384"
    ],
    "published_at": "2026-11-20T16:25:26.000Z",
    "relative_time": "8h ago",
    "url": "https://github.com/advisories/GHSA-6499-jgj4-2wpf",
    "references": [
      "https://github.com/ckan/ckan/security/advisories/GHSA-6499-jgj4-2wpf",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-104773",
      "https://github.com/ckan/ckan/commit/6eae4e9c430e163b9d6cc75a3fd2ca82e79d80f6",
      "https://github.com/ckan/ckan/commit/8f8e8b587461b66120ec7a85c17a34ecea213f57",
      "https://github.com/ckan/ckan/commit/a25e2f3080a79a94eb04dcf02e16ded3e5fadeb2"
    ]
  },
  {
    "id": "CVE-2026-69133",
    "cve_id": "CVE-2026-69133",
    "ghsa_id": "GHSA-cg26-4c6j-2x8h",
    "title": "netty-incubator-codec-ohttp: OHTTP codecs retain consumed outer cumulation buffers after completed exchanges",
    "description": "OHttpClientCodec and OHttpServerCodec retain the encrypted outer HttpContent in a handler-level cumulationBuffer. After a valid OHTTP exchange completes, the OHTTP request/response context is destroyed, but the outer cumulationBuffer is not released or reset. It remains referenced by the codec until a later inbound content frame replaces it or the handler is removed/channel is closed. This can pin attacker-influen...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": 0.00304,
    "epss_percentile": 0.23817,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Maven",
    "vendor_product": "Maven: io.netty.incubator:netty-incubator-codec-ohttp",
    "affected_versions": ">= 0.0.20.Final, <= 0.0.26.Final",
    "patched_versions": "0.0.27.Final",
    "cwes": [
      "CWE-772"
    ],
    "published_at": "2026-11-20T16:22:09.000Z",
    "relative_time": "8h ago",
    "url": "https://github.com/advisories/GHSA-cg26-4c6j-2x8h",
    "references": [
      "https://github.com/netty/netty-incubator-codec-ohttp/security/advisories/GHSA-cg26-4c6j-2x8h",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-69133",
      "https://github.com/netty/netty-incubator-codec-ohttp/commit/a82cd85099c1a1fb78b73b068c77c8c902fc32ce",
      "https://github.com/netty/netty-incubator-codec-ohttp/releases/tag/netty-incubator-codec-parent-ohttp-0.0.27.Final",
      "https://github.com/advisories/GHSA-cg26-4c6j-2x8h"
    ]
  },
  {
    "id": "CVE-2026-105803",
    "cve_id": "CVE-2026-105803",
    "ghsa_id": "GHSA-x72p-hmqp-46hw",
    "title": "Git LFS may execute arbitrary commands via crafted Git LFS configurations",
    "description": "When fetching objects from a malicious repository, Git LFS may execute an arbitrary command or binary after failing to sufficiently restrict the set of configuration options defined in an `.lfsconfig` file in the repository. Git LFS permits a limited set of configuration options to be defined in an `.lfsconfig` file at the root of a Git repository, but does not filter these options correctly if their keys contain ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.6,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.00545,
    "epss_percentile": 0.46614,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/git-lfs/git-lfs",
    "affected_versions": ">= 1.3.0, <= 2.13.3",
    "patched_versions": null,
    "cwes": [
      "CWE-777",
      "CWE-1286"
    ],
    "published_at": "2026-11-20T14:59:40.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-x72p-hmqp-46hw",
    "references": [
      "https://github.com/git-lfs/git-lfs/security/advisories/GHSA-x72p-hmqp-46hw",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-105803",
      "https://github.com/git-lfs/git-lfs/commit/1ecddd431e63c551ae11c153df0e07f37d2b44ef",
      "https://github.com/git-lfs/git-lfs/commit/45c0c51c8a2d41a7d361b79f3d37f4fec46acc68",
      "https://github.com/git-lfs/git-lfs/commit/5182fdeccb834ed887746a557d0c736013704f39"
    ]
  },
  {
    "id": "CVE-2026-105802",
    "cve_id": "CVE-2026-105802",
    "ghsa_id": "GHSA-xrgv-7vx6-5vx6",
    "title": "Git LFS may execute arbitrary commands via crafted Git configurations",
    "description": "When fetching objects from a malicious repository, Git LFS may execute an arbitrary command or binary after incorrectly parsing the Git configuration options defined for a submodule. Git LFS reads Git configuration options without checking for embedded line-ending control characters. By inserting control characters such as line feed (LF) into certain values, an attacker may be able to mimic options that cause Git ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.6,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.00528,
    "epss_percentile": 0.45605,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/git-lfs/git-lfs",
    "affected_versions": ">= 0.6.0, <= 2.13.3",
    "patched_versions": null,
    "cwes": [
      "CWE-144"
    ],
    "published_at": "2026-11-20T14:58:53.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-xrgv-7vx6-5vx6",
    "references": [
      "https://github.com/git-lfs/git-lfs/security/advisories/GHSA-xrgv-7vx6-5vx6",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-105802",
      "https://github.com/git-lfs/git-lfs/commit/1b2672aaa29016e8004369df1406d2a73057f45f",
      "https://github.com/git-lfs/git-lfs/commit/39b73aa4db821fea6f0da8320128e5e1b919942d",
      "https://github.com/git-lfs/git-lfs/releases/tag/v3.8.1"
    ]
  },
  {
    "id": "CVE-2026-104885",
    "cve_id": "CVE-2026-104885",
    "ghsa_id": "GHSA-3h6w-xcw3-9xjj",
    "title": "OpenRemote: Cross-realm MQTT session disconnect without authorization",
    "description": "Cross-realm MQTT session disconnect without authorization Vulnerability The `disconnectUserSession` endpoint in `UserResourceImpl.java` (line 443) accepts a `realm` path parameter but ignores it entirely, performing no authorization or realm-boundary check before force-disconnecting an MQTT session. Any authenticated user from any realm can disconnect MQTT broker sessions belonging to users in other realms by supp...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:H/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N",
    "epss_score": 0.00321,
    "epss_percentile": 0.25749,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Maven",
    "vendor_product": "Maven: io.openremote:openremote-manager",
    "affected_versions": "< 1.31.0",
    "patched_versions": "1.31.0",
    "cwes": [
      "CWE-862"
    ],
    "published_at": "2026-11-20T14:56:58.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-3h6w-xcw3-9xjj",
    "references": [
      "https://github.com/openremote/core/security/advisories/GHSA-3h6w-xcw3-9xjj",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-104885",
      "https://github.com/openremote/core/commit/51dce18d9e00d671a5e032d942ece186bdada560",
      "https://github.com/openremote/core/releases/tag/1.31.0",
      "https://github.com/advisories/GHSA-3h6w-xcw3-9xjj"
    ]
  },
  {
    "id": "CVE-2026-103026",
    "cve_id": "CVE-2026-103026",
    "ghsa_id": "GHSA-prhx-9q2h-ph2x",
    "title": "Paymenter: Unauthenticated arbitrary method invocation in Livewire components",
    "description": "A Livewire function allowed attackers to call any public function, allowing attackers to call any public method on the component. Because an attacker can call any function, they can also overwrite locked data. Technical Details `app/Livewire/Traits/HasConfirmation.php` exposed a public Livewire action that dispatches to any method that exists on the component: ```php public function executeConfirmedAction($action,...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.00364,
    "epss_percentile": 0.30999,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): paymenter/paymenter",
    "affected_versions": "<= 1.5.6",
    "patched_versions": "1.5.7",
    "cwes": [
      "CWE-470",
      "CWE-749",
      "CWE-915"
    ],
    "published_at": "2026-11-20T14:56:03.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-prhx-9q2h-ph2x",
    "references": [
      "https://github.com/Paymenter/Paymenter/security/advisories/GHSA-prhx-9q2h-ph2x",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-103026",
      "https://github.com/Paymenter/Paymenter/commit/e0c04af1707a65d8fb91879883aa7eae3292cedc",
      "https://github.com/Paymenter/Paymenter/releases/tag/v1.5.7",
      "https://github.com/advisories/GHSA-prhx-9q2h-ph2x"
    ]
  },
  {
    "id": "CVE-2026-115565",
    "cve_id": "CVE-2026-115565",
    "ghsa_id": "GHSA-vcx7-pfrh-mcfg",
    "title": "storyblok-backup: Stored path traversal via unsanitized Storyblok component names in backup output",
    "description": "storyblok-backup writes files using unsanitized names for Storyblok components, which are content type or schema definitions. This allows a component name containing path traversal sequences to cause backup files to be written outside the intended backup directory. Anyone with component management access in the source Storyblok space, not server access, can plant a malicious component name that causes arbitrary fi...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.7,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:N/I:H/A:N",
    "epss_score": 0.00359,
    "epss_percentile": 0.30464,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: storyblok-backup",
    "affected_versions": "<= 0.7.0",
    "patched_versions": "0.7.1",
    "cwes": [
      "CWE-22"
    ],
    "published_at": "2026-11-20T14:55:18.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-vcx7-pfrh-mcfg",
    "references": [
      "https://github.com/webflorist/storyblok-backup/security/advisories/GHSA-vcx7-pfrh-mcfg",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-115565",
      "https://github.com/webflorist/storyblok-backup/commit/f4e4bb1979832abd7e4eb1666e2b3cfc767f587a",
      "https://github.com/webflorist/storyblok-backup/releases/tag/v0.7.1",
      "https://github.com/advisories/GHSA-vcx7-pfrh-mcfg"
    ]
  },
  {
    "id": "CVE-2026-130176",
    "cve_id": "CVE-2026-130176",
    "ghsa_id": "GHSA-wcqj-wx85-c75p",
    "title": "aMQTT: Denial of Service (DoS) via Memory Leak in Unmanaged QoS 2 Session Handshakes",
    "description": "`amqtt` is vulnerable to a remote denial of service caused by incomplete MQTT QoS 2 transactions remaining allocated after the associated client disconnects. MQTT QoS 2 uses a four-step handshake to provide exactly-once delivery. If a client begins a QoS 2 transaction but disconnects before the handshake completes, `amqtt` retains the associated transaction state and packet identifier without an expiration mechani...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00446,
    "epss_percentile": 0.39675,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: amqtt",
    "affected_versions": ">= 0.11.0, <= 0.12.0",
    "patched_versions": "0.12.1",
    "cwes": [
      "CWE-401",
      "CWE-772"
    ],
    "published_at": "2026-11-20T14:54:50.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-wcqj-wx85-c75p",
    "references": [
      "https://github.com/Yakifo/amqtt/security/advisories/GHSA-wcqj-wx85-c75p",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-130176",
      "https://github.com/Yakifo/amqtt/pull/404",
      "https://github.com/Yakifo/amqtt/commit/2755fd801a6f95e9b73e11116948b57a95348466",
      "https://github.com/Yakifo/amqtt/commit/64a6f8c3ebc47640f2e092885c1d504c8f34f1af"
    ]
  },
  {
    "id": "CVE-2026-115463",
    "cve_id": "CVE-2026-115463",
    "ghsa_id": "GHSA-9657-8vc2-7g2p",
    "title": "Poweradmin: The email second factor is an mt_rand() six-digit code verified with no attempt limit or lockout, so an attacker holding the password can brute-force it within the validity window",
    "description": "The email second factor is an mt_rand() six-digit code verified with no attempt limit or lockout The email second factor is a six-digit code drawn from `mt_rand()` and verified with no attempt limit, so an attacker who already has the password can brute-force it inside its validity window. `lib/Domain/Service/MfaService.php`, in `generateEmailVerificationCode()`: ```php $numericCode = mt_rand(100000, 999999); ``` ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.00616,
    "epss_percentile": 0.50475,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): poweradmin/poweradmin",
    "affected_versions": ">= 4.0.0, < 4.2.6",
    "patched_versions": "4.2.6",
    "cwes": [
      "CWE-307",
      "CWE-338"
    ],
    "published_at": "2026-11-20T14:52:33.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-9657-8vc2-7g2p",
    "references": [
      "https://github.com/poweradmin/poweradmin/security/advisories/GHSA-9657-8vc2-7g2p",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-115463",
      "https://github.com/poweradmin/poweradmin/commit/021e5fea029cf8787247517cde752f9a6af1647c",
      "https://github.com/poweradmin/poweradmin/commit/541e31fec32f0eae0d93a13de125a06ee19ecd92",
      "https://github.com/poweradmin/poweradmin/commit/ce3ccace7e80f1c1424f1bb1d9ce63a33ee90f19"
    ]
  },
  {
    "id": "CVE-2026-104099",
    "cve_id": "CVE-2026-104099",
    "ghsa_id": "GHSA-4hrh-34w3-5ww8",
    "title": "Fabio: Access-control bypass through unnormalized request paths",
    "description": "Route selection uses the raw un-normalized request path, and the per-route ACL and basic-auth gates hang off that selection, so a dot-segment, encoded-dot, or double-slash variant of a protected path selects a different route, skips both gates, and is forwarded to the backend which normalizes and serves the protected resource. Unauthenticated; complete bypass of the access control the operator configured. Confirme...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.00477,
    "epss_percentile": 0.42108,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/fabiolb/fabio",
    "affected_versions": "< 1.7.3",
    "patched_versions": "1.7.3",
    "cwes": [
      "CWE-41",
      "CWE-289",
      "CWE-863"
    ],
    "published_at": "2026-11-20T14:51:25.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-4hrh-34w3-5ww8",
    "references": [
      "https://github.com/fabiolb/fabio/security/advisories/GHSA-4hrh-34w3-5ww8",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-104099",
      "https://github.com/fabiolb/fabio/commit/f00ce1a446a4b7a3bccbefbb7bfe4a5e0e3fd817",
      "https://github.com/fabiolb/fabio/releases/tag/v1.7.3",
      "https://github.com/fabiolb/fabio/releases/tag/v1.8.0"
    ]
  },
  {
    "id": "CVE-2026-69261",
    "cve_id": "CVE-2026-69261",
    "ghsa_id": "GHSA-x7xj-4j4f-88xr",
    "title": "Git LFS may leak HTTP headers after redirections",
    "description": "After receiving an HTTP redirection, Git LFS may forward certain HTTP headers to a host other than the one for which they were intended. While `Authorization` headers are never forwarded to inappropriate hosts, `Cookie` headers may be forwarded incorrectly. Git LFS has resolved this issue by never forwarding `Cookie` headers to hosts other than the ones for which they were intended. In particular, after an HTTP re...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.6,
    "cvss_vector": "CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:P/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.00378,
    "epss_percentile": 0.32631,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/git-lfs/git-lfs",
    "affected_versions": ">= 0.5.0, <= 2.13.3",
    "patched_versions": null,
    "cwes": [
      "CWE-522"
    ],
    "published_at": "2026-11-20T14:49:47.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-x7xj-4j4f-88xr",
    "references": [
      "https://github.com/git-lfs/git-lfs/security/advisories/GHSA-x7xj-4j4f-88xr",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-69261",
      "https://github.com/git-lfs/git-lfs/commit/12c92e05b3433494d4b8695943e7e230744d77d9",
      "https://github.com/git-lfs/git-lfs/commit/256d371024e6d2cf19efe675d8b9ad089785d0a1",
      "https://github.com/git-lfs/git-lfs/commit/537203a1fa08fdde4c16288fb039174ff0e692bb"
    ]
  },
  {
    "id": "CVE-2026-69260",
    "cve_id": "CVE-2026-69260",
    "ghsa_id": "GHSA-w3f2-pr6x-wwjc",
    "title": "Git LFS may attempt arbitrary remote commands via crafted SSH URLs",
    "description": "When Git LFS makes object transfer or authentication requests to a remote host via SSH, it passes the path component of the remote's SSH URL as part of a command to be executed, but does not properly format the URL's path component as a single argument. By inserting shell meta-characters into the SSH URL, an attacker may be able to execute arbitrary commands on the remote host, if the host passes the commands to a...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.6,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N",
    "epss_score": 0.01101,
    "epss_percentile": 0.66502,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/git-lfs/git-lfs",
    "affected_versions": ">= 0.5.0, <= 2.13.3",
    "patched_versions": null,
    "cwes": [
      "CWE-78"
    ],
    "published_at": "2026-11-20T14:47:01.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-w3f2-pr6x-wwjc",
    "references": [
      "https://github.com/git-lfs/git-lfs/security/advisories/GHSA-w3f2-pr6x-wwjc",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-69260",
      "https://github.com/git-lfs/git-lfs/commit/091a95a796739bd0b8f59d8deeea79a452959508",
      "https://github.com/git-lfs/git-lfs/commit/92d81117d465469a61dcb78546dd3d88806b25fd",
      "https://github.com/git-lfs/git-lfs/commit/af5f4579ac1155734bb08f00ca92b9e89f8b51df"
    ]
  },
  {
    "id": "CVE-2026-103035",
    "cve_id": "CVE-2026-103035",
    "ghsa_id": "GHSA-66q9-mxf2-xqw6",
    "title": "TeamPass folder re-parenting authorization bypass",
    "description": "Missing authorization in the update_folder action: any authenticated non-read-only user can rename, re-parent and convert to personal any folder in the instance, moving another team's credential subtree into their own personal space and removing it from the organization. Confirmed at HEAD 2f271cdd (3.2.1.1), and present at 3.1.3.1 and 3.1.7.6. The defect The folder-management endpoint dispatches an update_folder a...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:H",
    "epss_score": 0.00239,
    "epss_percentile": 0.15276,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Packagist (PHP)",
    "vendor_product": "Packagist (PHP): nilsteampassnet/TeamPass",
    "affected_versions": "< 3.2.2.0",
    "patched_versions": "3.2.2.0",
    "cwes": [
      "CWE-639",
      "CWE-862"
    ],
    "published_at": "2026-11-20T14:45:04.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-66q9-mxf2-xqw6",
    "references": [
      "https://github.com/nilsteampassnet/TeamPass/security/advisories/GHSA-66q9-mxf2-xqw6",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-103035",
      "https://github.com/nilsteampassnet/TeamPass/commit/e022b27f99149995c90a81f83b8e0ae8b48f5a20",
      "https://github.com/nilsteampassnet/TeamPass/releases/tag/3.2.1.2",
      "https://github.com/advisories/GHSA-66q9-mxf2-xqw6"
    ]
  },
  {
    "id": "CVE-2026-104199",
    "cve_id": "CVE-2026-104199",
    "ghsa_id": "GHSA-2hjf-7455-w946",
    "title": "aMQTT: Inefficient Regular Expression Complexity and Uncontrolled Resource Consumption and Improper Input Validation",
    "description": "`amqtt` is vulnerable to a remote denial of service caused by improper MQTT topic-filter validation combined with catastrophic regular-expression backtracking. A single client can freeze the entire broker by sending one specially crafted `SUBSCRIBE` packet followed by one `PUBLISH` packet. The vulnerability is caused by two defects: 1. `add_subscription()` validates the placement of the single-level wildcard `+` u...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.7,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00469,
    "epss_percentile": 0.41483,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "PyPI",
    "vendor_product": "PyPI: amqtt",
    "affected_versions": ">= 0.11.0, <= 0.11.3",
    "patched_versions": "0.11.4",
    "cwes": [
      "CWE-20",
      "CWE-400",
      "CWE-1333"
    ],
    "published_at": "2026-11-20T14:43:41.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-2hjf-7455-w946",
    "references": [
      "https://github.com/Yakifo/amqtt/security/advisories/GHSA-2hjf-7455-w946",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-104199",
      "https://github.com/Yakifo/amqtt/pull/361",
      "https://github.com/Yakifo/amqtt/commit/e48a8a65027667f936d415db7f01d3ac350104e0",
      "https://github.com/Yakifo/amqtt/releases/tag/v0.11.4"
    ]
  },
  {
    "id": "CVE-2026-115578",
    "cve_id": "CVE-2026-115578",
    "ghsa_id": "GHSA-hghq-53p7-c582",
    "title": "go-guerrilla crashes on a bare XCLIENT command (7-byte slice off-by-one panic)",
    "description": "The defect ---------- Confirmed at HEAD. server.go: cmdXCLIENT = []byte(\"XCLIENT\") is 7 bytes (line 78), so the dispatch match cmdXCLIENT.match(cmd) only guarantees len(input) >= 7. The handler then slices input[8:] (line 586): case sc.XClientOn && cmdXCLIENT.match(cmd): if toks := bytes.Split(input[8:], []byte{' '}); len(toks) > 0 { // line 586 A client sending the bare command XCLIENT (exactly 7 bytes) hits inpu...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00446,
    "epss_percentile": 0.39675,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/phires/go-guerrilla",
    "affected_versions": "= 1.6.7",
    "patched_versions": null,
    "cwes": [
      "CWE-129",
      "CWE-193",
      "CWE-248"
    ],
    "published_at": "2026-11-20T14:42:18.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-hghq-53p7-c582",
    "references": [
      "https://github.com/phires/go-guerrilla/security/advisories/GHSA-hghq-53p7-c582",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-115578",
      "https://github.com/phires/go-guerrilla/commit/b6deed97ff70f52bf34c386d33967694e7330d33",
      "https://github.com/phires/go-guerrilla/commit/f0d0f2c40dcacf212e3a6a055ae67f7b412affc4",
      "https://github.com/phires/go-guerrilla/releases/tag/v1.6.7-1"
    ]
  },
  {
    "id": "CVE-2026-104129",
    "cve_id": "CVE-2026-104129",
    "ghsa_id": "GHSA-v9v2-98xq-627c",
    "title": "pREST _groupby function-expression SQL injection (incomplete fix of CVE-2025-58450)",
    "description": "What the fix did and the gap ---------------------------- The v2.3.0 fix (commit e88dabb) routed the _select field through a strict new gate, sanitizeSelectField (postgres.go:947/1003/2097). The sibling _groupby path was left on the far weaker isSafeSQLExpression. adapters/postgres/postgres.go, GroupByClause (line 1946): a _groupby field that contains balanced parens takes the raw-SQL-expression branch (around lin...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.00335,
    "epss_percentile": 0.27509,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "Go",
    "vendor_product": "Go: github.com/prest/prest",
    "affected_versions": "<= 1.5.5",
    "patched_versions": null,
    "cwes": [
      "CWE-89"
    ],
    "published_at": "2026-11-20T14:41:42.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-v9v2-98xq-627c",
    "references": [
      "https://github.com/prest/prest/security/advisories/GHSA-v9v2-98xq-627c",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-104129",
      "https://github.com/prest/prest/pull/1014",
      "https://github.com/prest/prest/commit/084348fa82701b098492fc520557ff290b7691e2",
      "https://github.com/prest/prest/commit/73e4b2aea81e2dbd33942efcb1a313fe3b151a41"
    ]
  },
  {
    "id": "CVE-2026-63386",
    "cve_id": "CVE-2026-63386",
    "ghsa_id": "GHSA-3g82-77xr-68x5",
    "title": "js-toml allows uncontrolled recursion in `load()` leading `RangeError` (stack exhaustion) on deeply nested input",
    "description": "`load()` parses untrusted TOML using a recursive-descent parser (Chevrotain) and a recursive tree-walking interpreter. Neither the parser nor the interpreter enforces a maximum nesting / key depth. A small, attacker-controlled document with deep nesting (arrays, inline tables) or a long dotted key drives recursion past the V8 call-stack limit, and `load()` throws an **uncaught `RangeError: Maximum call stack size ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": 0.00361,
    "epss_percentile": 0.3055,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: js-toml",
    "affected_versions": "< 1.1.3",
    "patched_versions": "1.1.3",
    "cwes": [
      "CWE-400",
      "CWE-674"
    ],
    "published_at": "2026-11-20T14:40:45.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-3g82-77xr-68x5",
    "references": [
      "https://github.com/sunnyadn/js-toml/security/advisories/GHSA-3g82-77xr-68x5",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63386",
      "https://github.com/sunnyadn/js-toml/commit/4e10acf1f99ff3cb443c58b8f0a57664e41e87c6",
      "https://github.com/sunnyadn/js-toml/releases/tag/v1.1.3",
      "https://github.com/advisories/GHSA-3g82-77xr-68x5"
    ]
  },
  {
    "id": "CVE-2026-63184",
    "cve_id": "CVE-2026-63184",
    "ghsa_id": "GHSA-x6w4-f264-3vvr",
    "title": "Refitter: Unrestricted OpenAPI references permit build-host SSRF and file inclusion",
    "description": "Refitter (the `refitter` dotnet tool, built on NJsonSchema for `$ref` resolution) fetches remote `http(s)` URLs and reads local files (including absolute paths and `../` traversal outside the input directory), inlining the referenced schema into the generated Refit interface/contracts. Running `refitter <spec> --output Out.cs` on a spec whose `$ref` points at an attacker/internal URL or an arbitrary local file yie...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": 0.00411,
    "epss_percentile": 0.35549,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "NuGet",
    "vendor_product": "NuGet: Refitter",
    "affected_versions": "< 2.1.1",
    "patched_versions": "2.1.1",
    "cwes": [
      "CWE-829",
      "CWE-918"
    ],
    "published_at": "2026-11-20T14:35:29.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-x6w4-f264-3vvr",
    "references": [
      "https://github.com/christianhelle/refitter/security/advisories/GHSA-x6w4-f264-3vvr",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-63184",
      "https://github.com/christianhelle/refitter/pull/1173",
      "https://github.com/christianhelle/refitter/commit/6ad20a3803561225100b0a4bb6b12f947d23db7b",
      "https://github.com/christianhelle/refitter/releases/tag/2.1.1"
    ]
  },
  {
    "id": "CVE-2026-58192",
    "cve_id": "CVE-2026-58192",
    "ghsa_id": "GHSA-jwgx-mp9m-jwcr",
    "title": "appium allows unauthenticated arbitrary file/directory deletion in @appium/storage-plugin",
    "description": "The Appium storage plugin exposes an HTTP endpoint `POST /storage/delete` that takes a user-supplied `name` and deletes it from the server storage folder. The handler passes `name` straight into `path.join(storageRoot, name)` and then `fs.rimraf()` **without any path sanitization**. By sending a `name` containing `../` sequences, an unauthenticated remote client can escape the storage root and **recursively delete...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.6,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:N/I:H/A:N",
    "epss_score": 0.00636,
    "epss_percentile": 0.50533,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": "npm",
    "vendor_product": "npm: @appium/storage-plugin",
    "affected_versions": "< 1.1.6",
    "patched_versions": "1.1.6",
    "cwes": [
      "CWE-22",
      "CWE-73"
    ],
    "published_at": "2026-11-20T14:34:30.000Z",
    "relative_time": "10h ago",
    "url": "https://github.com/advisories/GHSA-jwgx-mp9m-jwcr",
    "references": [
      "https://github.com/appium/appium/security/advisories/GHSA-jwgx-mp9m-jwcr",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-58192",
      "https://github.com/appium/appium/pull/22362",
      "https://github.com/appium/appium/commit/5fee01752f2782e96fbe64fd13520b433d4a7535",
      "https://github.com/appium/appium/releases/tag/%40appium/storage-plugin%401.1.6"
    ]
  },
  {
    "id": "CVE-2026-129448",
    "cve_id": "CVE-2026-129448",
    "ghsa_id": null,
    "title": "Apache Roller Deserialization of Untrusted Data Vulnerability",
    "description": "Apache Roller contains a deserialization of untrusted data vulnerability that allows an unauthenticated remote attacker to execute arbitrary code via the XML-RPC endpoint, which accepts and deserializes vendor extension types before authentication. This CVE covers the same underlying vulnerability as CVE-2026-82384 but applies to a broader range of affected versions.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.01191,
    "epss_percentile": 0.68723,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-23",
    "ecosystem": "Apache",
    "vendor_product": "Apache Roller",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-502"
    ],
    "published_at": "2026-11-20T12:00:00.000Z",
    "relative_time": "13h ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129448",
    "references": [
      "https://lists.apache.org/thread/cc0jck13nb9vvcmzxzwotr6n16mx28z9",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-129448"
    ]
  },
  {
    "id": "CVE-2026-123890",
    "cve_id": "CVE-2026-123890",
    "ghsa_id": null,
    "title": "VMWare vCenter Authentication Bypass Using an Alternate Path or Channel Vulnerability",
    "description": "Broadcom VMware vCenter contains an authentication bypass using an alternate path or channel vulnerability in the VMware Directory Service that allows an unauthenticated attacker with network access to vCenter to bypass authentication and gain unauthorized access to the system.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00843,
    "epss_percentile": 0.58845,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-23",
    "ecosystem": "Broadcom",
    "vendor_product": "Broadcom VMware vCenter",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-288"
    ],
    "published_at": "2026-11-20T12:00:00.000Z",
    "relative_time": "13h ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123890",
    "references": [
      "https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/39495",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-123890"
    ]
  },
  {
    "id": "CVE-2025-42884",
    "cve_id": "CVE-2025-42884",
    "ghsa_id": null,
    "title": "SAP NetWeaver Improper Neutralization of Special Elements in Data Query Logic Vulnerability",
    "description": "SAP NetWeaver Enterprise Portal contains an improper neutralization of special elements in data query logic vulnerability that allows an unauthenticated attacker to disclose or modify server information via injected JNDI environment properties or a URL used during JNDI lookup operations.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00276,
    "epss_percentile": 0.2048,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-23",
    "ecosystem": "SAP",
    "vendor_product": "SAP NetWeaver",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-943"
    ],
    "published_at": "2026-11-20T12:00:00.000Z",
    "relative_time": "13h ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-42884",
    "references": [
      "https://support.sap.com/en/my-support/knowledge-base/security-notes-news/bulletin-2025.html",
      "https://nvd.nist.gov/vuln/detail/CVE-2025-42884"
    ]
  },
  {
    "id": "CVE-2026-76466",
    "cve_id": "CVE-2026-76466",
    "ghsa_id": null,
    "title": "Cisco Expressway Series Use of Hard-coded Credentials Vulnerability",
    "description": "Cisco Expressway Series contains a use of hard-coded credentials vulnerability that allows an unauthenticated, remote attacker with persistent cookies and network access to execute commands as root on a clustered device via the database service.",
    "source": "CISA KEV",
    "sources": [
      "CISA KEV"
    ],
    "severity": "HIGH",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00417,
    "epss_percentile": 0.36836,
    "is_kev": true,
    "ransomware_use": false,
    "kev_due_date": "2026-11-23",
    "ecosystem": "Cisco",
    "vendor_product": "Cisco Expressway Series",
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-798"
    ],
    "published_at": "2026-11-20T12:00:00.000Z",
    "relative_time": "13h ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-76466",
    "references": [
      "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-vcs-static-cred-hr7EWZ8t",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-76466"
    ]
  },
  {
    "id": "CVE-2026-114516",
    "cve_id": "CVE-2026-114516",
    "ghsa_id": "GHSA-mc8w-wjhw-45x5",
    "title": "Etherpad: Pre-auth arbitrary file read",
    "description": "An unauthenticated path‑traversal / arbitrary file read vulnerability in Etherpad's /static/* handler allows any remote, unauthenticated user to read any file on the server's filesystem (e.g. GET /static/plugins/ep_etherpad-lite/static/..%5C..%5C..%5C..%5C..%5C..%5C..%5Cetc/passwd returns /etc/passwd) available to the user running the etherpad software. Because the endpoint is mounted before the authentication mid...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.01485,
    "epss_percentile": 0.74647,
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
    "relative_time": "1d ago",
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
    "description": "`parseServerSignature` in the v1 module only initializes `ServerSignatureVerificationData.Extra` inside the `if err == nil` branch after `url.ParseQuery(parsedPayload.VerificationData)`. Go's `url.ParseQuery` returns the successfully-parsed pairs together with a non-nil error when the query string contains a malformed percent-escape. A subsequent loop unconditionally writes unknown keys into `Extra`, regardless of...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    "epss_score": 0.00332,
    "epss_percentile": 0.27042,
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
    "relative_time": "1d ago",
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
    "description": "A crafted PNG can make `imagemeta.Decode` allocate memory far in excess of the input file's size, leading to memory exhaustion. Two separate paths in the `zTXt` \"Raw profile type iptc\" branch are affected: the declared chunk length drives an allocation directly, and the embedded zlib stream is decompressed without an output bound. A 42-byte file allocated 256 MB, and a 127 KB file allocated 460 MB. Denial of servi...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.7,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N",
    "epss_score": 0.00469,
    "epss_percentile": 0.41451,
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
    "relative_time": "1d ago",
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
    "description": "HandlePathSwitchRequest guards the UESecurityCapabilities IE for presence but never for length, and the extensible APER type silently yields an empty bit string, so six unguarded index-zero reads panic on an unrecovered goroutine and terminate the AMF. The AMF is the control-plane entry point for a 5G core, so terminating it drops mobility management for every subscriber. Confirmed at HEAD daed5a2 (present in v3.1...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.9,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00361,
    "epss_percentile": 0.30696,
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
    "relative_time": "1d ago",
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
    "description": "An authorization bypass occurs against the API endpoint `/baser/api/admin/` by abusing the session authentication fallback. The mail settings are used here as an example. Admin side: https://github.com/baserproject/basercms/blob/master/plugins/baser-core/config/permission.php#L100 With `auth => false`, it is not accessible with operator privileges. API side: https://github.com/baserproject/basercms/blob/master/plu...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.0037,
    "epss_percentile": 0.31705,
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
    "relative_time": "1d ago",
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
    "description": "The security patch introduced in baserCMS 5.2.3 to address CVE-2026-30940 / [GHSA-c5c6-37vq-pjcq](https://github.com/baserproject/basercms/security/advisories/GHSA-c5c6-37vq-pjcq) is **incomplete**. The patch added a `realpath()`-based directory traversal check in `BcThemeFileService::getFullpath()`, but the check is **entirely skipped** when `realpath($baseDir)` returns `false` — which occurs whenever the target ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.01062,
    "epss_percentile": 0.65412,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00274,
    "epss_percentile": 0.20213,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00255,
    "epss_percentile": 0.17471,
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
    "relative_time": "1d ago",
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
    "description": "The `/bolt/async/upload-url` and `/bolt/async/embed` endpoints validated only the **submitted** URL before fetching it server-side, but the fetch then **followed redirects to destinations that were never re-validated**. This allowed an authenticated user to bypass the SSRF guard (`UrlSafetyChecker`) and make the server issue requests to internal/cloud-metadata addresses. This issue has been patched with Bolt 6.1.5.",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": 0.00366,
    "epss_percentile": 0.31252,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00442,
    "epss_percentile": 0.39322,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00283,
    "epss_percentile": 0.21281,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00277,
    "epss_percentile": 0.20619,
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
    "relative_time": "1d ago",
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
    "description": "Daptin registers a generic WebSocket endpoint, `GET /yjs/:documentName`, for real-time collaborative document editing (YJS/CRDT). Unlike its purpose-built sibling route, this generic endpoint performs no per-resource authorization check - it only verifies that *some* user session exists. Because the document store parses `:documentName` as `typename.referenceId.columnName` and fetches that row's real column conten...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.6,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:N",
    "epss_score": 0.00397,
    "epss_percentile": 0.34807,
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
    "relative_time": "1d ago",
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
    "description": "An unauthenticated attacker can inject arbitrary SQL through the `sort` query parameter accepted by Daptin's generic entity list endpoint (`GET /api/<entity>`), which every table in a Daptin instance exposes. The parameter is concatenated into raw SQL identifiers with no validation that the referenced column exists, unlike a sibling code path in the same file that received exactly this validation as the fix for a ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:H",
    "epss_score": 0.00604,
    "epss_percentile": 0.49859,
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
    "relative_time": "1d ago",
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
    "cvss_score": 9.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:H/VA:H/SC:H/SI:H/SA:H",
    "epss_score": 0.00503,
    "epss_percentile": 0.43944,
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
    "relative_time": "1d ago",
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
    "cvss_score": 7.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:L/VI:H/VA:L/SC:H/SI:H/SA:L",
    "epss_score": 0.00505,
    "epss_percentile": 0.44078,
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
    "relative_time": "1d ago",
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
    "description": "[MEDIUM] SSRF guard bypass via DNS rebinding — validate_url_ssrf resolves-then-connects without pinning - **CWE:** CWE-918 (SSRF) / CWE-367 (TOCTOU). - **CVSS v3.1:** `AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N` = **6.8 Medium** (AC:H — needs attacker-controlled DNS with a low/zero TTL and to flip the answer between the guard's lookup and the connection's lookup; S:C — reaches internal/metadata services the guard is mean...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": 0.00347,
    "epss_percentile": 0.29053,
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
    "relative_time": "1d ago",
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
    "description": "`http.paginate` validates only the initial `base_url`, then follows server-supplied pagination targets (RFC 5988 `Link: rel=\"next\"` headers, cursor/offset URLs) in a loop **without revalidating each follow-up URL**. An attacker's first-page response can point `next` at an internal address, causing a second-order SSRF whose internal body is aggregated into the returned items. Root Cause `src/core/modules/atomic/htt...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": 0.00355,
    "epss_percentile": 0.29999,
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
    "relative_time": "1d ago",
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
    "description": "`validate_url_ssrf` resolves the hostname, checks the IP against private ranges, then **discards the IP and returns the hostname URL string**. aiohttp performs a fresh, independent DNS resolution at connect time. An attacker controlling DNS for a hostname (TTL 0, alternating public IP and internal IP) passes validation on the first lookup and connects to the internal IP on the second — a classic check-then-use rac...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:L/A:N",
    "epss_score": 0.0028,
    "epss_percentile": 0.21015,
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
    "relative_time": "1d ago",
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
    "description": "[CRITICAL] Arbitrary file write via unguarded `data.*` / `file.*` write modules — incomplete fix of GHSA-2956 - **CWE:** CWE-22 (Path Traversal) / CWE-73 (External Control of File Name or Path); impact reaches CWE-94 (code execution via file overwrite). - **CVSS v3.1:** `AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H` = **9.3 Critical** (S:C because a write escapes the intended sandbox confinement into the host filesystem / ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 10,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:N/I:H/A:H",
    "epss_score": 0.00748,
    "epss_percentile": 0.5582,
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
    "relative_time": "1d ago",
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
    "description": "django-docutils before `0.30.0` rendered reStructuredText through Docutils without protected web-safe defaults. Public rendering paths, including `publish_doctree`, `publish_html_from_source`, `publish_html_from_doctree`, `publish_parts_from_doctree`, the `{% rst %}` template tag, the `rst` template filter, `DocutilsTemplates`, and `DocutilsView`, could process attacker-controlled RST with Docutils directives that...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 8.2,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:N",
    "epss_score": 0.0044,
    "epss_percentile": 0.39151,
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
    "relative_time": "1d ago",
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
    "description": "jane-php resolves external `$ref` targets at code-generation time via `file_get_contents($ref)` (jane-php/json-schema-runtime/Reference.php::doResolve) with no scheme/path restriction. An attacker-controlled OpenAPI document can therefore cause: `$ref: 'http://attacker/x'` -> SSRF (HTTP GET at gen time; response inlined = RFI); `$ref: '/abs/file'` -> LFI; `$ref: '../secret.yaml'` -> path-traversal LFI (CWE-22, arb...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7,
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
    "relative_time": "1d ago",
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
    "description": "Refitter emits the spec's content-type key (content map key in requestBody/responses) verbatim into a Refit `[Headers(\"Accept: <ct>\", \"Content-Type: <ct>\")]` attribute string without escaping `\"`. A crafted value survives Refitter's default OpenAPI validation, breaks out of the attribute and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and reopens so th...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.3,
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
    "relative_time": "1d ago",
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
    "description": "Refitter emits the spec's header parameter name (parameters[].name with in: header) verbatim into a Refit `[Header(\"<name>\")]` attribute string without escaping `\"`. A crafted value survives Refitter's default OpenAPI validation, breaks out of the attribute and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and reopens so the file stays valid. .NET runs `...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.3,
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
    "relative_time": "1d ago",
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
    "description": "Refitter emits each OpenAPI path (the paths-object key) verbatim into a Refit `[Get(\"<path>\")]` attribute string, without escaping `\"` or restricting characters. A crafted single-line, /-prefixed path survives Refitter's default OpenAPI validation yet closes the attribute string and the enclosing interface + namespace, injects a top-level `file class` with a `[ModuleInitializer]` method, and reopens a namespace + ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.3,
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
    "relative_time": "1d ago",
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
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server can accept client connections over WebSocket and can also support MQTT over WebSocket when MQTT is configured. Problem Description A WebSocket listener could route requests for the MQTT-over-WebSocket path into MQTT handling even when MQTT was n...",
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
    "relative_time": "1d ago",
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
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server supports MQTT clients, including authentication and parsing of MQTT `CONNECT` packets. Problem Description An unauthenticated MQTT client could cause the server to retain large incomplete MQTT `CONNECT` packets before authentication completed. T...",
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
    "relative_time": "1d ago",
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
    "description": "Background NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT and edge computing. The NATS Server MQTT support includes retained messages and QoS1+ durable delivery. NATS subscription permissions can allow broad wildcard subscriptions while denying more sensitive subjects. Problem Description MQTT retained message delivery and QoS1+ durable ...",
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
    "relative_time": "1d ago",
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
    "description": "The Halo 2 aggregation circuit could mishandle proof elements encoded as the point at infinity. When an assigned proof point appeared in an MSM term with constant scalar one, the Halo 2 loader used a scalar-one shortcut that passed the assigned point directly into the EC sum helper. The EC sum implementation used by that path assumed its inputs were non-identity points, while assigned proof points could represent ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.9,
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
    "relative_time": "1d ago",
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
    "description": "NLTK ships a security wrapper, `nltk.pathsec.ZipFile`, that is meant to confine archive extraction to trusted data roots and to block link-based escapes. When `nltk.download()` installs a package, the extraction write opens each member's target path without checking whether that path is a hardlink to a file located outside the data root. A local actor who can write inside a shared or predictable NLTK data root (fo...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:H",
    "epss_score": 0.0022,
    "epss_percentile": 0.12847,
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
    "relative_time": "1d ago",
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
    "description": "`nltk.picklesec.allowlisted_pickle_load` keyed its denylist of dangerous globals by export name, so numpy's file-I/O callables that live in submodules and are not re-exported under `__module__ == \"numpy\"` were never matched. Under the broad `allowed_modules=(\"numpy\", \"scipy\", \"sklearn\")` allowance that `TransitionParser.parse(depgraphs, modelFile)` granted for model files, a crafted protocol 4 pickle could name `n...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:L/A:N",
    "epss_score": 0.00244,
    "epss_percentile": 0.15896,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00158,
    "epss_percentile": 0.05071,
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
    "relative_time": "1d ago",
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
    "description": "NLTK 3.10.3 contains security hardening intended to close JVM argument-injection and untrusted JAR/classpath execution paths in `nltk.internals.java()`, including the issue published as GHSA-m4rf-3fr8-xwx3. The patched `options` channel correctly rejects Java argument-file references such as `@/path/to/args` and launcher modes such as `-jar`. However, an additional argument channel remains: the caller-provided `cm...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00914,
    "epss_percentile": 0.60974,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00668,
    "epss_percentile": 0.5285,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00356,
    "epss_percentile": 0.30067,
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
    "relative_time": "1d ago",
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
    "description": "`nltk.classify.weka.ARFF_Formatter` writes class labels directly into the Weka ARFF `@ATTRIBUTE '-label-' {...}` declaration without any ARFF quoting or escaping. An attacker who can contribute class labels to a training dataset can include ARFF metacharacters such as `}`, newlines, `@ATTRIBUTE`, and `@DATA` to break out of the nominal label list and inject attacker‑controlled ARFF schema and data directives. This...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:L",
    "epss_score": 0.00439,
    "epss_percentile": 0.39059,
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
    "relative_time": "1d ago",
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
    "description": "DependencyGraph.tree()/triples() walk the parsed dependency structure using plain, unbounded Python recursion — one stack frame per edge in the graph — and never use the class's own cycle detector. A crafted dependency-parse file with a few thousand chained tokens (an entirely ordinary-looking long sentence) crashes the process with an unhandled RecursionError the moment .tree() or .triples() is called — which is ...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00691,
    "epss_percentile": 0.53742,
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
    "relative_time": "1d ago",
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
    "description": "The recursive traversal engines behind WordNetCorpusReader's Synset.tree() and Synset.acyclic_tree() have no maximum call-depth safeguard and default to unlimited depth. They guard against literal cycles, but not against a long, genuinely acyclic relation chain — which exhausts the Python call stack the same way as the sibling DependencyGraph finding I reported separately. Real-world exploitability requires the ho...",
    "source": "GitHub Advisory (GHSA)",
    "sources": [
      "GitHub Advisory (GHSA)"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    "epss_score": 0.00668,
    "epss_percentile": 0.52851,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00536,
    "epss_percentile": 0.46094,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00479,
    "epss_percentile": 0.42285,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00419,
    "epss_percentile": 0.37124,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00419,
    "epss_percentile": 0.37124,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00469,
    "epss_percentile": 0.41452,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00691,
    "epss_percentile": 0.53742,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00237,
    "epss_percentile": 0.15055,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00396,
    "epss_percentile": 0.3473,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00469,
    "epss_percentile": 0.41452,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.0034,
    "epss_percentile": 0.28146,
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
    "relative_time": "1d ago",
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
    "epss_score": 0.00232,
    "epss_percentile": 0.14322,
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "id": "CVE-2026-21158",
    "cve_id": "CVE-2026-21158",
    "ghsa_id": null,
    "title": "Improper certificate validation in CP prior to SMR Nov-2026 Release 1 allows local privileged attackers to bypas...",
    "description": "Improper certificate validation in CP prior to SMR Nov-2026 Release 1 allows local privileged attackers to bypass SIM lock.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.3,
    "cvss_vector": "CVSS:4.0/AV:P/AC:L/AT:P/PR:H/UI:N/VC:H/VI:L/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00096,
    "epss_percentile": 0.00693,
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
    "published_at": "2026-11-16T12:17:56.413Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21158",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21156",
    "cve_id": "CVE-2026-21156",
    "ghsa_id": null,
    "title": "Out-of-bounds write in libsmkvextractor.so prior to SMR Nov-2026 Release 1 allows local attackers to write out-o...",
    "description": "Out-of-bounds write in libsmkvextractor.so prior to SMR Nov-2026 Release 1 allows local attackers to write out-of-bounds memory.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.9,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00119,
    "epss_percentile": 0.01834,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-787"
    ],
    "published_at": "2026-11-16T12:17:56.290Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21156",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21155",
    "cve_id": "CVE-2026-21155",
    "ghsa_id": null,
    "title": "Out-of-bounds write in bootloader prior to SMR Nov-2026 Release 1 allows physical attackers to write out-of-boun...",
    "description": "Out-of-bounds write in bootloader prior to SMR Nov-2026 Release 1 allows physical attackers to write out-of-bounds memory.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.7,
    "cvss_vector": "CVSS:4.0/AV:P/AC:L/AT:N/PR:N/UI:N/VC:N/VI:L/VA:L/SC:H/SI:H/SA:H/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00269,
    "epss_percentile": 0.19477,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-787"
    ],
    "published_at": "2026-11-16T12:17:56.143Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21155",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21154",
    "cve_id": "CVE-2026-21154",
    "ghsa_id": null,
    "title": "Improper authorization in libsecuibc.so prior to SMR Nov-2026 Release 1 allows local attackers to access dump data.",
    "description": "Improper authorization in libsecuibc.so prior to SMR Nov-2026 Release 1 allows local attackers to access dump data.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.9,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00113,
    "epss_percentile": 0.01479,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-285"
    ],
    "published_at": "2026-11-16T12:17:56.023Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21154",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21153",
    "cve_id": "CVE-2026-21153",
    "ghsa_id": null,
    "title": "Stack-based buffer overflow in libsecuibc.so prior to SMR Nov-2026 Release 1 allows local attackers to execute a...",
    "description": "Stack-based buffer overflow in libsecuibc.so prior to SMR Nov-2026 Release 1 allows local attackers to execute arbitrary code.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.4,
    "cvss_vector": "CVSS:4.0/AV:L/AC:H/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00139,
    "epss_percentile": 0.03338,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-121"
    ],
    "published_at": "2026-11-16T12:17:55.883Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21153",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21152",
    "cve_id": "CVE-2026-21152",
    "ghsa_id": null,
    "title": "Improper input validation in libMyFilterPlugin.camera.samsung.so prior to SMR Nov-2026 Release 1 allows local at...",
    "description": "Improper input validation in libMyFilterPlugin.camera.samsung.so prior to SMR Nov-2026 Release 1 allows local attackers to potentially execute arbitrary code. User interaction is required for triggering this vulnerability.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:A/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.0015,
    "epss_percentile": 0.04235,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-20"
    ],
    "published_at": "2026-11-16T12:17:55.757Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21152",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21151",
    "cve_id": "CVE-2026-21151",
    "ghsa_id": null,
    "title": "Improper privilege management in TransitionPlayer prior to SMR Nov-2026 Release 1 allows local privileged attack...",
    "description": "Improper privilege management in TransitionPlayer prior to SMR Nov-2026 Release 1 allows local privileged attackers to execute arbitrary code with launcher privilege.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.3,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:H/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00145,
    "epss_percentile": 0.038,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-269"
    ],
    "published_at": "2026-11-16T12:17:55.627Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21151",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21150",
    "cve_id": "CVE-2026-21150",
    "ghsa_id": null,
    "title": "Improper access control in edmnativehelper prior to SMR Nov-2026 Release 1 allows local attackers to access sens...",
    "description": "Improper access control in edmnativehelper prior to SMR Nov-2026 Release 1 allows local attackers to access sensitive information.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.1,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00149,
    "epss_percentile": 0.04133,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-284"
    ],
    "published_at": "2026-11-16T12:17:55.503Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21150",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21149",
    "cve_id": "CVE-2026-21149",
    "ghsa_id": null,
    "title": "Improper access control in StatusBarManagerService prior to SMR Nov-2026 Release 1 allows local attackers to use...",
    "description": "Improper access control in StatusBarManagerService prior to SMR Nov-2026 Release 1 allows local attackers to use the privileged APIs.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.9,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00149,
    "epss_percentile": 0.04133,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-284"
    ],
    "published_at": "2026-11-16T12:17:55.387Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21149",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21148",
    "cve_id": "CVE-2026-21148",
    "ghsa_id": null,
    "title": "Incorrect authorization in Samsung Messages prior to SMR Nov-2026 Release 1 allows local attackers to access sen...",
    "description": "Incorrect authorization in Samsung Messages prior to SMR Nov-2026 Release 1 allows local attackers to access sensitive information.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.1,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00113,
    "epss_percentile": 0.0148,
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
    "published_at": "2026-11-16T12:17:55.260Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21148",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21147",
    "cve_id": "CVE-2026-21147",
    "ghsa_id": null,
    "title": "Improper export of android application components in CoverScreenWidgetActionActivity in Samsung Contacts prior t...",
    "description": "Improper export of android application components in CoverScreenWidgetActionActivity in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to make a call without proper permission.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.8,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00098,
    "epss_percentile": 0.00766,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-926"
    ],
    "published_at": "2026-11-16T12:17:55.137Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21147",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21146",
    "cve_id": "CVE-2026-21146",
    "ghsa_id": null,
    "title": "Improper export of android application components in CoverScreenWidgetActionActivitySmall in Samsung Contacts pr...",
    "description": "Improper export of android application components in CoverScreenWidgetActionActivitySmall in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to make a call without proper permission.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.8,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00098,
    "epss_percentile": 0.00767,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-926"
    ],
    "published_at": "2026-11-16T12:17:55.017Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21146",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21145",
    "cve_id": "CVE-2026-21145",
    "ghsa_id": null,
    "title": "Improper export of android application components in CoverScreenWidgetActionActivityLarge in Samsung Contacts pr...",
    "description": "Improper export of android application components in CoverScreenWidgetActionActivityLarge in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to make a call without proper permission.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 4.8,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00098,
    "epss_percentile": 0.00766,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-926"
    ],
    "published_at": "2026-11-16T12:17:54.893Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21145",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21144",
    "cve_id": "CVE-2026-21144",
    "ghsa_id": null,
    "title": "Improper authorization in RecentsCallLogLargeWidgetProvider in Samsung Contacts prior to SMR Nov-2026 Release 1 ...",
    "description": "Improper authorization in RecentsCallLogLargeWidgetProvider in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to make a call without proper permission.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.1,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00113,
    "epss_percentile": 0.0148,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-285"
    ],
    "published_at": "2026-11-16T12:17:54.350Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21144",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21143",
    "cve_id": "CVE-2026-21143",
    "ghsa_id": null,
    "title": "Improper authorization in CoverScreenRecentsWidgetProvider in Samsung Contacts prior to SMR Nov-2026 Release 1 a...",
    "description": "Improper authorization in CoverScreenRecentsWidgetProvider in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to make a call without proper permission.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.1,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00113,
    "epss_percentile": 0.01479,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-285"
    ],
    "published_at": "2026-11-16T12:17:54.133Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21143",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21142",
    "cve_id": "CVE-2026-21142",
    "ghsa_id": null,
    "title": "Incorrect default permissions in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to acce...",
    "description": "Incorrect default permissions in Samsung Contacts prior to SMR Nov-2026 Release 1 allows local attackers to access profile configuration.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "LOW",
    "cvss_score": 2.1,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00149,
    "epss_percentile": 0.04132,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-276"
    ],
    "published_at": "2026-11-16T12:17:53.997Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21142",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-21141",
    "cve_id": "CVE-2026-21141",
    "ghsa_id": null,
    "title": "Improper access control in Samsung Dialer prior to SMR Nov-2026 Release 1 allows local attackers to access sensi...",
    "description": "Improper access control in Samsung Dialer prior to SMR Nov-2026 Release 1 allows local attackers to access sensitive information.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.9,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00149,
    "epss_percentile": 0.04133,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-284"
    ],
    "published_at": "2026-11-16T12:17:53.860Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-21141",
    "references": [
      "https://security.samsungmobile.com/securityUpdate.smsb?year=2026&month=11"
    ]
  },
  {
    "id": "CVE-2026-15707",
    "cve_id": "CVE-2026-15707",
    "ghsa_id": null,
    "title": "An uncontrolled search path vulnerability (CWE-427) in statically linked OpenSSL libraries within Netskope Clien...",
    "description": "An uncontrolled search path vulnerability (CWE-427) in statically linked OpenSSL libraries within Netskope Client (stAgentSvc.exe) and Endpoint DLP (epdlp.exe) on Windows allows an authenticated local attacker to execute arbitrary code with elevated SYSTEM privileges. The services retain internal build-time paths referencing a secondary drive location. On Windows systems where default volume permissions allow stan...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.5,
    "cvss_vector": "CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:N/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00162,
    "epss_percentile": 0.05551,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-427"
    ],
    "published_at": "2026-11-16T12:17:53.653Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-15707",
    "references": [
      "https://www.netskope.com/resources/netskope-resources/netskope-security-advisory-nskpsa-2026-005"
    ]
  },
  {
    "id": "CVE-2026-129553",
    "cve_id": "CVE-2026-129553",
    "ghsa_id": null,
    "title": "Tensei through 0.11.5 contains an open redirect vulnerability in the @tensei/social-auth SocialAuthCallbackContr...",
    "description": "Tensei through 0.11.5 contains an open redirect vulnerability in the @tensei/social-auth SocialAuthCallbackController that allows unauthenticated attackers to redirect users by supplying an unvalidated clientCallback query parameter. Attackers can craft links to the /:provider/callback route that send victims to attacker-controlled sites for phishing and leak the issued temporary access token appended after login.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": 0.00189,
    "epss_percentile": 0.08758,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-601"
    ],
    "published_at": "2026-11-16T12:17:53.490Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129553",
    "references": [
      "https://github.com/tenseijs/tensei",
      "https://github.com/tenseijs/tensei/blob/630f39038c7751178465f990fb358b0c2d5b1914/packages/social-auth/src/index.js#L18-L28",
      "https://github.com/tenseijs/tensei/issues/398",
      "https://www.vulncheck.com/advisories/tensei-through-0.11.5-open-redirect-via-tensei-social-auth-oauth-callback"
    ]
  },
  {
    "id": "CVE-2026-129552",
    "cve_id": "CVE-2026-129552",
    "ghsa_id": null,
    "title": "Tensei through 0.11.5 contains an authentication bypass vulnerability in @tensei/auth that falls back to the har...",
    "description": "Tensei through 0.11.5 contains an authentication bypass vulnerability in @tensei/auth that falls back to the hard-coded JWT signing key 'auth-secret-key' when JWT_SECRET is unset. Unauthenticated attackers can sign tokens with arbitrary user ids accepted by populateContextFromToken to impersonate any user, including administrators.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00535,
    "epss_percentile": 0.46075,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-1394"
    ],
    "published_at": "2026-11-16T12:17:53.337Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129552",
    "references": [
      "https://github.com/tenseijs/tensei",
      "https://github.com/tenseijs/tensei/blob/630f39038c7751178465f990fb358b0c2d5b1914/packages/auth/src/index.ts#L94-L98",
      "https://github.com/tenseijs/tensei/issues/398",
      "https://www.vulncheck.com/advisories/tensei-through-0.11.5-authentication-bypass-via-hard-coded-jwt-secret-in-tensei-auth"
    ]
  },
  {
    "id": "CVE-2026-129551",
    "cve_id": "CVE-2026-129551",
    "ghsa_id": null,
    "title": "Tensei through 0.11.5 contains a prototype pollution vulnerability in parseSortFromStringToObject of @tensei/res...",
    "description": "Tensei through 0.11.5 contains a prototype pollution vulnerability in parseSortFromStringToObject of @tensei/rest that allows unauthenticated attackers to set Object.prototype properties via the sort parameter. Attackers can send a sort value like __proto__.<name>:<value> to list, fetch-one, update or delete routes before authorization, altering application logic and causing denial of service.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:L",
    "epss_score": 0.00378,
    "epss_percentile": 0.32639,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-1321"
    ],
    "published_at": "2026-11-16T12:17:53.190Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129551",
    "references": [
      "https://github.com/tenseijs/tensei",
      "https://github.com/tenseijs/tensei/blob/630f39038c7751178465f990fb358b0c2d5b1914/packages/rest/src/populate-helpers.ts#L5-L20",
      "https://github.com/tenseijs/tensei/issues/398",
      "https://www.vulncheck.com/advisories/tensei-through-0.11.5-unauthenticated-prototype-pollution-via-sort-parameter"
    ]
  },
  {
    "id": "CVE-2026-129550",
    "cve_id": "CVE-2026-129550",
    "ghsa_id": null,
    "title": "Tensei through 0.11.5 contains a privilege escalation vulnerability in @tensei/auth that allows unauthenticated ...",
    "description": "Tensei through 0.11.5 contains a privilege escalation vulnerability in @tensei/auth that allows unauthenticated or authenticated users to assign themselves arbitrary roles via the exposed User Roles field. Attackers can supply a roles array during registration, a POST to the users route, or a PATCH to their own record to gain administrator permissions.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
    "epss_score": 0.00395,
    "epss_percentile": 0.34584,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-915"
    ],
    "published_at": "2026-11-16T12:17:53.033Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129550",
    "references": [
      "https://github.com/tenseijs/tensei",
      "https://github.com/tenseijs/tensei/blob/630f39038c7751178465f990fb358b0c2d5b1914/packages/auth/src/index.ts#L311-L333",
      "https://github.com/tenseijs/tensei/issues/398",
      "https://www.vulncheck.com/advisories/tensei-through-0.11.5-privilege-escalation-via-self-assigned-roles-in-tensei-auth"
    ]
  },
  {
    "id": "CVE-2026-129549",
    "cve_id": "CVE-2026-129549",
    "ghsa_id": null,
    "title": "Tensei through 0.11.5 contains an unrestricted file upload vulnerability in the @tensei/media plugin that allows...",
    "description": "Tensei through 0.11.5 contains an unrestricted file upload vulnerability in the @tensei/media plugin that allows unauthenticated attackers to upload dangerous file types via the files/upload route. Attackers can set the multipart Content-Type to upload HTML or SVG files served from the application origin, causing stored cross-site scripting and storage consumption.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": 0.00202,
    "epss_percentile": 0.10381,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-434"
    ],
    "published_at": "2026-11-16T12:17:52.860Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129549",
    "references": [
      "https://github.com/tenseijs/tensei",
      "https://github.com/tenseijs/tensei/blob/630f39038c7751178465f990fb358b0c2d5b1914/packages/media/server/helpers/process-request.ts#L189-L216",
      "https://github.com/tenseijs/tensei/issues/398",
      "https://www.vulncheck.com/advisories/tensei-through-0.11.5-unauthenticated-file-upload-via-tensei-media-files-upload"
    ]
  },
  {
    "id": "CVE-2026-129548",
    "cve_id": "CVE-2026-129548",
    "ghsa_id": null,
    "title": "Kalmia through 0.2.0 contains a stored cross-site scripting vulnerability that allows read-only authenticated us...",
    "description": "Kalmia through 0.2.0 contains a stored cross-site scripting vulnerability that allows read-only authenticated users to upload HTML or SVG files via the upload-file endpoint without type restrictions. Attackers can share links to files served unauthenticated through the file get route, executing JavaScript in the admin origin to steal administrator JWTs from localStorage.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.4,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N",
    "epss_score": 0.00214,
    "epss_percentile": 0.11986,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-434"
    ],
    "published_at": "2026-11-16T12:17:52.707Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129548",
    "references": [
      "https://github.com/DifuseHQ/Kalmia",
      "https://github.com/DifuseHQ/Kalmia/blob/1bc059450c3901b17e1be99209965b12f6d163e4/handlers/file.go#L19-L61",
      "https://github.com/DifuseHQ/Kalmia/issues/35",
      "https://www.vulncheck.com/advisories/kalmia-through-0.2.0-stored-xss-via-unrestricted-file-upload"
    ]
  },
  {
    "id": "CVE-2026-129547",
    "cve_id": "CVE-2026-129547",
    "ghsa_id": null,
    "title": "Kalmia through 0.2.0 contains an authentication bypass vulnerability in RsPressMiddleware that allows unauthenti...",
    "description": "Kalmia through 0.2.0 contains an authentication bypass vulnerability in RsPressMiddleware that allows unauthenticated attackers to access private documentation by supplying any non-empty viewToken cookie. Attackers can send requests with a forged viewToken cookie, which is never validated as a JWT, to read all pages and assets of RequireAuth documentation sites.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.00463,
    "epss_percentile": 0.41008,
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
    "published_at": "2026-11-16T12:17:52.550Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129547",
    "references": [
      "https://github.com/DifuseHQ/Kalmia",
      "https://github.com/DifuseHQ/Kalmia/blob/1bc059450c3901b17e1be99209965b12f6d163e4/middleware/rspress.go#L20-L70",
      "https://github.com/DifuseHQ/Kalmia/issues/35",
      "https://www.vulncheck.com/advisories/kalmia-through-0.2.0-authentication-bypass-via-viewtoken-cookie"
    ]
  },
  {
    "id": "CVE-2026-129546",
    "cve_id": "CVE-2026-129546",
    "ghsa_id": null,
    "title": "Kalmia through 0.2.0 contains an information disclosure vulnerability that allows authenticated read-only users ...",
    "description": "Kalmia through 0.2.0 contains an information disclosure vulnerability that allows authenticated read-only users to retrieve Git deployment credentials via documentation API responses. Attackers can query GET /kal-api/docs/documentations or POST /kal-api/docs/documentation to obtain plaintext gitUser and gitPassword values and authenticate to external Git repositories.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    "epss_score": 0.00348,
    "epss_percentile": 0.29139,
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
    "published_at": "2026-11-16T12:17:52.383Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129546",
    "references": [
      "https://github.com/DifuseHQ/Kalmia",
      "https://github.com/DifuseHQ/Kalmia/blob/1bc059450c3901b17e1be99209965b12f6d163e4/services/docs_docs.go#L52-L55",
      "https://github.com/DifuseHQ/Kalmia/issues/35",
      "https://www.vulncheck.com/advisories/kalmia-through-0.2.0-git-credential-disclosure-via-documentation-api"
    ]
  },
  {
    "id": "CVE-2026-129545",
    "cve_id": "CVE-2026-129545",
    "ghsa_id": null,
    "title": "Kalmia through 0.2.0 contains a privilege escalation vulnerability that allows low-privileged authenticated user...",
    "description": "Kalmia through 0.2.0 contains a privilege escalation vulnerability that allows low-privileged authenticated users to modify any account via the /kal-api/auth/user/edit endpoint. Attackers holding only read permission can set their admin flag and 'all' permission or reset an administrator's password to fully take over the instance.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00283,
    "epss_percentile": 0.21359,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-269"
    ],
    "published_at": "2026-11-16T12:17:52.203Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129545",
    "references": [
      "https://github.com/DifuseHQ/Kalmia",
      "https://github.com/DifuseHQ/Kalmia/blob/1bc059450c3901b17e1be99209965b12f6d163e4/services/auth.go#L183-L232",
      "https://github.com/DifuseHQ/Kalmia/issues/35",
      "https://www.vulncheck.com/advisories/kalmia-through-0.2.0-privilege-escalation-via-kal-api-auth-user-edit"
    ]
  },
  {
    "id": "CVE-2026-124631",
    "cve_id": "CVE-2026-124631",
    "ghsa_id": null,
    "title": "In affected versions of Octopus Server, insufficient authorization checks allowed a low-privileged authenticated...",
    "description": "In affected versions of Octopus Server, insufficient authorization checks allowed a low-privileged authenticated user to register an Argo CD gateway, which could result in unauthorized changes to Argo CD Application data for projects and environments outside their permissions within the same Space.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00269,
    "epss_percentile": 0.19536,
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
    "published_at": "2026-11-16T12:17:46.773Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124631",
    "references": [
      "https://advisories.octopus.com/post/2026/sa2026-27"
    ]
  },
  {
    "id": "CVE-2026-124629",
    "cve_id": "CVE-2026-124629",
    "ghsa_id": null,
    "title": "In affected versions of Octopus Server, insufficient authorization checks on scheduled project triggers allowed ...",
    "description": "In affected versions of Octopus Server, insufficient authorization checks on scheduled project triggers allowed users who were permitted to deploy existing releases, but not to create new ones, to configure a trigger that could result in new releases being created and deployed without the required permission being assigned. The resulting audit events were attributed to the system rather than to the user who config...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 5.3,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:L/VA:N/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00324,
    "epss_percentile": 0.26115,
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
    "published_at": "2026-11-16T12:17:46.640Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-124629",
    "references": [
      "https://advisories.octopus.com/post/2026/sa2026-25"
    ]
  },
  {
    "id": "CVE-2026-123745",
    "cve_id": "CVE-2026-123745",
    "ghsa_id": null,
    "title": "In affected versions of Octopus Server, improper path validation allowed a user with scoped runbook permissions ...",
    "description": "In affected versions of Octopus Server, improper path validation allowed a user with scoped runbook permissions to execute runbooks on offline package drop targets, this could result in exposure of Server working-directory files outside their permitted scope and deletion of those files.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.1,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:H/VI:L/VA:L/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00292,
    "epss_percentile": 0.22309,
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
    "published_at": "2026-11-16T12:17:46.170Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-123745",
    "references": [
      "https://advisories.octopus.com/post/2026/sa2026-26"
    ]
  },
  {
    "id": "CVE-2026-116288",
    "cve_id": "CVE-2026-116288",
    "ghsa_id": null,
    "title": "In affected versions of Octopus Server, a user with permission to edit team scoped roles could escalate their pr...",
    "description": "In affected versions of Octopus Server, a user with permission to edit team scoped roles could escalate their privileges to deploy to projects and environments that they were not authorised to so.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.6,
    "cvss_vector": "CVSS:4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X",
    "epss_score": 0.00298,
    "epss_percentile": 0.23039,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-269"
    ],
    "published_at": "2026-11-16T12:17:43.347Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-116288",
    "references": [
      "https://advisories.octopus.com/post/2026/sa2026-28"
    ]
  },
  {
    "id": "CVE-2026-110941",
    "cve_id": "CVE-2026-110941",
    "ghsa_id": null,
    "title": "Mattermost Desktop App versions <=6.3 6.0.3 6.3.2.0 fail to monitor secondary browser windows in the local netwo...",
    "description": "Mattermost Desktop App versions <=6.3 6.0.3 6.3.2.0 fail to monitor secondary browser windows in the local network access filter which allows an attacker-controlled server to access private network resources via opening pop-out or widget windows. Mattermost Advisory ID: MMSA-2026-00778",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:N/A:N",
    "epss_score": 0.00326,
    "epss_percentile": 0.2633,
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
    "published_at": "2026-11-16T12:17:41.753Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-110941",
    "references": [
      "https://mattermost.com/security-updates"
    ]
  },
  {
    "id": "CVE-2026-85240",
    "cve_id": "CVE-2026-85240",
    "ghsa_id": null,
    "title": "Mattermost Desktop App versions <=6.3 6.0.3 6.3.2.0 fail to handle filesystem errors that can occur when finaliz...",
    "description": "Mattermost Desktop App versions <=6.3 6.0.3 6.3.2.0 fail to handle filesystem errors that can occur when finalizing certain file downloads, which allows a malicious or compromised server to cause a denial of service by crashing the entire desktop application via a specially crafted download Mattermost Advisory ID: MMSA-2026-00779",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "MEDIUM",
    "cvss_score": 6.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
    "epss_score": 0.00344,
    "epss_percentile": 0.28715,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-754"
    ],
    "published_at": "2026-11-16T11:16:46.850Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-85240",
    "references": [
      "https://mattermost.com/security-updates"
    ]
  },
  {
    "id": "CVE-2026-63245",
    "cve_id": "CVE-2026-63245",
    "ghsa_id": null,
    "title": "A local privilege escalation (LPE) vulnerability in the Audigy Rx driver’s Emupia2k.sys file could allow a local...",
    "description": "A local privilege escalation (LPE) vulnerability in the Audigy Rx driver’s Emupia2k.sys file could allow a local attacker with low privilege access to gain higher privileges, such as administrator rights.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.3,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:H/I:H/A:H",
    "epss_score": 0.0013,
    "epss_percentile": 0.02708,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [
      "CWE-269"
    ],
    "published_at": "2026-11-16T11:16:46.710Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-63245",
    "references": [
      "https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2026-163/"
    ]
  },
  {
    "id": "CVE-2026-129784",
    "cve_id": "CVE-2026-129784",
    "ghsa_id": null,
    "title": "The httpx Ruby gem parses JSON response bodies through its transcoder layer.",
    "description": "The httpx Ruby gem parses JSON response bodies through its transcoder layer. HTTPX::Response#json delegates to Transcoder::JSON.decode, and when the oj gem is loaded and multi_json is absent, the decoder falls back to json_load, which calls Oj.load(response.to_s) with no mode option. Oj.load defaults to :object mode, in which a response document can allocate any already-loaded Ruby class (\"^o\":\"ClassName\") and set...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.5,
    "cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:H/A:H",
    "epss_score": 0.00659,
    "epss_percentile": 0.52453,
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
    "published_at": "2026-11-16T11:16:45.537Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-129784",
    "references": [
      "https://github.com/HoneyryderChuck/httpx",
      "https://github.com/HoneyryderChuck/httpx/commit/eeb785d3250eee9379494fb62c37c315a31e327c",
      "https://github.com/HoneyryderChuck/httpx/releases/tag/v1.9.1",
      "https://github.com/ohler55/oj/blob/develop/pages/Security.md",
      "https://gitlab.com/os85/httpx"
    ]
  },
  {
    "id": "CVE-2026-99311",
    "cve_id": "CVE-2026-99311",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nudf: fix return value for non-recorded-allo...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: udf: fix return value for non-recorded-allocated extents in udf_map_block() When someone creates a corrupted UDF filesystem where symlink contains other extent type than EXT_RECORDED_ALLOCATED, it can leads to a crash like: Oops: general protection fault KASAN: maybe wild-memory-access RIP: 0010:page_get_link (fs/namei.c:6503) Call Trace: vfs_read...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "UNKNOWN",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00157,
    "epss_percentile": 0.0496,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:06.633Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99311",
    "references": [
      "https://git.kernel.org/stable/c/0d7f6c2b3c07fa239ebc169280eba9932cc56f46",
      "https://git.kernel.org/stable/c/0f242ca0878896df30292f4922700a32e8fdd039",
      "https://git.kernel.org/stable/c/df713b82b4b9671c16b52b60f3412c677719e2b8",
      "https://git.kernel.org/stable/c/f022984a4a1c18aa9c506790eb47da000dce95a7"
    ]
  },
  {
    "id": "CVE-2026-99310",
    "cve_id": "CVE-2026-99310",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nnfsd: hold cl_lock in client_has_openowners...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: nfsd: hold cl_lock in client_has_openowners() client_has_openowners() walks clp->cl_openowners and reads so_stateids without clp->cl_lock. nfs4_put_stateowner() unhashes that openowner under cl_lock and then frees it, so a concurrent EXCHANGE_ID with mismatched creds can use-after-free the nfs4_openowner. BUG: KASAN: slab-use-after-free in client_...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00349,
    "epss_percentile": 0.2927,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:06.377Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99310",
    "references": [
      "https://git.kernel.org/stable/c/202b7a6c462daa55a9f4b01f0a25eca2b8d5f2e3",
      "https://git.kernel.org/stable/c/5336899b5491eaa2ac22c2925d87daab2b140eb3",
      "https://git.kernel.org/stable/c/540649cb8543472f6edfe9ae8b42c04aa3bd67e9",
      "https://git.kernel.org/stable/c/a596d1979fcb4e5011d3d48ac4d927f81c9c9cab"
    ]
  },
  {
    "id": "CVE-2026-99309",
    "cve_id": "CVE-2026-99309",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nksmbd: fix overflow in dacloffset bounds ch...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: ksmbd: fix overflow in dacloffset bounds check in build_sec_desc() When the large dacl_offset is provided, dacl_offset + sizeof(struct smb_acl) overflows on 32-bit builds and the check is passed, Which makes le16_to_cpu(ppdacl_ptr->size) read out-of-bounds. This only happens for dacl_offset in range [0xFFFFFFF8, 0xFFFFFFFF]. So the oob read is max...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 8.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00325,
    "epss_percentile": 0.26267,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:06.110Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99309",
    "references": [
      "https://git.kernel.org/stable/c/4f238380ea3803afdc815c615521c6f6b13989a3",
      "https://git.kernel.org/stable/c/bd92e03122f33c159b552867a4abc098d405dfed",
      "https://git.kernel.org/stable/c/d1e92aa651caa352261fb3b78460b7722357835c",
      "https://git.kernel.org/stable/c/eb96e2a0e817807c48dc8387ca6a5249fdeae3a0"
    ]
  },
  {
    "id": "CVE-2026-99308",
    "cve_id": "CVE-2026-99308",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nusb: xhci: Fix bounce buffer overflow\n\nHigh...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: usb: xhci: Fix bounce buffer overflow High-speed devices with out of spec 1024 byte bulk endpoints exist and are allowed by USB core, but xhci-hcd always sets packet size to 512. The exact nature of these devices isn't documented, commit fb5ee84ea72c (\"USB: Accept bulk endpoints with 1024-byte maxpacket\") only states that they \"don't work with xHC...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "UNKNOWN",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00173,
    "epss_percentile": 0.06972,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:05.853Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99308",
    "references": [
      "https://git.kernel.org/stable/c/68c5cb7574c567e83ba95258cb146db95e069a87",
      "https://git.kernel.org/stable/c/d0d15d7a11f2a45e5d29ab4780a094992d7a26a2",
      "https://git.kernel.org/stable/c/dab2792e136385bd34b36d2b95db94862ed902cc",
      "https://git.kernel.org/stable/c/e95ace4abebd564b50b856513e24853d35be06cd"
    ]
  },
  {
    "id": "CVE-2026-99307",
    "cve_id": "CVE-2026-99307",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nceph: require the dentry lease record to co...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: ceph: require the dentry lease record to cover struct ceph_mds_reply_lease parse_reply_info_lease() reads a 32-bit struct_len off the wire and only checks that many bytes are present, without requiring struct_len to cover sizeof(struct ceph_mds_reply_lease) (10 bytes). A malicious MDS can declare a shorter record and still get the pointer publishe...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "UNKNOWN",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00157,
    "epss_percentile": 0.04936,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:05.567Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99307",
    "references": [
      "https://git.kernel.org/stable/c/058e1c38722a6d5b0181f38fdec03d5da95c3ad1",
      "https://git.kernel.org/stable/c/380bc69a0dbc50549cb196da40409aed69c84cfc",
      "https://git.kernel.org/stable/c/5ab17ed54e8b7ca64a8d167a09d6a2c865ed51cc",
      "https://git.kernel.org/stable/c/7286b2ffe04d4b39b4e9884f714792589d94f316"
    ]
  },
  {
    "id": "CVE-2026-99306",
    "cve_id": "CVE-2026-99306",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nceph: reject mdsmaps that claim more than C...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: ceph: reject mdsmaps that claim more than CEPH_MAX_MDS ranks check_new_map() sizes its export-target bitmap from CEPH_MAX_MDS but walks it with newmap->possible_max_rank, which comes straight off the wire: ceph_mdsmap_decode() sets it to max(m_num_active_mds, m_max_mds), then overwrites it with the size of the \"in\" set. Neither is bounded by CEPH_...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00359,
    "epss_percentile": 0.30423,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:05.293Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99306",
    "references": [
      "https://git.kernel.org/stable/c/0574e4aff8e4b28e0d5636204ed4ba2350b8701a",
      "https://git.kernel.org/stable/c/7931e6798f419bda9ac8cf0c095323eff90a7f52",
      "https://git.kernel.org/stable/c/c1742590d2b2fc5fb217e1a9b520108f1fe282e5",
      "https://git.kernel.org/stable/c/e9d72cf5d1bf5b4ddfe86707ada614973d75bf64"
    ]
  },
  {
    "id": "CVE-2026-99305",
    "cve_id": "CVE-2026-99305",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nfbdev: udlfb: don't rebuild the mode list w...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: fbdev: udlfb: don't rebuild the mode list while the framebuffer is in use dlfb_setup_modes() frees info->modelist with fb_destroy_modelist() and rebuilds it, but fbcon holds raw pointers into that list in fb_display[i].mode and nothing un-publishes them the way do_unregister_framebuffer() and store_modes() do with fbcon_delete_modelist(). The func...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "HIGH",
    "cvss_score": 7.8,
    "cvss_vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00117,
    "epss_percentile": 0.01699,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:05.030Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99305",
    "references": [
      "https://git.kernel.org/stable/c/1e13b8957510cfbc7367b3be1f08adc1757bb6d4",
      "https://git.kernel.org/stable/c/291010d5de1c9efc38e98c416b6230500bfae438",
      "https://git.kernel.org/stable/c/4bc608af98a3da0fa0b17af67a64d0d11d625a1d",
      "https://git.kernel.org/stable/c/ac9cfa552102b8e80e88c2872e80dc9cb5f07dda"
    ]
  },
  {
    "id": "CVE-2026-99304",
    "cve_id": "CVE-2026-99304",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nceph: fix integer overflow in the snap trac...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: ceph: fix integer overflow in the snap trace bounds check ceph_update_snap_trace() bounds the two encoded snapid arrays that follow a struct ceph_mds_snap_realm with sizeof(u64) * (num_snaps + num_prior_parent_snaps). Both counts come straight off the wire as __le32, so the addition is evaluated in unsigned int and wraps before sizeof(u64) promote...",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "CRITICAL",
    "cvss_score": 9.8,
    "cvss_vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    "epss_score": 0.00364,
    "epss_percentile": 0.30979,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:04.763Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99304",
    "references": [
      "https://git.kernel.org/stable/c/25ae51760b751d170e29425b7851ee577e2cd5ba",
      "https://git.kernel.org/stable/c/b3bf89767e3ca9506f1c7167cac97c41ec254d42",
      "https://git.kernel.org/stable/c/bf8f13872959af1d87e36b7d27096a09fdcf6e47",
      "https://git.kernel.org/stable/c/f0dbd6b9b05e919ebab668f3479aebbcd2431fce"
    ]
  },
  {
    "id": "CVE-2026-99303",
    "cve_id": "CVE-2026-99303",
    "ghsa_id": null,
    "title": "In the Linux kernel, the following vulnerability has been resolved:\n\nspeakup: Fix NULL pointer dereference on VT...",
    "description": "In the Linux kernel, the following vulnerability has been resolved: speakup: Fix NULL pointer dereference on VT switch + selection When selecting/pasting very quickly after VT switch, the tty is not set yet, leading to a NULL dereference. We can just abort the operation.",
    "source": "NIST NVD",
    "sources": [
      "NIST NVD"
    ],
    "severity": "UNKNOWN",
    "cvss_score": null,
    "cvss_vector": null,
    "epss_score": 0.00157,
    "epss_percentile": 0.04957,
    "is_kev": false,
    "ransomware_use": false,
    "kev_due_date": null,
    "ecosystem": null,
    "vendor_product": null,
    "affected_versions": null,
    "patched_versions": null,
    "cwes": [],
    "published_at": "2026-11-16T10:17:04.520Z",
    "relative_time": "4d ago",
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-99303",
    "references": [
      "https://git.kernel.org/stable/c/0400bff986064836dd9e7adb4e1c19b0bf639af0",
      "https://git.kernel.org/stable/c/1a40cbb9d83ad8c669125554fcd73e626a00dc65",
      "https://git.kernel.org/stable/c/cb1b95b98b63f10f38fb96a2ba17a9919017f916",
      "https://git.kernel.org/stable/c/e1301ab8a8411fccc7effe0711fc09939a94953c"
    ]
  }
];
