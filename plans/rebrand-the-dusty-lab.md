# Rebrand: dustymccord.com → The Dusty Lab

## Context
Site is currently a resume site with a small blog tacked on. Pivoting to make the blog ("The Dusty Lab") the primary identity. Resume becomes the about page. Brand name lives as the site title on top of the existing `dustymccord.com` domain — name stays, brand sits on top.

Positioning: AI tricks, tips, and tools that actually work, written by someone using them all day to ship real software. Same brand on the matching Substack publication "The Dusty Lab."

## Scope: full restructure
- Blog is the home page (`/`)
- Resume content moves to `/about`
- New short "what is this" intro block on the home page above the post list
- Rename site title / meta / headers to "The Dusty Lab"
- Domain stays `dustymccord.com`

## Changes

### 1. Site identity
- `src/layouts/Layout.astro` — default `<title>` and meta description: "The Dusty Lab — AI tricks, tips, and tools that actually work"
- `src/components/GlassHeader.tsx` and `src/components/BlogHeader.astro` — brand text "The Dusty Lab" (or logo/wordmark if we add one later). Nav: `Home`, `About`, maybe `RSS`.
- Footer: small line "by Dusty McCord" linking to `/about` so the personal name doesn't disappear entirely.
- `astro.config.mjs` — update `site` if needed (already `https://dustymccord.com`, leave as-is).

### 2. Page restructure
- **Move:** current `src/pages/index.astro` (Hero/Experience/Skills/Community/Education) → new `src/pages/about.astro`. No content changes; just relocate.
- **New `src/pages/index.astro`:** blog index. Layout:
  1. Small hero/intro block — "The Dusty Lab" + one-line tagline + 2-sentence "what is this" pulled from the Substack bio
  2. Post list (reuse the existing card markup from `src/pages/blog/index.astro`)
  3. Optional: subscribe-to-Substack CTA at the bottom (only if/when Substack goes live)
- **`src/pages/blog/index.astro`:** redirect to `/` (Astro: `Astro.redirect('/')`) so old links don't break.
- **`src/pages/blog/[...slug].astro`:** keep as-is. Post URLs remain `/blog/<slug>`.

### 3. Hero rewrite
Current `HeroSection.tsx` is generic resume hero. New copy should match the brand:
- Headline: "The Dusty Lab"
- Sub: "AI tricks, tips, and tools that actually work."
- Body: short version of the Substack bio (~2 sentences)
- CTAs: "Read the latest" (anchor to post list) + "About me" (→ `/about`)
- Decision: keep `HeroSection` as-is for `/about` and create a new lighter `LabIntro` component for `/`, OR refactor `HeroSection` to take props. Recommend new component — cleaner, no risk of breaking the resume hero.

### 4. New components
- `src/components/LabIntro.astro` (or `.tsx`) — the home-page intro block. Simple, no resume-style flourish.
- Optional: `src/components/SubscribeCTA.astro` — Substack signup form embed, deferred until Substack publication exists.

### 5. RSS
While we're touching the site, add an RSS feed — useful for the brand and for any future syndication:
- `pnpm add @astrojs/rss`
- New `src/pages/rss.xml.js` per Astro docs, pulling from the `blog` collection
- Link `<link rel="alternate" type="application/rss+xml">` in `Layout.astro` head

### 6. Drafts / housekeeping
- `hello-world.mdx` — keep, it's a real post that fits the new brand
- Add a `.github/pull_request_template.md` reminding to set `pubDate`, `description`, check `draft`
- Update `README.md` to describe the site as "The Dusty Lab" not a resume template

## Critical files
- `src/pages/index.astro` — replace with blog home
- `src/pages/about.astro` — new; receives current index content
- `src/pages/blog/index.astro` — redirect to `/`
- `src/pages/rss.xml.js` — new
- `src/layouts/Layout.astro` — title, meta, RSS link
- `src/components/GlassHeader.tsx` — brand + nav
- `src/components/BlogHeader.astro` — brand + nav (or merge with GlassHeader)
- `src/components/HeroSection.tsx` — leave alone (used by /about)
- `src/components/LabIntro.astro` — new
- `src/content.config.ts` — no change needed (existing schema works)
- `.github/pull_request_template.md` — new (optional)
- `README.md` — update copy

## Verification
1. `pnpm dev` → `/` shows Lab intro + post list, `/about` shows full resume, `/blog` redirects to `/`, `/blog/hello-world` still renders
2. `pnpm build` → no errors, RSS feed at `/rss.xml`
3. View source on `/` → title says "The Dusty Lab"
4. Mobile nav still works on both pages
5. Push branch → PR → merge → confirm GH Pages deploy and live site looks right

## Open questions
- Header: keep two (`GlassHeader` for /about, `BlogHeader` for everything else) or unify into one used everywhere?
- LabIntro tagline: "AI tricks, tips, and tools that actually work" — final, or workshop?
- Subscribe CTA: include now (empty link) or wait until Substack publication is real?
- Logo/wordmark for "The Dusty Lab" — text-only for v1, or do we want a small mark?
- `/blog` redirect: 301 permanent, or keep as a duplicate listing for now?
- Post URLs: stay at `/blog/<slug>` or move to `/<slug>` (root)? Latter is cleaner if blog is the whole site, but breaks `hello-world` permalink.
