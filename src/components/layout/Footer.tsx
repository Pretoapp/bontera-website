'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Locale } from '@/lib/i18n/config';

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

export default function Footer() {
  const t = useTranslations();
  const params = useParams();
  const currentLocale = params.locale as Locale;
  const isRTL = currentLocale === 'ar';

  const currentYear = new Date().getFullYear();

  const mainNavItems = [
    { key: 'about', href: `/${currentLocale}/about` },
    { key: 'services', href: `/${currentLocale}/services` },
    { key: 'projects', href: `/${currentLocale}/projects` },
    { key: 'careers', href: `/${currentLocale}/careers` },
    { key: 'news', href: `/${currentLocale}/news` },
    { key: 'contact', href: `/${currentLocale}/contact` },
  ];

  const serviceLinks = [
    { key: 'commercial', href: `/${currentLocale}/services/commercial` },
    { key: 'realEstate', href: `/${currentLocale}/services/real-estate` },
    { key: 'residential', href: `/${currentLocale}/services/residential` },
    { key: 'industrial', href: `/${currentLocale}/services/industrial` },
    { key: 'renovation', href: `/${currentLocale}/services/renovation` },
    { key: 'consulting', href: `/${currentLocale}/services/consulting` },
  ];

  const legalLinks = [
    { key: 'privacy', href: `/${currentLocale}/privacy` },
    { key: 'terms', href: `/${currentLocale}/terms` },
    { key: 'cookies', href: `/${currentLocale}/cookies` },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { name: 'X', href: '#', icon: XIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'YouTube', href: '#', icon: YouTubeIcon },
  ];

  return (
    <footer className="relative bg-bontera-navy-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ═══════════════════════════════════════════════════════════════════
          TOP CTA BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      
            
            
            </div>
            
        
             
             
          
            </div>
          </div>
      
 

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN FOOTER CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative">
        {/* Background texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,58,95,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,58,95,0.2),transparent_50%)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* ─────────────────────────────────────────────
                BRAND COLUMN
            ───────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link href={`/${currentLocale}`} className="inline-flex items-center gap-4 group">
                <span className="relative h-14 w-14 rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg group-hover:border-white/30 transition-colors">
                  <Image
                    src="/images/bon.png"
                    alt="Bontera"
                    fill
                    sizes="56px"
                    className="object-contain scale-[1.18]"
                  />
                </span>
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-white">BONTERA</div>
                  <div className="text-sm text-bontera-grey-400">Construction & Infrastructure</div>
                </div>
              </Link>

              {/* Description */}
              <p className="mt-8 text-base text-bontera-grey-400 leading-relaxed max-w-sm">
                {t('footer.description')}
              </p>

              {/* Certifications */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {[
                  { label: 'ISO 9001', sublabel: '2015' },
                  { label: 'LEED', sublabel: 'Certified' },
                  { label: 'OSHA', sublabel: 'Compliant' },
                ].map((cert) => (
                  <div 
                    key={cert.label}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold rounded">
                      {cert.label.substring(0, 3)}
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-white">{cert.label}</div>
                      <div className="text-bontera-grey-500">{cert.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <div className="text-xs uppercase tracking-wider text-bontera-grey-500 font-semibold mb-4">
                  {t('footer.followUs')}
                </div>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-bontera-grey-400 hover:text-white transition-all duration-200"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────
                NAVIGATION COLUMNS
            ───────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-wider text-bontera-grey-500 font-semibold mb-6">
                {t('footer.company')}
              </h4>
              <ul className="space-y-4">
                {mainNavItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-sm text-bontera-grey-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className={`w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-3 ${isRTL ? 'order-2' : ''}`} />
                      {t(`navigation.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-wider text-bontera-grey-500 font-semibold mb-6">
                {t('footer.services')}
              </h4>
              <ul className="space-y-4">
                {serviceLinks.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-sm text-bontera-grey-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className={`w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-3 ${isRTL ? 'order-2' : ''}`} />
                      {t(`footer.serviceLinks.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─────────────────────────────────────────────
                CONTACT COLUMN
            ───────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              <h4 className="text-xs uppercase tracking-wider text-bontera-grey-500 font-semibold mb-6">
                {t('footer.contactUs')}
              </h4>

              {/* Office Cards */}
              <div className="space-y-4">
                {/* Main Office */}
                <div className="p-5 bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-400/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t('footer.offices.headquarters')}</div>
                      <div className="mt-1 text-sm text-bontera-grey-400 leading-relaxed">
  Stodieks Hof 77<br />
  33790 Halle (Westfalen), Germany
</div>

                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+4930123456789"
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-9 h-9 bg-bontera-navy-600 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-bontera-grey-500 uppercase tracking-wider">{t('footer.phone')}</div>
                      <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">+49 30 123 456 789</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@bontera.de"
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-9 h-9 bg-bontera-navy-600 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-bontera-grey-500 uppercase tracking-wider">{t('footer.email')}</div>
                      <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">info@bontera.de</div>
                    </div>
                  </a>
                </div>

                {/* Emergency Contact */}
                <div className="p-4 bg-amber-400/10 border border-amber-400/30">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-amber-400">{t('footer.emergency')}</div>
                      <a href="tel:+49301234567890" className="text-sm text-white hover:text-amber-400 transition-colors">
                        +49 30 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-bontera-grey-500">
              © {currentYear} Bontera Construction. {t('footer.allRightsReserved')}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((item, i) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm text-bontera-grey-500 hover:text-white transition-colors"
                >
                  {t(`footer.legal.${item.key}`)}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm text-bontera-grey-500 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              {t('footer.backToTop')}
              <span className="w-8 h-8 flex items-center justify-center bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/20 transition-all">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SOCIAL ICONS
   ═══════════════════════════════════════════════════════════════════════════ */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}