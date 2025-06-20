"use client";

import { useEffect } from "react";

export default function AdsterraBanner() {
    useEffect(() => {
        const configScript = document.createElement("script");
        configScript.type = "text/javascript";
        configScript.innerHTML = `
      atOptions = {
        'key': '${process.env.NEXT_PUBLIC_ADSTERRA!}',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
    `;
        document.getElementById("adsterra-320x50")?.appendChild(configScript);

        // 2. Create loader script
        const script = document.createElement("script");
        script.src = process.env.NEXT_PUBLIC_ADSTERRA_320X50_SRC!;
        script.async = true;
        script.dataset.cfasync = "false";
        document.getElementById("adsterra-320")?.appendChild(script);
    }, []);

    return (
        <div
            id="adsterra-320"
            className="w-full flex justify-center items-center my-4 min-h-[50px] "
        >
        </div>
    );
}
