import dbConnect from '@db/clients/mongoose';
import { appRouter } from '@server/routers/_app';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async () => {
    await dbConnect();
    return {};
  },
});
