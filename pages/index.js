import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('sessionUser')) {
      router.replace('/dashboard');
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() && password) {
      localStorage.setItem('sessionUser', JSON.stringify({ username }));
      router.push('/dashboard');
    } else {
      alert('Enter username and password (mock)');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
        <p className="text-sm text-gray-300 mb-6">Sign in to access your dashboard</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 placeholder-gray-400 focus:outline-none" placeholder="your username" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-3 rounded-lg bg-white/5 placeholder-gray-400 focus:outline-none" placeholder="password" />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">Sign in</button>
        </form>
      </div>
    </div>
  );
}
