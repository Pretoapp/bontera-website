// src/app/[locale]/careers/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - CAREERS PAGE
// Comprehensive careers page with job listings, culture, and benefits
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CareersFilters from "./CareersFilters";
import { jobListings, departments, locations } from "@/data/jobs";


/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ department?: string; location?: string }>;
};

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careersPage" });


  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const benefits = [
  {
    key: "health",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    key: "retirement",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "learning",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    key: "vacation",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
  },
  {
    key: "flexibility",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "growth",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

const cultureValues = [
  { key: "innovation", image: "/images/culture/innovation.jpg" },
  { key: "teamwork", image: "/images/culture/teamwork.jpg" },
  { key: "excellence", image: "/images/culture/excellence.jpg" },
  { key: "safety", image: "/images/culture/safety.jpg" },
];

const testimonials = [
  {
    key: "engineer",
    name: "Ahmed Al-Rashid",
    role: "Senior Structural Engineer",
    years: "6 years at Bontera",
    image: "/images/team/testimonial-1.jpg",
  },
  {
    key: "manager",
    name: "Sarah Chen",
    role: "Project Manager",
    years: "4 years at Bontera",
    image: "/images/team/testimonial-2.jpg",
  },
  {
    key: "architect",
    name: "Omar Hassan",
    role: "Lead Architect",
    years: "8 years at Bontera",
    image: "/images/team/testimonial-3.jpg",
  },
];



/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function CareersPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { department: deptFilter, location: locFilter } = await searchParams;
 const t = await getTranslations({ locale, namespace: "careersPage" });

  const isRTL = locale === "ku";

  // Filter jobs
  const filteredJobs = jobListings.filter((job) => {
    const matchesDept = !deptFilter || job.department === deptFilter;
    const matchesLoc = !locFilter || job.location === locFilter;
    return matchesDept && matchesLoc;
  });

  const featuredJobs = jobListings.filter((job) => job.featured);


  const departmentOptions = [
  { value: "", label: t("filters.allDepartments") },
  ...departments.slice(1).map((d) => ({
    value: d.key,
    label: t(`departments.${d.key}`),
  })),
];

const locationOptions = [
  { value: "", label: t("filters.allLocations") },
  ...locations.slice(1).map((l) => ({
    value: l.key,
    label: t(`locations.${l.key}`),
  })),
];


  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/careers-hero.jpg"
            alt="Careers at Bontera"
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
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{t("breadcrumb.careers")}</li>
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

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="group inline-flex items-center gap-3 bg-white text-bontera-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
              >
                {t("hero.viewJobs")}
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#culture"
                className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              >
                {t("hero.ourCulture")}
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap gap-8 lg:gap-12">
              {[
                { value: "1200+", key: "employees" },
                { value: "12", key: "countries" },
                { value: "50+", key: "openPositions" },
                { value: "4.8", key: "glassdoorRating" },
              ].map((stat) => (
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
          WHY JOIN US SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("whyJoin.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("whyJoin.title")}
              </h2>

              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />

              <p className="mt-8 text-lg text-bontera-grey-600 leading-relaxed">
                {t("whyJoin.description")}
              </p>

              {/* Key Points */}
              <div className="mt-10 space-y-6">
                {["impact", "growth", "team", "innovation"].map((point, i) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-bontera-navy-600 text-white flex items-center justify-center text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-bontera-grey-900">{t(`whyJoin.points.${point}.title`)}</h4>
                      <p className="mt-1 text-sm text-bontera-grey-600">{t(`whyJoin.points.${point}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/careers-team-1.jpg"
                      alt="Bontera team"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/careers-team-2.jpg"
                      alt="Bontera team"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/careers-team-3.jpg"
                      alt="Bontera team"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/careers-team-4.jpg"
                      alt="Bontera team"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-bontera-navy-600 text-white p-6 shadow-2xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm text-bontera-navy-200 mt-1">{t("whyJoin.yearsGrowing")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED POSITIONS
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-grey-400" />
                {t("featured.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
                {t("featured.title")}
              </h2>
            </div>
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors"
            >
              {t("featured.viewAll")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Featured Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/${locale}/careers/${job.id}`}
                className="group bg-bontera-navy-800 border border-bontera-grey-700 p-6 lg:p-8 hover:border-gray-500 transition-all duration-300"
              >
                {/* Featured Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    {t("featured.badge")}
                  </span>
                  <span className="text-bontera-grey-500 text-sm">
                    {t(`locations.${job.location}`)}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                  {job.title}
                </h3>

                {/* Department */}
                <p className="mt-2 text-bontera-grey-400">
                  {t(`departments.${job.department}`)}
                </p>

                {/* Details */}
                <div className="mt-6 pt-6 border-t border-bontera-grey-700 flex flex-wrap items-center gap-4 text-sm text-bontera-grey-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    {t(`jobTypes.${job.type}`)}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.experience}
                  </span>
                </div>

                {/* Apply Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-gray-300">
                  {t("featured.applyNow")}
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
          BENEFITS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("benefits.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("benefits.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("benefits.subtitle")}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.key}
                className="group p-8 bg-bontera-grey-50 border border-bontera-grey-200 hover:bg-white hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center group-hover:bg-bontera-navy-600 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-bontera-grey-900">
                  {t(`benefits.items.${benefit.key}.title`)}
                </h3>
                <p className="mt-3 text-bontera-grey-600 leading-relaxed">
                  {t(`benefits.items.${benefit.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CULTURE SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="culture" className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("culture.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("culture.title")}
              </h2>
            </div>
            <p className="text-lg text-bontera-grey-600 max-w-xl">
              {t("culture.description")}
            </p>
          </div>

          {/* Culture Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value) => (
              <div key={value.key} className="group relative h-80 overflow-hidden">
                <Image
                  src={value.image}
                  alt={t(`culture.values.${value.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white group-hover:-translate-y-2 transition-transform">
                    {t(`culture.values.${value.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-bontera-grey-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t(`culture.values.${value.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EMPLOYEE TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("testimonials.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("testimonials.title")}
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.key} className="bg-bontera-grey-50 p-8 border border-bontera-grey-200">
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-bontera-navy-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote */}
                <p className="text-lg text-bontera-grey-700 leading-relaxed italic">
                  &ldquo;{t(`testimonials.quotes.${testimonial.key}`)}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-bontera-grey-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-bontera-grey-900">{testimonial.name}</div>
                    <div className="text-sm text-bontera-grey-500">{testimonial.role}</div>
                    <div className="text-xs text-bontera-navy-600 mt-0.5">{testimonial.years}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ALL JOB OPENINGS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="openings" className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header with Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("openings.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("openings.title")}
              </h2>
            </div>

           <CareersFilters
  departmentValue={deptFilter || ""}
  locationValue={locFilter || ""}
  departmentOptions={departmentOptions}
  locationOptions={locationOptions}
/>

</div>


          {/* Results Count */}
          <div className="mb-8 pb-6 border-b border-bontera-grey-300">
            <p className="text-bontera-grey-600">
              {t("openings.showing", { count: filteredJobs.length })}
            </p>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/${locale}/careers/${job.id}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-bontera-grey-200 p-6 hover:border-bontera-navy-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                        {job.title}
                      </h3>
                      {job.featured && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold">
                          {t("featured.badge")}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-bontera-grey-500">
                      <span>{t(`departments.${job.department}`)}</span>
                      <span>•</span>
                      <span>{t(`locations.${job.location}`)}</span>
                      <span>•</span>
                      <span>{t(`jobTypes.${job.type}`)}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <span className="text-sm text-bontera-grey-400">
                      {new Date(job.posted).toLocaleDateString(locale, { month: "short", day: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 group-hover:text-bontera-navy-700">
                      {t("openings.apply")}
                      <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-bontera-grey-200">
              <svg className="w-16 h-16 mx-auto text-bontera-grey-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <h3 className="text-xl font-semibold text-bontera-grey-900 mb-2">{t("noJobs.title")}</h3>
              <p className="text-bontera-grey-600 mb-6">{t("noJobs.description")}</p>
              <Link
                href={`/${locale}/careers`}
                className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700"
              >
                {t("noJobs.clearFilters")}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/careers-cta.jpg"
            alt="Join Bontera"
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
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.browseJobs")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`mailto:careers@bontera.com`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.sendResume")}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}