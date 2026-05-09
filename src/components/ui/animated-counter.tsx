"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;

    const el = ref.current;
    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      el.textContent = value;
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const suffix = value.slice(numericMatch[1].length);
    const duration = 1500;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(eased * target)}${suffix}`;
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  });

  return <span ref={ref}>0</span>;
}
