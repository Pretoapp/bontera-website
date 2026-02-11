"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = { src: string; alt?: string };

type FadeStage = "idle" | "enter" | "fade";

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const safe = useMemo(
    () => (Array.isArray(images) ? images.filter((x) => x?.src) : []),
    [images]
  );

  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [fade, setFade] = useState<{ prev: number | null; next: number; stage: FadeStage }>({
    prev: null,
    next: 0,
    stage: "idle",
  });

  // Parallax (CSS vars)
  const mainRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Keep index valid if images change
  useEffect(() => {
    if (!safe.length) return;
    if (active > safe.length - 1) setActive(0);
  }, [safe.length, active]);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduceMotion(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Crossfade when active changes
  useEffect(() => {
    if (!safe.length) return;
    if (active === displayed) return;

    setFade({ prev: displayed, next: active, stage: "enter" });

    const raf = requestAnimationFrame(() => {
      setFade((s) => (s.stage === "enter" ? { ...s, stage: "fade" } : s));
    });

    const t = window.setTimeout(() => {
      setDisplayed(active);
      setFade({ prev: null, next: active, stage: "idle" });
    }, 520);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [active, displayed, safe.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const el = thumbRefs.current[active];
    el?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  const prev = useCallback(() => {
    setActive((i) => (safe.length ? (i - 1 + safe.length) % safe.length : 0));
  }, [safe.length]);

  const next = useCallback(() => {
    setActive((i) => (safe.length ? (i + 1) % safe.length : 0));
  }, [safe.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!safe.length) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next, safe.length]);

  const setVars = (x: number, y: number) => {
    const el = mainRef.current;
    if (!el) return;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };

  const onMainMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const el = mainRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;

    const px = (nx - 0.5) * 2; // -1..1
    const py = (ny - 0.5) * 2; // -1..1

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setVars(px, py));
  };

  const onMainLeave = () => {
    if (reduceMotion) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setVars(0, 0);
  };

  if (!safe.length) return null;

  const mainIndex = fade.stage === "idle" ? displayed : fade.next;
  const mainImg = safe[mainIndex];

  const showTransition = fade.stage !== "idle" && fade.prev !== null;
  const prevImg = showTransition ? safe[fade.prev as number] : null;

  return (
    <section className="mx-auto mt-10 max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1.65fr_0.95fr]">
        {/* Main image card */}
        <div
          ref={mainRef}
          onMouseMove={onMainMove}
          onMouseLeave={onMainLeave}
          className={[
            "relative overflow-hidden rounded-3xl bg-white shadow-[0_22px_70px_rgba(10,20,40,0.14)]",
            "ring-1 ring-black/5",
          ].join(" ")}
        >
          {/* Aspect ratio */}
          <div className="relative aspect-[16/10]">
            {/* Previous (fades out) */}
            {showTransition && prevImg && (
              <div
                className={[
                  "absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  fade.stage === "fade" ? "opacity-0" : "opacity-100",
                ].join(" ")}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    transform: reduceMotion
                      ? undefined
                      : "translate3d(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 10px), 0) scale(1.04)",
                    transition: "transform 220ms ease",
                    willChange: reduceMotion ? undefined : "transform",
                  }}
                >
                  <Image
                    src={prevImg.src}
                    alt={prevImg.alt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>
            )}

            {/* Current (fades in) */}
            <div
              className={[
                "absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                showTransition ? (fade.stage === "fade" ? "opacity-100" : "opacity-0") : "opacity-100",
              ].join(" ")}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: reduceMotion
                    ? undefined
                    : "translate3d(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 10px), 0) scale(1.04)",
                  transition: "transform 220ms ease",
                  willChange: reduceMotion ? undefined : "transform",
                }}
              >
                <Image
                  src={mainImg.src}
                  alt={mainImg.alt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
            </div>

            {/* Minimal nav buttons (icon only, no visible text) */}
            <div className="absolute inset-x-4 top-4 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 ring-1 ring-black/10 backdrop-blur-md transition hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-900 transition group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 ring-1 ring-black/10 backdrop-blur-md transition hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-900 transition group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails rail */}
        <div className="rounded-3xl bg-white shadow-[0_22px_70px_rgba(10,20,40,0.10)] ring-1 ring-black/5">
          <div
            className={[
              "max-h-[420px] overflow-y-auto p-4",
              "lg:max-h-[520px]",
              // subtle scrollbar (works in most browsers)
              "[scrollbar-width:thin] [scrollbar-color:rgba(15,23,42,0.20)_transparent]",
            ].join(" ")}
          >
            <div className="grid gap-3">
              {safe.map((img, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={`${img.src}-${idx}`}
                    ref={(el) => {
                      thumbRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Open image ${idx + 1}`}
                    className={[
                      "group relative flex items-center gap-3 rounded-2xl p-2 transition",
                      "ring-1 ring-black/5 hover:ring-black/10",
                      isActive ? "bg-slate-50 ring-black/10" : "bg-white",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "relative h-16 w-24 flex-none overflow-hidden rounded-xl",
                        isActive ? "ring-2 ring-slate-900/20" : "ring-1 ring-black/5",
                      ].join(" ")}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt ?? ""}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* No visible text. Just a subtle active indicator dot. */}
                    <div className="flex w-full justify-end">
                      <span
                        className={[
                          "h-2.5 w-2.5 rounded-full transition",
                          isActive ? "bg-slate-900/55" : "bg-slate-900/15 group-hover:bg-slate-900/25",
                        ].join(" ")}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile: thumbs below main (optional behavior) */}
          <div className="border-t border-black/5 p-4 lg:hidden">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {safe.map((img, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={`${img.src}-mobile-${idx}`}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Open image ${idx + 1}`}
                    className={[
                      "relative h-16 w-24 flex-none overflow-hidden rounded-xl ring-1 ring-black/5 transition",
                      isActive ? "ring-2 ring-slate-900/20" : "hover:ring-black/10",
                    ].join(" ")}
                  >
                    <Image src={img.src} alt={img.alt ?? ""} fill sizes="160px" className="object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
