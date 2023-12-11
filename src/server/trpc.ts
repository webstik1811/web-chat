import { initTRPC } from '@trpc/server';

/**
 * @description The variable 't' represents an instance of the TRPC object created using the 'initTRPC.create()' method.
 * TRPC is used for making RPC (Remote Procedure Call) requests to a server.
 */
const t = initTRPC.create();

/**
 * Represents a router object.
 * @class
 */
export const router = t.router;

/**
 * Represents a public procedure.
 *
 * @type {Procedure}
 */
export const publicProcedure = t.procedure;
