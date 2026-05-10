import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio-data";
import { skillPages } from "@/content/skills-data";
import { getAllPosts } from "@/lib/blog";
import { getAllStacks } from "@/lib/stack";

const baseUrl = "https://sameeradias.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7 as const,
  }));

  const skillPageEntries = skillPages.map((s) => ({
    url: `${baseUrl}/skills/${s.slug}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  const blogPages = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.7 as const,
  }));

  const stackPages = getAllStacks().map((s) => ({
    url: `${baseUrl}/stack/${s.slug}`,
    lastModified: new Date(),
    priority: 0.5 as const,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/skills`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/stack`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/uses`, lastModified: new Date(), priority: 0.5 },
    ...projectPages,
    ...skillPageEntries,
    ...blogPages,
    ...stackPages,
  ];
}
