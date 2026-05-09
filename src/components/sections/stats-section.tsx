"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/content/portfolio-data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {impactStats.map((stat, i) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover"
          >
            <p className="text-4xl font-extrabold text-accent-warm">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
