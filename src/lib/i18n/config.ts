export const locales = ['de', 'en', 'fr', 'nl', 'it', 'ku', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  nl: 'Néerlandais',
  it: 'Italiano',
  ku: 'Kurmaçi',
  tr: 'Türkçe',
};

export const localeShortNames: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  fr: 'FR',
  nl: 'NL',
  it: 'IT',
  ku: 'KU',
  tr: 'TR',
};

export const rtlLocales: Locale[] = ['ku'];

export const isRtlLocale = (locale: Locale): boolean => {
  return rtlLocales.includes(locale);
};

export const getLocaleDirection = (locale: Locale): 'ltr' | 'rtl' => {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
};