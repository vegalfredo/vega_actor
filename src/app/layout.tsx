import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation/Navigation";
import { site } from "@/content/site";
import "./globals.css";

/* Dos familias, según CLAUDE.md §12: una display expresiva y una de lectura. */
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Marcos Vega — Actor y Comediante | Querétaro",
    template: "%s | Marcos Vega",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_MX",
    siteName: site.name,
    title: "Marcos Vega — Actor y Comediante | Querétaro",
    description: site.description,
    images: [
      {
        url: "/images/hero/marcos-vega-hero-01.webp",
        width: 1600,
        height: 2000,
        alt: "Marcos Vega caracterizado en la obra 75 Puñaladas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Vega — Actor y Comediante | Querétaro",
    description: site.description,
    images: ["/images/hero/marcos-vega-hero-01.webp"],
  },
};

/** Structured data — Person (CLAUDE.md §27). Sin datos personales sensibles. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Actor y comediante",
  url: site.url,
  image: `${site.url}/images/hero/marcos-vega-hero-01.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Querétaro",
    addressCountry: "MX",
  },
  knowsAbout: [
    "Teatro",
    "Comedia",
    "Improvisación",
    "Caracterización",
    "Pastorelas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <head>
        {/*
          Marca el documento como "con JS" antes del primer pintado.
          Los elementos [data-animate] solo se ocultan bajo .js, de modo que
          si el script no llega a ejecutarse el contenido sigue siendo visible
          en lugar de quedarse en opacidad 0 (CLAUDE.md §29).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-accent)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#141416]"
        >
          Saltar al contenido
        </a>
        <Navigation />
        <main id="contenido">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
