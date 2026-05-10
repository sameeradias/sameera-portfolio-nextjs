import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllStacks } from "@/lib/stack";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Technologies used by Sameera Roshan Dias across production projects — .NET, Next.js, PostgreSQL, Docker, AWS, and more.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  const stacks = getAllStacks();

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Stack</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Technology Stack
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Every technology I&apos;ve used in production, with links to related projects and articles.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {stacks.map((stack) => (
              <Link
                key={stack.slug}
                href={`/stack/${stack.slug}`}
                className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                {stack.technology}
                <span className="ml-2 text-xs text-text-muted">({stack.projectSlugs.length})</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
