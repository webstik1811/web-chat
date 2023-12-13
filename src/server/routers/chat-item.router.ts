import ChatItemModel from '@db/models/chat-items';
import { chatItemsSchema } from '@db/schemas/chat-items-schema';
import { publicProcedure, router } from '@server/trpc';
import { z } from 'zod';

/**
 * @description router for chat item operations
 *
 * @property {Function} list - retrieves a list of chat items from the database
 * @returns {Promise<Array>} - a list of chat items
 *
 * @property {Function} add - adds a new chat item to the database
 * @param {Object} opts - options for adding a chat item
 * @param {Object} opts.input - chat item data to be added
 * @returns {Promise<Object>} - the newly added chat item
 */
const chatItemRouter = router({
  list: publicProcedure.query(async () => {
    try {
      return await ChatItemModel.find().exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }),
  add: publicProcedure.input(z.object(chatItemsSchema)).mutation(async (opts) => {
    return await ChatItemModel.create(opts.input)
  })
})

export default chatItemRouter;
