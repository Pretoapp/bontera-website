'use client';

import { useCallback, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

type ExpertiseItem = {
  key: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

function TiltCard({
  item,
  index,
  ctaLabel,
}: {
  item: ExpertiseItem;
  index: number;
  ctaLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateY = useTransform(px, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(py, [-0.5, 0.5], [6, -6]);

  const rX = useSpring(rotateX, { stiffness: 160, damping: 20 });
  const rY = useSpring(rotateY, { stiffness: 160, damping: 20 });

  const sheenX = useTransform(px, [-0.5, 0.5], ['20%', '80%']);
  const sheenY = useTransform(py, [-0.5, 0.5], ['20%', '80%']);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      px.set(x);
      py.set(y);
    },
    [px, py]
  );

  const onLeave = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  const slugIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative overflow-hidden rounded-3xl',
        'bg-white',
        'border border-bontera-grey-200/80',
        'shadow-[0_18px_60px_rgba(17,24,39,0.08)]',
        'transition-[border-color,box-shadow,transform] duration-300',
        'hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(17,24,39,0.12)]',
        'hover:border-bontera-navy-200/50',
        'focus-within:ring-2 focus-within:ring-bontera-navy-200/50',
        'will-change-transform'
      )}
    >
      {/* Premium card surface: subtle depth and texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 pattern-bontera-lines opacity-[0.045]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_14%_18%,rgba(148,163,184,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-bontera-grey-50/70" />

        {/* Top highlight rim */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          quality={92}
        />

        {/* Premium legibility overlay, neutral but rich */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bontera-grey-950/70 via-bontera-grey-950/18 to-transparent" />

        {/* Image edge polish */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

        {/* Sheen */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--sx) var(--sy), rgba(255,255,255,0.55), rgba(255,255,255,0) 55%)',
            // @ts-expect-error CSS vars
            '--sx': sheenX,
            // @ts-expect-error CSS vars
            '--sy': sheenY,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 sm:p-8" style={{ transform: 'translateZ(26px)' }}>
        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              'inline-flex items-center gap-2',
              'rounded-full',
              'border border-bontera-grey-200/90 bg-white/90',
              'px-3 py-1',
              'text-[11px] font-semibold uppercase tracking-[0.18em] text-bontera-grey-800',
              'shadow-[0_10px_26px_rgba(17,24,39,0.06)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bontera-navy-600" />
            {slugIndex}
          </span>

          <span className="rounded-full border border-bontera-grey-200/90 bg-bontera-grey-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-bontera-grey-600">
            Bontera
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight text-bontera-grey-900 sm:text-3xl">
          {item.title}
        </h3>

        {/* Navy divider */}
        <div className="mt-4 h-[3px] w-16 rounded-full bg-bontera-navy-600" />

        <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-bontera-grey-600 sm:text-base">
          {item.description}
        </p>

        <div className="mt-7">
          <Link
            href={item.href}
            className={cn(
              'inline-flex items-center gap-3',
              'rounded-xl px-5 py-3 text-sm font-semibold',
              'text-white',
              'bg-gradient-to-b from-bontera-navy-600 to-bontera-navy-700',
              'shadow-[0_14px_34px_rgba(17,24,39,0.14)]',
              'hover:from-bontera-navy-700 hover:to-bontera-navy-800',
              'transition-colors'
            )}
          >
            <span>{ctaLabel}</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ExpertiseShowcase({ locale }: { locale: string }) {
  const t = useTranslations('expertise');

  const items: ExpertiseItem[] = useMemo(
    () => [
      {
        key: 'building',
        title: t('building.title'),
        description: t('building.description'),
        imageSrc: '/images/expertise-building.jpg',
        href: `/${locale}/services#building`,
      },
      {
        key: 'civil',
        title: t('civil.title'),
        description: t('civil.description'),
        imageSrc: '/images/expertise-civil.jpg',
        href: `/${locale}/services#civil`,
      },
      {
        key: 'structures',
        title: t('structures.title'),
        description: t('structures.description'),
        imageSrc: '/images/expertise-structures.jpg',
        href: `/${locale}/services#structures`,
      },
      {
        key: 'restoration',
        title: t('restoration.title'),
        description: t('restoration.description'),
        imageSrc: '/images/expertise-restoration.jpg',
        href: `/${locale}/services#restoration`,
      },
    ],
    [locale, t]
  );

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* White background with Footer/Strengths-style depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 pattern-bontera-lines opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_18%,rgba(74,85,104,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_88%_42%,rgba(154,163,176,0.08),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-bontera-grey-50/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-bontera-grey-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-bontera-grey-600">
              {t('kicker')}
            </span>
          </div>

          {/* Premium unified headline block */}
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span
              className={cn(
                'relative inline-block overflow-hidden',
                'text-white',
                'bg-gradient-to-b from-bontera-navy-800 to-bontera-navy-900',
                'px-5 py-3 sm:px-6 sm:py-3.5',
                'rounded-[22px]',
                'ring-1 ring-bontera-grey-200/70',
                'shadow-[0_18px_55px_rgba(15,23,42,0.14)]',
                'antialiased'
              )}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_18%_22%,rgba(255,255,255,0.14),transparent_55%)]"
              />
              <span className="relative">{t('title')}</span>
            </span>
          </h2>

          <div className="mt-5 h-[3px] w-16 rounded-full bg-bontera-navy-600" />

          <p className="mt-5 text-base leading-relaxed text-bontera-grey-600 sm:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {items.map((item, idx) => (
            <TiltCard key={item.key} item={item} index={idx} ctaLabel={t('cta')} />
          ))}
        </div>
      </div>
    </section>
  );
}
