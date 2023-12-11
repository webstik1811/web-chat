import dbConnect from '@db/clients/mongoose';
import { createTRPCContext } from '@server/context';
import { appRouter } from '@server/routers/_app';
import { createNextApiHandler } from '@trpc/server/adapters/next';

/**
 * This module sets up the tRPC API handler for a Next.js application.
 * tRPC allows you to create end-to-end typesafe APIs easily.
 *
 * Functions:
 * - `createNextApiHandler`: Configures and creates an API handler compatible with Next.js.
 *
 * Configuration:
 * - `router`: The tRPC router that contains the API endpoints and procedures.
 * - `createContext`: A function to create the context for each tRPC request.
 *    - It establishes a database connection using `dbConnect` before creating the tRPC context.
 * - `onError`: Error handling function for the API. It logs internal server errors.
 *
 * Usage:
 * - Import and use this module as an API route in Next.js (usually in `pages/api/trpc/[trpc].ts`).
 * - `appRouter` is imported from '@server/routers/_app', which should define API's structure and procedures.
 * - `createTRPCContext` is a custom function to generate the context required for tRPC procedures,
 *   such as authentication information or database connections.
 * - `dbConnect` is a utility to establish a connection to the MongoDB database.
 *
 * @module TRPCApiHandler
 */
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
