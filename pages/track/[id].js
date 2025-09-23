import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TrackDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/tracks?id=${id}`).then(r => r.json()).then(data => setTrack(data));
  }, [id]);

  if (!track) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Track Details</h2>
      <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md">
        <p><strong>Title:</strong> {track.title}</p>
        <p><strong>Artist:</strong> {track.artist}</p>
        <p><strong>Release Date:</strong> {track.releaseDate}</p>
        <p><strong>Genre:</strong> {track.genre}</p>
        <p><strong>Status:</strong> {track.status}</p>
      </div>
    </div>
  );
}
