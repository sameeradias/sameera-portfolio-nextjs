import { PropsWithChildren } from "react";

export function Chip({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted">
      {children}
    </span>
  );
}
