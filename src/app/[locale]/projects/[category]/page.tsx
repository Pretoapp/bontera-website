// src/app/[locale]/projects/[category]/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PROJECT CATEGORY PAGE
// Filtered projects by category with dedicated pages
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { client, urlFor } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";
import { locales } from "@/lib/i18n/config";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

type LocalizedText = string | Record<string, string>;

type Project = {
  _id: string;
  slug?: string | { current?: string };
  slugCurrent?: string;
  title?: LocalizedText;
  category?: LocalizedText;
  location?: LocalizedText;
  year?: string;
  client?: LocalizedText;
  value?: string;
  duration?: string;
  status?: string;
  mainImage?: SanityImageSource;
  image?: SanityImageSource;
  coverImage?: SanityImageSource;
  heroImage?: SanityImageSource;
  featured?: boolean;
};

/* ═══════════════════════════════════════════════════════════════════════════
   CATEGORY DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const categoryData: Record<string, {
  key: string;
  icon: string;
  heroImage: string;
  filterTerms: string[];
}> = {
  commercial: {
    key: "commercial",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    heroImage: "/images/services/commercial.jpg",
    filterTerms: ["commercial", "office", "retail", "hospitality", "hotel", "mall", "gewerbebau", "commercial", "commerciale", "ticari", "bazirganî"],
  },
  residential: {
    key: "residential",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    heroImage: "/images/services/residential.jpg",
    filterTerms: ["residential", "wohnungsbau", "résidentiel", "residenziale", "residentieel", "konut", "niştecîh", "home", "villa", "apartment"],
  },
  industrial: {
    key: "industrial",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    heroImage: "/images/services/industrial.jpg",
    filterTerms: ["industrial", "industriebau", "industriel", "industriale", "industrieel", "endüstriyel", "pîşesazî", "factory", "warehouse", "manufacturing"],
  },
  "public-works": {
    key: "publicWorks",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    heroImage: "/images/services/infrastructure.jpg",
    filterTerms: ["public", "government", "civic", "öffentlich", "publique", "pubblico", "openbaar", "kamu", "giştî", "municipal"],
  },
};

const validCategories = Object.keys(categoryData);

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PARAMS
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const category of validCategories) {
      params.push({ locale, category });
    }
  }
  return params;
}

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;

  if (!validCategories.includes(category)) {
    return { title: "Category Not Found" };
  }

  const categoryInfo = categoryData[category];
  const t = await getTranslations({ locale, namespace: "projectsPage" });

  return {
    title: `${t(`categories.${categoryInfo.key}`)} | Bontera`,
    description: t(`breakdown.categories.${categoryInfo.key}.description`),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */

function pickLocalized(text: LocalizedText | undefined, locale: string, fallback = "") {
  if (!text) return fallback;
  if (typeof text === "string") return text;
  return text[locale] ?? text.en ?? text.fr ?? fallback;
}

