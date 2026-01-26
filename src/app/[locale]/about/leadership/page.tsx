// src/app/[locale]/about/leadership/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - LEADERSHIP PAGE
// Meet the executive team driving Bontera's vision
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
  const t = await getTranslations({ locale, namespace: "leadershipPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const executiveTeam = [
  { key: "ceo", image: "/images/team/ceo.jpg" },
  { key: "coo", image: "/images/team/coo.jpg" },
  { key: "cto", image: "/images/team/cto.jpg" },
  { key: "cfo", image: "/images/team/cfo.jpg" },
];

const seniorLeadership = [
  { key: "vpEngineering", image: "/images/team/vp-engineering.jpg" },
  { key: "vpOperations", image: "/images/team/vp-operations.jpg" },
  { key: "vpBusiness", image: "/images/team/vp-business.jpg" },
  { key: "vpHR", image: "/images/team/vp-hr.jpg" },
  { key: "vpSafety", image: "/images/team/vp-safety.jpg" },
  { key: "vpSustainability", image: "/images/team/vp-sustainability.jpg" },
];

const boardMembers = [
  { key: "chairman", image: "/images/team/chairman.jpg" },
  { key: "director1", image: "/images/team/director1.jpg" },
  { key: "director2", image: "/images/team/director2.jpg" },
  { key: "director3", image: "/images/team/director3.jpg" },
];

export default async function LeadershipPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "leadershipPage" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leadership-hero.jpg"
            alt="Bontera Leadership"
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
                <li className="text-white font-medium">{t("breadcrumb.leadership")}</li>
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

      {/* Executive Team Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("executive.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("executive.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("executive.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member) => (
              <div key={member.key} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-bontera-grey-100">
                  <Image
                    src={member.image}
                    alt={t(`executive.members.${member.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/90 via-bontera-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-bontera-grey-200 leading-relaxed">
                      {t(`executive.members.${member.key}.bio`)}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-bontera-navy-600 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-xl font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                    {t(`executive.members.${member.key}.name`)}
                  </h3>
                  <p className="text-sm text-bontera-grey-500 mt-1">
                    {t(`executive.members.${member.key}.title`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-grey-400" />
                {t("philosophy.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
                {t("philosophy.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-300 leading-relaxed">
                <p>{t("philosophy.paragraph1")}</p>
                <p>{t("philosophy.paragraph2")}</p>
              </div>

              <blockquote className="mt-10 pl-6 border-l-4 border-gray-500">
                <p className="text-xl italic text-white">
                  &ldquo;{t("philosophy.quote")}&rdquo;
                </p>
                <footer className="mt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-white">{t("philosophy.quoteAuthor")}</span>
                    <span className="text-bontera-grey-400 ml-2">— {t("philosophy.quoteTitle")}</span>
                  </cite>
                </footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "25+", label: t("philosophy.stats.experience") },
                { value: "500+", label: t("philosophy.stats.projects") },
                { value: "12", label: t("philosophy.stats.countries") },
                { value: "98%", label: t("philosophy.stats.satisfaction") },
              ].map((stat) => (
                <div key={stat.label} className="bg-bontera-navy-800 p-6 lg:p-8 border border-bontera-grey-700">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-400">{stat.value}</div>
                  <div className="text-sm text-bontera-grey-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("senior.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("senior.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("senior.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniorLeadership.map((member) => (
              <div key={member.key} className="group bg-white border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-5 p-6">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-bontera-grey-100">
                    <Image
                      src={member.image}
                      alt={t(`senior.members.${member.key}.name`)}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                      {t(`senior.members.${member.key}.name`)}
                    </h3>
                    <p className="text-sm text-bontera-grey-500 mt-1">
                      {t(`senior.members.${member.key}.title`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("board.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("board.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("board.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {boardMembers.map((member) => (
              <div key={member.key} className="group text-center">
                <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full bg-bontera-grey-100 border-4 border-bontera-grey-200 group-hover:border-bontera-navy-300 transition-colors">
                  <Image
                    src={member.image}
                    alt={t(`board.members.${member.key}.name`)}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-bontera-grey-900">
                  {t(`board.members.${member.key}.name`)}
                </h3>
                <p className="text-sm text-bontera-grey-500 mt-1">
                  {t(`board.members.${member.key}.title`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt="Join our team"
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
              href={`/${locale}/careers`}
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.joinTeam")}
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
