import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Commotion Labs - Strategy, Product & Venture Studio',
  description:
    'We ignite commotion that creates lasting change. Strategy workshops that cut through noise, products that solve real problems, ventures that create measurable impact.',
  keywords: 'strategy, product development, venture studio, commotion labs, innovation, startup, consulting',
  authors: [{ name: 'Commotion Labs' }],
  creator: 'Commotion Labs',
  publisher: 'Commotion Labs',
  openGraph: {
    title: 'Commotion Labs - Strategy, Product & Venture Studio',
    description: 'We ignite commotion that creates lasting change.',
    url: 'https://commotionlabs.github.io/commotionlabs-website/',
    siteName: 'Commotion Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commotion Labs - Strategy, Product & Venture Studio',
    description: 'We ignite commotion that creates lasting change.',
    creator: '@commotionlabs',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta name="theme-color" content="#FF6B35" />
        
        {/* Favicons */}
        <link rel="shortcut icon" href="/commotionlabs-website/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/commotionlabs-website/icons/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/commotionlabs-website/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/commotionlabs-website/icons/favicon-16x16.png" />
        
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Commotion Labs Styles */}
        <link rel="stylesheet" href="/commotionlabs-website/app-commotion.css" />
        
        {/* Enhanced Logo Styles */}
        <style>{`
          /* Logo Component Styling */
          a.logo.text-logo {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: auto;
            min-width: 0;
            height: auto;
            padding: 0;
            margin: 0;
            color: #E8E9ED;
            text-decoration: none;
            line-height: 1;
            text-align: left;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
          }
          
          a.logo.text-logo:hover {
            transform: translateY(-2px);
          }
          
          a.logo.text-logo .logo-main {
            font-family: 'Space Grotesk', 'Inter', 'Basis', Arial, sans-serif;
            font-weight: 800;
            font-size: 2rem;
            letter-spacing: -0.02em;
            line-height: 0.9;
            background: linear-gradient(135deg, #FF6B35, #F7931E, #FFD23F);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 2px;
          }
          
          a.logo.text-logo .logo-sub {
            font-family: 'Inter', 'Basis', Arial, sans-serif;
            font-size: 0.7rem;
            font-weight: 400;
            letter-spacing: 0.02em;
            opacity: 0.8;
            color: #A8AAB5;
            white-space: nowrap;
            text-transform: none;
          }
          
          /* Mobile adjustments */
          @media screen and (max-width: 768px) {
            a.logo.text-logo .logo-main {
              font-size: 1.75rem;
            }
            
            a.logo.text-logo .logo-sub {
              font-size: 0.65rem;
            }
          }
          
          /* Enhanced Values Section */
          .partners .partners-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 60px;
          }
          
          .partners .partners-logo .p {
            margin: 0;
            font-family: 'Space Grotesk', 'Basis', Arial, sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: -0.01em;
            line-height: 1;
            font-size: 1.4rem;
            background: linear-gradient(135deg, #FF6B35, #F7931E);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @media screen and (min-width: 750px) {
            .partners .partners-logo .p {
              font-size: 1.8rem;
            }
          }
          
          /* Energy Enhancement */
          .partners-item {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 12px;
            padding: 1.5rem;
            background: rgba(255, 107, 53, 0.02);
            border: 1px solid rgba(255, 107, 53, 0.1);
          }
          
          .partners-item:hover {
            transform: translateY(-5px);
            background: rgba(255, 107, 53, 0.05);
            border-color: rgba(255, 107, 53, 0.2);
            box-shadow: 0 15px 40px rgba(255, 107, 53, 0.1);
          }
          
          /* Performance Optimizations */
          .energy-field,
          .kinetic-icons,
          .process-particles {
            will-change: transform;
            transform: translateZ(0);
          }
          
          /* Loading State */
          body:not(.loaded) .kinetic-title .char {
            opacity: 0;
            transform: translateY(30px);
          }
          
          body.loaded .kinetic-title .char {
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
        `}</style>
      </head>
      
      <body>
        {/* Preloader */}
        <div id="preloader" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#0A0B0F',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.5s ease-out',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#0A0B0F',
            animation: 'preloaderPulse 2s ease-in-out infinite'
          }}>
            CL
          </div>
        </div>
        
        {children}
        
        {/* Commotion Labs JavaScript */}
        <script src="/commotionlabs-website/app-commotion.js" async></script>
        
        {/* Preloader Animation */}
        <style>{`
          @keyframes preloaderPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); filter: brightness(1.2); }
          }
        `}</style>
        
        {/* Remove preloader after load */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              setTimeout(function() {
                const preloader = document.getElementById('preloader');
                if (preloader) {
                  preloader.style.opacity = '0';
                  setTimeout(function() {
                    preloader.remove();
                  }, 500);
                }
                document.body.classList.add('loaded');
              }, 1000);
            });
          `
        }} />
      </body>
    </html>
  );
}