'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import GoogleAd from '@/app/GoogleAd';

export default function JobDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<any | null>(null);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('selectedJob');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.imageId == id || parsed.id == id) {
        setJob(parsed);
      }
    }
  }, [id]);

  if (!job) {
    return <div className="p-6 text-gray-500">Loading job details...</div>;
  }

  const mailtoLink = job.email
    ? `mailto:${job.email}?subject=${encodeURIComponent(job.title || "Job Application")}&body=${encodeURIComponent(
      `Hello ${job.companyName || "Hiring"} Team,\n\nI am writing to express my interest in${job.position ? " the " + job.position : " a"
      } role at your company.\n\nPlease find my resume attached.\n\nRegards,\n[Your Name]`
    )}`
    : null;

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-auto z-50 pt-20 pb-40 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <img src="/vazha.png" alt="Vazha Logo" className="h-8 w-auto object-contain" />
          <h1 className="text-xl font-bold text-gray-900">Vazha</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex justify-center px-4">
        <div className="w-full max-w-md space-y-6 pb-32 pt-4">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 underline"
          >
            ← Back to Jobs
          </button>
          <GoogleAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT2} />
          {/* Job Image */}
          {job.photo && (
            <img
              src={job.photo}
              alt={job.title}
              className="w-full h-auto rounded-lg shadow"
            />
          )}

          {/* Caution Box */}
          <div className="flex items-start bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm rounded-lg p-3">
            <span className="flex-1">
              ⚠️ This job info is from public sources. Please verify before applying.
            </span>
            <button
              onClick={() => setShowTips(true)}
              className="ml-2 text-yellow-800 hover:text-yellow-900 text-lg"
            >
              💡
            </button>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 break-words text-center">{job.title}</h2>

          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-6 text-sm items-start">
            {[
              { label: 'Experience', key: 'experience' },
              { label: 'Location', key: 'location' },
              { label: 'Company', key: 'companyName' },
              { label: 'Position', key: 'position' },
              { label: 'Website', key: 'links' },
              { label: 'Email', key: 'email' },
              { label: 'Mobile', key: 'mobile' },
            ].map(({ label, key }) =>
              job[key] ? (
                <div key={key} className="contents">
                  <div className="text-gray-600 font-medium">{label}</div>
                  <div className="text-gray-900 break-words">
                    {key === 'links' ? (
                      <a
                        href={job[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {job[key]}
                      </a>
                    ) : (
                      job[key]
                    )}
                  </div>
                  <div>
                    <button
                      className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                      onClick={() => navigator.clipboard.writeText(job[key])}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* QR Section */}
          {job.qr && (
            <div className="grid grid-cols-3 gap-6 text-sm items-center">
              <div className="text-gray-600 font-medium">QR</div>
              <div className="text-blue-600 break-words underline">
                <a href={job.qr} target="_blank" rel="noopener noreferrer">
                  {job.qr}
                </a>
              </div>
              <div>
                <button
                  className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                  onClick={() => navigator.clipboard.writeText(job.qr)}
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Apply Button */}
      {mailtoLink && (
        <a
          href={mailtoLink}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </a>
      )}

      {/* Tips Modal */}
      {showTips && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-70">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>💡 Job Tips</span>
              <button
                className="ml-auto text-gray-600 hover:text-gray-900 text-xl"
                onClick={() => setShowTips(false)}
              >
                &times;
              </button>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Verify company website links before applying.</li>
              <li>Check job description and eligibility carefully.</li>
              <li>Tailor your resume to match the job.</li>
              <li>Never pay for job applications.</li>
              <li>Only use official HR contact emails.</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}
