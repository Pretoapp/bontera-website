// src/app/[locale]/quote/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - REQUEST A QUOTE PAGE
// Comprehensive quote request form with project details
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/home/QuoteForm";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string }>;
};

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quotePage" });


  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const processSteps = [
  {
    key: "submit",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    number: "01",
  },
  {
    key: "review",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
    number: "02",
  },
  {
    key: "consultation",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    number: "03",
  },
  {
    key: "proposal",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    number: "04",
  },
];

const whyChooseUs = [
  {
    key: "experience",
    value: "20+",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "projects",
    value: "80+",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
  },
  {
    key: "onTime",
    value: "98%",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "clients",
    value: "200+",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
];

const faqs = [
  "timeline",
  "cost",
  "included",
  "changes",
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quotePage" });

  const isRTL = locale === "ku";

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/quote-hero.jpg"
            alt="Request a Quote"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/70 to-bontera-navy-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-bontera-navy-900/80 via-transparent to-transparent" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        

        {/* Content */}
        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-2" aria-label="Breadcrumb">
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
                <li className="text-white font-medium">{t("breadcrumb.quote")}</li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-bontera-grey-400 text-sm uppercase tracking-[0.25em]">
              <span className="w-12 h-px bg-gradient-to-r from-bontera-navy-400 to-transparent" />
              {t("hero.eyebrow")}
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                {t("hero.title")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-bontera-grey-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2 text-bontera-grey-300">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t("hero.trust.free")}
              </div>
              <div className="flex items-center gap-2 text-bontera-grey-300">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t("hero.trust.response")}
              </div>
              <div className="flex items-center gap-2 text-bontera-grey-300">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t("hero.trust.obligation")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN FORM SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form Column (2/3 width) */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("form.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("form.title")}
              </h2>

              <p className="mt-4 text-lg text-bontera-grey-600">
                {t("form.description")}
              </p>

              {/* Quote Form Component */}
              <div className="mt-10">
                <QuoteForm locale={locale} />
              </div>
            </div>

            {/* Sidebar (1/3 width) */}
            <div className="space-y-8">
              {/* Why Choose Us Card */}
              <div className="bg-bontera-navy-900 p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">{t("sidebar.whyUs.title")}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {whyChooseUs.map((item) => (
                    <div key={item.key}>
                      <div className="text-3xl font-bold text-gray-400">{item.value}</div>
                      <div className="text-sm text-bontera-grey-300 mt-1">{t(`sidebar.whyUs.${item.key}`)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-bontera-grey-50 p-8 border border-bontera-grey-200">
                <h3 className="text-lg font-semibold text-bontera-grey-900 mb-4">{t("sidebar.contact.title")}</h3>
                <p className="text-sm text-bontera-grey-600 mb-6">{t("sidebar.contact.description")}</p>
                
                <div className="space-y-4">
                  <a href="tel:+49 30 123 456 7890" className="flex items-center gap-3 text-bontera-grey-700 hover:text-bontera-navy-600 transition-colors">
                    <div className="w-10 h-10 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-bontera-grey-500">{t("sidebar.contact.phone")}</div>
                      <div className="font-semibold">+49 30 123 456 7890</div>
                    </div>
                  </a>

                  <a href="mailto:quotes@bontera.de" className="flex items-center gap-3 text-bontera-grey-700 hover:text-bontera-navy-600 transition-colors">
                    <div className="w-10 h-10 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-bontera-grey-500">{t("sidebar.contact.email")}</div>
                      <div className="font-semibold">quotes@bontera.de</div>
                    </div>
                  </a>

                  <a href="https://wa.me/971501234567" className="flex items-center gap-3 text-bontera-grey-700 hover:text-bontera-navy-600 transition-colors">
                    <div className="w-10 h-10 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12c0 1.545.426 2.99 1.166 4.225L3.75 20.25l4.025-1.166A8.206 8.206 0 0012 20.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-bontera-grey-500">{t("sidebar.contact.whatsapp")}</div>
                      <div className="font-semibold">+49 30 123 456 7890</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="bg-bontera-grey-50 p-8 border border-bontera-grey-200">
                <h3 className="text-lg font-semibold text-bontera-grey-900 mb-4">{t("sidebar.hours.title")}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-bontera-grey-600">{t("sidebar.hours.weekdays")}</span>
                    <span className="font-semibold text-bontera-grey-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-bontera-grey-600">{t("sidebar.hours.saturday")}</span>
                    <span className="font-semibold text-bontera-grey-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-bontera-grey-600">{t("sidebar.hours.sunday")}</span>
                    <span className="font-semibold text-bontera-grey-500">{t("sidebar.hours.closed")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROCESS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("process.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("process.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("process.description")}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.key} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className={`hidden lg:block absolute top-10 ${isRTL ? "right-0 -left-8" : "left-full -right-8"} h-px bg-bontera-grey-300`} style={{ width: "calc(100% - 40px)", marginLeft: isRTL ? "0" : "20px", marginRight: isRTL ? "20px" : "0" }} />
                )}

                <div className="bg-white p-8 border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-bontera-navy-600 text-white flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </div>
                    <svg className="w-8 h-8 text-bontera-grey-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold text-bontera-grey-900 mb-3">
                    {t(`process.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-bontera-grey-600 text-sm leading-relaxed">
                    {t(`process.steps.${step.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Header */}
            <div>
              <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                <span className="w-8 h-px bg-bontera-navy-600" />
                {t("faq.eyebrow")}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                {t("faq.title")}
              </h2>

              <p className="mt-6 text-lg text-bontera-grey-600">
                {t("faq.description")}
              </p>

              <div className="mt-8 p-6 bg-bontera-navy-50 border-l-4 border-bontera-navy-600">
                <h4 className="font-semibold text-bontera-grey-900">{t("faq.stillQuestions.title")}</h4>
                <p className="mt-2 text-sm text-bontera-grey-600">{t("faq.stillQuestions.description")}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700"
                >
                  {t("faq.stillQuestions.link")}
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq}
                  className="group bg-bontera-grey-50 border border-bontera-grey-200 hover:border-bontera-grey-300 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-bontera-grey-900 pr-4">
                      {t(`faq.items.${faq}.question`)}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center group-open:bg-bontera-navy-600 group-open:text-white transition-colors">
                      <svg className="w-4 h-4 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-bontera-grey-600 leading-relaxed">
                      {t(`faq.items.${faq}.answer`)}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

  

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-xl text-bontera-grey-600">
            {t("cta.description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote-form"
              className="group inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.getQuote")}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-3 text-bontera-navy-600 border border-bontera-navy-600 hover:bg-bontera-navy-50 px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {t("cta.viewProjects")}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}