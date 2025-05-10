<script lang="ts">
  import '../app.css';
</script>

<div class="app">
  <slot />
</div>

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
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style> 