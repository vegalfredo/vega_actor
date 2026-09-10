"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { reel } from "@/content/reel";

/**
 * Player del reel (CLAUDE.md §8, §29).
 *
 * El <video> no se monta hasta que el usuario pulsa play: hasta entonces solo
 * se carga el póster (~12 KB), de modo que el reel no compite con el hero
 * por el ancho de banda inicial.
 *
 * Formato vertical honesto: el material es un self-tape 9:16 y ampliarlo
 * a 16:9 degradaría la imagen.
 */
export function ReelPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[var(--color-surface)] ring-1 ring-white/10">
        {playing ? (
          <video
            ref={videoRef}
            src={reel.src}
            poster={reel.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            {/* Sin pista de subtítulos disponible todavía.
                PENDIENTE: generar .vtt del monólogo y añadirlo aquí. */}
            Tu navegador no puede reproducir este video.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Reproducir reel: ${reel.title}, duración ${reel.duration}`}
          >
            <Image
              src={reel.poster}
              alt=""
              fill
              sizes="(max-width: 480px) 100vw, 420px"
              className="object-cover"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-black/25"
            />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110"
            >
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                className="ml-1"
              >
                <path d="M26 15 0 30V0l26 15Z" fill="#141416" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <p className="display text-xl">{reel.title}</p>
        <p className="eyebrow shrink-0">{reel.duration}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
        {reel.caption}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {reel.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-muted)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
