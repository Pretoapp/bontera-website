'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Slide = { src: string; alt: string };

export default function HeroBackgroundSlider({
  slides,
  intervalMs = 6500,
  fadeMs = 900,
  intensity = 10, // 6–14 recommended
  shakeOnChange = true,
  luxuryMode = true,
}: {
  slides: Slide[];
  intervalMs?: number;
  fadeMs?: number;
  intensity?: number;
  shakeOnChange?: boolean;
  luxuryMode?: boolean;
}) {
  const safeSlides = slides?.length
    ? slides
    : [{ src: '/images/1.jpg', alt: 'Bontera Construction' }];

  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  // 3D transform state
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const rafRef = useRef<number | null>(null);
  const lastPointer = useRef({ x: 0, y: 0 });

  const prefersReducedMotion = useMemo(() => reduceMotion, [reduceMotion]);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    setReduceMotion(Boolean(mq?.matches));
    const onChange = () => setReduceMotion(Boolean(mq?.matches));
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, []);

  // Auto slide
  useEffect(() => {
    if (prefersReducedMotion || safeSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, prefersReducedMotion, safeSlides.length]);

  // Trigger micro-shake on slide change
  useEffect(() => {
    if (prefersReducedMotion || !shakeOnChange) return;
    const el = wrapRef.current;
    if (!el) return;

    el.classList.remove('heroShake');
    // Force reflow so the animation can re-trigger
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;
    el.classList.add('heroShake');

    const t = window.setTimeout(() => el.classList.remove('heroShake'), 420);
    return () => window.clearTimeout(t);
  }, [index, prefersReducedMotion, shakeOnChange]);

  // Pointer-based parallax tilt + luxury spotlight
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || prefersReducedMotion) return;

    const update = () => {
      rafRef.current = null;

      const rect = el.getBoundingClientRect();
      const px = (lastPointer.current.x - rect.left) / rect.width; // 0..1
      const py = (lastPointer.current.y - rect.top) / rect.height; // 0..1

      // Clamp
      const cx = Math.max(0, Math.min(1, px));
      const cy = Math.max(0, Math.min(1, py));

      // Feed CSS vars for spotlight
      el.style.setProperty('--spot-x', `${(cx * 100).toFixed(2)}%`);
      el.style.setProperty('--spot-y', `${(cy * 100).toFixed(2)}%`);

      // Map to -1..1
      const dx = (cx - 0.5) * 2;
      const dy = (cy - 0.5) * 2;

      const maxRot = intensity; // deg
      const maxMove = intensity * 2; // px

      const rx = (-dy * maxRot) * 0.35;
      const ry = (dx * maxRot) * 0.35;
      const tx = (dx * maxMove) * 0.35;
      const ty = (dy * maxMove) * 0.35;

      setTilt({ rx, ry, tx, ty });
    };

    const onMove = (e: PointerEvent) => {
      lastPointer.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    const onLeave = () => {
      setTilt({ rx: 0, ry: 0, tx: 0, ty: 0 });
      el.style.setProperty('--spot-x', `50%`);
      el.style.setProperty('--spot-y', `42%`);
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave);

    // default spotlight position
    el.style.setProperty('--spot-x', `50%`);
    el.style.setProperty('--spot-y', `42%`);

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, prefersReducedMotion]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <style jsx>{`
        .hero3d {
          transform-style: preserve-3d;
          perspective: 1200px;
          will-change: transform;
        }

        .stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .slides {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          will-change: transform;
          filter: saturate(1.05) contrast(1.05);
        }

        /* Micro camera shake (only on slide change) */
        .heroShake {
          animation: heroShake 420ms ease-out;
        }

        @keyframes heroShake {
          0% { transform: translate3d(0,0,0); }
          20% { transform: translate3d(-2px, 1px, 0); }
          45% { transform: translate3d(2px, -1px, 0); }
          70% { transform: translate3d(-1px, -1px, 0); }
          100% { transform: translate3d(0,0,0); }
        }

        /* Ken Burns movement for active slide */
        .kbActive {
          animation: kenBurns 12s ease-in-out infinite;
          transform-origin: var(--kb-origin, 55% 45%);
        }

        @keyframes kenBurns {
          0% { transform: translate3d(var(--kb-x, 0px), var(--kb-y, 0px), -18px) scale(1.05); }
          50% { transform: translate3d(calc(var(--kb-x, 0px) * -1), calc(var(--kb-y, 0px) * -1), -18px) scale(1.09); }
          100% { transform: translate3d(var(--kb-x, 0px), var(--kb-y, 0px), -18px) scale(1.05); }
        }

        /* Overlays */
        .overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Luxury vignette + depth */
        .vignette {
          background:
            radial-gradient(1200px 700px at 50% 35%, rgba(255, 210, 140, 0.10), rgba(0, 0, 0, 0) 52%),
            radial-gradient(1200px 900px at 50% 30%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%),
            linear-gradient(to top, rgba(8, 18, 34, 0.70), rgba(8, 18, 34, 0.22) 45%, rgba(8, 18, 34, 0.10));
          mix-blend-mode: normal;
        }

        /* Blueprint grid drift, feels like "construction plans" */
        .blueprint {
          opacity: 0.10;
          mix-blend-mode: overlay;
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,190,90,0.25) 1px, transparent 1px);
          background-size: 90px 90px, 90px 90px, 360px 360px;
          background-position: 0 0, 0 0, 0 0;
          animation: gridDrift 24s linear infinite;
        }

        @keyframes gridDrift {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 180px 120px, 120px 180px, 360px 240px; }
        }

        /* Dust particles for atmosphere */
        .dust {
          opacity: 0.12;
          mix-blend-mode: screen;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.22) 0 1px, transparent 2px),
            radial-gradient(circle at 30% 70%, rgba(255,230,190,0.22) 0 1px, transparent 2px),
            radial-gradient(circle at 70% 40%, rgba(255,255,255,0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 85% 80%, rgba(255,200,120,0.20) 0 1px, transparent 2px);
          background-size: 420px 420px, 520px 520px, 640px 640px, 760px 760px;
          animation: dustFloat 18s ease-in-out infinite;
        }

        @keyframes dustFloat {
          0% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(-14px, -10px, 0); }
          100% { transform: translate3d(0,0,0); }
        }

        /* Spotlight follows pointer for "premium lighting" */
        .spotlight {
          opacity: 0.55;
          mix-blend-mode: screen;
          background:
            radial-gradient(520px 420px at var(--spot-x, 50%) var(--spot-y, 42%),
              rgba(255, 200, 120, 0.25),
              rgba(255, 200, 120, 0.12) 30%,
              rgba(0, 0, 0, 0) 62%);
          transition: opacity 220ms ease;
        }

        /* Light sweep like a polished surface */
        .sweep {
          opacity: 0.12;
          mix-blend-mode: screen;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.06) 38%,
            rgba(255,200,120,0.10) 46%,
            rgba(255,255,255,0.06) 54%,
            transparent 70%
          );
          transform: translate3d(-40%, 0, 0);
          animation: sweep 9s ease-in-out infinite;
        }

        @keyframes sweep {
          0% { transform: translate3d(-45%, 0, 0); }
          50% { transform: translate3d(20%, 0, 0); }
          100% { transform: translate3d(-45%, 0, 0); }
        }

        /* Fine grain for cinematic realism (tiny inline svg noise) */
        .grain {
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
        }

        /* Subtle structure lines near bottom (luxury + construction cue) */
        .structure {
          opacity: 0.10;
          mix-blend-mode: overlay;
          background:
            linear-gradient(to top, rgba(255,190,90,0.12), rgba(0,0,0,0) 55%),
            repeating-linear-gradient(
              135deg,
              rgba(255,190,90,0.18) 0 10px,
              rgba(0,0,0,0) 10px 28px
            );
          mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 70%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 70%);
        }
      `}</style>

      <div className="stage">
        <div
          ref={wrapRef}
          className="absolute inset-0 hero3d"
          style={{
            transition: prefersReducedMotion ? undefined : 'transform 220ms ease-out',
            transform: prefersReducedMotion
              ? 'none'
              : `perspective(1200px) translate3d(${tilt.tx}px, ${tilt.ty}px, 0) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          }}
        >
          {/* Slides */}
          <div className="slides absolute inset-0">
            {safeSlides.map((s, i) => {
              // small, deterministic variation per slide so it feels "directed"
              const dir = i % 2 === 0 ? 1 : -1;
              const kbX = 14 * dir;
              const kbY = -10 * dir;
              const origin = i % 3 === 0 ? '55% 45%' : i % 3 === 1 ? '48% 52%' : '62% 40%';

              const isActive = i === index;

              return (
                <div
                  key={`${s.src}-${i}`}
                  className="absolute inset-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: `opacity ${fadeMs}ms ease`,
                    willChange: 'opacity',
                  }}
                >
                  <div
                    className={[
                      'absolute inset-0',
                      !prefersReducedMotion && isActive ? 'kbActive' : '',
                    ].join(' ')}
                    style={{
                      // If reduced motion, keep depth subtle but static
                      transform: prefersReducedMotion
                        ? 'translate3d(0,0,-12px) scale(1.03)'
                        : undefined,
                      // Ken Burns vars
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      '--kb-x': `${kbX}px`,
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      '--kb-y': `${kbY}px`,
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      '--kb-origin': origin,
                      filter: 'drop-shadow(0 28px 60px rgba(0,0,0,0.38))',
                      willChange: 'transform',
                    }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="100vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Luxury construction world overlays */}
          {luxuryMode && (
            <>
              <div className="overlay vignette" />
              {!prefersReducedMotion && <div className="overlay blueprint" />}
              {!prefersReducedMotion && <div className="overlay dust" />}
              <div className="overlay spotlight" />
              {!prefersReducedMotion && <div className="overlay sweep" />}
              <div className="overlay grain" />
              <div className="overlay structure" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
