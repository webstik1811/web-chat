import { MainLogin } from '@components/Login/MainLogin';
import { authOptions } from '@libs/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Home() {
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
