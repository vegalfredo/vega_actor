import Link from "next/link";
import { season } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

/**
 * CTA de casting + módulo estacional (CLAUDE.md §44, §45).
 * El bloque de temporada se apaga con `season.active` sin tocar el diseño.
 */
export function CastingCTA() {
  return (
    <section className="px-5 py-[var(--space-section)] sm:px-8">
      <Reveal>
        <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-surface)] p-8 sm:p-14">
          {season.active && (
            <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-accent-strong)]">
                {season.label}
              </span>
              <p className="text-sm text-[var(--color-muted)]">
                {season.lines.join(" · ")}
              </p>
            </div>
          )}

          <h2 className="display text-[11vw] sm:text-[7vw] lg:text-[5.5rem]">
            Disponible
            <br />
            para casting
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
            Ficha técnica, especialidades y material de apoyo en un solo lugar.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/casting"
              className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#141416] transition-colors hover:bg-[var(--color-accent-strong)]"
            >
              Ver ficha de casting
            </Link>
            <Link
              href="/#reel"
              className="rounded-full border border-[var(--color-foreground)]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[var(--color-foreground)]"
            >
              Ver reel
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
