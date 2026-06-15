import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Endustry Plant — We Manufacture Digital Companies',
  description:
    'AI Agents. SaaS Products. Automation Systems. Growth Engines. Endustry Plant builds digital companies, not just websites.',
  keywords: ['AI Agents', 'SaaS', 'Automation', 'Growth', 'Digital Company'],
  openGraph: {
    title: 'Endustry Plant — We Manufacture Digital Companies',
    description: 'AI Agents. SaaS Products. Automation Systems. Growth Engines.',
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
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;700&family=Caveat:wght@400;600&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
