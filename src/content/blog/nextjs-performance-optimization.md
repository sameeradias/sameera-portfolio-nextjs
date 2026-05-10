---
title: "Next.js SEO Beyond Metadata: Structured Data, Sitemaps, and Performance"
description: "A practical guide to Next.js SEO that goes beyond meta tags — implementing JSON-LD structured data, dynamic sitemaps, OG images, and Core Web Vitals optimization."
date: "2026-04-20"
category: "frontend"
tags: ["Next.js", "SEO", "Structured Data", "Performance"]
---

## Meta Tags Are Just the Beginning

Every Next.js SEO guide starts with the Metadata API. That's table stakes. To actually rank, you need structured data that helps Google understand your content, sitemaps that ensure discovery, and performance that passes Core Web Vitals.

Here's what I implement on every production Next.js site.

## Structured Data with JSON-LD

Google uses structured data to generate rich results — knowledge panels, FAQ dropdowns, breadcrumb trails, and article cards. In Next.js App Router, I add JSON-LD directly in page components:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sameera Roshan Dias",
  jobTitle: "Software Engineer",
  knowsAbout: [".NET", "Next.js", "PostgreSQL", "AWS"],
  url: "https://sameeradias.site",
};

// In the component return:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

For blog posts, I use `BlogPosting` schema. For FAQ sections, `FAQPage`. For navigation, `BreadcrumbList`. Each schema type unlocks different rich result formats in search.

## Dynamic Sitemaps

Static sitemaps go stale. I generate sitemaps from actual content:

```tsx
// src/app/sitemap.ts
import { projects } from "@/content/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((p) => ({
    url: `https://sameeradias.site/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [
    { url: "https://sameeradias.site", priority: 1 },
    ...projectPages,
  ];
}
```

This ensures every new page is automatically discoverable without manual sitemap updates.

## Dynamic OG Images

Social sharing drives traffic. Next.js supports generating OG images at build time using `opengraph-image.tsx`:

```tsx
import { ImageResponse } from "next/og";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#0a0a0f", color: "#f0f0f3" }}>
      <h1>Your Title Here</h1>
    </div>,
    { width: 1200, height: 630 }
  );
}
```

Every page gets a unique, branded preview image when shared on LinkedIn, Twitter, or Slack.

## Performance That Ranks

Google uses Core Web Vitals as a ranking signal. Key optimizations:

- **`next/font`** with `display: swap` — eliminates layout shift from font loading
- **`next/image`** with proper `width`/`height` — prevents CLS, serves WebP automatically
- **Server Components** — reduce client-side JavaScript bundle
- **Static generation** — pre-rendered HTML loads instantly

## RSS Feeds for Discovery

An RSS feed helps content aggregators and readers find your posts:

```tsx
// src/app/feed.xml/route.ts
export async function GET() {
  const posts = getAllPosts();
  const xml = generateRssFeed(posts);
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
```

## Takeaway

SEO in Next.js is a system, not a checklist. Metadata gets you indexed. Structured data gets you rich results. Performance gets you ranked. Internal linking keeps users (and crawlers) moving through your content. Build all four layers and compound the results over time.
