'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="fixed left-0 top-0 h-full bg-tumblr-darker w-16 md:w-64 flex flex-col items-center md:items-start py-6 px-3 md:px-6 z-50">
      <Link href="/dashboard" className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white hover:text-tumblr-blue transition cursor-pointer">
          t
        </h1>
      </Link>

      <nav className="flex-1 w-full space-y-2">
        <Link 
          href="/dashboard"
          className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition group"
        >
          <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="hidden md:block text-gray-300 group-hover:text-white font-medium">Explore</span>
        </Link>

        <button className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition group w-full">
          <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <span className="hidden md:block text-gray-300 group-hover:text-white font-medium">Communities</span>
        </button>

        <button className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition group w-full">
          <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
          <span className="hidden md:block text-gray-300 group-hover:text-white font-medium">Change palette</span>
        </button>
      </nav>

      <div className="w-full space-y-2">
        {user && (
          <div className="px-3 py-2 rounded-lg bg-gray-800">
            <p className="text-white font-medium text-sm hidden md:block">{user.displayName}</p>
            <p className="text-gray-400 text-xs hidden md:block">@{user.username}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-red-900 hover:bg-opacity-30 transition group w-full"
        >
          <svg className="w-6 h-6 text-gray-300 group-hover:text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
          <span className="hidden md:block text-gray-300 group-hover:text-red-500 font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
}

