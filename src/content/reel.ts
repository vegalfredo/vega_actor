/**
 * Reel principal.
 *
 * Nota de dirección: el material actual es un self-tape vertical (1080x1920 de origen 480x854).
 * Se presenta en formato vertical honesto, sin forzarlo a 16:9, porque ampliarlo
 * degradaría visiblemente la imagen (CLAUDE.md §8, §21).
 *
 * Cuando exista un reel editado profesionalmente, sustituir `src`, `poster`,
 * `aspect` y `duration` — el componente no necesita cambios.
 */
export const reel = {
  title: "Monólogo — El Mayordomo",
  src: "/videos/reel/marcos-vega-reel-monologo.mp4",
  poster: "/videos/reel/marcos-vega-reel-poster.webp",
  duration: "01:53",
  /** "vertical" | "wide" — controla el encuadre del player. */
  aspect: "vertical" as const,
  tags: ["Actor", "Comediante", "Caracterización", "Monólogo"],
  caption:
    "Muestra de trabajo actoral: construcción del personaje del mayordomo a partir de voz, ritmo y cuerpo.",
} as const;

/** Escenas de teatro con público, como material de apoyo al reel. */
export const scenes = [
  {
    slug: "tango",
    title: "Baile de Tango",
    production: "75 Puñaladas",
    note: "Escena de comedia física con público en vivo.",
  },
  {
    slug: "tomada-de-mano",
    title: "Tomada de mano",
    production: "75 Puñaladas",
    note: "Escena a dos personajes.",
  },
] as const;
