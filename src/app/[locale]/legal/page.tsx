// src/app/[locale]/legal/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - LEGAL PAGE
// Inspired by About page layout: cinematic hero, editorial sections, premium CTA
// Privacy + Terms + Cookies + FAQ
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import ClientFaqList from "./_clientFaqList";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
};

type NavId = "privacy" | "terms" | "cookies" | "faq";

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const FAQ_KEYS = ["timeline", "budget", "process", "warranty"] as const;

const NAV: Array<{
  id: NavId;
  labelKey: "privacy" | "terms" | "cookies" | "faq";
  iconPath: string;
}> = [
  {
    id: "privacy",
    labelKey: "privacy",
    iconPath:
      "M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z",
  },
  {
    id: "terms",
    labelKey: "terms",
    iconPath:
      "M7 3h7l3 3v15H7V3z M9 11h6 M9 15h6 M9 7h3",
  },
  {
    id: "cookies",
    labelKey: "cookies",
    iconPath:
      "M20 13a8 8 0 11-9-9 3 3 0 003 3 3 3 0 003 3 3 3 0 003 3z M9 10h.01 M12 13h.01 M8 14h.01 M14 10h.01",
  },
  {
    id: "faq",
    labelKey: "faq",
    iconPath:
      "M12 18h.01 M9.5 9a2.5 2.5 0 115 0c0 2-2.5 1.75-2.5 4 M12 22a10 10 0 100-20 10 10 0 000 20z",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

// Prevent raw keys like "legalPage.hero.title" from showing in UI.
function isProbablyKeyString(v: string) {
  return (
    v.includes("legalPage.") ||
    /^(meta|breadcrumb|hero|nav|cards|privacy|terms|cookies|faqBlock|backToTop|quickNav)\./.test(v)
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

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  const isRTL = locale === "ar" || locale === "ku";

  const title = safeT(t, "hero.title", "Legal + Privacy + Cookies + FAQ");
  const subtitle = safeT(
    t,
    "hero.subtitle",
    "Everything you need to know about site usage, data handling and frequently asked questions in one place."
  );

  const breadcrumbHome = safeT(t, "breadcrumb.home", "Home");
  const breadcrumbLegal = safeT(t, "breadcrumb.legal", "Legal");

  const navPrivacy = safeT(t, "nav.privacy", "Privacy");
  const navTerms = safeT(t, "nav.terms", "Terms");
  const navCookies = safeT(t, "nav.cookies", "Cookies");
  const navFaq = safeT(t, "nav.faq", "FAQ");

  const privacyTitle = safeT(t, "privacy.title", "Privacy Policy");
  const privacyBody = safeT(
    t,
    "privacy.body",
    "We collect only what is necessary to respond to your requests and improve your experience. We do not sell your data."
  );

  const termsTitle = safeT(t, "terms.title", "Terms of Use");
  const termsBody = safeT(
    t,
    "terms.body",
    "By using this website, you agree to use it lawfully and not disrupt its operation. Content is protected and cannot be reused without permission."
  );

  const cookiesTitle = safeT(t, "cookies.title", "Cookie Policy");
  const cookiesBody = safeT(
    t,
    "cookies.body",
    "We use cookies to ensure proper functionality, measure audience and improve performance. You can manage preferences in your browser settings."
  );

  const faqEyebrow = safeT(t, "faqBlock.eyebrow", "Support");
  const faqTitle = safeT(t, "faqBlock.title", "Frequently Asked Questions");
  const faqSubtitle = safeT(
    t,
    "faqBlock.subtitle",
    "Find answers to the most common questions about our projects, timelines and process."
  );

  const backToTop = safeT(t, "backToTop", "Back to top");

  const navLabelById: Record<NavId, string> = {
    privacy: navPrivacy,
    terms: navTerms,
    cookies: navCookies,
    faq: navFaq,
  };

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Cinematic Opening (About page style)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Bontera Legal"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/80 via-transparent to-transparent" />
        </div>

        {/* Architectural Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div id="top" className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {breadcrumbHome}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{breadcrumbLegal}</li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {safeT(t, "hero.eyebrow", "LEGAL CENTER")}
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {subtitle}
            </p>

            {/* Quick section pills (same vibe as About stats row, but legal-appropriate) */}
            <div className="mt-10 flex flex-wrap gap-3">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-bontera-grey-200 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.6}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                  </svg>
                  <span className="text-sm font-semibold text-bontera-grey-200 group-hover:text-white transition-colors uppercase tracking-wider">
                    {navLabelById[item.id]}
                  </span>
                </a>
              ))}
            </div>

            {/* Contact micro line */}
            <div className="mt-10 text-sm text-bontera-grey-400">
              {safeT(t, "hero.contactLine", "For questions:")}{" "}
              <a className="text-white/90 hover:text-white underline underline-offset-4" href="mailto:info@bontera.de">
                info@bontera.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK NAVIGATION - About page style band
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-20 bg-white border-b border-bontera-grey-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-bontera-grey-50 border border-bontera-grey-200 hover:bg-bontera-navy-600 hover:border-bontera-navy-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-bontera-navy-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
                <span className="text-sm font-semibold text-bontera-grey-700 group-hover:text-white transition-colors uppercase tracking-wider">
                  {navLabelById[item.id]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRIVACY SECTION - Editorial like About "Our Story"
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="privacy" className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(30,58,95,0.35) 1px, transparent 1px), linear-gradient(rgba(30,58,95,0.35) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {safeT(t, "privacy.eyebrow", navPrivacy)}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {privacyTitle}
              </h2>

              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />

              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{privacyBody}</p>
              </div>

              {/* Callout box (premium density, no fluff) */}
              <div className="mt-10 bg-bontera-grey-50 border border-bontera-grey-200 p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-bontera-navy-600 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-bontera-grey-900 uppercase tracking-wider">
                      {safeT(t, "privacy.summaryTitle", "Privacy principles")}
                    </div>
                    <ul className="mt-3 space-y-2 text-bontera-grey-600">
                      <li className="flex gap-2">
                        <span className="text-bontera-navy-600">•</span>
                        <span>{safeT(t, "privacy.bullets.minimal", "We collect only what is necessary.")}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-bontera-navy-600">•</span>
                        <span>{safeT(t, "privacy.bullets.noSell", "We do not sell personal data.")}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-bontera-navy-600">•</span>
                        <span>
                          {safeT(t, "privacy.bullets.contact", "Questions or requests:")}{" "}
                          <a className="text-bontera-navy-700 underline underline-offset-4" href="mailto:info@bontera.de">
                            info@bontera.de
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual composition (About page style) */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-bontera-grey-100">
                <Image
                  src="/images/contact.jpg"
                  alt="Privacy"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-bontera-navy-900/35" />
              </div>

              <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-bontera-navy-600 text-white p-6 lg:p-8 shadow-2xl max-w-xs">
                <div className="text-3xl lg:text-4xl font-semibold">{safeT(t, "privacy.card.title", "Data requests")}</div>
                <div className="text-sm text-bontera-navy-200 mt-2 leading-relaxed">
                  {safeT(t, "privacy.card.body", "Contact us if you have questions or requests about your data.")}
                </div>
                <div className="mt-4 h-px bg-white/20" />
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bontera-grey-100"
                  href="mailto:info@bontera.de"
                >
                  {safeT(t, "privacy.card.cta", "Email")} info@bontera.de
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-bontera-navy-200 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TERMS + COOKIES - Mission/Vision style blocks (About page style)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Terms */}
            <article id="terms" className="bg-white p-8 lg:p-12 shadow-sm border border-bontera-grey-200 scroll-mt-28">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l3 3v15H7V3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 15h6M9 7h3" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-4">
                {termsTitle}
              </h3>
              <p className="text-lg text-bontera-grey-600 leading-relaxed">
                {termsBody}
              </p>

              <div className="mt-8 pt-6 border-t border-bontera-grey-200">
                <a href="#faq" className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-700 hover:text-bontera-navy-900">
                  {navFaq}
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Cookies */}
            <article id="cookies" className="bg-bontera-navy-600 p-8 lg:p-12 text-white scroll-mt-28">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13a8 8 0 11-9-9 3 3 0 003 3 3 3 0 003 3 3 3 0 003 3z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M12 13h.01M8 14h.01M14 10h.01" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                {cookiesTitle}
              </h3>
              <p className="text-lg text-bontera-navy-100 leading-relaxed">
                {cookiesBody}
              </p>

              <div className="mt-8 pt-6 border-t border-white/15">
                <a href="mailto:info@bontera.de" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bontera-grey-100">
                  info@bontera.de
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION - Navy cinematic block (About timeline vibe)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="relative py-24 lg:py-32 bg-bontera-navy-900 overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-grey-400" />
              {faqEyebrow}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {faqTitle}
            </h2>

            <p className="mt-6 text-lg text-bontera-grey-300 leading-relaxed">
              {faqSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-bontera-grey-200 shadow-2xl ring-1 ring-black/10 p-8 lg:p-10">
            <ClientFaqList faqKeys={[...FAQ_KEYS]} isRTL={isRTL} />
          </div>

          <div className="mt-12 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors"
            >
              {backToTop}
              <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION - Same premium finish as About page
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt="Contact Bontera"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bontera-navy-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900 via-transparent to-bontera-navy-900" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
            {safeT(t, "cta.title", "Need more information?")}
          </h2>
          <p className="mt-6 text-xl text-bontera-grey-300 max-w-2xl mx-auto leading-relaxed">
            {safeT(t, "cta.description", "Contact our team for any legal, privacy, or cookie related question.")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {safeT(t, "cta.contactUs", "Contact")}
              <svg
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a
              href="mailto:info@bontera.de"
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              info@bontera.de
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
