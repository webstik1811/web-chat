import { getBaseUrl } from '@libs/utils';
import { appRouter } from '@server/routers/_app';
import { httpBatchLink } from '@trpc/client';

const TRPC_API_URL = `${getBaseUrl()}/api/trpc`;

/**
 * Creates a server client for making API calls.
 * @param {Object} config - Configuration for creating the server client.
 * @param {Array} config.links - An array of link objects for making HTTP requests.
 * @returns {Object} - The server client object with methods for making API calls.
 */
export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: TRPC_API_URL,
    }),
  ],
});
