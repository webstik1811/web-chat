import { authOptions } from '@libs/auth';
import NextAuth from 'next-auth/next';

/**
 * This module configures NextAuth for authentication in a Next.js application.
 * NextAuth is a complete open-source authentication solution for Next.js applications.
 *
 * The configuration uses GitHub as an OAuth authentication provider, allowing users to sign in using their GitHub accounts.
 *
 * Main Exports:
 * - `NextAuth`: The main NextAuth function to set up the authentication API route.
 * - `authOptions`: Configuration options for NextAuth, including defined providers and any additional settings.
 *
 * Configuration Details:
 * - `providers`: An array of authentication providers. Here, it includes only the GitHub provider.
 *   - `GithubProvider`: Configured with a client ID and secret obtained from GitHub (set in environment variables).
 *
 * Environment Variables:
 * - `GITHUB_CLIENT_ID`: The client ID for the GitHub OAuth app.
 * - `GITHUB_SECRET_ID`: The client secret for the GitHub OAuth app.
 *
 * Usage:
 * - The `authOptions` object is exported and used in the `NextAuth` function.
 * - This setup should be used in a file under `pages/api/auth/[...nextauth].ts` in a Next.js project to create an authentication API route.
 *
 * @module NextAuthConfiguration
 */
export default NextAuth(authOptions);
