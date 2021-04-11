<script>
  import Modal from './Modal.svelte';
  import modals from '../store';
</script>

<div class="js-modals">
  {#each $modals.dynamic as modal (modal.props.name)}
    <Modal>
      <svelte:component this={modal.component} {...modal.componentProps} />
    </Modal>
  {/each}
</div>
