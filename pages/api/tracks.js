let tracks = [
  { id: '1', title: 'Sunrise', artist: 'Nova', releaseDate: '2024-11-01', genre:'Pop', status:'Released' },
  { id: '2', title: 'Blue River', artist: 'Eden', releaseDate: '2025-02-14', genre:'Indie', status:'Scheduled' },
  { id: '3', title: 'Midnight Echo', artist: 'Pulse', releaseDate: '2025-06-10', genre:'Electronic', status:'Uploaded' }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    if (id) {
      const item = tracks.find(t => t.id === String(id));
      if (!item) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json(item);
    }
    return res.status(200).json(tracks);
  }

  if (req.method === 'POST') {
    const body = req.body;
    const newId = String(Number(tracks[tracks.length - 1]?.id || '0') + 1);
    const newTrack = { id: newId, ...body };
    tracks.push(newTrack);
    return res.status(201).json(newTrack);
  }

  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
