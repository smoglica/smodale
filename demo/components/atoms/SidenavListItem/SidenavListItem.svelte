<script>
  import SmoothScroll from 'Demo/components/atoms/SmoothScroll';

  export let href = '';
  export let current = false;

  $: ariaCurrent = current ? 'page' : null;
</script>

<div class="sidenav-list-item margin-left-xxxxs margin-bottom-xxxxs">
  <SmoothScroll
    {href}
    {ariaCurrent}
    class="text-decoration-none radius-md padding-y-xxs padding-x-xxs block color-contrast-high"
    on:click
  >
    <slot />
  </SmoothScroll>
</div>

<style src="_index.scss"></style>
