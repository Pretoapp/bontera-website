// src/app/[locale]/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PREMIUM HOME PAGE
// Luxury construction company homepage with static data
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { getFeaturedProjects, projects } from "@/data/projects";
import HeroBackgroundSlider from "@/components/home/HeroSlider";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
};

type LocaleKey = "de" | "en" | "fr" | "nl" | "it" | "ku" | "tr";

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const loc = locale as LocaleKey;
  const t = await getTranslations({ locale });
  const tProjects = await getTranslations({ locale, namespace: "projectsPage" });
  const isRTL = locale === "ku";

  // Get featured projects from static data
  const featuredProjectsData = getFeaturedProjects();

  // Process projects for carousel
  const processedProjects = featuredProjectsData.slice(0, 6).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title[loc] || p.title.en,
    category: tProjects(`categories.${p.category}`),
    categorySlug: p.category,
    location: p.location[loc] || p.location.en,
    year: p.year,
    value: p.value,
    client: p.client,
    imageUrl: p.image || "/images/placeholder.jpg",
    href: `/${locale}/projects/${p.slug}`,
  }));

  // Get projects for the bento grid section
  const bentoProjects = projects.slice(0, 4).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title[loc] || p.title.en,
    category: tProjects(`categories.${p.category}`),
    categorySlug: p.category,
    location: p.location[loc] || p.location.en,
    year: p.year,
    imageUrl: p.image || "/images/placeholder.jpg",
    href: `/${locale}/projects/${p.slug}`,
  }));

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Cinematic Full-Screen
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <HeroBackgroundSlider
          slides={[
            { src: "/images/1.jpg", alt: "Bontera Construction" },
            { src: "/images/2.jpg", alt: "Bontera Construction" },
            { src: "/images/3.jpg", alt: "Bontera Construction" },
          ]}
          intervalMs={6500}
          fadeMs={900}
        />

        {/* Stepped navy overlay on the TEXT side (left) */}
        <div className="absolute inset-0 pointer-events-none z-[2]">
          {[
            { top: "0%", height: "22%", width: "28%" },
            { top: "22%", height: "28%", width: "40%" },
            { top: "50%", height: "26%", width: "50%" },
            { top: "76%", height: "24%", width: "60%" },
          ].map((s, i) => (
            <div
              key={i}
              className="absolute left-0 bg-bontera-navy-900/65"
              style={{ top: s.top, height: s.height, width: s.width }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "90px 90px",
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/35 via-transparent to-transparent" />
        </div>

        {/* Floating Stats - Right Side */}
        <div className="absolute top-32 right-8 lg:right-16 hidden lg:flex flex-col gap-6 z-20">
          {[
            { value: "25+", label: t("hero.stats.years") },
            { value: "500+", label: t("hero.stats.projects") },
            { value: "12", label: t("hero.stats.countries") },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="text-4xl font-light text-white tracking-tight">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-bontera-grey-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full pb-20 lg:pb-32">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {t("hero.eyebrow")}
            </span>

            <h1 className="mt-6 max-w-4xl">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[0.95] tracking-tight">
                {t("hero.titleLine1")}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
                  {t("hero.titleLine2")}
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/projects`}
                className="group inline-flex items-center gap-3 bg-white text-bontera-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-400 transition-all duration-300"
              >
                {t("hero.ctaPrimary")}
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VISION SECTION - Editorial Typography
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-44 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%231e3a5f' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("vision.eyebrow")}
              </span>
              <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("vision.headline")}
              </h2>
              <div className="mt-10 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />
              <p className="mt-10 text-xl lg:text-2xl text-bontera-grey-600 leading-relaxed max-w-2xl">
                {t("vision.description")}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {[
                { icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z", title: t("vision.features.innovation.title"), desc: t("vision.features.innovation.description") },
                { icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z", title: t("vision.features.heritage.title"), desc: t("vision.features.heritage.description") },
                { icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", title: t("vision.features.sustainability.title"), desc: t("vision.features.sustainability.description") },
              ].map((feature) => (
                <div key={feature.title} className="group p-6 bg-bontera-grey-50 border border-bontera-grey-200 hover:bg-white hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-bontera-navy-600 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">{feature.title}</h3>
                      <p className="mt-2 text-sm text-bontera-grey-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES SECTION - Dark Background
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 bg-bontera-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,95,0.4),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-gray-400 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-gray-400" />
                {t("services.eyebrow")}
              </span>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
                {t("services.headline")}
              </h2>
            </div>
            <Link href={`/${locale}/services`} className="group inline-flex items-center gap-3 text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors">
              {t("services.viewAll")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: "commercial", image: "/images/slide-2.jpg" },
              { key: "infrastructure", image: "/images/slide-3.jpg" },
              { key: "residential", image: "/images/careers-feature.jpg" },
              { key: "industrial", image: "/images/expertise-civil.jpg" },
              { key: "renovation", image: "/images/expertise-restoration.jpg" },
              { key: "consulting", image: "/images/expertise-building.jpg" },
            ].map((service) => (
              <Link key={service.key} href={`/${locale}/services/${service.key}`} className="group relative h-80 lg:h-96 overflow-hidden">
                <Image src={service.image} alt={t(`services.items.${service.key}.title`)} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-bontera-grey-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </div>
                <div className={`absolute top-8 ${isRTL ? "left-8" : "right-8"} w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300`}>
                  <svg className={`w-5 h-5 text-white ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PROJECTS CAROUSEL - Premium Section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("projects.eyebrow")}
              </span>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("projects.headline")}
              </h2>
            </div>
            <Link href={`/${locale}/projects`} className="group inline-flex items-center gap-3 text-bontera-navy-600 hover:text-bontera-navy-700 text-sm uppercase tracking-wider font-semibold transition-colors">
              {t("projects.viewAll")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Premium Carousel */}
          {processedProjects.length > 0 ? (
            <ProjectsCarousel
              projects={processedProjects}
              locale={locale}
              isRTL={isRTL}
              labels={{
                viewProject: t("projects.viewProject"),
                projectValue: t("projects.projectValue"),
                client: t("projects.client"),
                year: t("projects.year"),
              }}
            />
          ) : (
            <div className="text-center py-20 bg-bontera-grey-50 border border-bontera-grey-200">
              <p className="text-bontera-grey-600">{t("projects.noProjects")}</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT SHOWCASE - Bento Grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("projects.showcase.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("projects.showcase.headline")}
            </h2>
          </div>

          {bentoProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Featured Large Card */}
              {bentoProjects[0] && (
                <Link href={bentoProjects[0].href} className="group relative md:col-span-2 lg:row-span-2 h-[400px] lg:h-auto min-h-[500px] overflow-hidden bg-bontera-grey-200">
                  <Image src={bentoProjects[0].imageUrl} alt={bentoProjects[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="66vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/20 to-transparent" />
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold uppercase tracking-wider">{bentoProjects[0].category}</span>
                      <span className="text-white/70 text-sm">{bentoProjects[0].year}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">{bentoProjects[0].title}</h3>
                    {bentoProjects[0].location && (
                      <p className="text-bontera-grey-300 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {bentoProjects[0].location}
                      </p>
                    )}
                  </div>
                </Link>
              )}

              {/* Smaller Cards */}
              {bentoProjects.slice(1, 4).map((project) => (
                <Link key={project.id} href={project.href} className="group relative h-64 lg:min-h-[240px] overflow-hidden bg-bontera-grey-200">
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATISTICS SECTION - Bold Numbers
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "25+", label: t("stats.years"), suffix: "" },
              { value: "500", label: t("stats.projects"), suffix: "+" },
              { value: "98", label: t("stats.satisfaction"), suffix: "%" },
              { value: "1.2", label: t("stats.delivered"), suffix: "B$" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-5xl lg:text-7xl font-light text-white tracking-tight">
                  {stat.value}<span className="text-gray-400">{stat.suffix}</span>
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-bontera-grey-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY CHOOSE US - Split Screen
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          <div className="relative h-96 lg:h-auto order-2 lg:order-1">
            <Image src="/images/troy-mortier-eWkNrDoUHLQ-unsplash.jpg" alt="Bontera Team" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-bontera-navy-900/20" />
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12 bg-white p-6 lg:p-8 shadow-2xl max-w-md">
              <svg className="w-10 h-10 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-bontera-grey-700 leading-relaxed italic">{t("testimonial.quote")}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bontera-grey-200 overflow-hidden">
                  <Image src="/images/testimonial-avatar.jpg" alt="Client" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-bontera-grey-900">{t("testimonial.name")}</div>
                  <div className="text-sm text-bontera-grey-500">{t("testimonial.role")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center py-20 lg:py-28 px-6 lg:px-16 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("whyUs.eyebrow")}
              </span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">{t("whyUs.headline")}</h2>
              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">{t("whyUs.description")}</p>

              <div className="mt-10 space-y-6">
                {[
                  { title: t("whyUs.points.quality.title"), desc: t("whyUs.points.quality.description") },
                  { title: t("whyUs.points.timeline.title"), desc: t("whyUs.points.timeline.description") },
                  { title: t("whyUs.points.safety.title"), desc: t("whyUs.points.safety.description") },
                ].map((point, i) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-bontera-grey-900">{point.title}</h4>
                      <p className="mt-1 text-sm text-bontera-grey-600">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/${locale}/about`} className="mt-10 inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors">
                {t("whyUs.cta")}
                <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT CATEGORIES - Quick Links
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-navy-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-grey-400" />
              {t("projects.categories.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("projects.categories.headline")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["commercial", "residential", "infrastructure", "industrial", "renovation"].map((cat) => (
              <Link
                key={cat}
                href={`/${locale}/projects/category/${cat}`}
                className="group relative p-6 bg-bontera-navy-800 border border-bontera-grey-700 hover:border-gray-500 hover:bg-bontera-navy-700 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                  {tProjects(`categories.${cat}`)}
                </h3>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400 group-hover:text-gray-300">
                  {t("projects.categories.explore")}
                  <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION - Full Width Background
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta-construction.jpg" alt="Start your project" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-bontera-navy-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900 via-transparent to-bontera-navy-900" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">{t("cta.headline")}</h2>
          <p className="mt-6 text-xl text-bontera-grey-300 max-w-2xl mx-auto leading-relaxed">{t("cta.description")}</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300">
              {t("cta.buttonPrimary")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/quote`} className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300">
              {t("cta.buttonSecondary")}
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { icon: "ISO", label: "9001:2015" },
              { icon: "LEED", label: t("cta.certifications.leed") },
              { icon: "OSHA", label: t("cta.certifications.osha") },
            ].map((cert) => (
              <div key={cert.icon} className="flex items-center gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-xs font-bold">{cert.icon}</div>
                <span className="text-sm">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
