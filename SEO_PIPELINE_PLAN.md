# SEO Pipeline Implementation Plan

## Overview

Transform `sameeradias.site` from a portfolio site into a niche authority site that ranks for both personal brand keywords and technical expertise terms. This plan implements the site architecture, content infrastructure, structured data, and programmatic SEO from the provided strategy.

---

## Current State

**What exists:**
- Homepage with sections (hero, projects, experience, skills, contact)
- `/projects` listing + `/projects/[slug]` case study pages (7 projects)
- `/resume` page
- Basic SEO: sitemap.xml, robots.txt, canonical tags, Person + WebSite JSON-LD, OG image
- Dark mode, animations, responsive design

**What's missing:**
- `/about` page
- `/skills/[slug]` pillar pages
- `/blog` infrastructure + MDX content system
- `/case-studies` (separate from projects)
- `/contact` standalone page
- `/uses` page
- `/stack/[technology]` programmatic pages
- Blog RSS feed
- Breadcrumb schema
- FAQPage schema on skills pages
- BlogPosting schema
- Enhanced Person schema with `knowsAbout`
- Internal linking strategy

---

## Implementation Phases

### Phase 1: Content Infrastructure & Data Layer

Set up the content system that powers blog posts, skills pages, and programmatic routes.

**1.1 Install MDX support**
- Add `@next/mdx` and `gray-matter` for blog post parsing
- Configure `next.config` for MDX

**1.2 Create content data structures**
- Define `SkillPage` type (slug, title, description, keywords, experience, patterns, projects, faq)
- Define `BlogPost` type (slug, title, description, date, category, tags, content)
- Define `StackPage` type (slug, technology, relatedProjects, relatedPosts, relatedSkills)

**1.3 Create skills page content**
- `/skills/dotnet-developer-sri-lanka` — .NET expertise page
- `/skills/nextjs-engineer-sri-lanka` — Next.js expertise page
- `/skills/postgresql-optimization` — PostgreSQL expertise page
- `/skills/aws-docker-devops` — AWS/Docker/DevOps expertise page

**1.4 Create initial blog post content (3-4 seed articles)**
- `dotnet-clean-architecture` — Building Scalable APIs with ASP.NET Core
- `nextjs-performance-optimization` — Next.js SEO Beyond Metadata
- `postgresql-query-optimization` — PostgreSQL Indexing Strategies
- `dockerizing-dotnet-api` — Dockerizing Enterprise .NET APIs

---

### Phase 2: New Pages & Routes

Build the new pages from the site architecture plan.

**2.1 Create `/about` page**
- Extended bio, professional philosophy, tech journey
- Photo, location, availability
- Links to skills pages and projects
- Person schema enhanced

**2.2 Create `/skills` listing page**
- Overview of all skill areas with links to pillar pages
- Visual skill grid with proficiency indicators

**2.3 Create `/skills/[slug]` dynamic route**
- Pillar page template: experience, architecture patterns, projects, FAQ
- FAQPage + TechArticle schema
- Internal links to related blog posts and projects

**2.4 Create `/blog` listing page**
- Blog index with category filtering
- Sorted by date, paginated if needed

**2.5 Create `/blog/[slug]` dynamic route**
- MDX rendering with code highlighting
- BlogPosting schema
- Related posts sidebar
- Internal links to skills pages and projects

**2.6 Create `/contact` standalone page**
- Contact form or mailto CTA
- Availability info, preferred engagement types
- Social links

**2.7 Create `/uses` page**
- Hardware, software, dev tools, services
- Good for long-tail "what tools does X use" queries

**2.8 Create `/stack/[technology]` programmatic route**
- Aggregates: related projects, blog posts, skills page link
- Auto-generated from project stack data
- One page per unique technology across all projects

---

### Phase 3: Structured Data & Technical SEO

**3.1 Enhance Person schema**
- Add `knowsAbout` array with all technologies
- Add `alumniOf` for education
- Add `worksFor` for current employer

**3.2 Add Breadcrumb schema**
- Create breadcrumb component
- Add BreadcrumbList JSON-LD to all pages

**3.3 Add BlogPosting schema**
- Auto-generated from blog post frontmatter
- Includes author, datePublished, dateModified, image

**3.4 Add FAQPage schema to skills pages**
- Structured FAQ data in skills content
- JSON-LD output on each skills page

**3.5 Add RSS feed**
- `/feed.xml` route for blog posts
- Helps with content discovery and syndication

