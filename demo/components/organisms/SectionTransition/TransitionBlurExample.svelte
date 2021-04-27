<script>
  import { blur } from 'svelte/transition';
  import smodale from 'smodale';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';

  const onClick = () =>
    smodale.show(ModalWithButtons, null, {
      transition: blur,
      transitionParams: { duration: 300 },
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
  Show modal with blur transtion
</button>
