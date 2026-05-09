"use client";

import { motion } from "framer-motion";
import { profile, availability } from "@/content/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-12"
      >
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-success">Open To Opportunities</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {availability.looking}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3">
              <span className="text-xs font-semibold text-accent">Availability</span>
              <p className="mt-1 text-sm text-text-primary">{availability.status}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3">
              <span className="text-xs font-semibold text-accent">Preference</span>
              <p className="mt-1 text-sm text-text-primary">{availability.preferences}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3">
              <span className="text-xs font-semibold text-accent">Culture</span>
              <p className="mt-1 text-sm text-text-primary">{availability.culture}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3">
              <span className="text-xs font-semibold text-accent">Relocation</span>
              <p className="mt-1 text-sm text-text-primary">{availability.relocation}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover hover:bg-surface-elevated"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-hover hover:bg-surface-elevated"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
