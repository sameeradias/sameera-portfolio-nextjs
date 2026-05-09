import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/content/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and portfolio projects by Sameera Roshan Dias.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 md:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">Portfolio Case Studies</h1>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              Detailed delivery snapshots highlighting architecture decisions, execution strategy, and measurable outcomes.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover hover:bg-surface"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
