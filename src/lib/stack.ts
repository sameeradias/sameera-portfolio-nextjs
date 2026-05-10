import { projects } from "@/content/portfolio-data";
import { getAllPosts } from "@/lib/blog";

export type StackEntry = {
  technology: string;
  slug: string;
  projectSlugs: string[];
  postSlugs: string[];
  skillPageSlug: string | null;
};

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getAllStacks(): StackEntry[] {
  const map = new Map<string, StackEntry>();

  // Collect from projects
  for (const project of projects) {
    for (const tech of project.stack) {
      const slug = toSlug(tech);
      if (!map.has(slug)) {
        map.set(slug, { technology: tech, slug, projectSlugs: [], postSlugs: [], skillPageSlug: null });
      }
      map.get(slug)!.projectSlugs.push(project.slug);
    }
  }

  // Collect from blog posts
  const posts = getAllPosts();
  for (const post of posts) {
    for (const tag of post.tags) {
      const slug = toSlug(tag);
      if (map.has(slug)) {
        map.get(slug)!.postSlugs.push(post.slug);
      }
    }
  }

  // Link to skill pages
  const skillKeywords: Record<string, string[]> = {
    "dotnet-developer-sri-lanka": ["asp-net-core", "ef-core", "c", "net-8", "net-web-api", "signalr"],
    "nextjs-engineer-sri-lanka": ["next-js", "next-js-15", "next-js-16", "react", "redux-toolkit", "tanstack", "vite"],
    "postgresql-optimization": ["postgresql", "mongodb", "redis", "firebase"],
    "aws-docker-devops": ["docker", "aws-ec2-ecr-s3", "github-actions", "nginx", "linux-server-deployments"],
  };

  for (const [skillSlug, keywords] of Object.entries(skillKeywords)) {
    for (const kw of keywords) {
      if (map.has(kw)) {
        map.get(kw)!.skillPageSlug = skillSlug;
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => b.projectSlugs.length - a.projectSlugs.length);
}

export function getStackBySlug(slug: string): StackEntry | undefined {
  return getAllStacks().find((s) => s.slug === slug);
}
