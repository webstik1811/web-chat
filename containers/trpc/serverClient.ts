import { getBaseUrl } from '@libs/utils';
import { appRouter } from '@server/routers/_app';
import { httpBatchLink } from '@trpc/client';

const TRPC_API_URL = `${getBaseUrl()}/api/trpc`;

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: TRPC_API_URL,
    }),
  ],
});
