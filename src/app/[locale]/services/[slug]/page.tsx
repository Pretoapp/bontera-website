// src/app/[locale]/services/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - SERVICE DETAIL PAGE
// Individual service pages with detailed information
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n/config";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const servicesData = {
  commercial: {
    key: "commercial",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    heroImage: "/images/services/commercial.jpg",
    galleryImages: [
      "/images/slide-2.jpg",
      "/images/expertise-building.jpg",
      "/images/services/commercial.jpg",
    ],
    features: ["officeBuildings", "retailCenters", "mixedUse", "hospitality"],
    stats: { projects: "150+", value: "$2.5B+", satisfaction: "99%" },
  },
  infrastructure: {
    key: "infrastructure",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    heroImage: "/images/services/infrastructure.jpg",
    galleryImages: [
      "/images/slide-3.jpg",
      "/images/expertise-civil.jpg",
      "/images/services/infrastructure.jpg",
    ],
    features: ["bridges", "highways", "utilities", "airports"],
    stats: { projects: "80+", value: "$1.8B+", satisfaction: "98%" },
  },
  residential: {
    key: "residential",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    heroImage: "/images/services/residential.jpg",
    galleryImages: [
      "/images/careers-feature.jpg",
      "/images/services/residential.jpg",
      "/images/slide-2.jpg",
    ],
    features: ["luxuryHomes", "apartments", "communities", "villas"],
    stats: { projects: "200+", value: "$1.2B+", satisfaction: "99%" },
  },
  industrial: {
    key: "industrial",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    heroImage: "/images/services/industrial.jpg",
    galleryImages: [
      "/images/expertise-civil.jpg",
      "/images/services/industrial.jpg",
      "/images/slide-3.jpg",
    ],
    features: ["factories", "warehouses", "logistics", "manufacturing"],
    stats: { projects: "120+", value: "$900M+", satisfaction: "98%" },
  },
  renovation: {
    key: "renovation",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    heroImage: "/images/services/renovation.jpg",
    galleryImages: [
      "/images/expertise-restoration.jpg",
      "/images/services/renovation.jpg",
      "/images/slide-2.jpg",
    ],
    features: ["historic", "modernization", "retrofitting", "restoration"],
    stats: { projects: "90+", value: "$400M+", satisfaction: "99%" },
  },
  consulting: {
    key: "consulting",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    heroImage: "/images/services/consulting.jpg",
    galleryImages: [
      "/images/expertise-building.jpg",
      "/images/services/consulting.jpg",
      "/images/slide-2.jpg",
    ],
    features: ["feasibility", "costEstimation", "riskAssessment", "compliance"],
    stats: { projects: "250+", value: "$50B+", satisfaction: "100%" },
  },
};

const validSlugs = Object.keys(servicesData);

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PARAMS
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const slug of validSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!validSlugs.includes(slug)) {
    return { title: "Service Not Found" };
  }

  const t = await getTranslations({ locale, namespace: "servicesPage" });

  return {
    title: `${t(`mainServices.items.${slug}.title`)} | Bontera`,
    description: t(`mainServices.items.${slug}.description`),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Validate slug
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const service = servicesData[slug as keyof typeof servicesData];
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });
  const isRTL = locale === "ku";

  // Get other services for the related section
  const otherServices = validSlugs.filter((s) => s !== slug).slice(0, 3);

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={t(`mainServices.items.${service.key}.title`)}
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
                  <Link href={`/${locale}/services`} className="hover:text-white transition-colors">
                    {t("breadcrumb.services")}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">
                  {t(`mainServices.items.${service.key}.title`)}
                </li>
              </ol>
            </nav>

            {/* Icon Badge */}
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
              </svg>
            </div>

            {/* Title */}
            <h1 className="max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {t(`mainServices.items.${service.key}.title`)}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t(`mainServices.items.${service.key}.description`)}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/quote`}
                className="group inline-flex items-center gap-3 bg-white text-bontera-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
              >
                {t("hero.cta")}
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              >
                {t("cta.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICE OVERVIEW SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("overview.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t(`mainServices.items.${service.key}.title`)}
              </h2>

              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />

              <p className="mt-8 text-lg text-bontera-grey-600 leading-relaxed">
                {t(`mainServices.items.${service.key}.description`)}
              </p>

              {/* Features List */}
              <div className="mt-10 space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-bontera-navy-600 text-white flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bontera-grey-900">
                        {t(`mainServices.items.${service.key}.features.${feature}`)}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { value: service.stats.projects, label: t("overview.stats.projects") },
                { value: service.stats.value, label: t("overview.stats.years").replace("Years", "Value") },
                { value: service.stats.satisfaction, label: t("overview.stats.satisfaction") },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-8 ${index % 2 === 0 ? "bg-bontera-navy-600 text-white" : "bg-bontera-grey-100 text-bontera-grey-900"}`}
                >
                  <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                  <div className={`text-sm mt-2 ${index % 2 === 0 ? "text-bontera-navy-200" : "text-bontera-grey-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-6">
            {service.galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={image}
                  alt={`${t(`mainServices.items.${service.key}.title`)} - ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-bontera-navy-900/20 group-hover:bg-bontera-navy-900/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROCESS SECTION
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
              {t("process.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("process.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-400">
              {t("process.subtitle")}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {["discovery", "planning", "execution", "delivery"].map((step, index) => (
              <div key={step} className="relative group">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-bontera-grey-700 z-0" />
                )}

                <div className="relative bg-bontera-navy-800 p-8 border border-bontera-grey-700 hover:border-gray-500 transition-all duration-300 z-10">
                  {/* Step Number */}
                  <div className="text-5xl lg:text-6xl font-bold text-gray-500 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`process.steps.${step}.title`)}
                  </h3>
                  <p className="text-bontera-grey-400 leading-relaxed">
                    {t(`process.steps.${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          OTHER SERVICES SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("mainServices.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("mainServices.title")}
              </h2>
            </div>
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-3 text-bontera-navy-600 hover:text-bontera-navy-700 text-sm uppercase tracking-wider font-semibold transition-colors"
            >
              {t("hero.cta")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {otherServices.map((serviceKey) => {
              const otherService = servicesData[serviceKey as keyof typeof servicesData];
              return (
                <Link
                  key={serviceKey}
                  href={`/${locale}/services/${serviceKey}`}
                  className="group bg-bontera-grey-50 border border-bontera-grey-200 hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={otherService.heroImage}
                      alt={t(`mainServices.items.${serviceKey}.title`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                      {t(`mainServices.items.${serviceKey}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-bontera-grey-600 line-clamp-2">
                      {t(`mainServices.items.${serviceKey}.description`)}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-bontera-navy-600">
                      {t("mainServices.learnMore")}
                      <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-cta.jpg"
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
              {t("cta.getQuote")}
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
