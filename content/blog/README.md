# Muninn Blog Authoring Guide

This directory stores Markdown articles for the **Muninn Blog** (`Coffee, Tea & APTs`). All `.md` posts are compiled statically at build/dev startup via `scripts/compile-blog.mjs` into `src/data/compiledBlog.json` and rendered using the 7-theme tactical layout at `/blog` and `/blog/<slug>/`.

## Creating a New Blog Post

1. Copy `_template.md` to a new file named after your URL slug:
   ```bash
   cp content/blog/_template.md content/blog/your-article-slug.md
   ```
2. Update the YAML frontmatter at the top of the file:
   - `id`: Unique identifier (e.g., `post-001`)
   - `slug`: URL slug matching the filename (e.g., `your-article-slug` -> `/blog/your-article-slug/`)
   - `title`: Publication headline
   - `summary`: 2–3 sentence briefing (automatically highlighted in the **Executive Summary** callout)
   - `author`: `{ name, role, handle }`
   - `published_at`: `YYYY-MM-DD`
   - `category`: One of `Adversary Tradecraft`, `Detection Engineering`, `Threat Hunting`, or `Architecture`
   - `tlp`: Optional TLP marking (`TLP:CLEAR`, `TLP:GREEN`, `TLP:AMBER`)
   - `platforms`: Optional list of target platforms (`Windows`, `Linux`, `Cloud`, `Identity`, `Network`, `Kubernetes`)
   - `mitre_techniques`: MITRE ATT&CK technique IDs (e.g., `T1059.001`, `T1558.003`)
   - `tags`: Topic tags rendered as `#tag` badges
   - `is_featured`: `true` to spotlight the article at the top of `/` and `/blog`
   - `status`:
     - `published` — Visible on `/`, `/blog`, and `/blog/<slug>/`
     - `draft` — Hidden from public listings while still compiled for local review
     - `template` — Reserved for `_template.md` (unlisted styleguide preview at `/blog/template/`)
3. Run `npm run dev` or `npm run build` in `muninn/` to compile and preview your post.

## Supported Code & Detection Query Badges

Tag fenced code blocks with the corresponding language identifier to automatically render themed engine badges and a **COPY LOGIC** / **COPY CODE** button:

| Fence Tag | Rendered Badge |
| :--- | :--- |
| ```` ```sigma ```` | `SIGMA YAML` (Sigma library theme badge) |
| ```` ```spl ```` or ```` ```splunk ```` | `SPLUNK SPL` (Splunk library theme badge) |
| ```` ```eql ```` or ```` ```esql ```` | `ELASTIC EQL` / `ELASTIC ES|QL` (Elastic library theme badge) |
| ```` ```yaral ```` or ```` ```yara-l ```` | `YARA-L 2.0` (Chronicle library theme badge) |
| ```` ```fql ```` or ```` ```crowdstrike ```` | `CROWDSTRIKE FQL` (CrowdStrike library theme badge) |
| ```` ```powershell ````, ```` ```bash ````, ```` ```python ````, ```` ```yaml ````, ```` ```json ```` | Uppercase language badge + `COPY CODE` button |

## Live Template Styleguide

Start the dev server (`npm run dev`) and visit `http://localhost:3000/blog/template/` to preview `_template.md` across all 7 selectable tactical themes (`Colorblind Accessible`, `Midnight Stealth`, `Old School Neon Green`, `Black & White`, `80s Synthwave`, `Cyberpunk 2077`, and `Dracula Dark`).
