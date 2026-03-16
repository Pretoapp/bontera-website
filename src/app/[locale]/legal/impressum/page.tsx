// src/app/[locale]/legal/impressum/page.tsx
// BONTERA - IMPRESSUM PAGE

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "impressumPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "impressumPage" });
  const isRTL = locale === "ar" || locale === "ku";
  const dir = isRTL ? "rtl" : "ltr";

  return (
    <main className="bg-bontera-grey-50" dir={dir}>
      {/* HERO */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Bontera Impressum"
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
                <li className="text-white font-medium">{t("breadcrumb.impressum")}</li>
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
          {/* Company Info */}
          <div className="mb-16">
            <div className="p-8 lg:p-12 bg-bontera-grey-50 border border-bontera-grey-200">
              <h2 className="text-2xl lg:text-3xl font-semibold text-bontera-grey-900 mb-6">
                BONTERA GmbH
              </h2>
              <div className="text-lg text-bontera-grey-600 leading-relaxed space-y-1">
                <p>Stodieks Hof 77</p>
                <p>33790 Halle Westfalen</p>
                <p className="mt-4">
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
              <div className="mt-6 pt-6 border-t border-bontera-grey-200">
                <p className="text-lg text-bontera-grey-600">
                  <span className="font-semibold text-bontera-grey-900">
                    {t("content.representedBy")}:
                  </span>{" "}
                  Necdet AKBULUT
                </p>
              </div>
            </div>
          </div>

          {/* Registration Info */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.registrationTitle")}
            </h2>
            <div className="space-y-4 text-base text-bontera-grey-600 leading-relaxed">
              <p>
                <span className="font-semibold text-bontera-grey-800">Handelsregister:</span>{" "}
                In Gr&uuml;ndungsphase (wird bei Erhalt eingetragen)
              </p>
              <p>
                <span className="font-semibold text-bontera-grey-800">Registergericht:</span>{" "}
                In Gr&uuml;ndungsphase (wird bei Erhalt eingetragen)
              </p>
              <p>
                <span className="font-semibold text-bontera-grey-800">Vertreten durch:</span>{" "}
                Necdet Akbulut
              </p>
            </div>
          </div>

          {/* Tax ID */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.taxIdTitle")}
            </h2>
            <p className="text-base text-bontera-grey-600 leading-relaxed">
              {t("content.taxIdDescription")}
            </p>
            <p className="mt-2 text-base text-bontera-grey-600">
              In Gr&uuml;ndungsphase (wird bei Erhalt eingetragen)
            </p>
          </div>

          {/* Supervisory Authority */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.supervisoryTitle")}
            </h2>
            <p className="text-base text-bontera-grey-600 leading-relaxed">
              BG BAU
            </p>
            <p className="text-base text-bontera-grey-600">
              In Gr&uuml;ndungsphase (wird bei Erhalt eingetragen)
            </p>
          </div>

          {/* Editorially Responsible */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.editorialTitle")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-1">
              <p className="font-semibold text-bontera-grey-800">Necdet AKBULUT</p>
              <p>Stodieks Hof 77</p>
              <p>33790 Halle Westfalen</p>
            </div>
          </div>

          {/* EU Dispute Resolution */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.euDisputeTitle")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("content.euDisputeBody")}</p>
              <p>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bontera-navy-600 hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>{t("content.euDisputeEmail")}</p>
            </div>
          </div>

          {/* Consumer Dispute Resolution */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.consumerDisputeTitle")}
            </h2>
            <p className="text-base text-bontera-grey-600 leading-relaxed">
              {t("content.consumerDisputeBody")}
            </p>
          </div>

          {/* Liability for Content */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.liabilityContentTitle")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("content.liabilityContentBody1")}</p>
              <p>{t("content.liabilityContentBody2")}</p>
            </div>
          </div>

          {/* Liability for Links */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.liabilityLinksTitle")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("content.liabilityLinksBody1")}</p>
              <p>{t("content.liabilityLinksBody2")}</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-semibold text-bontera-grey-900 mb-6 pb-4 border-b border-bontera-grey-200">
              {t("content.copyrightTitle")}
            </h2>
            <div className="text-base text-bontera-grey-600 leading-relaxed space-y-4">
              <p>{t("content.copyrightBody1")}</p>
              <p>{t("content.copyrightBody2")}</p>
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
