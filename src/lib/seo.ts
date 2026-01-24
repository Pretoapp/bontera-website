import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bontera.de';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bontera | Construction Excellence',
    template: '%s | Bontera',
  },
  description: 'Bontera - Your trusted partner for construction projects across Europe. Building, Civil Engineering, Renovation & Project Management.',
  keywords: [
    'construction',
    'building',
    'civil engineering',
    'renovation',
    'project management',
    'Germany',
    'Europe',
    'Bontera',
  ],
  authors: [{ name: 'Bontera' }],
  creator: 'Bontera',
  publisher: 'Bontera',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'fr_FR', 'es_ES', 'tr_TR', 'ar_SA'],
    url: siteUrl,
    siteName: 'Bontera',
    title: 'Bontera | Construction Excellence',
    description: 'Your trusted partner for construction projects across Europe.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bontera Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bontera | Construction Excellence',
    description: 'Your trusted partner for construction projects across Europe.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
    },
    twitter: {
      title,
      description,
    },
  };
}