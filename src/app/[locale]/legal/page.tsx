// src/app/[locale]/legal/page.tsx
// BONTERA - LEGAL PAGE

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import ClientFaqList from "./_clientFaqList";

type Props = {
  params: { locale: string };
};

type NavId = "privacy" | "terms" | "cookies" | "faq";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const FAQ_KEYS = ["timeline", "budget", "process", "warranty"] as const;

const NAV: Array<{
  id: NavId;
  labelKey: "privacy" | "terms" | "cookies" | "faq";
  iconPath: string;
}> = [
  {
    id: "privacy",
    labelKey: "privacy",
    iconPath: "M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z",
  },
  {
    id: "terms",
    labelKey: "terms",
    iconPath: "M7 3h7l3 3v15H7V3z M9 11h6 M9 15h6 M9 7h3",
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

export default async function LegalPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  const isRTL = locale === "ar" || locale === "ku";
  const dir = isRTL ? "rtl" : "ltr";

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
    <main className="bg-bontera-grey-50" dir={dir}>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
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

        <div id="top" className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
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

            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {safeT(t, "hero.eyebrow", "LEGAL CENTER")}
            </span>

            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {title}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {subtitle}
            </p>

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

            <div className="mt-10 text-sm text-bontera-grey-400">
              {safeT(t, "hero.contactLine", "For questions:")}{" "}
              <a className="text-white/90 hover:text-white underline underline-offset-4" href="mailto:info@bontera.de">
                info@bontera.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
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

      {/* PRIVACY */}
      <section id="privacy" className="relative py-24 lg:py-32 bg-white overflow-hidden scroll-mt-28">
        {/* ... unchanged ... */}
        {/* keep your entire Privacy section exactly as-is */}
        {/* (omitted here for brevity) */}
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* keep your existing privacy markup */}
          {/* NOTE: nothing in this section is related to the build error */}
          {/* You can paste your existing section body here unchanged */}
        </div>
      </section>

      {/* TERMS + COOKIES */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        {/* keep your existing Terms/Cookies markup unchanged */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <article id="terms" className="bg-white p-8 lg:p-12 shadow-sm border border-bontera-grey-200 scroll-mt-28">
              {/* ... unchanged ... */}
              <h3 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-4">{termsTitle}</h3>
              <p className="text-lg text-bontera-grey-600 leading-relaxed">{termsBody}</p>
              <div className="mt-8 pt-6 border-t border-bontera-grey-200">
                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-700 hover:text-bontera-navy-900"
                >
                  {navFaq}
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article id="cookies" className="bg-bontera-navy-600 p-8 lg:p-12 text-white scroll-mt-28">
              {/* ... unchanged ... */}
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{cookiesTitle}</h3>
              <p className="text-lg text-bontera-navy-100 leading-relaxed">{cookiesBody}</p>
              <div className="mt-8 pt-6 border-t border-white/15">
                <a
                  href="mailto:info@bontera.de"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bontera-grey-100"
                >
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

      {/* FAQ */}
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

            <p className="mt-6 text-lg text-bontera-grey-300 leading-relaxed">{faqSubtitle}</p>
          </div>

          <div
            className="max-w-5xl mx-auto bg-white border border-bontera-grey-200 shadow-2xl ring-1 ring-black/10 p-8 lg:p-10"
            dir={dir}
          >
            <ClientFaqList faqKeys={[...FAQ_KEYS]} />
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

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* keep your CTA section unchanged */}
        <div className="absolute inset-0">
          <Image src="/images/cta-construction.jpg" alt="Contact Bontera" fill className="object-cover" sizes="100vw" />
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
