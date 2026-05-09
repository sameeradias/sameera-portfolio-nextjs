import Link from "next/link";
import { ProjectEntry } from "@/content/portfolio-data";
import { Chip } from "@/components/chip";

type ProjectCardProps = {
  project: ProjectEntry;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="project-art h-28 w-full border-b border-slate-200" aria-hidden="true" />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-ink-muted)]">{project.label}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-[color:var(--brand-ink)]">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{project.summary}</p>

        {!compact && (
          <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Role:</span> {project.role}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, compact ? 5 : project.stack.length).map((item) => (
            <Chip key={`${project.slug}-${item}`}>{item}</Chip>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--brand-accent)] transition group-hover:translate-x-1"
        >
          View case study {"->"}
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 mt-6 inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-slate-800"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
