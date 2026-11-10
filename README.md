# Coffee, Tea & APTs

> **Brewing detections, spilling threat intel tea, and tracking APTs.**

A public, community-driven threat intelligence briefing, Detection-as-Code (DaC) registry, and adversary research portal built with Next.js 16 and React 19.

---

## Features

* **Real-Time OSINT Threat Feed:** Aggregated threat intelligence updates from authoritative feeds (CISA KEV, The Hacker News, BleepingComputer, Palo Alto Unit 42) with CVE & MITRE ATT&CK correlation.
* **Open Detection-as-Code Library:** Multi-cloud, production-grade detection rules categorized across the 14 MITRE ATT&CK Enterprise tactics.
* **Tradecraft Research Journal:** In-depth technical articles on evasion tactics, telemetry gaps, and detection engineering mechanics.
* **7-Theme Tactical UI System:** Built-in dark UI themes (Midnight Stealth, Synthwave, Cyberpunk 2077, Dracula Dark, etc.) with zero-flash persistence.
* **100% Serverless & Zero-Cost:** Pre-compiled static export (`output: "export"`) hosted completely free on **GitHub Pages** with global CDN caching and automated SSL.

---

## Quickstart (Local Development)

### Prerequisites
* Node.js 18+ or 20+
* npm 9+

### Commands
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Compile Markdown research articles into JSON
npm run compile:blog

# 3. Start local development server (port 3000)
npm run dev

# 4. Typecheck TypeScript code
npm run typecheck

# 5. Build static export bundle for production
npm run build
```

---

## Deploying to GitHub Pages

This project includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site on push to the `main` branch.

### Step 1: Create a New GitHub Repository
1. Go to [GitHub.com](https://github.com/new) and create a new repository (e.g., `coffeeteaapts`).
2. Make it **Public** (or Private — both are supported with free GitHub Pages).

### Step 2: Push This Standalone Repository
```bash
cd muninn

# Initialize git (if not already initialized)
git init
git add .
git commit -m "Initial commit: Coffee, Tea & APTs platform"

# Link to your new repository and push
git branch -M main
git remote add origin git@github.com:twinravensec/coffeeteaapts.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. On GitHub, navigate to **Settings -> Pages**.
2. Under **Build and deployment -> Source**, select **GitHub Actions**.
3. Push any commit to `main` (or trigger the workflow manually under **Actions -> Run workflow**).
4. Your site will be live at `https://twinravensec.github.io/coffeeteaapts/`!

---

## Connecting a Custom Domain (Squarespace)

When you are ready to connect a custom domain acquired through Squarespace:

### Option A: Subdomain (e.g. `apts.yourdomain.com` or `blog.yourdomain.com`)
1. In Squarespace DNS Manager:
   * **Record Type**: `CNAME`
   * **Host**: `apts` (or your chosen subdomain prefix)
   * **Points to / Data**: `twinravensec.github.io`
2. In GitHub repository:
   * Go to **Settings -> Pages -> Custom domain**.
   * Enter your subdomain: `apts.yourdomain.com`.
   * Click **Save**.
   * Check **Enforce HTTPS** (GitHub will automatically issue and renew a free Let's Encrypt certificate).

### Option B: Apex / Root Domain (e.g. `yourdomain.com`)
1. In Squarespace DNS Manager:
   * Add 4 **`A` records** pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   * Add 1 **`CNAME` record** for `www`:
     - **Host**: `www`
     - **Points to / Data**: `twinravensec.github.io`
2. In GitHub repository:
   * Go to **Settings -> Pages -> Custom domain**.
   * Enter: `yourdomain.com`.
   * Click **Save** and check **Enforce HTTPS**.

---

## Project Architecture

```
muninn/
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD workflow
├── content/blog/                 # Markdown research papers and articles
├── public/                       # Static public assets (logos, .nojekyll, icons)
├── scripts/compile-blog.mjs      # Compiles Markdown frontmatter + body into JSON
├── src/
│   ├── app/                      # Next.js App Router (layout.tsx, page.tsx, globals.css)
│   ├── components/               # Modular UI components (News, Detections, Blog, Shell)
│   ├── data/                     # Mock feeds, detections, compiled blog JSON
│   ├── services/                 # Data querying & future API integration hooks
│   ├── theme.ts                  # 7 Dark UI theme definitions & hydration logic
│   └── types/                    # TypeScript interfaces for rules, news, and stats
├── next.config.ts                # Static export (`output: "export"`) with dynamic basePath
├── package.json                  # Standalone dependencies and scripts
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## License
MIT License.
