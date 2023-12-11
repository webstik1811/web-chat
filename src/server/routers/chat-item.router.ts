import ChatItemModel from '@db/models/chat-items';
import { chatItemsSchema } from '@db/schemas/chat-items-schema';
import { publicProcedure, router } from '@server/trpc';
import { z } from 'zod';

const chatItemRouter = router({
  list: publicProcedure.query(async () => {
    return ChatItemModel.find();
  }),
  add: publicProcedure.input(z.object(chatItemsSchema)).mutation(async (opts) => {
    return await ChatItemModel.create(opts.input)
  })
})

export default chatItemRouter;
