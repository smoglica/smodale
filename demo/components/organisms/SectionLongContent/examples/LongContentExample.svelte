<script>
  import smodale from 'smodale';
  import ModalWithLongText from 'Demo/components/examples/ModalWithLongText';

  const onClick = () => {
    smodale.show(ModalWithLongText, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px',
          borderRadius: '4px',
          centered: true,
          scrollable: true,
        },
      },
    });
  };
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>Show long content modal</button>
