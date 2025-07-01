'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Jobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const cached = sessionStorage.getItem('jobs');
    if (cached) {
      setJobs(JSON.parse(cached));
    } else {
      const fetchJobs = async () => {
        const supabase = createClient();
        const { data } = await supabase
          .from('jobs')
          .select()
          .order('imageId', { ascending: false });

        setJobs(data || []);
        sessionStorage.setItem('jobs', JSON.stringify(data || []));
      };
      fetchJobs();
    }
  }, []);

  const handleClick = (job: any) => {
    sessionStorage.setItem('selectedJob', JSON.stringify(job));
    router.push(`/jobs/${job.imageId}`);
  };

  return (
    <div className="flex justify-center px-4 pt-6">
      <div className="w-full max-w-md space-y-4 pb-12">
        {jobs.length === 0 ? (
          <div className="text-center text-gray-500 py-6">No jobs found.</div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.imageId}
              onClick={() => handleClick(job)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
            >
              {job.photo && (
                <img
                  src={job.photo}
                  className="w-full max-w-full h-40 object-cover"
                  alt={job.title}
                />
              )}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 break-words">{job.title}</h3>
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
  );
}
