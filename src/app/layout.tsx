import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Endustry Plant — We Build Digital Products for India',
  description:
    'Websites. Web Apps. Mobile Apps. eCommerce. AI Automation. Based in Delhi, India. Talk to us.',
  keywords: ['Websites', 'Web Apps', 'Mobile Apps', 'eCommerce', 'AI Automation', 'Delhi', 'India'],
  openGraph: {
    title: 'Endustry Plant — We Build Digital Products for India',
    description: 'Websites. Web Apps. Mobile Apps. eCommerce. AI Automation. Based in Delhi, India. Talk to us.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
