// src/app/[locale]/about/values/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - VALUES PAGE
// Our mission, vision, and core values
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
  const t = await getTranslations({ locale, namespace: "valuesPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const coreValues = [
{
     key: "safety",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    color: "bg-red-500",
  },

  {
    key: "excellence",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    color: "bg-amber-500",
  },



    {
    key: "integrity",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    color: "bg-blue-500",
  },
 
  {
    key: "partnership",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    color: "bg-indigo-500",
  },

    {
    key: "innovation",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    color: "bg-purple-500",
  },
   {
 
  
    key: "sustainability",
    icon: "M12 21c-4.5 0-8-3-8-7 0-6 8-11 8-11s8 5 8 11c0 4-3.5 7-8 7z",
    color: "bg-green-500",
  },
];

const principles = [
  { key: "clientFirst", number: "01" },
  { key: "qualityDriven", number: "02" },
  { key: "teamEmpowerment", number: "03" },
  { key: "continuousImprovement", number: "04" },
];

export default async function ValuesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "valuesPage" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/values-hero.jpg"
            alt="Bontera Values"
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
                <li className="text-white font-medium">{t("breadcrumb.values")}</li>
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

      {/* Mission & Vision Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="relative bg-bontera-grey-50 p-8 lg:p-12 border border-bontera-grey-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bontera-navy-600 to-bontera-navy-400" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bontera-navy-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
             <span className="ml-4 text-xs uppercase tracking-[0.3em] text-bontera-navy-600 font-semibold">
  {t("mission.eyebrow")}
</span>

              <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-bontera-grey-900">
                {t("mission.title")}
              </h2>
              <p className="mt-6 text-lg text-bontera-grey-600 leading-relaxed">
                {t("mission.description")}
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-bontera-navy-600 p-8 lg:p-12 text-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-500" />
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-9">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
             <span className="ml-4 text-xs uppercase tracking-[0.3em] text-bontera-navy-200 font-semibold">
  {t("vision.eyebrow")}
</span>

              <h2 className="mt-4 text-2xl lg:text-3xl font-semibold">
                {t("vision.title")}
              </h2>
              <p className="mt-6 text-lg text-bontera-navy-100 leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("coreValues.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("coreValues.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("coreValues.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.key}
                className="group relative bg-white p-8 border border-bontera-grey-200 hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-6xl font-bold text-bontera-grey-100 group-hover:text-bontera-navy-50 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={`relative z-10 flex-shrink-0 w-14 h-14 flex items-center justify-center ${value.color} text-white group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                  {t(`coreValues.items.${value.key}.title`)}
                </h3>
                <p className="relative z-10 mt-3 text-bontera-grey-600 leading-relaxed">
                  {t(`coreValues.items.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
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
              {t("principles.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("principles.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((principle) => (
              <div
                key={principle.key}
                className="group bg-bontera-navy-800 p-8 border border-bontera-grey-700 hover:border-gray-500 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-bold text-gray-500">{principle.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {t(`principles.items.${principle.key}.title`)}
                    </h3>
                    <p className="mt-3 text-bontera-grey-400 leading-relaxed">
                      {t(`principles.items.${principle.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Snapshot */}
<section className="relative py-16 lg:py-20 bg-white overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
        <span className="w-8 h-px bg-bontera-navy-600" />
        {t("valuesSnapshot.eyebrow")}
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
        {t("valuesSnapshot.title")}
      </h2>

      <ul className="mt-8 space-y-4 text-lg text-bontera-grey-600 leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 bg-bontera-navy-600 flex-shrink-0" />
          <span>{t("valuesSnapshot.items.transparencyReliabilityCommitment")}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 bg-bontera-navy-600 flex-shrink-0" />
          <span>{t("valuesSnapshot.items.technicalExpertise")}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 bg-bontera-navy-600 flex-shrink-0" />
          <span>{t("valuesSnapshot.items.holisticApproach")}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 bg-bontera-navy-600 flex-shrink-0" />
          <span>{t("valuesSnapshot.items.valueGrowth")}</span>
        </li>
      </ul>

      <p className="mt-8 text-lg text-bontera-grey-700 font-medium leading-relaxed">
        {t("valuesSnapshot.closing")}
      </p>
    </div>
  </div>
</section>


      {/* Culture Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
      
               
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("culture.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("culture.paragraph1")}</p>
                <p>{t("culture.paragraph2")}</p>
              </div>

            
                <footer className="mt-4">
                 

                  
                </footer>
             
            </div>

         <div className="relative aspect-[4/5] overflow-visible">
  {/* keep image clipped, but allow the badge to overflow */}
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src="/images/values-culture.jpg"
      alt="Bontera Culture"
      fill
      className="object-cover"
      sizes="50vw"
    />
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
            alt="Build with us"
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
