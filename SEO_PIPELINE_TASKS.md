# SEO Pipeline — Task Breakdown

**Status: ✅ Implementation Complete** — 59 pages generated, lint clean, build passing.

## Phase 1: Content Infrastructure & Data Layer

- [x] 1.1 Install dependencies (`gray-matter`, `remark`, `remark-html`)
- [x] 1.2 Create `src/lib/blog.ts` — markdown file reader, frontmatter parser, post listing
- [x] 1.3 Create `src/content/skills-data.ts` — SkillPage type + content for 4 pillar pages
  - [x] 1.4a `.NET Developer Sri Lanka` content (experience, patterns, FAQ)
  - [x] 1.4b `Next.js Engineer Sri Lanka` content
  - [x] 1.4c `PostgreSQL Optimization` content
  - [x] 1.4d `AWS Docker DevOps` content
- [x] 1.5 Create `src/content/blog/` directory with 4 seed posts
  - [x] 1.5a `dotnet-clean-architecture.md`
  - [x] 1.5b `nextjs-performance-optimization.md`
  - [x] 1.5c `postgresql-query-optimization.md`
  - [x] 1.5d `dockerizing-dotnet-api.md`
- [x] 1.6 Create `src/lib/stack.ts` — utility to aggregate technologies from projects/posts

## Phase 2: New Pages & Routes

- [x] 2.1 Create `/about/page.tsx` — extended bio, photo, expertise links
- [x] 2.2 Create `/contact/page.tsx` — standalone contact page with CTA + social links
- [x] 2.3 Create `/uses/page.tsx` — tools, hardware, software list
- [x] 2.4 Create `/skills/page.tsx` — skills listing/index page
- [x] 2.5 Create `/skills/[slug]/page.tsx` — dynamic pillar page with FAQ, projects, schema
- [x] 2.6 Create `/blog/page.tsx` — blog listing
- [x] 2.7 Create `/blog/[slug]/page.tsx` — individual post page with HTML rendering
- [x] 2.8 Create `/stack/page.tsx` — technology index page
- [x] 2.9 Create `/stack/[technology]/page.tsx` — programmatic aggregation page (29 pages)

## Phase 3: Structured Data & Technical SEO

- [x] 3.1 Enhance Person JSON-LD — added `knowsAbout`, `alumniOf`, `worksFor`
- [x] 3.2 Add FAQPage JSON-LD to skills pillar pages
- [x] 3.3 Add BlogPosting JSON-LD to blog post template
- [x] 3.4 Create `/feed.xml/route.ts` — RSS feed for blog posts
- [x] 3.5 Update `sitemap.ts` — includes /about, /contact, /uses, /skills/*, /blog/*, /stack/*

## Phase 4: Homepage SEO Optimization

- [x] 4.1 Update `<title>` to `Sameera Roshan Dias | Software Engineer | .NET • Next.js • AWS`
- [x] 4.2 Update meta description with geo-targeted keywords
- [x] 4.3 Add "Latest Articles" section to homepage (3 most recent posts)
- [x] 4.4 Internal links from homepage to blog

## Phase 5: Navigation & UX Updates

- [x] 5.1 Update header nav — About, Projects, Skills, Blog, Contact
- [x] 5.2 Add breadcrumb navigation to skills pages
- [x] 5.3 Add breadcrumb navigation to blog pages
- [x] 5.4 Add breadcrumb navigation to stack pages

## Phase 6: Content Workflow Setup (Manual / Ongoing)

- [ ] 6.1 Create blog post template/scaffold script
- [ ] 6.2 Document content calendar (categories, frequency, word count targets)
- [ ] 6.3 Document cross-posting workflow (DEV.to, Hashnode, LinkedIn)
- [ ] 6.4 Set up profile backlinks (GitHub README, LinkedIn, DEV.to, Stack Overflow)

## Phase 7: Verification

- [x] 7.1 Build passes — 59 pages generated successfully
- [x] 7.2 Lint passes — 0 errors, 0 warnings
- [ ] 7.3 Submit updated sitemap to Google Search Console
- [ ] 7.4 Request indexing for new high-priority pages

---

## Pages Generated

| Route | Type | Count |
|-------|------|-------|
| `/` | Static | 1 |
| `/about` | Static | 1 |
| `/blog` | Static | 1 |
| `/blog/[slug]` | SSG | 4 |
| `/contact` | Static | 1 |
| `/feed.xml` | Dynamic | 1 |
| `/projects` | Static | 1 |
| `/projects/[slug]` | SSG | 7 |
| `/resume` | Static | 1 |
| `/skills` | Static | 1 |
| `/skills/[slug]` | SSG | 4 |
| `/stack` | Static | 1 |
| `/stack/[technology]` | SSG | 29 |
| `/uses` | Static | 1 |
| **Total** | | **59** |
