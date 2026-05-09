import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Chip } from "@/components/chip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
      <SiteHeader />
      <main className="brand-page-bg flex-1">
        <section className="mx-auto w-full max-w-4xl px-5 pb-24 pt-16 md:px-8 md:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink-muted)]">Case Study</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--brand-ink)] md:text-5xl">{project.name}</h1>
          <p className="mt-3 text-base font-medium text-[color:var(--brand-accent)]">{project.label}</p>
          <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Chip key={`${project.slug}-${item}`}>{item}</Chip>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-accent)] transition hover:underline"
            >
              View on GitHub →
            </a>
          )}

          <div className="mt-10 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Role</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">{project.role}</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Business Problem</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">{project.problemDetail}</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Key Decisions</h2>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-slate-700">
                {project.decisions.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Architecture</h2>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-slate-700">
                {project.architecture.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {project.diagramUrl && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Architecture Diagram</h2>
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

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Outcomes</h2>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-slate-700">
                {project.outcomes.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[color:var(--brand-ink)]">Measurable Impact</h2>
              <ul className="mt-4 grid gap-3 text-base leading-8 text-slate-700">
                {project.metrics.map((item) => (
                  <li key={item} className="rounded-xl bg-teal-50 px-4 py-3 font-medium text-teal-900">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
