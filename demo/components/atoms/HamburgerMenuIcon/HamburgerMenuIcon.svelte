<script>
  let className = '';

  export let ariaControls = '';
  export let ariaLabel = 'Toggle menu';
  export { className as class };
</script>

<button
  class="reset anim-menu-btn color-contrast-high js-tab-focus {className}"
  aria-label={ariaLabel}
  aria-controls={ariaControls}
  type="button"
>
  <i class="anim-menu-btn__icon anim-menu-btn__icon--close" aria-hidden="true" />
</button>

<style src="_index.scss"></style>
