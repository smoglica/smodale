<script>
  import SmoothScroll from 'Demo/components/atoms/SmoothScroll/SmoothScroll.js';

  let className = '';

  export let href = '';
  export let duration = 300;
  export let ariaCurrent = '';
  export { className as class };

  const onMount = (el) => new SmoothScroll(el);
</script>

{#if $$slots.default}
  <a
    {href}
    class={`js-smooth-scroll ${className}`}
    data-duration={duration}
    aria-current={ariaCurrent}
    use:onMount
  >
    <slot />
  </a>
{/if}
