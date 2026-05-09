"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects, projects } from "@/content/portfolio-data";

const gradients = [
  "from-indigo-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-amber-500/20 to-orange-500/20",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Selected Work</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Projects With Production Context
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.slice(0, 4).map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-hover hover:shadow-lg hover:shadow-accent/5"
            >
              <div className={`mb-4 h-2 w-16 rounded-full bg-gradient-to-r ${gradients[i % gradients.length]}`} />
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-secondary">
                {project.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                View case study
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover hover:bg-surface"
        >
          Explore all {projects.length} projects
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
}
