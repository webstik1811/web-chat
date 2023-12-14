'use client'
import { signOut } from 'next-auth/react';

export function MainLogout() {
  const handleSignOut = () => signOut()
  return (
    <button
      onClick={handleSignOut}
      className="focus:shadow-outline hover:bg-red-800 h-10 px-5 text-white transition-colors duration-150 bg-red-700 rounded-lg"
      >
      Logout
    </button>
  );
}
