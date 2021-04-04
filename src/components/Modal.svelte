<script>
  import store from '../store';

  export let clickOutsideToClose = false;
  export let escapeToClose = true;

  let modal;

  const { name } = $$props;

  $: visible = !!modal;

  store.subscribe((modals) => {
    modal = [...modals?.static, ...modals?.dynamic].find((m) => m?.props?.name === name);
  });
</script>

{#if visible}
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
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
  }

  .modal__dialog {
    position: relative;
    width: auto;
    height: 100%;
  }

  .modal__content,
  :global(.modal__content > *) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
