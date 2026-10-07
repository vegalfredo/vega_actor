/**
 * Datos globales del sitio.
 *
 * IMPORTANTE — PENDIENTES DE VERIFICAR ANTES DE PUBLICAR:
 * Todo lo marcado con `PENDIENTE` debe confirmarlo Marcos.
 * No publicar datos sin verificar (ver CLAUDE.md §9 y §10).
 */

export const site = {
  name: "Marcos Vega",
  role: "Actor · Comediante · Creador",
  city: "Querétaro, México",
  url: "https://marcosvega.com", // PENDIENTE: dominio definitivo
  description:
    "Marcos Vega, actor y comediante en Querétaro. Teatro, comedia, caracterización y personajes. Reel, book y contacto para casting.",
} as const;

/**
 * Contacto — PENDIENTE: sustituir por datos reales.
 * El número de WhatsApp va en formato internacional sin signos ni espacios.
 */
export const contact = {
  whatsapp: {
    // Formato: 52 + LADA + número, sin signos ni espacios.
    number: "524425713606",
    message: "Hola Marcos, te contacto por un casting.",
  },
  // PENDIENTE: usuario real de Instagram (sin @)
  instagram: "marcosvega",
  facebook: "https://www.facebook.com/marcosalfredo.81unam/",
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(
  contact.whatsapp.message
)}`;

/**
 * Ficha de casting — PENDIENTE: verificar cada dato con Marcos.
 * Los valores de altura y edad escénica venían como ejemplo en CLAUDE.md §10.
 */
export const castingSheet = {
  stageAge: "40–50", // PENDIENTE verificar
  height: "1.68 m", // PENDIENTE verificar
  city: "Querétaro",
  specialties: [
    "Comedia",
    "Teatro",
    "Caracterización",
    "Personajes",
    "Improvisación",
    "Pastorelas",
  ],
} as const;

/** Temporada activa. Cambiar el año y las líneas al rotar de temporada (CLAUDE.md §44). */
export const season = {
  label: "Temporada 2026",
  lines: ["Pastorelas", "Teatro", "Comedia", "Eventos"],
  cta: "Disponible para casting",
  /** Poner en false fuera de septiembre–diciembre para ocultar el módulo estacional. */
  active: true,
} as const;
