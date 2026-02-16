import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

const basePath = process.env.NODE_ENV === 'production' ? '/commotionlabs-website' : '';

export default function Home() {
  const bodyHtml = fs.readFileSync(path.join(process.cwd(), 'app/body.html'), 'utf8');

  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src={`${basePath}/app.js`} strategy="afterInteractive" />
    </>
  );
}
