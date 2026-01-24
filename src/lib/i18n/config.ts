export const locales = ['de', 'en', 'fr', 'es', 'tr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  tr: 'Türkçe',
  ar: 'العربية',
};

export const localeShortNames: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  de: 'DE',
  tr: 'TR',
  ar: 'AR',
};

export const rtlLocales: Locale[] = ['ar'];

export const isRtlLocale = (locale: Locale): boolean => {
  return rtlLocales.includes(locale);
};

export const getLocaleDirection = (locale: Locale): 'ltr' | 'rtl' => {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
};