function pickSlug(input: any): string | null {
  if (!input) return null;
  if (typeof input === "string") return input;
  if (typeof input?.current === "string") return input.current;
  return null;
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA FETCHING
   ═══════════════════════════════════════════════════════════════════════════ */

async function getProjects(locale: string): Promise<Project[]> {
  try {
    const projects = await client.fetch(projectsQuery, { locale });
    return Array.isArray(projects) ? projects : [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ProjectCategoryPage({ params }: Props) {
  const { locale, category } = await params;

  // Validate category
  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryInfo = categoryData[category];
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const isRTL = locale === "ku";

  const allProjects = await getProjects(locale);

  // Process and filter projects by category
  const processedProjects = allProjects.map((p) => {
    const slug = p.slugCurrent ?? pickSlug(p.slug);
    if (!slug) return null;
    const img = p.mainImage ?? p.image ?? p.coverImage ?? p.heroImage;
    const categoryValue = pickLocalized(p.category, locale, "Construction");

    return {
      id: p._id,
      slug,
      title: pickLocalized(p.title, locale, "Project"),
      category: categoryValue,
      categorySlug: categoryValue.toLowerCase().replace(/\s+/g, "-"),
      location: pickLocalized(p.location, locale, ""),
      year: p.year ?? "2024",
      client: pickLocalized(p.client, locale, ""),
      value: p.value ?? "",
      duration: p.duration ?? "",
      status: p.status ?? "completed",
      featured: p.featured ?? false,
      href: `/${locale}/projects/${slug}`,
      imageUrl: img ? urlFor(img).width(1200).height(800).url() : "/images/placeholder.jpg",
    };
  }).filter(Boolean) as NonNullable<ReturnType<typeof allProjects.map>[number]>[];

  // Filter by category using multiple terms
  const filteredProjects = processedProjects.filter((p) => {
    const categoryLower = p.category.toLowerCase();
    return categoryInfo.filterTerms.some(term =>
      categoryLower.includes(term.toLowerCase())
    );
  });

  // Other categories for navigation
  const otherCategories = validCategories.filter(c => c !== category);

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={categoryInfo.heroImage}
            alt={t(`categories.${categoryInfo.key}`)}
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
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href={`/${locale}/projects`} className="hover:text-white transition-colors">
                    {t("breadcrumb.projects")}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{t(`categories.${categoryInfo.key}`)}</li>
              </ol>
            </nav>

            {/* Icon Badge */}
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={categoryInfo.icon} />
              </svg>
            </div>

            {/* Title */}
            <h1 className="max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
                {t(`breakdown.categories.${categoryInfo.key}.title`)}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t(`breakdown.categories.${categoryInfo.key}.description`)}
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{filteredProjects.length}</div>
                <div className="text-sm text-bontera-grey-400">{t("allProjects.showing", { count: filteredProjects.length }).replace(/\d+/, "").trim()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORY NAVIGATION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-bontera-grey-200 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            <Link
              href={`/${locale}/projects`}
              className="px-5 py-2.5 text-sm font-medium bg-white text-bontera-grey-700 hover:bg-bontera-navy-50 hover:text-bontera-navy-600 border border-bontera-grey-200 whitespace-nowrap transition-all"
            >
              {t("categories.all")}
            </Link>
            {validCategories.map((cat) => {
              const catInfo = categoryData[cat];
              const isActive = cat === category;
              return (
                <Link
                  key={cat}
                  href={`/${locale}/projects/${cat}`}
                  className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-bontera-navy-600 text-white"
                      : "bg-white text-bontera-grey-700 hover:bg-bontera-navy-50 hover:text-bontera-navy-600 border border-bontera-grey-200"
                  }`}
                >
                  {t(`categories.${catInfo.key}`)}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECTS GRID
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Results Count */}
          <div className="mb-8 pb-6 border-b border-bontera-grey-300">
            <p className="text-bontera-grey-600">
              {t("allProjects.showing", { count: filteredProjects.length })}
              <span className="ml-2">
                {t("allProjects.inCategory")}{" "}
                <span className="font-semibold text-bontera-navy-600">
                  {t(`categories.${categoryInfo.key}`)}
                </span>
              </span>
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
                    <div className="relative h-56 overflow-hidden">
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
          OTHER CATEGORIES SECTION
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-grey-400" />
              {t("breakdown.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("breakdown.title")}
            </h2>
          </div>

          {/* Other Category Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((cat) => {
              const catInfo = categoryData[cat];
              return (
                <Link
                  key={cat}
                  href={`/${locale}/projects/${cat}`}
                  className="group bg-bontera-navy-800 p-8 border border-bontera-grey-700 hover:border-gray-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-bontera-navy-700 flex items-center justify-center group-hover:bg-gray-500 transition-colors">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={catInfo.icon} />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {t(`breakdown.categories.${catInfo.key}.title`)}
                  </h3>
                  <p className="text-bontera-grey-400 text-sm leading-relaxed">
                    {t(`breakdown.categories.${catInfo.key}.description`)}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-gray-300">
                    {t("breakdown.exploreCategory")}
                    <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
          <div className="absolute inset-0 bg-bontera-navy-900/85" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-xl text-bontera-grey-300 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/quote`}
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
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
