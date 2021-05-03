<script>
  import smodale from 'smodale';
  import ModalWithModal from 'Demo/components/examples/ModalWithModal';

  const onClick = () =>
    smodale.show(ModalWithModal, null, {
      breakpoints: {
        '32rem': {
          maxWidth: 'var(--max-width-xxs)',
          margin: 'var(--component-padding)',
          borderRadius: 'var(--radius-md)',
          centered: true,
          scrollable: true,
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>Show first modal</button>
