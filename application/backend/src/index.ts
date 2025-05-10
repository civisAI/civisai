import Fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './trpc/router';
import { createContext } from './trpc/context';

const server = Fastify({
  logger: true,
});

// Register CORS
await server.register(cors, {
  origin: 'http://localhost:3000',
  credentials: true,
});

// Register tRPC
await server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

// Root route
server.get('/', async () => {
  return {
    message: 'Welcome to the API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      trpc: '/trpc',
      api: '/api',
    },
  };
});

// API route to match frontend proxy
server.get('/api', async () => {
  return {
    message: 'Backend API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  };
});

// Health check route
server.get('/health', async () => {
  return { status: 'ok' };
});

try {
  await server.listen({ port: 3001, host: '0.0.0.0' });
  console.log('Server is running on port 3001');
} catch (err) {
  server.log.error(err);
  process.exit(1);
} 