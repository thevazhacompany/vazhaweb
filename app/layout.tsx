"use client"

import { useEffect } from 'react';
import './globals.css'; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load Adsense script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.setAttribute('data-ad-client', ''); // Replace with your AdSense Publisher ID
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-white text-gray-900 p-4 sm:p-6 min-h-screen">
        {/* Abstract grayscale blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Large blurred gray blob top-left */}
          <div className="absolute top-[-150px] left-[-150px] w-[360px] h-[360px] bg-gray-300 rounded-full blur-3xl opacity-20 animate-blob" />
          
          {/* Smaller mid-gray blob bottom-right */}
          <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-gray-400 rounded-full blur-3xl opacity-15 animate-blob animation-delay-2000" />
          
          {/* Soft light-gray ellipse center */}
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[260px] bg-gray-200 rounded-full blur-2xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {children}
      </body>
    </html>
  );
}
