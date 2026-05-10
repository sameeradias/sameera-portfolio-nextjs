import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { skillPages } from "@/content/skills-data";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description: "Technical expertise of Sameera Roshan Dias — .NET, Next.js, PostgreSQL, AWS, Docker, and full-stack engineering.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Expertise</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Skills & Technical Depth
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Deep-dive pages covering my production experience, architecture patterns, and real-world applications in each technology area.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillPages.map((skill) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-hover hover:shadow-lg hover:shadow-accent/5"
              >
                <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {skill.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {skill.intro}
                </p>
                <p className="mt-4 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Read more →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
