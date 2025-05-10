import { initTRPC } from '@trpc/server';
import type { Context } from './context';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

// Health check procedure
export const healthRouter = router({
  check: publicProcedure.query(() => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }),
});

// Root router
export const appRouter = router({
  health: healthRouter,
});

export type AppRouter = typeof appRouter; 