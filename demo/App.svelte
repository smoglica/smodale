<script>
  import modal, { Modal } from '../src';

  const breakpoints = {
    '1024px': {
      backgroundColor: 'yellow',
      maxWidth: '1200px',
    },
    '375px': {
      backgroundColor: 'purple',
      maxWidth: '510px',
      borderRadius: '4px',
    },
    '768px': {
      backgroundColor: 'red',
      maxWidth: '610px',
    },
    '320px': {
      backgroundColor: 'green',
      maxWidth: '400px',
      margin: '30px',
      height: 'auto',
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

<Modal name="static-modal" {breakpoints} backdropColor="rgba(0,0,0,0.6)" backgroundColor="#FFF">
  <div class="padding-component">
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
  </div>
</Modal>
