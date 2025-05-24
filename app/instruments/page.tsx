'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Jobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('jobs').select();
      setJobs(data || []);
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedJob ? (
        <div className="flex justify-center px-4 pt-6">
          <div className="w-full max-w-md space-y-4 pb-12">
            {jobs.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                No jobs found.
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.imageId}
                  onClick={() => setSelectedJob(job)}
                  className="cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
                >
                  {job.photo && (
                    <img
                      src={job.photo}
                      alt={job.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900">{job.title}</h3>
                    {job.date && (
                      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                        <span>{job.date}</span>
                        <span className="text-gray-400 text-base">→</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-white overflow-auto z-50 p-6 pt-20">
          {/* Header with logo */}
          <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
              <img
                src="/vazha.png"
                alt="Vazha Logo"
                className="h-8 w-auto object-contain"
              />
              <h1 className="text-xl font-bold text-gray-900">Vazha</h1>
            </div>
          </header>

          {/* Back button */}
          <button
            className="mb-6 text-sm text-gray-500 underline mt-4"
            onClick={() => setSelectedJob(null)}
          >
            ← Back to Jobs
          </button>

          {/* Photo */}
          {selectedJob.photo && (
            <>
              <img
                src={selectedJob.photo}
                alt={selectedJob.title}
                className="w-full max-w-3xl h-64 object-cover rounded-lg mb-4 mx-auto"
              />

              {/* Disclaimer banner below the image */}
              <div className="max-w-3xl mx-auto flex items-center bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm rounded-lg p-3 mb-8">
                <div className="flex-1">
                  ⚠️ This job info is from public sources. Please verify before applying.
                </div>
                <button
                  onClick={() => setShowTips(true)}
                  className="ml-3 text-yellow-700 hover:text-yellow-900 text-lg"
                  aria-label="Show job tips"
                  type="button"
                >
                  💡
                </button>
              </div>
            </>
          )}

          {/* Job Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {selectedJob.title}
          </h2>

          {/* Details grid */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="grid grid-cols-3 gap-6 text-sm items-start">
              {[
                { label: 'Experience', key: 'experience' },
                { label: 'Location', key: 'location' },
                { label: 'Company', key: 'companyName' },
                { label: 'Position', key: 'position' },
                { label: 'Website', key: 'links' },
                { label: 'Email', key: 'email' },
                { label: 'Mobile', key: 'mobile' }
              ].map(({ label, key }) =>
                selectedJob[key] ? (
                  <div key={key} className="contents">
                    <div className="text-gray-600 font-medium">{label}</div>
                    <div className="text-gray-900 break-all">
                      {key === 'links' ? (
                        <a
                          href={selectedJob[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {selectedJob[key]}
                        </a>
                      ) : (
                        selectedJob[key]
                      )}
                    </div>
                    <div>
                      <button
                        className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                        onClick={() => navigator.clipboard.writeText(selectedJob[key])}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* QR code as clickable href */}
            {selectedJob.qr && (
              <div className="grid grid-cols-3 gap-6 text-sm items-center">
                <div className="text-gray-600 font-medium">QR</div>
                <div className="text-blue-600 break-all underline">
                  <a href={selectedJob.qr} target="_blank" rel="noopener noreferrer">
                    {selectedJob.qr}
                  </a>
                </div>
                <div>
                  <button
                    className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                    onClick={() => navigator.clipboard.writeText(selectedJob.qr)}
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Floating Apply button */}
          {selectedJob.email && (() => {
            const body = `Hello ${
              selectedJob.companyName || "Hiring"
            } Team,\nI am writing to express my interest in${
              selectedJob.position ? " the " + selectedJob.position : " a"
            } role at your company. I believe my skills and passion make me a suitable candidate for this position.\nPlease find my resume attached for your consideration.\n\nRegards,\n[Your Name]`;

            const mailtoLink = `mailto:${selectedJob.email}?subject=${encodeURIComponent(
              selectedJob.title || "Job Application"
            )}&body=${encodeURIComponent(body)}`;

            return (
              <a
                href={mailtoLink}
                className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-60 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            );
          })()}

          {/* Tips Modal */}
          {showTips && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-70">
              <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  💡 Smart Job Tips
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Make sure the email ends with the official company domain</li>
                  <li>Research the company on Google and LinkedIn</li>
                  <li>Read reviews on AmbitionBox or Glassdoor</li>
                  <li>Compare the salary and location</li>
                </ul>
                <button
                  onClick={() => setShowTips(false)}
                  className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
