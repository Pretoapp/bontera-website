// src/app/[locale]/about/why-bontera/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - WHY BONTERA PAGE (Premium Construction Edition)
// Elevated layout: architectural grid, staggered reveals, cinematic sections,
// editorial asymmetry, premium card treatments, refined typography hierarchy.
// All text, translation keys, and brand colors preserved.
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

type NavId = "global" | "pillars" | "integrated";

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyBonteraPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV: Array<{
  id: NavId;
  labelKey: string;
  iconPath: string;
}> = [
  {
    id: "global",
    labelKey: "sections.global.title",
    iconPath: "M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z",
  },
  {
    id: "pillars",
    labelKey: "hero.title",
    iconPath: "M7 3h7l3 3v15H7V3z M9 11h6 M9 15h6 M9 7h3",
  },
  {
    id: "integrated",
    labelKey: "sections.integrated.title",
    iconPath:
      "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS (same safety pattern as Legal page)
   ═══════════════════════════════════════════════════════════════════════════ */

function isProbablyKeyString(v: string) {
  return (
    v.includes("whyBonteraPage.") ||
    /^(meta|breadcrumb|hero|nav|sections|cta|backToTop|quickNav)\./.test(v)
  );
}

function safeT(
  t: ((key: any) => string) & { has?: (key: string) => boolean },
  key: string,
  fallback: string
) {
  if (typeof t?.has === "function" && !t.has(key)) return fallback;

  try {
    const v = t(key as any);
    if (!v) return fallback;
    if (v === key) return fallback;
    if (isProbablyKeyString(v)) return fallback;
    return v;
  } catch {
    return fallback;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function WhyBonteraPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyBonteraPage" });

  const isRTL = locale === "ar" || locale === "ku";

  // Core copy with safe fallbacks
  const title = safeT(t, "hero.title", "Why Bontera");
  const subtitle = safeT(
    t,
    "hero.subtitle",
    "A premium delivery model that aligns stakeholders with one operating standard."
  );

  const metaDesc = safeT(
    t,
    "meta.description",
    "Structured execution, clear accountability, premium outcomes."
  );

  const breadcrumbHome = safeT(t, "breadcrumb.home", "Home");
  const breadcrumbAbout = safeT(t, "breadcrumb.about", "About");
  const breadcrumbCurrent = safeT(t, "breadcrumb.current", "Why Bontera");

  const globalTitle = safeT(t, "sections.global.title", "Global standard");
  const globalP1 = safeT(t, "sections.global.p1", "Clear scope, clear sequencing, clear decisions.");
  const globalP2 = safeT(t, "sections.global.p2", "Less friction, fewer surprises, stronger final quality.");

  const integratedTitle = safeT(t, "sections.integrated.title", "Integrated approach");
  const integratedP1 = safeT(
    t,
    "sections.integrated.p1",
    "A single operating system across all parties, designed for speed and control."
  );

  const contractorTitle = safeT(t, "sections.contractor.title", "Contractors");
  const contractorP1 = safeT(t, "sections.contractor.p1", "Operational clarity from plan to handover.");
  const contractorP2 = safeT(t, "sections.contractor.p2", "Delivery discipline that protects quality.");

  const developerTitle = safeT(t, "sections.developer.title", "Developers");
  const developerP1 = safeT(t, "sections.developer.p1", "Governance that protects timeline and budget.");
  const developerP2 = safeT(t, "sections.developer.p2", "Transparent reporting and decision accountability.");

  const brokerTitle = safeT(t, "sections.broker.title", "Brokers");
  const brokerP1 = safeT(t, "sections.broker.p1", "A premium experience clients can feel.");
  const brokerP2 = safeT(t, "sections.broker.p2", "Consistency that strengthens trust and reputation.");

  const ctaTitle = safeT(t, "cta.title", "Ready to build with Bontera?");
  const ctaDescription = safeT(
    t,
    "cta.description",
    "Tell us what you are planning. We will come back with a clear path and next steps."
  );

  const backToTop = safeT(t, "backToTop", "Back to top");

  // Nav labels
  const navLabelById: Record<NavId, string> = {
    global: safeT(t, "sections.global.title", globalTitle),
    pillars: safeT(t, "hero.title", title),
    integrated: safeT(t, "sections.integrated.title", integratedTitle),
  };

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Full-bleed cinematic with architectural grid overlay
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/leadership-hero.jpg"
            alt={safeT(t, "hero.imageAlt", "Bontera Why Bontera")}
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          {/* Deep cinematic gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/70 to-bontera-navy-900/10" />
          {/* Directional gradient */}
          <div
            className={[
              "absolute inset-0",
              isRTL
                ? "bg-gradient-to-l from-bontera-navy-900/90 via-bontera-navy-900/30 to-transparent"
                : "bg-gradient-to-r from-bontera-navy-900/90 via-bontera-navy-900/30 to-transparent",
            ].join(" ")}
          />
        </div>

        {/* Architectural blueprint grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Vertical accent line — architectural detail */}
        <div
          className={[
            "absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent",
            isRTL ? "right-[88px] lg:right-[120px]" : "left-[88px] lg:left-[120px]",
          ].join(" ")}
        />

        {/* Hero content */}
        <div id="top" className="relative z-10 w-full pb-20 lg:pb-28">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-12" aria-label={safeT(t, "breadcrumb.ariaLabel", "Breadcrumb")}>
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors duration-300">
                    {breadcrumbHome}
                  </Link>
                </li>
                <li aria-hidden="true" className={isRTL ? "rotate-180" : ""}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className="hover:text-white transition-colors duration-300">
                    {breadcrumbAbout}
                  </Link>
                </li>
                <li aria-hidden="true" className={isRTL ? "rotate-180" : ""}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{breadcrumbCurrent}</li>
              </ol>
            </nav>

            {/* Two-column hero layout for premium asymmetry */}
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 xl:col-span-6">
                {/* Eyebrow with decorative line */}
                <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
                  <span className="w-16 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
                  {safeT(t, "hero.eyebrow", breadcrumbCurrent)}
                </span>

                {/* Main title — large, tight, architectural */}
                <h1 className="mt-8">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[0.95] tracking-tight">
                    {title}
                  </span>
                </h1>

                {/* Decorative bar */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-1 w-16 bg-gray-500" />
                  <div className="h-1 w-8 bg-gray-500/40" />
                </div>

                {/* Subtitle */}
                <p className="mt-8 max-w-xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {/* Right column — nav anchors + contact */}
              <div className="lg:col-span-5 xl:col-span-6 lg:flex lg:flex-col lg:items-end">
                {/* Section navigation — vertical stack for premium feel */}
                <div className="flex flex-col gap-3 w-full lg:max-w-sm">
                  {NAV.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center gap-4 px-6 py-4 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/20 backdrop-blur-sm transition-all duration-500"
                    >
                      {/* Number index */}
                      <span className="text-[11px] font-semibold text-bontera-grey-500 tabular-nums tracking-widest">
                        0{i + 1}
                      </span>
                      <svg
                        className="w-5 h-5 text-bontera-grey-400 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.6}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                      </svg>
                      <span className="text-sm font-semibold text-bontera-grey-300 group-hover:text-white transition-colors duration-300 uppercase tracking-wider flex-1">
                        {navLabelById[item.id]}
                      </span>
                      <svg
                        className={`w-4 h-4 text-bontera-grey-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Contact line */}
                <div className="mt-8 text-sm text-bontera-grey-400 lg:text-right">
                  {safeT(t, "hero.contactLine", "For questions:")}{" "}
                  <a
                    className="text-white/90 hover:text-white underline underline-offset-4 transition-colors duration-300"
                    href="mailto:info@bontera.de"
                  >
                    info@bontera.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge — thin white accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK NAVIGATION BAND — Minimal, architectural
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-0 bg-white border-b border-bontera-grey-200">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-stretch divide-x divide-bontera-grey-200">
            {NAV.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex-1 flex items-center justify-center gap-3 px-6 py-6 lg:py-8 hover:bg-bontera-navy-600 transition-all duration-500"
              >
                <span className="text-[11px] font-semibold text-bontera-grey-400 group-hover:text-white/50 tabular-nums tracking-widest transition-colors duration-300">
                  0{i + 1}
                </span>
                <svg
                  className="w-5 h-5 text-bontera-navy-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
                <span className="text-sm font-semibold text-bontera-grey-700 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                  {navLabelById[item.id]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GLOBAL SECTION — Editorial asymmetric layout with overlapping card
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="global" className="relative py-28 lg:py-40 bg-white overflow-hidden scroll-mt-28">
        {/* Subtle architectural grid */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(30,58,95,0.5) 1px, transparent 1px), linear-gradient(rgba(30,58,95,0.5) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        {/* Vertical decorative line */}
        <div
          className={[
            "absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bontera-grey-200 to-transparent",
            isRTL ? "right-1/2" : "left-1/2",
          ].join(" ")}
          style={{ opacity: 0.4 }}
        />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section number — large, faded */}
          <div className="mb-16 lg:mb-20">
            <span className="text-[120px] lg:text-[180px] font-semibold text-bontera-grey-100 leading-none select-none" aria-hidden="true">
              01
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Text column */}
            <div className="lg:col-span-5 xl:col-span-5 lg:-mt-24">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-10 h-px bg-bontera-navy-600" />
                {safeT(t, "sections.global.eyebrow", navLabelById.global)}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-bontera-grey-900 leading-[1.05] tracking-tight">
                {globalTitle}
              </h2>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-20 bg-gradient-to-r from-gray-500 to-gray-400" />
                <div className="h-1 w-6 bg-gray-300" />
              </div>

              <div className="mt-10 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{globalP1}</p>
                <p>{globalP2}</p>
              </div>

              {/* Summary card */}
              <div className="mt-12 bg-bontera-grey-50 border border-bontera-grey-200 p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-bontera-navy-600 text-white flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-bontera-grey-900 uppercase tracking-wider">
                      {safeT(t, "sections.global.summaryTitle", "What you get")}
                    </div>
                    <ul className="mt-4 space-y-3 text-bontera-grey-600">
                      <li className="flex gap-3 items-start">
                        <span className="text-bontera-navy-600 mt-1.5 text-xs">●</span>
                        <span>{safeT(t, "sections.global.bullets.clarity", "Clarity in scope and deliverables.")}</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-bontera-navy-600 mt-1.5 text-xs">●</span>
                        <span>{safeT(t, "sections.global.bullets.control", "Control in timeline and coordination.")}</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-bontera-navy-600 mt-1.5 text-xs">●</span>
                        <span>{safeT(t, "sections.global.bullets.finish", "A premium finish you can stand behind.")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image composition — offset + overlapping card */}
            <div className="lg:col-span-7 xl:col-span-7 relative">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-bontera-grey-100">
                  <Image
                    src="/images/contact.jpg"
                    alt={safeT(t, "sections.global.imageAlt", "Bontera standards")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-bontera-navy-900/30" />
                </div>

                {/* Architectural corner accent (top-right) */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-bontera-grey-300 pointer-events-none" />

                {/* Floating premium card — overlaps image */}
                <div
                  className={[
                    "absolute -bottom-10 lg:-bottom-14 bg-bontera-navy-600 text-white p-8 lg:p-10 shadow-2xl max-w-sm z-10",
                    isRTL ? "-right-4 lg:-right-10" : "-left-4 lg:-left-10",
                  ].join(" ")}
                >
                  {/* Thin gold-like accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400" />

                  <div className="text-3xl lg:text-4xl font-semibold leading-tight">
                    {safeT(t, "sections.global.card.title", "Premium delivery")}
                  </div>
                  <div className="text-sm text-bontera-navy-200 mt-3 leading-relaxed">
                    {safeT(t, "sections.global.card.body", "A single standard, applied consistently across the project.")}
                  </div>
                  <div className="mt-5 h-px bg-white/15" />
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bontera-grey-100 transition-colors duration-300"
                    href="mailto:info@bontera.de"
                  >
                    {safeT(t, "sections.global.card.cta", "Email")} info@bontera.de
                    <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PILLARS SECTION — Elevated 3-column with alternating treatments
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pillars" className="relative py-28 lg:py-40 bg-bontera-grey-100 overflow-hidden scroll-mt-28">
        {/* Section header area */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              {/* Large section number */}
              <span className="text-[120px] lg:text-[180px] font-semibold text-bontera-grey-200/80 leading-none select-none block -mb-8 lg:-mb-14" aria-hidden="true">
                02
              </span>
            </div>
            <div className="lg:col-span-5">
              <div className="h-px bg-bontera-grey-300 mb-6" />
              <p className="text-sm text-bontera-grey-500 uppercase tracking-[0.25em] font-semibold">
                {safeT(t, "hero.eyebrow", breadcrumbCurrent)}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Staggered grid — first card taller, creating visual rhythm */}
          <div className="grid md:grid-cols-3 gap-0">
            {/* Pillar 1 — Contractors (white, raised) */}
            <article className="bg-white p-10 lg:p-14 shadow-sm border border-bontera-grey-200 md:-mt-8 relative">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-bontera-navy-600" />

              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-600 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-bontera-grey-400 uppercase tracking-[0.3em]">01</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-2">
                {contractorTitle}
              </h3>

              <div className="mt-6 h-px w-16 bg-bontera-grey-300" />

              <div className="mt-8 space-y-5 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{contractorP1}</p>
                <p>{contractorP2}</p>
              </div>

              <div className="mt-10 pt-8 border-t border-bontera-grey-200">
                <a
                  href="#integrated"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-700 hover:text-bontera-navy-900 transition-colors duration-300"
                >
                  {integratedTitle}
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Pillar 2 — Developers (navy, prominent) */}
            <article className="bg-bontera-navy-600 p-10 lg:p-14 text-white relative md:mt-8">
              {/* Architectural cross detail */}
              <div className="absolute top-6 right-6 w-8 h-8 opacity-20">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l3 3v15H7V3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 15h6M9 7h3" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.3em]">02</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                {developerTitle}
              </h3>

              <div className="mt-6 h-px w-16 bg-white/20" />

              <div className="mt-8 space-y-5 text-lg text-bontera-navy-100 leading-relaxed">
                <p>{developerP1}</p>
                <p>{developerP2}</p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15">
                <a
                  href="mailto:info@bontera.de"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bontera-grey-100 transition-colors duration-300"
                >
                  info@bontera.de
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Pillar 3 — Brokers (white) */}
            <article className="bg-white p-10 lg:p-14 shadow-sm border border-bontera-grey-200 md:-mt-4 relative">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-bontera-grey-300" />

              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-600 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-bontera-grey-400 uppercase tracking-[0.3em]">03</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-2">
                {brokerTitle}
              </h3>

              <div className="mt-6 h-px w-16 bg-bontera-grey-300" />

              <div className="mt-8 space-y-5 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{brokerP1}</p>
                <p>{brokerP2}</p>
              </div>

              <div className="mt-10 pt-8 border-t border-bontera-grey-200">
                <a
                  href="#global"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-700 hover:text-bontera-navy-900 transition-colors duration-300"
                >
                  {globalTitle}
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTEGRATED SECTION — Dark, premium, with centered white card
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="integrated" className="relative py-28 lg:py-40 bg-bontera-navy-900 overflow-hidden scroll-mt-28">
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/[0.06]" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-white/[0.06]" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Large section number */}
          <div className="absolute top-0 right-6 lg:right-16">
            <span className="text-[120px] lg:text-[180px] font-semibold text-white/[0.03] leading-none select-none" aria-hidden="true">
              03
            </span>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
            <span className="inline-flex items-center gap-4 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-10 h-px bg-bontera-grey-500" />
     {safeT(t, "sections.integrated.eyebrow", "Operating model")}



              <span className="w-10 h-px bg-bontera-grey-500" />
            </span>

            <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
              {integratedTitle}
            </h2>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-1 w-8 bg-gray-500/40" />
              <div className="h-1 w-16 bg-gray-500" />
              <div className="h-1 w-8 bg-gray-500/40" />
            </div>

            <p className="mt-8 text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {integratedP1}
            </p>
          </div>

          {/* Premium white card — centered, commanding */}
          <div className="max-w-5xl mx-auto relative">
            {/* Shadow frame behind card */}
            <div className="absolute -inset-3 bg-white/[0.03] border border-white/[0.06]" />

            <div className="relative bg-white shadow-2xl ring-1 ring-black/5 p-10 lg:p-14">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bontera-navy-600 via-gray-400 to-bontera-navy-600" />

              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                {/* Left column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-bontera-navy-600 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.32em] font-semibold text-bontera-grey-500">
                      {safeT(t, "sections.integrated.block1Title", "What gets aligned")}
                    </div>
                  </div>
                  <ul className="space-y-4 text-bontera-grey-600 leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.scope", "Scope and deliverables")}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.timeline", "Timelines and sequencing")}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.quality", "Quality gates and handover")}</span>
                    </li>
                  </ul>
                </div>

                {/* Vertical divider */}
                <div className="hidden md:block absolute top-14 bottom-14 left-1/2 w-px bg-bontera-grey-200" />

                {/* Right column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-bontera-grey-100 text-bontera-navy-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z" />
                      </svg>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.32em] font-semibold text-bontera-grey-500">
                      {safeT(t, "sections.integrated.block2Title", "What you can expect")}
                    </div>
                  </div>
                  <ul className="space-y-4 text-bontera-grey-600 leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.predictable", "Predictable delivery")}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.accountability", "Clear accountability")}</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-bontera-navy-600 font-semibold mt-1 text-xs">●</span>
                      <span>{safeT(t, "sections.integrated.bullets.premium", "Premium finishing standard")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom summary */}
              <div className="mt-12 pt-8 border-t border-bontera-grey-200 flex items-center gap-4">
                <div className="w-1 h-8 bg-bontera-navy-600" />
                <p className="text-sm text-bontera-grey-600 leading-relaxed">
                  {metaDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div className="mt-16 text-center">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 text-white/80 font-semibold hover:text-white transition-colors duration-300"
            >
              <span className="w-8 h-px bg-white/30 group-hover:bg-white/60 transition-colors duration-300" />
              {backToTop}
              <svg className="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION — Cinematic, full-bleed with architectural framing
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt={safeT(t, "cta.imageAlt", "Contact Bontera")}
            fill
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bontera-navy-900/88" />
          <div
            className={[
              "absolute inset-0",
              isRTL
                ? "bg-gradient-to-l from-bontera-navy-900 via-transparent to-bontera-navy-900"
                : "bg-gradient-to-r from-bontera-navy-900 via-transparent to-bontera-navy-900",
            ].join(" ")}
          />
        </div>

        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Architectural frame around CTA */}
          <div className="relative py-4">
            {/* Corner accents */}
            <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 w-16 h-16 border-t border-l border-white/20" />
            <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 border-t border-r border-white/20" />
            <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-16 h-16 border-b border-l border-white/20" />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 w-16 h-16 border-b border-r border-white/20" />

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gray-400/60" />
              <div className="h-1.5 w-1.5 bg-gray-400" />
              <div className="h-px w-12 bg-gray-400/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
              {ctaTitle}
            </h2>

            <p className="mt-8 text-xl text-bontera-grey-300 max-w-2xl mx-auto leading-relaxed">
              {ctaDescription}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-12 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-500 shadow-lg shadow-gray-500/20"
              >
                {safeT(t, "cta.contactUs", "Contact")}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="mailto:info@bontera.de"
                className="inline-flex items-center gap-3 text-white border border-white/30 hover:border-white hover:bg-white/[0.06] px-12 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-500"
              >
                info@bontera.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}