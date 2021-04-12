<script>
  import Modal from './Modal.svelte';
  import modals from '../store';
</script>

<div class="js-modals">
  {#each $modals?.dynamic as modal (modal?.props?.name)}
    <Modal {...modal?.props}>
      <svelte:component this={modal?.component} />
    </Modal>
  {/each}
</div>
