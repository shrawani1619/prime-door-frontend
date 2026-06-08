import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { api } from '../../lib/api';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getJobs().then(setJobs).catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <SEO title="Service History" />
      <Link to="/portal" className="text-gold-500 text-sm hover:underline">← Dashboard</Link>
      <h1 className="text-3xl font-bold text-navy-900 mt-2 mb-6">Service History</h1>

      {error && <p className="text-red-600">{error}</p>}

      {jobs.length === 0 && !error && (
        <p className="text-gray-500">No service records found.</p>
      )}

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-navy-900">{job.type}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(job.date).toLocaleDateString()} · {job.technicianName || 'Technician TBD'}
                </p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-navy-900 text-white capitalize">
                {job.status?.replace('_', ' ')}
              </span>
            </div>
            {job.notes && <p className="text-gray-600 text-sm mt-2">{job.notes}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
