'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

type RoleCard = {
  title: string;
  description: string;
  href: string;
};

type FeaturedCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  locale: string;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    featured: FeaturedCard;
    roles: RoleCard[];
    highlight: {
      title: string;
      description: string;
      href: string;
      ctaLabel: string;
    };
    bottomCta: {
      label: string;
      href: string;
    };
  };
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

export default function CareersShowcase({ locale, content }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
      },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    }),
    []
  );

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-bontera-grey-50 overflow-hidden">
      {/* Soft background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[38rem] h-[38rem] rounded-full bg-bontera-grey-100 blur-3xl opacity-80" />
        <div className="absolute -bottom-28 right-1/4 w-[34rem] h-[34rem] rounded-full bg-bontera-navy-50 blur-3xl opacity-50" />
        <div className="absolute inset-0 pattern-bontera-grid opacity-[0.06]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-10 bg-bontera-navy-400" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-bontera-navy-600">
              {content.eyebrow}
            </span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-bontera-navy-600 tracking-tight">
            {content.title}
          </h2>

          <p className="mt-5 text-base lg:text-lg text-bontera-grey-600 leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left featured card */}
          <motion.div variants={item} className="lg:col-span-6">
            <Link
              href={content.featured.href.startsWith('/') ? content.featured.href : `/${locale}${content.featured.href}`}
              className="group block h-full"
            >
              <div className="relative overflow-hidden rounded-3xl border border-bontera-grey-200 bg-white shadow-sm h-full min-h-[420px]">
                <div className="absolute inset-0">
                  <Image
                    src={content.featured.imageSrc}
                    alt={content.featured.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={false}
                    quality={92}
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-grey-950/70 via-bontera-grey-950/30 to-transparent" />

                  {/* Subtle line texture */}
                  <div className="absolute inset-0 pattern-bontera-lines opacity-[0.06]" />
                </div>

                <div className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-end">
                  <div className="max-w-md">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
                      {content.featured.title}
                    </h3>
                    <p className="mt-4 text-white/90 leading-relaxed drop-shadow-sm">
                      {content.featured.description}
                    </p>

                    {/* CTA button - Navy on white for visibility */}
                    <div className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-bontera-navy-600 font-semibold transition-all duration-300 group-hover:bg-bontera-navy-50 shadow-lg">
                      <span>{content.featured.ctaLabel}</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/40 to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-white/40 to-transparent" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right column cards */}
          <motion.div variants={item} className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {content.roles.slice(0, 4).map((role, idx) => (
                <Link
                  key={`${role.title}-${idx}`}
                  href={role.href.startsWith('/') ? role.href : `/${locale}${role.href}`}
                  className="group block"
                >
                  <div
                    className={cn(
                      'h-full rounded-3xl bg-white border border-bontera-grey-200 shadow-sm px-7 py-7',
                      'transition-all duration-300',
                      'hover:-translate-y-1 hover:shadow-md hover:border-bontera-navy-200'
                    )}
                  >
                    {/* Role title - Navy for emphasis */}
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-bontera-navy-600">
                      {role.title}
                    </div>

                    {/* Description - Grey for body text */}
                    <p className="mt-4 text-sm leading-relaxed text-bontera-grey-600 line-clamp-4">
                      {role.description}
                    </p>

                    {/* Link text - Navy for action */}
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 group-hover:text-bontera-navy-700">
                      <span>See details</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Highlight card - Dark grey background (not navy, per dark section rule) */}
              <Link
                href={content.highlight.href.startsWith('/') ? content.highlight.href : `/${locale}${content.highlight.href}`}
                className="group block sm:col-span-2"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-bontera-grey-800 border border-bontera-grey-700 shadow-sm px-8 py-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Texture */}
                  <div className="absolute inset-0 pattern-bontera-lines opacity-[0.08]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />

                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase text-bontera-grey-300">
                      {content.highlight.title}
                    </div>

                    <p className="mt-4 text-white/90 leading-relaxed max-w-2xl">
                      {content.highlight.description}
                    </p>

                    {/* CTA - Navy button stands out on grey background */}
                    <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-bontera-navy-600 text-white px-6 py-3 font-semibold transition-all duration-300 group-hover:bg-bontera-navy-700 shadow-lg">
                      <span>{content.highlight.ctaLabel}</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA button - Navy as primary action */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 lg:mt-14 flex justify-center"
        >
          <Link
            href={content.bottomCta.href.startsWith('/') ? content.bottomCta.href : `/${locale}${content.bottomCta.href}`}
            className="group inline-flex items-center gap-3 rounded-full bg-bontera-navy-600 text-white px-8 py-4 font-semibold shadow-md hover:bg-bontera-navy-700 transition-colors"
          >
            <span>{content.bottomCta.label}</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}