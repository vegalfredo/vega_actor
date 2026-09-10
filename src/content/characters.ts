export type Character = {
  slug: string;
  name: string;
  production: string;
  category: string;
  image: string;
  /** Texto alternativo descriptivo (accesibilidad — CLAUDE.md §28). */
  alt: string;
  note: string;
};

/**
 * Personajes reales interpretados por Marcos.
 * Solo se listan personajes con material fotográfico existente (CLAUDE.md §7).
 * Al agregar uno nuevo basta con añadir el objeto y su imagen en /public/images/personajes.
 */
export const characters: Character[] = [
  {
    slug: "el-viejito",
    name: "El Viejito",
    production: "75 Puñaladas",
    category: "Comedia · Caracterización",
    image: "/images/personajes/personaje-viejito-01.webp",
    alt: "Marcos Vega caracterizado como un anciano de bombín, bigote y moño, en una escena de la obra 75 Puñaladas.",
    note: "Personaje de edad avanzada con caracterización completa: bombín, bigote y lentes.",
  },
  {
    slug: "la-momia",
    name: "La Momia",
    production: "La Casa de los Famonstruos",
    category: "Personaje · Terror cómico",
    image: "/images/personajes/personaje-momia-01.webp",
    alt: "Marcos Vega caracterizado como momia, envuelto en vendas, bajo luces de neón en La Casa de los Famonstruos.",
    note: "Caracterización de cuerpo completo y maquillaje para recorrido de terror cómico.",
  },
  {
    slug: "angel-gabriel",
    name: "Ángel Gabriel",
    production: "Pastorela",
    category: "Pastorela · Teatro",
    image: "/images/personajes/personaje-angel-gabriel-01.webp",
    alt: "Marcos Vega interpretando al Ángel Gabriel en una pastorela, con túnica y corona de flores.",
    note: "Personaje de pastorela, registro cómico y entrañable.",
  },
  {
    slug: "el-mexicano",
    name: "El Mexicano",
    production: "La Independencia contada por 3 Pen…",
    category: "Comedia · Histórico",
    image: "/images/personajes/personaje-mexicano-01.webp",
    alt: "Marcos Vega en escena en la obra La Independencia contada por 3 Pen…",
    note: "Comedia histórica con público en vivo.",
  },
  {
    slug: "oz",
    name: "Personaje de Oz",
    production: "El Mago de Oz",
    category: "Teatro familiar",
    image: "/images/personajes/personaje-oz-01.webp",
    alt: "Marcos Vega con sombrero y abrigo azul en una escena de El Mago de Oz.",
    note: "Teatro familiar, trabajo físico y de vestuario.",
  },
  {
    slug: "comedia-situacion",
    name: "Comedia de situación",
    production: "Mi Madre es un Desmadre",
    category: "Comedia",
    image: "/images/personajes/personaje-comedia-01.webp",
    alt: "Marcos Vega en escena junto al elenco de la obra Mi Madre es un Desmadre.",
    note: "Comedia en elenco, timing y trabajo de reparto.",
  },
];
