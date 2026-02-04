// src/app/[locale]/contact/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - CONTACT PAGE
// Comprehensive contact page with form, office locations, and contact info
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/home/ContactForm";
import ContactFaqModal from '@/components/ContactFaqModal';

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
const t = await getTranslations({ locale, namespace: "contactPage" });


  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   OFFICE LOCATIONS DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const offices = [
  {
    key: "headquarters",
    city: "33790 Halle Westfalen",
    country: "Germany",
    address: "Neulehenstraße 8",
    postalCode: "P.O. Box 33790",
    phone: "+49 30 123 456 7890",
    email: "info@bontera.de",
    hours: "Sun - Thu: 8:00 AM - 6:00 PM",
    image: "/images/offices/dubai.jpg",
    mapUrl: "https://maps.google.com/?q=Stodieks%20Hof%2077%2C%2033790%20Halle%20%28Westfalen%29%2C%20Germany",

    isHQ: true,
  },



];

const contactMethods = [
  {
    key: "phone",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
    value: "+49 30 123 456 7890",
    href: "tel:+49 30 123 456 7890",
  },
  {
    key: "email",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    value: "info@bontera.de",
    href: "mailto:info@bontera.de",
  },
  {
    key: "whatsapp",
    icon: "M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12c0 1.545.426 2.99 1.166 4.225L3.75 20.25l4.025-1.166A8.206 8.206 0 0012 20.25z",
    value: "+49 30 123 456 7890",
    href: "https://wa.me/49301234567890",
  },
  {
    key: "emergency",
    icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
    value: "1-800-BONTERA",
    href: "tel:1800BONTERA",
  },
];

