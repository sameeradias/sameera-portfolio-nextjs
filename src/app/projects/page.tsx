import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and portfolio projects by Sameera Roshan Dias.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="brand-page-bg flex-1">
        <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
          <SectionTitle
            eyebrow="Projects"
            title="Portfolio Case Studies"
            description="Detailed delivery snapshots highlighting architecture decisions, execution strategy, and measurable outcomes."
          />
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
          >
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
      <SiteFooter />
    </>
  );
}
