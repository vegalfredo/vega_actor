import { Hero } from "@/components/hero/Hero";
import { Reel } from "@/components/sections/Reel";
import { Characters } from "@/components/sections/Characters";
import { OnStage } from "@/components/sections/OnStage";
import { CastingCTA } from "@/components/sections/CastingCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

/**
 * Home — narrativa de scroll (CLAUDE.md §32).
 * Orden por prioridad de casting: quién es → cómo actúa → qué interpreta
 * → qué ha hecho → cómo contratarlo.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Reel />
      <Characters />
      <OnStage />
      <CastingCTA />
      <Contact />
      <Footer />
    </>
  );
}
