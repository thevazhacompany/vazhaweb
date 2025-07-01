'use client';

import { useEffect, useRef } from 'react';

export default function GoogleAd() {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

  if (!adClient || !adSlot) {
    console.error('Missing AdSense env variables');
    return null;
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="horizontal"
      data-full-width-responsive="true"
      ref={adRef}
    />
  );
}
