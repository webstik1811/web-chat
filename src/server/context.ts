import { CreateNextContextOptions } from '@trpc/server/adapters/next';

/**
 * Represents the options for creating an inner context.
 */
export interface CreateInnerContextOptions
  extends Partial<CreateNextContextOptions> {
  locale: string;
}

/**
 * Creates an inner TRPC context.
 *
 * @param {CreateInnerContextOptions} [opts] - The options for creating the inner context.
 *
 * @returns {Promise<object>} The inner TRPC context.
 */
export async function createInnerTRPCContext(opts?: CreateInnerContextOptions) {
  return {
    ...opts,
  };
}

/**
 * Creates a TRPC context with optional options.
 *
 * @param {CreateNextContextOptions} [opts] - Optional options for the TRPC context.
 * @returns {Promise<any>} - A promise that resolves to the created TRPC context.
 */
export const createTRPCContext = async (opts?: CreateNextContextOptions) => {
  const acceptLanguage = opts?.req.headers['accept-language'];
  const locale: "bg" | "en" = acceptLanguage?.includes('bg') ? 'bg' : 'en';

  const innerContext = await createInnerTRPCContext({
    req: opts?.req,
    locale,
  });

  return {
    ...innerContext,
    req: opts?.req,
  };
};
