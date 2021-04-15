<script context="module">
  import { writable } from 'svelte/store';

  export const currentSectionId = writable();
</script>

<script>
  const onMount = () => {};
</script>

<div use:onMount>
  <slot />
</div>
