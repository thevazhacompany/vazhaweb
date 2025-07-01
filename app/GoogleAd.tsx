'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}



export default function GoogleAd({ slot }: any) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adSlot = adRef.current?.querySelector('.adsbygoogle') as HTMLElement;

    // Prevent duplicate push on SSR hydration or re-renders
    if (adSlot && !adSlot.getAttribute('data-adsbygoogle-status')) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push error:', e);
      }
    }
  }, []);

  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <div ref={adRef} key={slot}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={slot}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}
