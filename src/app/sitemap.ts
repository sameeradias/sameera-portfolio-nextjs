import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio-data";

const baseUrl = "https://sameeradias.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.7 as const,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...projectPages,
  ];
}
