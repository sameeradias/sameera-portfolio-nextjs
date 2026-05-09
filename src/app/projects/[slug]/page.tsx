import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chip } from "@/components/chip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getProjectBySlug, projects } from "@/content/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 md:px-8">
          <Link href="/projects" className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Projects
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Case Study</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">{project.name}</h1>
          <p className="mt-3 text-base font-medium text-accent-secondary">{project.label}</p>
          <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Chip key={`${project.slug}-${item}`}>{item}</Chip>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-glow"
            >
              View on GitHub →
            </a>
          )}

          <div className="mt-10 space-y-6">
            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Role</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">{project.role}</p>
            </section>

            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Business Problem</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">{project.problemDetail}</p>
            </section>

            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Key Decisions</h2>
              <ul className="mt-4 space-y-3">
                {project.decisions.map((item) => (
                  <li key={item} className="rounded-xl bg-surface-elevated px-4 py-3 text-sm leading-relaxed text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Architecture</h2>
              <ul className="mt-4 space-y-3">
                {project.architecture.map((item) => (
                  <li key={item} className="rounded-xl bg-surface-elevated px-4 py-3 text-sm leading-relaxed text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {project.diagramUrl && (
              <section className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-xl font-semibold text-text-primary">Architecture Diagram</h2>
                <div className="mt-4 overflow-x-auto">
                  <Image
                    src={project.diagramUrl}
                    alt={`${project.name} architecture diagram`}
                    width={800}
                    height={500}
                    className="w-full rounded-xl"
                  />
                </div>
              </section>
            )}

            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {project.outcomes.map((item) => (
                  <li key={item} className="rounded-xl bg-surface-elevated px-4 py-3 text-sm leading-relaxed text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-text-primary">Measurable Impact</h2>
              <ul className="mt-4 space-y-3">
                {project.metrics.map((item) => (
                  <li key={item} className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-medium leading-relaxed text-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
