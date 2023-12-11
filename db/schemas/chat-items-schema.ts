import { userSchema } from '@db/schemas/user-schema';
import { z } from 'zod';

export const chatItemsSchema = {
  msg: z.string(),
  user: userSchema
}
