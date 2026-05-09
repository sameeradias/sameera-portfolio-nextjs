"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/content/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Core Skills</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Technology Toolkit
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: gi * 0.08, duration: 0.4 }}
            className={`rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover ${
              gi === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
                    item.level === "production"
                      ? "border border-accent/30 bg-accent/10 text-accent"
                      : "border border-border text-text-muted"
                  }`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
