'use client';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 underline cursor-pointer"
      >
        ← Back
      </button>

      {/* Title */}
      <div>
        Contact Us
        <div>
        If you have any questions or feedback, feel free to reach us:
        </div>
      </div>
      <div>
        📧 Email: thevazhacompany@gmail.com
      </div>
    </main>
  );
}
