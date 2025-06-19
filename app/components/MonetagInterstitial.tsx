"use client";

import { useEffect } from "react";

export default function MonetagInterstitialOnClick() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.NEXT_PUBLIC_MONETAG_INTERSTITIAL_SRC!;
        script.async = true;
        script.dataset.cfasync = "false";
        document.body.appendChild(script);
    }, []);
    return null; // Ad runs silently on load
}
