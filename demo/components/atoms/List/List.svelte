<script>
  export let variant = 'ul';
</script>

<ul class="list" class:list--ul={variant === 'ul'}>
  <slot />
</ul>

<style src="_index.scss" global></style>
