// src/app/[locale]/news/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - NEWS PAGE
// Company news, insights, and industry updates with filtering
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { newsArticles, getFeaturedNews } from "@/data/news";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
};

type LocaleKey = "de" | "en" | "fr" | "nl" | "it" | "ku" | "tr";

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "newsPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const categories = [
  { key: "all", slug: "" },
  { key: "companyNews", slug: "companyNews" },
  { key: "projects", slug: "projects" },
  { key: "industry", slug: "industry" },
  { key: "sustainability", slug: "sustainability" },
  { key: "awards", slug: "awards" },
  { key: "events", slug: "events" },
];

const ITEMS_PER_PAGE = 9;

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function NewsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const loc = locale as LocaleKey;
  const { category: categoryFilter, page: pageParam } = await searchParams;
  const t = await getTranslations({ locale, namespace: "newsPage" });
  const isRTL = locale === "ku";

  const currentPage = parseInt(pageParam || "1", 10);

  // Filter articles
  const filteredArticles = categoryFilter
    ? newsArticles.filter((article) => article.category === categoryFilter)
    : newsArticles;

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Featured articles (top 3)
  const featuredArticles = getFeaturedNews().slice(0, 3);

  const featuredInLogos = [
    { key: "forbes", src: "/images/press/forbes.png", alt: "Forbes" },
    { key: "bloomberg", src: "/images/press/bloomberg.png", alt: "Bloomberg" },
    {
      key: "ft",
      src: "/images/press/financial-times.png",
      alt: "Financial Times",
    },
    {
      key: "wsj",
      src: "/images/press/wsj.png",
      alt: "The Wall Street Journal",
    },
    { key: "wired", src: "/images/press/wired.png", alt: "WIRED" },
    {
      key: "architectural-digest",
      src: "/images/press/ad.png",
      alt: "Architectural Digest",
    },
  ];

  // Latest article for hero
  const heroArticle = featuredArticles[0];

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/news-hero.jpg"
            alt="Bontera News"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/70 to-bontera-navy-900/40" />
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
                  <Link
                    href={`/${locale}`}
                    className="hover:text-white transition-colors"
                  >
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="text-white font-medium">
                  {t("breadcrumb.news")}
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED STORIES SECTION
      ═══════════════════════════════════════════════════════════════════ */}
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

          {/* Featured Grid - Bento Layout */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main Featured Article */}
            {heroArticle && (
              <Link
                href={`/${locale}/news/${heroArticle.slug}`}
                className="group relative lg:row-span-2 h-[400px] lg:h-auto min-h-[500px] overflow-hidden bg-bontera-grey-100"
              >
                <Image
                  src={heroArticle.image || "/images/placeholder.jpg"}
                  alt={heroArticle.title[loc] || heroArticle.title.en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gray-500 text-white text-xs font-semibold uppercase tracking-wider">
                      {t(`categories.${heroArticle.category}`)}
                    </span>
                    <span className="text-white/70 text-sm">
                      {new Date(heroArticle.date).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors leading-tight">
                    {heroArticle.title[loc] || heroArticle.title.en}
                  </h3>

                  <p className="text-bontera-grey-300 text-lg leading-relaxed line-clamp-2 lg:line-clamp-3">
                    {heroArticle.excerpt[loc] || heroArticle.excerpt.en}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex items-center gap-2 text-white font-semibold group-hover:text-gray-200">
                      {t("readMore")}
                      <svg
                        className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t("minRead", { minutes: heroArticle.readTime })}
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary Featured Articles */}
            <div className="grid gap-6 lg:gap-8">
              {featuredArticles.slice(1, 3).map((article) => (
                <Link
                  key={article.id}
                  href={`/${locale}/news/${article.slug}`}
                  className="group relative h-[240px] lg:h-auto min-h-[240px] overflow-hidden bg-bontera-grey-100"
                >
                  <Image
                    src={article.image || "/images/placeholder.jpg"}
                    alt={article.title[loc] || article.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {t(`categories.${article.category}`)}
                      </span>
                      <span className="text-white/70 text-sm">
                        {new Date(article.date).toLocaleDateString(locale, {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors leading-tight">
                      {article.title[loc] || article.title.en}
                    </h3>

                    <div className="mt-3 flex items-center gap-3 text-sm">
                      <span className="text-white/60 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {t("minRead", { minutes: article.readTime })}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300`}
                  >
                    <svg
                      className={`w-5 h-5 text-white ${isRTL ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORY FILTER & ALL ARTICLES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header with Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("allNews.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("allNews.title")}
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive =
                  categoryFilter === cat.slug ||
                  (!categoryFilter && cat.slug === "");
                return (
                  <Link
                    key={cat.key}
                    href={
                      cat.slug
                        ? `/${locale}/news?category=${cat.slug}`
                        : `/${locale}/news`
                    }
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
              {t("allNews.showing", { count: filteredArticles.length })}
              {categoryFilter && (
                <span className="ml-2">
                  {t("allNews.inCategory")}{" "}
                  <span className="font-semibold text-bontera-navy-600">
                    {t(`categories.${categoryFilter}`)}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Articles Grid */}
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/${locale}/news/${article.slug}`}
                    className="group bg-white border border-bontera-grey-200 hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={article.image || "/images/placeholder.jpg"}
                        alt={article.title[loc] || article.title.en}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/40 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-bontera-navy-600 text-xs font-semibold">
                          {t(`categories.${article.category}`)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date & Read Time */}
                      <div className="flex items-center gap-3 text-sm text-bontera-grey-500 mb-3">
                        <span>
                          {new Date(article.date).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {t("minRead", { minutes: article.readTime })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors line-clamp-2 leading-tight">
                        {article.title[loc] || article.title.en}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-3 text-sm text-bontera-grey-600 line-clamp-2">
                        {article.excerpt[loc] || article.excerpt.en}
                      </p>

                      {/* Read More */}
                      <div className="mt-4 pt-4 border-t border-bontera-grey-200 flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 group-hover:text-bontera-navy-700">
                        {t("readMore")}
                        <svg
                          className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  {/* Previous */}
                  {currentPage > 1 && (
                    <Link
                      href={`/${locale}/news?${categoryFilter ? `category=${categoryFilter}&` : ""}page=${currentPage - 1}`}
                      className="w-10 h-10 flex items-center justify-center border border-bontera-grey-300 text-bontera-grey-600 hover:bg-bontera-navy-600 hover:text-white hover:border-bontera-navy-600 transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 ${isRTL ? "" : "rotate-180"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Link
                        key={page}
                        href={`/${locale}/news?${categoryFilter ? `category=${categoryFilter}&` : ""}page=${page}`}
                        className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
                          page === currentPage
                            ? "bg-bontera-navy-600 text-white"
                            : "border border-bontera-grey-300 text-bontera-grey-600 hover:bg-bontera-navy-600 hover:text-white hover:border-bontera-navy-600"
                        }`}
                      >
                        {page}
                      </Link>
                    ),
                  )}

                  {/* Next */}
                  {currentPage < totalPages && (
                    <Link
                      href={`/${locale}/news?${categoryFilter ? `category=${categoryFilter}&` : ""}page=${currentPage + 1}`}
                      className="w-10 h-10 flex items-center justify-center border border-bontera-grey-300 text-bontera-grey-600 hover:bg-bontera-navy-600 hover:text-white hover:border-bontera-navy-600 transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white border border-bontera-grey-200">
              <svg
                className="w-16 h-16 mx-auto text-bontera-grey-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-bontera-grey-900 mb-2">
                {t("noArticles.title")}
              </h3>
              <p className="text-bontera-grey-600 mb-6">
                {t("noArticles.description")}
              </p>
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700"
              >
                {t("noArticles.viewAll")}
                <svg
                  className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER SIGNUP SECTION
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

        <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
            <span className="w-8 h-px bg-bontera-grey-400" />
            {t("newsletter.eyebrow")}
            <span className="w-8 h-px bg-bontera-grey-400" />
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            {t("newsletter.title")}
          </h2>

          <p className="mt-6 text-xl text-bontera-grey-300 max-w-2xl mx-auto">
            {t("newsletter.description")}
          </p>

          {/* Newsletter Form */}
          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold uppercase tracking-wider transition-colors"
            >
              {t("newsletter.subscribe")}
            </button>
          </form>

          <p className="mt-4 text-sm text-bontera-grey-500">
            {t("newsletter.privacy")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRESS & MEDIA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════════
    PRESS & MEDIA SECTION
═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("media.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("media.title")}
              </h2>

              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">
                {t("media.description")}
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-bontera-grey-500">
                      {t("media.email")}
                    </p>
                    <a
                      href="mailto:media@bontera.de"
                      className="text-lg font-semibold text-bontera-navy-600 hover:text-bontera-navy-700"
                    >
                      media@bontera.de
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-bontera-grey-500">
                      {t("media.phone")}
                    </p>
                    <a
                      href="tel:+49301234567890"
                      className="text-lg font-semibold text-bontera-grey-900"
                    >
                      +32 477 37 75 44
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Press Kit */}
              {/* Download Press Kit (static file) */}
              {/* Download Press Kit */}
              <div className="mt-10">
                <a
                  href="/press-kit/Bontera-Press-Kit.pdf"
                  download
                  className="group inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  {t("media.downloadKit")}
                </a>
              </div>
            </div>

            {/* Press Logos (second column) */}
            <div className="bg-bontera-grey-50 p-8 lg:p-12 border border-bontera-grey-200">
              <h3 className="text-lg font-semibold text-bontera-grey-900 mb-8">
                {t("media.featuredIn")}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
                {featuredInLogos.map((logo) => (
                  <div
                    key={logo.key}
                    className="relative h-12 w-full flex items-center justify-center"
                    aria-label={logo.alt}
                    title={logo.alt}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
