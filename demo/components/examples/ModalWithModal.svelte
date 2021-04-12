<script>
  import ModalWithTextOnly from './ModalWithTextOnly.svelte';
  import smodale from '../../../src';

  const onClick = () => smodale.show(ModalWithTextOnly, null, null, {
    padding: 'var(--component-padding)',
    backdropColor: 'transparent',
    breakpoints: {
      '32rem': {
        borderRadius: 'var(--radius-md)',
        margin: 'var(--component-padding)',
        maxWidth: '500px',
        centered: true,
        scrollable: true,
      },
      '48rem': {
        maxWidth: '800px',
      },
    },
  });
</script>

<div class="text-component">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis
    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae
    soluta neque, rerum eligendi laudantium maxime.
  </p>
  <button class="btn btn--primary" type="button" on:click={onClick}>Show nested modal</button>
</div>
