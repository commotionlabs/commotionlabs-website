import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

export default function Home() {
  const bodyHtml = fs.readFileSync(path.join(process.cwd(), 'app/body.html'), 'utf8');

  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
