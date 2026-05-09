"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    function onMove(e: MouseEvent) {
      const rect = el!.parentElement!.getBoundingClientRect();
      el!.style.left = `${e.clientX - rect.left}px`;
      el!.style.top = `${e.clientY - rect.top}px`;
      el!.style.opacity = "1";
    }

    function onLeave() {
      el!.style.opacity = "0";
    }

    const parent = el.parentElement!;
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px] opacity-0 transition-opacity duration-300 hidden md:block"
    />
  );
}
