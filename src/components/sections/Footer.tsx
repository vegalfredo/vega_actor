import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-lg">{site.name}</p>
        <p className="eyebrow">
          {site.role} · {site.city}
        </p>
        <p className="text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
