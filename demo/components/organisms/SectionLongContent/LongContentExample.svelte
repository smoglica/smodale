<script>
  import smodale from 'smodale';
  import ModalWithLongText from 'Demo/components/examples/ModalWithLongText';

  const onClick = () => {
    smodale.show(ModalWithLongText, null, {
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
  };
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>Show long content modal</button>
