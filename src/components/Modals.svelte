<script>
  import Modal from './Modal.svelte';
  import modals from '../store';
</script>

<div class="js-modals">
  {#each $modals.dynamic as modal (modal.props.name)}
    <Modal
      {...modal.props}
      on:opened={modal.events && modal.events.opened}
      on:closed={modal.events && modal.events.closed}
    >
      <svelte:component this={modal.component} {...modal.componentProps} />
    </Modal>
  {/each}
</div>
