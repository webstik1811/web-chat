import chatItemRouter from '@server/routers/chat-item.router';
import { router } from '@server/trpc';

export const appRouter = router({
  chatItems: chatItemRouter,
});

export type AppRouter = typeof appRouter;
