import dbConnect from '@db/clients/mongoose';
import { createTRPCContext } from '@server/context';
import { appRouter } from '@server/routers/_app';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({
  router: appRouter,
  createContext: async (opt) => {
    await dbConnect()
    return createTRPCContext(opt)
  },
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong', error);
    }
  },
});
