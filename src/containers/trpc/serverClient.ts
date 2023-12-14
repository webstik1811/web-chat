import dbConnect from '@db/clients/mongoose';
import { getBaseUrl } from '@libs/utils';
import { appRouter } from '@server/routers/_app';
import { httpBatchLink } from '@trpc/client';

const TRPC_API_URL = `${getBaseUrl()}/api/trpc`;

/**
 * Asynchronously creates a client for making requests to the TRPC API and
 * establish a connection to database
 *
 * @returns {Promise<Caller>} A promise that resolves to a TRPC API client.
 */
export const createClient = async () => {
  await dbConnect();
  return appRouter.createCaller({
    links: [
      httpBatchLink({
        url: TRPC_API_URL,
      }),
    ],
  });
}


export const serverClient = await createClient()
