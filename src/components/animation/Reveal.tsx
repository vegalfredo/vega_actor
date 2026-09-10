"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso en segundos, para escalonar elementos hermanos. */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
  as?: ElementType;
};

/**
 * Reveal al entrar en viewport.
 *
 * Capa única de animación scroll (CLAUDE.md §37): el resto de componentes
 * la reutiliza en lugar de repetir lógica GSAP. useGSAP limpia el
 * ScrollTrigger automáticamente al desmontar (CLAUDE.md §38).
 *
 * Si el usuario pide menos movimiento, no se anima nada y el contenido
 * se muestra tal cual.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} data-animate className={className}>
      {children}
    </Tag>
  );
}
