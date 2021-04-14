<script>
  import SmoothScroll from 'Demo/components/atoms/SmoothScroll';

  export let href = '';
</script>

<li>
  <SmoothScroll {href}>
    <slot />
  </SmoothScroll>
</li>
