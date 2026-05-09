import Link from "next/link";
import { ProjectEntry } from "@/content/portfolio-data";
import { Chip } from "@/components/chip";

type ProjectCardProps = {
  project: ProjectEntry;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-border-hover hover:shadow-lg hover:shadow-accent/5">
      <div className="h-2 w-full bg-gradient-to-r from-accent to-accent-secondary" aria-hidden="true" />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">{project.label}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.summary}</p>

        {!compact && (
          <p className="mt-4 rounded-xl bg-surface-elevated px-3 py-2.5 text-sm text-text-secondary">
            <span className="font-semibold text-text-primary">Role:</span> {project.role}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, compact ? 5 : project.stack.length).map((item) => (
            <Chip key={`${project.slug}-${item}`}>{item}</Chip>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
          >
            View case study
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-text-muted transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
