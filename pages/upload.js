import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Upload() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { title, artist, releaseDate, genre, status: 'Uploaded' };
    await fetch('/api/tracks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    router.push('/dashboard');
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Track</h2>
      <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Track Title</label>
            <input required value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1">Artist</label>
            <input required value={artist} onChange={e=>setArtist(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Release Date</label>
              <input required value={releaseDate} onChange={e=>setReleaseDate(e.target.value)} placeholder="YYYY-MM-DD" className="w-full p-3 rounded-lg bg-white/5 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Genre</label>
              <input value={genre} onChange={e=>setGenre(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 focus:outline-none" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700">Add Track</button>
          </div>
        </form>
      </div>
    </div>
  );
}
