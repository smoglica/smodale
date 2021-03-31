<script>
  export let clickOutsideToClose = false;
  export let escapeToClose = true;
</script>

<div class="modal">
  <div class="modal__dialog">
    <div
      class="modal__content"
      role="alertdialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <slot />
    </div>
  </div>
</div>
