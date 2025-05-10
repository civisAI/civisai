import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import * as Sentry from '@sentry/node';
import { PostHog } from 'posthog-node';

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Initialize PostHog
const posthog = new PostHog(process.env.POSTHOG_API_KEY || '', {
  host: process.env.POSTHOG_HOST,
});

// Create Fastify instance
const app = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// Register plugins
await app.register(cors, {
  origin: true,
  credentials: true,
});

await app.register(jwt, {
  secret: process.env.JWT_SECRET || 'your-secret-key',
});

await app.register(swagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'CivisAI API',
      description: 'API documentation for CivisAI',
      version: '0.1.0',
    },
  },
  exposeRoute: true,
});

// Health check route
app.get('/health', async () => {
  return { status: 'ok' };
});

// Start server
try {
  await app.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' });
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
} 