<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick = () =>
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '768px': {
          maxWidth: '500px',
          margin: '20px auto',
          borderRadius: '4px',
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show horizontally centered modal
</button>
