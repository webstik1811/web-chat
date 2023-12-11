import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  image: z.optional(z.string())
})
