import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n/config';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(de|en|fr|es|tr|ar)/:path*',
    '/((?!api|_next|_vercel|studio|.*\\..*).*)',
  ],
};