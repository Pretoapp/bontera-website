// src/app/[locale]/projects/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PROJECTS PAGE
// Portfolio showcase with filtering and dynamic project grid
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  projects,
  categoryInfo,
  getFeaturedProjects,
  getProjectDurationLocalized,
  getProjectValueLocalized,
  type Locale,
} from "@/data/projects";
import MediaFrame from "@/components/ProjectGallery";










/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; year?: string }>;
};



/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   CATEGORY DATA
   ═══════════════════════════════════════════════════════════════════════════ */

   

const categories = [
  { key: "all", slug: "" },
  { key: "commercial", slug: "commercial" },
  { key: "residential", slug: "residential" },
  { key: "infrastructure", slug: "infrastructure" },
  { key: "industrial", slug: "industrial" },
  { key: "renovation", slug: "renovation" },
   { key: "publicWorks", slug: "publicWorks"},
];

const featuredStats = [
  { value: "80+", key: "projectsCompleted" },
  { value: "40,000", key: "totalValue" },
  { value: "5", key: "countries" },
  { value: "98%", key: "onTimeDelivery" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ProjectsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category: categoryFilter } = await searchParams;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const isRTL = locale === "ku";
  const loc = locale as Locale;
  
  

  // Process projects from static data
const processedProjects = projects.map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title[loc] || p.title.en,
  category: t(`categories.${p.category}`),
  categorySlug: p.category,
  location: p.location[loc] || p.location.en,
  year: p.year,
  client: p.client,
  value: getProjectValueLocalized(p, loc),
  duration: getProjectDurationLocalized(p, loc),
  status: p.status,
  featured: p.featured,
  href: `/${locale}/projects/${p.slug}`,
  imageUrl: p.image,
}));


  // Filter by category
  const filteredProjects = categoryFilter
    ? processedProjects.filter((p) => p.categorySlug === categoryFilter)
    : processedProjects;

  // Get featured projects
  const featuredProjects = processedProjects.filter((p) => p.featured).slice(0, 3);
  const displayFeatured = featuredProjects.length > 0 ? featuredProjects : processedProjects.slice(0, 3);
  

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/projects/residentos-1-2.jpg"
            alt="Bontera Projects"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/70 to-bontera-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/80 via-transparent to-transparent" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
          {/* Breadcrumb (same behavior as Quote page) */}
<nav className="mb-2" aria-label="Breadcrumb">
  <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
    <li>
      <Link href={`/${locale}`} className="hover:text-white transition-colors">
        {t("breadcrumb.home")}
      </Link>
    </li>

    <li aria-hidden="true">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </li>

    <li className="text-white font-medium">
      <Link href={`/${locale}/projects`} className="hover:text-white transition-colors">
        {t("breadcrumb.projects")}
      </Link>
    </li>
  </ol>
