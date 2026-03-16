// src/app/[locale]/legal/cookies/page.tsx
// BONTERA - COOKIE-RICHTLINIE (COOKIE POLICY) PAGE

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "cookiePage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function CookiePage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "cookiePage" });
  const isRTL = locale === "ar" || locale === "ku";
  const dir = isRTL ? "rtl" : "ltr";

  return (
    <main className="bg-bontera-grey-50" dir={dir}>
      {/* HERO */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Bontera Cookie-Richtlinie"
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

        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href={`/${locale}/legal`} className="hover:text-white transition-colors">
                    {t("breadcrumb.legal")}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium">{t("breadcrumb.cookies")}</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {t("hero.eyebrow")}
            </span>

            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {t("hero.title")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              1. {t("sections.whatAreCookies.title")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("sections.whatAreCookies.p1")}</p>
              <p>{t("sections.whatAreCookies.p2")}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              2. {t("sections.typesOfCookies.title")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("sections.typesOfCookies.p1")}</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><span className="font-semibold text-bontera-grey-800">{t("sections.typesOfCookies.necessary.label")}:</span> {t("sections.typesOfCookies.necessary.description")}</li>
                <li><span className="font-semibold text-bontera-grey-800">{t("sections.typesOfCookies.analytics.label")}:</span> {t("sections.typesOfCookies.analytics.description")}</li>
                <li><span className="font-semibold text-bontera-grey-800">{t("sections.typesOfCookies.preferences.label")}:</span> {t("sections.typesOfCookies.preferences.description")}</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              3. {t("sections.manageCookies.title")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("sections.manageCookies.p1")}</p>
              <p>{t("sections.manageCookies.p2")}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              4. {t("sections.thirdParty.title")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("sections.thirdParty.p1")}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              5. {t("sections.contact.title")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>
                {t("sections.contact.p1")}{" "}
                <a href="mailto:info@bontera.de" className="text-bontera-navy-600 hover:underline">
                  info@bontera.de
                </a>
              </p>
            </div>
          </div>

          {/* Back to Legal */}
          <div className="pt-8 border-t border-bontera-grey-200">
            <Link
              href={`/${locale}/legal`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-700 hover:text-bontera-navy-900 transition-colors"
            >
              <svg className={`w-4 h-4 ${isRTL ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {t("backToLegal")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
