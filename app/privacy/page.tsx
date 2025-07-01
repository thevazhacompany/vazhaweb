'use client';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 underline cursor-pointer"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy & Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-4">
        Effective Date: 2024-10-08 <br />
        App Name: VAZHA <br />
        Contact: thevazhacompany@gmail.com
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        This privacy policy applies to the Vazha app and website (hereby referred to as "Application") created by The Vazha Company ("Service Provider") as an ad-supported service. This service is intended for use "AS IS".
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Information Collection and Use</h3>
      <p className="mb-4">
        The Application collects basic user data when accessed or used. This includes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your device’s IP address</li>
        <li>Pages visited, time stamps, and usage duration</li>
        <li>Operating system and device information</li>
        <li>Approximate location (used for ad targeting)</li>
      </ul>

      <p className="mb-4">
        We do not collect precise GPS-based location data. Any personal information collected (e.g., name, email) is securely stored and only used to provide core features.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h3>
      <p className="mb-4">
        The Application uses third-party services that may collect user data as part of their ad-serving functionality. These include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.google.com/policies/privacy/" target="_blank" className="text-blue-600 underline">Google Play Services</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" className="text-blue-600 underline">AdMob</a></li>
        <li><a href="https://firebase.google.com/support/privacy" target="_blank" className="text-blue-600 underline">Firebase (Analytics & Crashlytics)</a></li>
        <li><a href="https://expo.dev/privacy" target="_blank" className="text-blue-600 underline">Expo</a></li>
      </ul>
      <p className="mb-4">
        These services may use cookies, pixels, and similar technologies to personalize ads, analyze traffic, and improve performance. Their data practices are governed by their respective privacy policies.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Disclosure</h3>
      <p className="mb-4">
        Your data may be shared:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>As required by law</li>
        <li>To prevent fraud or enforce rights</li>
        <li>With trusted service providers under strict confidentiality</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Opt-Out Rights</h3>
      <p className="mb-4">
        You can opt-out of data collection by uninstalling the app or adjusting ad personalization settings via your device or browser.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Data Retention</h3>
      <p className="mb-4">
        We retain user data only as long as necessary. You can request data deletion at: thevazhacompany@gmail.com
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Children’s Privacy</h3>
      <p className="mb-4">
        This app is not intended for children under 13. We do not knowingly collect data from children.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Security</h3>
      <p className="mb-4">
        Reasonable measures are taken to protect data from unauthorized access.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Changes</h3>
      <p className="mb-4">
        This policy may change. Continued use after changes implies acceptance.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Consent</h3>
      <p className="mb-4">
        By using VAZHA, you consent to this privacy policy.
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Job Post Disclaimer</h2>
      <p className="mb-4">
        Job listings are sourced from public domains or submitted by third parties. VAZHA does not guarantee their accuracy or legitimacy. Users are responsible for verifying job authenticity before applying.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Your Responsibilities as a User</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Independently verify job postings</li>
        <li>Do not share sensitive documents with unverified sources</li>
      </ul>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
      <p className="mb-4">
        By using the VAZHA app or website, you agree to these terms. This is a legal agreement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Nature of Service</h3>
      <p className="mb-4">
        VAZHA provides publicly available job listings, events, and resume tools. Content may not be verified.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">User Conduct</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Do not misuse or manipulate content</li>
        <li>Do not post false, illegal, or harmful content</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Content Ownership</h3>
      <p className="mb-4">
        All external logos and content belong to their original owners. VAZHA does not claim ownership.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Not responsible for third-party listing issues or scams</li>
        <li>No guarantee of accuracy or uninterrupted service</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Modifications</h3>
      <p className="mb-4">
        These terms may be modified at any time. Continued usage implies agreement to updated terms.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
      <p className="mb-4">
        Governed by Indian law. Disputes will be handled in Palakkad, Kerala.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
      <p className="mb-4">
        Legal queries: thevazhacompany@gmail.com
      </p>
    </main>
  );
}
