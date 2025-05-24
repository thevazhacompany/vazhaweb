'use client';

import { useEffect, useRef } from 'react';

export default function GoogleAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', width: '320px', height: '100px' }} // Adjust size as per ad format
        data-ad-client=""
        data-ad-slot=""// Your Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      ></ins>
    </div>
  );
}
