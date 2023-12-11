/**
 * Returns the base URL based on the current environment.
 *
 * @returns {string} The base URL
 */
export const getBaseUrl = (): string => {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return '';
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

/**
 * Serializes a Mongoose object into a plain JavaScript object.
 *
 * @param {any} item - The Mongoose object to be serialized.
 * @returns {Object} - The serialized version of the Mongoose object.
 */
export const serializeMongooseObject = (item: any): object => ({
  id: item._id.toString(),
  _id: item._id.toString(),
  msg: item.msg,
  ...(item.user?.email && {
    user: {
      email: item.user?.email
    },
  }),
  createdAt:
    item.createdAt.toISOString(),
  updatedAt:
    item.updatedAt.toISOString()
});
