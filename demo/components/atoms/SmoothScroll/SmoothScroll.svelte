<script>
  import SmoothScroll from 'Demo/components/atoms/SmoothScroll/SmoothScroll.js';

  export let href = '';
  export let duration = 300;

  const onMount = (el) => new SmoothScroll(el);
</script>

{#if $$slots.default}
  <a {href} class="js-smooth-scroll" data-duration={duration} use:onMount>
    <slot />
  </a>
{/if}
