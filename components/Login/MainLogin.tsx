"use client";
import { signIn } from 'next-auth/react';

/**
 * Renders a login button for GitHub login.
 *
 * @return {JSX.Element} The login button component.
 */
export function MainLogin() {
  return (
    <button
      onClick={() => signIn("github")}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
    >
      Login with Github
    </button>
  );
}
