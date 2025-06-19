"use client";

import { useEffect } from "react";

export default function AdsterraBanner320x50() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.NEXT_PUBLIC_ADSTERRA_320X50_SRC!;
        script.async = true;
        script.dataset.cfasync = "false";
        document.getElementById("adsterra-320x50")?.appendChild(script);
    }, []);

    return (
        <div
            id="adsterra-320x50"
            className="w-full flex justify-center items-center my-4 min-h-[50px] bg-gray-100 rounded shadow-inner"
        >
            <p className="text-xs text-gray-400">Loading ad…</p>
        </div>
    );
}
