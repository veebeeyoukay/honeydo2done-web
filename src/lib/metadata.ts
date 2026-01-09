import { Metadata } from 'next'

const siteName = 'HoneyDo2Done'
const siteDescription = 'From "Honey, can you..." to Done. The app that finally gets how overwhelming home stuff can be.'
const siteUrl = 'https://honeydo2done.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Your Home Stuff. Handled.`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'home task management',
    'home maintenance',
    'home repair',
    'task management app',
    'home organization',
    'Tampa home services',
  ],
  authors: [{ name: 'HoneyDo2Done' }],
  creator: 'HoneyDo2Done',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} - Your Home Stuff. Handled.`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Your Home Stuff. Handled.`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const fullTitle = title.length > 50 ? title : `${title} | ${siteName}`
  const url = path ? `${siteUrl}${path}` : siteUrl
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: fullTitle,
      description,
      url,
      images: image ? [{ url: image }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: fullTitle,
      description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
    alternates: {
      canonical: url,
    },
  }
}
