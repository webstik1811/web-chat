import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

/**
 * The options for authentication with NextAuth.
 *
 * @typedef {Object} NextAuthOptions
 * @property {Array<Provider>} providers - The array of authentication providers.
 */
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
  ],
};
