import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import LegalDocumentShell, {
  LegalSectionCard,
} from "@/components/legal/LegalDocumentShell";
import { getLocaleDirection, type Locale } from "@/lib/i18n/config";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({
    locale,
    namespace: "nutzungsbedingungenPage",
  });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function NutzungsbedingungenPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({
    locale,
    namespace: "nutzungsbedingungenPage",
  });
  const shared = await getTranslations({ locale, namespace: "legalShared" });
  const dir = getLocaleDirection(locale as Locale);

  const sections = [
    {
      id: "scope",
      number: "01",
      title: t("sections.scope.title"),
      paragraphs: [t("sections.scope.p1"), t("sections.scope.p2")],
    },
    {
      id: "usage",
      number: "02",
      title: t("sections.usage.title"),
      paragraphs: [t("sections.usage.p1"), t("sections.usage.p2")],
    },
    {
      id: "intellectual-property",
      number: "03",
      title: t("sections.intellectualProperty.title"),
      paragraphs: [
        t("sections.intellectualProperty.p1"),
        t("sections.intellectualProperty.p2"),
      ],
    },
    {
      id: "liability",
      number: "04",
      title: t("sections.liability.title"),
      paragraphs: [t("sections.liability.p1"), t("sections.liability.p2")],
    },
    {
      id: "changes",
      number: "05",
      title: t("sections.changes.title"),
      paragraphs: [t("sections.changes.p1")],
    },
    {
      id: "applicable-law",
      number: "06",
      title: t("sections.applicableLaw.title"),
      paragraphs: [t("sections.applicableLaw.p1")],
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
        { label: t("breadcrumb.terms") },
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
      {sections.map((section) => (
        <LegalSectionCard
          key={section.id}
          id={section.id}
          number={section.number}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
    </LegalDocumentShell>
  );
}
