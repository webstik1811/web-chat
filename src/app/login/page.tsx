import { MainLogin } from '@components/Login/MainLogin';
import { authOptions } from '@libs/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

/**
 * Represents the metadata for a variable.
 *
 * @typedef {Object} Metadata
 * @property {string} title - The title of the variable.
 * @property {string} description - The description of the variable.
 */
export const metadata: Metadata = {
  title: 'Login with your GitHub account please!',
  description: 'This is simple Rest API based web chat system',
}

/**
 * Executes the Login method.
 *
 * @returns {JSX.Element} The main component to be rendered on the home page.
 * @async
 */
export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    console.log(session);
    redirect("/webchat");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col shadow w-full max-w-md p-4 rounded-lg overflow-hidden">
        <MainLogin />
      </div>
    </main>
  )
}
