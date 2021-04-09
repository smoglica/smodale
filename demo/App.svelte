<script>
  import Notifications from 'svelte-notifications';
  import Notification from './components/Notification.svelte';
  import { notifySuccess, notify } from './lib/notifier';
  import modal, { Modal } from '../src';

  const staticModalProps = {
    padding: 'var(--component-padding)',
    backgroundColor: 'var(--color-white)',
    backdropColor: 'rgba(0,0,0,0.6)',
    breakpoints: {
      '32rem': {
        maxWidth: '500px',
        margin: 'var(--component-padding)',
        borderRadius: '4px',
        height: 'auto',
        scrollable: true,
        centered: true,
        zIndex: 100,
      },
      '48rem': {
        maxWidth: '800px',
      },
    },
  };

  const showStaticModal = () =>
    modal
      .show('static-modal')
      .then(() => notifySuccess('Hide: Confirmed'))
      .catch((data) => notify(`Cancel${data ? `: <code>${data}</code>` : ''}`));
  const hideStaticModal = () => modal.hide('static-modal');
  const cancelStaticModal = () => modal.cancel('static-modal');
  const onStaticModalOpened = () => notifySuccess('Event: <code>opened</code>');
  const onStaticModalClosed = () => notifySuccess('Event: <code>closed</code>');
</script>

<Notifications item={Notification}>
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

  <Modal
    name="static-modal"
    {...staticModalProps}
    on:opened={onStaticModalOpened}
    on:closed={onStaticModalClosed}
  >
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
      <button type="button" class="btn btn--subtle" on:click={cancelStaticModal}>Cancel</button>
      <button type="button" class="btn btn--primary" on:click={hideStaticModal}>Confirm</button>
    </div>
  </Modal>
</Notifications>

<style>
  :root {
    --font-primary: 'Inter', system-ui, sans-serif;
  }

  :global(code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New,
      monospace;
    font-weight: 600;
  }

  :global(code::before),
  :global(code::after) {
    content: '`';
  }

  :global([class*='default-position-style-']) {
    width: 100% !important;
    z-index: 100;
  }

  @media (min-width: 32rem) {
    :global([class*='default-position-style-']) {
      width: auto !important;
      max-width: 500px;
    }
  }
</style>
