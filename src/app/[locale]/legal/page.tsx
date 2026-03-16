import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import ClientFaqList from "./_clientFaqList";
import { getLocaleDirection, type Locale } from "@/lib/i18n/config";

type Props = {
  params: { locale: string };
};

const FAQ_KEYS = ["timeline", "budget", "process", "warranty"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "legalPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "legalPage" });
  const dir = getLocaleDirection(locale as Locale);
  const isRTL = dir === "rtl";

  const documents = [
    {
      number: "01",
      title: t("privacy.title"),
      body: t("privacy.body"),
      href: `/${locale}/legal/datenschutz`,
    },
    {
      number: "02",
      title: t("terms.title"),
      body: t("terms.body"),
      href: `/${locale}/legal/nutzungsbedingungen`,
    },
    {
      number: "03",
      title: t("cookies.title"),
      body: t("cookies.body"),
      href: `/${locale}/legal/cookies`,
    },
    {
      number: "04",
      title: t("impressum.title"),
      body: t("impressum.body"),
      href: `/${locale}/legal/impressum`,
    },
  ];

  return (
    <main className="bg-bontera-grey-50" dir={dir}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt={t("meta.title")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,33,57,0.72)_0%,rgba(17,33,57,0.84)_45%,rgba(17,33,57,0.98)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(102,133,168,0.18),transparent_38%)]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div
          id="top"
          className="relative z-10 mx-auto flex min-h-[34rem] max-w-[1500px] items-end px-6 pb-16 pt-32 sm:pb-20 lg:px-16 lg:pt-40"
        >
          <div className="w-full">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-bontera-grey-300">
                <li>
                  <Link href={`/${locale}`} className="transition-colors hover:text-white">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg
                    className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="font-medium text-white">{t("breadcrumb.legal")}</li>
              </ol>
            </nav>

            <div className="mt-10 max-w-4xl">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-bontera-grey-300">
                <span className="h-px w-10 bg-white/30" />
                {t("hero.eyebrow")}
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                {t("hero.landingTitle")}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-bontera-grey-200 sm:text-xl">
                {t("hero.landingSubtitle")}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {documents.map((document) => (
                <Link
                  key={document.href}
                  href={document.href}
                  className="rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                >
                  {document.title}
                </Link>
              ))}
            </div>

            <div className="mt-10 max-w-3xl rounded-[28px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
              <p className="text-sm leading-7 text-bontera-grey-100">
                {t("hero.contactLine")}{" "}
                <a
                  href="mailto:info@bontera.de"
                  className="font-semibold text-white underline underline-offset-4"
                >
                  info@bontera.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-bontera-grey-500">
              <span className="h-px w-10 bg-bontera-grey-300" />
              {t("documents.eyebrow")}
              <span className="h-px w-10 bg-bontera-grey-300" />
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-bontera-grey-900 sm:text-4xl lg:text-5xl">
              {t("documents.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-bontera-grey-600">
              {t("documents.description")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {documents.map((document, index) => (
              <Link
                key={document.href}
                href={document.href}
                className={[
                  "group rounded-[30px] border p-8 shadow-[0_24px_70px_rgba(17,33,57,0.08)] transition-all duration-300 hover:-translate-y-1",
                  index === 1
                    ? "border-bontera-navy-700 bg-bontera-navy-900 text-white hover:border-bontera-navy-500"
                    : "border-bontera-grey-200 bg-white hover:border-bontera-navy-300",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={[
                      "flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold",
                      index === 1
                        ? "bg-white/10 text-white"
                        : "bg-bontera-navy-50 text-bontera-navy-700",
                    ].join(" ")}
                  >
                    {document.number}
                  </span>

                  <svg
                    className={[
                      "h-5 w-5 transition-transform group-hover:translate-x-1",
                      index === 1 ? "text-white" : "text-bontera-navy-600",
                      isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-y-0" : "",
                    ].join(" ")}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <h3
                  className={[
                    "mt-8 text-2xl font-semibold tracking-tight",
                    index === 1 ? "text-white" : "text-bontera-grey-900",
                  ].join(" ")}
                >
                  {document.title}
                </h3>

                <p
                  className={[
                    "mt-4 text-base leading-8",
                    index === 1 ? "text-bontera-grey-200" : "text-bontera-grey-600",
                  ].join(" ")}
                >
                  {document.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bontera-navy-900 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-bontera-grey-400">
              <span className="h-px w-8 bg-bontera-grey-400" />
              {t("faqBlock.eyebrow")}
              <span className="h-px w-8 bg-bontera-grey-400" />
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("faqBlock.title")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-bontera-grey-300">
              {t("faqBlock.subtitle")}
            </p>
          </div>

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8">
            <ClientFaqList faqKeys={[...FAQ_KEYS]} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
          <div className="rounded-[32px] border border-bontera-grey-200 bg-white p-8 shadow-[0_24px_70px_rgba(17,33,57,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-bontera-grey-900 sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mt-5 text-lg leading-8 text-bontera-grey-600">
                {t("cta.description")}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-bontera-navy-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-bontera-navy-700"
              >
                {t("cta.primary")}
              </Link>

              <a
                href="mailto:info@bontera.de"
                className="inline-flex items-center justify-center rounded-full border border-bontera-grey-300 px-7 py-4 text-sm font-semibold text-bontera-grey-800 transition-colors hover:border-bontera-navy-300 hover:text-bontera-navy-700"
              >
                {t("cta.secondary")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
