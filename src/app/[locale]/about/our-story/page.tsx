// src/app/[locale]/about/our-story/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - OUR STORY PAGE
// The journey and history of Bontera
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
  const t = await getTranslations({ locale, namespace: "ourStoryPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const milestones = [
  { year: "2004", key: "founding" },
  { year: "2005", key: "firstMajor" },
  { year: "2007", key: "expansion" },
  { year: "2010", key: "international" },
  { year: "2015", key: "sustainability" },
  { year: "2018", key: "technology" },
  { year: "2020", key: "pandemic" },
  { year: "2024", key: "future" },
];

const achievements = [
  {
    key: "projects",
    value: "80+",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
  {
    key: "deliveredValue",
    value: "220 M €",
    icon: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172",
  },
  {
    key: "countries",
    value: "5",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    key: "sqmDelivered",
    value: "40,000+",
    icon: "M3 6.75V19.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 19.5V6.75M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75M9 9.75h6M9 13.5h6M9 17.25h6",
  },
];


export default async function OurStoryPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ourStoryPage" });
  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/our-story09.jpg"
            alt="Bontera Story"
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
                <li className="text-white font-medium">{t("breadcrumb.ourStory")}</li>
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

      {/* Origin Story */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("origin.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("origin.title")}
              </h2>
              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400" />
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("origin.paragraph1")}</p>
                <p>{t("origin.paragraph2")}</p>
                <p>{t("origin.paragraph3")}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/founder-story.jpg"
                  alt="Bontera Origins"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-bontera-navy-600 text-white p-6 lg:p-8 shadow-2xl max-w-xs">
                <div className="text-5xl lg:text-6xl font-bold">2004</div>
                <div className="text-lg font-medium mt-2">{t("origin.founded")}</div>
                <div className="mt-4 h-px bg-white/20" />
                <div className="mt-4 text-sm text-bontera-navy-200">
                  {t("origin.location")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <svg className="w-16 h-16 mx-auto text-bontera-navy-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="mt-8">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-medium text-bontera-grey-800 leading-relaxed italic">
              &ldquo;{t("founderQuote.quote")}&rdquo;
            </p>
          </blockquote>
          <footer className="mt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-bontera-grey-200">
                <Image
                  src="/images/team/ceo.jpg"
                  alt={t("founderQuote.name")}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <cite className="not-italic font-semibold text-bontera-grey-900">
                  {t("founderQuote.name")}
                </cite>
                <p className="text-sm text-bontera-grey-500">{t("founderQuote.title")}</p>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* Timeline */}
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
              {t("timeline.eyebrow")}
              <span className="w-8 h-px bg-bontera-grey-400" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bontera-grey-700 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="bg-bontera-navy-800 p-6 lg:p-8 border border-bontera-grey-700 hover:border-gray-500 transition-colors">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {t(`timeline.milestones.${milestone.key}.title`)}
                      </h3>
                      <p className="text-bontera-grey-400 leading-relaxed">
                        {t(`timeline.milestones.${milestone.key}.description`)}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-500 border-4 border-bontera-navy-900" />
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("achievements.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("achievements.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.key}
                className="group bg-bontera-grey-50 p-8 border border-bontera-grey-200 hover:bg-bontera-navy-600 hover:border-bontera-navy-600 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-bontera-navy-100 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-bontera-navy-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={achievement.icon} />
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-bontera-navy-600 group-hover:text-white transition-colors">
                  {achievement.value}
                </div>
                <div className="mt-2 text-bontera-grey-600 group-hover:text-bontera-navy-100 transition-colors">
                  {t(`achievements.items.${achievement.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="relative py-24 lg:py-32 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/future-vision.jpg"
                alt="Future Vision"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("future.eyebrow")}
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("future.title")}
              </h2>
              <div className="mt-8 space-y-6 text-lg text-bontera-grey-600 leading-relaxed">
                <p>{t("future.paragraph1")}</p>
                <p>{t("future.paragraph2")}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
              {["innovation", "sustainability", "growth"].map((focus) => (
  <div key={focus} className="inline-flex items-center gap-2 bg-white px-4 py-2 border border-bontera-grey-200">
    <svg className="w-5 h-5 text-bontera-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-sm font-medium text-bontera-grey-700">
      {t(`future.focus.${focus}`)}
    </span>
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
            alt="Join our journey"
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
              {t("cta.startProject")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.joinTeam")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
