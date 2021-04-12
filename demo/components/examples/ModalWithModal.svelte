<script>
  import Modal from '../../../src/components/Modal.svelte';
  import ModalWithTextOnly from './ModalWithTextOnly.svelte';
  import modal from '../../../src';

  const onClick = () => modal.show('modal-with-text');
  const modalProps = {
    padding: 'var(--component-padding)',
    breakpoints: {
      '32rem': {
        borderRadius: 'var(--radius-md)',
        margin: 'var(--component-padding)',
        maxWidth: '500px',
      },
    },
  };
</script>

<div class="text-component">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis
    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae
    soluta neque, rerum eligendi laudantium maxime.
  </p>
  <button class="btn btn--primary" type="button" on:click={onClick}>Show nested modal</button>
</div>

<Modal name="modal-with-text" {...modalProps}>
  <ModalWithTextOnly />
</Modal>
