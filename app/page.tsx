import Image from 'next/image';
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Instruments from "./instruments/page";
import GoogleAd from "./GoogleAd";

export default async function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-3 px-6 py-4">
          <Image
            src="/vazha.png"
            alt="Vazha Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-gray-900">Vazha</h1>
        </div>
      </header>

      <main className="pt-20 flex-1 flex flex-col gap-6 px-4 max-w-3xl mx-auto">
        <GoogleAd />
        {hasEnvVars ? <Instruments /> : <Instruments />}
      </main>
    </>
  );
}
