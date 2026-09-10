"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Reel", href: "/#reel" },
  { label: "En escena", href: "/#en-escena" },
  { label: "Personajes", href: "/#personajes" },
  { label: "Casting", href: "/casting" },
  { label: "Contacto", href: "/#contacto" },
];

/**
 * Navegación mínima en desktop, menú fullscreen en mobile (CLAUDE.md §3).
 * El menú se cierra con Escape y bloquea el scroll de fondo mientras está abierto.
 */
export function Navigation() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // pointer-events-none en la barra + pointer-events-auto en los controles:
    // así el header no bloquea clics sobre el contenido que queda debajo.
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6 [&>*]:pointer-events-auto">
        <Link
          href="/"
          className="display text-base tracking-tight sm:text-lg"
          style={{ mixBlendMode: "difference" }}
        >
          Marcos Vega
        </Link>

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="eyebrow transition-colors hover:text-[var(--color-accent-strong)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu-movil"
          className="eyebrow md:hidden"
        >
          Menú
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="pointer-events-auto fixed inset-0 z-[110] bg-[var(--color-background)] md:hidden"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="display text-base">Marcos Vega</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="eyebrow"
            >
              Cerrar
            </button>
          </div>

          <nav aria-label="Principal móvil" className="px-5 pt-8">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block py-3 text-[13vw] leading-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
