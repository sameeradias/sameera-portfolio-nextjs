import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Sameera Roshan Dias", url: "https://sameeradias.site" },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-10 md:px-8">
          <nav className="mb-6 text-sm text-text-muted">
            <Link href="/blog" className="hover:text-text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-text-muted">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span className="rounded-full border border-border px-2 py-0.5 uppercase tracking-wider">{post.category}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-text-secondary">{post.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-text-muted">{tag}</span>
            ))}
          </div>

          <div
            className="prose-custom mt-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
    </>
  );
}
