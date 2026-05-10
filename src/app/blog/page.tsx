import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles on .NET, Next.js, PostgreSQL, Docker, and software architecture by Sameera Roshan Dias.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Technical Articles
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Practical engineering insights from building production SaaS, ERP, and cloud systems.
          </p>

          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                  <span className="rounded-full border border-border px-2 py-0.5 uppercase tracking-wider">{post.category}</span>
                </div>
                <h2 className="mt-2 text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-text-muted">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
