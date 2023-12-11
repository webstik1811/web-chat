import { userSchema } from '@db/schemas/user-schema';
import { z } from 'zod';

/**
 * Represents the schema for chat items.
 * @type {Object}
 * @property {string} msg - The message content.
 * @property {Object} user - The user schema.
 */
export const chatItemsSchema = {
  msg: z.string(),
  user: userSchema
}
