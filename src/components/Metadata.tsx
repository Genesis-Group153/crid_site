// Metadata utilities for common page metadata patterns

import type { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = '/crid/logo.png',
}: PageMetadataOptions): Metadata {
  const url = `https://www.cridinternational.org${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'CRID International',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