const departments = [
  { key: "general", email: "info@bontera.de" },
  { key: "sales", email: "sales@bontera.de" },
  { key: "projects", email: "projects@bontera.de" },
  { key: "careers", email: "careers@bontera.de" },
  { key: "media", email: "media@bontera.de" },
  { key: "support", email: "support@bontera.de" },
];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
 const t = await getTranslations({ locale, namespace: "contactPage" });

  const isRTL = locale === "ku";

  const getGoogleMapsEmbedUrl = (mapUrl: string) => {
  try {
    const url = new URL(mapUrl);
    const q = url.searchParams.get("q") ?? "";
    return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  } catch {
    return "https://www.google.com/maps?q=Germany&output=embed";
  }
};


  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Bontera"
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
                <li className="text-white font-medium">{t("breadcrumb.contact")}</li>
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUICK CONTACT METHODS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-8 z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.key}
                href={method.href}
                className="group bg-white p-6 shadow-lg border border-bontera-grey-200 hover:border-bontera-navy-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bontera-navy-50 text-bontera-navy-600 flex items-center justify-center group-hover:bg-bontera-navy-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-bontera-grey-500 uppercase tracking-wider">
                      {t(`methods.${method.key}.label`)}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                      {method.value}
                    </p>
                    <p className="mt-1 text-sm text-bontera-grey-500">
                      {t(`methods.${method.key}.description`)}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTACT FORM SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form Side */}
            <div>
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

              {/* Contact Form Component */}
              <div className="mt-10">
                <ContactForm locale={locale} />
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:pl-12">
              {/* Departments */}
              <div className="bg-bontera-grey-50 p-8 border border-bontera-grey-200">
                <h3 className="text-xl font-semibold text-bontera-grey-900 mb-6">
                  {t("departments.title")}
                </h3>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.key} className="flex items-center justify-between py-3 border-b border-bontera-grey-200 last:border-0">
                      <span className="font-medium text-bontera-grey-700">
                        {t(`departments.items.${dept.key}`)}
                      </span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-bontera-navy-600 hover:text-bontera-navy-700 font-medium transition-colors"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-6 bg-bontera-navy-600 p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{t("responseTime.title")}</h4>
                    <p className="mt-2 text-bontera-navy-100 leading-relaxed">
                      {t("responseTime.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 p-8 border border-bontera-grey-200">
                <h4 className="text-lg font-semibold text-bontera-grey-900 mb-4">
                  {t("social.title")}
                </h4>
                <div className="flex items-center gap-3">
                  {[
                    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", href: "#" },
                    { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: "#" },
                    { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "#" },
                    { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", href: "#" },
                    { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 bg-bontera-grey-100 text-bontera-grey-600 flex items-center justify-center hover:bg-bontera-navy-600 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          OFFICE LOCATIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-bontera-grey-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
              <span className="w-8 h-px bg-bontera-navy-600" />
              {t("offices.eyebrow")}
              <span className="w-8 h-px bg-bontera-navy-600" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
              {t("offices.title")}
            </h2>
            <p className="mt-6 text-lg text-bontera-grey-600">
              {t("offices.description")}
            </p>
          </div>

          {/* Office Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {offices.map((office) => (
              <div
                key={office.key}
                className={`group bg-white border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  office.isHQ ? "border-bontera-navy-300 md:col-span-2" : "border-bontera-grey-200 hover:border-bontera-grey-300"
                }`}
              >
                <div className={`grid ${office.isHQ ? "md:grid-cols-2" : ""}`}>
                  {/* Image */}
                  <div className={`relative ${office.isHQ ? "h-64 md:h-auto" : "h-48"} overflow-hidden`}>
                    <Image
                      src={office.image}
                      alt={`${office.city} Office`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={office.isHQ ? "50vw" : "25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/60 via-transparent to-transparent" />
                    
                    {/* HQ Badge */}
                    {office.isHQ && (
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gray-500 text-white text-xs font-semibold uppercase tracking-wider">
                          {t("offices.headquarters")}
                        </span>
                      </div>
                    )}

                    {/* City Name Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-semibold text-white">{office.city}</h3>
                      <p className="text-white/80 text-sm">{office.country}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 ${office.isHQ ? "flex flex-col justify-center" : ""}`}>
                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>
                          <p className="text-bontera-grey-900">{office.address}</p>
                          <p className="text-bontera-grey-500 text-sm">{office.postalCode}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-bontera-navy-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-bontera-grey-900 hover:text-bontera-navy-600 transition-colors">
                          {office.phone}
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-bontera-navy-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <a href={`mailto:${office.email}`} className="text-bontera-navy-600 hover:text-bontera-navy-700 font-medium transition-colors">
                          {office.email}
                        </a>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-bontera-navy-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-bontera-grey-600 text-sm">{office.hours}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-6 border-t border-bontera-grey-200 flex items-center gap-4">
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                        {t("offices.viewOnMap")}
                      </a>
                    </div>
                  </div>
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

              <div className="mt-8">
               <div className="mt-8">
  <ContactFaqModal isRTL={isRTL} />
</div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {["timeline", "budget", "process", "warranty"].map((faq) => (
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
          MAP SECTION
      ═══════════════════════════════════════════════════════════════════ */}
<section className="relative h-[400px] lg:h-[500px] bg-bontera-grey-200">
  {/* Google Map Embed */}
  <div className="absolute inset-0">
    <iframe
      title={`Map - ${offices[0].city}`}
      src={getGoogleMapsEmbedUrl(offices[0].mapUrl)}
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>

  {/* Floating Card (keep yours as-is) */}
  <div
    className={`absolute bottom-8 ${isRTL ? "right-8" : "left-8"} lg:bottom-12 ${
      isRTL ? "lg:right-16" : "lg:left-16"
    } bg-white p-6 shadow-2xl max-w-sm`}
  >
    <h3 className="text-lg font-semibold text-bontera-grey-900">{t("map.visitUs")}</h3>
    <p className="mt-2 text-bontera-grey-600 text-sm">
      {offices[0].address}, {offices[0].city}
    </p>
    <a
      href={offices[0].mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700"
    >
      {t("map.getDirections")}
      <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</section>


    </main>
  );
}