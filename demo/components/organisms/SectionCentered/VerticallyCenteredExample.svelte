<script>
  import smodale from 'smodale';
  import ModalWithCloseBtnInHeader from 'Demo/components/examples/ModalWithCloseBtnInHeader';

  const onClick = () =>
    smodale.show(ModalWithCloseBtnInHeader, null, {
      breakpoints: {
        '32rem': {
          maxWidth: 'var(--max-width-xxs)',
          margin: 'var(--component-padding) auto',
          borderRadius: 'var(--radius-md)',
        },
      },
    });
</script>

<button class="btn btn--accent" type="button" on:click={onClick}>
  Show vertically centered modal
</button>
