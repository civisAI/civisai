<script lang="ts">
  import * as Sentry from '@sentry/svelte';
  import posthog from 'posthog-js';

  // Initialize PostHog
  if (typeof window !== 'undefined') {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY || '', {
      api_host: import.meta.env.VITE_POSTHOG_HOST,
    });
  }
</script>

<main>
  <div class="container">
    <h1 class="text-center mt-5">Welcome to CivisAI</h1>
    <p class="text-center mb-4">
      Your AI-powered business management platform
    </p>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background-color: var(--color-dark-purple);
    color: var(--color-white);
    padding: 2rem 0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
  }
</style> 