**3.6 Update sitemap**
- Include all new routes: /about, /skills/*, /blog/*, /stack/*, /contact, /uses
- Set appropriate priorities and change frequencies

---

### Phase 4: Homepage SEO Optimization

**4.1 Update homepage metadata**
- Title: `Sameera Roshan Dias | Software Engineer | .NET • Next.js • AWS`
- Description: keyword-rich, targeting "Software Engineer Sri Lanka", ".NET Developer Sri Lanka"

**4.2 Improve heading hierarchy**
- H1: Name
- H2: Role + specialization
- Semantic section headings

**4.3 Add "Latest Articles" section to homepage**
- Shows 3 most recent blog posts
- Internal links to blog

**4.4 Strengthen internal linking**
- Hero → projects, skills pages
- Projects → related skills pages
- Skills → related blog posts
- Blog → skills, projects

---

### Phase 5: Navigation & UX Updates

**5.1 Update header navigation**
- Add: About, Skills, Blog, Contact
- Dropdown or grouped nav for mobile

**5.2 Add breadcrumbs to all sub-pages**
- Visual breadcrumb trail
- Matches BreadcrumbList schema

**5.3 Add "Related" sections**
- Related projects on blog posts
- Related posts on project pages
- Related skills on stack pages

---

### Phase 6: Content Workflow (Ongoing)

**6.1 Blog content calendar**
- 2 posts/month minimum
- Categories: backend, frontend, database, devops, architecture
- 1500-2500 words, search-driven topics

**6.2 Cross-posting strategy**
- Publish on site first (canonical)
- Syndicate to DEV.to, Hashnode, Medium with canonical back to site
- LinkedIn article summaries linking to full post

**6.3 Profile backlinks**
- GitHub profile README → site link
- LinkedIn → site link
- DEV.to profile → site link
- Stack Overflow profile → site link

---

## Priority Order

| Priority | Phase | Impact | Effort |
|----------|-------|--------|--------|
| 1 | Phase 1 (Content infra) | Foundation for everything | Medium |
| 2 | Phase 3 (Structured data) | Quick wins, immediate indexing benefit | Low |
| 3 | Phase 4 (Homepage SEO) | Ranks for brand keywords faster | Low |
| 4 | Phase 2.3 (Skills pages) | Pillar content, high search value | Medium |
| 5 | Phase 2.5 (Blog) | Long-term authority building | High |
| 6 | Phase 2.8 (Stack pages) | Programmatic SEO, many pages | Medium |
| 7 | Phase 5 (Nav + UX) | Supports all other pages | Low |
| 8 | Phase 6 (Content workflow) | Ongoing, compounds over time | Ongoing |

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Blog format | MDX files in `/src/content/blog/` | No external CMS needed, version controlled, supports code blocks |
| Skills data | TypeScript data file | Same pattern as existing portfolio-data.ts |
| Stack pages | Generated from project stack arrays | Zero manual maintenance, auto-updates |
| RSS | Next.js route handler | No extra dependencies |
| Breadcrumbs | Server component + JSON-LD | SEO + UX benefit |

---

## Expected Outcomes

- **Month 1-2:** Brand keywords ranking (name, "Sameera Dias Software Engineer")
- **Month 3-4:** Skills pages ranking for geo-targeted terms (".NET developer Sri Lanka")
- **Month 6+:** Blog posts ranking for technical long-tail queries
- **Month 9+:** Stack pages creating topical authority signals

---

## Files to Create/Modify

### New files:
```
src/content/blog/                     (blog MDX posts directory)
src/content/skills-data.ts            (skills page content)
src/content/stack-data.ts             (auto-generated stack aggregation)
src/app/about/page.tsx
src/app/contact/page.tsx
src/app/uses/page.tsx
src/app/skills/page.tsx
src/app/skills/[slug]/page.tsx
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
src/app/stack/page.tsx
src/app/stack/[technology]/page.tsx
src/app/feed.xml/route.ts
src/components/ui/breadcrumb.tsx
src/components/sections/latest-posts.tsx
src/lib/blog.ts                       (MDX parsing utilities)
```

### Modified files:
```
src/app/layout.tsx                    (updated metadata)
src/app/page.tsx                      (homepage SEO + latest posts section)
src/app/sitemap.ts                    (all new routes)
src/components/layout/header.tsx      (updated nav links)
package.json                          (MDX dependencies)
next.config.ts                        (MDX config)
```
