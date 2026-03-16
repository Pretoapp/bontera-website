import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  LEGAL_EMAIL,
  LEGAL_EMAIL_HREF,
  LEGAL_OFFICE_LINES,
  LEGAL_PHONE_DISPLAY,
  LEGAL_PHONE_HREF,
} from "@/components/legal/legalData";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SectionLink = {
  id: string;
  number: string;
  title: string;
};

type SidebarCopy = {
  tocTitle: string;
  officeLabel: string;
  phoneLabel: string;
  emailLabel: string;
  supportTitle: string;
  supportBody: string;
  backToHubLabel: string;
};

type LegalDocumentShellProps = {
  locale: string;
  dir: "ltr" | "rtl";
  heroAlt: string;
  heroImage?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  sections: SectionLink[];
  sidebarCopy: SidebarCopy;
  children: ReactNode;
};

type LegalSectionCardProps = {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  children?: ReactNode;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

export function LegalSectionCard({
  id,
  number,
  title,
  paragraphs,
  items,
  children,
}: LegalSectionCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 rounded-[28px] border border-bontera-grey-200 bg-white p-7 shadow-[0_20px_70px_rgba(17,33,57,0.08)] sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-bontera-navy-600 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(30,58,95,0.18)]">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-bontera-grey-900 sm:text-3xl">
            {title}
          </h2>

          {paragraphs?.length ? (
            <div className="mt-6 space-y-4 text-base leading-8 text-bontera-grey-600 sm:text-[1.04rem]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {items?.length ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 px-4 py-3 text-sm font-medium leading-6 text-bontera-grey-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export default function LegalDocumentShell({
  locale,
  dir,
  heroAlt,
  heroImage = "/images/contact-hero.jpg",
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  sections,
  sidebarCopy,
  children,
}: LegalDocumentShellProps) {
  const isRTL = dir === "rtl";

  return (
    <main className="bg-bontera-grey-50" dir={dir}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,33,57,0.7)_0%,rgba(17,33,57,0.78)_42%,rgba(17,33,57,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(102,133,168,0.18),transparent_36%)]" />
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

        <div className="relative z-10 mx-auto flex min-h-[30rem] max-w-[1500px] items-end px-6 pb-16 pt-32 sm:pb-20 lg:px-16 lg:pt-40">
          <div className="w-full">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-bontera-grey-300">
                {breadcrumbs.map((item, index) => (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-white">{item.label}</span>
                    )}

                    {index < breadcrumbs.length - 1 ? (
                      <Chevron className={cn("h-4 w-4", isRTL && "rotate-180")} />
                    ) : null}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-10 max-w-4xl">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-bontera-grey-300">
                <span className="h-px w-10 bg-white/30" />
                {eyebrow}
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-bontera-grey-200 sm:text-xl">
                {subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:max-w-4xl lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
              <div className="rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-bontera-grey-300">
                  {sidebarCopy.officeLabel}
                </p>
                <div className="mt-3 space-y-1 text-sm leading-6 text-white/85">
                  {LEGAL_OFFICE_LINES.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <a
                href={LEGAL_PHONE_HREF}
                className="rounded-[24px] border border-white/12 bg-white/8 p-5 transition-colors hover:bg-white/12"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-bontera-grey-300">
                  {sidebarCopy.phoneLabel}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {LEGAL_PHONE_DISPLAY}
                </p>
              </a>

              <a
                href={LEGAL_EMAIL_HREF}
                className="rounded-[24px] border border-white/12 bg-white/8 p-5 transition-colors hover:bg-white/12"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-bontera-grey-300">
                  {sidebarCopy.emailLabel}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {LEGAL_EMAIL}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(17,33,57,0.05),transparent)]" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-10">
            <div className="space-y-6">{children}</div>

            <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
              <div className="rounded-[28px] bg-bontera-navy-900 p-6 text-white shadow-[0_24px_70px_rgba(17,33,57,0.25)]">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bontera-grey-300">
                  {sidebarCopy.tocTitle}
                </p>

                <nav className="mt-5 space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
                        {section.number}
                      </span>
                      <span className="text-sm leading-6 text-bontera-grey-200 group-hover:text-white">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-[28px] border border-bontera-grey-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,33,57,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bontera-grey-500">
                  {sidebarCopy.supportTitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-bontera-grey-600">
                  {sidebarCopy.supportBody}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={LEGAL_EMAIL_HREF}
                    className="flex items-center justify-between rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 px-4 py-3 text-sm font-semibold text-bontera-grey-800 transition-colors hover:border-bontera-navy-300 hover:text-bontera-navy-700"
                  >
                    <span>{LEGAL_EMAIL}</span>
                    <Chevron className={cn("h-4 w-4", isRTL && "rotate-180")} />
                  </a>

                  <Link
                    href={`/${locale}/legal`}
                    className="flex items-center justify-between rounded-2xl bg-bontera-navy-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-bontera-navy-700"
                  >
                    <span>{sidebarCopy.backToHubLabel}</span>
                    <Chevron className={cn("h-4 w-4", isRTL && "rotate-180")} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
