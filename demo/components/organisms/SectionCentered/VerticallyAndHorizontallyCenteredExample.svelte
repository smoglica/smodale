<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick = () =>
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px',
          borderRadius: '4px',
          centered: true,
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show vertically and horizontally centered modal
</button>
