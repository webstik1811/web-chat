import ApiProvider from '@containers/trpc/ApiProvider';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@app/globals.css'

/**
 * Creates a new Inter object.
 *
 * @param {Object} options - The options for the Inter object.
 * @param {string[]} options.subsets - The subsets to be loaded.
 */
const inter = Inter({ subsets: ['latin'] })


/**
 * Represents the metadata for a variable.
 *
 * @typedef {Object} Metadata
 * @property {string} title - The title of the variable.
 * @property {string} description - The description of the variable.
 */
export const metadata: Metadata = {
  title: 'Login with yout GitHub account please!',
  description: 'This is simple Rest API based web chat system',
}

/**
 * Renders the root layout for the application.
 *
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The children components to render.
 *
 * @return {React.ReactNode} - The rendered root layout.
 */
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
