import Link from "next/link";

/**
 * Hero — primera pantalla (CLAUDE.md §4).
 * Imagen full bleed con la caracterización del mayordomo de 75 Puñaladas,
 * que conecta directamente con el reel. Sin animación de entrada bloqueante:
 * el texto es HTML servido, visible de inmediato.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Capa de fondo completa (imagen + degradados), inerte al puntero
          para que solo el contenido de abajo reciba los clics. */}
      <div className="pointer-events-none absolute inset-0">
        {/* Art direction: la foto original es vertical. En desktop se sirve un
            recorte horizontal centrado en los rostros; en mobile, la vertical
            completa (CLAUDE.md §4). fetchPriority alto: es el LCP. */}
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="/images/hero/marcos-vega-hero-01-wide.webp"
          />
          <img
            src="/images/hero/marcos-vega-hero-01.webp"
            alt="Marcos Vega caracterizado como mayordomo de bombín, bigote y lentes, sujetado por otro personaje en una escena de la obra de teatro 75 Puñaladas."
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[58%_18%] sm:object-center"
          />
        </picture>
        {/* Degradados: legibilidad del texto sobre la fotografía. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)]/85 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-5 pb-16 sm:px-8 sm:pb-20">
        <h1 className="display text-[19vw] sm:text-[15vw] lg:text-[11rem]">
          Marcos
          <br />
          Vega
        </h1>

        <p className="eyebrow mt-6 text-[var(--color-foreground)]/85">
          Actor · Comediante · Creador
        </p>
        <p className="mt-2 max-w-md text-sm text-[var(--color-muted)] sm:text-base">
          Teatro, comedia y caracterización en Querétaro.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/#reel"
            className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#141416] transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            Ver reel
          </Link>
          <Link
            href="/casting"
            className="rounded-full border border-[var(--color-foreground)]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[var(--color-foreground)]"
          >
            Casting
          </Link>
        </div>
      </div>
    </section>
  );
}
