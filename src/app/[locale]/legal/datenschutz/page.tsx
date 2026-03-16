import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import LegalDocumentShell, {
  LegalSectionCard,
} from "@/components/legal/LegalDocumentShell";
import {
  LEGAL_EMAIL,
  LEGAL_EMAIL_HREF,
  LEGAL_OFFICE_LINES,
  LEGAL_PHONE_DISPLAY,
  LEGAL_PHONE_HREF,
  LEGAL_REPRESENTATIVE,
} from "@/components/legal/legalData";
import { getLocaleDirection, type Locale } from "@/lib/i18n/config";

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
  const shared = await getTranslations({ locale, namespace: "legalShared" });
  const dir = getLocaleDirection(locale as Locale);

  const sections = [
    {
      id: "general",
      number: "01",
      title: t("sections.general.title"),
      paragraphs: [t("sections.general.p1"), t("sections.general.p2")],
    },
    {
      id: "responsible",
      number: "02",
      title: t("sections.responsible.title"),
    },
    {
      id: "server-logs",
      number: "03",
      title: t("sections.serverLogs.title"),
      paragraphs: [t("sections.serverLogs.p1"), t("sections.serverLogs.p2")],
      items: [
        t("sections.serverLogs.items.ip"),
        t("sections.serverLogs.items.browser"),
        t("sections.serverLogs.items.os"),
        t("sections.serverLogs.items.referrer"),
        t("sections.serverLogs.items.hostname"),
        t("sections.serverLogs.items.time"),
      ],
    },
    {
      id: "cookies",
      number: "04",
      title: t("sections.cookies.title"),
      paragraphs: [t("sections.cookies.p1"), t("sections.cookies.p2")],
    },
    {
      id: "contact",
      number: "05",
      title: t("sections.contact.title"),
      paragraphs: [t("sections.contact.p1"), t("sections.contact.p2")],
    },
    {
      id: "rights",
      number: "06",
      title: t("sections.rights.title"),
      paragraphs: [t("sections.rights.p1")],
      items: [
        t("sections.rights.items.access"),
        t("sections.rights.items.rectification"),
        t("sections.rights.items.erasure"),
        t("sections.rights.items.restriction"),
        t("sections.rights.items.portability"),
        t("sections.rights.items.objection"),
      ],
    },
    {
      id: "complaint",
      number: "07",
      title: t("sections.complaint.title"),
      paragraphs: [t("sections.complaint.p1"), t("sections.complaint.p2")],
    },
    {
      id: "ssl",
      number: "08",
      title: t("sections.ssl.title"),
      paragraphs: [t("sections.ssl.p1"), t("sections.ssl.p2")],
    },
    {
      id: "retention",
      number: "09",
      title: t("sections.retention.title"),
      paragraphs: [t("sections.retention.p1")],
    },
  ];

  return (
    <LegalDocumentShell
      locale={locale}
      dir={dir}
      heroAlt={t("hero.title")}
      eyebrow={t("hero.eyebrow")}
      title={t("hero.title")}
      subtitle={t("hero.subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb.home"), href: `/${locale}` },
        { label: t("breadcrumb.legal"), href: `/${locale}/legal` },
        { label: t("breadcrumb.datenschutz") },
      ]}
      sections={sections.map(({ id, number, title }) => ({ id, number, title }))}
      sidebarCopy={{
        tocTitle: shared("sidebar.tocTitle"),
        officeLabel: shared("sidebar.officeLabel"),
        phoneLabel: shared("sidebar.phoneLabel"),
        emailLabel: shared("sidebar.emailLabel"),
        supportTitle: shared("sidebar.supportTitle"),
        supportBody: shared("sidebar.supportBody"),
        backToHubLabel: t("backToLegal"),
      }}
    >
      <LegalSectionCard
        id={sections[0].id}
        number={sections[0].number}
        title={sections[0].title}
        paragraphs={sections[0].paragraphs}
      />

      <LegalSectionCard
        id={sections[1].id}
        number={sections[1].number}
        title={sections[1].title}
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
              {shared("labels.company")}
            </p>
            <p className="mt-3 text-lg font-semibold text-bontera-grey-900">
              BONTERA GmbH
            </p>
            <div className="mt-3 space-y-1 text-sm leading-6 text-bontera-grey-600">
              {LEGAL_OFFICE_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href={LEGAL_PHONE_HREF}
              className="rounded-2xl border border-bontera-grey-200 bg-white p-5 transition-colors hover:border-bontera-navy-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
                {shared("labels.phone")}
              </p>
              <p className="mt-3 text-lg font-semibold text-bontera-grey-900">
                {LEGAL_PHONE_DISPLAY}
              </p>
            </a>

            <a
              href={LEGAL_EMAIL_HREF}
              className="rounded-2xl border border-bontera-grey-200 bg-white p-5 transition-colors hover:border-bontera-navy-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
                {shared("labels.email")}
              </p>
              <p className="mt-3 text-lg font-semibold text-bontera-grey-900">
                {LEGAL_EMAIL}
              </p>
            </a>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-bontera-navy-100 bg-bontera-navy-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-navy-500">
            {shared("labels.representative")}
          </p>
          <p className="mt-3 text-lg font-semibold text-bontera-grey-900">
            {LEGAL_REPRESENTATIVE}
          </p>
        </div>
      </LegalSectionCard>

      {sections.slice(2).map((section) => (
        <LegalSectionCard
          key={section.id}
          id={section.id}
          number={section.number}
          title={section.title}
          paragraphs={section.paragraphs}
          items={section.items}
        />
      ))}
    </LegalDocumentShell>
  );
}
