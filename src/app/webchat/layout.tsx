import ApiProvider from '@containers/trpc/ApiProvider';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@app/globals.css'

/**
 * Represents an instance of the Inter font family.
 * @constructor
 * @param {Object} options - The configuration options for the Inter font.
 * @param {string[]} options.subsets - The subsets of the Inter font to be included.
 */
const inter = Inter({ subsets: ['latin'] })

/**
 * Represents the metadata for a web chat system.
 *
 * @typedef {Object} Metadata
 * @property {string} title - The title of the web chat system.
 * @property {string} description - A description of the web chat system.
 */
export const metadata: Metadata = {
  title: 'WebChat system by Nick',
  description: 'This is simple Rest API based web chat system',
}

/**
 * A React component that represents the root layout of the application.
 *
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the root layout.
 *
 * @returns {React.Element} - The rendered root layout component.
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
