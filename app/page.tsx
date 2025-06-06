import Image from 'next/image';
import Instruments from "./instruments/page";
import GoogleAd from "./GoogleAd";

export default async function Home() {
  return (
    <>
      {/* 🔮 AI-style animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full opacity-30 blur-3xl animate-blob animation-delay-0" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-2xl animate-blob animation-delay-4000" />

        {/* 🟣 Floating Nodes */}
        <div className="absolute top-[20%] left-[40%] w-4 h-4 bg-white/30 rounded-full animate-float animation-delay-1000" />
        <div className="absolute top-[50%] left-[20%] w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-[15%] right-[25%] w-5 h-5 bg-white/10 rounded-full animate-float animation-delay-3000" />

        {/* ▭ Abstract Chips */}
        <div className="absolute top-[35%] right-[10%] w-8 h-2 bg-white/20 rounded animate-float animation-delay-1500 rotate-12" />
        <div className="absolute bottom-[25%] left-[10%] w-6 h-1 bg-white/30 rounded animate-float animation-delay-2500 -rotate-6" />
      </div>

      {/* 🔝 Header */}
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

      {/* 📄 Main Content */}
      <main className="pt-20 flex-1 flex flex-col gap-6 px-4 max-w-3xl mx-auto">
        <GoogleAd />
        <Instruments />
      </main>

      {/* 🟢 Transparent Green Footer */}
      <footer className="bg-white-600/50 backdrop-blur-sm text-black mt-10 py-4 fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <a href="/privacyPolicy" className="underline cursor-pointer">
            Privacy Policy
          </a>
          <a href="/privacyPolicy" className="underline cursor-pointer">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </>
  );
}
