import Link from 'next/link';

export default function Nav({ theme, setTheme }) {
  return (
    <header className="flex items-center justify-between p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center">🎵</div>
        <div>
          <h1 className="text-lg font-semibold">TuneTrack</h1>
          <p className="text-sm text-gray-400">Music Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="px-3 py-2 rounded-lg hover:bg-white/5">Dashboard</Link>
        <Link href="/upload" className="px-3 py-2 rounded-lg hover:bg-white/5">Upload</Link>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-2 rounded-lg bg-white/6">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <button onClick={() => { localStorage.removeItem('sessionUser'); window.location.href = '/'; }} className="px-3 py-2 rounded-lg bg-red-600">Logout</button>
      </div>
    </header>
  );
}
