import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import LegalDocumentShell, {
  LegalSectionCard,
} from "@/components/legal/LegalDocumentShell";
import { LEGAL_EMAIL, LEGAL_EMAIL_HREF } from "@/components/legal/legalData";
import { getLocaleDirection, type Locale } from "@/lib/i18n/config";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "cookiePage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function CookiePage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "cookiePage" });
  const shared = await getTranslations({ locale, namespace: "legalShared" });
  const dir = getLocaleDirection(locale as Locale);

  const sections = [
    {
      id: "what-are-cookies",
      number: "01",
      title: t("sections.whatAreCookies.title"),
      paragraphs: [t("sections.whatAreCookies.p1"), t("sections.whatAreCookies.p2")],
    },
    {
      id: "types-of-cookies",
      number: "02",
      title: t("sections.typesOfCookies.title"),
      paragraphs: [t("sections.typesOfCookies.p1")],
    },
    {
      id: "manage-cookies",
      number: "03",
      title: t("sections.manageCookies.title"),
      paragraphs: [t("sections.manageCookies.p1"), t("sections.manageCookies.p2")],
    },
    {
      id: "third-party",
      number: "04",
      title: t("sections.thirdParty.title"),
      paragraphs: [t("sections.thirdParty.p1")],
    },
    {
      id: "contact",
      number: "05",
      title: t("sections.contact.title"),
      paragraphs: [t("sections.contact.p1")],
    },
  ];

  const cookieTypes = [
    {
      label: t("sections.typesOfCookies.necessary.label"),
      description: t("sections.typesOfCookies.necessary.description"),
    },
    {
      label: t("sections.typesOfCookies.analytics.label"),
      description: t("sections.typesOfCookies.analytics.description"),
    },
    {
      label: t("sections.typesOfCookies.preferences.label"),
      description: t("sections.typesOfCookies.preferences.description"),
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
        { label: t("breadcrumb.cookies") },
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
        paragraphs={sections[1].paragraphs}
      >
        <ul className="grid gap-4">
          {cookieTypes.map((type) => (
            <li
              key={type.label}
              className="rounded-2xl border border-bontera-grey-200 bg-bontera-grey-50 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-bontera-navy-500">
                {type.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-bontera-grey-600">
                {type.description}
              </p>
            </li>
          ))}
        </ul>
      </LegalSectionCard>

      <LegalSectionCard
        id={sections[2].id}
        number={sections[2].number}
        title={sections[2].title}
        paragraphs={sections[2].paragraphs}
      />

      <LegalSectionCard
        id={sections[3].id}
        number={sections[3].number}
        title={sections[3].title}
        paragraphs={sections[3].paragraphs}
      />

      <LegalSectionCard
        id={sections[4].id}
        number={sections[4].number}
        title={sections[4].title}
        paragraphs={sections[4].paragraphs}
      >
        <a
          href={LEGAL_EMAIL_HREF}
          className="inline-flex items-center rounded-2xl bg-bontera-navy-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-bontera-navy-700"
        >
          {LEGAL_EMAIL}
        </a>
      </LegalSectionCard>
    </LegalDocumentShell>
  );
}
