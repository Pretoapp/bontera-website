// src/app/[locale]/about/partners/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PARTNERS PAGE
// Strategic partnerships and affiliates
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
  const t = await getTranslations({ locale, namespace: "partnersPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const strategicPartners = [
  { key: "arcadis", logo: "/images/partners/arca.png" },
  { key: "aecom", logo: "/images/partners/sara12.png" },
  { key: "arup", logo: "/images/partners/roger.png" },
  { key: "wsp", logo: "/images/partners/wspp123.png" },
];

const technologyPartners = [
  { key: "autodesk", logo: "/images/partners/auto.png" },
  { key: "trimble", logo: "/images/partners/trimble.png" },
  { key: "procore", logo: "/images/partners/proco.png" },
  { key: "oracle", logo: "/images/partners/orac.png" },
];

const materialSuppliers = [
  { key: "holcim", logo: "/images/partners/hol.png" },
  { key: "heidelberg", logo: "/images/partners/heidelberg.png" },
  { key: "caterpillar", logo: "/images/partners/caterpillar.png" },
  { key: "hilti", logo: "/images/partners/hilti.png" },
];

const industryAssociations = [
  { key: "agc", name: "Associated General Contractors" },
  { key: "usgbc", name: "US Green Building Council" },
  { key: "fidic", name: "FIDIC" },
  { key: "ciob", name: "Chartered Institute of Building" },
  { key: "rics", name: "RICS" },
  { key: "aia", name: "American Institute of Architects" },
];

export default async function PartnexrsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partnersPage" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative min-h-[76vh] lg:min-h-[92vh] flex items-end overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/partners-hero.jpg"
            alt="Bontera Partners"
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
                <li className="text-white font-medium">{t("breadcrumb.partners")}</li>
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

      {/* Partnership Philosophy */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("philosophy.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("philosophy.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("philosophy.paragraph1")}</p>
                <p>{t("philosophy.paragraph2")}</p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: t("philosophy.stats.partners") },
                  { value: "20+", label: t("philosophy.stats.years") },
                  { value: "12", label: t("philosophy.stats.countries") },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-bontera-navy-600">{stat.value}</div>
                    <div className="text-sm text-bontera-grey-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/partnership-handshake.jpg"
                alt="Partnership"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("strategic.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("strategic.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("strategic.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPartners.map((partner) => (
              <div
                key={partner.key}
                className="group bg-white p-8 border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-32 h-20 mx-auto bg-bontera-grey-100 flex items-center justify-center mb-6">
                  <Image
                    src={partner.logo}
                    alt={t(`strategic.partners.${partner.key}.name`)}
                    width={100}
                    height={50}
                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold text-bontera-grey-900">
                  {t(`strategic.partners.${partner.key}.name`)}
                </h3>
                <p className="mt-2 text-sm text-bontera-grey-600">
                  {t(`strategic.partners.${partner.key}.specialty`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
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
              {t("technology.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("technology.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-400">
              {t("technology.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyPartners.map((partner) => (
              <div
                key={partner.key}
                className="bg-bontera-navy-800 p-6 border border-bontera-grey-700 hover:border-gray-500 transition-colors text-center"
              >
                <div className="w-32 h-16 mx-auto bg-white/10 flex items-center justify-center mb-4">
                  <Image
                    src={partner.logo}
                    alt={t(`technology.partners.${partner.key}.name`)}
                    width={80}
                    height={40}
                    className="object-contain brightness-0 invert opacity-80"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(`technology.partners.${partner.key}.name`)}
                </h3>
                <p className="mt-2 text-sm text-bontera-grey-400">
                  {t(`technology.partners.${partner.key}.solution`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Suppliers */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("suppliers.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("suppliers.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("suppliers.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialSuppliers.map((supplier) => (
              <div
                key={supplier.key}
                className="group bg-bontera-grey-50 p-8 border border-bontera-grey-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-32 h-20 mx-auto flex items-center justify-center mb-4">
                  <Image
                    src={supplier.logo}
                    alt={t(`suppliers.partners.${supplier.key}.name`)}
                    width={100}
                    height={50}
                    className="object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold text-bontera-grey-900">
                  {t(`suppliers.partners.${supplier.key}.name`)}
                </h3>
                <p className="mt-2 text-sm text-bontera-grey-600">
                  {t(`suppliers.partners.${supplier.key}.products`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Become a Partner CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-construction.jpg"
            alt="Partner with us"
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
              {t("cta.becomePartner")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.learnMore")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
