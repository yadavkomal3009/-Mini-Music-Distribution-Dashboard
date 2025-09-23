import { useEffect, useState } from 'react';
import TrackTable from '../components/TrackTable';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const session = typeof window !== 'undefined' && localStorage.getItem('sessionUser');
    if (!session) router.replace('/');
    fetchTracks();
  }, []);

  async function fetchTracks() {
    setLoading(true);
    const res = await fetch('/api/tracks');
    const data = await res.json();
    setTracks(data || []);
    setLoading(false);
  }

  const filtered = tracks.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-sm text-gray-300">Your uploaded tracks</p>
        </div>
        <div className="flex items-center gap-3">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search title or artist" className="px-3 py-2 rounded-lg bg-white/5 focus:outline-none" />
          <button onClick={()=>router.push('/upload')} className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700">Upload Track</button>
        </div>
      </div>

      <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow">
        {loading ? <p>Loading...</p> : <TrackTable tracks={filtered} onRefresh={fetchTracks} />}
      </div>
    </div>
  );
}
