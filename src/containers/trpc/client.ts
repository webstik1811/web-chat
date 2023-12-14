import { type AppRouter } from '@server/routers/_app';
import { createTRPCReact } from '@trpc/react-query';

/**
 * Creates a TRPC client instance for React with the given `AppRouter`.
 *
 * @param {AppRouter} router - The `AppRouter` instance to be used.
 * @returns {TRPCClient<TRPCLink>} - The initialized TRPC client.
 */
export const trpc = createTRPCReact<AppRouter>({});
