import { ReelPlayer } from "@/components/reel/ReelPlayer";
import { Reveal } from "@/components/animation/Reveal";

/** Reel — responde "¿cómo actúa?" (CLAUDE.md §8). A un clic desde el hero. */
export function Reel() {
  return (
    <section
      id="reel"
      className="scroll-mt-24 border-y border-white/8 bg-[var(--color-surface)]/40 px-5 py-[var(--space-section)] sm:px-8"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Reel</p>
          <h2 className="display mt-4 text-[16vw] sm:text-[11vw] lg:text-[9rem]">
            Verlo
            <br />
            actuar
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-[var(--color-muted)]">
            Un monólogo completo, sin cortes: la construcción de un personaje
            de edad avanzada desde la voz, el ritmo y el cuerpo.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <ReelPlayer />
        </Reveal>
      </div>
    </section>
  );
}
