import { PropsWithChildren } from "react";

export function Chip({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
      {children}
    </span>
  );
}
