<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let disabled = false;
  export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button
  {type}
  class="btn btn-{variant} btn-{size}"
  class:disabled
  {...$$restProps}
  on:click
>
  <slot />
</button>

<style>
  .btn {
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background-color: var(--color-peach);
    color: var(--color-dark-purple);
  }

  .btn-primary:hover:not(:disabled) {
    background-color: #ff9d8a;
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .btn-tertiary {
    background-color: transparent;
    color: var(--color-peach);
  }

  .btn-tertiary:hover:not(:disabled) {
    color: #ff9d8a;
  }

  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .btn-medium {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .btn-large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
</style> 