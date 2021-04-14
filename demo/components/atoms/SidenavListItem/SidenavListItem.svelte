<script>
  import SmoothScroll from 'Demo/components/atoms/SmoothScroll';

  export let href = '';
</script>

<li class="sidenav-list-item">
  <SmoothScroll
    {href}
    class="text-decoration-none radius-md padding-y-xxs padding-x-xxs block color-contrast-high"
  >
    <slot />
  </SmoothScroll>
</li>

<style src="_index.scss"></style>
