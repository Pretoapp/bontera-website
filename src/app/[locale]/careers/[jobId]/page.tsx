// src/app/[locale]/careers/[jobId]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import {
  jobListings,
  getJobById,
  SUPPORTED_LOCALES,
  toSupportedLang,
  type JobListing,
  type JobContent,
} from "@/data/jobs";

type RouteParams = { locale: string; jobId: string };
type PageProps = { params: RouteParams };

function pickText(primary?: string, fallback?: string) {
  const p = (primary ?? "").trim();
  if (p) return p;
  const f = (fallback ?? "").trim();
  return f || "";
}

function pickList(primary?: string[], fallback?: string[]) {
  // Always return an array (never undefined), and filter out empty strings.
  const p = Array.isArray(primary) ? primary.filter((x) => (x ?? "").trim().length > 0) : [];
  if (p.length > 0) return p;

  const f = Array.isArray(fallback) ? fallback.filter((x) => (x ?? "").trim().length > 0) : [];
  return f;
}

/**
 * Field-by-field fallback:
 * - Use requested locale if present and non-empty
 * - Otherwise fall back to FR, then EN
 */
function resolveJobContent(job: JobListing, locale: string): JobContent {
  const lang = toSupportedLang(locale);

  const fr = job.i18n?.fr;
  const en = job.i18n?.en;

  // Choose a baseline fallback object first (prefer FR, then EN, else empty)
  const baseline = fr?.title?.trim() ? fr : en?.title?.trim() ? en : fr ?? en;
  const chosen = job.i18n?.[lang] ?? baseline;

  return {
    title: pickText(chosen?.title, baseline?.title),
    description: pickText(chosen?.description, baseline?.description),
    responsibilities: pickList(chosen?.responsibilities, baseline?.responsibilities),
    requirements: pickList(chosen?.requirements, baseline?.requirements),
    benefits: pickList(chosen?.benefits, baseline?.benefits),
  };
}

function getCanonicalJobUrl(locale: string, jobId: string) {
  return `https://bontera.de/${locale}/careers/${jobId}`;
}

function safeDate(locale: string, isoDate: string) {
  const preferred =
    SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number]) ? locale : "en";

  try {
    return new Intl.DateTimeFormat(preferred, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoDate));
  }
}

export function generateStaticParams(): RouteParams[] {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    jobListings.map((job) => ({
      locale,
      jobId: job.id,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, jobId } = params;
  const job = getJobById(jobId);

  if (!job) return { title: "Job Not Found" };

  const t = await getTranslations({ locale, namespace: "jobDetailPage" });
  const content = resolveJobContent(job, locale);

  return {
    title: `${content.title} | ${t("meta.titleSuffix")}`,
    description: (content.description || "").trim() || t("meta.description"),
    alternates: {
      canonical: getCanonicalJobUrl(locale, jobId),
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { locale, jobId } = params;
  const job = getJobById(jobId);

  if (!job) notFound();

  const t = await getTranslations({ locale, namespace: "jobDetailPage" });
  const tCareers = await getTranslations({ locale, namespace: "careersPage" });

  const lang = toSupportedLang(locale);
  const isRTL = lang === "ku";

  const content = resolveJobContent(job, locale);
  const jobUrl = getCanonicalJobUrl(locale, job.id);
  const shareText = `Check out this job: ${content.title} at Bontera`;

  // Extra safety: even if types drift, these will always be arrays.
  const responsibilities = Array.isArray(content.responsibilities) ? content.responsibilities : [];
  const requirements = Array.isArray(content.requirements) ? content.requirements : [];
  const benefits = Array.isArray(content.benefits) ? content.benefits : [];

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="relative bg-bontera-navy-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
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
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t("breadcrumb.home")}
                </Link>
              </li>
              <li>
                <svg
                  className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="hover:text-white transition-colors">
                  {t("breadcrumb.careers")}
                </Link>
              </li>
              <li>
                <svg
                  className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white font-medium">{content.title}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div>
              {job.featured && (
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  {t("featured")}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {content.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-bontera-grey-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  {tCareers(`departments.${job.department}`)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {tCareers(`locations.${job.location}`)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  {tCareers(`jobTypes.${job.type}`)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.experience}
                </span>
              </div>

              <p className="mt-4 text-sm text-bontera-grey-400">
                {t("posted")}: {safeDate(locale, job.posted)}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#apply"
                className="group inline-flex items-center gap-3 bg-white text-bontera-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
              >
                {t("applyNow")}
                <svg
                  className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-bontera-grey-900 mb-6">
                  {t("sections.description")}
                </h2>
                <p className="text-bontera-grey-600 leading-relaxed text-lg">{content.description}</p>
              </div>

              {/* Responsibilities */}
              {responsibilities.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-bontera-grey-900 mb-6">
                    {t("sections.responsibilities")}
                  </h2>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-bontera-grey-600">
                        <svg
                          className="w-5 h-5 text-bontera-navy-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {requirements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-bontera-grey-900 mb-6">
                    {t("sections.requirements")}
                  </h2>
                  <ul className="space-y-3">
                    {requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-bontera-grey-600">
                        <svg
                          className="w-5 h-5 text-bontera-navy-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-bontera-grey-900 mb-6">
                    {t("sections.benefits")}
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-bontera-grey-600">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">
              <div className="bg-white border border-bontera-grey-200 p-6">
                <h3 className="text-lg font-semibold text-bontera-grey-900 mb-6">{t("sidebar.quickInfo")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-bontera-grey-100">
                    <span className="text-bontera-grey-500">{t("sidebar.department")}</span>
                    <span className="font-medium text-bontera-grey-900">{tCareers(`departments.${job.department}`)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-bontera-grey-100">
                    <span className="text-bontera-grey-500">{t("sidebar.location")}</span>
                    <span className="font-medium text-bontera-grey-900">{tCareers(`locations.${job.location}`)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-bontera-grey-100">
                    <span className="text-bontera-grey-500">{t("sidebar.type")}</span>
                    <span className="font-medium text-bontera-grey-900">{tCareers(`jobTypes.${job.type}`)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-bontera-grey-500">{t("sidebar.experience")}</span>
                    <span className="font-medium text-bontera-grey-900">{job.experience}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-bontera-grey-200 p-6">
                <h3 className="text-lg font-semibold text-bontera-grey-900 mb-4">{t("sidebar.shareJob")}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bontera-grey-100 hover:bg-bontera-navy-600 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(jobUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bontera-grey-100 hover:bg-bontera-navy-600 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href={`mailto:?subject=${encodeURIComponent(`Job Opportunity: ${content.title} at Bontera`)}&body=${encodeURIComponent(
                      `Check out this job: ${jobUrl}`
                    )}`}
                    className="w-10 h-10 bg-bontera-grey-100 hover:bg-bontera-navy-600 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-bontera-navy-900 text-white p-6">
                <h3 className="text-lg font-semibold mb-4">{t("sidebar.questions")}</h3>
                <p className="text-bontera-grey-300 text-sm mb-4">{t("sidebar.contactText")}</p>
                <a
                  href="mailto:careers@bontera.de"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors"
                >
                  careers@bontera.de
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      {/* ... keep the rest of your form + back section unchanged ... */}
    </main>
  );
}
