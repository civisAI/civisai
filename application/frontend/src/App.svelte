<!-- Deployment test comment - Attempt 2 -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Button from './components/Button.svelte';
  
  let message = 'Loading...';
  
  onMount(async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      message = data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
      message = 'Error connecting to backend';
    }
  });
</script>

<main>
  <div class="container">
    <h1>Welcome to CivisAI</h1>
    <p class="message">{message}</p>
    <div class="actions">
      <Button variant="primary" size="large">Get Started</Button>
      <Button variant="secondary" size="large">Learn More</Button>
    </div>
  </div>
</main>

<style>
  :global(:root) {
    /* Marketing site color scheme */
    --color-dark-purple: #2D1B69;
    --color-white: #FFFFFF;
    --color-peach: #FFB6A3;
    
    /* Additional colors */
    --color-gray-100: #F7FAFC;
    --color-gray-200: #EDF2F7;
    --color-gray-300: #E2E8F0;
    --color-gray-400: #CBD5E0;
    --color-gray-500: #A0AEC0;
    --color-gray-600: #718096;
    --color-gray-700: #4A5568;
    --color-gray-800: #2D3748;
    --color-gray-900: #1A202C;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-dark-purple);
    color: var(--color-white);
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .container {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--color-white);
  }

  .message {
    font-size: 1.25rem;
    color: var(--color-peach);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2.5rem;
    }

    .message {
      font-size: 1.1rem;
    }

    .actions {
      flex-direction: column;
    }
  }
</style> 