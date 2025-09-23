import Link from 'next/link';

export default function TrackTable({ tracks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y">
        <thead className="bg-white/5">
          <tr>
            <th className="px-6 py-3 text-left text-sm">Title</th>
            <th className="px-6 py-3 text-left text-sm">Artist</th>
            <th className="px-6 py-3 text-left text-sm">Release</th>
            <th className="px-6 py-3 text-left text-sm">Status</th>
            <th className="px-6 py-3 text-left text-sm">Action</th>
          </tr>
        </thead>
        <tbody className="bg-transparent divide-y">
          {tracks.length === 0 && (
            <tr><td colSpan={5} className="p-6 text-center">No tracks found.</td></tr>
          )}
          {tracks.map(track => (
            <tr key={track.id} className="hover:bg-white/3 transition">
              <td className="px-6 py-4">{track.title}</td>
              <td className="px-6 py-4">{track.artist}</td>
              <td className="px-6 py-4">{track.releaseDate}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${track.status === 'Released' ? 'bg-green-100 text-green-800' : track.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
                  {track.status || 'Uploaded'}
                </span>
              </td>
              <td className="px-6 py-4">
                <Link href={`/track/${track.id}`} className="text-indigo-400 hover:underline">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
