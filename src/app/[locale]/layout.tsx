import { Inter, Outfit } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale, getLocaleDirection } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();
  const direction = getLocaleDirection(locale as Locale);

  return (
    <div dir={direction} className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
