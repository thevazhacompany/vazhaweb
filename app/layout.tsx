"use client";

import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

    if (!adClient) {
      console.error('Missing NEXT_PUBLIC_ADSENSE_CLIENT environment variable.');
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+adClient;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="relative overflow-x-hidden bg-white text-gray-900 p-4 sm:p-6 min-h-screen">
        {/* Abstract grayscale blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute top-[-150px] left-[-150px] w-[360px] h-[360px] max-w-full max-h-full bg-gray-300 rounded-full blur-3xl opacity-20 animate-blob"
            style={{ maxWidth: '100vw', maxHeight: '100vw' }} // Limit blob size on mobile
          />
          <div
            className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] max-w-full max-h-full bg-gray-400 rounded-full blur-3xl opacity-15 animate-blob animation-delay-2000"
            style={{ maxWidth: '100vw', maxHeight: '100vw' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[420px] h-[260px] max-w-full max-h-full bg-gray-200 rounded-full blur-2xl opacity-10 -translate-x-1/2 -translate-y-1/2"
            style={{ maxWidth: '100vw', maxHeight: '100vw' }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
