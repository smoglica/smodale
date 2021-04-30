<script>
  import smodale from 'smodale';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';

  const onClick = () =>
    smodale.show(ModalWithButtons, null, {
      breakpoints: {
        '32rem': {
          centered: true,
          maxWidth: 'var(--max-width-xxs)',
          margin: 'var(--component-padding)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '7px 7px 20px 0 rgba(0, 0, 0, 0.3)',
        },
        '768px': {
          backdropColor: 'rgba(255, 255, 255, 0.6)',
          boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.3)',
          maxWidth: 'var(--max-width-xs)',
        },
        '80rem': {
          centered: false,
          margin: 'var(--component-padding) auto',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 0 20px 3px hsl(7, 87%, 57%, 0.3)',
          maxWidth: '48rem',
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show modal with custom breakpoints
</button>
