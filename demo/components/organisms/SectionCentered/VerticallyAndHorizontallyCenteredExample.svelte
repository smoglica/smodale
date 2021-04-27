<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick = () =>
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '32rem': {
          maxWidth: 'var(--max-width-xxs)',
          margin: 'var(--component-padding)',
          borderRadius: 'var(--radius-md)',
          centered: true,
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show vertically and horizontally centered modal
</button>
