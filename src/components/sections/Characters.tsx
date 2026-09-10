import Image from "next/image";
import { characters } from "@/content/characters";
import { Reveal } from "@/components/animation/Reveal";

/**
 * Personajes — sección clave para casting (CLAUDE.md §7).
 * Responde: "¿qué puede interpretar?".
 *
 * El efecto de hover es puramente decorativo: toda la información
 * (nombre, obra, categoría) es texto visible sin interacción, para no
 * depender del hover en mobile ni en lectores de pantalla.
 */
export function Characters() {
  return (
    <section
      id="personajes"
      className="scroll-mt-24 px-5 py-[var(--space-section)] sm:px-8"
    >
      <Reveal>
        <p className="eyebrow">Personajes</p>
        <h2 className="display mt-4 text-[14vw] sm:text-[9vw] lg:text-[7rem]">
          Puedo ser…
        </h2>
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((c, i) => (
          <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[var(--color-surface)]">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="display mt-5 text-2xl">{c.name}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-foreground)]/75">
                {c.production}
              </p>
              <p className="eyebrow mt-2">{c.category}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
