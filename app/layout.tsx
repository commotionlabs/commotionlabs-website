import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Commotion Labs — Strategy, Product & Venture Studio',
  description:
    'Commotion Labs helps teams turn bold ideas into measurable outcomes through strategy, product, and venture creation.',
};

const basePath = '/commotionlabs-website';

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
        <link rel="stylesheet" href={`${basePath}/commotion-accent-overrides.css`} />
        <style>{`
          a.logo.text-logo {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: auto;
            min-width: 0;
            height: 7.5rem;
            padding: 0;
            margin: 0;
            color: #ececec;
            text-decoration: none;
            line-height: 1;
            text-align: center;
          }
          a.logo.text-logo .logo-main {
            font-family: 'Arial Black', 'Inter', 'Basis', Arial, sans-serif;
            font-weight: 900;
            font-size: 3.8rem;
            letter-spacing: 0;
            line-height: 0.88;
          }
          a.logo.text-logo .logo-sub {
            margin-top: 0.35rem;
            font-family: 'Inter', 'Basis', Arial, sans-serif;
            font-size: 0.92rem;
            font-weight: 300;
            letter-spacing: 0.01em;
            opacity: 0.9;
            white-space: nowrap;
          }
          .partners .partners-logo {
            display: flex;
            align-items: center;
          }
          .partners .partners-logo .p {
            margin: 0;
            font-family: 'Basis', Arial, sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            line-height: 1;
            font-size: 1.6rem;
          }
          @media screen and (min-width: 750px) {
            .partners .partners-logo .p {
              font-size: 2.4rem;
            }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
