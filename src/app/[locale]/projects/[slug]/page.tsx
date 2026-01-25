// src/app/[locale]/projects/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PROJECT DETAIL PAGE
// Premium individual project showcase with gallery and detailed information
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjectBySlug, getRelatedProjects, type Project } from "@/data/projects";
import { locales } from "@/lib/i18n/config";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

type LocaleKey = "de" | "en" | "fr" | "nl" | "it" | "ku" | "tr";

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PARAMS
   ═══════════════════════════════════════════════════════════════════════════ */

import { projects } from "@/data/projects";

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  const loc = locale as LocaleKey;

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = project.title[loc] || project.title.en;
  const description = project.description[loc] || project.description.en;

  return {
    title: `${title} | Bontera Projects`,
    description: description || `${title} - A Bontera construction project`,
    openGraph: {
      title: `${title} | Bontera Projects`,
      description: description || `${title} - A Bontera construction project`,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  const loc = locale as LocaleKey;

  if (!project) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const tCategories = await getTranslations({ locale, namespace: "projectsPage" });
  const isRTL = locale === "ku";

  // Extract project data with locale
  const title = project.title[loc] || project.title.en;
  const category = tCategories(`categories.${project.category}`);
  const description = project.description[loc] || project.description.en;
  const location = project.location[loc] || project.location.en;
  const scope = project.scope ? (project.scope[loc] || project.scope.en) : "";

  // Get related projects
  const relatedProjects = getRelatedProjects(slug, project.category, 3);

  // Project details for the info grid
  const projectDetails = [
    { key: "client", value: project.client, icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
    { key: "location", value: location, icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
    { key: "year", value: project.year, icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
    { key: "value", value: project.value, icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { key: "duration", value: project.duration, icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
    { key: "size", value: project.size, icon: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" },
    { key: "status", value: project.status, icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { key: "teamSize", value: project.teamSize, icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  ].filter(d => d.value);

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-bontera-navy-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/70 via-transparent to-transparent" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(white 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li>
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href={`/${locale}/projects`} className="hover:text-white transition-colors">
                    {t("breadcrumb.projects")}
                  </Link>
                </li>
                <li>
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium truncate max-w-[200px]">{title}</li>
              </ol>
            </nav>

            {/* Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider">
                {category}
              </span>
              {project.status && (
                <span className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider ${
                  project.status === "completed"
                    ? "bg-emerald-500/90 text-white"
                    : project.status === "ongoing"
                    ? "bg-amber-500/90 text-white"
                    : "bg-blue-500/90 text-white"
                }`}>
                  {t(`status.${project.status}`)}
                </span>
              )}
              {project.featured && (
                <span className="px-4 py-2 bg-bontera-navy-500 text-white text-sm font-semibold uppercase tracking-wider">
                  {t("featured")}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {title}
              </span>
            </h1>

            {/* Location & Year */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-bontera-grey-300">
              {location && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-lg">{location}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="text-lg">{project.year}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span className="text-lg">{project.client}</span>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            {(project.value || project.size || project.duration) && (
              <div className="mt-10 flex flex-wrap gap-8 lg:gap-12">
                {project.value && (
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-white">{project.value}</div>
                    <div className="text-sm text-bontera-grey-400 mt-1 uppercase tracking-wider">{t("details.value")}</div>
                  </div>
                )}
                {project.size && (
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-white">{project.size}</div>
                    <div className="text-sm text-bontera-grey-400 mt-1 uppercase tracking-wider">{t("details.size")}</div>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-white">{project.duration}</div>
                    <div className="text-sm text-bontera-grey-400 mt-1 uppercase tracking-wider">{t("details.duration")}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">{t("scrollToExplore")}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT DETAILS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                  <span className="w-8 h-px bg-bontera-navy-600" />
                  {t("overview.eyebrow")}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                  {t("overview.title")}
                </h2>
                {description && (
                  <div className="mt-6 prose prose-lg max-w-none text-bontera-grey-600 leading-relaxed">
                    <p>{description}</p>
                  </div>
                )}
              </div>

              {/* Scope */}
              {scope && (
                <div className="mb-12 p-8 bg-bontera-grey-50 border-l-4 border-bontera-navy-600">
                  <h3 className="text-xl font-semibold text-bontera-grey-900 mb-4">{t("scope.title")}</h3>
                  <p className="text-bontera-grey-600 leading-relaxed">{scope}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-bontera-grey-900 mb-6">{t("servicesFeatures.title")}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-bontera-grey-50">
                        <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-bontera-grey-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Project Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-bontera-grey-50 p-8">
                  <h3 className="text-lg font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
                    {t("details.title")}
                  </h3>
                  <div className="space-y-6">
                    {projectDetails.map((detail) => (
                      <div key={detail.key} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-bontera-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={detail.icon} />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-bontera-grey-500 uppercase tracking-wider">{t(`details.${detail.key}`)}</span>
                          <p className="text-bontera-grey-900 font-medium mt-1">
                            {detail.key === "status" ? t(`status.${detail.value}`) : detail.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 p-8 bg-bontera-navy-50 border border-bontera-navy-100">
                  <h4 className="text-lg font-semibold text-bontera-grey-900 mb-2">{t("sidebar.cta.title")}</h4>
                  <p className="text-sm text-bontera-grey-600 mb-4">{t("sidebar.cta.description")}</p>
                  <Link
                    href={`/${locale}/quote`}
                    className="block w-full bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white text-center px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
                  >
                    {t("sidebar.cta.button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("gallery.eyebrow")}
                <span className="w-8 h-px bg-bontera-navy-600" />
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("gallery.title")}
              </h2>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {project.gallery.slice(0, 9).map((image, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden group ${
                    idx === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${title} - Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={idx === 0 ? "66vw" : "33vw"}
                  />
                  <div className="absolute inset-0 bg-bontera-navy-900/0 group-hover:bg-bontera-navy-900/30 transition-colors duration-300" />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-bontera-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          RELATED PROJECTS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      {relatedProjects.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                  <span className="w-8 h-px bg-bontera-navy-600" />
                  {t("related.eyebrow")}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                  {t("related.title")}
                </h2>
              </div>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700 transition-colors"
              >
                {t("related.viewAll")}
                <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Related Projects Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {relatedProjects.map((relProject) => {
                const relTitle = relProject.title[loc] || relProject.title.en;
                const relCategory = tCategories(`categories.${relProject.category}`);
                const relLocation = relProject.location[loc] || relProject.location.en;

                return (
                  <Link
                    key={relProject.id}
                    href={`/${locale}/projects/${relProject.slug}`}
                    className="group relative overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {relProject.image ? (
                        <Image
                          src={relProject.image}
                          alt={relTitle}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-bontera-grey-200" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/80 via-bontera-navy-900/20 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="text-xs text-white/80 uppercase tracking-wider mb-2">{relCategory}</span>
                        <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors line-clamp-2">
                          {relTitle}
                        </h3>
                        {relLocation && (
                          <p className="text-sm text-white/70 mt-2 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {relLocation}
                          </p>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-10 h-10 bg-white/0 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300`}>
                        <svg className={`w-5 h-5 text-white ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects-cta.jpg"
            alt="Start your project"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bontera-navy-900/90" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
            <span className="w-8 h-px bg-bontera-grey-400" />
            {t("cta.eyebrow")}
            <span className="w-8 h-px bg-bontera-grey-400" />
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-xl text-bontera-grey-300 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/quote`}
              className="group inline-flex items-center gap-3 bg-white hover:bg-bontera-grey-100 text-bontera-navy-900 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.startProject")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.contactUs")}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
