import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
};

export type BlogPostMeta = Omit<BlogPost, "content">;

const postsDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content: md } = matter(raw);
  const result = await remark().use(html).process(md);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    tags: data.tags ?? [],
    content: result.toString(),
  };
}
