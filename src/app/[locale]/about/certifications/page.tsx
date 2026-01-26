// src/app/[locale]/about/certifications/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - CERTIFICATIONS PAGE
// Quality standards and industry certifications
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificationsPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const certifications = [
  { key: "iso9001", category: "quality", year: "2015" },
  { key: "iso14001", category: "environmental", year: "2018" },
  { key: "iso45001", category: "safety", year: "2020" },
  { key: "leed", category: "sustainability", year: "2019" },
  { key: "osha", category: "safety", year: "2016" },
  { key: "pmp", category: "management", year: "2017" },
];

const accreditations = [
  { key: "breeam", type: "Building Standards" },
  { key: "greenStar", type: "Sustainability" },
  { key: "wellBuilding", type: "Health & Wellness" },
  { key: "passivHaus", type: "Energy Efficiency" },
];

const safetyStats = [
  { value: "2.5M+", key: "safeHours" },
  { value: "99.8%", key: "compliance" },
  { value: "0", key: "incidents" },
  { value: "100%", key: "trained" },
];

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificationsPage" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/certifications-hero.jpg"
            alt="Bontera Certifications"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/70 to-bontera-navy-900/30" />
        </div>

        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
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
                  <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                    {t("breadcrumb.about")}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{t("breadcrumb.certifications")}</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {t("hero.eyebrow")}
            </span>

            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
                {t("hero.title")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("overview.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("overview.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("overview.paragraph1")}</p>
                <p>{t("overview.paragraph2")}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {safetyStats.map((stat) => (
                <div key={stat.key} className="bg-bontera-grey-50 p-6 lg:p-8 border border-bontera-grey-200">
                  <div className="text-3xl lg:text-4xl font-bold text-bontera-navy-600">{stat.value}</div>
                  <div className="text-sm text-bontera-grey-600 mt-2">{t(`overview.stats.${stat.key}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("certifications.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("certifications.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("certifications.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.key}
                className="group bg-white p-8 border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-bontera-navy-50 flex items-center justify-center group-hover:bg-bontera-navy-600 transition-colors">
                    <svg className="w-10 h-10 text-bontera-navy-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="text-sm text-bontera-grey-400">{t("certifications.since")} {cert.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                  {t(`certifications.items.${cert.key}.name`)}
                </h3>
                <p className="mt-2 text-sm text-bontera-navy-600 font-medium uppercase tracking-wider">
                  {t(`certifications.items.${cert.key}.category`)}
                </p>
                <p className="mt-4 text-bontera-grey-600 leading-relaxed">
                  {t(`certifications.items.${cert.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="relative py-24 lg:py-32 bg-bontera-navy-900 overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-grey-400" />
              {t("accreditations.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("accreditations.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-400">
              {t("accreditations.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc) => (
              <div
                key={acc.key}
                className="bg-bontera-navy-800 p-6 border border-bontera-grey-700 hover:border-gray-500 transition-colors text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(`accreditations.items.${acc.key}.name`)}
                </h3>
                <p className="text-sm text-bontera-grey-400 mt-1">{acc.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/quality-commitment.jpg"
                alt="Quality Commitment"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("commitment.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("commitment.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("commitment.paragraph1")}</p>
                <p>{t("commitment.paragraph2")}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {["quality", "safety", "environment"].map((badge) => (
                  <div key={badge} className="inline-flex items-center gap-2 bg-bontera-grey-100 px-4 py-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-bontera-grey-700">{t(`commitment.badges.${badge}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt="Build with confidence"
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
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.contactUs")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.viewProjects")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
