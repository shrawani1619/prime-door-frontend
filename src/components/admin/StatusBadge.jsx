const styles = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-blue-100 text-blue-800',
  scheduled: 'bg-indigo-100 text-indigo-800',
  declined: 'bg-red-100 text-red-800',
  in_progress: 'bg-sky-100 text-sky-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-gray-100 text-gray-600',
  paid: 'bg-green-100 text-green-800',
  unpaid: 'bg-orange-100 text-orange-800',
};

export default function StatusBadge({ status }) {
  const label = status?.replace(/_/g, ' ') || 'unknown';
  const color = styles[status] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${color}`}>
      {label}
    </span>
  );
}
