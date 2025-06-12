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
      <h1 className="text-3xl font-bold mb-6">Privacy Policy & Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-4">
        Effective Date: 2024-10-08 <br />
        App Name: VAZHA <br />
        Contact: thevazhacompany@gmail.com
      </p>

      <hr className="my-6" />

      {/* Privacy Policy Section */}
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

      <p className="mb-4">
        This privacy policy applies to the Vazha app (hereby referred to as "Application") for mobile devices that was created by The Vazha Company (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Information Collection and Use</h3>
      <p className="mb-4">
        The Application collects information when you download and use it. This information may include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your device&apos;s Internet Protocol address (e.g., IP address)</li>
        <li>The pages you visit, time and date of visits, and time spent</li>
        <li>The operating system used on your device</li>
      </ul>
      <p className="mb-4">
        The Application does not gather precise GPS-based location data.
      </p>
      <p className="mb-4">
        However, approximate location may be used to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide personalized content and features</li>
        <li>Improve analytics and performance</li>
        <li>Share anonymized insights with third parties for improvements</li>
      </ul>
      <p className="mb-4">
        Personal information collected (e.g., name, email, age, college, mobile number) is stored securely and used only as described here.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h3>
      <p className="mb-4">
        The app may use third-party services with their own privacy policies. Some of them include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.google.com/policies/privacy/" target="_blank" className="text-blue-600 underline">Google Play Services</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" className="text-blue-600 underline">AdMob</a></li>
        <li><a href="https://firebase.google.com/support/privacy" target="_blank" className="text-blue-600 underline">Firebase (Analytics & Crashlytics)</a></li>
        <li><a href="https://expo.io/privacy" target="_blank" className="text-blue-600 underline">Expo</a></li>
      </ul>
      <p className="mb-4">
        These services may receive anonymized or aggregated data to help improve app functionality.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Disclosure</h3>
      <p className="mb-4">
        Your data may be shared if:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Required by law (e.g., subpoena)</li>
        <li>Necessary to investigate fraud or protect rights</li>
        <li>Trusted third-party service providers assist in operations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Opt-Out Rights</h3>
      <p className="mb-4">
        You can stop data collection at any time by uninstalling the app.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Data Retention</h3>
      <p className="mb-4">
        User data is retained for as long as needed. You may request deletion of your data by emailing: thevazhacompany@gmail.com
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Children’s Privacy</h3>
      <p className="mb-4">
        This app is not intended for users under 13. No data is knowingly collected from children. If a child has submitted personal data, please contact us immediately for deletion.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Security</h3>
      <p className="mb-4">
        We apply reasonable safeguards to protect your information from unauthorized access.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Changes</h3>
      <p className="mb-4">
        We may update this Privacy Policy. Continued use of the app implies acceptance of any changes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Consent</h3>
      <p className="mb-4">
        By using the Application, you agree to the terms outlined in this Privacy Policy.
      </p>

      <hr className="my-6" />

      {/* Job Post Disclaimer */}
      <h2 className="text-2xl font-bold mb-4">Job Post Disclaimer</h2>
      <p className="mb-4">
        The job listings in VAZHA are sourced from public domains or third-party contributors. We do not verify or guarantee the authenticity or accuracy of these listings. Users are solely responsible for validating job opportunities before applying.
      </p>
      <p className="mb-4">
        VAZHA is not liable for any damages, scams, or losses resulting from interaction with job listings.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Your Responsibilities as a User</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Always verify job posts independently</li>
        <li>Avoid sharing sensitive information (e.g., Aadhaar, PAN, OTPs) with unverified sources</li>
      </ul>

      <hr className="my-6" />

      {/* Terms of Use */}
      <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
      <p className="mb-4">
        By using the VAZHA app or website, you agree to these Terms of Use. This is a legally binding agreement between you and the Service Provider.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Nature of Service</h3>
      <p className="mb-4">
        VAZHA provides access to publicly available job listings, events, and resume tools. It does not guarantee the accuracy or legitimacy of the content.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">User Conduct</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Misuse or manipulate content</li>
        <li>Post false or harmful information</li>
        <li>Use the platform for illegal or unethical purposes</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Content Ownership</h3>
      <p className="mb-4">
        All external job listings, trademarks, and logos are owned by their respective companies. VAZHA makes no claim over third-party content.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
      <p className="mb-4">
        VAZHA and its creators will not be liable for:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Any losses or fraud due to third-party job listings</li>
        <li>Errors, omissions, or inaccuracies in the app or content</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Modifications</h3>
      <p className="mb-4">
        We may update these Terms without prior notice. Continued use means you accept the revised terms.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
      <p className="mb-4">
        These Terms are governed by the laws of India. Any disputes shall be handled in Palakkad, Kerala courts.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
      <p className="mb-4">
        For legal concerns or reports, email: thevazhacompany@gmail.com
      </p>
    </main>
  );
}
