import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { castingSheet, site, whatsappUrl } from "@/content/site";
import { ReelPlayer } from "@/components/reel/ReelPlayer";
import { characters } from "@/content/characters";

export const metadata: Metadata = {
  title: "Casting — Ficha técnica",
  description:
    "Ficha de casting de Marcos Vega: edad escénica, especialidades, personajes, reel y contacto directo. Querétaro, México.",
  alternates: { canonical: "/casting" },
};

/**
 * Página de casting (CLAUDE.md §10).
 * Pensada para abrirse desde un enlace directo enviado a un director:
 * todo lo necesario para decidir una llamada, sin scroll obligatorio.
 */
export default function CastingPage() {
  return (
    <div className="px-5 pb-[var(--space-section)] pt-28 sm:px-8 sm:pt-36">
      <header className="border-b border-white/10 pb-10">
        <p className="eyebrow">Ficha de casting</p>
        <h1 className="display mt-4 text-[15vw] sm:text-[10vw] lg:text-[8rem]">
          Marcos Vega
        </h1>
        <p className="mt-4 text-lg text-[var(--color-foreground)]/80">
          Actor · Comediante
        </p>
      </header>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">Edad escénica</dt>
              <dd className="display mt-2 text-3xl">{castingSheet.stageAge}</dd>
            </div>
            <div>
              <dt className="eyebrow">Altura</dt>
              <dd className="display mt-2 text-3xl">{castingSheet.height}</dd>
            </div>
            <div>
              <dt className="eyebrow">Ciudad</dt>
              <dd className="display mt-2 text-3xl">{castingSheet.city}</dd>
            </div>
          </dl>

          <div className="mt-14">
            <p className="eyebrow">Especialidades</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {castingSheet.specialties.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <p className="eyebrow">Personajes interpretados</p>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {characters.map((c) => (
                <li key={c.slug}>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-[var(--color-surface)]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {c.production}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#141416] transition-colors hover:bg-[var(--color-accent-strong)]"
            >
              Contactar por WhatsApp
            </a>
            <Link
              href="/"
              className="rounded-full border border-[var(--color-foreground)]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[var(--color-foreground)]"
            >
              Ver sitio completo
            </Link>
          </div>

          {/* PENDIENTE: el book en PDF todavía no existe (CLAUDE.md §46).
              Cuando esté, añadir aquí el botón DESCARGAR BOOK apuntando a
              /public/marcos-vega-book.pdf */}
        </div>

        <aside className="lg:w-[380px]">
          <ReelPlayer />
          <figure className="mt-10">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[var(--color-surface)]">
              <Image
                src="/images/casting/marcos-vega-casting-01.webp"
                alt={`Retrato de ${site.name}.`}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-3">Retrato actual</figcaption>
          </figure>
        </aside>
      </div>
    </div>
  );
}