</nav>


            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {t("hero.eyebrow")}
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {t("hero.title")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Stats Row */}
            <div className="mt-10 flex flex-wrap gap-8 lg:gap-12">
              {featuredStats.map((stat) => (
                <div key={stat.key}>
                  <div className="text-3xl lg:text-4xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-bontera-grey-400 mt-1">{t(`hero.stats.${stat.key}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PROJECTS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      {displayFeatured.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <div>
                <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                  <span className="w-8 h-px bg-bontera-navy-600" />
                  {t("featured.eyebrow")}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                  {t("featured.title")}
                </h2>
              </div>
              <p className="text-lg text-bontera-grey-600 max-w-xl">
                {t("featured.description")}
              </p>
            </div>

            {/* Featured Grid - Bento Style */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Large Featured Card */}
              {displayFeatured[0] && (
                <Link
                  href={displayFeatured[0].href}
                  className="group relative lg:row-span-2 h-[400px] lg:h-auto min-h-[500px] overflow-hidden bg-bontera-grey-100"
                >
                  <Image
                    src={displayFeatured[0].imageUrl}
                    alt={displayFeatured[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/30 to-transparent" />

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-bontera-navy-600 text-white text-xs font-semibold uppercase tracking-wider">
                      {t("featured.badge")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {displayFeatured[0].category}
                      </span>
                      <span className="text-white/70 text-sm">{displayFeatured[0].year}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                      {displayFeatured[0].title}
                    </h3>
                    {displayFeatured[0].location && (
                      <p className="text-bontera-grey-300 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {displayFeatured[0].location}
                      </p>
                    )}

                    {/* View Project Link */}
                    <div className="mt-6 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("featured.viewProject")}
                      <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}

              {/* Smaller Featured Cards */}
              <div className="grid gap-6 lg:gap-8">
                {displayFeatured.slice(1, 3).map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="group relative h-[240px] lg:h-auto min-h-[240px] overflow-hidden bg-bontera-grey-100"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="text-white/70 text-sm">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="text-bontera-grey-400 text-sm mt-2 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {project.location}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300`}>
                      <svg className={`w-5 h-5 text-white ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORY FILTER & ALL PROJECTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header with Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("allProjects.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("allProjects.title")}
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = categoryFilter === cat.slug || (!categoryFilter && cat.slug === "");
                return (
                  <Link
                    key={cat.key}
                    href={cat.slug ? `/${locale}/projects?category=${cat.slug}` : `/${locale}/projects`}
                    className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-bontera-navy-600 text-white"
                        : "bg-white text-bontera-grey-700 hover:bg-bontera-navy-50 hover:text-bontera-navy-600 border border-bontera-grey-200"
                    }`}
                  >
                    {t(`categories.${cat.key}`)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 pb-6 border-b border-bontera-grey-300">
            <p className="text-bontera-grey-600">
              {t("allProjects.showing", { count: filteredProjects.length })}
              {categoryFilter && (
                <span className="ml-2">
                  {t("allProjects.inCategory")}{" "}
                  <span className="font-semibold text-bontera-navy-600">
                    {t(`categories.${categoryFilter}`)}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Projects Grid */}
          <Suspense fallback={<ProjectsGridSkeleton />}>
            {filteredProjects.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="group bg-white border border-bontera-grey-200 hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-bontera-grey-200">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/60 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-bontera-navy-600 text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Status Badge */}
                      {project.status === "ongoing" && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            {t("status.ongoing")}
                          </span>
                        </div>
                      )}

                      {/* Year */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white/80 text-sm font-medium">{project.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      {project.location && (
                        <p className="mt-2 text-sm text-bontera-grey-500 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {project.location}
                        </p>
                      )}

                      {/* Project Details */}
                      <div className="mt-4 pt-4 border-t border-bontera-grey-200 flex items-center justify-between">
                        {project.value && (
                          <div>
                            <span className="text-xs text-bontera-grey-500 uppercase tracking-wider">{t("projectCard.value")}</span>
                            <p className="text-sm font-semibold text-bontera-grey-900">{project.value}</p>
                          </div>
                        )}
                        {project.client && (
                          <div className="text-right">
                            <span className="text-xs text-bontera-grey-500 uppercase tracking-wider">{t("projectCard.client")}</span>
                            <p className="text-sm font-semibold text-bontera-grey-900 truncate max-w-[120px]">{project.client}</p>
                          </div>
                        )}
                      </div>

                      {/* View Project */}
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 group-hover:text-bontera-navy-700">
                        {t("projectCard.viewDetails")}
                        <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-bontera-grey-200">
                <svg className="w-16 h-16 mx-auto text-bontera-grey-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-bontera-grey-900 mb-2">{t("noProjects.title")}</h3>
                <p className="text-bontera-grey-600 mb-6">{t("noProjects.description")}</p>
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700"
                >
                  {t("noProjects.viewAll")}
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </Suspense>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT TYPES BREAKDOWN
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-navy-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-grey-400" />
              {t("breakdown.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("breakdown.title")}
            </h2>
          </div>

          {/* Category Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: "commercial", count: "10+", icon: categoryInfo.commercial.icon },
              { key: "residential", count: "53+", icon: categoryInfo.residential.icon },
              { key: "infrastructure", count: "4+", icon: categoryInfo.infrastructure.icon },
              { key: "industrial", count: "3+", icon: categoryInfo.industrial.icon },
              { key: "renovation", count: "10+", icon: categoryInfo.renovation.icon },
            ].map((cat) => (
              <Link
                key={cat.key}
                href={`/${locale}/projects/category/${cat.key}`}
                className="group bg-bontera-navy-800 p-8 border border-bontera-grey-700 hover:border-gray-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-bontera-navy-700 flex items-center justify-center group-hover:bg-bontera-navy-600 transition-colors">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                    </svg>
                  </div>
                  <span className="text-4xl font-bold text-bontera-navy-500">{cat.count}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {t(`breakdown.categories.${cat.key}.title`)}
                </h3>
                <p className="text-bontera-grey-400 text-sm leading-relaxed">
                  {t(`breakdown.categories.${cat.key}.description`)}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-gray-300">
                  {t("breakdown.exploreCategory")}
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
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("cta.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("cta.title")}
              </h2>
              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">
                {t("cta.description")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/quote`}
                  className="group inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  {t("cta.startProject")}
                  <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 text-bontera-navy-600 border border-bontera-navy-600 hover:bg-bontera-navy-50 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  {t("cta.contactUs")}
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects.jpg"
                  alt="Start your project"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bontera-navy-100 -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-bontera-navy-200" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   LOADING SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

function ProjectsGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white border border-bontera-grey-200 overflow-hidden animate-pulse">
          <div className="h-56 bg-bontera-grey-200" />
          <div className="p-6">
            <div className="h-5 bg-bontera-grey-200 rounded w-3/4 mb-3" />
            <div className="h-4 bg-bontera-grey-100 rounded w-1/2 mb-4" />
            <div className="pt-4 border-t border-bontera-grey-200 flex justify-between">
              <div className="h-8 bg-bontera-grey-100 rounded w-20" />
              <div className="h-8 bg-bontera-grey-100 rounded w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
