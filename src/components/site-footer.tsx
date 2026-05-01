import { profile } from "@/content/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {profile.name} · {profile.title}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
