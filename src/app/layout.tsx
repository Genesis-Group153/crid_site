import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CRID International | Research. Skills. Impact.',
    template: '%s | CRID International',
  },
  description:
    'CRID International is a multidisciplinary research, training, and capacity-building organization advancing sustainable development, institutional excellence, and human capital growth across Africa.',
  keywords: [
    'CRID International',
    'research Africa',
    'capacity building',
    'RMNCAH',
    'SRHR',
    'gender development',
    'institutional development',
    'professional training',
    'Uganda',
  ],
  authors: [{ name: 'CRID International' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cridinternational.org',
    siteName: 'CRID International',
    title: 'CRID International | Research. Skills. Impact.',
    description:
      'Advancing sustainable development, institutional excellence, and human capital growth across Africa.',
    images: [
      {
        url: '/crid/logo.png',
        width: 1200,
        height: 630,
        alt: 'CRID International Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRID International | Research. Skills. Impact.',
    description:
      'Advancing sustainable development, institutional excellence, and human capital growth across Africa.',
    images: ['/crid/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

