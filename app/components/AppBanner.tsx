'use client';

import { useEffect, useState } from 'react';

export default function AppBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {debugger
        const dismissed = localStorage.getItem('vazha_app_banner_dismissed');
        if (dismissed === 'true') return;

        const userAgent = navigator.userAgent || navigator.vendor;
        const android = /android/i.test(userAgent);
        const ios = /iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window);
        setIsAndroid(android);
        setIsIOS(ios);
        setShowBanner(android || ios);
    }, []);

    const handleDismiss = () => {
        setShowBanner(false);
        localStorage.setItem('vazha_app_banner_dismissed', 'true');
    };

    if (!showBanner) return null;

    return (
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 mx-4 mt-24 mb-6 shadow-md text-green-900 font-sans text-sm relative">
            <button
                onClick={handleDismiss}
                className="absolute top-1 right-2 text-gray-500 hover:text-gray-800 text-lg"
                aria-label="Close"
            >
                &times;
            </button>
            {isAndroid && (
                <>
                    <p className="font-semibold">🚀 Get the best experience on our Android app!</p>
                    <p className="mt-1">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.thevazhacompany.vazhaApp"
                            className="underline font-medium text-green-700 hover:text-green-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download from Google Play Store
                        </a>{' '}
                        to receive real-time notifications and smoother performance.
                    </p>
                </>
            )}
            {isIOS && (
                <>
                    <p className="font-semibold">📱 Using iPhone or iPad?</p>
                    <p className="mt-1">
                        Continue using this web app. Notifications are not supported on web yet.
                    </p>
                </>
            )}
        </div>
    );
}
