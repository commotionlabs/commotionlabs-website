import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NODE_ENV === 'production' ? '/commotionlabs-website' : '';

export const metadata: Metadata = {
  title: 'Home - Elva',
  description:
    'Elva is a full-service design group that specializes in creating digital experiences. We elevate websites with design, strategy, and collaborative partnerships.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href={`${basePath}/icons/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/icons/favicon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/icons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/icons/favicon-16x16.png`} />
        <link rel="stylesheet" href={`${basePath}/app.css`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
