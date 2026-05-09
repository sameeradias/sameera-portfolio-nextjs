"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Experience</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Professional Timeline
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-secondary to-border md:left-1/2" />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-3 top-6 h-3 w-3 rounded-full border-2 border-accent bg-background md:top-6 ${
                i % 2 === 0 ? "md:left-auto md:-right-1.5" : "md:-left-1.5"
              } ${i === 0 ? "shadow-[0_0_8px_rgba(99,102,241,0.5)]" : ""}`} />

              <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-text-primary">{item.role}</h3>
                  <p className="text-sm font-medium text-accent-secondary">
                    {item.company}{item.location ? ` · ${item.location}` : ""}
                  </p>
                  <p className="text-xs font-medium text-text-muted">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.highlights.slice(0, 3).map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-text-secondary">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
