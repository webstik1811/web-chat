import chatItemRouter from '@server/routers/chat-item.router';
import { router } from '@server/trpc';

/**
 * Creates an instance of AppRouter.
 *
 * @class
 * @classdesc Represents the application router that maps routes to respective handlers.
 *
 * @param {Object} routes - An object containing the route mappings.
 * @param {Object} routes.chatItems - The router for chat items.
 *
 * @example
 * const appRouter = router({
 *   chatItems: chatItemRouter,
 * });
 */
export const appRouter = router({
  chatItems: chatItemRouter,
});

export type AppRouter = typeof appRouter;
