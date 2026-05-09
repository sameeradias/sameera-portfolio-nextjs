"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile, availability, impactStats, resumeHighlights } from "@/content/portfolio-data";
import { CursorGlow } from "@/components/ui/cursor-glow";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      {/* Cursor glow */}
      <CursorGlow />

      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-xs font-medium text-text-secondary">{availability.status}</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-semibold md:text-2xl">
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                {profile.title}
              </span>
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
              {profile.heroLine}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
              </Link>
              <a
                href="/Sameera-Roshan-Dias-Resume.pdf"
                download
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover hover:bg-surface"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-text-primary" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-text-primary" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={`mailto:${profile.email}`} className="text-text-muted transition-colors hover:text-text-primary" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Right column — Profile image + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Profile image */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-20 blur-md" />
              <Image
                src="/sameera-dias.jpeg"
                alt="Sameera Roshan Dias"
                width={200}
                height={200}
                className="relative h-48 w-48 rounded-full border-2 border-border object-cover md:h-56 md:w-56"
                priority
              />
            </div>

            {/* Quick highlights */}
            <div className="w-full rounded-2xl border border-border bg-surface p-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Engineering Snapshot</h2>
              <ul className="mt-3 space-y-2">
                {resumeHighlights.map((highlight) => (
                  <li key={highlight} className="rounded-lg bg-surface-elevated px-3 py-2 text-xs leading-relaxed text-text-secondary">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Inline stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-surface px-4 py-4">
              <p className="text-2xl font-extrabold text-accent-warm">{stat.value}</p>
              <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
