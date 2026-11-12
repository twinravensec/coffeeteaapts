# Coffee, Tea & APTs

> **Brewing detections, spilling threat intel tea, and tracking APTs.**

Coffee, Tea & APTs is a community-driven threat intelligence dashboard and multi-platform Detection-as-Code (DaC) repository built for security analysts, defenders, and detection engineers.

**Live Portal:** [https://twinravensec.github.io/coffeeteaapts/](https://twinravensec.github.io/coffeeteaapts/)

---

## Overview

* **Curated Threat Stream:** Real-time aggregation from authoritative OSINT feeds (CISA KEV, The Hacker News, BleepingComputer, SANS Internet Storm Center) correlated with CVE and MITRE ATT&CK indicators, with persistent read-state tracking.
* **1,500+ Multi-Platform Detections:** Production-grade detection rules categorized across the 14 MITRE ATT&CK Enterprise tactics and core platforms (Cloud, Identity, Windows, Linux, Network) spanning five standard query languages:
  * Splunk (SPL)
  * Elastic (EQL & ES|QL)
  * Sigma (YAML)
  * Google Chronicle (YARA-L 2.0)
  * CrowdStrike Falcon (FQL)
* **Muninn Blog:** Technical adversary tradecraft teardowns, telemetry gap analyses, and defensive engineering research papers.
* **Colorblind-First Interface:** Default Okabe-Ito high-contrast colorblind-safe palette, plus 6 selectable tactical dark themes.
* **Offline-First & Serverless:** 100% pre-compiled static export (`output: "export"`) with zero runtime servers, zero third-party tracking, and full client-side search and filtering.

---

## Quickstart

Run the portal locally:

```bash
git clone git@github.com:twinravensec/coffeeteaapts.git
cd coffeeteaapts
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify TypeScript and compile the static production export:

```bash
npm run typecheck
npm run build
```

---

## Contributing

Community contributions of detection rules, threat intelligence parsers, and technical writeups are welcome.

* **Add a Detection Rule:** Add rules to `src/data/detectors.json` matching the `DetectorRule` schema.
* **Publish a Research Post:** Add a Markdown article with YAML frontmatter into `content/blog/` and compile with `npm run compile:blog`.
* **Submit:** Open a pull request against `main`. All pull requests run automated static export and lint checks via GitHub Actions.

---

## Architecture & Deployment

The portal is built with Next.js 16 (React 19) and automatically built and deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to `main` trigger automated builds and zero-downtime CDN distribution.

---

## License

MIT License. MITRE ATT&CK is a registered trademark of The MITRE Corporation.
