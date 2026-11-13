# Muninn Blog Authoring Guide

Markdown posts in this directory are compiled by `scripts/compile-blog.mjs` into `src/data/compiledBlog.json` and rendered at `/blog` and `/blog/<slug>/`.

## Creating a New Post

1. Copy `_template.md` to a new `.md` file named after your slug:
   ```bash
   cp content/blog/_template.md content/blog/my-post-slug.md
   ```
2. Fill in the frontmatter fields:
   - `id`: Post identifier (e.g., `"blog-001"`)
   - `slug`: URL slug (e.g., `"my-post-slug"` -> `/blog/my-post-slug/`)
   - `title`: Post title
   - `author`: Author name
   - `date`: Publication date (`YYYY-MM-DD`)
   - `summary`: Short overview shown under the title and on blog cards
   - `_link_to_sources`: List of source URLs or `{ title, url }` entries shown in the header `SOURCES` bar
   - `status`: Set to `published` to list on `/` and `/blog` (`draft` or `template` stays unlisted)
3. Write the **main write-up** directly below the `---` frontmatter block, and use `## Section Title` (Markdown Header 2) for any dynamic divided sections below it.

## Previewing the Template Locally

With the local dev server running (`npm run dev`), open `http://localhost:3000/blog/template/` to preview `_template.md` across all 7 themes.
