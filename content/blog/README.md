# Muninn Blog Content Directory

This directory contains the Markdown files for articles published on the Muninn public portal.

## How to Publish a New Article

1. Create a new `.md` file in this directory (e.g. `analyzing-byovd-rootkits.md`).
2. Include the required YAML frontmatter at the top:

```markdown
---
id: post-004
slug: analyzing-byovd-rootkits
title: "Analyzing Bring Your Own Vulnerable Driver (BYOVD) Rootkits"
summary: "Technical teardown of adversary kernel driver abuse and detection strategies."
author:
  name: "Your Name"
  role: "Detection Engineer"
  handle: "@yourhandle"
published_at: "2026-10-04"
reading_time: "5 min read" # Optional: auto-calculated if omitted
category: "Adversary Tradecraft" # Options: Adversary Tradecraft, Detection Engineering, Threat Hunting, Architecture
tags:
  - Rootkit
  - Kernel Security
  - Windows
mitre_techniques:
  - T1068
  - T1562.001
is_featured: false # Set to true to highlight as the hero article
status: published # Options: published, draft
---

## Introduction

Your markdown content here...
```

3. Run the blog compiler (or `npm run build` / `npm run dev`), and your article will immediately appear in the portal!
