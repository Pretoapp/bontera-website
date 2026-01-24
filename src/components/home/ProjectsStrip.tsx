'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export type ProjectStripItem = {
  id: string;
  title: string;
  href: string;
  imageUrl: string; // pass a ready URL string (Sanity urlFor on server)
};

type Props = {
  title: string; // ex: "QUELQUES PROJETS"
  ctaLabel: string; // ex: "VOIR LE PROJET"
  projects: ProjectStripItem[];
};

export default function ProjectsStrip({ title, ctaLabel, projects }: Props) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
       <h2 className="text-center text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.18em] leading-tight">
  <span className="relative inline-block overflow-hidden text-white bg-gradient-to-b from-bontera-navy-800 to-bontera-navy-900 px-5 py-3 sm:px-6 sm:py-3.5 rounded-[22px] ring-1 ring-bontera-grey-200/70 shadow-[0_18px_55px_rgba(15,23,42,0.14)] antialiased">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_18%_22%,rgba(255,255,255,0.14),transparent_55%)]"
    />
    <span className="relative">{title}</span>
  </span>
</h2>


        {/* subtle divider (grey-only) */}
       <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-bontera-navy-600" />

      </div>

      {/* Full-width strip */}
      <div className="mt-12">
        <div className="overflow-x-auto">
          <ul
            className="
              grid grid-flow-col gap-0
              auto-cols-[86%] sm:auto-cols-[58%] lg:auto-cols-[38%] xl:auto-cols-[20%]
              snap-x snap-mandatory
              px-6 lg:px-8
            "
          >
            {projects.map((p) => (
              <li key={p.id} className="snap-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group relative h-[340px] sm:h-[380px] lg:h-[440px]
                    overflow-hidden
                    border-l border-bontera-grey-200
                    bg-bontera-grey-100
                  "
                >
                  {/* Image */}
                  <div className="absolute inset-0 relative">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 38vw, (min-width: 640px) 58vw, 86vw"
                      priority={false}
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Grey accent bar on hover (NO BLUE) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-0 h-full w-1 bg-bontera-grey-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Click target */}
                  <Link
                    href={p.href}
                    className="absolute inset-0 flex items-end"
                    aria-label={`${ctaLabel}: ${p.title}`}
                  >
                    <div className="w-full p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-white font-extrabold uppercase tracking-wide text-base sm:text-lg line-clamp-2 drop-shadow">
                            {p.title}
                          </div>

                          <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                              {ctaLabel}
                            </span>
                            <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </div>
                        </div>

                        {/* Corner badge (grey-tuned) */}
                        <div className="shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                            Bontera
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
