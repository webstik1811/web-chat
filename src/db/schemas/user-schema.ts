import { z } from 'zod';

/**
 * Represents the user schema object.
 *
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string=} image - The optional image URL of the user.
 */
export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  image: z.optional(z.string())
})
