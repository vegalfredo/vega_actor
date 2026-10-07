import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";

/**
 * En escena — responde "¿qué ha hecho?" (CLAUDE.md §5).
 *
 * PENDIENTE: falta metadata real de cada montaje (teatro, dirección, año, temporada).
 * Los campos vacíos se omiten en vez de rellenarse con datos inventados.
 */
type Production = {
  slug: string;
  title: string;
  tagline: string;
  venue: string;
  /** Página de la obra en el sitio del teatro. Enlaza imagen y teatro. */
  url?: string;
  image: string;
  alt: string;
  fit?: "cover" | "contain";
};

const productions: Production[] = [
  {
    slug: "75-punaladas",
    title: "75 Puñaladas",
    tagline: "Más de alguno morirá… de risa",
    venue: "La Corte Teatral · Querétaro",
    url: "https://lacorteteatral.com/obras/75-punaladas",
    image: "/images/personajes/personaje-mayordomo-02.webp",
    alt: "Cartel de la obra 75 Puñaladas con Marcos Vega caracterizado como mayordomo de bombín, bigote y lentes.",
    /** Cartel vertical: se muestra completo en lugar de recortarlo. */
    fit: "contain",
  },
  {
    slug: "famonstruos",
    title: "La Casa de los Famonstruos",
    tagline: "Terror cómico · Querétaro",
    venue: "Recorrido de temporada",
    image: "/images/personajes/personaje-momia-02.webp",
    alt: "Marcos Vega caracterizado como momia en La Casa de los Famonstruos.",
  },
  {
    slug: "mago-de-oz",
    title: "El Mago de Oz",
    tagline: "Teatro familiar",
    venue: "La Corte Teatral · Querétaro",
    image: "/images/personajes/personaje-oz-02.webp",
    alt: "Marcos Vega en escena en El Mago de Oz junto al León.",
  },
];

export function OnStage() {
  return (
    <section
      id="en-escena"
      className="scroll-mt-24 px-5 py-[var(--space-section)] sm:px-8"
    >
      <Reveal>
        <p className="eyebrow">En escena</p>
        <h2 className="display mt-4 text-[14vw] sm:text-[9vw] lg:text-[7rem]">
          En escena
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16 sm:gap-20">
        {productions.map((p, i) => {
          const image = (
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className={`transition-transform duration-500 ${
                p.fit === "contain" ? "object-contain" : "object-cover"
              } ${p.url ? "group-hover:scale-[1.03]" : ""}`}
            />
          );

          return (
            <Reveal key={p.slug}>
              <article
                className={`grid gap-6 sm:grid-cols-2 sm:items-center sm:gap-10 ${
                  i % 2 === 1 ? "sm:[&>figure]:order-2" : ""
                }`}
              >
                <figure
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
                    p.fit === "contain" ? "bg-black" : "bg-[var(--color-surface)]"
                  }`}
                >
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group absolute inset-0 block focus-visible:outline-offset-[-3px]"
                    >
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                </figure>
  
                <div>
                  <h3 className="display text-[9vw] sm:text-[4.5vw] lg:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-[var(--color-foreground)]/80">
                    {p.tagline}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    <div>
                      <dt className="eyebrow">Teatro</dt>
                      <dd className="mt-1 text-sm">
                        {p.url ? (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-[var(--color-accent)] underline-offset-4 transition-colors hover:text-[var(--color-accent-strong)]"
                          >
                            {p.venue}
                          </a>
                        ) : (
                          p.venue
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
