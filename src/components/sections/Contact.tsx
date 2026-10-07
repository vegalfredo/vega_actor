import { contact, whatsappUrl } from "@/content/site";
import { Reveal } from "@/components/animation/Reveal";

/**
 * Contacto (CLAUDE.md §11, §47).
 * Sin formulario: enlaces directos. El número de WhatsApp no se muestra
 * en texto, solo se usa en el enlace.
 *
 * PENDIENTE: los datos de contact.ts son marcadores hasta que Marcos los confirme.
 */
export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-white/8 px-5 py-[var(--space-section)] sm:px-8"
    >
      <Reveal>
        <p className="eyebrow">Contacto</p>
        <h2 className="display mt-4 text-[15vw] sm:text-[12vw] lg:text-[10rem]">
          ¿Hablamos?
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#141416] transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            Hablar por WhatsApp
          </a>
          <a
            href={`https://instagram.com/${contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-foreground)]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[var(--color-foreground)]"
          >
            Instagram
          </a>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-foreground)]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[var(--color-foreground)]"
          >
            Facebook
          </a>
        </div>
      </Reveal>
    </section>
  );
}
