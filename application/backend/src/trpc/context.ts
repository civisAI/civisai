import type { inferAsyncReturnType } from '@trpc/server';
import type { FastifyRequest, FastifyReply } from 'fastify';

export async function createContext({ req, res }: { req: FastifyRequest; res: FastifyReply }) {
  return {
    req,
    res,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>; 