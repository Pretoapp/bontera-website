// src/app/[locale]/legal/datenschutz/page.tsx
// BONTERA - DATENSCHUTZ (PRIVACY POLICY) PAGE

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "datenschutzPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "datenschutzPage" });
  const isRTL = locale === "ar" || locale === "ku";
  const dir = isRTL ? "rtl" : "ltr";

  const sections = [
    {
      number: "1",
      titleKey: "sections.general.title",
      paragraphs: ["sections.general.p1", "sections.general.p2"],
    },
    {
      number: "2",
      titleKey: "sections.responsible.title",
      isContact: true,
    },
    {
      number: "3",
      titleKey: "sections.serverLogs.title",
      paragraphs: ["sections.serverLogs.p1"],
      list: ["sections.serverLogs.items.ip", "sections.serverLogs.items.browser", "sections.serverLogs.items.os", "sections.serverLogs.items.referrer", "sections.serverLogs.items.hostname", "sections.serverLogs.items.time"],
      afterList: ["sections.serverLogs.p2"],
    },
    {
      number: "4",
      titleKey: "sections.cookies.title",
      paragraphs: ["sections.cookies.p1", "sections.cookies.p2"],
    },
    {
      number: "5",
      titleKey: "sections.contact.title",
      paragraphs: ["sections.contact.p1", "sections.contact.p2"],
    },
    {
      number: "6",
      titleKey: "sections.rights.title",
      paragraphs: ["sections.rights.p1"],
      list: [
        "sections.rights.items.access",
        "sections.rights.items.rectification",
        "sections.rights.items.erasure",
        "sections.rights.items.restriction",
        "sections.rights.items.portability",
        "sections.rights.items.objection",
      ],
    },
    {
      number: "7",
      titleKey: "sections.complaint.title",
      paragraphs: ["sections.complaint.p1", "sections.complaint.p2"],
    },
    {
      number: "8",
      titleKey: "sections.ssl.title",
      paragraphs: ["sections.ssl.p1", "sections.ssl.p2"],
    },
    {
      number: "9",
      titleKey: "sections.retention.title",
      paragraphs: ["sections.retention.p1"],
    },
  ];

  return (
    <main className="bg-bontera-grey-50" dir={dir}>
      {/* HERO */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Bontera Datenschutz"
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
                <li className="text-white font-medium">{t("breadcrumb.datenschutz")}</li>
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
          {sections.map((section) => (
            <div key={section.number} className="mb-16">
              <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
                {section.number}. {t(section.titleKey)}
              </h2>

              {section.isContact ? (
                <div className="p-8 bg-bontera-grey-50 border border-bontera-grey-200">
                  <div className="text-base text-bontera-grey-600 leading-relaxed space-y-1">
                    <p className="font-semibold text-bontera-grey-900">BONTERA GmbH</p>
                    <p>Stodieks Hof 77</p>
                    <p>33790 Halle Westfalen</p>
                    <p className="mt-3">
                      Telefon:{" "}
                      <a href="tel:+4916043000073" className="text-bontera-navy-600 hover:underline">
                        0160 43 00 07 3
                      </a>
                    </p>
                    <p>
                      E-Mail:{" "}
                      <a href="mailto:info@bontera.de" className="text-bontera-navy-600 hover:underline">
                        info@bontera.de
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
                  {section.paragraphs?.map((pKey) => (
                    <p key={pKey}>{t(pKey)}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      {section.list.map((itemKey) => (
                        <li key={itemKey}>{t(itemKey)}</li>
                      ))}
                    </ul>
                  )}
                  {section.afterList?.map((pKey) => (
                    <p key={pKey}>{t(pKey)}</p>
                  ))}
                </div>
              )}
            </div>
          ))}

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
