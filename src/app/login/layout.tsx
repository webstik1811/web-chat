import ApiProvider from '@containers/trpc/ApiProvider';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login with yout GitHub account please!',
  description: 'This is simple Rest API based web chat system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProvider>{children}</ApiProvider>
      </body>
    </html>
  )
}
