<script>
  import modal, { Modal } from '../src';

  const staticModalProps = {
    padding: '20px',
    backgroundColor: '#fff',
    backdropColor: 'rgba(0,0,0,0.6)',
    breakpoints: {
      '1200px': {
        maxWidth: '1140px',
      },
      '768px': {
        maxWidth: '800px',
      },
      '576px': {
        backgroundColor: 'var(--color-white)',
        maxWidth: '500px',
        margin: 'var(--component-padding)',
        height: 'auto',
        borderRadius: '4px',
        centered: true,
      },
    },
  };

  const showStaticModal = () => modal.show('static-modal');
  const hideStaticModal = () => modal.hide('static-modal');
</script>

<section class="margin-y-xl">
  <div class="container max-width-sm">
    <div class="margin-bottom-md text-component">
      <h1>Smodale</h1>
      <p class="text-md color-contrast-medium">
        A simple, light and highly customizable modal for Svelte
      </p>
    </div>
    <div class="flex flex-column flex-row@xs gap-xs">
      <button type="button" class="btn btn--primary" on:click={showStaticModal}>
        Show a static modal
      </button>
      <button type="button" class="btn btn--accent">Show a dynamic modal</button>
    </div>
  </div>
</section>

<Modal name="static-modal" {...staticModalProps}>
  <div class="text-component">
    <h2>Static modal</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
      vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
      reprehenderit reiciendis excepturi culpa!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
      vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
      reprehenderit reiciendis excepturi culpa!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
      vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
      reprehenderit reiciendis excepturi culpa!
    </p>
  </div>
  <div class="flex justify-end gap-xs margin-top-md">
    <button type="button" class="btn btn--subtle">Cancel</button>
    <button type="button" class="btn btn--primary" on:click={hideStaticModal}>Ok</button>
  </div>
</Modal>
