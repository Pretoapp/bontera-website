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
  const t = await getTranslations({ locale, namespace: "impressumPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "impressumPage" });
  const shared = await getTranslations({ locale, namespace: "legalShared" });
  const dir = getLocaleDirection(locale as Locale);

  const sections = [
    { id: "company", number: "01", title: t("hero.title") },
    { id: "registration", number: "02", title: t("content.registrationTitle") },
    { id: "tax-id", number: "03", title: t("content.taxIdTitle") },
    { id: "supervisory", number: "04", title: t("content.supervisoryTitle") },
    { id: "editorial", number: "05", title: t("content.editorialTitle") },
    { id: "eu-dispute", number: "06", title: t("content.euDisputeTitle") },
    {
      id: "consumer-dispute",
      number: "07",
      title: t("content.consumerDisputeTitle"),
    },
    {
      id: "liability-content",
      number: "08",
      title: t("content.liabilityContentTitle"),
    },
    {
      id: "liability-links",
      number: "09",
      title: t("content.liabilityLinksTitle"),
    },
    { id: "copyright", number: "10", title: t("content.copyrightTitle") },
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
        { label: t("breadcrumb.impressum") },
      ]}
      sections={sections}
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
      >
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
              {shared("labels.company")}
            </p>
            <p className="mt-3 text-2xl font-semibold text-bontera-grey-900">
              BONTERA GmbH
            </p>
            <div className="mt-4 space-y-1 text-base leading-7 text-bontera-grey-600">
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

        <div className="mt-4 rounded-2xl border border-bontera-navy-100 bg-bontera-navy-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-navy-500">
            {t("content.representedBy")}
          </p>
          <p className="mt-3 text-lg font-semibold text-bontera-grey-900">
            {LEGAL_REPRESENTATIVE}
          </p>
        </div>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[1].id}
        number={sections[1].number}
        title={sections[1].title}
      >
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
              {shared("labels.commercialRegister")}
            </dt>
            <dd className="mt-3 text-base leading-7 text-bontera-grey-700">
              {t("content.registrationValue")}
            </dd>
          </div>

          <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
              {shared("labels.registrationCourt")}
            </dt>
            <dd className="mt-3 text-base leading-7 text-bontera-grey-700">
              {t("content.courtValue")}
            </dd>
          </div>

          <div className="rounded-2xl border border-bontera-grey-200 bg-white p-5 sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
              {shared("labels.representative")}
            </dt>
            <dd className="mt-3 text-base leading-7 text-bontera-grey-700">
              {LEGAL_REPRESENTATIVE}
            </dd>
          </div>
        </dl>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[2].id}
        number={sections[2].number}
        title={sections[2].title}
        paragraphs={[t("content.taxIdDescription")]}
      >
        <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bontera-grey-500">
            {shared("labels.vatId")}
          </p>
          <p className="mt-3 text-base leading-7 text-bontera-grey-700">
            {t("content.taxIdValue")}
          </p>
        </div>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[3].id}
        number={sections[3].number}
        title={sections[3].title}
        paragraphs={["BG BAU", t("content.supervisoryBody2")]}
      />

      <LegalSectionCard
        id={sections[4].id}
        number={sections[4].number}
        title={sections[4].title}
      >
        <div className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-6">
          <p className="text-lg font-semibold text-bontera-grey-900">
            {LEGAL_REPRESENTATIVE}
          </p>
          <div className="mt-4 space-y-1 text-base leading-7 text-bontera-grey-600">
            {LEGAL_OFFICE_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[5].id}
        number={sections[5].number}
        title={sections[5].title}
        paragraphs={[t("content.euDisputeBody"), t("content.euDisputeEmail")]}
      >
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-2xl bg-bontera-navy-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-bontera-navy-700"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[6].id}
        number={sections[6].number}
        title={sections[6].title}
        paragraphs={[t("content.consumerDisputeBody")]}
      />

      <LegalSectionCard
        id={sections[7].id}
        number={sections[7].number}
        title={sections[7].title}
        paragraphs={[
          t("content.liabilityContentBody1"),
          t("content.liabilityContentBody2"),
        ]}
      />

      <LegalSectionCard
        id={sections[8].id}
        number={sections[8].number}
        title={sections[8].title}
        paragraphs={[
          t("content.liabilityLinksBody1"),
          t("content.liabilityLinksBody2"),
        ]}
      />

      <LegalSectionCard
        id={sections[9].id}
        number={sections[9].number}
        title={sections[9].title}
        paragraphs={[t("content.copyrightBody1"), t("content.copyrightBody2")]}
      />
    </LegalDocumentShell>
  );
}
