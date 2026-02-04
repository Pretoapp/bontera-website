'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { locales, localeShortNames, type Locale } from '@/lib/i18n/config';

/* ═══════════════════════════════════════════════════════════════════════════
   CONFIGURATION & TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

const localeLabels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  nl: 'Néerlandais',
  it: 'Italiano',
  ku: 'Kurmaçi',
  tr: 'Türkçe',
};

type MegaMenuItem = {
  key: string;
  icon: React.ReactNode;
  href: string;
};

type NavItem = {
  key: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenuType?: 'services' | 'projects' | 'company';
};

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

/* ═══════════════════════════════════════════════════════════════════════════
   ICONS - Architectural/Construction themed
   ═══════════════════════════════════════════════════════════════════════════ */

const Icons = {
  phone: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  email: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  chevronDown: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  arrowRight: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  close: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  menu: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  realEstate: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  renovation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  consulting: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  management: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  sustainability: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5 0-8-3-8-7 0-6 8-11 8-11s8 5 8 11c0 4-3.5 7-8 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8" />
    </svg>
  ),
  commercial: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  residential: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),

  industrial: (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21V10l6 3V10l6 3V10l6 3v8H3z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-3m4 3v-3m4 3v-3" />
  </svg>
),


  publicWorks: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.638.33 3.867.63a5.883 5.883 0 00-2.126 1.384A5.883 5.883 0 00.357 4.14c-.3.77-.5 1.66-.558 2.89C-.26 8.26-.273 8.667-.273 12.29s.013 4.03.072 5.262c.058 1.23.258 2.12.558 2.89a5.883 5.883 0 001.384 2.126A5.883 5.883 0 003.867 23.95c.77.3 1.66.5 2.89.558 1.232.059 1.639.072 5.262.072s4.03-.013 5.262-.072c1.23-.058 2.12-.258 2.89-.558a5.883 5.883 0 002.126-1.384 5.883 5.883 0 001.384-2.126c.3-.77.5-1.66.558-2.89.059-1.232.072-1.639.072-5.262s-.013-4.03-.072-5.262c-.058-1.23-.258-2.12-.558-2.89a5.883 5.883 0 00-1.384-2.126A5.883 5.883 0 0020.14.63c-.77-.3-1.66-.5-2.89-.558C16.017.013 15.61 0 11.987 0h.03zm0 2.16c3.562 0 3.987.014 5.396.078 1.302.06 2.01.277 2.48.46.623.242 1.068.53 1.535.998.468.467.756.912.998 1.535.183.47.4 1.178.46 2.48.064 1.409.078 1.834.078 5.396s-.014 3.987-.078 5.396c-.06 1.302-.277 2.01-.46 2.48a4.14 4.14 0 01-.998 1.535 4.14 4.14 0 01-1.535.998c-.47.183-1.178.4-2.48.46-1.409.064-1.834.078-5.396.078s-3.987-.014-5.396-.078c-1.302-.06-2.01-.277-2.48-.46a4.14 4.14 0 01-1.535-.998 4.14 4.14 0 01-.998-1.535c-.183-.47-.4-1.178-.46-2.48-.064-1.409-.078-1.834-.078-5.396s.014-3.987.078-5.396c.06-1.302.277-2.01.46-2.48.242-.623.53-1.068.998-1.535a4.14 4.14 0 011.535-.998c.47-.183 1.178-.4 2.48-.46 1.409-.064 1.834-.078 5.396-.078z" />
      <path d="M12.017 5.838a6.452 6.452 0 100 12.904 6.452 6.452 0 000-12.904zm0 10.645a4.193 4.193 0 110-8.386 4.193 4.193 0 010 8.386zm8.219-10.904a1.507 1.507 0 11-3.014 0 1.507 1.507 0 013.014 0z" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN HEADER COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Header() {
  const t = useTranslations('navigation');
  const tHeader = useTranslations('header');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as Locale;
 const isRTL = currentLocale === 'ku';


  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Refs
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* ─────────────────────────────────────────────
     NAVIGATION CONFIGURATION
  ───────────────────────────────────────────── */

  const navItems: NavItem[] = useMemo(
    () => [
      { key: 'home', href: `/${currentLocale}` },
      { key: 'about', href: `/${currentLocale}/about`, hasMegaMenu: true, megaMenuType: 'company' },
      { key: 'services', href: `/${currentLocale}/services`, hasMegaMenu: true, megaMenuType: 'services' },
      { key: 'projects', href: `/${currentLocale}/projects`, hasMegaMenu: true, megaMenuType: 'projects' },
      { key: 'careers', href: `/${currentLocale}/careers` },
      { key: 'news', href: `/${currentLocale}/news` },
    ],
    [currentLocale]
  );

  const serviceItems: MegaMenuItem[] = useMemo(
    () => [
      { key: 'commercialConstruction', icon: Icons.building, href: `/${currentLocale}/services/commercial` },
      { key: 'realEstate', icon: Icons.realEstate, href: `/${currentLocale}/services/real-estate` },
      { key: 'renovation', icon: Icons.renovation, href: `/${currentLocale}/services/renovation` },
      { key: 'consulting', icon: Icons.consulting, href: `/${currentLocale}/services/consulting` },
      { key: 'projectManagement', icon: Icons.management, href: `/${currentLocale}/services/management` },

    ],
    [currentLocale]
  );

  const projectCategories: MegaMenuItem[] = useMemo(
    () => [
      { key: 'commercial', icon: Icons.commercial, href: `/${currentLocale}/projects?category=commercial` },
      { key: 'residential', icon: Icons.residential, href: `/${currentLocale}/projects?category=residential` },
      { key: 'industrial', icon: Icons.industrial, href: `/${currentLocale}/projects?category=industrial` },
      { key: 'publicWorks', icon: Icons.publicWorks, href: `/${currentLocale}/projects?category=public` },
    ],
    [currentLocale]
  );

  const companyLinks = useMemo(
    () => [
      { key: 'ourStory', href: `/${currentLocale}/about/our-story` },
    

      { key: 'values', href: `/${currentLocale}/about/values` },
       { key: 'whyBontera', href: `/${currentLocale}/about/why-bontera` },
      
    
    ],
    [currentLocale]
  );

  const contactHref = `/${currentLocale}/contact`;
  const quoteHref = `/${currentLocale}/quote`;

  /* ─────────────────────────────────────────────
     UTILITIES
  ───────────────────────────────────────────── */

  const isActive = useCallback(
    (href: string) => {
      const a = (pathname || '').replace(/\/+$/, '');
      const b = href.replace(/\/+$/, '');
      return a === b || a.startsWith(b + '/');
    },
    [pathname]
  );

  const getLocalizedPath = useCallback(
    (locale: Locale) => {
      const segments = (pathname || `/${currentLocale}`).split('/');
      if (segments.length > 1) segments[1] = locale;
      return segments.join('/') || `/${locale}`;
    },
    [pathname, currentLocale]
  );

  /* ─────────────────────────────────────────────
     MEGA MENU HANDLERS
  ───────────────────────────────────────────── */

  const handleMegaMenuEnter = useCallback((key: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setActiveMegaMenu(key);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  }, []);

  /* ─────────────────────────────────────────────
     EFFECTS
  ───────────────────────────────────────────── */

  // Track scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setIsSearchOpen(false);
  }, [pathname]);

  // Escape closes menus
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
        setActiveMegaMenu(null);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Click outside closes dropdowns
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (isLangMenuOpen && langMenuRef.current && !langMenuRef.current.contains(target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isLangMenuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);



  return (
    <header className="fixed top-0 left-0 right-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ─────────────────────────────────────────────
          TOP UTILITY BAR
      ───────────────────────────────────────────── */}
      <div className="hidden lg:block bg-bontera-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between text-xs">
            {/* Contact Info */}
            <div className="flex items-center gap-6 lg:-ml-4">

              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-bontera-grey-300 hover:text-white transition-colors"
              >
                {Icons.phone}
                <span className="font-medium">+49 30 123 456 7890</span>
              </a>
              <a
                href="mailto:info@bontera.de"
                className="inline-flex items-center gap-2 text-bontera-grey-300 hover:text-white transition-colors"
              >
                {Icons.email}
                <span>info@bontera.de</span>
              </a>
              <span className="inline-flex items-center gap-2 text-bontera-grey-400">
                {Icons.location}
                <span>{tHeader('headquarters')}</span>
              </span>
            </div>

            {/* Social + Quick Links */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-1">
                {[
                  { icon: Icons.linkedin, href: '#', label: 'LinkedIn' },
                 
             
                  { icon: Icons.instagram, href: '#', label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 text-bontera-grey-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="w-px h-4 bg-bontera-grey-700" />

           

              {/* Emergency Contact */}
              <a
                href="tel:+1800BONTERA"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                {tHeader('emergency24')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          MAIN HEADER BAR
      ───────────────────────────────────────────── */}
      <div
        className={cn(
          'bg-white border-b border-bontera-grey-200',
          'transition-all duration-300',
          isScrolled
            ? 'shadow-[0_8px_30px_rgba(30,58,95,0.12)]'
            : 'shadow-[0_2px_10px_rgba(30,58,95,0.04)]'
        )}
      >
        {/* Architectural accent line */}
      <div className="h-[2px] lg:h-[3px] bg-gradient-to-r from-bontera-navy-600 via-bontera-navy-500 to-bontera-navy-600" />


        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">

<div
  className={cn(
    'flex items-center justify-between gap-3',
    'lg:grid lg:grid-cols-[140px_1fr_auto] lg:gap-6',
    'transition-all duration-300',
    isScrolled
      ? 'h-[60px] sm:h-[68px] lg:h-[72px]'
      : 'h-[68px] sm:h-[78px] lg:h-[86px]'
  )}
>


            {/* ─────────────────────────────────────────────
                LOGO / BRAND - Shows full logo
            ───────────────────────────────────────────── */}

<Link
  href={`/${currentLocale}`}
  className="relative flex items-center self-stretch shrink-0 w-[170px] lg:w-[210px] -ml-2 lg:-ml-4"
>
  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[34px] sm:h-[40px] lg:h-[46px]
 w-full overflow-visible">
    <Image
      src="/brand/logo01_clean.png"
      alt="Bontera"
      fill
      priority
      quality={100}
      sizes="(min-width: 1024px) 210px, 170px"
      className={cn(
        "object-contain object-left origin-left will-change-transform transition-transform duration-300",
        isScrolled ? "scale-[0.98]" : "scale-[1.00]",
        "drop-shadow-[0_10px_18px_rgba(30,58,95,0.18)]"
      )}
    />
  </span>
</Link>




            {/* ─────────────────────────────────────────────
                DESKTOP NAVIGATION
            ───────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const hasMega = item.hasMegaMenu;

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => hasMega && handleMegaMenuEnter(item.key)}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      aria-haspopup={hasMega ? 'menu' : undefined}
                      aria-expanded={hasMega ? activeMegaMenu === item.key : undefined}
                      className={cn(
                        'relative inline-flex items-center gap-1 px-3 py-2 rounded-full',
                        'text-sm font-medium transition-all duration-150 whitespace-nowrap',
                        active
                          ? 'text-bontera-navy-600 bg-bontera-navy-50'
                          : 'text-bontera-grey-600 hover:text-bontera-navy-600 hover:bg-bontera-grey-100'
                      )}
                    >
                      {t(item.key)}
                      {hasMega && (
                        <span
                          className={cn(
                            'transition-transform duration-200 flex-shrink-0',
                            activeMegaMenu === item.key && 'rotate-180'
                          )}
                        >
                          {Icons.chevronDown}
                        </span>
                      )}

                      {/* Active indicator */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-1/2 -translate-x-1/2 -bottom-[14px]',
                          'h-[2px] w-8 rounded-full bg-bontera-navy-600',
                          'transition-all duration-200',
                          active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        )}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {hasMega && activeMegaMenu === item.key && (
                      <div
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 pt-4',
                          'animate-bontera-fade-in'
                        )}
                        onMouseEnter={() => handleMegaMenuEnter(item.key)}
                        onMouseLeave={handleMegaMenuLeave}
                      >
                        {item.megaMenuType === 'services' && (
                          <ServicesMegaMenu
                            items={serviceItems}
                            locale={currentLocale}
                            t={tHeader}
                            onClose={() => setActiveMegaMenu(null)}
                          />
                        )}
                        {item.megaMenuType === 'projects' && (
                          <ProjectsMegaMenu
                            categories={projectCategories}
                            locale={currentLocale}
                            t={tHeader}
                            onClose={() => setActiveMegaMenu(null)}
                          />
                        )}
                        {item.megaMenuType === 'company' && (
                          <CompanyMegaMenu
                            links={companyLinks}
                            locale={currentLocale}
                            t={tHeader}
                            onClose={() => setActiveMegaMenu(null)}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ─────────────────────────────────────────────
                RIGHT CONTROLS
            ───────────────────────────────────────────── */}
            <div className="flex items-center justify-end gap-2 sm:gap-2">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label={tHeader('search')}
                className={cn(
                  'hidden sm:inline-flex items-center justify-center',
                  'h-10 w-10 rounded-full',
                  'text-bontera-grey-600 hover:text-bontera-navy-600',
                  'bg-bontera-grey-100 hover:bg-bontera-grey-200',
                  'transition-colors duration-150'
                )}
              >
                {Icons.search}
              </button>

              {/* Language Switcher */}
              <div className="relative" ref={langMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsLangMenuOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={isLangMenuOpen}
                  className={cn(
                    'inline-flex items-center gap-1.5',
                    'h-10 px-3 rounded-full',
                    'text-sm font-medium',
                    'text-bontera-grey-700 hover:text-bontera-navy-600',
                    'bg-bontera-grey-100 hover:bg-bontera-grey-200',
                    'border border-bontera-grey-200',
                    'transition-colors duration-150'
                  )}
                >
                  <span className="tracking-wide">{localeShortNames[currentLocale]}</span>
                  <span
                    className={cn(
                      'text-bontera-grey-500 transition-transform duration-200',
                      isLangMenuOpen && 'rotate-180'
                    )}
                  >
                    {Icons.chevronDown}
                  </span>
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div
                    role="menu"
                    className={cn(
                      'absolute right-0 mt-3 w-60',
                      'rounded-2xl bg-white',
                      'border border-bontera-grey-200',
                      'shadow-[0_16px_48px_rgba(30,58,95,0.16)]',
                      'overflow-hidden',
                      'animate-bontera-fade-in'
                    )}
                  >
                    <div className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wider text-bontera-grey-400">
                      {tHeader('selectLanguage')}
                    </div>
                    <div className="pb-2">
                      {locales.map((locale) => {
                        const selected = currentLocale === locale;
                        return (
                          <Link
                            key={locale}
                            href={getLocalizedPath(locale)}
                            onClick={() => setIsLangMenuOpen(false)}
                            role="menuitem"
                            className={cn(
                              'flex items-center justify-between px-4 py-2.5 text-sm',
                              'transition-colors duration-150',
                              selected
                                ? 'bg-bontera-navy-50 text-bontera-navy-600'
                                : 'text-bontera-grey-700 hover:bg-bontera-grey-50 hover:text-bontera-grey-900'
                            )}
                          >
                            <span className="font-medium">
                              {localeShortNames[locale]}
                              <span className="ml-2 font-normal text-bontera-grey-500">
                                {localeLabels[locale]}
                              </span>
                            </span>
                            {selected && (
                              <span className="h-2 w-2 rounded-full bg-bontera-navy-600" aria-hidden="true" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Request Quote CTA */}
              <Link
                href={quoteHref}
                className={cn(
                  'hidden xl:inline-flex items-center justify-center',
                  'h-10 px-4 rounded-full',
                  'bg-bontera-grey-100 hover:bg-bontera-grey-200',
                  'text-bontera-grey-700 hover:text-bontera-navy-600',
                  'text-sm font-semibold whitespace-nowrap',
                  'border border-bontera-grey-200',
                  'transition-all duration-150'
                )}
              >
                {tHeader('requestQuote')}
              </Link>

              {/* Primary Contact CTA */}
              <Link
                href={contactHref}
                className={cn(
                  'hidden lg:inline-flex items-center justify-center gap-2',
                  'h-10 px-4 rounded-full',
                  'bg-bontera-navy-600 hover:bg-bontera-navy-700',
                  'text-white text-sm font-semibold whitespace-nowrap',
                  'shadow-[0_4px_14px_rgba(30,58,95,0.25)]',
                  'hover:shadow-[0_6px_20px_rgba(30,58,95,0.30)]',
                  'transition-all duration-150',
                  'hover:-translate-y-0.5'
                )}
              >
                {t('contact')}
                <span className={isRTL ? 'rotate-180' : ''}>{Icons.arrowRight}</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                className={cn(
                  'lg:hidden inline-flex items-center justify-center',
                  'h-10 w-10 rounded-full',
                  'border border-bontera-grey-200',
                  'bg-white hover:bg-bontera-grey-50',
                  'text-bontera-grey-700 hover:text-bontera-navy-600',
                  'transition-colors duration-150'
                )}
              >
                {isMobileMenuOpen ? Icons.close : Icons.menu}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          SEARCH OVERLAY
      ───────────────────────────────────────────── */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-bontera-grey-900/60 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 pt-[20vh]">
            <div className="relative bg-white rounded-2xl shadow-[0_24px_64px_rgba(30,58,95,0.24)] overflow-hidden animate-bontera-fade-in">
              {/* Search Header */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-bontera-grey-200">
                <span className="text-bontera-grey-400">{Icons.search}</span>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={tHeader('searchPlaceholder')}
                  className="flex-1 text-lg text-bontera-grey-900 placeholder:text-bontera-grey-400 outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-bontera-grey-500 hover:text-bontera-grey-700 transition-colors"
                  aria-label="Close search"
                >
                  {Icons.close}
                </button>
              </div>

              {/* Quick Links */}
              <div className="px-6 py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-3">
                  {tHeader('quickLinks')}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Services', 'Projects', 'Careers', 'Contact'].map((link) => (
                    <Link
                      key={link}
                      href={`/${currentLocale}/${link.toLowerCase()}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-bontera-grey-600 bg-bontera-grey-100 hover:bg-bontera-navy-50 hover:text-bontera-navy-600 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Click outside hint */}
            <p className="mt-4 text-center text-sm text-bontera-grey-400">
              {tHeader('pressEsc')}
            </p>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────
          MOBILE DRAWER
      ───────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          serviceItems={serviceItems}
          projectCategories={projectCategories}
          companyLinks={companyLinks}
          currentLocale={currentLocale}
          isActive={isActive}
          getLocalizedPath={getLocalizedPath}
          onClose={() => setIsMobileMenuOpen(false)}
          t={t}
          tHeader={tHeader}
        />
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MEGA MENU COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function ServicesMegaMenu({
  items,
  locale,
  t,
  onClose,
}: {
  items: MegaMenuItem[];
  locale: Locale;
  t: (key: string) => string;
  onClose: () => void;
}) {
  return (
    <div className="w-[720px] bg-white rounded-2xl border border-bontera-grey-200 shadow-[0_20px_60px_rgba(30,58,95,0.18)] overflow-hidden">
      {/* Architectural texture background */}
      <div className="absolute inset-0 pattern-bontera-lines opacity-[0.04] pointer-events-none" />

      <div className="relative grid grid-cols-[2fr_1fr]">
        {/* Services Grid */}
        <div className="p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-4">
            {t('ourServices')}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-bontera-grey-50 transition-colors"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-bontera-navy-50 text-bontera-navy-600 group-hover:bg-bontera-navy-100 transition-colors">
                  {item.icon}
                </span>
                <div>
                  <div className="text-sm font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors">
                    {t(`services.${item.key}`)}
                  </div>
                  <div className="text-xs text-bontera-grey-500 mt-0.5 line-clamp-1">
                    {t(`services.${item.key}Desc`)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured / CTA Panel */}
        <div className="bg-bontera-navy-50 p-6 border-l border-bontera-grey-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-navy-600 mb-4">
            {t('featured')}
          </div>

          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src="/brand/lastlogo.png"
              alt="Featured service"
              width={200}
              height={120}
              className="w-full h-28 object-cover"
            />
          </div>

          <h4 className="text-sm font-semibold text-bontera-grey-900 mb-2">
            {t('sustainableBuilding')}
          </h4>
          <p className="text-xs text-bontera-grey-600 mb-4 leading-relaxed">
            {t('sustainableBuildingDesc')}
          </p>

          <Link
            href={`/${locale}/services`}
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700"
          >
            {t('viewAllServices')}
            {Icons.arrowRight}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectsMegaMenu({
  categories,
  locale,
  t,
  onClose,
}: {
  categories: MegaMenuItem[];
  locale: Locale;
  t: (key: string) => string;
  onClose: () => void;
}) {
  return (
    <div className="w-[640px] bg-white rounded-2xl border border-bontera-grey-200 shadow-[0_20px_60px_rgba(30,58,95,0.18)] overflow-hidden">
      <div className="grid grid-cols-2">
        {/* Categories */}
        <div className="p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-4">
            {t('projectCategories')}
          </div>
          <div className="space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                href={cat.href}
                onClick={onClose}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-bontera-grey-50 transition-colors"
              >
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-bontera-grey-100 text-bontera-grey-600 group-hover:bg-bontera-navy-50 group-hover:text-bontera-navy-600 transition-colors">
                  {cat.icon}
                </span>
                <span className="text-sm font-medium text-bontera-grey-700 group-hover:text-bontera-navy-600 transition-colors">
                  {t(`projects.${cat.key}`)}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-bontera-grey-200">
            <Link
              href={`/${locale}/projects`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700"
            >
              {t('viewAllProjects')}
              {Icons.arrowRight}
            </Link>
          </div>
        </div>

        {/* Featured Project */}
        <div className="bg-bontera-grey-50 p-6 border-l border-bontera-grey-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-4">
            {t('featuredProject')}
          </div>

          <div className="rounded-xl overflow-hidden mb-4 ring-1 ring-bontera-grey-200">
            <Image
              src="/images/project123.jpg"
              alt="Featured project"
              width={280}
              height={160}
              className="w-full h-36 object-cover"
            />
          </div>

          <h4 className="text-sm font-semibold text-bontera-grey-900 mb-1">
            {t('featuredProjectTitle')}
          </h4>
          <p className="text-xs text-bontera-grey-500 mb-3">
            {t('featuredProjectLocation')}
          </p>

          <div className="flex items-center gap-4 text-xs text-bontera-grey-600">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {t('completed')}
            </span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyMegaMenu({
  links,
  locale,
  t,
  onClose,
}: {
  links: { key: string; href: string }[];
  locale: Locale;
  t: (key: string) => string;
  onClose: () => void;
}) {
  return (
    <div className="w-[480px] bg-white rounded-2xl border border-bontera-grey-200 shadow-[0_20px_60px_rgba(30,58,95,0.18)] overflow-hidden">
      <div className="grid grid-cols-2">
        {/* Company Links */}
        <div className="p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-4">
            {t('aboutBontera')}
          </div>
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={onClose}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-bontera-grey-700 hover:bg-bontera-grey-50 hover:text-bontera-navy-600 transition-colors"
              >
                {t(`company.${link.key}`)}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats / Quick Facts */}
        <div className="bg-bontera-navy-600 p-6 text-white">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-navy-200 mb-4">
            {t('byTheNumbers')}
          </div>

          <div className="space-y-4">
            {[
              { value: '20+', label: t('yearsExperience') },
              { value: '70+', label: t('projectsCompleted') },
              { value: '12', label: t('countriesOperating') },
              { value: '1200+', label: t('teamMembers') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-bontera-navy-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE MENU COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

function MobileMenu({
  navItems,
  serviceItems,
  projectCategories,
  companyLinks,
  currentLocale,
  isActive,
  getLocalizedPath,
  onClose,
  t,
  tHeader,
}: {
  navItems: NavItem[];
  serviceItems: MegaMenuItem[];
  projectCategories: MegaMenuItem[];
  companyLinks: { key: string; href: string }[];
  currentLocale: Locale;
  isActive: (href: string) => boolean;
  getLocalizedPath: (locale: Locale) => string;
  onClose: () => void;
  t: (key: string) => string;
  tHeader: (key: string) => string;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="lg:hidden fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bontera-grey-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-[0_0_60px_rgba(30,58,95,0.25)] animate-bontera-slide-in-right overflow-y-auto">
        {/* Header - Shows full logo */}
        <div className="sticky top-0 z-10 bg-white border-b border-bontera-grey-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="relative h-9 w-[140px] overflow-hidden">

              <Image
                src="/brand/logo01_clean.png"
                alt="Bontera"
                fill
                sizes="140px"
                className="object-contain object-left"
                priority
              />
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-bontera-grey-200 bg-white hover:bg-bontera-grey-50 text-bontera-grey-600 hover:text-bontera-navy-600 transition-colors flex items-center justify-center"
            aria-label="Close menu"
          >
            {Icons.close}
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-4 border-b border-bontera-grey-200">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bontera-grey-100">
            <span className="text-bontera-grey-400">{Icons.search}</span>
            <input
              type="search"
              placeholder={tHeader('searchPlaceholder')}
              className="flex-1 text-sm bg-transparent outline-none text-bontera-grey-900 placeholder:text-bontera-grey-400"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="px-5 py-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isExpanded = expandedSection === item.key;
              const hasSubmenu = item.hasMegaMenu;

              return (
                <div key={item.key}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => !hasSubmenu && onClose()}
                      className={cn(
                        'flex-1 flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors',
                        active
                          ? 'bg-bontera-navy-50 text-bontera-navy-600'
                          : 'text-bontera-grey-700 hover:bg-bontera-grey-50 hover:text-bontera-navy-600'
                      )}
                    >
                      <span>{t(item.key)}</span>
                      {active && !hasSubmenu && (
                        <span className="h-2 w-2 rounded-full bg-bontera-navy-600" />
                      )}
                    </Link>

                    {hasSubmenu && (
                      <button
                        type="button"
                        onClick={() => setExpandedSection(isExpanded ? null : item.key)}
                        className="h-10 w-10 flex items-center justify-center text-bontera-grey-400 hover:text-bontera-grey-600"
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <span
                          className={cn(
                            'transition-transform duration-200',
                            isExpanded && 'rotate-180'
                          )}
                        >
                          {Icons.chevronDown}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="mt-1 ml-4 pl-4 border-l-2 border-bontera-grey-200 space-y-1">
                      {item.megaMenuType === 'services' &&
                        serviceItems.map((s) => (
                          <Link
                            key={s.key}
                            href={s.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-bontera-grey-600 hover:text-bontera-navy-600 transition-colors"
                          >
                            {tHeader(`services.${s.key}`)}
                          </Link>
                        ))}
                      {item.megaMenuType === 'projects' &&
                        projectCategories.map((p) => (
                          <Link
                            key={p.key}
                            href={p.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-bontera-grey-600 hover:text-bontera-navy-600 transition-colors"
                          >
                            {tHeader(`projects.${p.key}`)}
                          </Link>
                        ))}
                      {item.megaMenuType === 'company' &&
                        companyLinks.map((c) => (
                          <Link
                            key={c.key}
                            href={c.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-sm text-bontera-grey-600 hover:text-bontera-navy-600 transition-colors"
                          >
                            {tHeader(`company.${c.key}`)}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="px-5 py-4 space-y-3 border-t border-bontera-grey-200">
          <Link
            href={`/${currentLocale}/quote`}
            onClick={onClose}
            className="flex items-center justify-center h-12 w-full rounded-xl bg-bontera-grey-100 text-bontera-grey-700 hover:bg-bontera-grey-200 text-sm font-semibold transition-colors"
          >
            {tHeader('requestQuote')}
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 h-12 w-full rounded-xl bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white text-sm font-semibold shadow-[0_4px_14px_rgba(30,58,95,0.25)] transition-colors"
          >
            {t('contact')}
            {Icons.arrowRight}
          </Link>
        </div>

        {/* Language Selector */}
        <div className="px-5 py-4 border-t border-bontera-grey-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-3">
            {tHeader('selectLanguage')}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {locales.map((locale) => {
              const selected = currentLocale === locale;
              return (
                <Link
                  key={locale}
                  href={getLocalizedPath(locale)}
                  onClick={onClose}
                  className={cn(
                    'px-3 py-2.5 rounded-xl border text-sm font-semibold text-center transition-colors',
                    selected
                      ? 'border-bontera-navy-300 bg-bontera-navy-50 text-bontera-navy-600'
                      : 'border-bontera-grey-200 bg-white text-bontera-grey-700 hover:bg-bontera-grey-50 hover:text-bontera-navy-600'
                  )}
                >
                  {localeShortNames[locale]}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-5 py-4 border-t border-bontera-grey-200 bg-bontera-grey-50">
          <div className="text-xs font-semibold uppercase tracking-wider text-bontera-grey-400 mb-3">
            {tHeader('contactInfo')}
          </div>
          <div className="space-y-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-sm text-bontera-grey-700 hover:text-bontera-navy-600"
            >
              {Icons.phone}
              <span>+49 30 123 456 7890</span>
            </a>
            <a
              href="mailto:info@bontera.de"
              className="flex items-center gap-3 text-sm text-bontera-grey-700 hover:text-bontera-navy-600"
            >
              {Icons.email}
              <span>info@bontera.de</span>
            </a>
          </div>

          {/* Emergency */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              {tHeader('emergency24')}
            </div>
            <a href="tel:+1800BONTERA" className="text-sm text-amber-600 mt-1 block">
              1-800-BONTERA
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="px-5 py-4 border-t border-bontera-grey-200">
          <div className="flex items-center justify-center gap-2">
            {[
              { icon: Icons.linkedin, href: '#', label: 'LinkedIn' },
             
              
              { icon: Icons.instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 text-bontera-grey-500 hover:text-bontera-navy-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
