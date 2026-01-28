// src/app/[locale]/about/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - ABOUT PAGE
// A comprehensive company overview with rich visual storytelling
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
};

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   TIMELINE DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const milestones = [
  { year: "1999", key: "founding" },
  { year: "2005", key: "expansion" },
  { year: "2010", key: "international" },
  { year: "2015", key: "sustainability" },
  { year: "2020", key: "digital" },
  { year: "2024", key: "future" },
];

const coreValues = [
  {
    key: "transparency",
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    key: "reliability",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    key: "expertise",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    key: "integrated",
    icon: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
  },
  {
    key: "sustainability",
    icon: "M12 21c-4.5 0-8-3-8-7 0-6 8-11 8-11s8 5 8 11c0 4-3.5 7-8 7z",
  },
  {
    key: "valueCreation",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

const leadershipTeam = [
  { key: "ceo", image: "/images/team/ceo.jpg" },
  { key: "coo", image: "/images/team/coo.jpg" },
  { key: "cto", image: "/images/team/cto.jpg" },
  { key: "cfo", image: "/images/team/cfo.jpg" },
];

const certifications = [
  { name: "ISO 9001:2015", category: "Quality Management" },
  { name: "ISO 14001:2015", category: "Environmental Management" },
  { name: "ISO 45001:2018", category: "Occupational Health & Safety" },
  { name: "LEED Certified", category: "Green Building" },
  { name: "OSHA Certified", category: "Workplace Safety" },
  { name: "PMP Certified", category: "Project Management" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Cinematic Opening
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero-luxury.jpg"
            alt="Bontera Construction"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/80 via-transparent to-transparent" />
        </div>

        {/* Architectural Grid Pattern */}
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

        {/* Hero Content */}
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
                <li className="text-white font-medium">{t("breadcrumb.about")}</li>
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

            {/* Quick Stats */}
            <div className="mt-10 flex flex-wrap gap-8 lg:gap-12">
              {[
                { value: "20+", label: t("hero.stats.years") },
                { value: "40,000+", label: t("hero.stats.sqm") },
                { value: "120M€", label: t("hero.stats.budget") },
                { value: "7", label: t("hero.stats.languages") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-bontera-grey-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK NAVIGATION - Explore About Sections
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-20 bg-white border-b border-bontera-grey-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {[
              { href: `/${locale}/about/our-story`, label: t("quickNav.ourStory"), icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
              { href: `/${locale}/about/leadership`, label: t("quickNav.leadership"), icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
              { href: `/${locale}/about/values`, label: t("quickNav.values"), icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { href: `/${locale}/about/certifications`, label: t("quickNav.certifications"), icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
              { href: `/${locale}/about/partners`, label: t("quickNav.partners"), icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-bontera-grey-50 border border-bontera-grey-200 hover:bg-bontera-navy-600 hover:border-bontera-navy-600 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 text-bontera-navy-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-sm font-semibold text-bontera-grey-700 group-hover:text-white transition-colors uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          OUR STORY SECTION - Editorial Typography
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%231e3a5f' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("story.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("story.title")}
              </h2>

              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />

              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("story.paragraph1")}</p>
                <p>{t("story.paragraph2")}</p>
                <p>{t("story.paragraph3")}</p>
              </div>

              {/* Founder Quote */}
              <blockquote className="mt-10 pl-6 border-l-4 border-bontera-navy-600">
                <p className="text-xl italic text-bontera-grey-700">
                  &ldquo;{t("story.founderQuote")}&rdquo;
                </p>
                <footer className="mt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-bontera-grey-900">{t("story.founderName")}</span>
                    <span className="text-bontera-grey-500 ml-2">— {t("story.founderTitle")}</span>
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Image Composition */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about-story.jpg"
                  alt="Bontera story"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-bontera-navy-600 text-white p-6 lg:p-8 shadow-2xl max-w-xs">
                <div className="text-5xl lg:text-6xl font-bold">20+</div>
                <div className="text-lg font-medium mt-2">{t("story.yearsExcellence")}</div>
                <div className="mt-4 h-px bg-white/20" />
                <div className="mt-4 text-sm text-bontera-navy-200">
                  {t("story.since")} 2004
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-bontera-navy-200 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION & VISION SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white p-8 lg:p-12 shadow-sm border border-bontera-grey-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-4">
                {t("mission.title")}
              </h3>
              <p className="text-lg text-bontera-grey-600 leading-relaxed">
                {t("mission.description")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-bontera-navy-600 p-8 lg:p-12 text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-lg text-bontera-navy-100 leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CORE VALUES SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("values.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("values.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("values.subtitle")}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.key}
                className="group relative p-8 bg-bontera-grey-50 border border-bontera-grey-200 hover:bg-white hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-bontera-grey-100 group-hover:text-bontera-navy-50 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 flex items-center justify-center bg-bontera-navy-600 text-white group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="relative z-10 mt-6 text-xl font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                  {t(`values.items.${value.key}.title`)}
                </h3>
                <p className="relative z-10 mt-3 text-bontera-grey-600 leading-relaxed">
                  {t(`values.items.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TIMELINE SECTION - Company History
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-navy-900 overflow-hidden">
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
              {t("timeline.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("timeline.title")}
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bontera-grey-700 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="bg-bontera-navy-800 p-6 lg:p-8 border border-bontera-grey-700">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {t(`timeline.milestones.${milestone.key}.title`)}
                      </h3>
                      <p className="text-bontera-grey-400 leading-relaxed">
                        {t(`timeline.milestones.${milestone.key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-bontera-navy-900" />

                  {/* Empty Space */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LEADERSHIP SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("leadership.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("leadership.title")}
              </h2>
              <p className="mt-4 text-lg text-bontera-grey-600 max-w-2xl">
                {t("leadership.subtitle")}
              </p>
            </div>
            <Link
              href={`/${locale}/about/leadership`}
              className="group inline-flex items-center gap-3 text-bontera-navy-600 hover:text-bontera-navy-700 text-sm uppercase tracking-wider font-semibold transition-colors"
            >
              {t("leadership.viewAll")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Leadership Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.key} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-bontera-grey-100">
                  <Image
                    src={member.image}
                    alt={t(`leadership.members.${member.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-bontera-navy-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-bontera-navy-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                    {t(`leadership.members.${member.key}.name`)}
                  </h3>
                  <p className="text-sm text-bontera-grey-500 mt-1">
                    {t(`leadership.members.${member.key}.title`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CERTIFICATIONS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("certifications.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("certifications.title")}
              </h2>
              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">
                {t("certifications.description")}
              </p>

              <Link
                href={`/${locale}/about/certifications`}
                className="mt-8 inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                {t("certifications.viewAll")}
                <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group bg-white p-6 border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-50 text-bontera-navy-600 font-bold text-sm mb-4 group-hover:bg-bontera-navy-600 group-hover:text-white transition-colors">
                    {cert.name.split(" ")[0]}
                  </div>
                  <h4 className="font-semibold text-bontera-grey-900 text-sm">{cert.name}</h4>
                  <p className="text-xs text-bontera-grey-500 mt-1">{cert.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GLOBAL PRESENCE SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Map / Image */}
            <div className="relative aspect-[4/3] bg-bontera-grey-100 overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/moto.jpg"
                alt="Global presence"
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* Overlay with location markers */}
              <div className="absolute inset-0 bg-bontera-navy-900/40" />
              
              {/* Location Indicators */}
              <div className="absolute inset-0 p-8">
                {[
                  { top: "20%", left: "15%", label: "North America" },
                  { top: "35%", left: "45%", label: "Europe" },
                  { top: "50%", left: "35%", label: "Middle East" },
                  { top: "60%", left: "70%", label: "Asia Pacific" },
                ].map((location) => (
                  <div
                    key={location.label}
                    className="absolute"
                    style={{ top: location.top, left: location.left }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("global.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("global.title")}
              </h2>
              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">
                {t("global.description")}
              </p>

              {/* Regional Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
          { value: "20+", label: t("hero.stats.years") },
  { value: "40,000+", label: t("hero.stats.sqm") },
  { value: "120M€", label: t("hero.stats.budget") },
  { value: "7", label: t("hero.stats.languages") }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-bontera-grey-50 border border-bontera-grey-200">
                    <div className="text-2xl lg:text-3xl font-semibold text-bontera-navy-600">{stat.value}</div>
                    <div className="text-sm text-bontera-grey-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt="Start your project"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bontera-navy-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900 via-transparent to-bontera-navy-900" />
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
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.contactUs")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.joinTeam")}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}