# CivisAI

A modern AI-powered business management platform built with Svelte and Fastify.

## Project Structure

This is a monorepo containing the following packages:

- `packages/frontend`: Svelte + TypeScript frontend application
- `packages/backend`: Fastify + TypeScript backend API

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables:
   ```bash
   # Copy example env files
   cp packages/frontend/.env.example packages/frontend/.env
   cp packages/backend/.env.example packages/backend/.env
   ```

3. Start development servers:
   ```bash
   # Start both frontend and backend
   pnpm dev
   
   # Or start them separately
   pnpm --filter @civisai/frontend dev
   pnpm --filter @civisai/backend dev
   ```

## Available Scripts

- `pnpm dev`: Start development servers for all packages
- `pnpm build`: Build all packages
- `pnpm test`: Run tests for all packages
- `pnpm lint`: Run linting for all packages
- `pnpm format`: Format all files with Prettier

## Development

### Frontend

The frontend is built with SvelteKit and includes:
- TypeScript support
- Responsive design system
- Dark purple/white/peach color scheme
- Component architecture
- Integration with Sentry and PostHog

### Backend

The backend is built with Fastify and includes:
- TypeScript support
- tRPC API layer
- Modular service architecture
- Integration with Sentry and PostHog
- Database integration with Drizzle ORM

## License

Private - All rights reserved 